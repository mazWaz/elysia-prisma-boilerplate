import { t } from 'elysia';

export const userQueriesDTO = {
  isEmailVerified: t.Optional(t.BooleanString()),
  address: t.Optional(t.BooleanString({ default: false }))
};
