export const swaggerDetails = (title: string, security: boolean = false, description?: string) => {
  return {
    summary: title.toWellFormed(),
    description: description,
    security: security ? [{ JwtAuth: [] }] : undefined
  };
};
