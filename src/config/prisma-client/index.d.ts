
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cars
 * 
 */
export type Cars = $Result.DefaultSelection<Prisma.$CarsPayload>
/**
 * Model Departments
 * 
 */
export type Departments = $Result.DefaultSelection<Prisma.$DepartmentsPayload>
/**
 * Model Locations
 * 
 */
export type Locations = $Result.DefaultSelection<Prisma.$LocationsPayload>
/**
 * Model reg_districts
 * 
 */
export type reg_districts = $Result.DefaultSelection<Prisma.$reg_districtsPayload>
/**
 * Model reg_provinces
 * 
 */
export type reg_provinces = $Result.DefaultSelection<Prisma.$reg_provincesPayload>
/**
 * Model reg_regencies
 * 
 */
export type reg_regencies = $Result.DefaultSelection<Prisma.$reg_regenciesPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model UserAddress
 * 
 */
export type UserAddress = $Result.DefaultSelection<Prisma.$UserAddressPayload>
/**
 * Model UserCars
 * 
 */
export type UserCars = $Result.DefaultSelection<Prisma.$UserCarsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  POLRI: 'POLRI',
  POLDA: 'POLDA',
  POLRES: 'POLRES',
  POLSEK: 'POLSEK'
};

export type Category = (typeof Category)[keyof typeof Category]


export const TokenType: {
  ACCESS: 'ACCESS',
  REFRESH: 'REFRESH',
  RESET_PASSWORD: 'RESET_PASSWORD',
  VERIFY_EMAIL: 'VERIFY_EMAIL'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cars
 * const cars = await prisma.cars.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cars
   * const cars = await prisma.cars.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cars`: Exposes CRUD operations for the **Cars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.cars.findMany()
    * ```
    */
  get cars(): Prisma.CarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departments`: Exposes CRUD operations for the **Departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.DepartmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locations`: Exposes CRUD operations for the **Locations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.locations.findMany()
    * ```
    */
  get locations(): Prisma.LocationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reg_districts`: Exposes CRUD operations for the **reg_districts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reg_districts
    * const reg_districts = await prisma.reg_districts.findMany()
    * ```
    */
  get reg_districts(): Prisma.reg_districtsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reg_provinces`: Exposes CRUD operations for the **reg_provinces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reg_provinces
    * const reg_provinces = await prisma.reg_provinces.findMany()
    * ```
    */
  get reg_provinces(): Prisma.reg_provincesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reg_regencies`: Exposes CRUD operations for the **reg_regencies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reg_regencies
    * const reg_regencies = await prisma.reg_regencies.findMany()
    * ```
    */
  get reg_regencies(): Prisma.reg_regenciesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAddress`: Exposes CRUD operations for the **UserAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAddresses
    * const userAddresses = await prisma.userAddress.findMany()
    * ```
    */
  get userAddress(): Prisma.UserAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCars`: Exposes CRUD operations for the **UserCars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCars
    * const userCars = await prisma.userCars.findMany()
    * ```
    */
  get userCars(): Prisma.UserCarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cars: 'Cars',
    Departments: 'Departments',
    Locations: 'Locations',
    reg_districts: 'reg_districts',
    reg_provinces: 'reg_provinces',
    reg_regencies: 'reg_regencies',
    Roles: 'Roles',
    Token: 'Token',
    UserAddress: 'UserAddress',
    UserCars: 'UserCars',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cars" | "departments" | "locations" | "reg_districts" | "reg_provinces" | "reg_regencies" | "roles" | "token" | "userAddress" | "userCars" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cars: {
        payload: Prisma.$CarsPayload<ExtArgs>
        fields: Prisma.CarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          findFirst: {
            args: Prisma.CarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          findMany: {
            args: Prisma.CarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          create: {
            args: Prisma.CarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          createMany: {
            args: Prisma.CarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          delete: {
            args: Prisma.CarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          update: {
            args: Prisma.CarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          deleteMany: {
            args: Prisma.CarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          upsert: {
            args: Prisma.CarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          aggregate: {
            args: Prisma.CarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCars>
          }
          groupBy: {
            args: Prisma.CarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarsCountArgs<ExtArgs>
            result: $Utils.Optional<CarsCountAggregateOutputType> | number
          }
        }
      }
      Departments: {
        payload: Prisma.$DepartmentsPayload<ExtArgs>
        fields: Prisma.DepartmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findFirst: {
            args: Prisma.DepartmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findMany: {
            args: Prisma.DepartmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>[]
          }
          create: {
            args: Prisma.DepartmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          createMany: {
            args: Prisma.DepartmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>[]
          }
          delete: {
            args: Prisma.DepartmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          update: {
            args: Prisma.DepartmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartments>
          }
          groupBy: {
            args: Prisma.DepartmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentsCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsCountAggregateOutputType> | number
          }
        }
      }
      Locations: {
        payload: Prisma.$LocationsPayload<ExtArgs>
        fields: Prisma.LocationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          findFirst: {
            args: Prisma.LocationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          findMany: {
            args: Prisma.LocationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>[]
          }
          create: {
            args: Prisma.LocationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          createMany: {
            args: Prisma.LocationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>[]
          }
          delete: {
            args: Prisma.LocationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          update: {
            args: Prisma.LocationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          deleteMany: {
            args: Prisma.LocationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>[]
          }
          upsert: {
            args: Prisma.LocationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          aggregate: {
            args: Prisma.LocationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocations>
          }
          groupBy: {
            args: Prisma.LocationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationsCountArgs<ExtArgs>
            result: $Utils.Optional<LocationsCountAggregateOutputType> | number
          }
        }
      }
      reg_districts: {
        payload: Prisma.$reg_districtsPayload<ExtArgs>
        fields: Prisma.reg_districtsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reg_districtsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_districtsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reg_districtsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_districtsPayload>
          }
          findFirst: {
            args: Prisma.reg_districtsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_districtsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reg_districtsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_districtsPayload>
          }
          findMany: {
            args: Prisma.reg_districtsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_districtsPayload>[]
          }
          create: {
            args: Prisma.reg_districtsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_districtsPayload>
          }
          createMany: {
            args: Prisma.reg_districtsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reg_districtsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_districtsPayload>[]
          }
          delete: {
            args: Prisma.reg_districtsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_districtsPayload>
          }
          update: {
            args: Prisma.reg_districtsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_districtsPayload>
          }
          deleteMany: {
            args: Prisma.reg_districtsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reg_districtsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reg_districtsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_districtsPayload>[]
          }
          upsert: {
            args: Prisma.reg_districtsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_districtsPayload>
          }
          aggregate: {
            args: Prisma.Reg_districtsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReg_districts>
          }
          groupBy: {
            args: Prisma.reg_districtsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reg_districtsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reg_districtsCountArgs<ExtArgs>
            result: $Utils.Optional<Reg_districtsCountAggregateOutputType> | number
          }
        }
      }
      reg_provinces: {
        payload: Prisma.$reg_provincesPayload<ExtArgs>
        fields: Prisma.reg_provincesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reg_provincesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_provincesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reg_provincesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_provincesPayload>
          }
          findFirst: {
            args: Prisma.reg_provincesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_provincesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reg_provincesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_provincesPayload>
          }
          findMany: {
            args: Prisma.reg_provincesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_provincesPayload>[]
          }
          create: {
            args: Prisma.reg_provincesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_provincesPayload>
          }
          createMany: {
            args: Prisma.reg_provincesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reg_provincesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_provincesPayload>[]
          }
          delete: {
            args: Prisma.reg_provincesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_provincesPayload>
          }
          update: {
            args: Prisma.reg_provincesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_provincesPayload>
          }
          deleteMany: {
            args: Prisma.reg_provincesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reg_provincesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reg_provincesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_provincesPayload>[]
          }
          upsert: {
            args: Prisma.reg_provincesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_provincesPayload>
          }
          aggregate: {
            args: Prisma.Reg_provincesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReg_provinces>
          }
          groupBy: {
            args: Prisma.reg_provincesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reg_provincesGroupByOutputType>[]
          }
          count: {
            args: Prisma.reg_provincesCountArgs<ExtArgs>
            result: $Utils.Optional<Reg_provincesCountAggregateOutputType> | number
          }
        }
      }
      reg_regencies: {
        payload: Prisma.$reg_regenciesPayload<ExtArgs>
        fields: Prisma.reg_regenciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reg_regenciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_regenciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reg_regenciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_regenciesPayload>
          }
          findFirst: {
            args: Prisma.reg_regenciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_regenciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reg_regenciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_regenciesPayload>
          }
          findMany: {
            args: Prisma.reg_regenciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_regenciesPayload>[]
          }
          create: {
            args: Prisma.reg_regenciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_regenciesPayload>
          }
          createMany: {
            args: Prisma.reg_regenciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reg_regenciesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_regenciesPayload>[]
          }
          delete: {
            args: Prisma.reg_regenciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_regenciesPayload>
          }
          update: {
            args: Prisma.reg_regenciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_regenciesPayload>
          }
          deleteMany: {
            args: Prisma.reg_regenciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reg_regenciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reg_regenciesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_regenciesPayload>[]
          }
          upsert: {
            args: Prisma.reg_regenciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reg_regenciesPayload>
          }
          aggregate: {
            args: Prisma.Reg_regenciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReg_regencies>
          }
          groupBy: {
            args: Prisma.reg_regenciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reg_regenciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.reg_regenciesCountArgs<ExtArgs>
            result: $Utils.Optional<Reg_regenciesCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      UserAddress: {
        payload: Prisma.$UserAddressPayload<ExtArgs>
        fields: Prisma.UserAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          findFirst: {
            args: Prisma.UserAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          findMany: {
            args: Prisma.UserAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          create: {
            args: Prisma.UserAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          createMany: {
            args: Prisma.UserAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          delete: {
            args: Prisma.UserAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          update: {
            args: Prisma.UserAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          deleteMany: {
            args: Prisma.UserAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          upsert: {
            args: Prisma.UserAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          aggregate: {
            args: Prisma.UserAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAddress>
          }
          groupBy: {
            args: Prisma.UserAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAddressCountArgs<ExtArgs>
            result: $Utils.Optional<UserAddressCountAggregateOutputType> | number
          }
        }
      }
      UserCars: {
        payload: Prisma.$UserCarsPayload<ExtArgs>
        fields: Prisma.UserCarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCarsPayload>
          }
          findFirst: {
            args: Prisma.UserCarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCarsPayload>
          }
          findMany: {
            args: Prisma.UserCarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCarsPayload>[]
          }
          create: {
            args: Prisma.UserCarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCarsPayload>
          }
          createMany: {
            args: Prisma.UserCarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCarsPayload>[]
          }
          delete: {
            args: Prisma.UserCarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCarsPayload>
          }
          update: {
            args: Prisma.UserCarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCarsPayload>
          }
          deleteMany: {
            args: Prisma.UserCarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCarsPayload>[]
          }
          upsert: {
            args: Prisma.UserCarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCarsPayload>
          }
          aggregate: {
            args: Prisma.UserCarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCars>
          }
          groupBy: {
            args: Prisma.UserCarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCarsCountArgs<ExtArgs>
            result: $Utils.Optional<UserCarsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cars?: CarsOmit
    departments?: DepartmentsOmit
    locations?: LocationsOmit
    reg_districts?: reg_districtsOmit
    reg_provinces?: reg_provincesOmit
    reg_regencies?: reg_regenciesOmit
    roles?: RolesOmit
    token?: TokenOmit
    userAddress?: UserAddressOmit
    userCars?: UserCarsOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DepartmentsCountOutputType
   */

  export type DepartmentsCountOutputType = {
    Users: number
    Cars: number
  }

  export type DepartmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | DepartmentsCountOutputTypeCountUsersArgs
    Cars?: boolean | DepartmentsCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentsCountOutputType
     */
    select?: DepartmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
  }


  /**
   * Count Type Reg_provincesCountOutputType
   */

  export type Reg_provincesCountOutputType = {
    Regency: number
  }

  export type Reg_provincesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Regency?: boolean | Reg_provincesCountOutputTypeCountRegencyArgs
  }

  // Custom InputTypes
  /**
   * Reg_provincesCountOutputType without action
   */
  export type Reg_provincesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reg_provincesCountOutputType
     */
    select?: Reg_provincesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Reg_provincesCountOutputType without action
   */
  export type Reg_provincesCountOutputTypeCountRegencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reg_regenciesWhereInput
  }


  /**
   * Count Type Reg_regenciesCountOutputType
   */

  export type Reg_regenciesCountOutputType = {
    District: number
  }

  export type Reg_regenciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    District?: boolean | Reg_regenciesCountOutputTypeCountDistrictArgs
  }

  // Custom InputTypes
  /**
   * Reg_regenciesCountOutputType without action
   */
  export type Reg_regenciesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reg_regenciesCountOutputType
     */
    select?: Reg_regenciesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Reg_regenciesCountOutputType without action
   */
  export type Reg_regenciesCountOutputTypeCountDistrictArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reg_districtsWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    Users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type UserCarsCountOutputType
   */

  export type UserCarsCountOutputType = {
    location: number
  }

  export type UserCarsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | UserCarsCountOutputTypeCountLocationArgs
  }

  // Custom InputTypes
  /**
   * UserCarsCountOutputType without action
   */
  export type UserCarsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCarsCountOutputType
     */
    select?: UserCarsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCarsCountOutputType without action
   */
  export type UserCarsCountOutputTypeCountLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    tokens: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UsersCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cars
   */

  export type AggregateCars = {
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  export type CarsAvgAggregateOutputType = {
    release_year: number | null
  }

  export type CarsSumAggregateOutputType = {
    release_year: number | null
  }

  export type CarsMinAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    release_year: number | null
    plate_number: string | null
    status: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    release_year: number | null
    plate_number: string | null
    status: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarsCountAggregateOutputType = {
    id: number
    name: number
    brand: number
    release_year: number
    plate_number: number
    status: number
    departmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarsAvgAggregateInputType = {
    release_year?: true
  }

  export type CarsSumAggregateInputType = {
    release_year?: true
  }

  export type CarsMinAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    release_year?: true
    plate_number?: true
    status?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarsMaxAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    release_year?: true
    plate_number?: true
    status?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarsCountAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    release_year?: true
    plate_number?: true
    status?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to aggregate.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarsMaxAggregateInputType
  }

  export type GetCarsAggregateType<T extends CarsAggregateArgs> = {
        [P in keyof T & keyof AggregateCars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCars[P]>
      : GetScalarType<T[P], AggregateCars[P]>
  }




  export type CarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithAggregationInput | CarsOrderByWithAggregationInput[]
    by: CarsScalarFieldEnum[] | CarsScalarFieldEnum
    having?: CarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarsCountAggregateInputType | true
    _avg?: CarsAvgAggregateInputType
    _sum?: CarsSumAggregateInputType
    _min?: CarsMinAggregateInputType
    _max?: CarsMaxAggregateInputType
  }

  export type CarsGroupByOutputType = {
    id: string
    name: string
    brand: string
    release_year: number
    plate_number: string
    status: string
    departmentId: string
    createdAt: Date
    updatedAt: Date
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  type GetCarsGroupByPayload<T extends CarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarsGroupByOutputType[P]>
            : GetScalarType<T[P], CarsGroupByOutputType[P]>
        }
      >
    >


  export type CarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    release_year?: boolean
    plate_number?: boolean
    status?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user_car?: boolean | Cars$user_carArgs<ExtArgs>
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    release_year?: boolean
    plate_number?: boolean
    status?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    release_year?: boolean
    plate_number?: boolean
    status?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectScalar = {
    id?: boolean
    name?: boolean
    brand?: boolean
    release_year?: boolean
    plate_number?: boolean
    status?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brand" | "release_year" | "plate_number" | "status" | "departmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["cars"]>
  export type CarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_car?: boolean | Cars$user_carArgs<ExtArgs>
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }
  export type CarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }
  export type CarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }

  export type $CarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cars"
    objects: {
      user_car: Prisma.$UserCarsPayload<ExtArgs> | null
      department: Prisma.$DepartmentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      brand: string
      release_year: number
      plate_number: string
      status: string
      departmentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cars"]>
    composites: {}
  }

  type CarsGetPayload<S extends boolean | null | undefined | CarsDefaultArgs> = $Result.GetResult<Prisma.$CarsPayload, S>

  type CarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarsCountAggregateInputType | true
    }

  export interface CarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cars'], meta: { name: 'Cars' } }
    /**
     * Find zero or one Cars that matches the filter.
     * @param {CarsFindUniqueArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarsFindUniqueArgs>(args: SelectSubset<T, CarsFindUniqueArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarsFindUniqueOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarsFindUniqueOrThrowArgs>(args: SelectSubset<T, CarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindFirstArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarsFindFirstArgs>(args?: SelectSubset<T, CarsFindFirstArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindFirstOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarsFindFirstOrThrowArgs>(args?: SelectSubset<T, CarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.cars.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.cars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carsWithIdOnly = await prisma.cars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarsFindManyArgs>(args?: SelectSubset<T, CarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cars.
     * @param {CarsCreateArgs} args - Arguments to create a Cars.
     * @example
     * // Create one Cars
     * const Cars = await prisma.cars.create({
     *   data: {
     *     // ... data to create a Cars
     *   }
     * })
     * 
     */
    create<T extends CarsCreateArgs>(args: SelectSubset<T, CarsCreateArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarsCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const cars = await prisma.cars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarsCreateManyArgs>(args?: SelectSubset<T, CarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarsCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const cars = await prisma.cars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carsWithIdOnly = await prisma.cars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarsCreateManyAndReturnArgs>(args?: SelectSubset<T, CarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cars.
     * @param {CarsDeleteArgs} args - Arguments to delete one Cars.
     * @example
     * // Delete one Cars
     * const Cars = await prisma.cars.delete({
     *   where: {
     *     // ... filter to delete one Cars
     *   }
     * })
     * 
     */
    delete<T extends CarsDeleteArgs>(args: SelectSubset<T, CarsDeleteArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cars.
     * @param {CarsUpdateArgs} args - Arguments to update one Cars.
     * @example
     * // Update one Cars
     * const cars = await prisma.cars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarsUpdateArgs>(args: SelectSubset<T, CarsUpdateArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarsDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.cars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarsDeleteManyArgs>(args?: SelectSubset<T, CarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const cars = await prisma.cars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarsUpdateManyArgs>(args: SelectSubset<T, CarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarsUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const cars = await prisma.cars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carsWithIdOnly = await prisma.cars.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarsUpdateManyAndReturnArgs>(args: SelectSubset<T, CarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cars.
     * @param {CarsUpsertArgs} args - Arguments to update or create a Cars.
     * @example
     * // Update or create a Cars
     * const cars = await prisma.cars.upsert({
     *   create: {
     *     // ... data to create a Cars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cars we want to update
     *   }
     * })
     */
    upsert<T extends CarsUpsertArgs>(args: SelectSubset<T, CarsUpsertArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.cars.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarsCountArgs>(
      args?: Subset<T, CarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarsAggregateArgs>(args: Subset<T, CarsAggregateArgs>): Prisma.PrismaPromise<GetCarsAggregateType<T>>

    /**
     * Group by Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarsGroupByArgs['orderBy'] }
        : { orderBy?: CarsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cars model
   */
  readonly fields: CarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_car<T extends Cars$user_carArgs<ExtArgs> = {}>(args?: Subset<T, Cars$user_carArgs<ExtArgs>>): Prisma__UserCarsClient<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentsDefaultArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cars model
   */
  interface CarsFieldRefs {
    readonly id: FieldRef<"Cars", 'String'>
    readonly name: FieldRef<"Cars", 'String'>
    readonly brand: FieldRef<"Cars", 'String'>
    readonly release_year: FieldRef<"Cars", 'Int'>
    readonly plate_number: FieldRef<"Cars", 'String'>
    readonly status: FieldRef<"Cars", 'String'>
    readonly departmentId: FieldRef<"Cars", 'String'>
    readonly createdAt: FieldRef<"Cars", 'DateTime'>
    readonly updatedAt: FieldRef<"Cars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cars findUnique
   */
  export type CarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars findUniqueOrThrow
   */
  export type CarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars findFirst
   */
  export type CarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars findFirstOrThrow
   */
  export type CarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars findMany
   */
  export type CarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars create
   */
  export type CarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The data needed to create a Cars.
     */
    data: XOR<CarsCreateInput, CarsUncheckedCreateInput>
  }

  /**
   * Cars createMany
   */
  export type CarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarsCreateManyInput | CarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cars createManyAndReturn
   */
  export type CarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarsCreateManyInput | CarsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cars update
   */
  export type CarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The data needed to update a Cars.
     */
    data: XOR<CarsUpdateInput, CarsUncheckedUpdateInput>
    /**
     * Choose, which Cars to update.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars updateMany
   */
  export type CarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarsWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Cars updateManyAndReturn
   */
  export type CarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarsWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cars upsert
   */
  export type CarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The filter to search for the Cars to update in case it exists.
     */
    where: CarsWhereUniqueInput
    /**
     * In case the Cars found by the `where` argument doesn't exist, create a new Cars with this data.
     */
    create: XOR<CarsCreateInput, CarsUncheckedCreateInput>
    /**
     * In case the Cars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarsUpdateInput, CarsUncheckedUpdateInput>
  }

  /**
   * Cars delete
   */
  export type CarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter which Cars to delete.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars deleteMany
   */
  export type CarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarsWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Cars.user_car
   */
  export type Cars$user_carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsInclude<ExtArgs> | null
    where?: UserCarsWhereInput
  }

  /**
   * Cars without action
   */
  export type CarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
  }


  /**
   * Model Departments
   */

  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    category: $Enums.Category | null
    province: string | null
    district: string | null
    subDistrict: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    category: $Enums.Category | null
    province: string | null
    district: string | null
    subDistrict: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentsCountAggregateOutputType = {
    id: number
    name: number
    address: number
    category: number
    province: number
    district: number
    subDistrict: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentsMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    category?: true
    province?: true
    district?: true
    subDistrict?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    category?: true
    province?: true
    district?: true
    subDistrict?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentsCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    category?: true
    province?: true
    district?: true
    subDistrict?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to aggregate.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type DepartmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentsWhereInput
    orderBy?: DepartmentsOrderByWithAggregationInput | DepartmentsOrderByWithAggregationInput[]
    by: DepartmentsScalarFieldEnum[] | DepartmentsScalarFieldEnum
    having?: DepartmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }

  export type DepartmentsGroupByOutputType = {
    id: string
    name: string
    address: string
    category: $Enums.Category
    province: string
    district: string
    subDistrict: string
    createdAt: Date
    updatedAt: Date
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends DepartmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    category?: boolean
    province?: boolean
    district?: boolean
    subDistrict?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | Departments$UsersArgs<ExtArgs>
    Cars?: boolean | Departments$CarsArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>

  export type DepartmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    category?: boolean
    province?: boolean
    district?: boolean
    subDistrict?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["departments"]>

  export type DepartmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    category?: boolean
    province?: boolean
    district?: boolean
    subDistrict?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["departments"]>

  export type DepartmentsSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    category?: boolean
    province?: boolean
    district?: boolean
    subDistrict?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "category" | "province" | "district" | "subDistrict" | "createdAt" | "updatedAt", ExtArgs["result"]["departments"]>
  export type DepartmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Departments$UsersArgs<ExtArgs>
    Cars?: boolean | Departments$CarsArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departments"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>[]
      Cars: Prisma.$CarsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      category: $Enums.Category
      province: string
      district: string
      subDistrict: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["departments"]>
    composites: {}
  }

  type DepartmentsGetPayload<S extends boolean | null | undefined | DepartmentsDefaultArgs> = $Result.GetResult<Prisma.$DepartmentsPayload, S>

  type DepartmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface DepartmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departments'], meta: { name: 'Departments' } }
    /**
     * Find zero or one Departments that matches the filter.
     * @param {DepartmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentsFindUniqueArgs>(args: SelectSubset<T, DepartmentsFindUniqueArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentsFindFirstArgs>(args?: SelectSubset<T, DepartmentsFindFirstArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentsWithIdOnly = await prisma.departments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentsFindManyArgs>(args?: SelectSubset<T, DepartmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departments.
     * @param {DepartmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
     */
    create<T extends DepartmentsCreateArgs>(args: SelectSubset<T, DepartmentsCreateArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentsCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentsCreateManyArgs>(args?: SelectSubset<T, DepartmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentsCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentsWithIdOnly = await prisma.departments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departments.
     * @param {DepartmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
     */
    delete<T extends DepartmentsDeleteArgs>(args: SelectSubset<T, DepartmentsDeleteArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departments.
     * @param {DepartmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentsUpdateArgs>(args: SelectSubset<T, DepartmentsUpdateArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentsDeleteManyArgs>(args?: SelectSubset<T, DepartmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentsUpdateManyArgs>(args: SelectSubset<T, DepartmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentsUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentsWithIdOnly = await prisma.departments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departments.
     * @param {DepartmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentsUpsertArgs>(args: SelectSubset<T, DepartmentsUpsertArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentsCountArgs>(
      args?: Subset<T, DepartmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentsGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departments model
   */
  readonly fields: DepartmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Departments$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Departments$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cars<T extends Departments$CarsArgs<ExtArgs> = {}>(args?: Subset<T, Departments$CarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Departments model
   */
  interface DepartmentsFieldRefs {
    readonly id: FieldRef<"Departments", 'String'>
    readonly name: FieldRef<"Departments", 'String'>
    readonly address: FieldRef<"Departments", 'String'>
    readonly category: FieldRef<"Departments", 'Category'>
    readonly province: FieldRef<"Departments", 'String'>
    readonly district: FieldRef<"Departments", 'String'>
    readonly subDistrict: FieldRef<"Departments", 'String'>
    readonly createdAt: FieldRef<"Departments", 'DateTime'>
    readonly updatedAt: FieldRef<"Departments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Departments findUnique
   */
  export type DepartmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments findUniqueOrThrow
   */
  export type DepartmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments findFirst
   */
  export type DepartmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments findFirstOrThrow
   */
  export type DepartmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments findMany
   */
  export type DepartmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments create
   */
  export type DepartmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Departments.
     */
    data: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
  }

  /**
   * Departments createMany
   */
  export type DepartmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentsCreateManyInput | DepartmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departments createManyAndReturn
   */
  export type DepartmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentsCreateManyInput | DepartmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departments update
   */
  export type DepartmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Departments.
     */
    data: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
    /**
     * Choose, which Departments to update.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments updateMany
   */
  export type DepartmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentsUpdateManyMutationInput, DepartmentsUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentsWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Departments updateManyAndReturn
   */
  export type DepartmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentsUpdateManyMutationInput, DepartmentsUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentsWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Departments upsert
   */
  export type DepartmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Departments to update in case it exists.
     */
    where: DepartmentsWhereUniqueInput
    /**
     * In case the Departments found by the `where` argument doesn't exist, create a new Departments with this data.
     */
    create: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
    /**
     * In case the Departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
  }

  /**
   * Departments delete
   */
  export type DepartmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter which Departments to delete.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments deleteMany
   */
  export type DepartmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentsWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Departments.Users
   */
  export type Departments$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Departments.Cars
   */
  export type Departments$CarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    cursor?: CarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Departments without action
   */
  export type DepartmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
  }


  /**
   * Model Locations
   */

  export type AggregateLocations = {
    _count: LocationsCountAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  export type LocationsMinAggregateOutputType = {
    id: string | null
    location: string | null
    user_carId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationsMaxAggregateOutputType = {
    id: string | null
    location: string | null
    user_carId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationsCountAggregateOutputType = {
    id: number
    location: number
    user_carId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationsMinAggregateInputType = {
    id?: true
    location?: true
    user_carId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationsMaxAggregateInputType = {
    id?: true
    location?: true
    user_carId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationsCountAggregateInputType = {
    id?: true
    location?: true
    user_carId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to aggregate.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationsMaxAggregateInputType
  }

  export type GetLocationsAggregateType<T extends LocationsAggregateArgs> = {
        [P in keyof T & keyof AggregateLocations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocations[P]>
      : GetScalarType<T[P], AggregateLocations[P]>
  }




  export type LocationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationsWhereInput
    orderBy?: LocationsOrderByWithAggregationInput | LocationsOrderByWithAggregationInput[]
    by: LocationsScalarFieldEnum[] | LocationsScalarFieldEnum
    having?: LocationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationsCountAggregateInputType | true
    _min?: LocationsMinAggregateInputType
    _max?: LocationsMaxAggregateInputType
  }

  export type LocationsGroupByOutputType = {
    id: string
    location: string
    user_carId: string
    createdAt: Date
    updatedAt: Date
    _count: LocationsCountAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  type GetLocationsGroupByPayload<T extends LocationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationsGroupByOutputType[P]>
            : GetScalarType<T[P], LocationsGroupByOutputType[P]>
        }
      >
    >


  export type LocationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    user_carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userCar?: boolean | UserCarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type LocationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    user_carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userCar?: boolean | UserCarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type LocationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    user_carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userCar?: boolean | UserCarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type LocationsSelectScalar = {
    id?: boolean
    location?: boolean
    user_carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "location" | "user_carId" | "createdAt" | "updatedAt", ExtArgs["result"]["locations"]>
  export type LocationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCar?: boolean | UserCarsDefaultArgs<ExtArgs>
  }
  export type LocationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCar?: boolean | UserCarsDefaultArgs<ExtArgs>
  }
  export type LocationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCar?: boolean | UserCarsDefaultArgs<ExtArgs>
  }

  export type $LocationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locations"
    objects: {
      userCar: Prisma.$UserCarsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      location: string
      user_carId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["locations"]>
    composites: {}
  }

  type LocationsGetPayload<S extends boolean | null | undefined | LocationsDefaultArgs> = $Result.GetResult<Prisma.$LocationsPayload, S>

  type LocationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationsCountAggregateInputType | true
    }

  export interface LocationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Locations'], meta: { name: 'Locations' } }
    /**
     * Find zero or one Locations that matches the filter.
     * @param {LocationsFindUniqueArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationsFindUniqueArgs>(args: SelectSubset<T, LocationsFindUniqueArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationsFindUniqueOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationsFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindFirstArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationsFindFirstArgs>(args?: SelectSubset<T, LocationsFindFirstArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindFirstOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationsFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.locations.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.locations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationsWithIdOnly = await prisma.locations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationsFindManyArgs>(args?: SelectSubset<T, LocationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locations.
     * @param {LocationsCreateArgs} args - Arguments to create a Locations.
     * @example
     * // Create one Locations
     * const Locations = await prisma.locations.create({
     *   data: {
     *     // ... data to create a Locations
     *   }
     * })
     * 
     */
    create<T extends LocationsCreateArgs>(args: SelectSubset<T, LocationsCreateArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationsCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationsCreateManyArgs>(args?: SelectSubset<T, LocationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationsCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationsWithIdOnly = await prisma.locations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationsCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Locations.
     * @param {LocationsDeleteArgs} args - Arguments to delete one Locations.
     * @example
     * // Delete one Locations
     * const Locations = await prisma.locations.delete({
     *   where: {
     *     // ... filter to delete one Locations
     *   }
     * })
     * 
     */
    delete<T extends LocationsDeleteArgs>(args: SelectSubset<T, LocationsDeleteArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locations.
     * @param {LocationsUpdateArgs} args - Arguments to update one Locations.
     * @example
     * // Update one Locations
     * const locations = await prisma.locations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationsUpdateArgs>(args: SelectSubset<T, LocationsUpdateArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationsDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.locations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationsDeleteManyArgs>(args?: SelectSubset<T, LocationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationsUpdateManyArgs>(args: SelectSubset<T, LocationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationsUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationsWithIdOnly = await prisma.locations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationsUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Locations.
     * @param {LocationsUpsertArgs} args - Arguments to update or create a Locations.
     * @example
     * // Update or create a Locations
     * const locations = await prisma.locations.upsert({
     *   create: {
     *     // ... data to create a Locations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locations we want to update
     *   }
     * })
     */
    upsert<T extends LocationsUpsertArgs>(args: SelectSubset<T, LocationsUpsertArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.locations.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationsCountArgs>(
      args?: Subset<T, LocationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationsAggregateArgs>(args: Subset<T, LocationsAggregateArgs>): Prisma.PrismaPromise<GetLocationsAggregateType<T>>

    /**
     * Group by Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationsGroupByArgs['orderBy'] }
        : { orderBy?: LocationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Locations model
   */
  readonly fields: LocationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Locations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userCar<T extends UserCarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserCarsDefaultArgs<ExtArgs>>): Prisma__UserCarsClient<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Locations model
   */
  interface LocationsFieldRefs {
    readonly id: FieldRef<"Locations", 'String'>
    readonly location: FieldRef<"Locations", 'String'>
    readonly user_carId: FieldRef<"Locations", 'String'>
    readonly createdAt: FieldRef<"Locations", 'DateTime'>
    readonly updatedAt: FieldRef<"Locations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Locations findUnique
   */
  export type LocationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations findUniqueOrThrow
   */
  export type LocationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations findFirst
   */
  export type LocationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations findFirstOrThrow
   */
  export type LocationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations findMany
   */
  export type LocationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations create
   */
  export type LocationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Locations.
     */
    data: XOR<LocationsCreateInput, LocationsUncheckedCreateInput>
  }

  /**
   * Locations createMany
   */
  export type LocationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationsCreateManyInput | LocationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Locations createManyAndReturn
   */
  export type LocationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationsCreateManyInput | LocationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locations update
   */
  export type LocationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Locations.
     */
    data: XOR<LocationsUpdateInput, LocationsUncheckedUpdateInput>
    /**
     * Choose, which Locations to update.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations updateMany
   */
  export type LocationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationsUpdateManyMutationInput, LocationsUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Locations updateManyAndReturn
   */
  export type LocationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationsUpdateManyMutationInput, LocationsUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locations upsert
   */
  export type LocationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Locations to update in case it exists.
     */
    where: LocationsWhereUniqueInput
    /**
     * In case the Locations found by the `where` argument doesn't exist, create a new Locations with this data.
     */
    create: XOR<LocationsCreateInput, LocationsUncheckedCreateInput>
    /**
     * In case the Locations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationsUpdateInput, LocationsUncheckedUpdateInput>
  }

  /**
   * Locations delete
   */
  export type LocationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter which Locations to delete.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations deleteMany
   */
  export type LocationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Locations without action
   */
  export type LocationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
  }


  /**
   * Model reg_districts
   */

  export type AggregateReg_districts = {
    _count: Reg_districtsCountAggregateOutputType | null
    _min: Reg_districtsMinAggregateOutputType | null
    _max: Reg_districtsMaxAggregateOutputType | null
  }

  export type Reg_districtsMinAggregateOutputType = {
    id: string | null
    regencyId: string | null
    name: string | null
  }

  export type Reg_districtsMaxAggregateOutputType = {
    id: string | null
    regencyId: string | null
    name: string | null
  }

  export type Reg_districtsCountAggregateOutputType = {
    id: number
    regencyId: number
    name: number
    _all: number
  }


  export type Reg_districtsMinAggregateInputType = {
    id?: true
    regencyId?: true
    name?: true
  }

  export type Reg_districtsMaxAggregateInputType = {
    id?: true
    regencyId?: true
    name?: true
  }

  export type Reg_districtsCountAggregateInputType = {
    id?: true
    regencyId?: true
    name?: true
    _all?: true
  }

  export type Reg_districtsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reg_districts to aggregate.
     */
    where?: reg_districtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reg_districts to fetch.
     */
    orderBy?: reg_districtsOrderByWithRelationInput | reg_districtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reg_districtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reg_districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reg_districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reg_districts
    **/
    _count?: true | Reg_districtsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reg_districtsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reg_districtsMaxAggregateInputType
  }

  export type GetReg_districtsAggregateType<T extends Reg_districtsAggregateArgs> = {
        [P in keyof T & keyof AggregateReg_districts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReg_districts[P]>
      : GetScalarType<T[P], AggregateReg_districts[P]>
  }




  export type reg_districtsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reg_districtsWhereInput
    orderBy?: reg_districtsOrderByWithAggregationInput | reg_districtsOrderByWithAggregationInput[]
    by: Reg_districtsScalarFieldEnum[] | Reg_districtsScalarFieldEnum
    having?: reg_districtsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reg_districtsCountAggregateInputType | true
    _min?: Reg_districtsMinAggregateInputType
    _max?: Reg_districtsMaxAggregateInputType
  }

  export type Reg_districtsGroupByOutputType = {
    id: string
    regencyId: string
    name: string
    _count: Reg_districtsCountAggregateOutputType | null
    _min: Reg_districtsMinAggregateOutputType | null
    _max: Reg_districtsMaxAggregateOutputType | null
  }

  type GetReg_districtsGroupByPayload<T extends reg_districtsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reg_districtsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reg_districtsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reg_districtsGroupByOutputType[P]>
            : GetScalarType<T[P], Reg_districtsGroupByOutputType[P]>
        }
      >
    >


  export type reg_districtsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regencyId?: boolean
    name?: boolean
    regency?: boolean | reg_regenciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reg_districts"]>

  export type reg_districtsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regencyId?: boolean
    name?: boolean
    regency?: boolean | reg_regenciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reg_districts"]>

  export type reg_districtsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regencyId?: boolean
    name?: boolean
    regency?: boolean | reg_regenciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reg_districts"]>

  export type reg_districtsSelectScalar = {
    id?: boolean
    regencyId?: boolean
    name?: boolean
  }

  export type reg_districtsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "regencyId" | "name", ExtArgs["result"]["reg_districts"]>
  export type reg_districtsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regency?: boolean | reg_regenciesDefaultArgs<ExtArgs>
  }
  export type reg_districtsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regency?: boolean | reg_regenciesDefaultArgs<ExtArgs>
  }
  export type reg_districtsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regency?: boolean | reg_regenciesDefaultArgs<ExtArgs>
  }

  export type $reg_districtsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reg_districts"
    objects: {
      regency: Prisma.$reg_regenciesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      regencyId: string
      name: string
    }, ExtArgs["result"]["reg_districts"]>
    composites: {}
  }

  type reg_districtsGetPayload<S extends boolean | null | undefined | reg_districtsDefaultArgs> = $Result.GetResult<Prisma.$reg_districtsPayload, S>

  type reg_districtsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reg_districtsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Reg_districtsCountAggregateInputType | true
    }

  export interface reg_districtsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reg_districts'], meta: { name: 'reg_districts' } }
    /**
     * Find zero or one Reg_districts that matches the filter.
     * @param {reg_districtsFindUniqueArgs} args - Arguments to find a Reg_districts
     * @example
     * // Get one Reg_districts
     * const reg_districts = await prisma.reg_districts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reg_districtsFindUniqueArgs>(args: SelectSubset<T, reg_districtsFindUniqueArgs<ExtArgs>>): Prisma__reg_districtsClient<$Result.GetResult<Prisma.$reg_districtsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reg_districts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reg_districtsFindUniqueOrThrowArgs} args - Arguments to find a Reg_districts
     * @example
     * // Get one Reg_districts
     * const reg_districts = await prisma.reg_districts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reg_districtsFindUniqueOrThrowArgs>(args: SelectSubset<T, reg_districtsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reg_districtsClient<$Result.GetResult<Prisma.$reg_districtsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reg_districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_districtsFindFirstArgs} args - Arguments to find a Reg_districts
     * @example
     * // Get one Reg_districts
     * const reg_districts = await prisma.reg_districts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reg_districtsFindFirstArgs>(args?: SelectSubset<T, reg_districtsFindFirstArgs<ExtArgs>>): Prisma__reg_districtsClient<$Result.GetResult<Prisma.$reg_districtsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reg_districts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_districtsFindFirstOrThrowArgs} args - Arguments to find a Reg_districts
     * @example
     * // Get one Reg_districts
     * const reg_districts = await prisma.reg_districts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reg_districtsFindFirstOrThrowArgs>(args?: SelectSubset<T, reg_districtsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reg_districtsClient<$Result.GetResult<Prisma.$reg_districtsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reg_districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_districtsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reg_districts
     * const reg_districts = await prisma.reg_districts.findMany()
     * 
     * // Get first 10 Reg_districts
     * const reg_districts = await prisma.reg_districts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reg_districtsWithIdOnly = await prisma.reg_districts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reg_districtsFindManyArgs>(args?: SelectSubset<T, reg_districtsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reg_districtsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reg_districts.
     * @param {reg_districtsCreateArgs} args - Arguments to create a Reg_districts.
     * @example
     * // Create one Reg_districts
     * const Reg_districts = await prisma.reg_districts.create({
     *   data: {
     *     // ... data to create a Reg_districts
     *   }
     * })
     * 
     */
    create<T extends reg_districtsCreateArgs>(args: SelectSubset<T, reg_districtsCreateArgs<ExtArgs>>): Prisma__reg_districtsClient<$Result.GetResult<Prisma.$reg_districtsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reg_districts.
     * @param {reg_districtsCreateManyArgs} args - Arguments to create many Reg_districts.
     * @example
     * // Create many Reg_districts
     * const reg_districts = await prisma.reg_districts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reg_districtsCreateManyArgs>(args?: SelectSubset<T, reg_districtsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reg_districts and returns the data saved in the database.
     * @param {reg_districtsCreateManyAndReturnArgs} args - Arguments to create many Reg_districts.
     * @example
     * // Create many Reg_districts
     * const reg_districts = await prisma.reg_districts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reg_districts and only return the `id`
     * const reg_districtsWithIdOnly = await prisma.reg_districts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reg_districtsCreateManyAndReturnArgs>(args?: SelectSubset<T, reg_districtsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reg_districtsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reg_districts.
     * @param {reg_districtsDeleteArgs} args - Arguments to delete one Reg_districts.
     * @example
     * // Delete one Reg_districts
     * const Reg_districts = await prisma.reg_districts.delete({
     *   where: {
     *     // ... filter to delete one Reg_districts
     *   }
     * })
     * 
     */
    delete<T extends reg_districtsDeleteArgs>(args: SelectSubset<T, reg_districtsDeleteArgs<ExtArgs>>): Prisma__reg_districtsClient<$Result.GetResult<Prisma.$reg_districtsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reg_districts.
     * @param {reg_districtsUpdateArgs} args - Arguments to update one Reg_districts.
     * @example
     * // Update one Reg_districts
     * const reg_districts = await prisma.reg_districts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reg_districtsUpdateArgs>(args: SelectSubset<T, reg_districtsUpdateArgs<ExtArgs>>): Prisma__reg_districtsClient<$Result.GetResult<Prisma.$reg_districtsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reg_districts.
     * @param {reg_districtsDeleteManyArgs} args - Arguments to filter Reg_districts to delete.
     * @example
     * // Delete a few Reg_districts
     * const { count } = await prisma.reg_districts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reg_districtsDeleteManyArgs>(args?: SelectSubset<T, reg_districtsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reg_districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_districtsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reg_districts
     * const reg_districts = await prisma.reg_districts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reg_districtsUpdateManyArgs>(args: SelectSubset<T, reg_districtsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reg_districts and returns the data updated in the database.
     * @param {reg_districtsUpdateManyAndReturnArgs} args - Arguments to update many Reg_districts.
     * @example
     * // Update many Reg_districts
     * const reg_districts = await prisma.reg_districts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reg_districts and only return the `id`
     * const reg_districtsWithIdOnly = await prisma.reg_districts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reg_districtsUpdateManyAndReturnArgs>(args: SelectSubset<T, reg_districtsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reg_districtsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reg_districts.
     * @param {reg_districtsUpsertArgs} args - Arguments to update or create a Reg_districts.
     * @example
     * // Update or create a Reg_districts
     * const reg_districts = await prisma.reg_districts.upsert({
     *   create: {
     *     // ... data to create a Reg_districts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reg_districts we want to update
     *   }
     * })
     */
    upsert<T extends reg_districtsUpsertArgs>(args: SelectSubset<T, reg_districtsUpsertArgs<ExtArgs>>): Prisma__reg_districtsClient<$Result.GetResult<Prisma.$reg_districtsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reg_districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_districtsCountArgs} args - Arguments to filter Reg_districts to count.
     * @example
     * // Count the number of Reg_districts
     * const count = await prisma.reg_districts.count({
     *   where: {
     *     // ... the filter for the Reg_districts we want to count
     *   }
     * })
    **/
    count<T extends reg_districtsCountArgs>(
      args?: Subset<T, reg_districtsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reg_districtsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reg_districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reg_districtsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reg_districtsAggregateArgs>(args: Subset<T, Reg_districtsAggregateArgs>): Prisma.PrismaPromise<GetReg_districtsAggregateType<T>>

    /**
     * Group by Reg_districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_districtsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reg_districtsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reg_districtsGroupByArgs['orderBy'] }
        : { orderBy?: reg_districtsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reg_districtsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReg_districtsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reg_districts model
   */
  readonly fields: reg_districtsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reg_districts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reg_districtsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    regency<T extends reg_regenciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reg_regenciesDefaultArgs<ExtArgs>>): Prisma__reg_regenciesClient<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reg_districts model
   */
  interface reg_districtsFieldRefs {
    readonly id: FieldRef<"reg_districts", 'String'>
    readonly regencyId: FieldRef<"reg_districts", 'String'>
    readonly name: FieldRef<"reg_districts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * reg_districts findUnique
   */
  export type reg_districtsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsInclude<ExtArgs> | null
    /**
     * Filter, which reg_districts to fetch.
     */
    where: reg_districtsWhereUniqueInput
  }

  /**
   * reg_districts findUniqueOrThrow
   */
  export type reg_districtsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsInclude<ExtArgs> | null
    /**
     * Filter, which reg_districts to fetch.
     */
    where: reg_districtsWhereUniqueInput
  }

  /**
   * reg_districts findFirst
   */
  export type reg_districtsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsInclude<ExtArgs> | null
    /**
     * Filter, which reg_districts to fetch.
     */
    where?: reg_districtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reg_districts to fetch.
     */
    orderBy?: reg_districtsOrderByWithRelationInput | reg_districtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reg_districts.
     */
    cursor?: reg_districtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reg_districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reg_districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reg_districts.
     */
    distinct?: Reg_districtsScalarFieldEnum | Reg_districtsScalarFieldEnum[]
  }

  /**
   * reg_districts findFirstOrThrow
   */
  export type reg_districtsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsInclude<ExtArgs> | null
    /**
     * Filter, which reg_districts to fetch.
     */
    where?: reg_districtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reg_districts to fetch.
     */
    orderBy?: reg_districtsOrderByWithRelationInput | reg_districtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reg_districts.
     */
    cursor?: reg_districtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reg_districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reg_districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reg_districts.
     */
    distinct?: Reg_districtsScalarFieldEnum | Reg_districtsScalarFieldEnum[]
  }

  /**
   * reg_districts findMany
   */
  export type reg_districtsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsInclude<ExtArgs> | null
    /**
     * Filter, which reg_districts to fetch.
     */
    where?: reg_districtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reg_districts to fetch.
     */
    orderBy?: reg_districtsOrderByWithRelationInput | reg_districtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reg_districts.
     */
    cursor?: reg_districtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reg_districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reg_districts.
     */
    skip?: number
    distinct?: Reg_districtsScalarFieldEnum | Reg_districtsScalarFieldEnum[]
  }

  /**
   * reg_districts create
   */
  export type reg_districtsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsInclude<ExtArgs> | null
    /**
     * The data needed to create a reg_districts.
     */
    data: XOR<reg_districtsCreateInput, reg_districtsUncheckedCreateInput>
  }

  /**
   * reg_districts createMany
   */
  export type reg_districtsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reg_districts.
     */
    data: reg_districtsCreateManyInput | reg_districtsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reg_districts createManyAndReturn
   */
  export type reg_districtsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * The data used to create many reg_districts.
     */
    data: reg_districtsCreateManyInput | reg_districtsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reg_districts update
   */
  export type reg_districtsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsInclude<ExtArgs> | null
    /**
     * The data needed to update a reg_districts.
     */
    data: XOR<reg_districtsUpdateInput, reg_districtsUncheckedUpdateInput>
    /**
     * Choose, which reg_districts to update.
     */
    where: reg_districtsWhereUniqueInput
  }

  /**
   * reg_districts updateMany
   */
  export type reg_districtsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reg_districts.
     */
    data: XOR<reg_districtsUpdateManyMutationInput, reg_districtsUncheckedUpdateManyInput>
    /**
     * Filter which reg_districts to update
     */
    where?: reg_districtsWhereInput
    /**
     * Limit how many reg_districts to update.
     */
    limit?: number
  }

  /**
   * reg_districts updateManyAndReturn
   */
  export type reg_districtsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * The data used to update reg_districts.
     */
    data: XOR<reg_districtsUpdateManyMutationInput, reg_districtsUncheckedUpdateManyInput>
    /**
     * Filter which reg_districts to update
     */
    where?: reg_districtsWhereInput
    /**
     * Limit how many reg_districts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reg_districts upsert
   */
  export type reg_districtsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsInclude<ExtArgs> | null
    /**
     * The filter to search for the reg_districts to update in case it exists.
     */
    where: reg_districtsWhereUniqueInput
    /**
     * In case the reg_districts found by the `where` argument doesn't exist, create a new reg_districts with this data.
     */
    create: XOR<reg_districtsCreateInput, reg_districtsUncheckedCreateInput>
    /**
     * In case the reg_districts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reg_districtsUpdateInput, reg_districtsUncheckedUpdateInput>
  }

  /**
   * reg_districts delete
   */
  export type reg_districtsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsInclude<ExtArgs> | null
    /**
     * Filter which reg_districts to delete.
     */
    where: reg_districtsWhereUniqueInput
  }

  /**
   * reg_districts deleteMany
   */
  export type reg_districtsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reg_districts to delete
     */
    where?: reg_districtsWhereInput
    /**
     * Limit how many reg_districts to delete.
     */
    limit?: number
  }

  /**
   * reg_districts without action
   */
  export type reg_districtsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsInclude<ExtArgs> | null
  }


  /**
   * Model reg_provinces
   */

  export type AggregateReg_provinces = {
    _count: Reg_provincesCountAggregateOutputType | null
    _min: Reg_provincesMinAggregateOutputType | null
    _max: Reg_provincesMaxAggregateOutputType | null
  }

  export type Reg_provincesMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type Reg_provincesMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type Reg_provincesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Reg_provincesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Reg_provincesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Reg_provincesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Reg_provincesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reg_provinces to aggregate.
     */
    where?: reg_provincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reg_provinces to fetch.
     */
    orderBy?: reg_provincesOrderByWithRelationInput | reg_provincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reg_provincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reg_provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reg_provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reg_provinces
    **/
    _count?: true | Reg_provincesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reg_provincesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reg_provincesMaxAggregateInputType
  }

  export type GetReg_provincesAggregateType<T extends Reg_provincesAggregateArgs> = {
        [P in keyof T & keyof AggregateReg_provinces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReg_provinces[P]>
      : GetScalarType<T[P], AggregateReg_provinces[P]>
  }




  export type reg_provincesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reg_provincesWhereInput
    orderBy?: reg_provincesOrderByWithAggregationInput | reg_provincesOrderByWithAggregationInput[]
    by: Reg_provincesScalarFieldEnum[] | Reg_provincesScalarFieldEnum
    having?: reg_provincesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reg_provincesCountAggregateInputType | true
    _min?: Reg_provincesMinAggregateInputType
    _max?: Reg_provincesMaxAggregateInputType
  }

  export type Reg_provincesGroupByOutputType = {
    id: string
    name: string
    _count: Reg_provincesCountAggregateOutputType | null
    _min: Reg_provincesMinAggregateOutputType | null
    _max: Reg_provincesMaxAggregateOutputType | null
  }

  type GetReg_provincesGroupByPayload<T extends reg_provincesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reg_provincesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reg_provincesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reg_provincesGroupByOutputType[P]>
            : GetScalarType<T[P], Reg_provincesGroupByOutputType[P]>
        }
      >
    >


  export type reg_provincesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Regency?: boolean | reg_provinces$RegencyArgs<ExtArgs>
    _count?: boolean | Reg_provincesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reg_provinces"]>

  export type reg_provincesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["reg_provinces"]>

  export type reg_provincesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["reg_provinces"]>

  export type reg_provincesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type reg_provincesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["reg_provinces"]>
  export type reg_provincesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Regency?: boolean | reg_provinces$RegencyArgs<ExtArgs>
    _count?: boolean | Reg_provincesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type reg_provincesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type reg_provincesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $reg_provincesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reg_provinces"
    objects: {
      Regency: Prisma.$reg_regenciesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["reg_provinces"]>
    composites: {}
  }

  type reg_provincesGetPayload<S extends boolean | null | undefined | reg_provincesDefaultArgs> = $Result.GetResult<Prisma.$reg_provincesPayload, S>

  type reg_provincesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reg_provincesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Reg_provincesCountAggregateInputType | true
    }

  export interface reg_provincesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reg_provinces'], meta: { name: 'reg_provinces' } }
    /**
     * Find zero or one Reg_provinces that matches the filter.
     * @param {reg_provincesFindUniqueArgs} args - Arguments to find a Reg_provinces
     * @example
     * // Get one Reg_provinces
     * const reg_provinces = await prisma.reg_provinces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reg_provincesFindUniqueArgs>(args: SelectSubset<T, reg_provincesFindUniqueArgs<ExtArgs>>): Prisma__reg_provincesClient<$Result.GetResult<Prisma.$reg_provincesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reg_provinces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reg_provincesFindUniqueOrThrowArgs} args - Arguments to find a Reg_provinces
     * @example
     * // Get one Reg_provinces
     * const reg_provinces = await prisma.reg_provinces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reg_provincesFindUniqueOrThrowArgs>(args: SelectSubset<T, reg_provincesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reg_provincesClient<$Result.GetResult<Prisma.$reg_provincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reg_provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_provincesFindFirstArgs} args - Arguments to find a Reg_provinces
     * @example
     * // Get one Reg_provinces
     * const reg_provinces = await prisma.reg_provinces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reg_provincesFindFirstArgs>(args?: SelectSubset<T, reg_provincesFindFirstArgs<ExtArgs>>): Prisma__reg_provincesClient<$Result.GetResult<Prisma.$reg_provincesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reg_provinces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_provincesFindFirstOrThrowArgs} args - Arguments to find a Reg_provinces
     * @example
     * // Get one Reg_provinces
     * const reg_provinces = await prisma.reg_provinces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reg_provincesFindFirstOrThrowArgs>(args?: SelectSubset<T, reg_provincesFindFirstOrThrowArgs<ExtArgs>>): Prisma__reg_provincesClient<$Result.GetResult<Prisma.$reg_provincesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reg_provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_provincesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reg_provinces
     * const reg_provinces = await prisma.reg_provinces.findMany()
     * 
     * // Get first 10 Reg_provinces
     * const reg_provinces = await prisma.reg_provinces.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reg_provincesWithIdOnly = await prisma.reg_provinces.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reg_provincesFindManyArgs>(args?: SelectSubset<T, reg_provincesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reg_provincesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reg_provinces.
     * @param {reg_provincesCreateArgs} args - Arguments to create a Reg_provinces.
     * @example
     * // Create one Reg_provinces
     * const Reg_provinces = await prisma.reg_provinces.create({
     *   data: {
     *     // ... data to create a Reg_provinces
     *   }
     * })
     * 
     */
    create<T extends reg_provincesCreateArgs>(args: SelectSubset<T, reg_provincesCreateArgs<ExtArgs>>): Prisma__reg_provincesClient<$Result.GetResult<Prisma.$reg_provincesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reg_provinces.
     * @param {reg_provincesCreateManyArgs} args - Arguments to create many Reg_provinces.
     * @example
     * // Create many Reg_provinces
     * const reg_provinces = await prisma.reg_provinces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reg_provincesCreateManyArgs>(args?: SelectSubset<T, reg_provincesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reg_provinces and returns the data saved in the database.
     * @param {reg_provincesCreateManyAndReturnArgs} args - Arguments to create many Reg_provinces.
     * @example
     * // Create many Reg_provinces
     * const reg_provinces = await prisma.reg_provinces.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reg_provinces and only return the `id`
     * const reg_provincesWithIdOnly = await prisma.reg_provinces.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reg_provincesCreateManyAndReturnArgs>(args?: SelectSubset<T, reg_provincesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reg_provincesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reg_provinces.
     * @param {reg_provincesDeleteArgs} args - Arguments to delete one Reg_provinces.
     * @example
     * // Delete one Reg_provinces
     * const Reg_provinces = await prisma.reg_provinces.delete({
     *   where: {
     *     // ... filter to delete one Reg_provinces
     *   }
     * })
     * 
     */
    delete<T extends reg_provincesDeleteArgs>(args: SelectSubset<T, reg_provincesDeleteArgs<ExtArgs>>): Prisma__reg_provincesClient<$Result.GetResult<Prisma.$reg_provincesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reg_provinces.
     * @param {reg_provincesUpdateArgs} args - Arguments to update one Reg_provinces.
     * @example
     * // Update one Reg_provinces
     * const reg_provinces = await prisma.reg_provinces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reg_provincesUpdateArgs>(args: SelectSubset<T, reg_provincesUpdateArgs<ExtArgs>>): Prisma__reg_provincesClient<$Result.GetResult<Prisma.$reg_provincesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reg_provinces.
     * @param {reg_provincesDeleteManyArgs} args - Arguments to filter Reg_provinces to delete.
     * @example
     * // Delete a few Reg_provinces
     * const { count } = await prisma.reg_provinces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reg_provincesDeleteManyArgs>(args?: SelectSubset<T, reg_provincesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reg_provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_provincesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reg_provinces
     * const reg_provinces = await prisma.reg_provinces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reg_provincesUpdateManyArgs>(args: SelectSubset<T, reg_provincesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reg_provinces and returns the data updated in the database.
     * @param {reg_provincesUpdateManyAndReturnArgs} args - Arguments to update many Reg_provinces.
     * @example
     * // Update many Reg_provinces
     * const reg_provinces = await prisma.reg_provinces.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reg_provinces and only return the `id`
     * const reg_provincesWithIdOnly = await prisma.reg_provinces.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reg_provincesUpdateManyAndReturnArgs>(args: SelectSubset<T, reg_provincesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reg_provincesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reg_provinces.
     * @param {reg_provincesUpsertArgs} args - Arguments to update or create a Reg_provinces.
     * @example
     * // Update or create a Reg_provinces
     * const reg_provinces = await prisma.reg_provinces.upsert({
     *   create: {
     *     // ... data to create a Reg_provinces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reg_provinces we want to update
     *   }
     * })
     */
    upsert<T extends reg_provincesUpsertArgs>(args: SelectSubset<T, reg_provincesUpsertArgs<ExtArgs>>): Prisma__reg_provincesClient<$Result.GetResult<Prisma.$reg_provincesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reg_provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_provincesCountArgs} args - Arguments to filter Reg_provinces to count.
     * @example
     * // Count the number of Reg_provinces
     * const count = await prisma.reg_provinces.count({
     *   where: {
     *     // ... the filter for the Reg_provinces we want to count
     *   }
     * })
    **/
    count<T extends reg_provincesCountArgs>(
      args?: Subset<T, reg_provincesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reg_provincesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reg_provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reg_provincesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reg_provincesAggregateArgs>(args: Subset<T, Reg_provincesAggregateArgs>): Prisma.PrismaPromise<GetReg_provincesAggregateType<T>>

    /**
     * Group by Reg_provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_provincesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reg_provincesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reg_provincesGroupByArgs['orderBy'] }
        : { orderBy?: reg_provincesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reg_provincesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReg_provincesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reg_provinces model
   */
  readonly fields: reg_provincesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reg_provinces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reg_provincesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Regency<T extends reg_provinces$RegencyArgs<ExtArgs> = {}>(args?: Subset<T, reg_provinces$RegencyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reg_provinces model
   */
  interface reg_provincesFieldRefs {
    readonly id: FieldRef<"reg_provinces", 'String'>
    readonly name: FieldRef<"reg_provinces", 'String'>
  }
    

  // Custom InputTypes
  /**
   * reg_provinces findUnique
   */
  export type reg_provincesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_provinces
     */
    select?: reg_provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_provinces
     */
    omit?: reg_provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_provincesInclude<ExtArgs> | null
    /**
     * Filter, which reg_provinces to fetch.
     */
    where: reg_provincesWhereUniqueInput
  }

  /**
   * reg_provinces findUniqueOrThrow
   */
  export type reg_provincesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_provinces
     */
    select?: reg_provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_provinces
     */
    omit?: reg_provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_provincesInclude<ExtArgs> | null
    /**
     * Filter, which reg_provinces to fetch.
     */
    where: reg_provincesWhereUniqueInput
  }

  /**
   * reg_provinces findFirst
   */
  export type reg_provincesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_provinces
     */
    select?: reg_provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_provinces
     */
    omit?: reg_provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_provincesInclude<ExtArgs> | null
    /**
     * Filter, which reg_provinces to fetch.
     */
    where?: reg_provincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reg_provinces to fetch.
     */
    orderBy?: reg_provincesOrderByWithRelationInput | reg_provincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reg_provinces.
     */
    cursor?: reg_provincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reg_provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reg_provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reg_provinces.
     */
    distinct?: Reg_provincesScalarFieldEnum | Reg_provincesScalarFieldEnum[]
  }

  /**
   * reg_provinces findFirstOrThrow
   */
  export type reg_provincesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_provinces
     */
    select?: reg_provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_provinces
     */
    omit?: reg_provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_provincesInclude<ExtArgs> | null
    /**
     * Filter, which reg_provinces to fetch.
     */
    where?: reg_provincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reg_provinces to fetch.
     */
    orderBy?: reg_provincesOrderByWithRelationInput | reg_provincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reg_provinces.
     */
    cursor?: reg_provincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reg_provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reg_provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reg_provinces.
     */
    distinct?: Reg_provincesScalarFieldEnum | Reg_provincesScalarFieldEnum[]
  }

  /**
   * reg_provinces findMany
   */
  export type reg_provincesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_provinces
     */
    select?: reg_provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_provinces
     */
    omit?: reg_provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_provincesInclude<ExtArgs> | null
    /**
     * Filter, which reg_provinces to fetch.
     */
    where?: reg_provincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reg_provinces to fetch.
     */
    orderBy?: reg_provincesOrderByWithRelationInput | reg_provincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reg_provinces.
     */
    cursor?: reg_provincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reg_provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reg_provinces.
     */
    skip?: number
    distinct?: Reg_provincesScalarFieldEnum | Reg_provincesScalarFieldEnum[]
  }

  /**
   * reg_provinces create
   */
  export type reg_provincesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_provinces
     */
    select?: reg_provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_provinces
     */
    omit?: reg_provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_provincesInclude<ExtArgs> | null
    /**
     * The data needed to create a reg_provinces.
     */
    data: XOR<reg_provincesCreateInput, reg_provincesUncheckedCreateInput>
  }

  /**
   * reg_provinces createMany
   */
  export type reg_provincesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reg_provinces.
     */
    data: reg_provincesCreateManyInput | reg_provincesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reg_provinces createManyAndReturn
   */
  export type reg_provincesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_provinces
     */
    select?: reg_provincesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reg_provinces
     */
    omit?: reg_provincesOmit<ExtArgs> | null
    /**
     * The data used to create many reg_provinces.
     */
    data: reg_provincesCreateManyInput | reg_provincesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reg_provinces update
   */
  export type reg_provincesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_provinces
     */
    select?: reg_provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_provinces
     */
    omit?: reg_provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_provincesInclude<ExtArgs> | null
    /**
     * The data needed to update a reg_provinces.
     */
    data: XOR<reg_provincesUpdateInput, reg_provincesUncheckedUpdateInput>
    /**
     * Choose, which reg_provinces to update.
     */
    where: reg_provincesWhereUniqueInput
  }

  /**
   * reg_provinces updateMany
   */
  export type reg_provincesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reg_provinces.
     */
    data: XOR<reg_provincesUpdateManyMutationInput, reg_provincesUncheckedUpdateManyInput>
    /**
     * Filter which reg_provinces to update
     */
    where?: reg_provincesWhereInput
    /**
     * Limit how many reg_provinces to update.
     */
    limit?: number
  }

  /**
   * reg_provinces updateManyAndReturn
   */
  export type reg_provincesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_provinces
     */
    select?: reg_provincesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reg_provinces
     */
    omit?: reg_provincesOmit<ExtArgs> | null
    /**
     * The data used to update reg_provinces.
     */
    data: XOR<reg_provincesUpdateManyMutationInput, reg_provincesUncheckedUpdateManyInput>
    /**
     * Filter which reg_provinces to update
     */
    where?: reg_provincesWhereInput
    /**
     * Limit how many reg_provinces to update.
     */
    limit?: number
  }

  /**
   * reg_provinces upsert
   */
  export type reg_provincesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_provinces
     */
    select?: reg_provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_provinces
     */
    omit?: reg_provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_provincesInclude<ExtArgs> | null
    /**
     * The filter to search for the reg_provinces to update in case it exists.
     */
    where: reg_provincesWhereUniqueInput
    /**
     * In case the reg_provinces found by the `where` argument doesn't exist, create a new reg_provinces with this data.
     */
    create: XOR<reg_provincesCreateInput, reg_provincesUncheckedCreateInput>
    /**
     * In case the reg_provinces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reg_provincesUpdateInput, reg_provincesUncheckedUpdateInput>
  }

  /**
   * reg_provinces delete
   */
  export type reg_provincesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_provinces
     */
    select?: reg_provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_provinces
     */
    omit?: reg_provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_provincesInclude<ExtArgs> | null
    /**
     * Filter which reg_provinces to delete.
     */
    where: reg_provincesWhereUniqueInput
  }

  /**
   * reg_provinces deleteMany
   */
  export type reg_provincesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reg_provinces to delete
     */
    where?: reg_provincesWhereInput
    /**
     * Limit how many reg_provinces to delete.
     */
    limit?: number
  }

  /**
   * reg_provinces.Regency
   */
  export type reg_provinces$RegencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesInclude<ExtArgs> | null
    where?: reg_regenciesWhereInput
    orderBy?: reg_regenciesOrderByWithRelationInput | reg_regenciesOrderByWithRelationInput[]
    cursor?: reg_regenciesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reg_regenciesScalarFieldEnum | Reg_regenciesScalarFieldEnum[]
  }

  /**
   * reg_provinces without action
   */
  export type reg_provincesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_provinces
     */
    select?: reg_provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_provinces
     */
    omit?: reg_provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_provincesInclude<ExtArgs> | null
  }


  /**
   * Model reg_regencies
   */

  export type AggregateReg_regencies = {
    _count: Reg_regenciesCountAggregateOutputType | null
    _min: Reg_regenciesMinAggregateOutputType | null
    _max: Reg_regenciesMaxAggregateOutputType | null
  }

  export type Reg_regenciesMinAggregateOutputType = {
    id: string | null
    provinceId: string | null
    name: string | null
  }

  export type Reg_regenciesMaxAggregateOutputType = {
    id: string | null
    provinceId: string | null
    name: string | null
  }

  export type Reg_regenciesCountAggregateOutputType = {
    id: number
    provinceId: number
    name: number
    _all: number
  }


  export type Reg_regenciesMinAggregateInputType = {
    id?: true
    provinceId?: true
    name?: true
  }

  export type Reg_regenciesMaxAggregateInputType = {
    id?: true
    provinceId?: true
    name?: true
  }

  export type Reg_regenciesCountAggregateInputType = {
    id?: true
    provinceId?: true
    name?: true
    _all?: true
  }

  export type Reg_regenciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reg_regencies to aggregate.
     */
    where?: reg_regenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reg_regencies to fetch.
     */
    orderBy?: reg_regenciesOrderByWithRelationInput | reg_regenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reg_regenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reg_regencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reg_regencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reg_regencies
    **/
    _count?: true | Reg_regenciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reg_regenciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reg_regenciesMaxAggregateInputType
  }

  export type GetReg_regenciesAggregateType<T extends Reg_regenciesAggregateArgs> = {
        [P in keyof T & keyof AggregateReg_regencies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReg_regencies[P]>
      : GetScalarType<T[P], AggregateReg_regencies[P]>
  }




  export type reg_regenciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reg_regenciesWhereInput
    orderBy?: reg_regenciesOrderByWithAggregationInput | reg_regenciesOrderByWithAggregationInput[]
    by: Reg_regenciesScalarFieldEnum[] | Reg_regenciesScalarFieldEnum
    having?: reg_regenciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reg_regenciesCountAggregateInputType | true
    _min?: Reg_regenciesMinAggregateInputType
    _max?: Reg_regenciesMaxAggregateInputType
  }

  export type Reg_regenciesGroupByOutputType = {
    id: string
    provinceId: string
    name: string
    _count: Reg_regenciesCountAggregateOutputType | null
    _min: Reg_regenciesMinAggregateOutputType | null
    _max: Reg_regenciesMaxAggregateOutputType | null
  }

  type GetReg_regenciesGroupByPayload<T extends reg_regenciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reg_regenciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reg_regenciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reg_regenciesGroupByOutputType[P]>
            : GetScalarType<T[P], Reg_regenciesGroupByOutputType[P]>
        }
      >
    >


  export type reg_regenciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provinceId?: boolean
    name?: boolean
    Province?: boolean | reg_provincesDefaultArgs<ExtArgs>
    District?: boolean | reg_regencies$DistrictArgs<ExtArgs>
    _count?: boolean | Reg_regenciesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reg_regencies"]>

  export type reg_regenciesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provinceId?: boolean
    name?: boolean
    Province?: boolean | reg_provincesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reg_regencies"]>

  export type reg_regenciesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provinceId?: boolean
    name?: boolean
    Province?: boolean | reg_provincesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reg_regencies"]>

  export type reg_regenciesSelectScalar = {
    id?: boolean
    provinceId?: boolean
    name?: boolean
  }

  export type reg_regenciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provinceId" | "name", ExtArgs["result"]["reg_regencies"]>
  export type reg_regenciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Province?: boolean | reg_provincesDefaultArgs<ExtArgs>
    District?: boolean | reg_regencies$DistrictArgs<ExtArgs>
    _count?: boolean | Reg_regenciesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type reg_regenciesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Province?: boolean | reg_provincesDefaultArgs<ExtArgs>
  }
  export type reg_regenciesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Province?: boolean | reg_provincesDefaultArgs<ExtArgs>
  }

  export type $reg_regenciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reg_regencies"
    objects: {
      Province: Prisma.$reg_provincesPayload<ExtArgs>
      District: Prisma.$reg_districtsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provinceId: string
      name: string
    }, ExtArgs["result"]["reg_regencies"]>
    composites: {}
  }

  type reg_regenciesGetPayload<S extends boolean | null | undefined | reg_regenciesDefaultArgs> = $Result.GetResult<Prisma.$reg_regenciesPayload, S>

  type reg_regenciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reg_regenciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Reg_regenciesCountAggregateInputType | true
    }

  export interface reg_regenciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reg_regencies'], meta: { name: 'reg_regencies' } }
    /**
     * Find zero or one Reg_regencies that matches the filter.
     * @param {reg_regenciesFindUniqueArgs} args - Arguments to find a Reg_regencies
     * @example
     * // Get one Reg_regencies
     * const reg_regencies = await prisma.reg_regencies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reg_regenciesFindUniqueArgs>(args: SelectSubset<T, reg_regenciesFindUniqueArgs<ExtArgs>>): Prisma__reg_regenciesClient<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reg_regencies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reg_regenciesFindUniqueOrThrowArgs} args - Arguments to find a Reg_regencies
     * @example
     * // Get one Reg_regencies
     * const reg_regencies = await prisma.reg_regencies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reg_regenciesFindUniqueOrThrowArgs>(args: SelectSubset<T, reg_regenciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reg_regenciesClient<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reg_regencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_regenciesFindFirstArgs} args - Arguments to find a Reg_regencies
     * @example
     * // Get one Reg_regencies
     * const reg_regencies = await prisma.reg_regencies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reg_regenciesFindFirstArgs>(args?: SelectSubset<T, reg_regenciesFindFirstArgs<ExtArgs>>): Prisma__reg_regenciesClient<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reg_regencies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_regenciesFindFirstOrThrowArgs} args - Arguments to find a Reg_regencies
     * @example
     * // Get one Reg_regencies
     * const reg_regencies = await prisma.reg_regencies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reg_regenciesFindFirstOrThrowArgs>(args?: SelectSubset<T, reg_regenciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__reg_regenciesClient<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reg_regencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_regenciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reg_regencies
     * const reg_regencies = await prisma.reg_regencies.findMany()
     * 
     * // Get first 10 Reg_regencies
     * const reg_regencies = await prisma.reg_regencies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reg_regenciesWithIdOnly = await prisma.reg_regencies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reg_regenciesFindManyArgs>(args?: SelectSubset<T, reg_regenciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reg_regencies.
     * @param {reg_regenciesCreateArgs} args - Arguments to create a Reg_regencies.
     * @example
     * // Create one Reg_regencies
     * const Reg_regencies = await prisma.reg_regencies.create({
     *   data: {
     *     // ... data to create a Reg_regencies
     *   }
     * })
     * 
     */
    create<T extends reg_regenciesCreateArgs>(args: SelectSubset<T, reg_regenciesCreateArgs<ExtArgs>>): Prisma__reg_regenciesClient<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reg_regencies.
     * @param {reg_regenciesCreateManyArgs} args - Arguments to create many Reg_regencies.
     * @example
     * // Create many Reg_regencies
     * const reg_regencies = await prisma.reg_regencies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reg_regenciesCreateManyArgs>(args?: SelectSubset<T, reg_regenciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reg_regencies and returns the data saved in the database.
     * @param {reg_regenciesCreateManyAndReturnArgs} args - Arguments to create many Reg_regencies.
     * @example
     * // Create many Reg_regencies
     * const reg_regencies = await prisma.reg_regencies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reg_regencies and only return the `id`
     * const reg_regenciesWithIdOnly = await prisma.reg_regencies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reg_regenciesCreateManyAndReturnArgs>(args?: SelectSubset<T, reg_regenciesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reg_regencies.
     * @param {reg_regenciesDeleteArgs} args - Arguments to delete one Reg_regencies.
     * @example
     * // Delete one Reg_regencies
     * const Reg_regencies = await prisma.reg_regencies.delete({
     *   where: {
     *     // ... filter to delete one Reg_regencies
     *   }
     * })
     * 
     */
    delete<T extends reg_regenciesDeleteArgs>(args: SelectSubset<T, reg_regenciesDeleteArgs<ExtArgs>>): Prisma__reg_regenciesClient<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reg_regencies.
     * @param {reg_regenciesUpdateArgs} args - Arguments to update one Reg_regencies.
     * @example
     * // Update one Reg_regencies
     * const reg_regencies = await prisma.reg_regencies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reg_regenciesUpdateArgs>(args: SelectSubset<T, reg_regenciesUpdateArgs<ExtArgs>>): Prisma__reg_regenciesClient<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reg_regencies.
     * @param {reg_regenciesDeleteManyArgs} args - Arguments to filter Reg_regencies to delete.
     * @example
     * // Delete a few Reg_regencies
     * const { count } = await prisma.reg_regencies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reg_regenciesDeleteManyArgs>(args?: SelectSubset<T, reg_regenciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reg_regencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_regenciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reg_regencies
     * const reg_regencies = await prisma.reg_regencies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reg_regenciesUpdateManyArgs>(args: SelectSubset<T, reg_regenciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reg_regencies and returns the data updated in the database.
     * @param {reg_regenciesUpdateManyAndReturnArgs} args - Arguments to update many Reg_regencies.
     * @example
     * // Update many Reg_regencies
     * const reg_regencies = await prisma.reg_regencies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reg_regencies and only return the `id`
     * const reg_regenciesWithIdOnly = await prisma.reg_regencies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reg_regenciesUpdateManyAndReturnArgs>(args: SelectSubset<T, reg_regenciesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reg_regencies.
     * @param {reg_regenciesUpsertArgs} args - Arguments to update or create a Reg_regencies.
     * @example
     * // Update or create a Reg_regencies
     * const reg_regencies = await prisma.reg_regencies.upsert({
     *   create: {
     *     // ... data to create a Reg_regencies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reg_regencies we want to update
     *   }
     * })
     */
    upsert<T extends reg_regenciesUpsertArgs>(args: SelectSubset<T, reg_regenciesUpsertArgs<ExtArgs>>): Prisma__reg_regenciesClient<$Result.GetResult<Prisma.$reg_regenciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reg_regencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_regenciesCountArgs} args - Arguments to filter Reg_regencies to count.
     * @example
     * // Count the number of Reg_regencies
     * const count = await prisma.reg_regencies.count({
     *   where: {
     *     // ... the filter for the Reg_regencies we want to count
     *   }
     * })
    **/
    count<T extends reg_regenciesCountArgs>(
      args?: Subset<T, reg_regenciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reg_regenciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reg_regencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reg_regenciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reg_regenciesAggregateArgs>(args: Subset<T, Reg_regenciesAggregateArgs>): Prisma.PrismaPromise<GetReg_regenciesAggregateType<T>>

    /**
     * Group by Reg_regencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reg_regenciesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reg_regenciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reg_regenciesGroupByArgs['orderBy'] }
        : { orderBy?: reg_regenciesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reg_regenciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReg_regenciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reg_regencies model
   */
  readonly fields: reg_regenciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reg_regencies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reg_regenciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Province<T extends reg_provincesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reg_provincesDefaultArgs<ExtArgs>>): Prisma__reg_provincesClient<$Result.GetResult<Prisma.$reg_provincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    District<T extends reg_regencies$DistrictArgs<ExtArgs> = {}>(args?: Subset<T, reg_regencies$DistrictArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reg_districtsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reg_regencies model
   */
  interface reg_regenciesFieldRefs {
    readonly id: FieldRef<"reg_regencies", 'String'>
    readonly provinceId: FieldRef<"reg_regencies", 'String'>
    readonly name: FieldRef<"reg_regencies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * reg_regencies findUnique
   */
  export type reg_regenciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesInclude<ExtArgs> | null
    /**
     * Filter, which reg_regencies to fetch.
     */
    where: reg_regenciesWhereUniqueInput
  }

  /**
   * reg_regencies findUniqueOrThrow
   */
  export type reg_regenciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesInclude<ExtArgs> | null
    /**
     * Filter, which reg_regencies to fetch.
     */
    where: reg_regenciesWhereUniqueInput
  }

  /**
   * reg_regencies findFirst
   */
  export type reg_regenciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesInclude<ExtArgs> | null
    /**
     * Filter, which reg_regencies to fetch.
     */
    where?: reg_regenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reg_regencies to fetch.
     */
    orderBy?: reg_regenciesOrderByWithRelationInput | reg_regenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reg_regencies.
     */
    cursor?: reg_regenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reg_regencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reg_regencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reg_regencies.
     */
    distinct?: Reg_regenciesScalarFieldEnum | Reg_regenciesScalarFieldEnum[]
  }

  /**
   * reg_regencies findFirstOrThrow
   */
  export type reg_regenciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesInclude<ExtArgs> | null
    /**
     * Filter, which reg_regencies to fetch.
     */
    where?: reg_regenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reg_regencies to fetch.
     */
    orderBy?: reg_regenciesOrderByWithRelationInput | reg_regenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reg_regencies.
     */
    cursor?: reg_regenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reg_regencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reg_regencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reg_regencies.
     */
    distinct?: Reg_regenciesScalarFieldEnum | Reg_regenciesScalarFieldEnum[]
  }

  /**
   * reg_regencies findMany
   */
  export type reg_regenciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesInclude<ExtArgs> | null
    /**
     * Filter, which reg_regencies to fetch.
     */
    where?: reg_regenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reg_regencies to fetch.
     */
    orderBy?: reg_regenciesOrderByWithRelationInput | reg_regenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reg_regencies.
     */
    cursor?: reg_regenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reg_regencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reg_regencies.
     */
    skip?: number
    distinct?: Reg_regenciesScalarFieldEnum | Reg_regenciesScalarFieldEnum[]
  }

  /**
   * reg_regencies create
   */
  export type reg_regenciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesInclude<ExtArgs> | null
    /**
     * The data needed to create a reg_regencies.
     */
    data: XOR<reg_regenciesCreateInput, reg_regenciesUncheckedCreateInput>
  }

  /**
   * reg_regencies createMany
   */
  export type reg_regenciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reg_regencies.
     */
    data: reg_regenciesCreateManyInput | reg_regenciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reg_regencies createManyAndReturn
   */
  export type reg_regenciesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * The data used to create many reg_regencies.
     */
    data: reg_regenciesCreateManyInput | reg_regenciesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reg_regencies update
   */
  export type reg_regenciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesInclude<ExtArgs> | null
    /**
     * The data needed to update a reg_regencies.
     */
    data: XOR<reg_regenciesUpdateInput, reg_regenciesUncheckedUpdateInput>
    /**
     * Choose, which reg_regencies to update.
     */
    where: reg_regenciesWhereUniqueInput
  }

  /**
   * reg_regencies updateMany
   */
  export type reg_regenciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reg_regencies.
     */
    data: XOR<reg_regenciesUpdateManyMutationInput, reg_regenciesUncheckedUpdateManyInput>
    /**
     * Filter which reg_regencies to update
     */
    where?: reg_regenciesWhereInput
    /**
     * Limit how many reg_regencies to update.
     */
    limit?: number
  }

  /**
   * reg_regencies updateManyAndReturn
   */
  export type reg_regenciesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * The data used to update reg_regencies.
     */
    data: XOR<reg_regenciesUpdateManyMutationInput, reg_regenciesUncheckedUpdateManyInput>
    /**
     * Filter which reg_regencies to update
     */
    where?: reg_regenciesWhereInput
    /**
     * Limit how many reg_regencies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reg_regencies upsert
   */
  export type reg_regenciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesInclude<ExtArgs> | null
    /**
     * The filter to search for the reg_regencies to update in case it exists.
     */
    where: reg_regenciesWhereUniqueInput
    /**
     * In case the reg_regencies found by the `where` argument doesn't exist, create a new reg_regencies with this data.
     */
    create: XOR<reg_regenciesCreateInput, reg_regenciesUncheckedCreateInput>
    /**
     * In case the reg_regencies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reg_regenciesUpdateInput, reg_regenciesUncheckedUpdateInput>
  }

  /**
   * reg_regencies delete
   */
  export type reg_regenciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesInclude<ExtArgs> | null
    /**
     * Filter which reg_regencies to delete.
     */
    where: reg_regenciesWhereUniqueInput
  }

  /**
   * reg_regencies deleteMany
   */
  export type reg_regenciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reg_regencies to delete
     */
    where?: reg_regenciesWhereInput
    /**
     * Limit how many reg_regencies to delete.
     */
    limit?: number
  }

  /**
   * reg_regencies.District
   */
  export type reg_regencies$DistrictArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_districts
     */
    select?: reg_districtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_districts
     */
    omit?: reg_districtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_districtsInclude<ExtArgs> | null
    where?: reg_districtsWhereInput
    orderBy?: reg_districtsOrderByWithRelationInput | reg_districtsOrderByWithRelationInput[]
    cursor?: reg_districtsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reg_districtsScalarFieldEnum | Reg_districtsScalarFieldEnum[]
  }

  /**
   * reg_regencies without action
   */
  export type reg_regenciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reg_regencies
     */
    select?: reg_regenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reg_regencies
     */
    omit?: reg_regenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reg_regenciesInclude<ExtArgs> | null
  }


  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | Roles$UsersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["roles"]>
  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Roles$UsersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolesCreateManyAndReturnArgs>(args?: SelectSubset<T, RolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolesUpdateManyAndReturnArgs>(args: SelectSubset<T, RolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Roles$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Roles$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roles model
   */
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'Int'>
    readonly name: FieldRef<"Roles", 'String'>
    readonly description: FieldRef<"Roles", 'String'>
    readonly createdAt: FieldRef<"Roles", 'DateTime'>
    readonly updatedAt: FieldRef<"Roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles createManyAndReturn
   */
  export type RolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles updateManyAndReturn
   */
  export type RolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Roles.Users
   */
  export type Roles$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    type: $Enums.TokenType | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    type: $Enums.TokenType | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    type: number
    expires: number
    blacklisted: number
    createdAt: number
    userId: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    token: string
    type: $Enums.TokenType
    expires: Date
    blacklisted: boolean
    createdAt: Date
    userId: string
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "type" | "expires" | "blacklisted" | "createdAt" | "userId", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      type: $Enums.TokenType
      expires: Date
      blacklisted: boolean
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'TokenType'>
    readonly expires: FieldRef<"Token", 'DateTime'>
    readonly blacklisted: FieldRef<"Token", 'Boolean'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly userId: FieldRef<"Token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model UserAddress
   */

  export type AggregateUserAddress = {
    _count: UserAddressCountAggregateOutputType | null
    _avg: UserAddressAvgAggregateOutputType | null
    _sum: UserAddressSumAggregateOutputType | null
    _min: UserAddressMinAggregateOutputType | null
    _max: UserAddressMaxAggregateOutputType | null
  }

  export type UserAddressAvgAggregateOutputType = {
    rt: number | null
    rw: number | null
  }

  export type UserAddressSumAggregateOutputType = {
    rt: number | null
    rw: number | null
  }

  export type UserAddressMinAggregateOutputType = {
    id: string | null
    address: string | null
    rt: number | null
    rw: number | null
    district: string | null
    city: string | null
    province: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAddressMaxAggregateOutputType = {
    id: string | null
    address: string | null
    rt: number | null
    rw: number | null
    district: string | null
    city: string | null
    province: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAddressCountAggregateOutputType = {
    id: number
    address: number
    rt: number
    rw: number
    district: number
    city: number
    province: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAddressAvgAggregateInputType = {
    rt?: true
    rw?: true
  }

  export type UserAddressSumAggregateInputType = {
    rt?: true
    rw?: true
  }

  export type UserAddressMinAggregateInputType = {
    id?: true
    address?: true
    rt?: true
    rw?: true
    district?: true
    city?: true
    province?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAddressMaxAggregateInputType = {
    id?: true
    address?: true
    rt?: true
    rw?: true
    district?: true
    city?: true
    province?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAddressCountAggregateInputType = {
    id?: true
    address?: true
    rt?: true
    rw?: true
    district?: true
    city?: true
    province?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddress to aggregate.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAddresses
    **/
    _count?: true | UserAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAddressMaxAggregateInputType
  }

  export type GetUserAddressAggregateType<T extends UserAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAddress[P]>
      : GetScalarType<T[P], AggregateUserAddress[P]>
  }




  export type UserAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddressWhereInput
    orderBy?: UserAddressOrderByWithAggregationInput | UserAddressOrderByWithAggregationInput[]
    by: UserAddressScalarFieldEnum[] | UserAddressScalarFieldEnum
    having?: UserAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAddressCountAggregateInputType | true
    _avg?: UserAddressAvgAggregateInputType
    _sum?: UserAddressSumAggregateInputType
    _min?: UserAddressMinAggregateInputType
    _max?: UserAddressMaxAggregateInputType
  }

  export type UserAddressGroupByOutputType = {
    id: string
    address: string
    rt: number
    rw: number
    district: string
    city: string
    province: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserAddressCountAggregateOutputType | null
    _avg: UserAddressAvgAggregateOutputType | null
    _sum: UserAddressSumAggregateOutputType | null
    _min: UserAddressMinAggregateOutputType | null
    _max: UserAddressMaxAggregateOutputType | null
  }

  type GetUserAddressGroupByPayload<T extends UserAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAddressGroupByOutputType[P]>
            : GetScalarType<T[P], UserAddressGroupByOutputType[P]>
        }
      >
    >


  export type UserAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    rt?: boolean
    rw?: boolean
    district?: boolean
    city?: boolean
    province?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    rt?: boolean
    rw?: boolean
    district?: boolean
    city?: boolean
    province?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    rt?: boolean
    rw?: boolean
    district?: boolean
    city?: boolean
    province?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectScalar = {
    id?: boolean
    address?: boolean
    rt?: boolean
    rw?: boolean
    district?: boolean
    city?: boolean
    province?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "rt" | "rw" | "district" | "city" | "province" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userAddress"]>
  export type UserAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UserAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAddress"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      rt: number
      rw: number
      district: string
      city: string
      province: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAddress"]>
    composites: {}
  }

  type UserAddressGetPayload<S extends boolean | null | undefined | UserAddressDefaultArgs> = $Result.GetResult<Prisma.$UserAddressPayload, S>

  type UserAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAddressCountAggregateInputType | true
    }

  export interface UserAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAddress'], meta: { name: 'UserAddress' } }
    /**
     * Find zero or one UserAddress that matches the filter.
     * @param {UserAddressFindUniqueArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAddressFindUniqueArgs>(args: SelectSubset<T, UserAddressFindUniqueArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAddressFindUniqueOrThrowArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindFirstArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAddressFindFirstArgs>(args?: SelectSubset<T, UserAddressFindFirstArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindFirstOrThrowArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAddresses
     * const userAddresses = await prisma.userAddress.findMany()
     * 
     * // Get first 10 UserAddresses
     * const userAddresses = await prisma.userAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAddressFindManyArgs>(args?: SelectSubset<T, UserAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAddress.
     * @param {UserAddressCreateArgs} args - Arguments to create a UserAddress.
     * @example
     * // Create one UserAddress
     * const UserAddress = await prisma.userAddress.create({
     *   data: {
     *     // ... data to create a UserAddress
     *   }
     * })
     * 
     */
    create<T extends UserAddressCreateArgs>(args: SelectSubset<T, UserAddressCreateArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAddresses.
     * @param {UserAddressCreateManyArgs} args - Arguments to create many UserAddresses.
     * @example
     * // Create many UserAddresses
     * const userAddress = await prisma.userAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAddressCreateManyArgs>(args?: SelectSubset<T, UserAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAddresses and returns the data saved in the database.
     * @param {UserAddressCreateManyAndReturnArgs} args - Arguments to create many UserAddresses.
     * @example
     * // Create many UserAddresses
     * const userAddress = await prisma.userAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAddresses and only return the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAddress.
     * @param {UserAddressDeleteArgs} args - Arguments to delete one UserAddress.
     * @example
     * // Delete one UserAddress
     * const UserAddress = await prisma.userAddress.delete({
     *   where: {
     *     // ... filter to delete one UserAddress
     *   }
     * })
     * 
     */
    delete<T extends UserAddressDeleteArgs>(args: SelectSubset<T, UserAddressDeleteArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAddress.
     * @param {UserAddressUpdateArgs} args - Arguments to update one UserAddress.
     * @example
     * // Update one UserAddress
     * const userAddress = await prisma.userAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAddressUpdateArgs>(args: SelectSubset<T, UserAddressUpdateArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAddresses.
     * @param {UserAddressDeleteManyArgs} args - Arguments to filter UserAddresses to delete.
     * @example
     * // Delete a few UserAddresses
     * const { count } = await prisma.userAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAddressDeleteManyArgs>(args?: SelectSubset<T, UserAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAddresses
     * const userAddress = await prisma.userAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAddressUpdateManyArgs>(args: SelectSubset<T, UserAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAddresses and returns the data updated in the database.
     * @param {UserAddressUpdateManyAndReturnArgs} args - Arguments to update many UserAddresses.
     * @example
     * // Update many UserAddresses
     * const userAddress = await prisma.userAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAddresses and only return the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAddress.
     * @param {UserAddressUpsertArgs} args - Arguments to update or create a UserAddress.
     * @example
     * // Update or create a UserAddress
     * const userAddress = await prisma.userAddress.upsert({
     *   create: {
     *     // ... data to create a UserAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAddress we want to update
     *   }
     * })
     */
    upsert<T extends UserAddressUpsertArgs>(args: SelectSubset<T, UserAddressUpsertArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressCountArgs} args - Arguments to filter UserAddresses to count.
     * @example
     * // Count the number of UserAddresses
     * const count = await prisma.userAddress.count({
     *   where: {
     *     // ... the filter for the UserAddresses we want to count
     *   }
     * })
    **/
    count<T extends UserAddressCountArgs>(
      args?: Subset<T, UserAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAddressAggregateArgs>(args: Subset<T, UserAddressAggregateArgs>): Prisma.PrismaPromise<GetUserAddressAggregateType<T>>

    /**
     * Group by UserAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAddressGroupByArgs['orderBy'] }
        : { orderBy?: UserAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAddress model
   */
  readonly fields: UserAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAddress model
   */
  interface UserAddressFieldRefs {
    readonly id: FieldRef<"UserAddress", 'String'>
    readonly address: FieldRef<"UserAddress", 'String'>
    readonly rt: FieldRef<"UserAddress", 'Int'>
    readonly rw: FieldRef<"UserAddress", 'Int'>
    readonly district: FieldRef<"UserAddress", 'String'>
    readonly city: FieldRef<"UserAddress", 'String'>
    readonly province: FieldRef<"UserAddress", 'String'>
    readonly userId: FieldRef<"UserAddress", 'String'>
    readonly createdAt: FieldRef<"UserAddress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAddress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAddress findUnique
   */
  export type UserAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress findUniqueOrThrow
   */
  export type UserAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress findFirst
   */
  export type UserAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress findFirstOrThrow
   */
  export type UserAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress findMany
   */
  export type UserAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddresses to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress create
   */
  export type UserAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAddress.
     */
    data: XOR<UserAddressCreateInput, UserAddressUncheckedCreateInput>
  }

  /**
   * UserAddress createMany
   */
  export type UserAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAddresses.
     */
    data: UserAddressCreateManyInput | UserAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAddress createManyAndReturn
   */
  export type UserAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * The data used to create many UserAddresses.
     */
    data: UserAddressCreateManyInput | UserAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAddress update
   */
  export type UserAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAddress.
     */
    data: XOR<UserAddressUpdateInput, UserAddressUncheckedUpdateInput>
    /**
     * Choose, which UserAddress to update.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress updateMany
   */
  export type UserAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAddresses.
     */
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyInput>
    /**
     * Filter which UserAddresses to update
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to update.
     */
    limit?: number
  }

  /**
   * UserAddress updateManyAndReturn
   */
  export type UserAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * The data used to update UserAddresses.
     */
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyInput>
    /**
     * Filter which UserAddresses to update
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAddress upsert
   */
  export type UserAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAddress to update in case it exists.
     */
    where: UserAddressWhereUniqueInput
    /**
     * In case the UserAddress found by the `where` argument doesn't exist, create a new UserAddress with this data.
     */
    create: XOR<UserAddressCreateInput, UserAddressUncheckedCreateInput>
    /**
     * In case the UserAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAddressUpdateInput, UserAddressUncheckedUpdateInput>
  }

  /**
   * UserAddress delete
   */
  export type UserAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter which UserAddress to delete.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress deleteMany
   */
  export type UserAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddresses to delete
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to delete.
     */
    limit?: number
  }

  /**
   * UserAddress without action
   */
  export type UserAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
  }


  /**
   * Model UserCars
   */

  export type AggregateUserCars = {
    _count: UserCarsCountAggregateOutputType | null
    _min: UserCarsMinAggregateOutputType | null
    _max: UserCarsMaxAggregateOutputType | null
  }

  export type UserCarsMinAggregateOutputType = {
    id: string | null
    carId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCarsMaxAggregateOutputType = {
    id: string | null
    carId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCarsCountAggregateOutputType = {
    id: number
    carId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserCarsMinAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCarsMaxAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCarsCountAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCars to aggregate.
     */
    where?: UserCarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCars to fetch.
     */
    orderBy?: UserCarsOrderByWithRelationInput | UserCarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCars
    **/
    _count?: true | UserCarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCarsMaxAggregateInputType
  }

  export type GetUserCarsAggregateType<T extends UserCarsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCars[P]>
      : GetScalarType<T[P], AggregateUserCars[P]>
  }




  export type UserCarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCarsWhereInput
    orderBy?: UserCarsOrderByWithAggregationInput | UserCarsOrderByWithAggregationInput[]
    by: UserCarsScalarFieldEnum[] | UserCarsScalarFieldEnum
    having?: UserCarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCarsCountAggregateInputType | true
    _min?: UserCarsMinAggregateInputType
    _max?: UserCarsMaxAggregateInputType
  }

  export type UserCarsGroupByOutputType = {
    id: string
    carId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCarsCountAggregateOutputType | null
    _min: UserCarsMinAggregateOutputType | null
    _max: UserCarsMaxAggregateOutputType | null
  }

  type GetUserCarsGroupByPayload<T extends UserCarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCarsGroupByOutputType[P]>
            : GetScalarType<T[P], UserCarsGroupByOutputType[P]>
        }
      >
    >


  export type UserCarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
    location?: boolean | UserCars$locationArgs<ExtArgs>
    _count?: boolean | UserCarsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCars"]>

  export type UserCarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCars"]>

  export type UserCarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCars"]>

  export type UserCarsSelectScalar = {
    id?: boolean
    carId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserCarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userCars"]>
  export type UserCarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
    location?: boolean | UserCars$locationArgs<ExtArgs>
    _count?: boolean | UserCarsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserCarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }
  export type UserCarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }

  export type $UserCarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCars"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      car: Prisma.$CarsPayload<ExtArgs>
      location: Prisma.$LocationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      carId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userCars"]>
    composites: {}
  }

  type UserCarsGetPayload<S extends boolean | null | undefined | UserCarsDefaultArgs> = $Result.GetResult<Prisma.$UserCarsPayload, S>

  type UserCarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCarsCountAggregateInputType | true
    }

  export interface UserCarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCars'], meta: { name: 'UserCars' } }
    /**
     * Find zero or one UserCars that matches the filter.
     * @param {UserCarsFindUniqueArgs} args - Arguments to find a UserCars
     * @example
     * // Get one UserCars
     * const userCars = await prisma.userCars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCarsFindUniqueArgs>(args: SelectSubset<T, UserCarsFindUniqueArgs<ExtArgs>>): Prisma__UserCarsClient<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCarsFindUniqueOrThrowArgs} args - Arguments to find a UserCars
     * @example
     * // Get one UserCars
     * const userCars = await prisma.userCars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCarsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCarsClient<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCarsFindFirstArgs} args - Arguments to find a UserCars
     * @example
     * // Get one UserCars
     * const userCars = await prisma.userCars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCarsFindFirstArgs>(args?: SelectSubset<T, UserCarsFindFirstArgs<ExtArgs>>): Prisma__UserCarsClient<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCarsFindFirstOrThrowArgs} args - Arguments to find a UserCars
     * @example
     * // Get one UserCars
     * const userCars = await prisma.userCars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCarsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCarsClient<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCars
     * const userCars = await prisma.userCars.findMany()
     * 
     * // Get first 10 UserCars
     * const userCars = await prisma.userCars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCarsWithIdOnly = await prisma.userCars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCarsFindManyArgs>(args?: SelectSubset<T, UserCarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCars.
     * @param {UserCarsCreateArgs} args - Arguments to create a UserCars.
     * @example
     * // Create one UserCars
     * const UserCars = await prisma.userCars.create({
     *   data: {
     *     // ... data to create a UserCars
     *   }
     * })
     * 
     */
    create<T extends UserCarsCreateArgs>(args: SelectSubset<T, UserCarsCreateArgs<ExtArgs>>): Prisma__UserCarsClient<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCars.
     * @param {UserCarsCreateManyArgs} args - Arguments to create many UserCars.
     * @example
     * // Create many UserCars
     * const userCars = await prisma.userCars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCarsCreateManyArgs>(args?: SelectSubset<T, UserCarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCars and returns the data saved in the database.
     * @param {UserCarsCreateManyAndReturnArgs} args - Arguments to create many UserCars.
     * @example
     * // Create many UserCars
     * const userCars = await prisma.userCars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCars and only return the `id`
     * const userCarsWithIdOnly = await prisma.userCars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCarsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCars.
     * @param {UserCarsDeleteArgs} args - Arguments to delete one UserCars.
     * @example
     * // Delete one UserCars
     * const UserCars = await prisma.userCars.delete({
     *   where: {
     *     // ... filter to delete one UserCars
     *   }
     * })
     * 
     */
    delete<T extends UserCarsDeleteArgs>(args: SelectSubset<T, UserCarsDeleteArgs<ExtArgs>>): Prisma__UserCarsClient<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCars.
     * @param {UserCarsUpdateArgs} args - Arguments to update one UserCars.
     * @example
     * // Update one UserCars
     * const userCars = await prisma.userCars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCarsUpdateArgs>(args: SelectSubset<T, UserCarsUpdateArgs<ExtArgs>>): Prisma__UserCarsClient<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCars.
     * @param {UserCarsDeleteManyArgs} args - Arguments to filter UserCars to delete.
     * @example
     * // Delete a few UserCars
     * const { count } = await prisma.userCars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCarsDeleteManyArgs>(args?: SelectSubset<T, UserCarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCars
     * const userCars = await prisma.userCars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCarsUpdateManyArgs>(args: SelectSubset<T, UserCarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCars and returns the data updated in the database.
     * @param {UserCarsUpdateManyAndReturnArgs} args - Arguments to update many UserCars.
     * @example
     * // Update many UserCars
     * const userCars = await prisma.userCars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCars and only return the `id`
     * const userCarsWithIdOnly = await prisma.userCars.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCarsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCars.
     * @param {UserCarsUpsertArgs} args - Arguments to update or create a UserCars.
     * @example
     * // Update or create a UserCars
     * const userCars = await prisma.userCars.upsert({
     *   create: {
     *     // ... data to create a UserCars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCars we want to update
     *   }
     * })
     */
    upsert<T extends UserCarsUpsertArgs>(args: SelectSubset<T, UserCarsUpsertArgs<ExtArgs>>): Prisma__UserCarsClient<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCarsCountArgs} args - Arguments to filter UserCars to count.
     * @example
     * // Count the number of UserCars
     * const count = await prisma.userCars.count({
     *   where: {
     *     // ... the filter for the UserCars we want to count
     *   }
     * })
    **/
    count<T extends UserCarsCountArgs>(
      args?: Subset<T, UserCarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCarsAggregateArgs>(args: Subset<T, UserCarsAggregateArgs>): Prisma.PrismaPromise<GetUserCarsAggregateType<T>>

    /**
     * Group by UserCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCarsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCarsGroupByArgs['orderBy'] }
        : { orderBy?: UserCarsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCars model
   */
  readonly fields: UserCarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarsDefaultArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends UserCars$locationArgs<ExtArgs> = {}>(args?: Subset<T, UserCars$locationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCars model
   */
  interface UserCarsFieldRefs {
    readonly id: FieldRef<"UserCars", 'String'>
    readonly carId: FieldRef<"UserCars", 'String'>
    readonly userId: FieldRef<"UserCars", 'String'>
    readonly createdAt: FieldRef<"UserCars", 'DateTime'>
    readonly updatedAt: FieldRef<"UserCars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCars findUnique
   */
  export type UserCarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsInclude<ExtArgs> | null
    /**
     * Filter, which UserCars to fetch.
     */
    where: UserCarsWhereUniqueInput
  }

  /**
   * UserCars findUniqueOrThrow
   */
  export type UserCarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsInclude<ExtArgs> | null
    /**
     * Filter, which UserCars to fetch.
     */
    where: UserCarsWhereUniqueInput
  }

  /**
   * UserCars findFirst
   */
  export type UserCarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsInclude<ExtArgs> | null
    /**
     * Filter, which UserCars to fetch.
     */
    where?: UserCarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCars to fetch.
     */
    orderBy?: UserCarsOrderByWithRelationInput | UserCarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCars.
     */
    cursor?: UserCarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCars.
     */
    distinct?: UserCarsScalarFieldEnum | UserCarsScalarFieldEnum[]
  }

  /**
   * UserCars findFirstOrThrow
   */
  export type UserCarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsInclude<ExtArgs> | null
    /**
     * Filter, which UserCars to fetch.
     */
    where?: UserCarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCars to fetch.
     */
    orderBy?: UserCarsOrderByWithRelationInput | UserCarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCars.
     */
    cursor?: UserCarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCars.
     */
    distinct?: UserCarsScalarFieldEnum | UserCarsScalarFieldEnum[]
  }

  /**
   * UserCars findMany
   */
  export type UserCarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsInclude<ExtArgs> | null
    /**
     * Filter, which UserCars to fetch.
     */
    where?: UserCarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCars to fetch.
     */
    orderBy?: UserCarsOrderByWithRelationInput | UserCarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCars.
     */
    cursor?: UserCarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCars.
     */
    skip?: number
    distinct?: UserCarsScalarFieldEnum | UserCarsScalarFieldEnum[]
  }

  /**
   * UserCars create
   */
  export type UserCarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCars.
     */
    data: XOR<UserCarsCreateInput, UserCarsUncheckedCreateInput>
  }

  /**
   * UserCars createMany
   */
  export type UserCarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCars.
     */
    data: UserCarsCreateManyInput | UserCarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCars createManyAndReturn
   */
  export type UserCarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * The data used to create many UserCars.
     */
    data: UserCarsCreateManyInput | UserCarsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCars update
   */
  export type UserCarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCars.
     */
    data: XOR<UserCarsUpdateInput, UserCarsUncheckedUpdateInput>
    /**
     * Choose, which UserCars to update.
     */
    where: UserCarsWhereUniqueInput
  }

  /**
   * UserCars updateMany
   */
  export type UserCarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCars.
     */
    data: XOR<UserCarsUpdateManyMutationInput, UserCarsUncheckedUpdateManyInput>
    /**
     * Filter which UserCars to update
     */
    where?: UserCarsWhereInput
    /**
     * Limit how many UserCars to update.
     */
    limit?: number
  }

  /**
   * UserCars updateManyAndReturn
   */
  export type UserCarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * The data used to update UserCars.
     */
    data: XOR<UserCarsUpdateManyMutationInput, UserCarsUncheckedUpdateManyInput>
    /**
     * Filter which UserCars to update
     */
    where?: UserCarsWhereInput
    /**
     * Limit how many UserCars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCars upsert
   */
  export type UserCarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCars to update in case it exists.
     */
    where: UserCarsWhereUniqueInput
    /**
     * In case the UserCars found by the `where` argument doesn't exist, create a new UserCars with this data.
     */
    create: XOR<UserCarsCreateInput, UserCarsUncheckedCreateInput>
    /**
     * In case the UserCars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCarsUpdateInput, UserCarsUncheckedUpdateInput>
  }

  /**
   * UserCars delete
   */
  export type UserCarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsInclude<ExtArgs> | null
    /**
     * Filter which UserCars to delete.
     */
    where: UserCarsWhereUniqueInput
  }

  /**
   * UserCars deleteMany
   */
  export type UserCarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCars to delete
     */
    where?: UserCarsWhereInput
    /**
     * Limit how many UserCars to delete.
     */
    limit?: number
  }

  /**
   * UserCars.location
   */
  export type UserCars$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    where?: LocationsWhereInput
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    cursor?: LocationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * UserCars without action
   */
  export type UserCarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    roleId: number | null
  }

  export type UsersSumAggregateOutputType = {
    roleId: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    roleId: number | null
    departmentId: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    roleId: number | null
    departmentId: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    isEmailVerified: number
    createdAt: number
    updatedAt: number
    roleId: number
    departmentId: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    roleId?: true
  }

  export type UsersSumAggregateInputType = {
    roleId?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
    roleId?: true
    departmentId?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
    roleId?: true
    departmentId?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
    roleId?: true
    departmentId?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    isEmailVerified: boolean
    createdAt: Date
    updatedAt: Date
    roleId: number
    departmentId: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
    departmentId?: boolean
    role?: boolean | RolesDefaultArgs<ExtArgs>
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
    tokens?: boolean | Users$tokensArgs<ExtArgs>
    address?: boolean | Users$addressArgs<ExtArgs>
    car?: boolean | Users$carArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
    departmentId?: boolean
    role?: boolean | RolesDefaultArgs<ExtArgs>
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
    departmentId?: boolean
    role?: boolean | RolesDefaultArgs<ExtArgs>
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
    departmentId?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "isEmailVerified" | "createdAt" | "updatedAt" | "roleId" | "departmentId", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RolesDefaultArgs<ExtArgs>
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
    tokens?: boolean | Users$tokensArgs<ExtArgs>
    address?: boolean | Users$addressArgs<ExtArgs>
    car?: boolean | Users$carArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RolesDefaultArgs<ExtArgs>
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RolesDefaultArgs<ExtArgs>
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      role: Prisma.$RolesPayload<ExtArgs>
      department: Prisma.$DepartmentsPayload<ExtArgs>
      tokens: Prisma.$TokenPayload<ExtArgs>[]
      address: Prisma.$UserAddressPayload<ExtArgs> | null
      car: Prisma.$UserCarsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      isEmailVerified: boolean
      createdAt: Date
      updatedAt: Date
      roleId: number
      departmentId: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentsDefaultArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tokens<T extends Users$tokensArgs<ExtArgs> = {}>(args?: Subset<T, Users$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    address<T extends Users$addressArgs<ExtArgs> = {}>(args?: Subset<T, Users$addressArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    car<T extends Users$carArgs<ExtArgs> = {}>(args?: Subset<T, Users$carArgs<ExtArgs>>): Prisma__UserCarsClient<$Result.GetResult<Prisma.$UserCarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly isEmailVerified: FieldRef<"Users", 'Boolean'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
    readonly roleId: FieldRef<"Users", 'Int'>
    readonly departmentId: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.tokens
   */
  export type Users$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Users.address
   */
  export type Users$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    where?: UserAddressWhereInput
  }

  /**
   * Users.car
   */
  export type Users$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCars
     */
    select?: UserCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCars
     */
    omit?: UserCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCarsInclude<ExtArgs> | null
    where?: UserCarsWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CarsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brand: 'brand',
    release_year: 'release_year',
    plate_number: 'plate_number',
    status: 'status',
    departmentId: 'departmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarsScalarFieldEnum = (typeof CarsScalarFieldEnum)[keyof typeof CarsScalarFieldEnum]


  export const DepartmentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    category: 'category',
    province: 'province',
    district: 'district',
    subDistrict: 'subDistrict',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const LocationsScalarFieldEnum: {
    id: 'id',
    location: 'location',
    user_carId: 'user_carId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationsScalarFieldEnum = (typeof LocationsScalarFieldEnum)[keyof typeof LocationsScalarFieldEnum]


  export const Reg_districtsScalarFieldEnum: {
    id: 'id',
    regencyId: 'regencyId',
    name: 'name'
  };

  export type Reg_districtsScalarFieldEnum = (typeof Reg_districtsScalarFieldEnum)[keyof typeof Reg_districtsScalarFieldEnum]


  export const Reg_provincesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Reg_provincesScalarFieldEnum = (typeof Reg_provincesScalarFieldEnum)[keyof typeof Reg_provincesScalarFieldEnum]


  export const Reg_regenciesScalarFieldEnum: {
    id: 'id',
    provinceId: 'provinceId',
    name: 'name'
  };

  export type Reg_regenciesScalarFieldEnum = (typeof Reg_regenciesScalarFieldEnum)[keyof typeof Reg_regenciesScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    type: 'type',
    expires: 'expires',
    blacklisted: 'blacklisted',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const UserAddressScalarFieldEnum: {
    id: 'id',
    address: 'address',
    rt: 'rt',
    rw: 'rw',
    district: 'district',
    city: 'city',
    province: 'province',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserAddressScalarFieldEnum = (typeof UserAddressScalarFieldEnum)[keyof typeof UserAddressScalarFieldEnum]


  export const UserCarsScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserCarsScalarFieldEnum = (typeof UserCarsScalarFieldEnum)[keyof typeof UserCarsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    isEmailVerified: 'isEmailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    roleId: 'roleId',
    departmentId: 'departmentId'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CarsWhereInput = {
    AND?: CarsWhereInput | CarsWhereInput[]
    OR?: CarsWhereInput[]
    NOT?: CarsWhereInput | CarsWhereInput[]
    id?: StringFilter<"Cars"> | string
    name?: StringFilter<"Cars"> | string
    brand?: StringFilter<"Cars"> | string
    release_year?: IntFilter<"Cars"> | number
    plate_number?: StringFilter<"Cars"> | string
    status?: StringFilter<"Cars"> | string
    departmentId?: StringFilter<"Cars"> | string
    createdAt?: DateTimeFilter<"Cars"> | Date | string
    updatedAt?: DateTimeFilter<"Cars"> | Date | string
    user_car?: XOR<UserCarsNullableScalarRelationFilter, UserCarsWhereInput> | null
    department?: XOR<DepartmentsScalarRelationFilter, DepartmentsWhereInput>
  }

  export type CarsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    release_year?: SortOrder
    plate_number?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_car?: UserCarsOrderByWithRelationInput
    department?: DepartmentsOrderByWithRelationInput
  }

  export type CarsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plate_number?: string
    AND?: CarsWhereInput | CarsWhereInput[]
    OR?: CarsWhereInput[]
    NOT?: CarsWhereInput | CarsWhereInput[]
    name?: StringFilter<"Cars"> | string
    brand?: StringFilter<"Cars"> | string
    release_year?: IntFilter<"Cars"> | number
    status?: StringFilter<"Cars"> | string
    departmentId?: StringFilter<"Cars"> | string
    createdAt?: DateTimeFilter<"Cars"> | Date | string
    updatedAt?: DateTimeFilter<"Cars"> | Date | string
    user_car?: XOR<UserCarsNullableScalarRelationFilter, UserCarsWhereInput> | null
    department?: XOR<DepartmentsScalarRelationFilter, DepartmentsWhereInput>
  }, "id" | "plate_number">

  export type CarsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    release_year?: SortOrder
    plate_number?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarsCountOrderByAggregateInput
    _avg?: CarsAvgOrderByAggregateInput
    _max?: CarsMaxOrderByAggregateInput
    _min?: CarsMinOrderByAggregateInput
    _sum?: CarsSumOrderByAggregateInput
  }

  export type CarsScalarWhereWithAggregatesInput = {
    AND?: CarsScalarWhereWithAggregatesInput | CarsScalarWhereWithAggregatesInput[]
    OR?: CarsScalarWhereWithAggregatesInput[]
    NOT?: CarsScalarWhereWithAggregatesInput | CarsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cars"> | string
    name?: StringWithAggregatesFilter<"Cars"> | string
    brand?: StringWithAggregatesFilter<"Cars"> | string
    release_year?: IntWithAggregatesFilter<"Cars"> | number
    plate_number?: StringWithAggregatesFilter<"Cars"> | string
    status?: StringWithAggregatesFilter<"Cars"> | string
    departmentId?: StringWithAggregatesFilter<"Cars"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cars"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cars"> | Date | string
  }

  export type DepartmentsWhereInput = {
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    id?: StringFilter<"Departments"> | string
    name?: StringFilter<"Departments"> | string
    address?: StringFilter<"Departments"> | string
    category?: EnumCategoryFilter<"Departments"> | $Enums.Category
    province?: StringFilter<"Departments"> | string
    district?: StringFilter<"Departments"> | string
    subDistrict?: StringFilter<"Departments"> | string
    createdAt?: DateTimeFilter<"Departments"> | Date | string
    updatedAt?: DateTimeFilter<"Departments"> | Date | string
    Users?: UsersListRelationFilter
    Cars?: CarsListRelationFilter
  }

  export type DepartmentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    province?: SortOrder
    district?: SortOrder
    subDistrict?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByRelationAggregateInput
    Cars?: CarsOrderByRelationAggregateInput
  }

  export type DepartmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    name?: StringFilter<"Departments"> | string
    address?: StringFilter<"Departments"> | string
    category?: EnumCategoryFilter<"Departments"> | $Enums.Category
    province?: StringFilter<"Departments"> | string
    district?: StringFilter<"Departments"> | string
    subDistrict?: StringFilter<"Departments"> | string
    createdAt?: DateTimeFilter<"Departments"> | Date | string
    updatedAt?: DateTimeFilter<"Departments"> | Date | string
    Users?: UsersListRelationFilter
    Cars?: CarsListRelationFilter
  }, "id">

  export type DepartmentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    province?: SortOrder
    district?: SortOrder
    subDistrict?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentsCountOrderByAggregateInput
    _max?: DepartmentsMaxOrderByAggregateInput
    _min?: DepartmentsMinOrderByAggregateInput
  }

  export type DepartmentsScalarWhereWithAggregatesInput = {
    AND?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    OR?: DepartmentsScalarWhereWithAggregatesInput[]
    NOT?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Departments"> | string
    name?: StringWithAggregatesFilter<"Departments"> | string
    address?: StringWithAggregatesFilter<"Departments"> | string
    category?: EnumCategoryWithAggregatesFilter<"Departments"> | $Enums.Category
    province?: StringWithAggregatesFilter<"Departments"> | string
    district?: StringWithAggregatesFilter<"Departments"> | string
    subDistrict?: StringWithAggregatesFilter<"Departments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Departments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Departments"> | Date | string
  }

  export type LocationsWhereInput = {
    AND?: LocationsWhereInput | LocationsWhereInput[]
    OR?: LocationsWhereInput[]
    NOT?: LocationsWhereInput | LocationsWhereInput[]
    id?: StringFilter<"Locations"> | string
    location?: StringFilter<"Locations"> | string
    user_carId?: StringFilter<"Locations"> | string
    createdAt?: DateTimeFilter<"Locations"> | Date | string
    updatedAt?: DateTimeFilter<"Locations"> | Date | string
    userCar?: XOR<UserCarsScalarRelationFilter, UserCarsWhereInput>
  }

  export type LocationsOrderByWithRelationInput = {
    id?: SortOrder
    location?: SortOrder
    user_carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userCar?: UserCarsOrderByWithRelationInput
  }

  export type LocationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationsWhereInput | LocationsWhereInput[]
    OR?: LocationsWhereInput[]
    NOT?: LocationsWhereInput | LocationsWhereInput[]
    location?: StringFilter<"Locations"> | string
    user_carId?: StringFilter<"Locations"> | string
    createdAt?: DateTimeFilter<"Locations"> | Date | string
    updatedAt?: DateTimeFilter<"Locations"> | Date | string
    userCar?: XOR<UserCarsScalarRelationFilter, UserCarsWhereInput>
  }, "id">

  export type LocationsOrderByWithAggregationInput = {
    id?: SortOrder
    location?: SortOrder
    user_carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationsCountOrderByAggregateInput
    _max?: LocationsMaxOrderByAggregateInput
    _min?: LocationsMinOrderByAggregateInput
  }

  export type LocationsScalarWhereWithAggregatesInput = {
    AND?: LocationsScalarWhereWithAggregatesInput | LocationsScalarWhereWithAggregatesInput[]
    OR?: LocationsScalarWhereWithAggregatesInput[]
    NOT?: LocationsScalarWhereWithAggregatesInput | LocationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Locations"> | string
    location?: StringWithAggregatesFilter<"Locations"> | string
    user_carId?: StringWithAggregatesFilter<"Locations"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Locations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Locations"> | Date | string
  }

  export type reg_districtsWhereInput = {
    AND?: reg_districtsWhereInput | reg_districtsWhereInput[]
    OR?: reg_districtsWhereInput[]
    NOT?: reg_districtsWhereInput | reg_districtsWhereInput[]
    id?: StringFilter<"reg_districts"> | string
    regencyId?: StringFilter<"reg_districts"> | string
    name?: StringFilter<"reg_districts"> | string
    regency?: XOR<Reg_regenciesScalarRelationFilter, reg_regenciesWhereInput>
  }

  export type reg_districtsOrderByWithRelationInput = {
    id?: SortOrder
    regencyId?: SortOrder
    name?: SortOrder
    regency?: reg_regenciesOrderByWithRelationInput
  }

  export type reg_districtsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reg_districtsWhereInput | reg_districtsWhereInput[]
    OR?: reg_districtsWhereInput[]
    NOT?: reg_districtsWhereInput | reg_districtsWhereInput[]
    regencyId?: StringFilter<"reg_districts"> | string
    name?: StringFilter<"reg_districts"> | string
    regency?: XOR<Reg_regenciesScalarRelationFilter, reg_regenciesWhereInput>
  }, "id">

  export type reg_districtsOrderByWithAggregationInput = {
    id?: SortOrder
    regencyId?: SortOrder
    name?: SortOrder
    _count?: reg_districtsCountOrderByAggregateInput
    _max?: reg_districtsMaxOrderByAggregateInput
    _min?: reg_districtsMinOrderByAggregateInput
  }

  export type reg_districtsScalarWhereWithAggregatesInput = {
    AND?: reg_districtsScalarWhereWithAggregatesInput | reg_districtsScalarWhereWithAggregatesInput[]
    OR?: reg_districtsScalarWhereWithAggregatesInput[]
    NOT?: reg_districtsScalarWhereWithAggregatesInput | reg_districtsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"reg_districts"> | string
    regencyId?: StringWithAggregatesFilter<"reg_districts"> | string
    name?: StringWithAggregatesFilter<"reg_districts"> | string
  }

  export type reg_provincesWhereInput = {
    AND?: reg_provincesWhereInput | reg_provincesWhereInput[]
    OR?: reg_provincesWhereInput[]
    NOT?: reg_provincesWhereInput | reg_provincesWhereInput[]
    id?: StringFilter<"reg_provinces"> | string
    name?: StringFilter<"reg_provinces"> | string
    Regency?: Reg_regenciesListRelationFilter
  }

  export type reg_provincesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Regency?: reg_regenciesOrderByRelationAggregateInput
  }

  export type reg_provincesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reg_provincesWhereInput | reg_provincesWhereInput[]
    OR?: reg_provincesWhereInput[]
    NOT?: reg_provincesWhereInput | reg_provincesWhereInput[]
    name?: StringFilter<"reg_provinces"> | string
    Regency?: Reg_regenciesListRelationFilter
  }, "id">

  export type reg_provincesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: reg_provincesCountOrderByAggregateInput
    _max?: reg_provincesMaxOrderByAggregateInput
    _min?: reg_provincesMinOrderByAggregateInput
  }

  export type reg_provincesScalarWhereWithAggregatesInput = {
    AND?: reg_provincesScalarWhereWithAggregatesInput | reg_provincesScalarWhereWithAggregatesInput[]
    OR?: reg_provincesScalarWhereWithAggregatesInput[]
    NOT?: reg_provincesScalarWhereWithAggregatesInput | reg_provincesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"reg_provinces"> | string
    name?: StringWithAggregatesFilter<"reg_provinces"> | string
  }

  export type reg_regenciesWhereInput = {
    AND?: reg_regenciesWhereInput | reg_regenciesWhereInput[]
    OR?: reg_regenciesWhereInput[]
    NOT?: reg_regenciesWhereInput | reg_regenciesWhereInput[]
    id?: StringFilter<"reg_regencies"> | string
    provinceId?: StringFilter<"reg_regencies"> | string
    name?: StringFilter<"reg_regencies"> | string
    Province?: XOR<Reg_provincesScalarRelationFilter, reg_provincesWhereInput>
    District?: Reg_districtsListRelationFilter
  }

  export type reg_regenciesOrderByWithRelationInput = {
    id?: SortOrder
    provinceId?: SortOrder
    name?: SortOrder
    Province?: reg_provincesOrderByWithRelationInput
    District?: reg_districtsOrderByRelationAggregateInput
  }

  export type reg_regenciesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reg_regenciesWhereInput | reg_regenciesWhereInput[]
    OR?: reg_regenciesWhereInput[]
    NOT?: reg_regenciesWhereInput | reg_regenciesWhereInput[]
    provinceId?: StringFilter<"reg_regencies"> | string
    name?: StringFilter<"reg_regencies"> | string
    Province?: XOR<Reg_provincesScalarRelationFilter, reg_provincesWhereInput>
    District?: Reg_districtsListRelationFilter
  }, "id">

  export type reg_regenciesOrderByWithAggregationInput = {
    id?: SortOrder
    provinceId?: SortOrder
    name?: SortOrder
    _count?: reg_regenciesCountOrderByAggregateInput
    _max?: reg_regenciesMaxOrderByAggregateInput
    _min?: reg_regenciesMinOrderByAggregateInput
  }

  export type reg_regenciesScalarWhereWithAggregatesInput = {
    AND?: reg_regenciesScalarWhereWithAggregatesInput | reg_regenciesScalarWhereWithAggregatesInput[]
    OR?: reg_regenciesScalarWhereWithAggregatesInput[]
    NOT?: reg_regenciesScalarWhereWithAggregatesInput | reg_regenciesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"reg_regencies"> | string
    provinceId?: StringWithAggregatesFilter<"reg_regencies"> | string
    name?: StringWithAggregatesFilter<"reg_regencies"> | string
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: IntFilter<"Roles"> | number
    name?: StringFilter<"Roles"> | string
    description?: StringFilter<"Roles"> | string
    createdAt?: DateTimeFilter<"Roles"> | Date | string
    updatedAt?: DateTimeFilter<"Roles"> | Date | string
    Users?: UsersListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByRelationAggregateInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    name?: StringFilter<"Roles"> | string
    description?: StringFilter<"Roles"> | string
    createdAt?: DateTimeFilter<"Roles"> | Date | string
    updatedAt?: DateTimeFilter<"Roles"> | Date | string
    Users?: UsersListRelationFilter
  }, "id">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Roles"> | number
    name?: StringWithAggregatesFilter<"Roles"> | string
    description?: StringWithAggregatesFilter<"Roles"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: StringFilter<"Token"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: StringFilter<"Token"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    blacklisted?: BoolWithAggregatesFilter<"Token"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    userId?: StringWithAggregatesFilter<"Token"> | string
  }

  export type UserAddressWhereInput = {
    AND?: UserAddressWhereInput | UserAddressWhereInput[]
    OR?: UserAddressWhereInput[]
    NOT?: UserAddressWhereInput | UserAddressWhereInput[]
    id?: StringFilter<"UserAddress"> | string
    address?: StringFilter<"UserAddress"> | string
    rt?: IntFilter<"UserAddress"> | number
    rw?: IntFilter<"UserAddress"> | number
    district?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    province?: StringFilter<"UserAddress"> | string
    userId?: StringFilter<"UserAddress"> | string
    createdAt?: DateTimeFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeFilter<"UserAddress"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UserAddressOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    district?: SortOrder
    city?: SortOrder
    province?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type UserAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserAddressWhereInput | UserAddressWhereInput[]
    OR?: UserAddressWhereInput[]
    NOT?: UserAddressWhereInput | UserAddressWhereInput[]
    address?: StringFilter<"UserAddress"> | string
    rt?: IntFilter<"UserAddress"> | number
    rw?: IntFilter<"UserAddress"> | number
    district?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    province?: StringFilter<"UserAddress"> | string
    createdAt?: DateTimeFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeFilter<"UserAddress"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId">

  export type UserAddressOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    district?: SortOrder
    city?: SortOrder
    province?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserAddressCountOrderByAggregateInput
    _avg?: UserAddressAvgOrderByAggregateInput
    _max?: UserAddressMaxOrderByAggregateInput
    _min?: UserAddressMinOrderByAggregateInput
    _sum?: UserAddressSumOrderByAggregateInput
  }

  export type UserAddressScalarWhereWithAggregatesInput = {
    AND?: UserAddressScalarWhereWithAggregatesInput | UserAddressScalarWhereWithAggregatesInput[]
    OR?: UserAddressScalarWhereWithAggregatesInput[]
    NOT?: UserAddressScalarWhereWithAggregatesInput | UserAddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAddress"> | string
    address?: StringWithAggregatesFilter<"UserAddress"> | string
    rt?: IntWithAggregatesFilter<"UserAddress"> | number
    rw?: IntWithAggregatesFilter<"UserAddress"> | number
    district?: StringWithAggregatesFilter<"UserAddress"> | string
    city?: StringWithAggregatesFilter<"UserAddress"> | string
    province?: StringWithAggregatesFilter<"UserAddress"> | string
    userId?: StringWithAggregatesFilter<"UserAddress"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAddress"> | Date | string
  }

  export type UserCarsWhereInput = {
    AND?: UserCarsWhereInput | UserCarsWhereInput[]
    OR?: UserCarsWhereInput[]
    NOT?: UserCarsWhereInput | UserCarsWhereInput[]
    id?: StringFilter<"UserCars"> | string
    carId?: StringFilter<"UserCars"> | string
    userId?: StringFilter<"UserCars"> | string
    createdAt?: DateTimeFilter<"UserCars"> | Date | string
    updatedAt?: DateTimeFilter<"UserCars"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
    location?: LocationsListRelationFilter
  }

  export type UserCarsOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    car?: CarsOrderByWithRelationInput
    location?: LocationsOrderByRelationAggregateInput
  }

  export type UserCarsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    carId?: string
    userId?: string
    AND?: UserCarsWhereInput | UserCarsWhereInput[]
    OR?: UserCarsWhereInput[]
    NOT?: UserCarsWhereInput | UserCarsWhereInput[]
    createdAt?: DateTimeFilter<"UserCars"> | Date | string
    updatedAt?: DateTimeFilter<"UserCars"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
    location?: LocationsListRelationFilter
  }, "id" | "carId" | "userId">

  export type UserCarsOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCarsCountOrderByAggregateInput
    _max?: UserCarsMaxOrderByAggregateInput
    _min?: UserCarsMinOrderByAggregateInput
  }

  export type UserCarsScalarWhereWithAggregatesInput = {
    AND?: UserCarsScalarWhereWithAggregatesInput | UserCarsScalarWhereWithAggregatesInput[]
    OR?: UserCarsScalarWhereWithAggregatesInput[]
    NOT?: UserCarsScalarWhereWithAggregatesInput | UserCarsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCars"> | string
    carId?: StringWithAggregatesFilter<"UserCars"> | string
    userId?: StringWithAggregatesFilter<"UserCars"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCars"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCars"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    isEmailVerified?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    roleId?: IntFilter<"Users"> | number
    departmentId?: StringFilter<"Users"> | string
    role?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    department?: XOR<DepartmentsScalarRelationFilter, DepartmentsWhereInput>
    tokens?: TokenListRelationFilter
    address?: XOR<UserAddressNullableScalarRelationFilter, UserAddressWhereInput> | null
    car?: XOR<UserCarsNullableScalarRelationFilter, UserCarsWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    departmentId?: SortOrder
    role?: RolesOrderByWithRelationInput
    department?: DepartmentsOrderByWithRelationInput
    tokens?: TokenOrderByRelationAggregateInput
    address?: UserAddressOrderByWithRelationInput
    car?: UserCarsOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    isEmailVerified?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    roleId?: IntFilter<"Users"> | number
    departmentId?: StringFilter<"Users"> | string
    role?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    department?: XOR<DepartmentsScalarRelationFilter, DepartmentsWhereInput>
    tokens?: TokenListRelationFilter
    address?: XOR<UserAddressNullableScalarRelationFilter, UserAddressWhereInput> | null
    car?: XOR<UserCarsNullableScalarRelationFilter, UserCarsWhereInput> | null
  }, "id" | "email" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    departmentId?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    isEmailVerified?: BoolWithAggregatesFilter<"Users"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    roleId?: IntWithAggregatesFilter<"Users"> | number
    departmentId?: StringWithAggregatesFilter<"Users"> | string
  }

  export type CarsCreateInput = {
    id?: string
    name: string
    brand: string
    release_year: number
    plate_number: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_car?: UserCarsCreateNestedOneWithoutCarInput
    department: DepartmentsCreateNestedOneWithoutCarsInput
  }

  export type CarsUncheckedCreateInput = {
    id?: string
    name: string
    brand: string
    release_year: number
    plate_number: string
    status: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_car?: UserCarsUncheckedCreateNestedOneWithoutCarInput
  }

  export type CarsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_car?: UserCarsUpdateOneWithoutCarNestedInput
    department?: DepartmentsUpdateOneRequiredWithoutCarsNestedInput
  }

  export type CarsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_car?: UserCarsUncheckedUpdateOneWithoutCarNestedInput
  }

  export type CarsCreateManyInput = {
    id?: string
    name: string
    brand: string
    release_year: number
    plate_number: string
    status: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentsCreateInput = {
    id?: string
    name: string
    address: string
    category?: $Enums.Category
    province: string
    district: string
    subDistrict: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedManyWithoutDepartmentInput
    Cars?: CarsCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    category?: $Enums.Category
    province: string
    district: string
    subDistrict: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersUncheckedCreateNestedManyWithoutDepartmentInput
    Cars?: CarsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateManyWithoutDepartmentNestedInput
    Cars?: CarsUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUncheckedUpdateManyWithoutDepartmentNestedInput
    Cars?: CarsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsCreateManyInput = {
    id?: string
    name: string
    address: string
    category?: $Enums.Category
    province: string
    district: string
    subDistrict: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsCreateInput = {
    id?: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userCar: UserCarsCreateNestedOneWithoutLocationInput
  }

  export type LocationsUncheckedCreateInput = {
    id?: string
    location: string
    user_carId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCar?: UserCarsUpdateOneRequiredWithoutLocationNestedInput
  }

  export type LocationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    user_carId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsCreateManyInput = {
    id?: string
    location: string
    user_carId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    user_carId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reg_districtsCreateInput = {
    id?: string
    name: string
    regency: reg_regenciesCreateNestedOneWithoutDistrictInput
  }

  export type reg_districtsUncheckedCreateInput = {
    id?: string
    regencyId: string
    name: string
  }

  export type reg_districtsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    regency?: reg_regenciesUpdateOneRequiredWithoutDistrictNestedInput
  }

  export type reg_districtsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    regencyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reg_districtsCreateManyInput = {
    id?: string
    regencyId: string
    name: string
  }

  export type reg_districtsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reg_districtsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    regencyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reg_provincesCreateInput = {
    id?: string
    name: string
    Regency?: reg_regenciesCreateNestedManyWithoutProvinceInput
  }

  export type reg_provincesUncheckedCreateInput = {
    id?: string
    name: string
    Regency?: reg_regenciesUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type reg_provincesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Regency?: reg_regenciesUpdateManyWithoutProvinceNestedInput
  }

  export type reg_provincesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Regency?: reg_regenciesUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type reg_provincesCreateManyInput = {
    id?: string
    name: string
  }

  export type reg_provincesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reg_provincesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reg_regenciesCreateInput = {
    id?: string
    name: string
    Province: reg_provincesCreateNestedOneWithoutRegencyInput
    District?: reg_districtsCreateNestedManyWithoutRegencyInput
  }

  export type reg_regenciesUncheckedCreateInput = {
    id?: string
    provinceId: string
    name: string
    District?: reg_districtsUncheckedCreateNestedManyWithoutRegencyInput
  }

  export type reg_regenciesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Province?: reg_provincesUpdateOneRequiredWithoutRegencyNestedInput
    District?: reg_districtsUpdateManyWithoutRegencyNestedInput
  }

  export type reg_regenciesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provinceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    District?: reg_districtsUncheckedUpdateManyWithoutRegencyNestedInput
  }

  export type reg_regenciesCreateManyInput = {
    id?: string
    provinceId: string
    name: string
  }

  export type reg_regenciesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reg_regenciesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provinceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RolesCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedManyWithoutRoleInput
  }

  export type RolesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateManyWithoutRoleNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RolesCreateManyInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenCreateManyInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAddressCreateInput = {
    id?: string
    address: string
    rt: number
    rw: number
    district: string
    city: string
    province: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutAddressInput
  }

  export type UserAddressUncheckedCreateInput = {
    id?: string
    address: string
    rt: number
    rw: number
    district: string
    city: string
    province: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAddressNestedInput
  }

  export type UserAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressCreateManyInput = {
    id?: string
    address: string
    rt: number
    rw: number
    district: string
    city: string
    province: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCarsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutCarInput
    car: CarsCreateNestedOneWithoutUser_carInput
    location?: LocationsCreateNestedManyWithoutUserCarInput
  }

  export type UserCarsUncheckedCreateInput = {
    id?: string
    carId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: LocationsUncheckedCreateNestedManyWithoutUserCarInput
  }

  export type UserCarsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCarNestedInput
    car?: CarsUpdateOneRequiredWithoutUser_carNestedInput
    location?: LocationsUpdateManyWithoutUserCarNestedInput
  }

  export type UserCarsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationsUncheckedUpdateManyWithoutUserCarNestedInput
  }

  export type UserCarsCreateManyInput = {
    id?: string
    carId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCarsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCarsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RolesCreateNestedOneWithoutUsersInput
    department: DepartmentsCreateNestedOneWithoutUsersInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    address?: UserAddressCreateNestedOneWithoutUserInput
    car?: UserCarsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
    departmentId: string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    address?: UserAddressUncheckedCreateNestedOneWithoutUserInput
    car?: UserCarsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentsUpdateOneRequiredWithoutUsersNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    address?: UserAddressUpdateOneWithoutUserNestedInput
    car?: UserCarsUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    departmentId?: StringFieldUpdateOperationsInput | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    address?: UserAddressUncheckedUpdateOneWithoutUserNestedInput
    car?: UserCarsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
    departmentId: string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCarsNullableScalarRelationFilter = {
    is?: UserCarsWhereInput | null
    isNot?: UserCarsWhereInput | null
  }

  export type DepartmentsScalarRelationFilter = {
    is?: DepartmentsWhereInput
    isNot?: DepartmentsWhereInput
  }

  export type CarsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    release_year?: SortOrder
    plate_number?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarsAvgOrderByAggregateInput = {
    release_year?: SortOrder
  }

  export type CarsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    release_year?: SortOrder
    plate_number?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    release_year?: SortOrder
    plate_number?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarsSumOrderByAggregateInput = {
    release_year?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type CarsListRelationFilter = {
    every?: CarsWhereInput
    some?: CarsWhereInput
    none?: CarsWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    province?: SortOrder
    district?: SortOrder
    subDistrict?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    province?: SortOrder
    district?: SortOrder
    subDistrict?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    province?: SortOrder
    district?: SortOrder
    subDistrict?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type UserCarsScalarRelationFilter = {
    is?: UserCarsWhereInput
    isNot?: UserCarsWhereInput
  }

  export type LocationsCountOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    user_carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationsMaxOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    user_carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationsMinOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    user_carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Reg_regenciesScalarRelationFilter = {
    is?: reg_regenciesWhereInput
    isNot?: reg_regenciesWhereInput
  }

  export type reg_districtsCountOrderByAggregateInput = {
    id?: SortOrder
    regencyId?: SortOrder
    name?: SortOrder
  }

  export type reg_districtsMaxOrderByAggregateInput = {
    id?: SortOrder
    regencyId?: SortOrder
    name?: SortOrder
  }

  export type reg_districtsMinOrderByAggregateInput = {
    id?: SortOrder
    regencyId?: SortOrder
    name?: SortOrder
  }

  export type Reg_regenciesListRelationFilter = {
    every?: reg_regenciesWhereInput
    some?: reg_regenciesWhereInput
    none?: reg_regenciesWhereInput
  }

  export type reg_regenciesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reg_provincesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type reg_provincesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type reg_provincesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Reg_provincesScalarRelationFilter = {
    is?: reg_provincesWhereInput
    isNot?: reg_provincesWhereInput
  }

  export type Reg_districtsListRelationFilter = {
    every?: reg_districtsWhereInput
    some?: reg_districtsWhereInput
    none?: reg_districtsWhereInput
  }

  export type reg_districtsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reg_regenciesCountOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    name?: SortOrder
  }

  export type reg_regenciesMaxOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    name?: SortOrder
  }

  export type reg_regenciesMinOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    name?: SortOrder
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserAddressCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    district?: SortOrder
    city?: SortOrder
    province?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAddressAvgOrderByAggregateInput = {
    rt?: SortOrder
    rw?: SortOrder
  }

  export type UserAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    district?: SortOrder
    city?: SortOrder
    province?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAddressMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    district?: SortOrder
    city?: SortOrder
    province?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAddressSumOrderByAggregateInput = {
    rt?: SortOrder
    rw?: SortOrder
  }

  export type CarsScalarRelationFilter = {
    is?: CarsWhereInput
    isNot?: CarsWhereInput
  }

  export type LocationsListRelationFilter = {
    every?: LocationsWhereInput
    some?: LocationsWhereInput
    none?: LocationsWhereInput
  }

  export type LocationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCarsCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCarsMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCarsMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesScalarRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type UserAddressNullableScalarRelationFilter = {
    is?: UserAddressWhereInput | null
    isNot?: UserAddressWhereInput | null
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    departmentId?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    departmentId?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    departmentId?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type UserCarsCreateNestedOneWithoutCarInput = {
    create?: XOR<UserCarsCreateWithoutCarInput, UserCarsUncheckedCreateWithoutCarInput>
    connectOrCreate?: UserCarsCreateOrConnectWithoutCarInput
    connect?: UserCarsWhereUniqueInput
  }

  export type DepartmentsCreateNestedOneWithoutCarsInput = {
    create?: XOR<DepartmentsCreateWithoutCarsInput, DepartmentsUncheckedCreateWithoutCarsInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutCarsInput
    connect?: DepartmentsWhereUniqueInput
  }

  export type UserCarsUncheckedCreateNestedOneWithoutCarInput = {
    create?: XOR<UserCarsCreateWithoutCarInput, UserCarsUncheckedCreateWithoutCarInput>
    connectOrCreate?: UserCarsCreateOrConnectWithoutCarInput
    connect?: UserCarsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCarsUpdateOneWithoutCarNestedInput = {
    create?: XOR<UserCarsCreateWithoutCarInput, UserCarsUncheckedCreateWithoutCarInput>
    connectOrCreate?: UserCarsCreateOrConnectWithoutCarInput
    upsert?: UserCarsUpsertWithoutCarInput
    disconnect?: UserCarsWhereInput | boolean
    delete?: UserCarsWhereInput | boolean
    connect?: UserCarsWhereUniqueInput
    update?: XOR<XOR<UserCarsUpdateToOneWithWhereWithoutCarInput, UserCarsUpdateWithoutCarInput>, UserCarsUncheckedUpdateWithoutCarInput>
  }

  export type DepartmentsUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<DepartmentsCreateWithoutCarsInput, DepartmentsUncheckedCreateWithoutCarsInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutCarsInput
    upsert?: DepartmentsUpsertWithoutCarsInput
    connect?: DepartmentsWhereUniqueInput
    update?: XOR<XOR<DepartmentsUpdateToOneWithWhereWithoutCarsInput, DepartmentsUpdateWithoutCarsInput>, DepartmentsUncheckedUpdateWithoutCarsInput>
  }

  export type UserCarsUncheckedUpdateOneWithoutCarNestedInput = {
    create?: XOR<UserCarsCreateWithoutCarInput, UserCarsUncheckedCreateWithoutCarInput>
    connectOrCreate?: UserCarsCreateOrConnectWithoutCarInput
    upsert?: UserCarsUpsertWithoutCarInput
    disconnect?: UserCarsWhereInput | boolean
    delete?: UserCarsWhereInput | boolean
    connect?: UserCarsWhereUniqueInput
    update?: XOR<XOR<UserCarsUpdateToOneWithWhereWithoutCarInput, UserCarsUpdateWithoutCarInput>, UserCarsUncheckedUpdateWithoutCarInput>
  }

  export type UsersCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UsersCreateWithoutDepartmentInput, UsersUncheckedCreateWithoutDepartmentInput> | UsersCreateWithoutDepartmentInput[] | UsersUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutDepartmentInput | UsersCreateOrConnectWithoutDepartmentInput[]
    createMany?: UsersCreateManyDepartmentInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type CarsCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CarsCreateWithoutDepartmentInput, CarsUncheckedCreateWithoutDepartmentInput> | CarsCreateWithoutDepartmentInput[] | CarsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutDepartmentInput | CarsCreateOrConnectWithoutDepartmentInput[]
    createMany?: CarsCreateManyDepartmentInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UsersCreateWithoutDepartmentInput, UsersUncheckedCreateWithoutDepartmentInput> | UsersCreateWithoutDepartmentInput[] | UsersUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutDepartmentInput | UsersCreateOrConnectWithoutDepartmentInput[]
    createMany?: UsersCreateManyDepartmentInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type CarsUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CarsCreateWithoutDepartmentInput, CarsUncheckedCreateWithoutDepartmentInput> | CarsCreateWithoutDepartmentInput[] | CarsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutDepartmentInput | CarsCreateOrConnectWithoutDepartmentInput[]
    createMany?: CarsCreateManyDepartmentInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type UsersUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UsersCreateWithoutDepartmentInput, UsersUncheckedCreateWithoutDepartmentInput> | UsersCreateWithoutDepartmentInput[] | UsersUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutDepartmentInput | UsersCreateOrConnectWithoutDepartmentInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutDepartmentInput | UsersUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UsersCreateManyDepartmentInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutDepartmentInput | UsersUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutDepartmentInput | UsersUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type CarsUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CarsCreateWithoutDepartmentInput, CarsUncheckedCreateWithoutDepartmentInput> | CarsCreateWithoutDepartmentInput[] | CarsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutDepartmentInput | CarsCreateOrConnectWithoutDepartmentInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutDepartmentInput | CarsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CarsCreateManyDepartmentInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutDepartmentInput | CarsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutDepartmentInput | CarsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UsersCreateWithoutDepartmentInput, UsersUncheckedCreateWithoutDepartmentInput> | UsersCreateWithoutDepartmentInput[] | UsersUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutDepartmentInput | UsersCreateOrConnectWithoutDepartmentInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutDepartmentInput | UsersUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UsersCreateManyDepartmentInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutDepartmentInput | UsersUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutDepartmentInput | UsersUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type CarsUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CarsCreateWithoutDepartmentInput, CarsUncheckedCreateWithoutDepartmentInput> | CarsCreateWithoutDepartmentInput[] | CarsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutDepartmentInput | CarsCreateOrConnectWithoutDepartmentInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutDepartmentInput | CarsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CarsCreateManyDepartmentInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutDepartmentInput | CarsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutDepartmentInput | CarsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type UserCarsCreateNestedOneWithoutLocationInput = {
    create?: XOR<UserCarsCreateWithoutLocationInput, UserCarsUncheckedCreateWithoutLocationInput>
    connectOrCreate?: UserCarsCreateOrConnectWithoutLocationInput
    connect?: UserCarsWhereUniqueInput
  }

  export type UserCarsUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<UserCarsCreateWithoutLocationInput, UserCarsUncheckedCreateWithoutLocationInput>
    connectOrCreate?: UserCarsCreateOrConnectWithoutLocationInput
    upsert?: UserCarsUpsertWithoutLocationInput
    connect?: UserCarsWhereUniqueInput
    update?: XOR<XOR<UserCarsUpdateToOneWithWhereWithoutLocationInput, UserCarsUpdateWithoutLocationInput>, UserCarsUncheckedUpdateWithoutLocationInput>
  }

  export type reg_regenciesCreateNestedOneWithoutDistrictInput = {
    create?: XOR<reg_regenciesCreateWithoutDistrictInput, reg_regenciesUncheckedCreateWithoutDistrictInput>
    connectOrCreate?: reg_regenciesCreateOrConnectWithoutDistrictInput
    connect?: reg_regenciesWhereUniqueInput
  }

  export type reg_regenciesUpdateOneRequiredWithoutDistrictNestedInput = {
    create?: XOR<reg_regenciesCreateWithoutDistrictInput, reg_regenciesUncheckedCreateWithoutDistrictInput>
    connectOrCreate?: reg_regenciesCreateOrConnectWithoutDistrictInput
    upsert?: reg_regenciesUpsertWithoutDistrictInput
    connect?: reg_regenciesWhereUniqueInput
    update?: XOR<XOR<reg_regenciesUpdateToOneWithWhereWithoutDistrictInput, reg_regenciesUpdateWithoutDistrictInput>, reg_regenciesUncheckedUpdateWithoutDistrictInput>
  }

  export type reg_regenciesCreateNestedManyWithoutProvinceInput = {
    create?: XOR<reg_regenciesCreateWithoutProvinceInput, reg_regenciesUncheckedCreateWithoutProvinceInput> | reg_regenciesCreateWithoutProvinceInput[] | reg_regenciesUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: reg_regenciesCreateOrConnectWithoutProvinceInput | reg_regenciesCreateOrConnectWithoutProvinceInput[]
    createMany?: reg_regenciesCreateManyProvinceInputEnvelope
    connect?: reg_regenciesWhereUniqueInput | reg_regenciesWhereUniqueInput[]
  }

  export type reg_regenciesUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<reg_regenciesCreateWithoutProvinceInput, reg_regenciesUncheckedCreateWithoutProvinceInput> | reg_regenciesCreateWithoutProvinceInput[] | reg_regenciesUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: reg_regenciesCreateOrConnectWithoutProvinceInput | reg_regenciesCreateOrConnectWithoutProvinceInput[]
    createMany?: reg_regenciesCreateManyProvinceInputEnvelope
    connect?: reg_regenciesWhereUniqueInput | reg_regenciesWhereUniqueInput[]
  }

  export type reg_regenciesUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<reg_regenciesCreateWithoutProvinceInput, reg_regenciesUncheckedCreateWithoutProvinceInput> | reg_regenciesCreateWithoutProvinceInput[] | reg_regenciesUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: reg_regenciesCreateOrConnectWithoutProvinceInput | reg_regenciesCreateOrConnectWithoutProvinceInput[]
    upsert?: reg_regenciesUpsertWithWhereUniqueWithoutProvinceInput | reg_regenciesUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: reg_regenciesCreateManyProvinceInputEnvelope
    set?: reg_regenciesWhereUniqueInput | reg_regenciesWhereUniqueInput[]
    disconnect?: reg_regenciesWhereUniqueInput | reg_regenciesWhereUniqueInput[]
    delete?: reg_regenciesWhereUniqueInput | reg_regenciesWhereUniqueInput[]
    connect?: reg_regenciesWhereUniqueInput | reg_regenciesWhereUniqueInput[]
    update?: reg_regenciesUpdateWithWhereUniqueWithoutProvinceInput | reg_regenciesUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: reg_regenciesUpdateManyWithWhereWithoutProvinceInput | reg_regenciesUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: reg_regenciesScalarWhereInput | reg_regenciesScalarWhereInput[]
  }

  export type reg_regenciesUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<reg_regenciesCreateWithoutProvinceInput, reg_regenciesUncheckedCreateWithoutProvinceInput> | reg_regenciesCreateWithoutProvinceInput[] | reg_regenciesUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: reg_regenciesCreateOrConnectWithoutProvinceInput | reg_regenciesCreateOrConnectWithoutProvinceInput[]
    upsert?: reg_regenciesUpsertWithWhereUniqueWithoutProvinceInput | reg_regenciesUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: reg_regenciesCreateManyProvinceInputEnvelope
    set?: reg_regenciesWhereUniqueInput | reg_regenciesWhereUniqueInput[]
    disconnect?: reg_regenciesWhereUniqueInput | reg_regenciesWhereUniqueInput[]
    delete?: reg_regenciesWhereUniqueInput | reg_regenciesWhereUniqueInput[]
    connect?: reg_regenciesWhereUniqueInput | reg_regenciesWhereUniqueInput[]
    update?: reg_regenciesUpdateWithWhereUniqueWithoutProvinceInput | reg_regenciesUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: reg_regenciesUpdateManyWithWhereWithoutProvinceInput | reg_regenciesUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: reg_regenciesScalarWhereInput | reg_regenciesScalarWhereInput[]
  }

  export type reg_provincesCreateNestedOneWithoutRegencyInput = {
    create?: XOR<reg_provincesCreateWithoutRegencyInput, reg_provincesUncheckedCreateWithoutRegencyInput>
    connectOrCreate?: reg_provincesCreateOrConnectWithoutRegencyInput
    connect?: reg_provincesWhereUniqueInput
  }

  export type reg_districtsCreateNestedManyWithoutRegencyInput = {
    create?: XOR<reg_districtsCreateWithoutRegencyInput, reg_districtsUncheckedCreateWithoutRegencyInput> | reg_districtsCreateWithoutRegencyInput[] | reg_districtsUncheckedCreateWithoutRegencyInput[]
    connectOrCreate?: reg_districtsCreateOrConnectWithoutRegencyInput | reg_districtsCreateOrConnectWithoutRegencyInput[]
    createMany?: reg_districtsCreateManyRegencyInputEnvelope
    connect?: reg_districtsWhereUniqueInput | reg_districtsWhereUniqueInput[]
  }

  export type reg_districtsUncheckedCreateNestedManyWithoutRegencyInput = {
    create?: XOR<reg_districtsCreateWithoutRegencyInput, reg_districtsUncheckedCreateWithoutRegencyInput> | reg_districtsCreateWithoutRegencyInput[] | reg_districtsUncheckedCreateWithoutRegencyInput[]
    connectOrCreate?: reg_districtsCreateOrConnectWithoutRegencyInput | reg_districtsCreateOrConnectWithoutRegencyInput[]
    createMany?: reg_districtsCreateManyRegencyInputEnvelope
    connect?: reg_districtsWhereUniqueInput | reg_districtsWhereUniqueInput[]
  }

  export type reg_provincesUpdateOneRequiredWithoutRegencyNestedInput = {
    create?: XOR<reg_provincesCreateWithoutRegencyInput, reg_provincesUncheckedCreateWithoutRegencyInput>
    connectOrCreate?: reg_provincesCreateOrConnectWithoutRegencyInput
    upsert?: reg_provincesUpsertWithoutRegencyInput
    connect?: reg_provincesWhereUniqueInput
    update?: XOR<XOR<reg_provincesUpdateToOneWithWhereWithoutRegencyInput, reg_provincesUpdateWithoutRegencyInput>, reg_provincesUncheckedUpdateWithoutRegencyInput>
  }

  export type reg_districtsUpdateManyWithoutRegencyNestedInput = {
    create?: XOR<reg_districtsCreateWithoutRegencyInput, reg_districtsUncheckedCreateWithoutRegencyInput> | reg_districtsCreateWithoutRegencyInput[] | reg_districtsUncheckedCreateWithoutRegencyInput[]
    connectOrCreate?: reg_districtsCreateOrConnectWithoutRegencyInput | reg_districtsCreateOrConnectWithoutRegencyInput[]
    upsert?: reg_districtsUpsertWithWhereUniqueWithoutRegencyInput | reg_districtsUpsertWithWhereUniqueWithoutRegencyInput[]
    createMany?: reg_districtsCreateManyRegencyInputEnvelope
    set?: reg_districtsWhereUniqueInput | reg_districtsWhereUniqueInput[]
    disconnect?: reg_districtsWhereUniqueInput | reg_districtsWhereUniqueInput[]
    delete?: reg_districtsWhereUniqueInput | reg_districtsWhereUniqueInput[]
    connect?: reg_districtsWhereUniqueInput | reg_districtsWhereUniqueInput[]
    update?: reg_districtsUpdateWithWhereUniqueWithoutRegencyInput | reg_districtsUpdateWithWhereUniqueWithoutRegencyInput[]
    updateMany?: reg_districtsUpdateManyWithWhereWithoutRegencyInput | reg_districtsUpdateManyWithWhereWithoutRegencyInput[]
    deleteMany?: reg_districtsScalarWhereInput | reg_districtsScalarWhereInput[]
  }

  export type reg_districtsUncheckedUpdateManyWithoutRegencyNestedInput = {
    create?: XOR<reg_districtsCreateWithoutRegencyInput, reg_districtsUncheckedCreateWithoutRegencyInput> | reg_districtsCreateWithoutRegencyInput[] | reg_districtsUncheckedCreateWithoutRegencyInput[]
    connectOrCreate?: reg_districtsCreateOrConnectWithoutRegencyInput | reg_districtsCreateOrConnectWithoutRegencyInput[]
    upsert?: reg_districtsUpsertWithWhereUniqueWithoutRegencyInput | reg_districtsUpsertWithWhereUniqueWithoutRegencyInput[]
    createMany?: reg_districtsCreateManyRegencyInputEnvelope
    set?: reg_districtsWhereUniqueInput | reg_districtsWhereUniqueInput[]
    disconnect?: reg_districtsWhereUniqueInput | reg_districtsWhereUniqueInput[]
    delete?: reg_districtsWhereUniqueInput | reg_districtsWhereUniqueInput[]
    connect?: reg_districtsWhereUniqueInput | reg_districtsWhereUniqueInput[]
    update?: reg_districtsUpdateWithWhereUniqueWithoutRegencyInput | reg_districtsUpdateWithWhereUniqueWithoutRegencyInput[]
    updateMany?: reg_districtsUpdateManyWithWhereWithoutRegencyInput | reg_districtsUpdateManyWithWhereWithoutRegencyInput[]
    deleteMany?: reg_districtsScalarWhereInput | reg_districtsScalarWhereInput[]
  }

  export type UsersCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRoleInput | UsersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRoleInput | UsersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRoleInput | UsersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRoleInput | UsersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRoleInput | UsersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRoleInput | UsersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutTokensInput = {
    create?: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTokensInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsersUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTokensInput
    upsert?: UsersUpsertWithoutTokensInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTokensInput, UsersUpdateWithoutTokensInput>, UsersUncheckedUpdateWithoutTokensInput>
  }

  export type UsersCreateNestedOneWithoutAddressInput = {
    create?: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAddressInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAddressInput
    upsert?: UsersUpsertWithoutAddressInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAddressInput, UsersUpdateWithoutAddressInput>, UsersUncheckedUpdateWithoutAddressInput>
  }

  export type UsersCreateNestedOneWithoutCarInput = {
    create?: XOR<UsersCreateWithoutCarInput, UsersUncheckedCreateWithoutCarInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCarInput
    connect?: UsersWhereUniqueInput
  }

  export type CarsCreateNestedOneWithoutUser_carInput = {
    create?: XOR<CarsCreateWithoutUser_carInput, CarsUncheckedCreateWithoutUser_carInput>
    connectOrCreate?: CarsCreateOrConnectWithoutUser_carInput
    connect?: CarsWhereUniqueInput
  }

  export type LocationsCreateNestedManyWithoutUserCarInput = {
    create?: XOR<LocationsCreateWithoutUserCarInput, LocationsUncheckedCreateWithoutUserCarInput> | LocationsCreateWithoutUserCarInput[] | LocationsUncheckedCreateWithoutUserCarInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutUserCarInput | LocationsCreateOrConnectWithoutUserCarInput[]
    createMany?: LocationsCreateManyUserCarInputEnvelope
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
  }

  export type LocationsUncheckedCreateNestedManyWithoutUserCarInput = {
    create?: XOR<LocationsCreateWithoutUserCarInput, LocationsUncheckedCreateWithoutUserCarInput> | LocationsCreateWithoutUserCarInput[] | LocationsUncheckedCreateWithoutUserCarInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutUserCarInput | LocationsCreateOrConnectWithoutUserCarInput[]
    createMany?: LocationsCreateManyUserCarInputEnvelope
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutCarNestedInput = {
    create?: XOR<UsersCreateWithoutCarInput, UsersUncheckedCreateWithoutCarInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCarInput
    upsert?: UsersUpsertWithoutCarInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCarInput, UsersUpdateWithoutCarInput>, UsersUncheckedUpdateWithoutCarInput>
  }

  export type CarsUpdateOneRequiredWithoutUser_carNestedInput = {
    create?: XOR<CarsCreateWithoutUser_carInput, CarsUncheckedCreateWithoutUser_carInput>
    connectOrCreate?: CarsCreateOrConnectWithoutUser_carInput
    upsert?: CarsUpsertWithoutUser_carInput
    connect?: CarsWhereUniqueInput
    update?: XOR<XOR<CarsUpdateToOneWithWhereWithoutUser_carInput, CarsUpdateWithoutUser_carInput>, CarsUncheckedUpdateWithoutUser_carInput>
  }

  export type LocationsUpdateManyWithoutUserCarNestedInput = {
    create?: XOR<LocationsCreateWithoutUserCarInput, LocationsUncheckedCreateWithoutUserCarInput> | LocationsCreateWithoutUserCarInput[] | LocationsUncheckedCreateWithoutUserCarInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutUserCarInput | LocationsCreateOrConnectWithoutUserCarInput[]
    upsert?: LocationsUpsertWithWhereUniqueWithoutUserCarInput | LocationsUpsertWithWhereUniqueWithoutUserCarInput[]
    createMany?: LocationsCreateManyUserCarInputEnvelope
    set?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    disconnect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    delete?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    update?: LocationsUpdateWithWhereUniqueWithoutUserCarInput | LocationsUpdateWithWhereUniqueWithoutUserCarInput[]
    updateMany?: LocationsUpdateManyWithWhereWithoutUserCarInput | LocationsUpdateManyWithWhereWithoutUserCarInput[]
    deleteMany?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
  }

  export type LocationsUncheckedUpdateManyWithoutUserCarNestedInput = {
    create?: XOR<LocationsCreateWithoutUserCarInput, LocationsUncheckedCreateWithoutUserCarInput> | LocationsCreateWithoutUserCarInput[] | LocationsUncheckedCreateWithoutUserCarInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutUserCarInput | LocationsCreateOrConnectWithoutUserCarInput[]
    upsert?: LocationsUpsertWithWhereUniqueWithoutUserCarInput | LocationsUpsertWithWhereUniqueWithoutUserCarInput[]
    createMany?: LocationsCreateManyUserCarInputEnvelope
    set?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    disconnect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    delete?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    update?: LocationsUpdateWithWhereUniqueWithoutUserCarInput | LocationsUpdateWithWhereUniqueWithoutUserCarInput[]
    updateMany?: LocationsUpdateManyWithWhereWithoutUserCarInput | LocationsUpdateManyWithWhereWithoutUserCarInput[]
    deleteMany?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
  }

  export type RolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    connect?: RolesWhereUniqueInput
  }

  export type DepartmentsCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentsCreateWithoutUsersInput, DepartmentsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutUsersInput
    connect?: DepartmentsWhereUniqueInput
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type UserAddressCreateNestedOneWithoutUserInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput
    connect?: UserAddressWhereUniqueInput
  }

  export type UserCarsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCarsCreateWithoutUserInput, UserCarsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCarsCreateOrConnectWithoutUserInput
    connect?: UserCarsWhereUniqueInput
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type UserAddressUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput
    connect?: UserAddressWhereUniqueInput
  }

  export type UserCarsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCarsCreateWithoutUserInput, UserCarsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCarsCreateOrConnectWithoutUserInput
    connect?: UserCarsWhereUniqueInput
  }

  export type RolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    upsert?: RolesUpsertWithoutUsersInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutUsersInput, RolesUpdateWithoutUsersInput>, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentsUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<DepartmentsCreateWithoutUsersInput, DepartmentsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutUsersInput
    upsert?: DepartmentsUpsertWithoutUsersInput
    connect?: DepartmentsWhereUniqueInput
    update?: XOR<XOR<DepartmentsUpdateToOneWithWhereWithoutUsersInput, DepartmentsUpdateWithoutUsersInput>, DepartmentsUncheckedUpdateWithoutUsersInput>
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type UserAddressUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput
    upsert?: UserAddressUpsertWithoutUserInput
    disconnect?: UserAddressWhereInput | boolean
    delete?: UserAddressWhereInput | boolean
    connect?: UserAddressWhereUniqueInput
    update?: XOR<XOR<UserAddressUpdateToOneWithWhereWithoutUserInput, UserAddressUpdateWithoutUserInput>, UserAddressUncheckedUpdateWithoutUserInput>
  }

  export type UserCarsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCarsCreateWithoutUserInput, UserCarsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCarsCreateOrConnectWithoutUserInput
    upsert?: UserCarsUpsertWithoutUserInput
    disconnect?: UserCarsWhereInput | boolean
    delete?: UserCarsWhereInput | boolean
    connect?: UserCarsWhereUniqueInput
    update?: XOR<XOR<UserCarsUpdateToOneWithWhereWithoutUserInput, UserCarsUpdateWithoutUserInput>, UserCarsUncheckedUpdateWithoutUserInput>
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type UserAddressUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput
    upsert?: UserAddressUpsertWithoutUserInput
    disconnect?: UserAddressWhereInput | boolean
    delete?: UserAddressWhereInput | boolean
    connect?: UserAddressWhereUniqueInput
    update?: XOR<XOR<UserAddressUpdateToOneWithWhereWithoutUserInput, UserAddressUpdateWithoutUserInput>, UserAddressUncheckedUpdateWithoutUserInput>
  }

  export type UserCarsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCarsCreateWithoutUserInput, UserCarsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCarsCreateOrConnectWithoutUserInput
    upsert?: UserCarsUpsertWithoutUserInput
    disconnect?: UserCarsWhereInput | boolean
    delete?: UserCarsWhereInput | boolean
    connect?: UserCarsWhereUniqueInput
    update?: XOR<XOR<UserCarsUpdateToOneWithWhereWithoutUserInput, UserCarsUpdateWithoutUserInput>, UserCarsUncheckedUpdateWithoutUserInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCarsCreateWithoutCarInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutCarInput
    location?: LocationsCreateNestedManyWithoutUserCarInput
  }

  export type UserCarsUncheckedCreateWithoutCarInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: LocationsUncheckedCreateNestedManyWithoutUserCarInput
  }

  export type UserCarsCreateOrConnectWithoutCarInput = {
    where: UserCarsWhereUniqueInput
    create: XOR<UserCarsCreateWithoutCarInput, UserCarsUncheckedCreateWithoutCarInput>
  }

  export type DepartmentsCreateWithoutCarsInput = {
    id?: string
    name: string
    address: string
    category?: $Enums.Category
    province: string
    district: string
    subDistrict: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUncheckedCreateWithoutCarsInput = {
    id?: string
    name: string
    address: string
    category?: $Enums.Category
    province: string
    district: string
    subDistrict: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsCreateOrConnectWithoutCarsInput = {
    where: DepartmentsWhereUniqueInput
    create: XOR<DepartmentsCreateWithoutCarsInput, DepartmentsUncheckedCreateWithoutCarsInput>
  }

  export type UserCarsUpsertWithoutCarInput = {
    update: XOR<UserCarsUpdateWithoutCarInput, UserCarsUncheckedUpdateWithoutCarInput>
    create: XOR<UserCarsCreateWithoutCarInput, UserCarsUncheckedCreateWithoutCarInput>
    where?: UserCarsWhereInput
  }

  export type UserCarsUpdateToOneWithWhereWithoutCarInput = {
    where?: UserCarsWhereInput
    data: XOR<UserCarsUpdateWithoutCarInput, UserCarsUncheckedUpdateWithoutCarInput>
  }

  export type UserCarsUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCarNestedInput
    location?: LocationsUpdateManyWithoutUserCarNestedInput
  }

  export type UserCarsUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationsUncheckedUpdateManyWithoutUserCarNestedInput
  }

  export type DepartmentsUpsertWithoutCarsInput = {
    update: XOR<DepartmentsUpdateWithoutCarsInput, DepartmentsUncheckedUpdateWithoutCarsInput>
    create: XOR<DepartmentsCreateWithoutCarsInput, DepartmentsUncheckedCreateWithoutCarsInput>
    where?: DepartmentsWhereInput
  }

  export type DepartmentsUpdateToOneWithWhereWithoutCarsInput = {
    where?: DepartmentsWhereInput
    data: XOR<DepartmentsUpdateWithoutCarsInput, DepartmentsUncheckedUpdateWithoutCarsInput>
  }

  export type DepartmentsUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsUncheckedUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type UsersCreateWithoutDepartmentInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RolesCreateNestedOneWithoutUsersInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    address?: UserAddressCreateNestedOneWithoutUserInput
    car?: UserCarsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutDepartmentInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    address?: UserAddressUncheckedCreateNestedOneWithoutUserInput
    car?: UserCarsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutDepartmentInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDepartmentInput, UsersUncheckedCreateWithoutDepartmentInput>
  }

  export type UsersCreateManyDepartmentInputEnvelope = {
    data: UsersCreateManyDepartmentInput | UsersCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type CarsCreateWithoutDepartmentInput = {
    id?: string
    name: string
    brand: string
    release_year: number
    plate_number: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_car?: UserCarsCreateNestedOneWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    brand: string
    release_year: number
    plate_number: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_car?: UserCarsUncheckedCreateNestedOneWithoutCarInput
  }

  export type CarsCreateOrConnectWithoutDepartmentInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutDepartmentInput, CarsUncheckedCreateWithoutDepartmentInput>
  }

  export type CarsCreateManyDepartmentInputEnvelope = {
    data: CarsCreateManyDepartmentInput | CarsCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutDepartmentInput, UsersUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UsersCreateWithoutDepartmentInput, UsersUncheckedCreateWithoutDepartmentInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutDepartmentInput, UsersUncheckedUpdateWithoutDepartmentInput>
  }

  export type UsersUpdateManyWithWhereWithoutDepartmentInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    isEmailVerified?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    roleId?: IntFilter<"Users"> | number
    departmentId?: StringFilter<"Users"> | string
  }

  export type CarsUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: CarsWhereUniqueInput
    update: XOR<CarsUpdateWithoutDepartmentInput, CarsUncheckedUpdateWithoutDepartmentInput>
    create: XOR<CarsCreateWithoutDepartmentInput, CarsUncheckedCreateWithoutDepartmentInput>
  }

  export type CarsUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: CarsWhereUniqueInput
    data: XOR<CarsUpdateWithoutDepartmentInput, CarsUncheckedUpdateWithoutDepartmentInput>
  }

  export type CarsUpdateManyWithWhereWithoutDepartmentInput = {
    where: CarsScalarWhereInput
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type CarsScalarWhereInput = {
    AND?: CarsScalarWhereInput | CarsScalarWhereInput[]
    OR?: CarsScalarWhereInput[]
    NOT?: CarsScalarWhereInput | CarsScalarWhereInput[]
    id?: StringFilter<"Cars"> | string
    name?: StringFilter<"Cars"> | string
    brand?: StringFilter<"Cars"> | string
    release_year?: IntFilter<"Cars"> | number
    plate_number?: StringFilter<"Cars"> | string
    status?: StringFilter<"Cars"> | string
    departmentId?: StringFilter<"Cars"> | string
    createdAt?: DateTimeFilter<"Cars"> | Date | string
    updatedAt?: DateTimeFilter<"Cars"> | Date | string
  }

  export type UserCarsCreateWithoutLocationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutCarInput
    car: CarsCreateNestedOneWithoutUser_carInput
  }

  export type UserCarsUncheckedCreateWithoutLocationInput = {
    id?: string
    carId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCarsCreateOrConnectWithoutLocationInput = {
    where: UserCarsWhereUniqueInput
    create: XOR<UserCarsCreateWithoutLocationInput, UserCarsUncheckedCreateWithoutLocationInput>
  }

  export type UserCarsUpsertWithoutLocationInput = {
    update: XOR<UserCarsUpdateWithoutLocationInput, UserCarsUncheckedUpdateWithoutLocationInput>
    create: XOR<UserCarsCreateWithoutLocationInput, UserCarsUncheckedCreateWithoutLocationInput>
    where?: UserCarsWhereInput
  }

  export type UserCarsUpdateToOneWithWhereWithoutLocationInput = {
    where?: UserCarsWhereInput
    data: XOR<UserCarsUpdateWithoutLocationInput, UserCarsUncheckedUpdateWithoutLocationInput>
  }

  export type UserCarsUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCarNestedInput
    car?: CarsUpdateOneRequiredWithoutUser_carNestedInput
  }

  export type UserCarsUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reg_regenciesCreateWithoutDistrictInput = {
    id?: string
    name: string
    Province: reg_provincesCreateNestedOneWithoutRegencyInput
  }

  export type reg_regenciesUncheckedCreateWithoutDistrictInput = {
    id?: string
    provinceId: string
    name: string
  }

  export type reg_regenciesCreateOrConnectWithoutDistrictInput = {
    where: reg_regenciesWhereUniqueInput
    create: XOR<reg_regenciesCreateWithoutDistrictInput, reg_regenciesUncheckedCreateWithoutDistrictInput>
  }

  export type reg_regenciesUpsertWithoutDistrictInput = {
    update: XOR<reg_regenciesUpdateWithoutDistrictInput, reg_regenciesUncheckedUpdateWithoutDistrictInput>
    create: XOR<reg_regenciesCreateWithoutDistrictInput, reg_regenciesUncheckedCreateWithoutDistrictInput>
    where?: reg_regenciesWhereInput
  }

  export type reg_regenciesUpdateToOneWithWhereWithoutDistrictInput = {
    where?: reg_regenciesWhereInput
    data: XOR<reg_regenciesUpdateWithoutDistrictInput, reg_regenciesUncheckedUpdateWithoutDistrictInput>
  }

  export type reg_regenciesUpdateWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Province?: reg_provincesUpdateOneRequiredWithoutRegencyNestedInput
  }

  export type reg_regenciesUncheckedUpdateWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    provinceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reg_regenciesCreateWithoutProvinceInput = {
    id?: string
    name: string
    District?: reg_districtsCreateNestedManyWithoutRegencyInput
  }

  export type reg_regenciesUncheckedCreateWithoutProvinceInput = {
    id?: string
    name: string
    District?: reg_districtsUncheckedCreateNestedManyWithoutRegencyInput
  }

  export type reg_regenciesCreateOrConnectWithoutProvinceInput = {
    where: reg_regenciesWhereUniqueInput
    create: XOR<reg_regenciesCreateWithoutProvinceInput, reg_regenciesUncheckedCreateWithoutProvinceInput>
  }

  export type reg_regenciesCreateManyProvinceInputEnvelope = {
    data: reg_regenciesCreateManyProvinceInput | reg_regenciesCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type reg_regenciesUpsertWithWhereUniqueWithoutProvinceInput = {
    where: reg_regenciesWhereUniqueInput
    update: XOR<reg_regenciesUpdateWithoutProvinceInput, reg_regenciesUncheckedUpdateWithoutProvinceInput>
    create: XOR<reg_regenciesCreateWithoutProvinceInput, reg_regenciesUncheckedCreateWithoutProvinceInput>
  }

  export type reg_regenciesUpdateWithWhereUniqueWithoutProvinceInput = {
    where: reg_regenciesWhereUniqueInput
    data: XOR<reg_regenciesUpdateWithoutProvinceInput, reg_regenciesUncheckedUpdateWithoutProvinceInput>
  }

  export type reg_regenciesUpdateManyWithWhereWithoutProvinceInput = {
    where: reg_regenciesScalarWhereInput
    data: XOR<reg_regenciesUpdateManyMutationInput, reg_regenciesUncheckedUpdateManyWithoutProvinceInput>
  }

  export type reg_regenciesScalarWhereInput = {
    AND?: reg_regenciesScalarWhereInput | reg_regenciesScalarWhereInput[]
    OR?: reg_regenciesScalarWhereInput[]
    NOT?: reg_regenciesScalarWhereInput | reg_regenciesScalarWhereInput[]
    id?: StringFilter<"reg_regencies"> | string
    provinceId?: StringFilter<"reg_regencies"> | string
    name?: StringFilter<"reg_regencies"> | string
  }

  export type reg_provincesCreateWithoutRegencyInput = {
    id?: string
    name: string
  }

  export type reg_provincesUncheckedCreateWithoutRegencyInput = {
    id?: string
    name: string
  }

  export type reg_provincesCreateOrConnectWithoutRegencyInput = {
    where: reg_provincesWhereUniqueInput
    create: XOR<reg_provincesCreateWithoutRegencyInput, reg_provincesUncheckedCreateWithoutRegencyInput>
  }

  export type reg_districtsCreateWithoutRegencyInput = {
    id?: string
    name: string
  }

  export type reg_districtsUncheckedCreateWithoutRegencyInput = {
    id?: string
    name: string
  }

  export type reg_districtsCreateOrConnectWithoutRegencyInput = {
    where: reg_districtsWhereUniqueInput
    create: XOR<reg_districtsCreateWithoutRegencyInput, reg_districtsUncheckedCreateWithoutRegencyInput>
  }

  export type reg_districtsCreateManyRegencyInputEnvelope = {
    data: reg_districtsCreateManyRegencyInput | reg_districtsCreateManyRegencyInput[]
    skipDuplicates?: boolean
  }

  export type reg_provincesUpsertWithoutRegencyInput = {
    update: XOR<reg_provincesUpdateWithoutRegencyInput, reg_provincesUncheckedUpdateWithoutRegencyInput>
    create: XOR<reg_provincesCreateWithoutRegencyInput, reg_provincesUncheckedCreateWithoutRegencyInput>
    where?: reg_provincesWhereInput
  }

  export type reg_provincesUpdateToOneWithWhereWithoutRegencyInput = {
    where?: reg_provincesWhereInput
    data: XOR<reg_provincesUpdateWithoutRegencyInput, reg_provincesUncheckedUpdateWithoutRegencyInput>
  }

  export type reg_provincesUpdateWithoutRegencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reg_provincesUncheckedUpdateWithoutRegencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reg_districtsUpsertWithWhereUniqueWithoutRegencyInput = {
    where: reg_districtsWhereUniqueInput
    update: XOR<reg_districtsUpdateWithoutRegencyInput, reg_districtsUncheckedUpdateWithoutRegencyInput>
    create: XOR<reg_districtsCreateWithoutRegencyInput, reg_districtsUncheckedCreateWithoutRegencyInput>
  }

  export type reg_districtsUpdateWithWhereUniqueWithoutRegencyInput = {
    where: reg_districtsWhereUniqueInput
    data: XOR<reg_districtsUpdateWithoutRegencyInput, reg_districtsUncheckedUpdateWithoutRegencyInput>
  }

  export type reg_districtsUpdateManyWithWhereWithoutRegencyInput = {
    where: reg_districtsScalarWhereInput
    data: XOR<reg_districtsUpdateManyMutationInput, reg_districtsUncheckedUpdateManyWithoutRegencyInput>
  }

  export type reg_districtsScalarWhereInput = {
    AND?: reg_districtsScalarWhereInput | reg_districtsScalarWhereInput[]
    OR?: reg_districtsScalarWhereInput[]
    NOT?: reg_districtsScalarWhereInput | reg_districtsScalarWhereInput[]
    id?: StringFilter<"reg_districts"> | string
    regencyId?: StringFilter<"reg_districts"> | string
    name?: StringFilter<"reg_districts"> | string
  }

  export type UsersCreateWithoutRoleInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentsCreateNestedOneWithoutUsersInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    address?: UserAddressCreateNestedOneWithoutUserInput
    car?: UserCarsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId: string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    address?: UserAddressUncheckedCreateNestedOneWithoutUserInput
    car?: UserCarsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRoleInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
  }

  export type UsersCreateManyRoleInputEnvelope = {
    data: UsersCreateManyRoleInput | UsersCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutRoleInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutRoleInput, UsersUncheckedUpdateWithoutRoleInput>
    create: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutRoleInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutRoleInput, UsersUncheckedUpdateWithoutRoleInput>
  }

  export type UsersUpdateManyWithWhereWithoutRoleInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutRoleInput>
  }

  export type UsersCreateWithoutTokensInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RolesCreateNestedOneWithoutUsersInput
    department: DepartmentsCreateNestedOneWithoutUsersInput
    address?: UserAddressCreateNestedOneWithoutUserInput
    car?: UserCarsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTokensInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
    departmentId: string
    address?: UserAddressUncheckedCreateNestedOneWithoutUserInput
    car?: UserCarsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTokensInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
  }

  export type UsersUpsertWithoutTokensInput = {
    update: XOR<UsersUpdateWithoutTokensInput, UsersUncheckedUpdateWithoutTokensInput>
    create: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTokensInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTokensInput, UsersUncheckedUpdateWithoutTokensInput>
  }

  export type UsersUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentsUpdateOneRequiredWithoutUsersNestedInput
    address?: UserAddressUpdateOneWithoutUserNestedInput
    car?: UserCarsUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    departmentId?: StringFieldUpdateOperationsInput | string
    address?: UserAddressUncheckedUpdateOneWithoutUserNestedInput
    car?: UserCarsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateWithoutAddressInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RolesCreateNestedOneWithoutUsersInput
    department: DepartmentsCreateNestedOneWithoutUsersInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    car?: UserCarsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutAddressInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
    departmentId: string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    car?: UserCarsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutAddressInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput>
  }

  export type UsersUpsertWithoutAddressInput = {
    update: XOR<UsersUpdateWithoutAddressInput, UsersUncheckedUpdateWithoutAddressInput>
    create: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAddressInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAddressInput, UsersUncheckedUpdateWithoutAddressInput>
  }

  export type UsersUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentsUpdateOneRequiredWithoutUsersNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    car?: UserCarsUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    departmentId?: StringFieldUpdateOperationsInput | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    car?: UserCarsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateWithoutCarInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RolesCreateNestedOneWithoutUsersInput
    department: DepartmentsCreateNestedOneWithoutUsersInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    address?: UserAddressCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCarInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
    departmentId: string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    address?: UserAddressUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCarInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCarInput, UsersUncheckedCreateWithoutCarInput>
  }

  export type CarsCreateWithoutUser_carInput = {
    id?: string
    name: string
    brand: string
    release_year: number
    plate_number: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentsCreateNestedOneWithoutCarsInput
  }

  export type CarsUncheckedCreateWithoutUser_carInput = {
    id?: string
    name: string
    brand: string
    release_year: number
    plate_number: string
    status: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarsCreateOrConnectWithoutUser_carInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutUser_carInput, CarsUncheckedCreateWithoutUser_carInput>
  }

  export type LocationsCreateWithoutUserCarInput = {
    id?: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationsUncheckedCreateWithoutUserCarInput = {
    id?: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationsCreateOrConnectWithoutUserCarInput = {
    where: LocationsWhereUniqueInput
    create: XOR<LocationsCreateWithoutUserCarInput, LocationsUncheckedCreateWithoutUserCarInput>
  }

  export type LocationsCreateManyUserCarInputEnvelope = {
    data: LocationsCreateManyUserCarInput | LocationsCreateManyUserCarInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCarInput = {
    update: XOR<UsersUpdateWithoutCarInput, UsersUncheckedUpdateWithoutCarInput>
    create: XOR<UsersCreateWithoutCarInput, UsersUncheckedCreateWithoutCarInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCarInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCarInput, UsersUncheckedUpdateWithoutCarInput>
  }

  export type UsersUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentsUpdateOneRequiredWithoutUsersNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    address?: UserAddressUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    departmentId?: StringFieldUpdateOperationsInput | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    address?: UserAddressUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CarsUpsertWithoutUser_carInput = {
    update: XOR<CarsUpdateWithoutUser_carInput, CarsUncheckedUpdateWithoutUser_carInput>
    create: XOR<CarsCreateWithoutUser_carInput, CarsUncheckedCreateWithoutUser_carInput>
    where?: CarsWhereInput
  }

  export type CarsUpdateToOneWithWhereWithoutUser_carInput = {
    where?: CarsWhereInput
    data: XOR<CarsUpdateWithoutUser_carInput, CarsUncheckedUpdateWithoutUser_carInput>
  }

  export type CarsUpdateWithoutUser_carInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentsUpdateOneRequiredWithoutCarsNestedInput
  }

  export type CarsUncheckedUpdateWithoutUser_carInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUpsertWithWhereUniqueWithoutUserCarInput = {
    where: LocationsWhereUniqueInput
    update: XOR<LocationsUpdateWithoutUserCarInput, LocationsUncheckedUpdateWithoutUserCarInput>
    create: XOR<LocationsCreateWithoutUserCarInput, LocationsUncheckedCreateWithoutUserCarInput>
  }

  export type LocationsUpdateWithWhereUniqueWithoutUserCarInput = {
    where: LocationsWhereUniqueInput
    data: XOR<LocationsUpdateWithoutUserCarInput, LocationsUncheckedUpdateWithoutUserCarInput>
  }

  export type LocationsUpdateManyWithWhereWithoutUserCarInput = {
    where: LocationsScalarWhereInput
    data: XOR<LocationsUpdateManyMutationInput, LocationsUncheckedUpdateManyWithoutUserCarInput>
  }

  export type LocationsScalarWhereInput = {
    AND?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
    OR?: LocationsScalarWhereInput[]
    NOT?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
    id?: StringFilter<"Locations"> | string
    location?: StringFilter<"Locations"> | string
    user_carId?: StringFilter<"Locations"> | string
    createdAt?: DateTimeFilter<"Locations"> | Date | string
    updatedAt?: DateTimeFilter<"Locations"> | Date | string
  }

  export type RolesCreateWithoutUsersInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolesCreateOrConnectWithoutUsersInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
  }

  export type DepartmentsCreateWithoutUsersInput = {
    id?: string
    name: string
    address: string
    category?: $Enums.Category
    province: string
    district: string
    subDistrict: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Cars?: CarsCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    address: string
    category?: $Enums.Category
    province: string
    district: string
    subDistrict: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Cars?: CarsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsCreateOrConnectWithoutUsersInput = {
    where: DepartmentsWhereUniqueInput
    create: XOR<DepartmentsCreateWithoutUsersInput, DepartmentsUncheckedCreateWithoutUsersInput>
  }

  export type TokenCreateWithoutUserInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAddressCreateWithoutUserInput = {
    id?: string
    address: string
    rt: number
    rw: number
    district: string
    city: string
    province: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressUncheckedCreateWithoutUserInput = {
    id?: string
    address: string
    rt: number
    rw: number
    district: string
    city: string
    province: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressCreateOrConnectWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    create: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
  }

  export type UserCarsCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarsCreateNestedOneWithoutUser_carInput
    location?: LocationsCreateNestedManyWithoutUserCarInput
  }

  export type UserCarsUncheckedCreateWithoutUserInput = {
    id?: string
    carId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: LocationsUncheckedCreateNestedManyWithoutUserCarInput
  }

  export type UserCarsCreateOrConnectWithoutUserInput = {
    where: UserCarsWhereUniqueInput
    create: XOR<UserCarsCreateWithoutUserInput, UserCarsUncheckedCreateWithoutUserInput>
  }

  export type RolesUpsertWithoutUsersInput = {
    update: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type RolesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentsUpsertWithoutUsersInput = {
    update: XOR<DepartmentsUpdateWithoutUsersInput, DepartmentsUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentsCreateWithoutUsersInput, DepartmentsUncheckedCreateWithoutUsersInput>
    where?: DepartmentsWhereInput
  }

  export type DepartmentsUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentsWhereInput
    data: XOR<DepartmentsUpdateWithoutUsersInput, DepartmentsUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cars?: CarsUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cars?: CarsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: StringFilter<"Token"> | string
  }

  export type UserAddressUpsertWithoutUserInput = {
    update: XOR<UserAddressUpdateWithoutUserInput, UserAddressUncheckedUpdateWithoutUserInput>
    create: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
    where?: UserAddressWhereInput
  }

  export type UserAddressUpdateToOneWithWhereWithoutUserInput = {
    where?: UserAddressWhereInput
    data: XOR<UserAddressUpdateWithoutUserInput, UserAddressUncheckedUpdateWithoutUserInput>
  }

  export type UserAddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCarsUpsertWithoutUserInput = {
    update: XOR<UserCarsUpdateWithoutUserInput, UserCarsUncheckedUpdateWithoutUserInput>
    create: XOR<UserCarsCreateWithoutUserInput, UserCarsUncheckedCreateWithoutUserInput>
    where?: UserCarsWhereInput
  }

  export type UserCarsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserCarsWhereInput
    data: XOR<UserCarsUpdateWithoutUserInput, UserCarsUncheckedUpdateWithoutUserInput>
  }

  export type UserCarsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarsUpdateOneRequiredWithoutUser_carNestedInput
    location?: LocationsUpdateManyWithoutUserCarNestedInput
  }

  export type UserCarsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationsUncheckedUpdateManyWithoutUserCarNestedInput
  }

  export type UsersCreateManyDepartmentInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
  }

  export type CarsCreateManyDepartmentInput = {
    id?: string
    name: string
    brand: string
    release_year: number
    plate_number: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    address?: UserAddressUpdateOneWithoutUserNestedInput
    car?: UserCarsUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    address?: UserAddressUncheckedUpdateOneWithoutUserNestedInput
    car?: UserCarsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type CarsUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_car?: UserCarsUpdateOneWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_car?: UserCarsUncheckedUpdateOneWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reg_regenciesCreateManyProvinceInput = {
    id?: string
    name: string
  }

  export type reg_regenciesUpdateWithoutProvinceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    District?: reg_districtsUpdateManyWithoutRegencyNestedInput
  }

  export type reg_regenciesUncheckedUpdateWithoutProvinceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    District?: reg_districtsUncheckedUpdateManyWithoutRegencyNestedInput
  }

  export type reg_regenciesUncheckedUpdateManyWithoutProvinceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reg_districtsCreateManyRegencyInput = {
    id?: string
    name: string
  }

  export type reg_districtsUpdateWithoutRegencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reg_districtsUncheckedUpdateWithoutRegencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reg_districtsUncheckedUpdateManyWithoutRegencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateManyRoleInput = {
    id?: string
    email: string
    username: string
    password: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId: string
  }

  export type UsersUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentsUpdateOneRequiredWithoutUsersNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    address?: UserAddressUpdateOneWithoutUserNestedInput
    car?: UserCarsUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: StringFieldUpdateOperationsInput | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    address?: UserAddressUncheckedUpdateOneWithoutUserNestedInput
    car?: UserCarsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationsCreateManyUserCarInput = {
    id?: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationsUpdateWithoutUserCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUncheckedUpdateWithoutUserCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUncheckedUpdateManyWithoutUserCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyUserInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}