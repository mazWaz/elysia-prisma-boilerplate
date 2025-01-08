export const sessionDerive = async ({ bearer, elysia_jwt }: any) => {
  const tokenUser = await elysia_jwt.verify(bearer);

  if (!tokenUser) {
    return { user: null, session: null };
  }

  return { user: tokenUser, session: null };
};
