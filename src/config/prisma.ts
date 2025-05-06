import { PrismaClient } from './prisma-client';
import { t } from 'elysia';

export const db = new PrismaClient();

export interface SearchOptions {
  page?: number;
  limit?: number;
  sortBy?: { field: string; order?: 'asc' | 'desc' };
  search?: {
    field: string;
    value: string;
    operator?: 'contains' | 'equals' | 'lt' | 'lte' | 'gt' | 'gte';
  };
  include?: Record<string, boolean | { select?: Record<string, boolean> }>;
}

const parseValue = (value: string): string | number | boolean => {
  if (/^(true|false)$/i.test(value)) {
    return value.toLowerCase() === 'true';
  }
  const num = Number(value);
  return isNaN(num) ? value : num;
};

export const prismaSearch = async <T extends keyof PrismaClient>(
  model: T,
  options: SearchOptions
) => {
  const { sortBy, limit = 25, page = 1, search, include } = options;

  const skip = limit * (page - 1);

  // Initialize the where clause
  let where: any = {};

  if (search?.field && search?.value) {
    const { field, value, operator } = search;

    // Parse the string value to its probable type
    const parsedValue = parseValue(value);

    // Determine the default operator based on the parsed value's type
    let effectiveOperator: string;
    if (typeof parsedValue === 'string') {
      effectiveOperator = operator || 'contains';
    } else if (typeof parsedValue === 'number' || typeof parsedValue === 'boolean') {
      effectiveOperator = operator || 'equals';
    } else {
      effectiveOperator = operator || 'equals';
    }

    // Construct the filter based on the parsed value's type
    if (typeof parsedValue === 'string') {
      where[field] = {
        [effectiveOperator]: parsedValue,
        ...(effectiveOperator === 'contains' && { mode: 'insensitive' })
      };
    } else if (typeof parsedValue === 'number' || typeof parsedValue === 'boolean') {
      where[field] = {
        [effectiveOperator]: parsedValue
      };
    } else {
      // Fallback to equals if type is unrecognized
      where[field] = {
        equals: parsedValue
      };
    }
  }

  // Fetch the total count matching the where clause
  const total = await (db as any)[model].count({
    where
  });

  // Fetch the data with pagination, sorting, and filtering
  const data = await (db as any)[model].findMany({
    skip,
    take: limit,
    include,
    orderBy: sortBy ? { [sortBy.field]: sortBy.order ?? 'asc' } : undefined,
    where
  });

  return {
    total,
    count: data.length,
    page,
    data
  };
};

export const paginationOptions: any = {
  page: t.Optional(t.Number()),
  limit: t.Optional(t.Number({ default: 25 })),
  sortBy: t.Optional(t.String({})),
  sortOrder: t.Optional(t.String({ default: 'asc' })),
  searchField: t.Optional(t.String({ description: 'database column to search' })),
  search: t.Optional(t.String({ description: 'Keyword to search for' }))
};
