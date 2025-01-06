import { catchAsync } from '../../utils/catchAsync';
import { HttpStatusEnum } from '../../utils/httpStatusCode';

export class AuthController {
  constructor() {}
  root(): string {
    return 'Nothing to see here :)';
  }

  login = catchAsync(
    async ({
      set,
      request: { headers },
      body,
      elysia_jwt,
      authMethod,
      cookie: { lucia_auth_cookie },
      session
    }: any) => {
      const { email, password, rememberme } = body;
      set.status = HttpStatusEnum.HTTP_200_OK;

      return {
        data: 'userExists',
        message: 'Successfully logged in',
        note: ''
      };
    }
  );
}
