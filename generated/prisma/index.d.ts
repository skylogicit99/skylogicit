
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
 * Model SellerQueue
 * 
 */
export type SellerQueue = $Result.DefaultSelection<Prisma.$SellerQueuePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Claim
 * 
 */
export type Claim = $Result.DefaultSelection<Prisma.$ClaimPayload>
/**
 * Model PostDeletion
 * 
 */
export type PostDeletion = $Result.DefaultSelection<Prisma.$PostDeletionPayload>
/**
 * Model SellerLimit
 * 
 */
export type SellerLimit = $Result.DefaultSelection<Prisma.$SellerLimitPayload>
/**
 * Model SellerRequestLog
 * 
 */
export type SellerRequestLog = $Result.DefaultSelection<Prisma.$SellerRequestLogPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  poster: 'poster',
  seller: 'seller',
  sellerAdmin: 'sellerAdmin',
  root: 'root'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const RequestStatus: {
  success: 'success',
  queued: 'queued',
  rejected_cooldown: 'rejected_cooldown',
  rejected_limit: 'rejected_limit',
  rejected_empty: 'rejected_empty'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const NotificationType: {
  POST_DELETION: 'POST_DELETION',
  ADMIN_ANNOUNCEMENT: 'ADMIN_ANNOUNCEMENT',
  SYSTEM: 'SYSTEM',
  OTHER: 'OTHER'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SellerQueues
 * const sellerQueues = await prisma.sellerQueue.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more SellerQueues
   * const sellerQueues = await prisma.sellerQueue.findMany()
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
   * `prisma.sellerQueue`: Exposes CRUD operations for the **SellerQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SellerQueues
    * const sellerQueues = await prisma.sellerQueue.findMany()
    * ```
    */
  get sellerQueue(): Prisma.SellerQueueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.claim`: Exposes CRUD operations for the **Claim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claims
    * const claims = await prisma.claim.findMany()
    * ```
    */
  get claim(): Prisma.ClaimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postDeletion`: Exposes CRUD operations for the **PostDeletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostDeletions
    * const postDeletions = await prisma.postDeletion.findMany()
    * ```
    */
  get postDeletion(): Prisma.PostDeletionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sellerLimit`: Exposes CRUD operations for the **SellerLimit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SellerLimits
    * const sellerLimits = await prisma.sellerLimit.findMany()
    * ```
    */
  get sellerLimit(): Prisma.SellerLimitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sellerRequestLog`: Exposes CRUD operations for the **SellerRequestLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SellerRequestLogs
    * const sellerRequestLogs = await prisma.sellerRequestLog.findMany()
    * ```
    */
  get sellerRequestLog(): Prisma.SellerRequestLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    SellerQueue: 'SellerQueue',
    User: 'User',
    Post: 'Post',
    Claim: 'Claim',
    PostDeletion: 'PostDeletion',
    SellerLimit: 'SellerLimit',
    SellerRequestLog: 'SellerRequestLog',
    Notification: 'Notification'
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
      modelProps: "sellerQueue" | "user" | "post" | "claim" | "postDeletion" | "sellerLimit" | "sellerRequestLog" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SellerQueue: {
        payload: Prisma.$SellerQueuePayload<ExtArgs>
        fields: Prisma.SellerQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellerQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellerQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerQueuePayload>
          }
          findFirst: {
            args: Prisma.SellerQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellerQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerQueuePayload>
          }
          findMany: {
            args: Prisma.SellerQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerQueuePayload>[]
          }
          create: {
            args: Prisma.SellerQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerQueuePayload>
          }
          createMany: {
            args: Prisma.SellerQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SellerQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerQueuePayload>[]
          }
          delete: {
            args: Prisma.SellerQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerQueuePayload>
          }
          update: {
            args: Prisma.SellerQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerQueuePayload>
          }
          deleteMany: {
            args: Prisma.SellerQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SellerQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SellerQueueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerQueuePayload>[]
          }
          upsert: {
            args: Prisma.SellerQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerQueuePayload>
          }
          aggregate: {
            args: Prisma.SellerQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSellerQueue>
          }
          groupBy: {
            args: Prisma.SellerQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellerQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellerQueueCountArgs<ExtArgs>
            result: $Utils.Optional<SellerQueueCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Claim: {
        payload: Prisma.$ClaimPayload<ExtArgs>
        fields: Prisma.ClaimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findFirst: {
            args: Prisma.ClaimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findMany: {
            args: Prisma.ClaimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          create: {
            args: Prisma.ClaimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          createMany: {
            args: Prisma.ClaimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          delete: {
            args: Prisma.ClaimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          update: {
            args: Prisma.ClaimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          deleteMany: {
            args: Prisma.ClaimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClaimUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          upsert: {
            args: Prisma.ClaimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          aggregate: {
            args: Prisma.ClaimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaim>
          }
          groupBy: {
            args: Prisma.ClaimGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimCountAggregateOutputType> | number
          }
        }
      }
      PostDeletion: {
        payload: Prisma.$PostDeletionPayload<ExtArgs>
        fields: Prisma.PostDeletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostDeletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostDeletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeletionPayload>
          }
          findFirst: {
            args: Prisma.PostDeletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostDeletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeletionPayload>
          }
          findMany: {
            args: Prisma.PostDeletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeletionPayload>[]
          }
          create: {
            args: Prisma.PostDeletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeletionPayload>
          }
          createMany: {
            args: Prisma.PostDeletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostDeletionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeletionPayload>[]
          }
          delete: {
            args: Prisma.PostDeletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeletionPayload>
          }
          update: {
            args: Prisma.PostDeletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeletionPayload>
          }
          deleteMany: {
            args: Prisma.PostDeletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostDeletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostDeletionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeletionPayload>[]
          }
          upsert: {
            args: Prisma.PostDeletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeletionPayload>
          }
          aggregate: {
            args: Prisma.PostDeletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostDeletion>
          }
          groupBy: {
            args: Prisma.PostDeletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostDeletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostDeletionCountArgs<ExtArgs>
            result: $Utils.Optional<PostDeletionCountAggregateOutputType> | number
          }
        }
      }
      SellerLimit: {
        payload: Prisma.$SellerLimitPayload<ExtArgs>
        fields: Prisma.SellerLimitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellerLimitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerLimitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellerLimitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerLimitPayload>
          }
          findFirst: {
            args: Prisma.SellerLimitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerLimitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellerLimitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerLimitPayload>
          }
          findMany: {
            args: Prisma.SellerLimitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerLimitPayload>[]
          }
          create: {
            args: Prisma.SellerLimitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerLimitPayload>
          }
          createMany: {
            args: Prisma.SellerLimitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SellerLimitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerLimitPayload>[]
          }
          delete: {
            args: Prisma.SellerLimitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerLimitPayload>
          }
          update: {
            args: Prisma.SellerLimitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerLimitPayload>
          }
          deleteMany: {
            args: Prisma.SellerLimitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SellerLimitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SellerLimitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerLimitPayload>[]
          }
          upsert: {
            args: Prisma.SellerLimitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerLimitPayload>
          }
          aggregate: {
            args: Prisma.SellerLimitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSellerLimit>
          }
          groupBy: {
            args: Prisma.SellerLimitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellerLimitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellerLimitCountArgs<ExtArgs>
            result: $Utils.Optional<SellerLimitCountAggregateOutputType> | number
          }
        }
      }
      SellerRequestLog: {
        payload: Prisma.$SellerRequestLogPayload<ExtArgs>
        fields: Prisma.SellerRequestLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellerRequestLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerRequestLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellerRequestLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerRequestLogPayload>
          }
          findFirst: {
            args: Prisma.SellerRequestLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerRequestLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellerRequestLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerRequestLogPayload>
          }
          findMany: {
            args: Prisma.SellerRequestLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerRequestLogPayload>[]
          }
          create: {
            args: Prisma.SellerRequestLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerRequestLogPayload>
          }
          createMany: {
            args: Prisma.SellerRequestLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SellerRequestLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerRequestLogPayload>[]
          }
          delete: {
            args: Prisma.SellerRequestLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerRequestLogPayload>
          }
          update: {
            args: Prisma.SellerRequestLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerRequestLogPayload>
          }
          deleteMany: {
            args: Prisma.SellerRequestLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SellerRequestLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SellerRequestLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerRequestLogPayload>[]
          }
          upsert: {
            args: Prisma.SellerRequestLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerRequestLogPayload>
          }
          aggregate: {
            args: Prisma.SellerRequestLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSellerRequestLog>
          }
          groupBy: {
            args: Prisma.SellerRequestLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellerRequestLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellerRequestLogCountArgs<ExtArgs>
            result: $Utils.Optional<SellerRequestLogCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    sellerQueue?: SellerQueueOmit
    user?: UserOmit
    post?: PostOmit
    claim?: ClaimOmit
    postDeletion?: PostDeletionOmit
    sellerLimit?: SellerLimitOmit
    sellerRequestLog?: SellerRequestLogOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    claims: number
    requestLogs: number
    sellerQueues: number
    postDeletions: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    claims?: boolean | UserCountOutputTypeCountClaimsArgs
    requestLogs?: boolean | UserCountOutputTypeCountRequestLogsArgs
    sellerQueues?: boolean | UserCountOutputTypeCountSellerQueuesArgs
    postDeletions?: boolean | UserCountOutputTypeCountPostDeletionsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerRequestLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSellerQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerQueueWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostDeletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostDeletionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    deletions: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deletions?: boolean | PostCountOutputTypeCountDeletionsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountDeletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostDeletionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SellerQueue
   */

  export type AggregateSellerQueue = {
    _count: SellerQueueCountAggregateOutputType | null
    _min: SellerQueueMinAggregateOutputType | null
    _max: SellerQueueMaxAggregateOutputType | null
  }

  export type SellerQueueMinAggregateOutputType = {
    id: string | null
    sellerId: string | null
    createdAt: Date | null
  }

  export type SellerQueueMaxAggregateOutputType = {
    id: string | null
    sellerId: string | null
    createdAt: Date | null
  }

  export type SellerQueueCountAggregateOutputType = {
    id: number
    sellerId: number
    createdAt: number
    _all: number
  }


  export type SellerQueueMinAggregateInputType = {
    id?: true
    sellerId?: true
    createdAt?: true
  }

  export type SellerQueueMaxAggregateInputType = {
    id?: true
    sellerId?: true
    createdAt?: true
  }

  export type SellerQueueCountAggregateInputType = {
    id?: true
    sellerId?: true
    createdAt?: true
    _all?: true
  }

  export type SellerQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellerQueue to aggregate.
     */
    where?: SellerQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerQueues to fetch.
     */
    orderBy?: SellerQueueOrderByWithRelationInput | SellerQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellerQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SellerQueues
    **/
    _count?: true | SellerQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerQueueMaxAggregateInputType
  }

  export type GetSellerQueueAggregateType<T extends SellerQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateSellerQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellerQueue[P]>
      : GetScalarType<T[P], AggregateSellerQueue[P]>
  }




  export type SellerQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerQueueWhereInput
    orderBy?: SellerQueueOrderByWithAggregationInput | SellerQueueOrderByWithAggregationInput[]
    by: SellerQueueScalarFieldEnum[] | SellerQueueScalarFieldEnum
    having?: SellerQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerQueueCountAggregateInputType | true
    _min?: SellerQueueMinAggregateInputType
    _max?: SellerQueueMaxAggregateInputType
  }

  export type SellerQueueGroupByOutputType = {
    id: string
    sellerId: string
    createdAt: Date
    _count: SellerQueueCountAggregateOutputType | null
    _min: SellerQueueMinAggregateOutputType | null
    _max: SellerQueueMaxAggregateOutputType | null
  }

  type GetSellerQueueGroupByPayload<T extends SellerQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerQueueGroupByOutputType[P]>
            : GetScalarType<T[P], SellerQueueGroupByOutputType[P]>
        }
      >
    >


  export type SellerQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    createdAt?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerQueue"]>

  export type SellerQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    createdAt?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerQueue"]>

  export type SellerQueueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    createdAt?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerQueue"]>

  export type SellerQueueSelectScalar = {
    id?: boolean
    sellerId?: boolean
    createdAt?: boolean
  }

  export type SellerQueueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sellerId" | "createdAt", ExtArgs["result"]["sellerQueue"]>
  export type SellerQueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SellerQueueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SellerQueueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SellerQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SellerQueue"
    objects: {
      seller: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sellerId: string
      createdAt: Date
    }, ExtArgs["result"]["sellerQueue"]>
    composites: {}
  }

  type SellerQueueGetPayload<S extends boolean | null | undefined | SellerQueueDefaultArgs> = $Result.GetResult<Prisma.$SellerQueuePayload, S>

  type SellerQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SellerQueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellerQueueCountAggregateInputType | true
    }

  export interface SellerQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SellerQueue'], meta: { name: 'SellerQueue' } }
    /**
     * Find zero or one SellerQueue that matches the filter.
     * @param {SellerQueueFindUniqueArgs} args - Arguments to find a SellerQueue
     * @example
     * // Get one SellerQueue
     * const sellerQueue = await prisma.sellerQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SellerQueueFindUniqueArgs>(args: SelectSubset<T, SellerQueueFindUniqueArgs<ExtArgs>>): Prisma__SellerQueueClient<$Result.GetResult<Prisma.$SellerQueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SellerQueue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SellerQueueFindUniqueOrThrowArgs} args - Arguments to find a SellerQueue
     * @example
     * // Get one SellerQueue
     * const sellerQueue = await prisma.sellerQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SellerQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, SellerQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SellerQueueClient<$Result.GetResult<Prisma.$SellerQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellerQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerQueueFindFirstArgs} args - Arguments to find a SellerQueue
     * @example
     * // Get one SellerQueue
     * const sellerQueue = await prisma.sellerQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SellerQueueFindFirstArgs>(args?: SelectSubset<T, SellerQueueFindFirstArgs<ExtArgs>>): Prisma__SellerQueueClient<$Result.GetResult<Prisma.$SellerQueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellerQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerQueueFindFirstOrThrowArgs} args - Arguments to find a SellerQueue
     * @example
     * // Get one SellerQueue
     * const sellerQueue = await prisma.sellerQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SellerQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, SellerQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__SellerQueueClient<$Result.GetResult<Prisma.$SellerQueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SellerQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SellerQueues
     * const sellerQueues = await prisma.sellerQueue.findMany()
     * 
     * // Get first 10 SellerQueues
     * const sellerQueues = await prisma.sellerQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellerQueueWithIdOnly = await prisma.sellerQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SellerQueueFindManyArgs>(args?: SelectSubset<T, SellerQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SellerQueue.
     * @param {SellerQueueCreateArgs} args - Arguments to create a SellerQueue.
     * @example
     * // Create one SellerQueue
     * const SellerQueue = await prisma.sellerQueue.create({
     *   data: {
     *     // ... data to create a SellerQueue
     *   }
     * })
     * 
     */
    create<T extends SellerQueueCreateArgs>(args: SelectSubset<T, SellerQueueCreateArgs<ExtArgs>>): Prisma__SellerQueueClient<$Result.GetResult<Prisma.$SellerQueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SellerQueues.
     * @param {SellerQueueCreateManyArgs} args - Arguments to create many SellerQueues.
     * @example
     * // Create many SellerQueues
     * const sellerQueue = await prisma.sellerQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SellerQueueCreateManyArgs>(args?: SelectSubset<T, SellerQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SellerQueues and returns the data saved in the database.
     * @param {SellerQueueCreateManyAndReturnArgs} args - Arguments to create many SellerQueues.
     * @example
     * // Create many SellerQueues
     * const sellerQueue = await prisma.sellerQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SellerQueues and only return the `id`
     * const sellerQueueWithIdOnly = await prisma.sellerQueue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SellerQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, SellerQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerQueuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SellerQueue.
     * @param {SellerQueueDeleteArgs} args - Arguments to delete one SellerQueue.
     * @example
     * // Delete one SellerQueue
     * const SellerQueue = await prisma.sellerQueue.delete({
     *   where: {
     *     // ... filter to delete one SellerQueue
     *   }
     * })
     * 
     */
    delete<T extends SellerQueueDeleteArgs>(args: SelectSubset<T, SellerQueueDeleteArgs<ExtArgs>>): Prisma__SellerQueueClient<$Result.GetResult<Prisma.$SellerQueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SellerQueue.
     * @param {SellerQueueUpdateArgs} args - Arguments to update one SellerQueue.
     * @example
     * // Update one SellerQueue
     * const sellerQueue = await prisma.sellerQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SellerQueueUpdateArgs>(args: SelectSubset<T, SellerQueueUpdateArgs<ExtArgs>>): Prisma__SellerQueueClient<$Result.GetResult<Prisma.$SellerQueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SellerQueues.
     * @param {SellerQueueDeleteManyArgs} args - Arguments to filter SellerQueues to delete.
     * @example
     * // Delete a few SellerQueues
     * const { count } = await prisma.sellerQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SellerQueueDeleteManyArgs>(args?: SelectSubset<T, SellerQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellerQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SellerQueues
     * const sellerQueue = await prisma.sellerQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SellerQueueUpdateManyArgs>(args: SelectSubset<T, SellerQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellerQueues and returns the data updated in the database.
     * @param {SellerQueueUpdateManyAndReturnArgs} args - Arguments to update many SellerQueues.
     * @example
     * // Update many SellerQueues
     * const sellerQueue = await prisma.sellerQueue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SellerQueues and only return the `id`
     * const sellerQueueWithIdOnly = await prisma.sellerQueue.updateManyAndReturn({
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
    updateManyAndReturn<T extends SellerQueueUpdateManyAndReturnArgs>(args: SelectSubset<T, SellerQueueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerQueuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SellerQueue.
     * @param {SellerQueueUpsertArgs} args - Arguments to update or create a SellerQueue.
     * @example
     * // Update or create a SellerQueue
     * const sellerQueue = await prisma.sellerQueue.upsert({
     *   create: {
     *     // ... data to create a SellerQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SellerQueue we want to update
     *   }
     * })
     */
    upsert<T extends SellerQueueUpsertArgs>(args: SelectSubset<T, SellerQueueUpsertArgs<ExtArgs>>): Prisma__SellerQueueClient<$Result.GetResult<Prisma.$SellerQueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SellerQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerQueueCountArgs} args - Arguments to filter SellerQueues to count.
     * @example
     * // Count the number of SellerQueues
     * const count = await prisma.sellerQueue.count({
     *   where: {
     *     // ... the filter for the SellerQueues we want to count
     *   }
     * })
    **/
    count<T extends SellerQueueCountArgs>(
      args?: Subset<T, SellerQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SellerQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellerQueueAggregateArgs>(args: Subset<T, SellerQueueAggregateArgs>): Prisma.PrismaPromise<GetSellerQueueAggregateType<T>>

    /**
     * Group by SellerQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerQueueGroupByArgs} args - Group by arguments.
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
      T extends SellerQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellerQueueGroupByArgs['orderBy'] }
        : { orderBy?: SellerQueueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SellerQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SellerQueue model
   */
  readonly fields: SellerQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SellerQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellerQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SellerQueue model
   */
  interface SellerQueueFieldRefs {
    readonly id: FieldRef<"SellerQueue", 'String'>
    readonly sellerId: FieldRef<"SellerQueue", 'String'>
    readonly createdAt: FieldRef<"SellerQueue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SellerQueue findUnique
   */
  export type SellerQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueInclude<ExtArgs> | null
    /**
     * Filter, which SellerQueue to fetch.
     */
    where: SellerQueueWhereUniqueInput
  }

  /**
   * SellerQueue findUniqueOrThrow
   */
  export type SellerQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueInclude<ExtArgs> | null
    /**
     * Filter, which SellerQueue to fetch.
     */
    where: SellerQueueWhereUniqueInput
  }

  /**
   * SellerQueue findFirst
   */
  export type SellerQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueInclude<ExtArgs> | null
    /**
     * Filter, which SellerQueue to fetch.
     */
    where?: SellerQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerQueues to fetch.
     */
    orderBy?: SellerQueueOrderByWithRelationInput | SellerQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellerQueues.
     */
    cursor?: SellerQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerQueues.
     */
    distinct?: SellerQueueScalarFieldEnum | SellerQueueScalarFieldEnum[]
  }

  /**
   * SellerQueue findFirstOrThrow
   */
  export type SellerQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueInclude<ExtArgs> | null
    /**
     * Filter, which SellerQueue to fetch.
     */
    where?: SellerQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerQueues to fetch.
     */
    orderBy?: SellerQueueOrderByWithRelationInput | SellerQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellerQueues.
     */
    cursor?: SellerQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerQueues.
     */
    distinct?: SellerQueueScalarFieldEnum | SellerQueueScalarFieldEnum[]
  }

  /**
   * SellerQueue findMany
   */
  export type SellerQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueInclude<ExtArgs> | null
    /**
     * Filter, which SellerQueues to fetch.
     */
    where?: SellerQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerQueues to fetch.
     */
    orderBy?: SellerQueueOrderByWithRelationInput | SellerQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SellerQueues.
     */
    cursor?: SellerQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerQueues.
     */
    skip?: number
    distinct?: SellerQueueScalarFieldEnum | SellerQueueScalarFieldEnum[]
  }

  /**
   * SellerQueue create
   */
  export type SellerQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueInclude<ExtArgs> | null
    /**
     * The data needed to create a SellerQueue.
     */
    data: XOR<SellerQueueCreateInput, SellerQueueUncheckedCreateInput>
  }

  /**
   * SellerQueue createMany
   */
  export type SellerQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SellerQueues.
     */
    data: SellerQueueCreateManyInput | SellerQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SellerQueue createManyAndReturn
   */
  export type SellerQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * The data used to create many SellerQueues.
     */
    data: SellerQueueCreateManyInput | SellerQueueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellerQueue update
   */
  export type SellerQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueInclude<ExtArgs> | null
    /**
     * The data needed to update a SellerQueue.
     */
    data: XOR<SellerQueueUpdateInput, SellerQueueUncheckedUpdateInput>
    /**
     * Choose, which SellerQueue to update.
     */
    where: SellerQueueWhereUniqueInput
  }

  /**
   * SellerQueue updateMany
   */
  export type SellerQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SellerQueues.
     */
    data: XOR<SellerQueueUpdateManyMutationInput, SellerQueueUncheckedUpdateManyInput>
    /**
     * Filter which SellerQueues to update
     */
    where?: SellerQueueWhereInput
    /**
     * Limit how many SellerQueues to update.
     */
    limit?: number
  }

  /**
   * SellerQueue updateManyAndReturn
   */
  export type SellerQueueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * The data used to update SellerQueues.
     */
    data: XOR<SellerQueueUpdateManyMutationInput, SellerQueueUncheckedUpdateManyInput>
    /**
     * Filter which SellerQueues to update
     */
    where?: SellerQueueWhereInput
    /**
     * Limit how many SellerQueues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellerQueue upsert
   */
  export type SellerQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueInclude<ExtArgs> | null
    /**
     * The filter to search for the SellerQueue to update in case it exists.
     */
    where: SellerQueueWhereUniqueInput
    /**
     * In case the SellerQueue found by the `where` argument doesn't exist, create a new SellerQueue with this data.
     */
    create: XOR<SellerQueueCreateInput, SellerQueueUncheckedCreateInput>
    /**
     * In case the SellerQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellerQueueUpdateInput, SellerQueueUncheckedUpdateInput>
  }

  /**
   * SellerQueue delete
   */
  export type SellerQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueInclude<ExtArgs> | null
    /**
     * Filter which SellerQueue to delete.
     */
    where: SellerQueueWhereUniqueInput
  }

  /**
   * SellerQueue deleteMany
   */
  export type SellerQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellerQueues to delete
     */
    where?: SellerQueueWhereInput
    /**
     * Limit how many SellerQueues to delete.
     */
    limit?: number
  }

  /**
   * SellerQueue without action
   */
  export type SellerQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    sessionVersion: number | null
  }

  export type UserSumAggregateOutputType = {
    sessionVersion: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    userName: string | null
    password: string | null
    sessionVersion: number | null
    isActive: boolean | null
    type: $Enums.UserType | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userName: string | null
    password: string | null
    sessionVersion: number | null
    isActive: boolean | null
    type: $Enums.UserType | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    userName: number
    password: number
    sessionVersion: number
    isActive: number
    type: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    sessionVersion?: true
  }

  export type UserSumAggregateInputType = {
    sessionVersion?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    userName?: true
    password?: true
    sessionVersion?: true
    isActive?: true
    type?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    userName?: true
    password?: true
    sessionVersion?: true
    isActive?: true
    type?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    userName?: true
    password?: true
    sessionVersion?: true
    isActive?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    userName: string
    password: string
    sessionVersion: number
    isActive: boolean
    type: $Enums.UserType
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userName?: boolean
    password?: boolean
    sessionVersion?: boolean
    isActive?: boolean
    type?: boolean
    createdAt?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    claims?: boolean | User$claimsArgs<ExtArgs>
    limitProfile?: boolean | User$limitProfileArgs<ExtArgs>
    requestLogs?: boolean | User$requestLogsArgs<ExtArgs>
    sellerQueues?: boolean | User$sellerQueuesArgs<ExtArgs>
    postDeletions?: boolean | User$postDeletionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userName?: boolean
    password?: boolean
    sessionVersion?: boolean
    isActive?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userName?: boolean
    password?: boolean
    sessionVersion?: boolean
    isActive?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    userName?: boolean
    password?: boolean
    sessionVersion?: boolean
    isActive?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userName" | "password" | "sessionVersion" | "isActive" | "type" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    claims?: boolean | User$claimsArgs<ExtArgs>
    limitProfile?: boolean | User$limitProfileArgs<ExtArgs>
    requestLogs?: boolean | User$requestLogsArgs<ExtArgs>
    sellerQueues?: boolean | User$sellerQueuesArgs<ExtArgs>
    postDeletions?: boolean | User$postDeletionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      claims: Prisma.$ClaimPayload<ExtArgs>[]
      limitProfile: Prisma.$SellerLimitPayload<ExtArgs> | null
      requestLogs: Prisma.$SellerRequestLogPayload<ExtArgs>[]
      sellerQueues: Prisma.$SellerQueuePayload<ExtArgs>[]
      postDeletions: Prisma.$PostDeletionPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userName: string
      password: string
      sessionVersion: number
      isActive: boolean
      type: $Enums.UserType
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    claims<T extends User$claimsArgs<ExtArgs> = {}>(args?: Subset<T, User$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    limitProfile<T extends User$limitProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$limitProfileArgs<ExtArgs>>): Prisma__SellerLimitClient<$Result.GetResult<Prisma.$SellerLimitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    requestLogs<T extends User$requestLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerRequestLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sellerQueues<T extends User$sellerQueuesArgs<ExtArgs> = {}>(args?: Subset<T, User$sellerQueuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postDeletions<T extends User$postDeletionsArgs<ExtArgs> = {}>(args?: Subset<T, User$postDeletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly sessionVersion: FieldRef<"User", 'Int'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly type: FieldRef<"User", 'UserType'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.claims
   */
  export type User$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * User.limitProfile
   */
  export type User$limitProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitInclude<ExtArgs> | null
    where?: SellerLimitWhereInput
  }

  /**
   * User.requestLogs
   */
  export type User$requestLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogInclude<ExtArgs> | null
    where?: SellerRequestLogWhereInput
    orderBy?: SellerRequestLogOrderByWithRelationInput | SellerRequestLogOrderByWithRelationInput[]
    cursor?: SellerRequestLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellerRequestLogScalarFieldEnum | SellerRequestLogScalarFieldEnum[]
  }

  /**
   * User.sellerQueues
   */
  export type User$sellerQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerQueue
     */
    select?: SellerQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerQueue
     */
    omit?: SellerQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerQueueInclude<ExtArgs> | null
    where?: SellerQueueWhereInput
    orderBy?: SellerQueueOrderByWithRelationInput | SellerQueueOrderByWithRelationInput[]
    cursor?: SellerQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellerQueueScalarFieldEnum | SellerQueueScalarFieldEnum[]
  }

  /**
   * User.postDeletions
   */
  export type User$postDeletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionInclude<ExtArgs> | null
    where?: PostDeletionWhereInput
    orderBy?: PostDeletionOrderByWithRelationInput | PostDeletionOrderByWithRelationInput[]
    cursor?: PostDeletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostDeletionScalarFieldEnum | PostDeletionScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    phone: string | null
    message: string | null
    clientName: string | null
    agentName: string | null
    location: string | null
    rent: string | null
    screenshot: string | null
    createdAt: Date | null
    posterId: string | null
    claimed: boolean | null
    new: boolean | null
    deleted: boolean | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    message: string | null
    clientName: string | null
    agentName: string | null
    location: string | null
    rent: string | null
    screenshot: string | null
    createdAt: Date | null
    posterId: string | null
    claimed: boolean | null
    new: boolean | null
    deleted: boolean | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    phone: number
    message: number
    clientName: number
    agentName: number
    location: number
    rent: number
    screenshot: number
    createdAt: number
    posterId: number
    claimed: number
    new: number
    deleted: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    phone?: true
    message?: true
    clientName?: true
    agentName?: true
    location?: true
    rent?: true
    screenshot?: true
    createdAt?: true
    posterId?: true
    claimed?: true
    new?: true
    deleted?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    phone?: true
    message?: true
    clientName?: true
    agentName?: true
    location?: true
    rent?: true
    screenshot?: true
    createdAt?: true
    posterId?: true
    claimed?: true
    new?: true
    deleted?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    phone?: true
    message?: true
    clientName?: true
    agentName?: true
    location?: true
    rent?: true
    screenshot?: true
    createdAt?: true
    posterId?: true
    claimed?: true
    new?: true
    deleted?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    phone: string
    message: string
    clientName: string
    agentName: string
    location: string
    rent: string
    screenshot: string
    createdAt: Date
    posterId: string
    claimed: boolean
    new: boolean
    deleted: boolean
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    message?: boolean
    clientName?: boolean
    agentName?: boolean
    location?: boolean
    rent?: boolean
    screenshot?: boolean
    createdAt?: boolean
    posterId?: boolean
    claimed?: boolean
    new?: boolean
    deleted?: boolean
    poster?: boolean | UserDefaultArgs<ExtArgs>
    claim?: boolean | Post$claimArgs<ExtArgs>
    deletions?: boolean | Post$deletionsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    message?: boolean
    clientName?: boolean
    agentName?: boolean
    location?: boolean
    rent?: boolean
    screenshot?: boolean
    createdAt?: boolean
    posterId?: boolean
    claimed?: boolean
    new?: boolean
    deleted?: boolean
    poster?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    message?: boolean
    clientName?: boolean
    agentName?: boolean
    location?: boolean
    rent?: boolean
    screenshot?: boolean
    createdAt?: boolean
    posterId?: boolean
    claimed?: boolean
    new?: boolean
    deleted?: boolean
    poster?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    phone?: boolean
    message?: boolean
    clientName?: boolean
    agentName?: boolean
    location?: boolean
    rent?: boolean
    screenshot?: boolean
    createdAt?: boolean
    posterId?: boolean
    claimed?: boolean
    new?: boolean
    deleted?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "message" | "clientName" | "agentName" | "location" | "rent" | "screenshot" | "createdAt" | "posterId" | "claimed" | "new" | "deleted", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poster?: boolean | UserDefaultArgs<ExtArgs>
    claim?: boolean | Post$claimArgs<ExtArgs>
    deletions?: boolean | Post$deletionsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poster?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poster?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      poster: Prisma.$UserPayload<ExtArgs>
      claim: Prisma.$ClaimPayload<ExtArgs> | null
      deletions: Prisma.$PostDeletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      message: string
      clientName: string
      agentName: string
      location: string
      rent: string
      screenshot: string
      createdAt: Date
      posterId: string
      claimed: boolean
      new: boolean
      deleted: boolean
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poster<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    claim<T extends Post$claimArgs<ExtArgs> = {}>(args?: Subset<T, Post$claimArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deletions<T extends Post$deletionsArgs<ExtArgs> = {}>(args?: Subset<T, Post$deletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly phone: FieldRef<"Post", 'String'>
    readonly message: FieldRef<"Post", 'String'>
    readonly clientName: FieldRef<"Post", 'String'>
    readonly agentName: FieldRef<"Post", 'String'>
    readonly location: FieldRef<"Post", 'String'>
    readonly rent: FieldRef<"Post", 'String'>
    readonly screenshot: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly posterId: FieldRef<"Post", 'String'>
    readonly claimed: FieldRef<"Post", 'Boolean'>
    readonly new: FieldRef<"Post", 'Boolean'>
    readonly deleted: FieldRef<"Post", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.claim
   */
  export type Post$claimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
  }

  /**
   * Post.deletions
   */
  export type Post$deletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionInclude<ExtArgs> | null
    where?: PostDeletionWhereInput
    orderBy?: PostDeletionOrderByWithRelationInput | PostDeletionOrderByWithRelationInput[]
    cursor?: PostDeletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostDeletionScalarFieldEnum | PostDeletionScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Claim
   */

  export type AggregateClaim = {
    _count: ClaimCountAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  export type ClaimMinAggregateOutputType = {
    id: string | null
    postId: string | null
    sellerId: string | null
    claimedAt: Date | null
  }

  export type ClaimMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    sellerId: string | null
    claimedAt: Date | null
  }

  export type ClaimCountAggregateOutputType = {
    id: number
    postId: number
    sellerId: number
    claimedAt: number
    _all: number
  }


  export type ClaimMinAggregateInputType = {
    id?: true
    postId?: true
    sellerId?: true
    claimedAt?: true
  }

  export type ClaimMaxAggregateInputType = {
    id?: true
    postId?: true
    sellerId?: true
    claimedAt?: true
  }

  export type ClaimCountAggregateInputType = {
    id?: true
    postId?: true
    sellerId?: true
    claimedAt?: true
    _all?: true
  }

  export type ClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claim to aggregate.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Claims
    **/
    _count?: true | ClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimMaxAggregateInputType
  }

  export type GetClaimAggregateType<T extends ClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaim[P]>
      : GetScalarType<T[P], AggregateClaim[P]>
  }




  export type ClaimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithAggregationInput | ClaimOrderByWithAggregationInput[]
    by: ClaimScalarFieldEnum[] | ClaimScalarFieldEnum
    having?: ClaimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimCountAggregateInputType | true
    _min?: ClaimMinAggregateInputType
    _max?: ClaimMaxAggregateInputType
  }

  export type ClaimGroupByOutputType = {
    id: string
    postId: string
    sellerId: string
    claimedAt: Date
    _count: ClaimCountAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  type GetClaimGroupByPayload<T extends ClaimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimGroupByOutputType[P]>
        }
      >
    >


  export type ClaimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    sellerId?: boolean
    claimedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    sellerId?: boolean
    claimedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    sellerId?: boolean
    claimedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectScalar = {
    id?: boolean
    postId?: boolean
    sellerId?: boolean
    claimedAt?: boolean
  }

  export type ClaimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "sellerId" | "claimedAt", ExtArgs["result"]["claim"]>
  export type ClaimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClaimIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClaimIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClaimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Claim"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      sellerId: string
      claimedAt: Date
    }, ExtArgs["result"]["claim"]>
    composites: {}
  }

  type ClaimGetPayload<S extends boolean | null | undefined | ClaimDefaultArgs> = $Result.GetResult<Prisma.$ClaimPayload, S>

  type ClaimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClaimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClaimCountAggregateInputType | true
    }

  export interface ClaimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Claim'], meta: { name: 'Claim' } }
    /**
     * Find zero or one Claim that matches the filter.
     * @param {ClaimFindUniqueArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimFindUniqueArgs>(args: SelectSubset<T, ClaimFindUniqueArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Claim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaimFindUniqueOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimFindFirstArgs>(args?: SelectSubset<T, ClaimFindFirstArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claim.findMany()
     * 
     * // Get first 10 Claims
     * const claims = await prisma.claim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimWithIdOnly = await prisma.claim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaimFindManyArgs>(args?: SelectSubset<T, ClaimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Claim.
     * @param {ClaimCreateArgs} args - Arguments to create a Claim.
     * @example
     * // Create one Claim
     * const Claim = await prisma.claim.create({
     *   data: {
     *     // ... data to create a Claim
     *   }
     * })
     * 
     */
    create<T extends ClaimCreateArgs>(args: SelectSubset<T, ClaimCreateArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Claims.
     * @param {ClaimCreateManyArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimCreateManyArgs>(args?: SelectSubset<T, ClaimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claims and returns the data saved in the database.
     * @param {ClaimCreateManyAndReturnArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Claim.
     * @param {ClaimDeleteArgs} args - Arguments to delete one Claim.
     * @example
     * // Delete one Claim
     * const Claim = await prisma.claim.delete({
     *   where: {
     *     // ... filter to delete one Claim
     *   }
     * })
     * 
     */
    delete<T extends ClaimDeleteArgs>(args: SelectSubset<T, ClaimDeleteArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Claim.
     * @param {ClaimUpdateArgs} args - Arguments to update one Claim.
     * @example
     * // Update one Claim
     * const claim = await prisma.claim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimUpdateArgs>(args: SelectSubset<T, ClaimUpdateArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Claims.
     * @param {ClaimDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimDeleteManyArgs>(args?: SelectSubset<T, ClaimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimUpdateManyArgs>(args: SelectSubset<T, ClaimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims and returns the data updated in the database.
     * @param {ClaimUpdateManyAndReturnArgs} args - Arguments to update many Claims.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClaimUpdateManyAndReturnArgs>(args: SelectSubset<T, ClaimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Claim.
     * @param {ClaimUpsertArgs} args - Arguments to update or create a Claim.
     * @example
     * // Update or create a Claim
     * const claim = await prisma.claim.upsert({
     *   create: {
     *     // ... data to create a Claim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claim we want to update
     *   }
     * })
     */
    upsert<T extends ClaimUpsertArgs>(args: SelectSubset<T, ClaimUpsertArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claim.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends ClaimCountArgs>(
      args?: Subset<T, ClaimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaimAggregateArgs>(args: Subset<T, ClaimAggregateArgs>): Prisma.PrismaPromise<GetClaimAggregateType<T>>

    /**
     * Group by Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimGroupByArgs} args - Group by arguments.
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
      T extends ClaimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimGroupByArgs['orderBy'] }
        : { orderBy?: ClaimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Claim model
   */
  readonly fields: ClaimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Claim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Claim model
   */
  interface ClaimFieldRefs {
    readonly id: FieldRef<"Claim", 'String'>
    readonly postId: FieldRef<"Claim", 'String'>
    readonly sellerId: FieldRef<"Claim", 'String'>
    readonly claimedAt: FieldRef<"Claim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Claim findUnique
   */
  export type ClaimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findUniqueOrThrow
   */
  export type ClaimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findFirst
   */
  export type ClaimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findFirstOrThrow
   */
  export type ClaimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findMany
   */
  export type ClaimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim create
   */
  export type ClaimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to create a Claim.
     */
    data: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
  }

  /**
   * Claim createMany
   */
  export type ClaimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Claim createManyAndReturn
   */
  export type ClaimCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claim update
   */
  export type ClaimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to update a Claim.
     */
    data: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
    /**
     * Choose, which Claim to update.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim updateMany
   */
  export type ClaimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
  }

  /**
   * Claim updateManyAndReturn
   */
  export type ClaimUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claim upsert
   */
  export type ClaimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The filter to search for the Claim to update in case it exists.
     */
    where: ClaimWhereUniqueInput
    /**
     * In case the Claim found by the `where` argument doesn't exist, create a new Claim with this data.
     */
    create: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
    /**
     * In case the Claim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
  }

  /**
   * Claim delete
   */
  export type ClaimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter which Claim to delete.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim deleteMany
   */
  export type ClaimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claims to delete
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to delete.
     */
    limit?: number
  }

  /**
   * Claim without action
   */
  export type ClaimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
  }


  /**
   * Model PostDeletion
   */

  export type AggregatePostDeletion = {
    _count: PostDeletionCountAggregateOutputType | null
    _min: PostDeletionMinAggregateOutputType | null
    _max: PostDeletionMaxAggregateOutputType | null
  }

  export type PostDeletionMinAggregateOutputType = {
    id: string | null
    reason: string | null
    createdAt: Date | null
    sellerId: string | null
    postId: string | null
  }

  export type PostDeletionMaxAggregateOutputType = {
    id: string | null
    reason: string | null
    createdAt: Date | null
    sellerId: string | null
    postId: string | null
  }

  export type PostDeletionCountAggregateOutputType = {
    id: number
    reason: number
    createdAt: number
    sellerId: number
    postId: number
    _all: number
  }


  export type PostDeletionMinAggregateInputType = {
    id?: true
    reason?: true
    createdAt?: true
    sellerId?: true
    postId?: true
  }

  export type PostDeletionMaxAggregateInputType = {
    id?: true
    reason?: true
    createdAt?: true
    sellerId?: true
    postId?: true
  }

  export type PostDeletionCountAggregateInputType = {
    id?: true
    reason?: true
    createdAt?: true
    sellerId?: true
    postId?: true
    _all?: true
  }

  export type PostDeletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostDeletion to aggregate.
     */
    where?: PostDeletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDeletions to fetch.
     */
    orderBy?: PostDeletionOrderByWithRelationInput | PostDeletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostDeletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDeletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDeletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostDeletions
    **/
    _count?: true | PostDeletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostDeletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostDeletionMaxAggregateInputType
  }

  export type GetPostDeletionAggregateType<T extends PostDeletionAggregateArgs> = {
        [P in keyof T & keyof AggregatePostDeletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostDeletion[P]>
      : GetScalarType<T[P], AggregatePostDeletion[P]>
  }




  export type PostDeletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostDeletionWhereInput
    orderBy?: PostDeletionOrderByWithAggregationInput | PostDeletionOrderByWithAggregationInput[]
    by: PostDeletionScalarFieldEnum[] | PostDeletionScalarFieldEnum
    having?: PostDeletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostDeletionCountAggregateInputType | true
    _min?: PostDeletionMinAggregateInputType
    _max?: PostDeletionMaxAggregateInputType
  }

  export type PostDeletionGroupByOutputType = {
    id: string
    reason: string
    createdAt: Date
    sellerId: string
    postId: string
    _count: PostDeletionCountAggregateOutputType | null
    _min: PostDeletionMinAggregateOutputType | null
    _max: PostDeletionMaxAggregateOutputType | null
  }

  type GetPostDeletionGroupByPayload<T extends PostDeletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostDeletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostDeletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostDeletionGroupByOutputType[P]>
            : GetScalarType<T[P], PostDeletionGroupByOutputType[P]>
        }
      >
    >


  export type PostDeletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    createdAt?: boolean
    sellerId?: boolean
    postId?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postDeletion"]>

  export type PostDeletionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    createdAt?: boolean
    sellerId?: boolean
    postId?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postDeletion"]>

  export type PostDeletionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    createdAt?: boolean
    sellerId?: boolean
    postId?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postDeletion"]>

  export type PostDeletionSelectScalar = {
    id?: boolean
    reason?: boolean
    createdAt?: boolean
    sellerId?: boolean
    postId?: boolean
  }

  export type PostDeletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reason" | "createdAt" | "sellerId" | "postId", ExtArgs["result"]["postDeletion"]>
  export type PostDeletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostDeletionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostDeletionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostDeletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostDeletion"
    objects: {
      seller: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reason: string
      createdAt: Date
      sellerId: string
      postId: string
    }, ExtArgs["result"]["postDeletion"]>
    composites: {}
  }

  type PostDeletionGetPayload<S extends boolean | null | undefined | PostDeletionDefaultArgs> = $Result.GetResult<Prisma.$PostDeletionPayload, S>

  type PostDeletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostDeletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostDeletionCountAggregateInputType | true
    }

  export interface PostDeletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostDeletion'], meta: { name: 'PostDeletion' } }
    /**
     * Find zero or one PostDeletion that matches the filter.
     * @param {PostDeletionFindUniqueArgs} args - Arguments to find a PostDeletion
     * @example
     * // Get one PostDeletion
     * const postDeletion = await prisma.postDeletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostDeletionFindUniqueArgs>(args: SelectSubset<T, PostDeletionFindUniqueArgs<ExtArgs>>): Prisma__PostDeletionClient<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostDeletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostDeletionFindUniqueOrThrowArgs} args - Arguments to find a PostDeletion
     * @example
     * // Get one PostDeletion
     * const postDeletion = await prisma.postDeletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostDeletionFindUniqueOrThrowArgs>(args: SelectSubset<T, PostDeletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostDeletionClient<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostDeletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeletionFindFirstArgs} args - Arguments to find a PostDeletion
     * @example
     * // Get one PostDeletion
     * const postDeletion = await prisma.postDeletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostDeletionFindFirstArgs>(args?: SelectSubset<T, PostDeletionFindFirstArgs<ExtArgs>>): Prisma__PostDeletionClient<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostDeletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeletionFindFirstOrThrowArgs} args - Arguments to find a PostDeletion
     * @example
     * // Get one PostDeletion
     * const postDeletion = await prisma.postDeletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostDeletionFindFirstOrThrowArgs>(args?: SelectSubset<T, PostDeletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostDeletionClient<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostDeletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostDeletions
     * const postDeletions = await prisma.postDeletion.findMany()
     * 
     * // Get first 10 PostDeletions
     * const postDeletions = await prisma.postDeletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postDeletionWithIdOnly = await prisma.postDeletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostDeletionFindManyArgs>(args?: SelectSubset<T, PostDeletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostDeletion.
     * @param {PostDeletionCreateArgs} args - Arguments to create a PostDeletion.
     * @example
     * // Create one PostDeletion
     * const PostDeletion = await prisma.postDeletion.create({
     *   data: {
     *     // ... data to create a PostDeletion
     *   }
     * })
     * 
     */
    create<T extends PostDeletionCreateArgs>(args: SelectSubset<T, PostDeletionCreateArgs<ExtArgs>>): Prisma__PostDeletionClient<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostDeletions.
     * @param {PostDeletionCreateManyArgs} args - Arguments to create many PostDeletions.
     * @example
     * // Create many PostDeletions
     * const postDeletion = await prisma.postDeletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostDeletionCreateManyArgs>(args?: SelectSubset<T, PostDeletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostDeletions and returns the data saved in the database.
     * @param {PostDeletionCreateManyAndReturnArgs} args - Arguments to create many PostDeletions.
     * @example
     * // Create many PostDeletions
     * const postDeletion = await prisma.postDeletion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostDeletions and only return the `id`
     * const postDeletionWithIdOnly = await prisma.postDeletion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostDeletionCreateManyAndReturnArgs>(args?: SelectSubset<T, PostDeletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostDeletion.
     * @param {PostDeletionDeleteArgs} args - Arguments to delete one PostDeletion.
     * @example
     * // Delete one PostDeletion
     * const PostDeletion = await prisma.postDeletion.delete({
     *   where: {
     *     // ... filter to delete one PostDeletion
     *   }
     * })
     * 
     */
    delete<T extends PostDeletionDeleteArgs>(args: SelectSubset<T, PostDeletionDeleteArgs<ExtArgs>>): Prisma__PostDeletionClient<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostDeletion.
     * @param {PostDeletionUpdateArgs} args - Arguments to update one PostDeletion.
     * @example
     * // Update one PostDeletion
     * const postDeletion = await prisma.postDeletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostDeletionUpdateArgs>(args: SelectSubset<T, PostDeletionUpdateArgs<ExtArgs>>): Prisma__PostDeletionClient<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostDeletions.
     * @param {PostDeletionDeleteManyArgs} args - Arguments to filter PostDeletions to delete.
     * @example
     * // Delete a few PostDeletions
     * const { count } = await prisma.postDeletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeletionDeleteManyArgs>(args?: SelectSubset<T, PostDeletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostDeletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostDeletions
     * const postDeletion = await prisma.postDeletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostDeletionUpdateManyArgs>(args: SelectSubset<T, PostDeletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostDeletions and returns the data updated in the database.
     * @param {PostDeletionUpdateManyAndReturnArgs} args - Arguments to update many PostDeletions.
     * @example
     * // Update many PostDeletions
     * const postDeletion = await prisma.postDeletion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostDeletions and only return the `id`
     * const postDeletionWithIdOnly = await prisma.postDeletion.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostDeletionUpdateManyAndReturnArgs>(args: SelectSubset<T, PostDeletionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostDeletion.
     * @param {PostDeletionUpsertArgs} args - Arguments to update or create a PostDeletion.
     * @example
     * // Update or create a PostDeletion
     * const postDeletion = await prisma.postDeletion.upsert({
     *   create: {
     *     // ... data to create a PostDeletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostDeletion we want to update
     *   }
     * })
     */
    upsert<T extends PostDeletionUpsertArgs>(args: SelectSubset<T, PostDeletionUpsertArgs<ExtArgs>>): Prisma__PostDeletionClient<$Result.GetResult<Prisma.$PostDeletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostDeletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeletionCountArgs} args - Arguments to filter PostDeletions to count.
     * @example
     * // Count the number of PostDeletions
     * const count = await prisma.postDeletion.count({
     *   where: {
     *     // ... the filter for the PostDeletions we want to count
     *   }
     * })
    **/
    count<T extends PostDeletionCountArgs>(
      args?: Subset<T, PostDeletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostDeletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostDeletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostDeletionAggregateArgs>(args: Subset<T, PostDeletionAggregateArgs>): Prisma.PrismaPromise<GetPostDeletionAggregateType<T>>

    /**
     * Group by PostDeletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeletionGroupByArgs} args - Group by arguments.
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
      T extends PostDeletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostDeletionGroupByArgs['orderBy'] }
        : { orderBy?: PostDeletionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostDeletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostDeletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostDeletion model
   */
  readonly fields: PostDeletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostDeletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostDeletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostDeletion model
   */
  interface PostDeletionFieldRefs {
    readonly id: FieldRef<"PostDeletion", 'String'>
    readonly reason: FieldRef<"PostDeletion", 'String'>
    readonly createdAt: FieldRef<"PostDeletion", 'DateTime'>
    readonly sellerId: FieldRef<"PostDeletion", 'String'>
    readonly postId: FieldRef<"PostDeletion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostDeletion findUnique
   */
  export type PostDeletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionInclude<ExtArgs> | null
    /**
     * Filter, which PostDeletion to fetch.
     */
    where: PostDeletionWhereUniqueInput
  }

  /**
   * PostDeletion findUniqueOrThrow
   */
  export type PostDeletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionInclude<ExtArgs> | null
    /**
     * Filter, which PostDeletion to fetch.
     */
    where: PostDeletionWhereUniqueInput
  }

  /**
   * PostDeletion findFirst
   */
  export type PostDeletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionInclude<ExtArgs> | null
    /**
     * Filter, which PostDeletion to fetch.
     */
    where?: PostDeletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDeletions to fetch.
     */
    orderBy?: PostDeletionOrderByWithRelationInput | PostDeletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostDeletions.
     */
    cursor?: PostDeletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDeletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDeletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostDeletions.
     */
    distinct?: PostDeletionScalarFieldEnum | PostDeletionScalarFieldEnum[]
  }

  /**
   * PostDeletion findFirstOrThrow
   */
  export type PostDeletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionInclude<ExtArgs> | null
    /**
     * Filter, which PostDeletion to fetch.
     */
    where?: PostDeletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDeletions to fetch.
     */
    orderBy?: PostDeletionOrderByWithRelationInput | PostDeletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostDeletions.
     */
    cursor?: PostDeletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDeletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDeletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostDeletions.
     */
    distinct?: PostDeletionScalarFieldEnum | PostDeletionScalarFieldEnum[]
  }

  /**
   * PostDeletion findMany
   */
  export type PostDeletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionInclude<ExtArgs> | null
    /**
     * Filter, which PostDeletions to fetch.
     */
    where?: PostDeletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDeletions to fetch.
     */
    orderBy?: PostDeletionOrderByWithRelationInput | PostDeletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostDeletions.
     */
    cursor?: PostDeletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDeletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDeletions.
     */
    skip?: number
    distinct?: PostDeletionScalarFieldEnum | PostDeletionScalarFieldEnum[]
  }

  /**
   * PostDeletion create
   */
  export type PostDeletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionInclude<ExtArgs> | null
    /**
     * The data needed to create a PostDeletion.
     */
    data: XOR<PostDeletionCreateInput, PostDeletionUncheckedCreateInput>
  }

  /**
   * PostDeletion createMany
   */
  export type PostDeletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostDeletions.
     */
    data: PostDeletionCreateManyInput | PostDeletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostDeletion createManyAndReturn
   */
  export type PostDeletionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * The data used to create many PostDeletions.
     */
    data: PostDeletionCreateManyInput | PostDeletionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostDeletion update
   */
  export type PostDeletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionInclude<ExtArgs> | null
    /**
     * The data needed to update a PostDeletion.
     */
    data: XOR<PostDeletionUpdateInput, PostDeletionUncheckedUpdateInput>
    /**
     * Choose, which PostDeletion to update.
     */
    where: PostDeletionWhereUniqueInput
  }

  /**
   * PostDeletion updateMany
   */
  export type PostDeletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostDeletions.
     */
    data: XOR<PostDeletionUpdateManyMutationInput, PostDeletionUncheckedUpdateManyInput>
    /**
     * Filter which PostDeletions to update
     */
    where?: PostDeletionWhereInput
    /**
     * Limit how many PostDeletions to update.
     */
    limit?: number
  }

  /**
   * PostDeletion updateManyAndReturn
   */
  export type PostDeletionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * The data used to update PostDeletions.
     */
    data: XOR<PostDeletionUpdateManyMutationInput, PostDeletionUncheckedUpdateManyInput>
    /**
     * Filter which PostDeletions to update
     */
    where?: PostDeletionWhereInput
    /**
     * Limit how many PostDeletions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostDeletion upsert
   */
  export type PostDeletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionInclude<ExtArgs> | null
    /**
     * The filter to search for the PostDeletion to update in case it exists.
     */
    where: PostDeletionWhereUniqueInput
    /**
     * In case the PostDeletion found by the `where` argument doesn't exist, create a new PostDeletion with this data.
     */
    create: XOR<PostDeletionCreateInput, PostDeletionUncheckedCreateInput>
    /**
     * In case the PostDeletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostDeletionUpdateInput, PostDeletionUncheckedUpdateInput>
  }

  /**
   * PostDeletion delete
   */
  export type PostDeletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionInclude<ExtArgs> | null
    /**
     * Filter which PostDeletion to delete.
     */
    where: PostDeletionWhereUniqueInput
  }

  /**
   * PostDeletion deleteMany
   */
  export type PostDeletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostDeletions to delete
     */
    where?: PostDeletionWhereInput
    /**
     * Limit how many PostDeletions to delete.
     */
    limit?: number
  }

  /**
   * PostDeletion without action
   */
  export type PostDeletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDeletion
     */
    select?: PostDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDeletion
     */
    omit?: PostDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeletionInclude<ExtArgs> | null
  }


  /**
   * Model SellerLimit
   */

  export type AggregateSellerLimit = {
    _count: SellerLimitCountAggregateOutputType | null
    _avg: SellerLimitAvgAggregateOutputType | null
    _sum: SellerLimitSumAggregateOutputType | null
    _min: SellerLimitMinAggregateOutputType | null
    _max: SellerLimitMaxAggregateOutputType | null
  }

  export type SellerLimitAvgAggregateOutputType = {
    dailyLimit: number | null
    cooldownSecs: number | null
    usageCount: number | null
  }

  export type SellerLimitSumAggregateOutputType = {
    dailyLimit: number | null
    cooldownSecs: number | null
    usageCount: number | null
  }

  export type SellerLimitMinAggregateOutputType = {
    id: string | null
    sellerId: string | null
    dailyLimit: number | null
    cooldownSecs: number | null
    usageCount: number | null
    lastRequestAt: Date | null
  }

  export type SellerLimitMaxAggregateOutputType = {
    id: string | null
    sellerId: string | null
    dailyLimit: number | null
    cooldownSecs: number | null
    usageCount: number | null
    lastRequestAt: Date | null
  }

  export type SellerLimitCountAggregateOutputType = {
    id: number
    sellerId: number
    dailyLimit: number
    cooldownSecs: number
    usageCount: number
    lastRequestAt: number
    _all: number
  }


  export type SellerLimitAvgAggregateInputType = {
    dailyLimit?: true
    cooldownSecs?: true
    usageCount?: true
  }

  export type SellerLimitSumAggregateInputType = {
    dailyLimit?: true
    cooldownSecs?: true
    usageCount?: true
  }

  export type SellerLimitMinAggregateInputType = {
    id?: true
    sellerId?: true
    dailyLimit?: true
    cooldownSecs?: true
    usageCount?: true
    lastRequestAt?: true
  }

  export type SellerLimitMaxAggregateInputType = {
    id?: true
    sellerId?: true
    dailyLimit?: true
    cooldownSecs?: true
    usageCount?: true
    lastRequestAt?: true
  }

  export type SellerLimitCountAggregateInputType = {
    id?: true
    sellerId?: true
    dailyLimit?: true
    cooldownSecs?: true
    usageCount?: true
    lastRequestAt?: true
    _all?: true
  }

  export type SellerLimitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellerLimit to aggregate.
     */
    where?: SellerLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerLimits to fetch.
     */
    orderBy?: SellerLimitOrderByWithRelationInput | SellerLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellerLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SellerLimits
    **/
    _count?: true | SellerLimitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SellerLimitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SellerLimitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerLimitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerLimitMaxAggregateInputType
  }

  export type GetSellerLimitAggregateType<T extends SellerLimitAggregateArgs> = {
        [P in keyof T & keyof AggregateSellerLimit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellerLimit[P]>
      : GetScalarType<T[P], AggregateSellerLimit[P]>
  }




  export type SellerLimitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerLimitWhereInput
    orderBy?: SellerLimitOrderByWithAggregationInput | SellerLimitOrderByWithAggregationInput[]
    by: SellerLimitScalarFieldEnum[] | SellerLimitScalarFieldEnum
    having?: SellerLimitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerLimitCountAggregateInputType | true
    _avg?: SellerLimitAvgAggregateInputType
    _sum?: SellerLimitSumAggregateInputType
    _min?: SellerLimitMinAggregateInputType
    _max?: SellerLimitMaxAggregateInputType
  }

  export type SellerLimitGroupByOutputType = {
    id: string
    sellerId: string
    dailyLimit: number
    cooldownSecs: number
    usageCount: number
    lastRequestAt: Date | null
    _count: SellerLimitCountAggregateOutputType | null
    _avg: SellerLimitAvgAggregateOutputType | null
    _sum: SellerLimitSumAggregateOutputType | null
    _min: SellerLimitMinAggregateOutputType | null
    _max: SellerLimitMaxAggregateOutputType | null
  }

  type GetSellerLimitGroupByPayload<T extends SellerLimitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerLimitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerLimitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerLimitGroupByOutputType[P]>
            : GetScalarType<T[P], SellerLimitGroupByOutputType[P]>
        }
      >
    >


  export type SellerLimitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    dailyLimit?: boolean
    cooldownSecs?: boolean
    usageCount?: boolean
    lastRequestAt?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerLimit"]>

  export type SellerLimitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    dailyLimit?: boolean
    cooldownSecs?: boolean
    usageCount?: boolean
    lastRequestAt?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerLimit"]>

  export type SellerLimitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    dailyLimit?: boolean
    cooldownSecs?: boolean
    usageCount?: boolean
    lastRequestAt?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerLimit"]>

  export type SellerLimitSelectScalar = {
    id?: boolean
    sellerId?: boolean
    dailyLimit?: boolean
    cooldownSecs?: boolean
    usageCount?: boolean
    lastRequestAt?: boolean
  }

  export type SellerLimitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sellerId" | "dailyLimit" | "cooldownSecs" | "usageCount" | "lastRequestAt", ExtArgs["result"]["sellerLimit"]>
  export type SellerLimitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SellerLimitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SellerLimitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SellerLimitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SellerLimit"
    objects: {
      seller: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sellerId: string
      dailyLimit: number
      cooldownSecs: number
      usageCount: number
      lastRequestAt: Date | null
    }, ExtArgs["result"]["sellerLimit"]>
    composites: {}
  }

  type SellerLimitGetPayload<S extends boolean | null | undefined | SellerLimitDefaultArgs> = $Result.GetResult<Prisma.$SellerLimitPayload, S>

  type SellerLimitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SellerLimitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellerLimitCountAggregateInputType | true
    }

  export interface SellerLimitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SellerLimit'], meta: { name: 'SellerLimit' } }
    /**
     * Find zero or one SellerLimit that matches the filter.
     * @param {SellerLimitFindUniqueArgs} args - Arguments to find a SellerLimit
     * @example
     * // Get one SellerLimit
     * const sellerLimit = await prisma.sellerLimit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SellerLimitFindUniqueArgs>(args: SelectSubset<T, SellerLimitFindUniqueArgs<ExtArgs>>): Prisma__SellerLimitClient<$Result.GetResult<Prisma.$SellerLimitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SellerLimit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SellerLimitFindUniqueOrThrowArgs} args - Arguments to find a SellerLimit
     * @example
     * // Get one SellerLimit
     * const sellerLimit = await prisma.sellerLimit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SellerLimitFindUniqueOrThrowArgs>(args: SelectSubset<T, SellerLimitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SellerLimitClient<$Result.GetResult<Prisma.$SellerLimitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellerLimit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerLimitFindFirstArgs} args - Arguments to find a SellerLimit
     * @example
     * // Get one SellerLimit
     * const sellerLimit = await prisma.sellerLimit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SellerLimitFindFirstArgs>(args?: SelectSubset<T, SellerLimitFindFirstArgs<ExtArgs>>): Prisma__SellerLimitClient<$Result.GetResult<Prisma.$SellerLimitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellerLimit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerLimitFindFirstOrThrowArgs} args - Arguments to find a SellerLimit
     * @example
     * // Get one SellerLimit
     * const sellerLimit = await prisma.sellerLimit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SellerLimitFindFirstOrThrowArgs>(args?: SelectSubset<T, SellerLimitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SellerLimitClient<$Result.GetResult<Prisma.$SellerLimitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SellerLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerLimitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SellerLimits
     * const sellerLimits = await prisma.sellerLimit.findMany()
     * 
     * // Get first 10 SellerLimits
     * const sellerLimits = await prisma.sellerLimit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellerLimitWithIdOnly = await prisma.sellerLimit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SellerLimitFindManyArgs>(args?: SelectSubset<T, SellerLimitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerLimitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SellerLimit.
     * @param {SellerLimitCreateArgs} args - Arguments to create a SellerLimit.
     * @example
     * // Create one SellerLimit
     * const SellerLimit = await prisma.sellerLimit.create({
     *   data: {
     *     // ... data to create a SellerLimit
     *   }
     * })
     * 
     */
    create<T extends SellerLimitCreateArgs>(args: SelectSubset<T, SellerLimitCreateArgs<ExtArgs>>): Prisma__SellerLimitClient<$Result.GetResult<Prisma.$SellerLimitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SellerLimits.
     * @param {SellerLimitCreateManyArgs} args - Arguments to create many SellerLimits.
     * @example
     * // Create many SellerLimits
     * const sellerLimit = await prisma.sellerLimit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SellerLimitCreateManyArgs>(args?: SelectSubset<T, SellerLimitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SellerLimits and returns the data saved in the database.
     * @param {SellerLimitCreateManyAndReturnArgs} args - Arguments to create many SellerLimits.
     * @example
     * // Create many SellerLimits
     * const sellerLimit = await prisma.sellerLimit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SellerLimits and only return the `id`
     * const sellerLimitWithIdOnly = await prisma.sellerLimit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SellerLimitCreateManyAndReturnArgs>(args?: SelectSubset<T, SellerLimitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerLimitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SellerLimit.
     * @param {SellerLimitDeleteArgs} args - Arguments to delete one SellerLimit.
     * @example
     * // Delete one SellerLimit
     * const SellerLimit = await prisma.sellerLimit.delete({
     *   where: {
     *     // ... filter to delete one SellerLimit
     *   }
     * })
     * 
     */
    delete<T extends SellerLimitDeleteArgs>(args: SelectSubset<T, SellerLimitDeleteArgs<ExtArgs>>): Prisma__SellerLimitClient<$Result.GetResult<Prisma.$SellerLimitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SellerLimit.
     * @param {SellerLimitUpdateArgs} args - Arguments to update one SellerLimit.
     * @example
     * // Update one SellerLimit
     * const sellerLimit = await prisma.sellerLimit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SellerLimitUpdateArgs>(args: SelectSubset<T, SellerLimitUpdateArgs<ExtArgs>>): Prisma__SellerLimitClient<$Result.GetResult<Prisma.$SellerLimitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SellerLimits.
     * @param {SellerLimitDeleteManyArgs} args - Arguments to filter SellerLimits to delete.
     * @example
     * // Delete a few SellerLimits
     * const { count } = await prisma.sellerLimit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SellerLimitDeleteManyArgs>(args?: SelectSubset<T, SellerLimitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellerLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerLimitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SellerLimits
     * const sellerLimit = await prisma.sellerLimit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SellerLimitUpdateManyArgs>(args: SelectSubset<T, SellerLimitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellerLimits and returns the data updated in the database.
     * @param {SellerLimitUpdateManyAndReturnArgs} args - Arguments to update many SellerLimits.
     * @example
     * // Update many SellerLimits
     * const sellerLimit = await prisma.sellerLimit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SellerLimits and only return the `id`
     * const sellerLimitWithIdOnly = await prisma.sellerLimit.updateManyAndReturn({
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
    updateManyAndReturn<T extends SellerLimitUpdateManyAndReturnArgs>(args: SelectSubset<T, SellerLimitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerLimitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SellerLimit.
     * @param {SellerLimitUpsertArgs} args - Arguments to update or create a SellerLimit.
     * @example
     * // Update or create a SellerLimit
     * const sellerLimit = await prisma.sellerLimit.upsert({
     *   create: {
     *     // ... data to create a SellerLimit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SellerLimit we want to update
     *   }
     * })
     */
    upsert<T extends SellerLimitUpsertArgs>(args: SelectSubset<T, SellerLimitUpsertArgs<ExtArgs>>): Prisma__SellerLimitClient<$Result.GetResult<Prisma.$SellerLimitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SellerLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerLimitCountArgs} args - Arguments to filter SellerLimits to count.
     * @example
     * // Count the number of SellerLimits
     * const count = await prisma.sellerLimit.count({
     *   where: {
     *     // ... the filter for the SellerLimits we want to count
     *   }
     * })
    **/
    count<T extends SellerLimitCountArgs>(
      args?: Subset<T, SellerLimitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerLimitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SellerLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerLimitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellerLimitAggregateArgs>(args: Subset<T, SellerLimitAggregateArgs>): Prisma.PrismaPromise<GetSellerLimitAggregateType<T>>

    /**
     * Group by SellerLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerLimitGroupByArgs} args - Group by arguments.
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
      T extends SellerLimitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellerLimitGroupByArgs['orderBy'] }
        : { orderBy?: SellerLimitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SellerLimitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerLimitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SellerLimit model
   */
  readonly fields: SellerLimitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SellerLimit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellerLimitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SellerLimit model
   */
  interface SellerLimitFieldRefs {
    readonly id: FieldRef<"SellerLimit", 'String'>
    readonly sellerId: FieldRef<"SellerLimit", 'String'>
    readonly dailyLimit: FieldRef<"SellerLimit", 'Int'>
    readonly cooldownSecs: FieldRef<"SellerLimit", 'Int'>
    readonly usageCount: FieldRef<"SellerLimit", 'Int'>
    readonly lastRequestAt: FieldRef<"SellerLimit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SellerLimit findUnique
   */
  export type SellerLimitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitInclude<ExtArgs> | null
    /**
     * Filter, which SellerLimit to fetch.
     */
    where: SellerLimitWhereUniqueInput
  }

  /**
   * SellerLimit findUniqueOrThrow
   */
  export type SellerLimitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitInclude<ExtArgs> | null
    /**
     * Filter, which SellerLimit to fetch.
     */
    where: SellerLimitWhereUniqueInput
  }

  /**
   * SellerLimit findFirst
   */
  export type SellerLimitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitInclude<ExtArgs> | null
    /**
     * Filter, which SellerLimit to fetch.
     */
    where?: SellerLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerLimits to fetch.
     */
    orderBy?: SellerLimitOrderByWithRelationInput | SellerLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellerLimits.
     */
    cursor?: SellerLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerLimits.
     */
    distinct?: SellerLimitScalarFieldEnum | SellerLimitScalarFieldEnum[]
  }

  /**
   * SellerLimit findFirstOrThrow
   */
  export type SellerLimitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitInclude<ExtArgs> | null
    /**
     * Filter, which SellerLimit to fetch.
     */
    where?: SellerLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerLimits to fetch.
     */
    orderBy?: SellerLimitOrderByWithRelationInput | SellerLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellerLimits.
     */
    cursor?: SellerLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerLimits.
     */
    distinct?: SellerLimitScalarFieldEnum | SellerLimitScalarFieldEnum[]
  }

  /**
   * SellerLimit findMany
   */
  export type SellerLimitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitInclude<ExtArgs> | null
    /**
     * Filter, which SellerLimits to fetch.
     */
    where?: SellerLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerLimits to fetch.
     */
    orderBy?: SellerLimitOrderByWithRelationInput | SellerLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SellerLimits.
     */
    cursor?: SellerLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerLimits.
     */
    skip?: number
    distinct?: SellerLimitScalarFieldEnum | SellerLimitScalarFieldEnum[]
  }

  /**
   * SellerLimit create
   */
  export type SellerLimitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitInclude<ExtArgs> | null
    /**
     * The data needed to create a SellerLimit.
     */
    data: XOR<SellerLimitCreateInput, SellerLimitUncheckedCreateInput>
  }

  /**
   * SellerLimit createMany
   */
  export type SellerLimitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SellerLimits.
     */
    data: SellerLimitCreateManyInput | SellerLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SellerLimit createManyAndReturn
   */
  export type SellerLimitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * The data used to create many SellerLimits.
     */
    data: SellerLimitCreateManyInput | SellerLimitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellerLimit update
   */
  export type SellerLimitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitInclude<ExtArgs> | null
    /**
     * The data needed to update a SellerLimit.
     */
    data: XOR<SellerLimitUpdateInput, SellerLimitUncheckedUpdateInput>
    /**
     * Choose, which SellerLimit to update.
     */
    where: SellerLimitWhereUniqueInput
  }

  /**
   * SellerLimit updateMany
   */
  export type SellerLimitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SellerLimits.
     */
    data: XOR<SellerLimitUpdateManyMutationInput, SellerLimitUncheckedUpdateManyInput>
    /**
     * Filter which SellerLimits to update
     */
    where?: SellerLimitWhereInput
    /**
     * Limit how many SellerLimits to update.
     */
    limit?: number
  }

  /**
   * SellerLimit updateManyAndReturn
   */
  export type SellerLimitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * The data used to update SellerLimits.
     */
    data: XOR<SellerLimitUpdateManyMutationInput, SellerLimitUncheckedUpdateManyInput>
    /**
     * Filter which SellerLimits to update
     */
    where?: SellerLimitWhereInput
    /**
     * Limit how many SellerLimits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellerLimit upsert
   */
  export type SellerLimitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitInclude<ExtArgs> | null
    /**
     * The filter to search for the SellerLimit to update in case it exists.
     */
    where: SellerLimitWhereUniqueInput
    /**
     * In case the SellerLimit found by the `where` argument doesn't exist, create a new SellerLimit with this data.
     */
    create: XOR<SellerLimitCreateInput, SellerLimitUncheckedCreateInput>
    /**
     * In case the SellerLimit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellerLimitUpdateInput, SellerLimitUncheckedUpdateInput>
  }

  /**
   * SellerLimit delete
   */
  export type SellerLimitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitInclude<ExtArgs> | null
    /**
     * Filter which SellerLimit to delete.
     */
    where: SellerLimitWhereUniqueInput
  }

  /**
   * SellerLimit deleteMany
   */
  export type SellerLimitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellerLimits to delete
     */
    where?: SellerLimitWhereInput
    /**
     * Limit how many SellerLimits to delete.
     */
    limit?: number
  }

  /**
   * SellerLimit without action
   */
  export type SellerLimitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerLimit
     */
    select?: SellerLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerLimit
     */
    omit?: SellerLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerLimitInclude<ExtArgs> | null
  }


  /**
   * Model SellerRequestLog
   */

  export type AggregateSellerRequestLog = {
    _count: SellerRequestLogCountAggregateOutputType | null
    _min: SellerRequestLogMinAggregateOutputType | null
    _max: SellerRequestLogMaxAggregateOutputType | null
  }

  export type SellerRequestLogMinAggregateOutputType = {
    id: string | null
    sellerId: string | null
    createdAt: Date | null
    outcome: $Enums.RequestStatus | null
  }

  export type SellerRequestLogMaxAggregateOutputType = {
    id: string | null
    sellerId: string | null
    createdAt: Date | null
    outcome: $Enums.RequestStatus | null
  }

  export type SellerRequestLogCountAggregateOutputType = {
    id: number
    sellerId: number
    createdAt: number
    outcome: number
    _all: number
  }


  export type SellerRequestLogMinAggregateInputType = {
    id?: true
    sellerId?: true
    createdAt?: true
    outcome?: true
  }

  export type SellerRequestLogMaxAggregateInputType = {
    id?: true
    sellerId?: true
    createdAt?: true
    outcome?: true
  }

  export type SellerRequestLogCountAggregateInputType = {
    id?: true
    sellerId?: true
    createdAt?: true
    outcome?: true
    _all?: true
  }

  export type SellerRequestLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellerRequestLog to aggregate.
     */
    where?: SellerRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerRequestLogs to fetch.
     */
    orderBy?: SellerRequestLogOrderByWithRelationInput | SellerRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellerRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SellerRequestLogs
    **/
    _count?: true | SellerRequestLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerRequestLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerRequestLogMaxAggregateInputType
  }

  export type GetSellerRequestLogAggregateType<T extends SellerRequestLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSellerRequestLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellerRequestLog[P]>
      : GetScalarType<T[P], AggregateSellerRequestLog[P]>
  }




  export type SellerRequestLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerRequestLogWhereInput
    orderBy?: SellerRequestLogOrderByWithAggregationInput | SellerRequestLogOrderByWithAggregationInput[]
    by: SellerRequestLogScalarFieldEnum[] | SellerRequestLogScalarFieldEnum
    having?: SellerRequestLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerRequestLogCountAggregateInputType | true
    _min?: SellerRequestLogMinAggregateInputType
    _max?: SellerRequestLogMaxAggregateInputType
  }

  export type SellerRequestLogGroupByOutputType = {
    id: string
    sellerId: string
    createdAt: Date
    outcome: $Enums.RequestStatus
    _count: SellerRequestLogCountAggregateOutputType | null
    _min: SellerRequestLogMinAggregateOutputType | null
    _max: SellerRequestLogMaxAggregateOutputType | null
  }

  type GetSellerRequestLogGroupByPayload<T extends SellerRequestLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerRequestLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerRequestLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerRequestLogGroupByOutputType[P]>
            : GetScalarType<T[P], SellerRequestLogGroupByOutputType[P]>
        }
      >
    >


  export type SellerRequestLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    createdAt?: boolean
    outcome?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerRequestLog"]>

  export type SellerRequestLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    createdAt?: boolean
    outcome?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerRequestLog"]>

  export type SellerRequestLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    createdAt?: boolean
    outcome?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerRequestLog"]>

  export type SellerRequestLogSelectScalar = {
    id?: boolean
    sellerId?: boolean
    createdAt?: boolean
    outcome?: boolean
  }

  export type SellerRequestLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sellerId" | "createdAt" | "outcome", ExtArgs["result"]["sellerRequestLog"]>
  export type SellerRequestLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SellerRequestLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SellerRequestLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SellerRequestLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SellerRequestLog"
    objects: {
      seller: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sellerId: string
      createdAt: Date
      outcome: $Enums.RequestStatus
    }, ExtArgs["result"]["sellerRequestLog"]>
    composites: {}
  }

  type SellerRequestLogGetPayload<S extends boolean | null | undefined | SellerRequestLogDefaultArgs> = $Result.GetResult<Prisma.$SellerRequestLogPayload, S>

  type SellerRequestLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SellerRequestLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellerRequestLogCountAggregateInputType | true
    }

  export interface SellerRequestLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SellerRequestLog'], meta: { name: 'SellerRequestLog' } }
    /**
     * Find zero or one SellerRequestLog that matches the filter.
     * @param {SellerRequestLogFindUniqueArgs} args - Arguments to find a SellerRequestLog
     * @example
     * // Get one SellerRequestLog
     * const sellerRequestLog = await prisma.sellerRequestLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SellerRequestLogFindUniqueArgs>(args: SelectSubset<T, SellerRequestLogFindUniqueArgs<ExtArgs>>): Prisma__SellerRequestLogClient<$Result.GetResult<Prisma.$SellerRequestLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SellerRequestLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SellerRequestLogFindUniqueOrThrowArgs} args - Arguments to find a SellerRequestLog
     * @example
     * // Get one SellerRequestLog
     * const sellerRequestLog = await prisma.sellerRequestLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SellerRequestLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SellerRequestLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SellerRequestLogClient<$Result.GetResult<Prisma.$SellerRequestLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellerRequestLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerRequestLogFindFirstArgs} args - Arguments to find a SellerRequestLog
     * @example
     * // Get one SellerRequestLog
     * const sellerRequestLog = await prisma.sellerRequestLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SellerRequestLogFindFirstArgs>(args?: SelectSubset<T, SellerRequestLogFindFirstArgs<ExtArgs>>): Prisma__SellerRequestLogClient<$Result.GetResult<Prisma.$SellerRequestLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellerRequestLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerRequestLogFindFirstOrThrowArgs} args - Arguments to find a SellerRequestLog
     * @example
     * // Get one SellerRequestLog
     * const sellerRequestLog = await prisma.sellerRequestLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SellerRequestLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SellerRequestLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SellerRequestLogClient<$Result.GetResult<Prisma.$SellerRequestLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SellerRequestLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerRequestLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SellerRequestLogs
     * const sellerRequestLogs = await prisma.sellerRequestLog.findMany()
     * 
     * // Get first 10 SellerRequestLogs
     * const sellerRequestLogs = await prisma.sellerRequestLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellerRequestLogWithIdOnly = await prisma.sellerRequestLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SellerRequestLogFindManyArgs>(args?: SelectSubset<T, SellerRequestLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerRequestLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SellerRequestLog.
     * @param {SellerRequestLogCreateArgs} args - Arguments to create a SellerRequestLog.
     * @example
     * // Create one SellerRequestLog
     * const SellerRequestLog = await prisma.sellerRequestLog.create({
     *   data: {
     *     // ... data to create a SellerRequestLog
     *   }
     * })
     * 
     */
    create<T extends SellerRequestLogCreateArgs>(args: SelectSubset<T, SellerRequestLogCreateArgs<ExtArgs>>): Prisma__SellerRequestLogClient<$Result.GetResult<Prisma.$SellerRequestLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SellerRequestLogs.
     * @param {SellerRequestLogCreateManyArgs} args - Arguments to create many SellerRequestLogs.
     * @example
     * // Create many SellerRequestLogs
     * const sellerRequestLog = await prisma.sellerRequestLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SellerRequestLogCreateManyArgs>(args?: SelectSubset<T, SellerRequestLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SellerRequestLogs and returns the data saved in the database.
     * @param {SellerRequestLogCreateManyAndReturnArgs} args - Arguments to create many SellerRequestLogs.
     * @example
     * // Create many SellerRequestLogs
     * const sellerRequestLog = await prisma.sellerRequestLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SellerRequestLogs and only return the `id`
     * const sellerRequestLogWithIdOnly = await prisma.sellerRequestLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SellerRequestLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SellerRequestLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerRequestLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SellerRequestLog.
     * @param {SellerRequestLogDeleteArgs} args - Arguments to delete one SellerRequestLog.
     * @example
     * // Delete one SellerRequestLog
     * const SellerRequestLog = await prisma.sellerRequestLog.delete({
     *   where: {
     *     // ... filter to delete one SellerRequestLog
     *   }
     * })
     * 
     */
    delete<T extends SellerRequestLogDeleteArgs>(args: SelectSubset<T, SellerRequestLogDeleteArgs<ExtArgs>>): Prisma__SellerRequestLogClient<$Result.GetResult<Prisma.$SellerRequestLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SellerRequestLog.
     * @param {SellerRequestLogUpdateArgs} args - Arguments to update one SellerRequestLog.
     * @example
     * // Update one SellerRequestLog
     * const sellerRequestLog = await prisma.sellerRequestLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SellerRequestLogUpdateArgs>(args: SelectSubset<T, SellerRequestLogUpdateArgs<ExtArgs>>): Prisma__SellerRequestLogClient<$Result.GetResult<Prisma.$SellerRequestLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SellerRequestLogs.
     * @param {SellerRequestLogDeleteManyArgs} args - Arguments to filter SellerRequestLogs to delete.
     * @example
     * // Delete a few SellerRequestLogs
     * const { count } = await prisma.sellerRequestLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SellerRequestLogDeleteManyArgs>(args?: SelectSubset<T, SellerRequestLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellerRequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerRequestLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SellerRequestLogs
     * const sellerRequestLog = await prisma.sellerRequestLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SellerRequestLogUpdateManyArgs>(args: SelectSubset<T, SellerRequestLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellerRequestLogs and returns the data updated in the database.
     * @param {SellerRequestLogUpdateManyAndReturnArgs} args - Arguments to update many SellerRequestLogs.
     * @example
     * // Update many SellerRequestLogs
     * const sellerRequestLog = await prisma.sellerRequestLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SellerRequestLogs and only return the `id`
     * const sellerRequestLogWithIdOnly = await prisma.sellerRequestLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends SellerRequestLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SellerRequestLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerRequestLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SellerRequestLog.
     * @param {SellerRequestLogUpsertArgs} args - Arguments to update or create a SellerRequestLog.
     * @example
     * // Update or create a SellerRequestLog
     * const sellerRequestLog = await prisma.sellerRequestLog.upsert({
     *   create: {
     *     // ... data to create a SellerRequestLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SellerRequestLog we want to update
     *   }
     * })
     */
    upsert<T extends SellerRequestLogUpsertArgs>(args: SelectSubset<T, SellerRequestLogUpsertArgs<ExtArgs>>): Prisma__SellerRequestLogClient<$Result.GetResult<Prisma.$SellerRequestLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SellerRequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerRequestLogCountArgs} args - Arguments to filter SellerRequestLogs to count.
     * @example
     * // Count the number of SellerRequestLogs
     * const count = await prisma.sellerRequestLog.count({
     *   where: {
     *     // ... the filter for the SellerRequestLogs we want to count
     *   }
     * })
    **/
    count<T extends SellerRequestLogCountArgs>(
      args?: Subset<T, SellerRequestLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerRequestLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SellerRequestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerRequestLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellerRequestLogAggregateArgs>(args: Subset<T, SellerRequestLogAggregateArgs>): Prisma.PrismaPromise<GetSellerRequestLogAggregateType<T>>

    /**
     * Group by SellerRequestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerRequestLogGroupByArgs} args - Group by arguments.
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
      T extends SellerRequestLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellerRequestLogGroupByArgs['orderBy'] }
        : { orderBy?: SellerRequestLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SellerRequestLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerRequestLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SellerRequestLog model
   */
  readonly fields: SellerRequestLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SellerRequestLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellerRequestLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SellerRequestLog model
   */
  interface SellerRequestLogFieldRefs {
    readonly id: FieldRef<"SellerRequestLog", 'String'>
    readonly sellerId: FieldRef<"SellerRequestLog", 'String'>
    readonly createdAt: FieldRef<"SellerRequestLog", 'DateTime'>
    readonly outcome: FieldRef<"SellerRequestLog", 'RequestStatus'>
  }
    

  // Custom InputTypes
  /**
   * SellerRequestLog findUnique
   */
  export type SellerRequestLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogInclude<ExtArgs> | null
    /**
     * Filter, which SellerRequestLog to fetch.
     */
    where: SellerRequestLogWhereUniqueInput
  }

  /**
   * SellerRequestLog findUniqueOrThrow
   */
  export type SellerRequestLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogInclude<ExtArgs> | null
    /**
     * Filter, which SellerRequestLog to fetch.
     */
    where: SellerRequestLogWhereUniqueInput
  }

  /**
   * SellerRequestLog findFirst
   */
  export type SellerRequestLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogInclude<ExtArgs> | null
    /**
     * Filter, which SellerRequestLog to fetch.
     */
    where?: SellerRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerRequestLogs to fetch.
     */
    orderBy?: SellerRequestLogOrderByWithRelationInput | SellerRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellerRequestLogs.
     */
    cursor?: SellerRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerRequestLogs.
     */
    distinct?: SellerRequestLogScalarFieldEnum | SellerRequestLogScalarFieldEnum[]
  }

  /**
   * SellerRequestLog findFirstOrThrow
   */
  export type SellerRequestLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogInclude<ExtArgs> | null
    /**
     * Filter, which SellerRequestLog to fetch.
     */
    where?: SellerRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerRequestLogs to fetch.
     */
    orderBy?: SellerRequestLogOrderByWithRelationInput | SellerRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellerRequestLogs.
     */
    cursor?: SellerRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerRequestLogs.
     */
    distinct?: SellerRequestLogScalarFieldEnum | SellerRequestLogScalarFieldEnum[]
  }

  /**
   * SellerRequestLog findMany
   */
  export type SellerRequestLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogInclude<ExtArgs> | null
    /**
     * Filter, which SellerRequestLogs to fetch.
     */
    where?: SellerRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerRequestLogs to fetch.
     */
    orderBy?: SellerRequestLogOrderByWithRelationInput | SellerRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SellerRequestLogs.
     */
    cursor?: SellerRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerRequestLogs.
     */
    skip?: number
    distinct?: SellerRequestLogScalarFieldEnum | SellerRequestLogScalarFieldEnum[]
  }

  /**
   * SellerRequestLog create
   */
  export type SellerRequestLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SellerRequestLog.
     */
    data: XOR<SellerRequestLogCreateInput, SellerRequestLogUncheckedCreateInput>
  }

  /**
   * SellerRequestLog createMany
   */
  export type SellerRequestLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SellerRequestLogs.
     */
    data: SellerRequestLogCreateManyInput | SellerRequestLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SellerRequestLog createManyAndReturn
   */
  export type SellerRequestLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * The data used to create many SellerRequestLogs.
     */
    data: SellerRequestLogCreateManyInput | SellerRequestLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellerRequestLog update
   */
  export type SellerRequestLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SellerRequestLog.
     */
    data: XOR<SellerRequestLogUpdateInput, SellerRequestLogUncheckedUpdateInput>
    /**
     * Choose, which SellerRequestLog to update.
     */
    where: SellerRequestLogWhereUniqueInput
  }

  /**
   * SellerRequestLog updateMany
   */
  export type SellerRequestLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SellerRequestLogs.
     */
    data: XOR<SellerRequestLogUpdateManyMutationInput, SellerRequestLogUncheckedUpdateManyInput>
    /**
     * Filter which SellerRequestLogs to update
     */
    where?: SellerRequestLogWhereInput
    /**
     * Limit how many SellerRequestLogs to update.
     */
    limit?: number
  }

  /**
   * SellerRequestLog updateManyAndReturn
   */
  export type SellerRequestLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * The data used to update SellerRequestLogs.
     */
    data: XOR<SellerRequestLogUpdateManyMutationInput, SellerRequestLogUncheckedUpdateManyInput>
    /**
     * Filter which SellerRequestLogs to update
     */
    where?: SellerRequestLogWhereInput
    /**
     * Limit how many SellerRequestLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellerRequestLog upsert
   */
  export type SellerRequestLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SellerRequestLog to update in case it exists.
     */
    where: SellerRequestLogWhereUniqueInput
    /**
     * In case the SellerRequestLog found by the `where` argument doesn't exist, create a new SellerRequestLog with this data.
     */
    create: XOR<SellerRequestLogCreateInput, SellerRequestLogUncheckedCreateInput>
    /**
     * In case the SellerRequestLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellerRequestLogUpdateInput, SellerRequestLogUncheckedUpdateInput>
  }

  /**
   * SellerRequestLog delete
   */
  export type SellerRequestLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogInclude<ExtArgs> | null
    /**
     * Filter which SellerRequestLog to delete.
     */
    where: SellerRequestLogWhereUniqueInput
  }

  /**
   * SellerRequestLog deleteMany
   */
  export type SellerRequestLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellerRequestLogs to delete
     */
    where?: SellerRequestLogWhereInput
    /**
     * Limit how many SellerRequestLogs to delete.
     */
    limit?: number
  }

  /**
   * SellerRequestLog without action
   */
  export type SellerRequestLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerRequestLog
     */
    select?: SellerRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerRequestLog
     */
    omit?: SellerRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerRequestLogInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    message: string | null
    createdAt: Date | null
    read: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    message: string | null
    createdAt: Date | null
    read: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    message: number
    metadata: number
    createdAt: number
    read: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    createdAt?: true
    read?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    createdAt?: true
    read?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    metadata?: true
    createdAt?: true
    read?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string | null
    type: $Enums.NotificationType
    message: string
    metadata: JsonValue | null
    createdAt: Date
    read: boolean
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    read?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    read?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    read?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    read?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "message" | "metadata" | "createdAt" | "read", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      type: $Enums.NotificationType
      message: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      read: boolean
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Notification$userArgs<ExtArgs> = {}>(args?: Subset<T, Notification$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly metadata: FieldRef<"Notification", 'Json'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly read: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.user
   */
  export type Notification$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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


  export const SellerQueueScalarFieldEnum: {
    id: 'id',
    sellerId: 'sellerId',
    createdAt: 'createdAt'
  };

  export type SellerQueueScalarFieldEnum = (typeof SellerQueueScalarFieldEnum)[keyof typeof SellerQueueScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userName: 'userName',
    password: 'password',
    sessionVersion: 'sessionVersion',
    isActive: 'isActive',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    message: 'message',
    clientName: 'clientName',
    agentName: 'agentName',
    location: 'location',
    rent: 'rent',
    screenshot: 'screenshot',
    createdAt: 'createdAt',
    posterId: 'posterId',
    claimed: 'claimed',
    new: 'new',
    deleted: 'deleted'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ClaimScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    sellerId: 'sellerId',
    claimedAt: 'claimedAt'
  };

  export type ClaimScalarFieldEnum = (typeof ClaimScalarFieldEnum)[keyof typeof ClaimScalarFieldEnum]


  export const PostDeletionScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    createdAt: 'createdAt',
    sellerId: 'sellerId',
    postId: 'postId'
  };

  export type PostDeletionScalarFieldEnum = (typeof PostDeletionScalarFieldEnum)[keyof typeof PostDeletionScalarFieldEnum]


  export const SellerLimitScalarFieldEnum: {
    id: 'id',
    sellerId: 'sellerId',
    dailyLimit: 'dailyLimit',
    cooldownSecs: 'cooldownSecs',
    usageCount: 'usageCount',
    lastRequestAt: 'lastRequestAt'
  };

  export type SellerLimitScalarFieldEnum = (typeof SellerLimitScalarFieldEnum)[keyof typeof SellerLimitScalarFieldEnum]


  export const SellerRequestLogScalarFieldEnum: {
    id: 'id',
    sellerId: 'sellerId',
    createdAt: 'createdAt',
    outcome: 'outcome'
  };

  export type SellerRequestLogScalarFieldEnum = (typeof SellerRequestLogScalarFieldEnum)[keyof typeof SellerRequestLogScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    message: 'message',
    metadata: 'metadata',
    createdAt: 'createdAt',
    read: 'read'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type SellerQueueWhereInput = {
    AND?: SellerQueueWhereInput | SellerQueueWhereInput[]
    OR?: SellerQueueWhereInput[]
    NOT?: SellerQueueWhereInput | SellerQueueWhereInput[]
    id?: StringFilter<"SellerQueue"> | string
    sellerId?: StringFilter<"SellerQueue"> | string
    createdAt?: DateTimeFilter<"SellerQueue"> | Date | string
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SellerQueueOrderByWithRelationInput = {
    id?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    seller?: UserOrderByWithRelationInput
  }

  export type SellerQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sellerId?: string
    AND?: SellerQueueWhereInput | SellerQueueWhereInput[]
    OR?: SellerQueueWhereInput[]
    NOT?: SellerQueueWhereInput | SellerQueueWhereInput[]
    createdAt?: DateTimeFilter<"SellerQueue"> | Date | string
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sellerId">

  export type SellerQueueOrderByWithAggregationInput = {
    id?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    _count?: SellerQueueCountOrderByAggregateInput
    _max?: SellerQueueMaxOrderByAggregateInput
    _min?: SellerQueueMinOrderByAggregateInput
  }

  export type SellerQueueScalarWhereWithAggregatesInput = {
    AND?: SellerQueueScalarWhereWithAggregatesInput | SellerQueueScalarWhereWithAggregatesInput[]
    OR?: SellerQueueScalarWhereWithAggregatesInput[]
    NOT?: SellerQueueScalarWhereWithAggregatesInput | SellerQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SellerQueue"> | string
    sellerId?: StringWithAggregatesFilter<"SellerQueue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SellerQueue"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    sessionVersion?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    createdAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
    claims?: ClaimListRelationFilter
    limitProfile?: XOR<SellerLimitNullableScalarRelationFilter, SellerLimitWhereInput> | null
    requestLogs?: SellerRequestLogListRelationFilter
    sellerQueues?: SellerQueueListRelationFilter
    postDeletions?: PostDeletionListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    sessionVersion?: SortOrder
    isActive?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    claims?: ClaimOrderByRelationAggregateInput
    limitProfile?: SellerLimitOrderByWithRelationInput
    requestLogs?: SellerRequestLogOrderByRelationAggregateInput
    sellerQueues?: SellerQueueOrderByRelationAggregateInput
    postDeletions?: PostDeletionOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userName?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    sessionVersion?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    createdAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
    claims?: ClaimListRelationFilter
    limitProfile?: XOR<SellerLimitNullableScalarRelationFilter, SellerLimitWhereInput> | null
    requestLogs?: SellerRequestLogListRelationFilter
    sellerQueues?: SellerQueueListRelationFilter
    postDeletions?: PostDeletionListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "userName">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    sessionVersion?: SortOrder
    isActive?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    sessionVersion?: IntWithAggregatesFilter<"User"> | number
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    phone?: StringFilter<"Post"> | string
    message?: StringFilter<"Post"> | string
    clientName?: StringFilter<"Post"> | string
    agentName?: StringFilter<"Post"> | string
    location?: StringFilter<"Post"> | string
    rent?: StringFilter<"Post"> | string
    screenshot?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    posterId?: StringFilter<"Post"> | string
    claimed?: BoolFilter<"Post"> | boolean
    new?: BoolFilter<"Post"> | boolean
    deleted?: BoolFilter<"Post"> | boolean
    poster?: XOR<UserScalarRelationFilter, UserWhereInput>
    claim?: XOR<ClaimNullableScalarRelationFilter, ClaimWhereInput> | null
    deletions?: PostDeletionListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    clientName?: SortOrder
    agentName?: SortOrder
    location?: SortOrder
    rent?: SortOrder
    screenshot?: SortOrder
    createdAt?: SortOrder
    posterId?: SortOrder
    claimed?: SortOrder
    new?: SortOrder
    deleted?: SortOrder
    poster?: UserOrderByWithRelationInput
    claim?: ClaimOrderByWithRelationInput
    deletions?: PostDeletionOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    message?: StringFilter<"Post"> | string
    clientName?: StringFilter<"Post"> | string
    agentName?: StringFilter<"Post"> | string
    location?: StringFilter<"Post"> | string
    rent?: StringFilter<"Post"> | string
    screenshot?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    posterId?: StringFilter<"Post"> | string
    claimed?: BoolFilter<"Post"> | boolean
    new?: BoolFilter<"Post"> | boolean
    deleted?: BoolFilter<"Post"> | boolean
    poster?: XOR<UserScalarRelationFilter, UserWhereInput>
    claim?: XOR<ClaimNullableScalarRelationFilter, ClaimWhereInput> | null
    deletions?: PostDeletionListRelationFilter
  }, "id" | "phone">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    clientName?: SortOrder
    agentName?: SortOrder
    location?: SortOrder
    rent?: SortOrder
    screenshot?: SortOrder
    createdAt?: SortOrder
    posterId?: SortOrder
    claimed?: SortOrder
    new?: SortOrder
    deleted?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    phone?: StringWithAggregatesFilter<"Post"> | string
    message?: StringWithAggregatesFilter<"Post"> | string
    clientName?: StringWithAggregatesFilter<"Post"> | string
    agentName?: StringWithAggregatesFilter<"Post"> | string
    location?: StringWithAggregatesFilter<"Post"> | string
    rent?: StringWithAggregatesFilter<"Post"> | string
    screenshot?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    posterId?: StringWithAggregatesFilter<"Post"> | string
    claimed?: BoolWithAggregatesFilter<"Post"> | boolean
    new?: BoolWithAggregatesFilter<"Post"> | boolean
    deleted?: BoolWithAggregatesFilter<"Post"> | boolean
  }

  export type ClaimWhereInput = {
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    id?: StringFilter<"Claim"> | string
    postId?: StringFilter<"Claim"> | string
    sellerId?: StringFilter<"Claim"> | string
    claimedAt?: DateTimeFilter<"Claim"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ClaimOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    sellerId?: SortOrder
    claimedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
  }

  export type ClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId?: string
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    sellerId?: StringFilter<"Claim"> | string
    claimedAt?: DateTimeFilter<"Claim"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "postId">

  export type ClaimOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    sellerId?: SortOrder
    claimedAt?: SortOrder
    _count?: ClaimCountOrderByAggregateInput
    _max?: ClaimMaxOrderByAggregateInput
    _min?: ClaimMinOrderByAggregateInput
  }

  export type ClaimScalarWhereWithAggregatesInput = {
    AND?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    OR?: ClaimScalarWhereWithAggregatesInput[]
    NOT?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Claim"> | string
    postId?: StringWithAggregatesFilter<"Claim"> | string
    sellerId?: StringWithAggregatesFilter<"Claim"> | string
    claimedAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
  }

  export type PostDeletionWhereInput = {
    AND?: PostDeletionWhereInput | PostDeletionWhereInput[]
    OR?: PostDeletionWhereInput[]
    NOT?: PostDeletionWhereInput | PostDeletionWhereInput[]
    id?: StringFilter<"PostDeletion"> | string
    reason?: StringFilter<"PostDeletion"> | string
    createdAt?: DateTimeFilter<"PostDeletion"> | Date | string
    sellerId?: StringFilter<"PostDeletion"> | string
    postId?: StringFilter<"PostDeletion"> | string
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostDeletionOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    sellerId?: SortOrder
    postId?: SortOrder
    seller?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type PostDeletionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostDeletionWhereInput | PostDeletionWhereInput[]
    OR?: PostDeletionWhereInput[]
    NOT?: PostDeletionWhereInput | PostDeletionWhereInput[]
    reason?: StringFilter<"PostDeletion"> | string
    createdAt?: DateTimeFilter<"PostDeletion"> | Date | string
    sellerId?: StringFilter<"PostDeletion"> | string
    postId?: StringFilter<"PostDeletion"> | string
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type PostDeletionOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    sellerId?: SortOrder
    postId?: SortOrder
    _count?: PostDeletionCountOrderByAggregateInput
    _max?: PostDeletionMaxOrderByAggregateInput
    _min?: PostDeletionMinOrderByAggregateInput
  }

  export type PostDeletionScalarWhereWithAggregatesInput = {
    AND?: PostDeletionScalarWhereWithAggregatesInput | PostDeletionScalarWhereWithAggregatesInput[]
    OR?: PostDeletionScalarWhereWithAggregatesInput[]
    NOT?: PostDeletionScalarWhereWithAggregatesInput | PostDeletionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostDeletion"> | string
    reason?: StringWithAggregatesFilter<"PostDeletion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostDeletion"> | Date | string
    sellerId?: StringWithAggregatesFilter<"PostDeletion"> | string
    postId?: StringWithAggregatesFilter<"PostDeletion"> | string
  }

  export type SellerLimitWhereInput = {
    AND?: SellerLimitWhereInput | SellerLimitWhereInput[]
    OR?: SellerLimitWhereInput[]
    NOT?: SellerLimitWhereInput | SellerLimitWhereInput[]
    id?: StringFilter<"SellerLimit"> | string
    sellerId?: StringFilter<"SellerLimit"> | string
    dailyLimit?: IntFilter<"SellerLimit"> | number
    cooldownSecs?: IntFilter<"SellerLimit"> | number
    usageCount?: IntFilter<"SellerLimit"> | number
    lastRequestAt?: DateTimeNullableFilter<"SellerLimit"> | Date | string | null
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SellerLimitOrderByWithRelationInput = {
    id?: SortOrder
    sellerId?: SortOrder
    dailyLimit?: SortOrder
    cooldownSecs?: SortOrder
    usageCount?: SortOrder
    lastRequestAt?: SortOrderInput | SortOrder
    seller?: UserOrderByWithRelationInput
  }

  export type SellerLimitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sellerId?: string
    AND?: SellerLimitWhereInput | SellerLimitWhereInput[]
    OR?: SellerLimitWhereInput[]
    NOT?: SellerLimitWhereInput | SellerLimitWhereInput[]
    dailyLimit?: IntFilter<"SellerLimit"> | number
    cooldownSecs?: IntFilter<"SellerLimit"> | number
    usageCount?: IntFilter<"SellerLimit"> | number
    lastRequestAt?: DateTimeNullableFilter<"SellerLimit"> | Date | string | null
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sellerId">

  export type SellerLimitOrderByWithAggregationInput = {
    id?: SortOrder
    sellerId?: SortOrder
    dailyLimit?: SortOrder
    cooldownSecs?: SortOrder
    usageCount?: SortOrder
    lastRequestAt?: SortOrderInput | SortOrder
    _count?: SellerLimitCountOrderByAggregateInput
    _avg?: SellerLimitAvgOrderByAggregateInput
    _max?: SellerLimitMaxOrderByAggregateInput
    _min?: SellerLimitMinOrderByAggregateInput
    _sum?: SellerLimitSumOrderByAggregateInput
  }

  export type SellerLimitScalarWhereWithAggregatesInput = {
    AND?: SellerLimitScalarWhereWithAggregatesInput | SellerLimitScalarWhereWithAggregatesInput[]
    OR?: SellerLimitScalarWhereWithAggregatesInput[]
    NOT?: SellerLimitScalarWhereWithAggregatesInput | SellerLimitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SellerLimit"> | string
    sellerId?: StringWithAggregatesFilter<"SellerLimit"> | string
    dailyLimit?: IntWithAggregatesFilter<"SellerLimit"> | number
    cooldownSecs?: IntWithAggregatesFilter<"SellerLimit"> | number
    usageCount?: IntWithAggregatesFilter<"SellerLimit"> | number
    lastRequestAt?: DateTimeNullableWithAggregatesFilter<"SellerLimit"> | Date | string | null
  }

  export type SellerRequestLogWhereInput = {
    AND?: SellerRequestLogWhereInput | SellerRequestLogWhereInput[]
    OR?: SellerRequestLogWhereInput[]
    NOT?: SellerRequestLogWhereInput | SellerRequestLogWhereInput[]
    id?: StringFilter<"SellerRequestLog"> | string
    sellerId?: StringFilter<"SellerRequestLog"> | string
    createdAt?: DateTimeFilter<"SellerRequestLog"> | Date | string
    outcome?: EnumRequestStatusFilter<"SellerRequestLog"> | $Enums.RequestStatus
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SellerRequestLogOrderByWithRelationInput = {
    id?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    outcome?: SortOrder
    seller?: UserOrderByWithRelationInput
  }

  export type SellerRequestLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SellerRequestLogWhereInput | SellerRequestLogWhereInput[]
    OR?: SellerRequestLogWhereInput[]
    NOT?: SellerRequestLogWhereInput | SellerRequestLogWhereInput[]
    sellerId?: StringFilter<"SellerRequestLog"> | string
    createdAt?: DateTimeFilter<"SellerRequestLog"> | Date | string
    outcome?: EnumRequestStatusFilter<"SellerRequestLog"> | $Enums.RequestStatus
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SellerRequestLogOrderByWithAggregationInput = {
    id?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    outcome?: SortOrder
    _count?: SellerRequestLogCountOrderByAggregateInput
    _max?: SellerRequestLogMaxOrderByAggregateInput
    _min?: SellerRequestLogMinOrderByAggregateInput
  }

  export type SellerRequestLogScalarWhereWithAggregatesInput = {
    AND?: SellerRequestLogScalarWhereWithAggregatesInput | SellerRequestLogScalarWhereWithAggregatesInput[]
    OR?: SellerRequestLogScalarWhereWithAggregatesInput[]
    NOT?: SellerRequestLogScalarWhereWithAggregatesInput | SellerRequestLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SellerRequestLog"> | string
    sellerId?: StringWithAggregatesFilter<"SellerRequestLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SellerRequestLog"> | Date | string
    outcome?: EnumRequestStatusWithAggregatesFilter<"SellerRequestLog"> | $Enums.RequestStatus
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    metadata?: JsonNullableFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    read?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    metadata?: JsonNullableFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    read?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    message?: StringWithAggregatesFilter<"Notification"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Notification">
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
  }

  export type SellerQueueCreateInput = {
    id?: string
    createdAt?: Date | string
    seller: UserCreateNestedOneWithoutSellerQueuesInput
  }

  export type SellerQueueUncheckedCreateInput = {
    id?: string
    sellerId: string
    createdAt?: Date | string
  }

  export type SellerQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutSellerQueuesNestedInput
  }

  export type SellerQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerQueueCreateManyInput = {
    id?: string
    sellerId: string
    createdAt?: Date | string
  }

  export type SellerQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutPosterInput
    claims?: ClaimCreateNestedManyWithoutSellerInput
    limitProfile?: SellerLimitCreateNestedOneWithoutSellerInput
    requestLogs?: SellerRequestLogCreateNestedManyWithoutSellerInput
    sellerQueues?: SellerQueueCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionCreateNestedManyWithoutSellerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutPosterInput
    claims?: ClaimUncheckedCreateNestedManyWithoutSellerInput
    limitProfile?: SellerLimitUncheckedCreateNestedOneWithoutSellerInput
    requestLogs?: SellerRequestLogUncheckedCreateNestedManyWithoutSellerInput
    sellerQueues?: SellerQueueUncheckedCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionUncheckedCreateNestedManyWithoutSellerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutPosterNestedInput
    claims?: ClaimUpdateManyWithoutSellerNestedInput
    limitProfile?: SellerLimitUpdateOneWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUpdateManyWithoutSellerNestedInput
    sellerQueues?: SellerQueueUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutPosterNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutSellerNestedInput
    limitProfile?: SellerLimitUncheckedUpdateOneWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUncheckedUpdateManyWithoutSellerNestedInput
    sellerQueues?: SellerQueueUncheckedUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUncheckedUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    phone: string
    message: string
    clientName: string
    agentName: string
    location: string
    rent: string
    screenshot: string
    createdAt?: Date | string
    claimed?: boolean
    new?: boolean
    deleted?: boolean
    poster: UserCreateNestedOneWithoutPostsInput
    claim?: ClaimCreateNestedOneWithoutPostInput
    deletions?: PostDeletionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    phone: string
    message: string
    clientName: string
    agentName: string
    location: string
    rent: string
    screenshot: string
    createdAt?: Date | string
    posterId: string
    claimed?: boolean
    new?: boolean
    deleted?: boolean
    claim?: ClaimUncheckedCreateNestedOneWithoutPostInput
    deletions?: PostDeletionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rent?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimed?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    poster?: UserUpdateOneRequiredWithoutPostsNestedInput
    claim?: ClaimUpdateOneWithoutPostNestedInput
    deletions?: PostDeletionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rent?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posterId?: StringFieldUpdateOperationsInput | string
    claimed?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUncheckedUpdateOneWithoutPostNestedInput
    deletions?: PostDeletionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    phone: string
    message: string
    clientName: string
    agentName: string
    location: string
    rent: string
    screenshot: string
    createdAt?: Date | string
    posterId: string
    claimed?: boolean
    new?: boolean
    deleted?: boolean
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rent?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimed?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rent?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posterId?: StringFieldUpdateOperationsInput | string
    claimed?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClaimCreateInput = {
    id?: string
    claimedAt?: Date | string
    post: PostCreateNestedOneWithoutClaimInput
    seller: UserCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateInput = {
    id?: string
    postId: string
    sellerId: string
    claimedAt?: Date | string
  }

  export type ClaimUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutClaimNestedInput
    seller?: UserUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateManyInput = {
    id?: string
    postId: string
    sellerId: string
    claimedAt?: Date | string
  }

  export type ClaimUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDeletionCreateInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    seller: UserCreateNestedOneWithoutPostDeletionsInput
    post: PostCreateNestedOneWithoutDeletionsInput
  }

  export type PostDeletionUncheckedCreateInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    sellerId: string
    postId: string
  }

  export type PostDeletionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutPostDeletionsNestedInput
    post?: PostUpdateOneRequiredWithoutDeletionsNestedInput
  }

  export type PostDeletionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostDeletionCreateManyInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    sellerId: string
    postId: string
  }

  export type PostDeletionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDeletionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type SellerLimitCreateInput = {
    id?: string
    dailyLimit?: number
    cooldownSecs?: number
    usageCount?: number
    lastRequestAt?: Date | string | null
    seller: UserCreateNestedOneWithoutLimitProfileInput
  }

  export type SellerLimitUncheckedCreateInput = {
    id?: string
    sellerId: string
    dailyLimit?: number
    cooldownSecs?: number
    usageCount?: number
    lastRequestAt?: Date | string | null
  }

  export type SellerLimitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLimit?: IntFieldUpdateOperationsInput | number
    cooldownSecs?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastRequestAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seller?: UserUpdateOneRequiredWithoutLimitProfileNestedInput
  }

  export type SellerLimitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    dailyLimit?: IntFieldUpdateOperationsInput | number
    cooldownSecs?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastRequestAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SellerLimitCreateManyInput = {
    id?: string
    sellerId: string
    dailyLimit?: number
    cooldownSecs?: number
    usageCount?: number
    lastRequestAt?: Date | string | null
  }

  export type SellerLimitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLimit?: IntFieldUpdateOperationsInput | number
    cooldownSecs?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastRequestAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SellerLimitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    dailyLimit?: IntFieldUpdateOperationsInput | number
    cooldownSecs?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastRequestAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SellerRequestLogCreateInput = {
    id?: string
    createdAt?: Date | string
    outcome: $Enums.RequestStatus
    seller: UserCreateNestedOneWithoutRequestLogsInput
  }

  export type SellerRequestLogUncheckedCreateInput = {
    id?: string
    sellerId: string
    createdAt?: Date | string
    outcome: $Enums.RequestStatus
  }

  export type SellerRequestLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    seller?: UserUpdateOneRequiredWithoutRequestLogsNestedInput
  }

  export type SellerRequestLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type SellerRequestLogCreateManyInput = {
    id?: string
    sellerId: string
    createdAt?: Date | string
    outcome: $Enums.RequestStatus
  }

  export type SellerRequestLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type SellerRequestLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type NotificationCreateInput = {
    id?: string
    type?: $Enums.NotificationType
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    read?: boolean
    user?: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId?: string | null
    type?: $Enums.NotificationType
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    read?: boolean
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId?: string | null
    type?: $Enums.NotificationType
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    read?: boolean
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SellerQueueCountOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
  }

  export type SellerQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
  }

  export type SellerQueueMinOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ClaimListRelationFilter = {
    every?: ClaimWhereInput
    some?: ClaimWhereInput
    none?: ClaimWhereInput
  }

  export type SellerLimitNullableScalarRelationFilter = {
    is?: SellerLimitWhereInput | null
    isNot?: SellerLimitWhereInput | null
  }

  export type SellerRequestLogListRelationFilter = {
    every?: SellerRequestLogWhereInput
    some?: SellerRequestLogWhereInput
    none?: SellerRequestLogWhereInput
  }

  export type SellerQueueListRelationFilter = {
    every?: SellerQueueWhereInput
    some?: SellerQueueWhereInput
    none?: SellerQueueWhereInput
  }

  export type PostDeletionListRelationFilter = {
    every?: PostDeletionWhereInput
    some?: PostDeletionWhereInput
    none?: PostDeletionWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClaimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SellerRequestLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SellerQueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostDeletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    sessionVersion?: SortOrder
    isActive?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    sessionVersion?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    sessionVersion?: SortOrder
    isActive?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    sessionVersion?: SortOrder
    isActive?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    sessionVersion?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type ClaimNullableScalarRelationFilter = {
    is?: ClaimWhereInput | null
    isNot?: ClaimWhereInput | null
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    clientName?: SortOrder
    agentName?: SortOrder
    location?: SortOrder
    rent?: SortOrder
    screenshot?: SortOrder
    createdAt?: SortOrder
    posterId?: SortOrder
    claimed?: SortOrder
    new?: SortOrder
    deleted?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    clientName?: SortOrder
    agentName?: SortOrder
    location?: SortOrder
    rent?: SortOrder
    screenshot?: SortOrder
    createdAt?: SortOrder
    posterId?: SortOrder
    claimed?: SortOrder
    new?: SortOrder
    deleted?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    clientName?: SortOrder
    agentName?: SortOrder
    location?: SortOrder
    rent?: SortOrder
    screenshot?: SortOrder
    createdAt?: SortOrder
    posterId?: SortOrder
    claimed?: SortOrder
    new?: SortOrder
    deleted?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type ClaimCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    sellerId?: SortOrder
    claimedAt?: SortOrder
  }

  export type ClaimMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    sellerId?: SortOrder
    claimedAt?: SortOrder
  }

  export type ClaimMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    sellerId?: SortOrder
    claimedAt?: SortOrder
  }

  export type PostDeletionCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    sellerId?: SortOrder
    postId?: SortOrder
  }

  export type PostDeletionMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    sellerId?: SortOrder
    postId?: SortOrder
  }

  export type PostDeletionMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    sellerId?: SortOrder
    postId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SellerLimitCountOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    dailyLimit?: SortOrder
    cooldownSecs?: SortOrder
    usageCount?: SortOrder
    lastRequestAt?: SortOrder
  }

  export type SellerLimitAvgOrderByAggregateInput = {
    dailyLimit?: SortOrder
    cooldownSecs?: SortOrder
    usageCount?: SortOrder
  }

  export type SellerLimitMaxOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    dailyLimit?: SortOrder
    cooldownSecs?: SortOrder
    usageCount?: SortOrder
    lastRequestAt?: SortOrder
  }

  export type SellerLimitMinOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    dailyLimit?: SortOrder
    cooldownSecs?: SortOrder
    usageCount?: SortOrder
    lastRequestAt?: SortOrder
  }

  export type SellerLimitSumOrderByAggregateInput = {
    dailyLimit?: SortOrder
    cooldownSecs?: SortOrder
    usageCount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type SellerRequestLogCountOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    outcome?: SortOrder
  }

  export type SellerRequestLogMaxOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    outcome?: SortOrder
  }

  export type SellerRequestLogMinOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    outcome?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutSellerQueuesInput = {
    create?: XOR<UserCreateWithoutSellerQueuesInput, UserUncheckedCreateWithoutSellerQueuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSellerQueuesInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSellerQueuesNestedInput = {
    create?: XOR<UserCreateWithoutSellerQueuesInput, UserUncheckedCreateWithoutSellerQueuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSellerQueuesInput
    upsert?: UserUpsertWithoutSellerQueuesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSellerQueuesInput, UserUpdateWithoutSellerQueuesInput>, UserUncheckedUpdateWithoutSellerQueuesInput>
  }

  export type PostCreateNestedManyWithoutPosterInput = {
    create?: XOR<PostCreateWithoutPosterInput, PostUncheckedCreateWithoutPosterInput> | PostCreateWithoutPosterInput[] | PostUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPosterInput | PostCreateOrConnectWithoutPosterInput[]
    createMany?: PostCreateManyPosterInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ClaimCreateNestedManyWithoutSellerInput = {
    create?: XOR<ClaimCreateWithoutSellerInput, ClaimUncheckedCreateWithoutSellerInput> | ClaimCreateWithoutSellerInput[] | ClaimUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutSellerInput | ClaimCreateOrConnectWithoutSellerInput[]
    createMany?: ClaimCreateManySellerInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type SellerLimitCreateNestedOneWithoutSellerInput = {
    create?: XOR<SellerLimitCreateWithoutSellerInput, SellerLimitUncheckedCreateWithoutSellerInput>
    connectOrCreate?: SellerLimitCreateOrConnectWithoutSellerInput
    connect?: SellerLimitWhereUniqueInput
  }

  export type SellerRequestLogCreateNestedManyWithoutSellerInput = {
    create?: XOR<SellerRequestLogCreateWithoutSellerInput, SellerRequestLogUncheckedCreateWithoutSellerInput> | SellerRequestLogCreateWithoutSellerInput[] | SellerRequestLogUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellerRequestLogCreateOrConnectWithoutSellerInput | SellerRequestLogCreateOrConnectWithoutSellerInput[]
    createMany?: SellerRequestLogCreateManySellerInputEnvelope
    connect?: SellerRequestLogWhereUniqueInput | SellerRequestLogWhereUniqueInput[]
  }

  export type SellerQueueCreateNestedManyWithoutSellerInput = {
    create?: XOR<SellerQueueCreateWithoutSellerInput, SellerQueueUncheckedCreateWithoutSellerInput> | SellerQueueCreateWithoutSellerInput[] | SellerQueueUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellerQueueCreateOrConnectWithoutSellerInput | SellerQueueCreateOrConnectWithoutSellerInput[]
    createMany?: SellerQueueCreateManySellerInputEnvelope
    connect?: SellerQueueWhereUniqueInput | SellerQueueWhereUniqueInput[]
  }

  export type PostDeletionCreateNestedManyWithoutSellerInput = {
    create?: XOR<PostDeletionCreateWithoutSellerInput, PostDeletionUncheckedCreateWithoutSellerInput> | PostDeletionCreateWithoutSellerInput[] | PostDeletionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: PostDeletionCreateOrConnectWithoutSellerInput | PostDeletionCreateOrConnectWithoutSellerInput[]
    createMany?: PostDeletionCreateManySellerInputEnvelope
    connect?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutPosterInput = {
    create?: XOR<PostCreateWithoutPosterInput, PostUncheckedCreateWithoutPosterInput> | PostCreateWithoutPosterInput[] | PostUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPosterInput | PostCreateOrConnectWithoutPosterInput[]
    createMany?: PostCreateManyPosterInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<ClaimCreateWithoutSellerInput, ClaimUncheckedCreateWithoutSellerInput> | ClaimCreateWithoutSellerInput[] | ClaimUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutSellerInput | ClaimCreateOrConnectWithoutSellerInput[]
    createMany?: ClaimCreateManySellerInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type SellerLimitUncheckedCreateNestedOneWithoutSellerInput = {
    create?: XOR<SellerLimitCreateWithoutSellerInput, SellerLimitUncheckedCreateWithoutSellerInput>
    connectOrCreate?: SellerLimitCreateOrConnectWithoutSellerInput
    connect?: SellerLimitWhereUniqueInput
  }

  export type SellerRequestLogUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<SellerRequestLogCreateWithoutSellerInput, SellerRequestLogUncheckedCreateWithoutSellerInput> | SellerRequestLogCreateWithoutSellerInput[] | SellerRequestLogUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellerRequestLogCreateOrConnectWithoutSellerInput | SellerRequestLogCreateOrConnectWithoutSellerInput[]
    createMany?: SellerRequestLogCreateManySellerInputEnvelope
    connect?: SellerRequestLogWhereUniqueInput | SellerRequestLogWhereUniqueInput[]
  }

  export type SellerQueueUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<SellerQueueCreateWithoutSellerInput, SellerQueueUncheckedCreateWithoutSellerInput> | SellerQueueCreateWithoutSellerInput[] | SellerQueueUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellerQueueCreateOrConnectWithoutSellerInput | SellerQueueCreateOrConnectWithoutSellerInput[]
    createMany?: SellerQueueCreateManySellerInputEnvelope
    connect?: SellerQueueWhereUniqueInput | SellerQueueWhereUniqueInput[]
  }

  export type PostDeletionUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<PostDeletionCreateWithoutSellerInput, PostDeletionUncheckedCreateWithoutSellerInput> | PostDeletionCreateWithoutSellerInput[] | PostDeletionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: PostDeletionCreateOrConnectWithoutSellerInput | PostDeletionCreateOrConnectWithoutSellerInput[]
    createMany?: PostDeletionCreateManySellerInputEnvelope
    connect?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type PostUpdateManyWithoutPosterNestedInput = {
    create?: XOR<PostCreateWithoutPosterInput, PostUncheckedCreateWithoutPosterInput> | PostCreateWithoutPosterInput[] | PostUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPosterInput | PostCreateOrConnectWithoutPosterInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPosterInput | PostUpsertWithWhereUniqueWithoutPosterInput[]
    createMany?: PostCreateManyPosterInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPosterInput | PostUpdateWithWhereUniqueWithoutPosterInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPosterInput | PostUpdateManyWithWhereWithoutPosterInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ClaimUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ClaimCreateWithoutSellerInput, ClaimUncheckedCreateWithoutSellerInput> | ClaimCreateWithoutSellerInput[] | ClaimUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutSellerInput | ClaimCreateOrConnectWithoutSellerInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutSellerInput | ClaimUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ClaimCreateManySellerInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutSellerInput | ClaimUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutSellerInput | ClaimUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type SellerLimitUpdateOneWithoutSellerNestedInput = {
    create?: XOR<SellerLimitCreateWithoutSellerInput, SellerLimitUncheckedCreateWithoutSellerInput>
    connectOrCreate?: SellerLimitCreateOrConnectWithoutSellerInput
    upsert?: SellerLimitUpsertWithoutSellerInput
    disconnect?: SellerLimitWhereInput | boolean
    delete?: SellerLimitWhereInput | boolean
    connect?: SellerLimitWhereUniqueInput
    update?: XOR<XOR<SellerLimitUpdateToOneWithWhereWithoutSellerInput, SellerLimitUpdateWithoutSellerInput>, SellerLimitUncheckedUpdateWithoutSellerInput>
  }

  export type SellerRequestLogUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SellerRequestLogCreateWithoutSellerInput, SellerRequestLogUncheckedCreateWithoutSellerInput> | SellerRequestLogCreateWithoutSellerInput[] | SellerRequestLogUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellerRequestLogCreateOrConnectWithoutSellerInput | SellerRequestLogCreateOrConnectWithoutSellerInput[]
    upsert?: SellerRequestLogUpsertWithWhereUniqueWithoutSellerInput | SellerRequestLogUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SellerRequestLogCreateManySellerInputEnvelope
    set?: SellerRequestLogWhereUniqueInput | SellerRequestLogWhereUniqueInput[]
    disconnect?: SellerRequestLogWhereUniqueInput | SellerRequestLogWhereUniqueInput[]
    delete?: SellerRequestLogWhereUniqueInput | SellerRequestLogWhereUniqueInput[]
    connect?: SellerRequestLogWhereUniqueInput | SellerRequestLogWhereUniqueInput[]
    update?: SellerRequestLogUpdateWithWhereUniqueWithoutSellerInput | SellerRequestLogUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SellerRequestLogUpdateManyWithWhereWithoutSellerInput | SellerRequestLogUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SellerRequestLogScalarWhereInput | SellerRequestLogScalarWhereInput[]
  }

  export type SellerQueueUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SellerQueueCreateWithoutSellerInput, SellerQueueUncheckedCreateWithoutSellerInput> | SellerQueueCreateWithoutSellerInput[] | SellerQueueUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellerQueueCreateOrConnectWithoutSellerInput | SellerQueueCreateOrConnectWithoutSellerInput[]
    upsert?: SellerQueueUpsertWithWhereUniqueWithoutSellerInput | SellerQueueUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SellerQueueCreateManySellerInputEnvelope
    set?: SellerQueueWhereUniqueInput | SellerQueueWhereUniqueInput[]
    disconnect?: SellerQueueWhereUniqueInput | SellerQueueWhereUniqueInput[]
    delete?: SellerQueueWhereUniqueInput | SellerQueueWhereUniqueInput[]
    connect?: SellerQueueWhereUniqueInput | SellerQueueWhereUniqueInput[]
    update?: SellerQueueUpdateWithWhereUniqueWithoutSellerInput | SellerQueueUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SellerQueueUpdateManyWithWhereWithoutSellerInput | SellerQueueUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SellerQueueScalarWhereInput | SellerQueueScalarWhereInput[]
  }

  export type PostDeletionUpdateManyWithoutSellerNestedInput = {
    create?: XOR<PostDeletionCreateWithoutSellerInput, PostDeletionUncheckedCreateWithoutSellerInput> | PostDeletionCreateWithoutSellerInput[] | PostDeletionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: PostDeletionCreateOrConnectWithoutSellerInput | PostDeletionCreateOrConnectWithoutSellerInput[]
    upsert?: PostDeletionUpsertWithWhereUniqueWithoutSellerInput | PostDeletionUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: PostDeletionCreateManySellerInputEnvelope
    set?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    disconnect?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    delete?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    connect?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    update?: PostDeletionUpdateWithWhereUniqueWithoutSellerInput | PostDeletionUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: PostDeletionUpdateManyWithWhereWithoutSellerInput | PostDeletionUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: PostDeletionScalarWhereInput | PostDeletionScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutPosterNestedInput = {
    create?: XOR<PostCreateWithoutPosterInput, PostUncheckedCreateWithoutPosterInput> | PostCreateWithoutPosterInput[] | PostUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPosterInput | PostCreateOrConnectWithoutPosterInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPosterInput | PostUpsertWithWhereUniqueWithoutPosterInput[]
    createMany?: PostCreateManyPosterInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPosterInput | PostUpdateWithWhereUniqueWithoutPosterInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPosterInput | PostUpdateManyWithWhereWithoutPosterInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ClaimCreateWithoutSellerInput, ClaimUncheckedCreateWithoutSellerInput> | ClaimCreateWithoutSellerInput[] | ClaimUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutSellerInput | ClaimCreateOrConnectWithoutSellerInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutSellerInput | ClaimUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ClaimCreateManySellerInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutSellerInput | ClaimUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutSellerInput | ClaimUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type SellerLimitUncheckedUpdateOneWithoutSellerNestedInput = {
    create?: XOR<SellerLimitCreateWithoutSellerInput, SellerLimitUncheckedCreateWithoutSellerInput>
    connectOrCreate?: SellerLimitCreateOrConnectWithoutSellerInput
    upsert?: SellerLimitUpsertWithoutSellerInput
    disconnect?: SellerLimitWhereInput | boolean
    delete?: SellerLimitWhereInput | boolean
    connect?: SellerLimitWhereUniqueInput
    update?: XOR<XOR<SellerLimitUpdateToOneWithWhereWithoutSellerInput, SellerLimitUpdateWithoutSellerInput>, SellerLimitUncheckedUpdateWithoutSellerInput>
  }

  export type SellerRequestLogUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SellerRequestLogCreateWithoutSellerInput, SellerRequestLogUncheckedCreateWithoutSellerInput> | SellerRequestLogCreateWithoutSellerInput[] | SellerRequestLogUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellerRequestLogCreateOrConnectWithoutSellerInput | SellerRequestLogCreateOrConnectWithoutSellerInput[]
    upsert?: SellerRequestLogUpsertWithWhereUniqueWithoutSellerInput | SellerRequestLogUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SellerRequestLogCreateManySellerInputEnvelope
    set?: SellerRequestLogWhereUniqueInput | SellerRequestLogWhereUniqueInput[]
    disconnect?: SellerRequestLogWhereUniqueInput | SellerRequestLogWhereUniqueInput[]
    delete?: SellerRequestLogWhereUniqueInput | SellerRequestLogWhereUniqueInput[]
    connect?: SellerRequestLogWhereUniqueInput | SellerRequestLogWhereUniqueInput[]
    update?: SellerRequestLogUpdateWithWhereUniqueWithoutSellerInput | SellerRequestLogUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SellerRequestLogUpdateManyWithWhereWithoutSellerInput | SellerRequestLogUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SellerRequestLogScalarWhereInput | SellerRequestLogScalarWhereInput[]
  }

  export type SellerQueueUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SellerQueueCreateWithoutSellerInput, SellerQueueUncheckedCreateWithoutSellerInput> | SellerQueueCreateWithoutSellerInput[] | SellerQueueUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellerQueueCreateOrConnectWithoutSellerInput | SellerQueueCreateOrConnectWithoutSellerInput[]
    upsert?: SellerQueueUpsertWithWhereUniqueWithoutSellerInput | SellerQueueUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SellerQueueCreateManySellerInputEnvelope
    set?: SellerQueueWhereUniqueInput | SellerQueueWhereUniqueInput[]
    disconnect?: SellerQueueWhereUniqueInput | SellerQueueWhereUniqueInput[]
    delete?: SellerQueueWhereUniqueInput | SellerQueueWhereUniqueInput[]
    connect?: SellerQueueWhereUniqueInput | SellerQueueWhereUniqueInput[]
    update?: SellerQueueUpdateWithWhereUniqueWithoutSellerInput | SellerQueueUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SellerQueueUpdateManyWithWhereWithoutSellerInput | SellerQueueUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SellerQueueScalarWhereInput | SellerQueueScalarWhereInput[]
  }

  export type PostDeletionUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<PostDeletionCreateWithoutSellerInput, PostDeletionUncheckedCreateWithoutSellerInput> | PostDeletionCreateWithoutSellerInput[] | PostDeletionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: PostDeletionCreateOrConnectWithoutSellerInput | PostDeletionCreateOrConnectWithoutSellerInput[]
    upsert?: PostDeletionUpsertWithWhereUniqueWithoutSellerInput | PostDeletionUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: PostDeletionCreateManySellerInputEnvelope
    set?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    disconnect?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    delete?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    connect?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    update?: PostDeletionUpdateWithWhereUniqueWithoutSellerInput | PostDeletionUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: PostDeletionUpdateManyWithWhereWithoutSellerInput | PostDeletionUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: PostDeletionScalarWhereInput | PostDeletionScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ClaimCreateNestedOneWithoutPostInput = {
    create?: XOR<ClaimCreateWithoutPostInput, ClaimUncheckedCreateWithoutPostInput>
    connectOrCreate?: ClaimCreateOrConnectWithoutPostInput
    connect?: ClaimWhereUniqueInput
  }

  export type PostDeletionCreateNestedManyWithoutPostInput = {
    create?: XOR<PostDeletionCreateWithoutPostInput, PostDeletionUncheckedCreateWithoutPostInput> | PostDeletionCreateWithoutPostInput[] | PostDeletionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostDeletionCreateOrConnectWithoutPostInput | PostDeletionCreateOrConnectWithoutPostInput[]
    createMany?: PostDeletionCreateManyPostInputEnvelope
    connect?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedOneWithoutPostInput = {
    create?: XOR<ClaimCreateWithoutPostInput, ClaimUncheckedCreateWithoutPostInput>
    connectOrCreate?: ClaimCreateOrConnectWithoutPostInput
    connect?: ClaimWhereUniqueInput
  }

  export type PostDeletionUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostDeletionCreateWithoutPostInput, PostDeletionUncheckedCreateWithoutPostInput> | PostDeletionCreateWithoutPostInput[] | PostDeletionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostDeletionCreateOrConnectWithoutPostInput | PostDeletionCreateOrConnectWithoutPostInput[]
    createMany?: PostDeletionCreateManyPostInputEnvelope
    connect?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ClaimUpdateOneWithoutPostNestedInput = {
    create?: XOR<ClaimCreateWithoutPostInput, ClaimUncheckedCreateWithoutPostInput>
    connectOrCreate?: ClaimCreateOrConnectWithoutPostInput
    upsert?: ClaimUpsertWithoutPostInput
    disconnect?: ClaimWhereInput | boolean
    delete?: ClaimWhereInput | boolean
    connect?: ClaimWhereUniqueInput
    update?: XOR<XOR<ClaimUpdateToOneWithWhereWithoutPostInput, ClaimUpdateWithoutPostInput>, ClaimUncheckedUpdateWithoutPostInput>
  }

  export type PostDeletionUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostDeletionCreateWithoutPostInput, PostDeletionUncheckedCreateWithoutPostInput> | PostDeletionCreateWithoutPostInput[] | PostDeletionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostDeletionCreateOrConnectWithoutPostInput | PostDeletionCreateOrConnectWithoutPostInput[]
    upsert?: PostDeletionUpsertWithWhereUniqueWithoutPostInput | PostDeletionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostDeletionCreateManyPostInputEnvelope
    set?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    disconnect?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    delete?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    connect?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    update?: PostDeletionUpdateWithWhereUniqueWithoutPostInput | PostDeletionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostDeletionUpdateManyWithWhereWithoutPostInput | PostDeletionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostDeletionScalarWhereInput | PostDeletionScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateOneWithoutPostNestedInput = {
    create?: XOR<ClaimCreateWithoutPostInput, ClaimUncheckedCreateWithoutPostInput>
    connectOrCreate?: ClaimCreateOrConnectWithoutPostInput
    upsert?: ClaimUpsertWithoutPostInput
    disconnect?: ClaimWhereInput | boolean
    delete?: ClaimWhereInput | boolean
    connect?: ClaimWhereUniqueInput
    update?: XOR<XOR<ClaimUpdateToOneWithWhereWithoutPostInput, ClaimUpdateWithoutPostInput>, ClaimUncheckedUpdateWithoutPostInput>
  }

  export type PostDeletionUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostDeletionCreateWithoutPostInput, PostDeletionUncheckedCreateWithoutPostInput> | PostDeletionCreateWithoutPostInput[] | PostDeletionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostDeletionCreateOrConnectWithoutPostInput | PostDeletionCreateOrConnectWithoutPostInput[]
    upsert?: PostDeletionUpsertWithWhereUniqueWithoutPostInput | PostDeletionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostDeletionCreateManyPostInputEnvelope
    set?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    disconnect?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    delete?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    connect?: PostDeletionWhereUniqueInput | PostDeletionWhereUniqueInput[]
    update?: PostDeletionUpdateWithWhereUniqueWithoutPostInput | PostDeletionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostDeletionUpdateManyWithWhereWithoutPostInput | PostDeletionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostDeletionScalarWhereInput | PostDeletionScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutClaimInput = {
    create?: XOR<PostCreateWithoutClaimInput, PostUncheckedCreateWithoutClaimInput>
    connectOrCreate?: PostCreateOrConnectWithoutClaimInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutClaimsInput = {
    create?: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimsInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutClaimNestedInput = {
    create?: XOR<PostCreateWithoutClaimInput, PostUncheckedCreateWithoutClaimInput>
    connectOrCreate?: PostCreateOrConnectWithoutClaimInput
    upsert?: PostUpsertWithoutClaimInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutClaimInput, PostUpdateWithoutClaimInput>, PostUncheckedUpdateWithoutClaimInput>
  }

  export type UserUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimsInput
    upsert?: UserUpsertWithoutClaimsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClaimsInput, UserUpdateWithoutClaimsInput>, UserUncheckedUpdateWithoutClaimsInput>
  }

  export type UserCreateNestedOneWithoutPostDeletionsInput = {
    create?: XOR<UserCreateWithoutPostDeletionsInput, UserUncheckedCreateWithoutPostDeletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostDeletionsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutDeletionsInput = {
    create?: XOR<PostCreateWithoutDeletionsInput, PostUncheckedCreateWithoutDeletionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutDeletionsInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostDeletionsNestedInput = {
    create?: XOR<UserCreateWithoutPostDeletionsInput, UserUncheckedCreateWithoutPostDeletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostDeletionsInput
    upsert?: UserUpsertWithoutPostDeletionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostDeletionsInput, UserUpdateWithoutPostDeletionsInput>, UserUncheckedUpdateWithoutPostDeletionsInput>
  }

  export type PostUpdateOneRequiredWithoutDeletionsNestedInput = {
    create?: XOR<PostCreateWithoutDeletionsInput, PostUncheckedCreateWithoutDeletionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutDeletionsInput
    upsert?: PostUpsertWithoutDeletionsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutDeletionsInput, PostUpdateWithoutDeletionsInput>, PostUncheckedUpdateWithoutDeletionsInput>
  }

  export type UserCreateNestedOneWithoutLimitProfileInput = {
    create?: XOR<UserCreateWithoutLimitProfileInput, UserUncheckedCreateWithoutLimitProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutLimitProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutLimitProfileNestedInput = {
    create?: XOR<UserCreateWithoutLimitProfileInput, UserUncheckedCreateWithoutLimitProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutLimitProfileInput
    upsert?: UserUpsertWithoutLimitProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLimitProfileInput, UserUpdateWithoutLimitProfileInput>, UserUncheckedUpdateWithoutLimitProfileInput>
  }

  export type UserCreateNestedOneWithoutRequestLogsInput = {
    create?: XOR<UserCreateWithoutRequestLogsInput, UserUncheckedCreateWithoutRequestLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type UserUpdateOneRequiredWithoutRequestLogsNestedInput = {
    create?: XOR<UserCreateWithoutRequestLogsInput, UserUncheckedCreateWithoutRequestLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestLogsInput
    upsert?: UserUpsertWithoutRequestLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestLogsInput, UserUpdateWithoutRequestLogsInput>, UserUncheckedUpdateWithoutRequestLogsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutSellerQueuesInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutPosterInput
    claims?: ClaimCreateNestedManyWithoutSellerInput
    limitProfile?: SellerLimitCreateNestedOneWithoutSellerInput
    requestLogs?: SellerRequestLogCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionCreateNestedManyWithoutSellerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSellerQueuesInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutPosterInput
    claims?: ClaimUncheckedCreateNestedManyWithoutSellerInput
    limitProfile?: SellerLimitUncheckedCreateNestedOneWithoutSellerInput
    requestLogs?: SellerRequestLogUncheckedCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionUncheckedCreateNestedManyWithoutSellerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSellerQueuesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSellerQueuesInput, UserUncheckedCreateWithoutSellerQueuesInput>
  }

  export type UserUpsertWithoutSellerQueuesInput = {
    update: XOR<UserUpdateWithoutSellerQueuesInput, UserUncheckedUpdateWithoutSellerQueuesInput>
    create: XOR<UserCreateWithoutSellerQueuesInput, UserUncheckedCreateWithoutSellerQueuesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSellerQueuesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSellerQueuesInput, UserUncheckedUpdateWithoutSellerQueuesInput>
  }

  export type UserUpdateWithoutSellerQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutPosterNestedInput
    claims?: ClaimUpdateManyWithoutSellerNestedInput
    limitProfile?: SellerLimitUpdateOneWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSellerQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutPosterNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutSellerNestedInput
    limitProfile?: SellerLimitUncheckedUpdateOneWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUncheckedUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUncheckedUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateWithoutPosterInput = {
    id?: string
    phone: string
    message: string
    clientName: string
    agentName: string
    location: string
    rent: string
    screenshot: string
    createdAt?: Date | string
    claimed?: boolean
    new?: boolean
    deleted?: boolean
    claim?: ClaimCreateNestedOneWithoutPostInput
    deletions?: PostDeletionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPosterInput = {
    id?: string
    phone: string
    message: string
    clientName: string
    agentName: string
    location: string
    rent: string
    screenshot: string
    createdAt?: Date | string
    claimed?: boolean
    new?: boolean
    deleted?: boolean
    claim?: ClaimUncheckedCreateNestedOneWithoutPostInput
    deletions?: PostDeletionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPosterInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPosterInput, PostUncheckedCreateWithoutPosterInput>
  }

  export type PostCreateManyPosterInputEnvelope = {
    data: PostCreateManyPosterInput | PostCreateManyPosterInput[]
    skipDuplicates?: boolean
  }

  export type ClaimCreateWithoutSellerInput = {
    id?: string
    claimedAt?: Date | string
    post: PostCreateNestedOneWithoutClaimInput
  }

  export type ClaimUncheckedCreateWithoutSellerInput = {
    id?: string
    postId: string
    claimedAt?: Date | string
  }

  export type ClaimCreateOrConnectWithoutSellerInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutSellerInput, ClaimUncheckedCreateWithoutSellerInput>
  }

  export type ClaimCreateManySellerInputEnvelope = {
    data: ClaimCreateManySellerInput | ClaimCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type SellerLimitCreateWithoutSellerInput = {
    id?: string
    dailyLimit?: number
    cooldownSecs?: number
    usageCount?: number
    lastRequestAt?: Date | string | null
  }

  export type SellerLimitUncheckedCreateWithoutSellerInput = {
    id?: string
    dailyLimit?: number
    cooldownSecs?: number
    usageCount?: number
    lastRequestAt?: Date | string | null
  }

  export type SellerLimitCreateOrConnectWithoutSellerInput = {
    where: SellerLimitWhereUniqueInput
    create: XOR<SellerLimitCreateWithoutSellerInput, SellerLimitUncheckedCreateWithoutSellerInput>
  }

  export type SellerRequestLogCreateWithoutSellerInput = {
    id?: string
    createdAt?: Date | string
    outcome: $Enums.RequestStatus
  }

  export type SellerRequestLogUncheckedCreateWithoutSellerInput = {
    id?: string
    createdAt?: Date | string
    outcome: $Enums.RequestStatus
  }

  export type SellerRequestLogCreateOrConnectWithoutSellerInput = {
    where: SellerRequestLogWhereUniqueInput
    create: XOR<SellerRequestLogCreateWithoutSellerInput, SellerRequestLogUncheckedCreateWithoutSellerInput>
  }

  export type SellerRequestLogCreateManySellerInputEnvelope = {
    data: SellerRequestLogCreateManySellerInput | SellerRequestLogCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type SellerQueueCreateWithoutSellerInput = {
    id?: string
    createdAt?: Date | string
  }

  export type SellerQueueUncheckedCreateWithoutSellerInput = {
    id?: string
    createdAt?: Date | string
  }

  export type SellerQueueCreateOrConnectWithoutSellerInput = {
    where: SellerQueueWhereUniqueInput
    create: XOR<SellerQueueCreateWithoutSellerInput, SellerQueueUncheckedCreateWithoutSellerInput>
  }

  export type SellerQueueCreateManySellerInputEnvelope = {
    data: SellerQueueCreateManySellerInput | SellerQueueCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type PostDeletionCreateWithoutSellerInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutDeletionsInput
  }

  export type PostDeletionUncheckedCreateWithoutSellerInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    postId: string
  }

  export type PostDeletionCreateOrConnectWithoutSellerInput = {
    where: PostDeletionWhereUniqueInput
    create: XOR<PostDeletionCreateWithoutSellerInput, PostDeletionUncheckedCreateWithoutSellerInput>
  }

  export type PostDeletionCreateManySellerInputEnvelope = {
    data: PostDeletionCreateManySellerInput | PostDeletionCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type?: $Enums.NotificationType
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    read?: boolean
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type?: $Enums.NotificationType
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    read?: boolean
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutPosterInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutPosterInput, PostUncheckedUpdateWithoutPosterInput>
    create: XOR<PostCreateWithoutPosterInput, PostUncheckedCreateWithoutPosterInput>
  }

  export type PostUpdateWithWhereUniqueWithoutPosterInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutPosterInput, PostUncheckedUpdateWithoutPosterInput>
  }

  export type PostUpdateManyWithWhereWithoutPosterInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPosterInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    phone?: StringFilter<"Post"> | string
    message?: StringFilter<"Post"> | string
    clientName?: StringFilter<"Post"> | string
    agentName?: StringFilter<"Post"> | string
    location?: StringFilter<"Post"> | string
    rent?: StringFilter<"Post"> | string
    screenshot?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    posterId?: StringFilter<"Post"> | string
    claimed?: BoolFilter<"Post"> | boolean
    new?: BoolFilter<"Post"> | boolean
    deleted?: BoolFilter<"Post"> | boolean
  }

  export type ClaimUpsertWithWhereUniqueWithoutSellerInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutSellerInput, ClaimUncheckedUpdateWithoutSellerInput>
    create: XOR<ClaimCreateWithoutSellerInput, ClaimUncheckedCreateWithoutSellerInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutSellerInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutSellerInput, ClaimUncheckedUpdateWithoutSellerInput>
  }

  export type ClaimUpdateManyWithWhereWithoutSellerInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutSellerInput>
  }

  export type ClaimScalarWhereInput = {
    AND?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    OR?: ClaimScalarWhereInput[]
    NOT?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    id?: StringFilter<"Claim"> | string
    postId?: StringFilter<"Claim"> | string
    sellerId?: StringFilter<"Claim"> | string
    claimedAt?: DateTimeFilter<"Claim"> | Date | string
  }

  export type SellerLimitUpsertWithoutSellerInput = {
    update: XOR<SellerLimitUpdateWithoutSellerInput, SellerLimitUncheckedUpdateWithoutSellerInput>
    create: XOR<SellerLimitCreateWithoutSellerInput, SellerLimitUncheckedCreateWithoutSellerInput>
    where?: SellerLimitWhereInput
  }

  export type SellerLimitUpdateToOneWithWhereWithoutSellerInput = {
    where?: SellerLimitWhereInput
    data: XOR<SellerLimitUpdateWithoutSellerInput, SellerLimitUncheckedUpdateWithoutSellerInput>
  }

  export type SellerLimitUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLimit?: IntFieldUpdateOperationsInput | number
    cooldownSecs?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastRequestAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SellerLimitUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLimit?: IntFieldUpdateOperationsInput | number
    cooldownSecs?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    lastRequestAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SellerRequestLogUpsertWithWhereUniqueWithoutSellerInput = {
    where: SellerRequestLogWhereUniqueInput
    update: XOR<SellerRequestLogUpdateWithoutSellerInput, SellerRequestLogUncheckedUpdateWithoutSellerInput>
    create: XOR<SellerRequestLogCreateWithoutSellerInput, SellerRequestLogUncheckedCreateWithoutSellerInput>
  }

  export type SellerRequestLogUpdateWithWhereUniqueWithoutSellerInput = {
    where: SellerRequestLogWhereUniqueInput
    data: XOR<SellerRequestLogUpdateWithoutSellerInput, SellerRequestLogUncheckedUpdateWithoutSellerInput>
  }

  export type SellerRequestLogUpdateManyWithWhereWithoutSellerInput = {
    where: SellerRequestLogScalarWhereInput
    data: XOR<SellerRequestLogUpdateManyMutationInput, SellerRequestLogUncheckedUpdateManyWithoutSellerInput>
  }

  export type SellerRequestLogScalarWhereInput = {
    AND?: SellerRequestLogScalarWhereInput | SellerRequestLogScalarWhereInput[]
    OR?: SellerRequestLogScalarWhereInput[]
    NOT?: SellerRequestLogScalarWhereInput | SellerRequestLogScalarWhereInput[]
    id?: StringFilter<"SellerRequestLog"> | string
    sellerId?: StringFilter<"SellerRequestLog"> | string
    createdAt?: DateTimeFilter<"SellerRequestLog"> | Date | string
    outcome?: EnumRequestStatusFilter<"SellerRequestLog"> | $Enums.RequestStatus
  }

  export type SellerQueueUpsertWithWhereUniqueWithoutSellerInput = {
    where: SellerQueueWhereUniqueInput
    update: XOR<SellerQueueUpdateWithoutSellerInput, SellerQueueUncheckedUpdateWithoutSellerInput>
    create: XOR<SellerQueueCreateWithoutSellerInput, SellerQueueUncheckedCreateWithoutSellerInput>
  }

  export type SellerQueueUpdateWithWhereUniqueWithoutSellerInput = {
    where: SellerQueueWhereUniqueInput
    data: XOR<SellerQueueUpdateWithoutSellerInput, SellerQueueUncheckedUpdateWithoutSellerInput>
  }

  export type SellerQueueUpdateManyWithWhereWithoutSellerInput = {
    where: SellerQueueScalarWhereInput
    data: XOR<SellerQueueUpdateManyMutationInput, SellerQueueUncheckedUpdateManyWithoutSellerInput>
  }

  export type SellerQueueScalarWhereInput = {
    AND?: SellerQueueScalarWhereInput | SellerQueueScalarWhereInput[]
    OR?: SellerQueueScalarWhereInput[]
    NOT?: SellerQueueScalarWhereInput | SellerQueueScalarWhereInput[]
    id?: StringFilter<"SellerQueue"> | string
    sellerId?: StringFilter<"SellerQueue"> | string
    createdAt?: DateTimeFilter<"SellerQueue"> | Date | string
  }

  export type PostDeletionUpsertWithWhereUniqueWithoutSellerInput = {
    where: PostDeletionWhereUniqueInput
    update: XOR<PostDeletionUpdateWithoutSellerInput, PostDeletionUncheckedUpdateWithoutSellerInput>
    create: XOR<PostDeletionCreateWithoutSellerInput, PostDeletionUncheckedCreateWithoutSellerInput>
  }

  export type PostDeletionUpdateWithWhereUniqueWithoutSellerInput = {
    where: PostDeletionWhereUniqueInput
    data: XOR<PostDeletionUpdateWithoutSellerInput, PostDeletionUncheckedUpdateWithoutSellerInput>
  }

  export type PostDeletionUpdateManyWithWhereWithoutSellerInput = {
    where: PostDeletionScalarWhereInput
    data: XOR<PostDeletionUpdateManyMutationInput, PostDeletionUncheckedUpdateManyWithoutSellerInput>
  }

  export type PostDeletionScalarWhereInput = {
    AND?: PostDeletionScalarWhereInput | PostDeletionScalarWhereInput[]
    OR?: PostDeletionScalarWhereInput[]
    NOT?: PostDeletionScalarWhereInput | PostDeletionScalarWhereInput[]
    id?: StringFilter<"PostDeletion"> | string
    reason?: StringFilter<"PostDeletion"> | string
    createdAt?: DateTimeFilter<"PostDeletion"> | Date | string
    sellerId?: StringFilter<"PostDeletion"> | string
    postId?: StringFilter<"PostDeletion"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    metadata?: JsonNullableFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    claims?: ClaimCreateNestedManyWithoutSellerInput
    limitProfile?: SellerLimitCreateNestedOneWithoutSellerInput
    requestLogs?: SellerRequestLogCreateNestedManyWithoutSellerInput
    sellerQueues?: SellerQueueCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionCreateNestedManyWithoutSellerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutSellerInput
    limitProfile?: SellerLimitUncheckedCreateNestedOneWithoutSellerInput
    requestLogs?: SellerRequestLogUncheckedCreateNestedManyWithoutSellerInput
    sellerQueues?: SellerQueueUncheckedCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionUncheckedCreateNestedManyWithoutSellerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ClaimCreateWithoutPostInput = {
    id?: string
    claimedAt?: Date | string
    seller: UserCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutPostInput = {
    id?: string
    sellerId: string
    claimedAt?: Date | string
  }

  export type ClaimCreateOrConnectWithoutPostInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutPostInput, ClaimUncheckedCreateWithoutPostInput>
  }

  export type PostDeletionCreateWithoutPostInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    seller: UserCreateNestedOneWithoutPostDeletionsInput
  }

  export type PostDeletionUncheckedCreateWithoutPostInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    sellerId: string
  }

  export type PostDeletionCreateOrConnectWithoutPostInput = {
    where: PostDeletionWhereUniqueInput
    create: XOR<PostDeletionCreateWithoutPostInput, PostDeletionUncheckedCreateWithoutPostInput>
  }

  export type PostDeletionCreateManyPostInputEnvelope = {
    data: PostDeletionCreateManyPostInput | PostDeletionCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUpdateManyWithoutSellerNestedInput
    limitProfile?: SellerLimitUpdateOneWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUpdateManyWithoutSellerNestedInput
    sellerQueues?: SellerQueueUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutSellerNestedInput
    limitProfile?: SellerLimitUncheckedUpdateOneWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUncheckedUpdateManyWithoutSellerNestedInput
    sellerQueues?: SellerQueueUncheckedUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUncheckedUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClaimUpsertWithoutPostInput = {
    update: XOR<ClaimUpdateWithoutPostInput, ClaimUncheckedUpdateWithoutPostInput>
    create: XOR<ClaimCreateWithoutPostInput, ClaimUncheckedCreateWithoutPostInput>
    where?: ClaimWhereInput
  }

  export type ClaimUpdateToOneWithWhereWithoutPostInput = {
    where?: ClaimWhereInput
    data: XOR<ClaimUpdateWithoutPostInput, ClaimUncheckedUpdateWithoutPostInput>
  }

  export type ClaimUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDeletionUpsertWithWhereUniqueWithoutPostInput = {
    where: PostDeletionWhereUniqueInput
    update: XOR<PostDeletionUpdateWithoutPostInput, PostDeletionUncheckedUpdateWithoutPostInput>
    create: XOR<PostDeletionCreateWithoutPostInput, PostDeletionUncheckedCreateWithoutPostInput>
  }

  export type PostDeletionUpdateWithWhereUniqueWithoutPostInput = {
    where: PostDeletionWhereUniqueInput
    data: XOR<PostDeletionUpdateWithoutPostInput, PostDeletionUncheckedUpdateWithoutPostInput>
  }

  export type PostDeletionUpdateManyWithWhereWithoutPostInput = {
    where: PostDeletionScalarWhereInput
    data: XOR<PostDeletionUpdateManyMutationInput, PostDeletionUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutClaimInput = {
    id?: string
    phone: string
    message: string
    clientName: string
    agentName: string
    location: string
    rent: string
    screenshot: string
    createdAt?: Date | string
    claimed?: boolean
    new?: boolean
    deleted?: boolean
    poster: UserCreateNestedOneWithoutPostsInput
    deletions?: PostDeletionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutClaimInput = {
    id?: string
    phone: string
    message: string
    clientName: string
    agentName: string
    location: string
    rent: string
    screenshot: string
    createdAt?: Date | string
    posterId: string
    claimed?: boolean
    new?: boolean
    deleted?: boolean
    deletions?: PostDeletionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutClaimInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutClaimInput, PostUncheckedCreateWithoutClaimInput>
  }

  export type UserCreateWithoutClaimsInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutPosterInput
    limitProfile?: SellerLimitCreateNestedOneWithoutSellerInput
    requestLogs?: SellerRequestLogCreateNestedManyWithoutSellerInput
    sellerQueues?: SellerQueueCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionCreateNestedManyWithoutSellerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClaimsInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutPosterInput
    limitProfile?: SellerLimitUncheckedCreateNestedOneWithoutSellerInput
    requestLogs?: SellerRequestLogUncheckedCreateNestedManyWithoutSellerInput
    sellerQueues?: SellerQueueUncheckedCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionUncheckedCreateNestedManyWithoutSellerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClaimsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
  }

  export type PostUpsertWithoutClaimInput = {
    update: XOR<PostUpdateWithoutClaimInput, PostUncheckedUpdateWithoutClaimInput>
    create: XOR<PostCreateWithoutClaimInput, PostUncheckedCreateWithoutClaimInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutClaimInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutClaimInput, PostUncheckedUpdateWithoutClaimInput>
  }

  export type PostUpdateWithoutClaimInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rent?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimed?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    poster?: UserUpdateOneRequiredWithoutPostsNestedInput
    deletions?: PostDeletionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutClaimInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rent?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posterId?: StringFieldUpdateOperationsInput | string
    claimed?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    deletions?: PostDeletionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutClaimsInput = {
    update: XOR<UserUpdateWithoutClaimsInput, UserUncheckedUpdateWithoutClaimsInput>
    create: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClaimsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClaimsInput, UserUncheckedUpdateWithoutClaimsInput>
  }

  export type UserUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutPosterNestedInput
    limitProfile?: SellerLimitUpdateOneWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUpdateManyWithoutSellerNestedInput
    sellerQueues?: SellerQueueUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutPosterNestedInput
    limitProfile?: SellerLimitUncheckedUpdateOneWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUncheckedUpdateManyWithoutSellerNestedInput
    sellerQueues?: SellerQueueUncheckedUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUncheckedUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostDeletionsInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutPosterInput
    claims?: ClaimCreateNestedManyWithoutSellerInput
    limitProfile?: SellerLimitCreateNestedOneWithoutSellerInput
    requestLogs?: SellerRequestLogCreateNestedManyWithoutSellerInput
    sellerQueues?: SellerQueueCreateNestedManyWithoutSellerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostDeletionsInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutPosterInput
    claims?: ClaimUncheckedCreateNestedManyWithoutSellerInput
    limitProfile?: SellerLimitUncheckedCreateNestedOneWithoutSellerInput
    requestLogs?: SellerRequestLogUncheckedCreateNestedManyWithoutSellerInput
    sellerQueues?: SellerQueueUncheckedCreateNestedManyWithoutSellerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostDeletionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostDeletionsInput, UserUncheckedCreateWithoutPostDeletionsInput>
  }

  export type PostCreateWithoutDeletionsInput = {
    id?: string
    phone: string
    message: string
    clientName: string
    agentName: string
    location: string
    rent: string
    screenshot: string
    createdAt?: Date | string
    claimed?: boolean
    new?: boolean
    deleted?: boolean
    poster: UserCreateNestedOneWithoutPostsInput
    claim?: ClaimCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutDeletionsInput = {
    id?: string
    phone: string
    message: string
    clientName: string
    agentName: string
    location: string
    rent: string
    screenshot: string
    createdAt?: Date | string
    posterId: string
    claimed?: boolean
    new?: boolean
    deleted?: boolean
    claim?: ClaimUncheckedCreateNestedOneWithoutPostInput
  }

  export type PostCreateOrConnectWithoutDeletionsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutDeletionsInput, PostUncheckedCreateWithoutDeletionsInput>
  }

  export type UserUpsertWithoutPostDeletionsInput = {
    update: XOR<UserUpdateWithoutPostDeletionsInput, UserUncheckedUpdateWithoutPostDeletionsInput>
    create: XOR<UserCreateWithoutPostDeletionsInput, UserUncheckedCreateWithoutPostDeletionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostDeletionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostDeletionsInput, UserUncheckedUpdateWithoutPostDeletionsInput>
  }

  export type UserUpdateWithoutPostDeletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutPosterNestedInput
    claims?: ClaimUpdateManyWithoutSellerNestedInput
    limitProfile?: SellerLimitUpdateOneWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUpdateManyWithoutSellerNestedInput
    sellerQueues?: SellerQueueUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostDeletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutPosterNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutSellerNestedInput
    limitProfile?: SellerLimitUncheckedUpdateOneWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUncheckedUpdateManyWithoutSellerNestedInput
    sellerQueues?: SellerQueueUncheckedUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutDeletionsInput = {
    update: XOR<PostUpdateWithoutDeletionsInput, PostUncheckedUpdateWithoutDeletionsInput>
    create: XOR<PostCreateWithoutDeletionsInput, PostUncheckedCreateWithoutDeletionsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutDeletionsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutDeletionsInput, PostUncheckedUpdateWithoutDeletionsInput>
  }

  export type PostUpdateWithoutDeletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rent?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimed?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    poster?: UserUpdateOneRequiredWithoutPostsNestedInput
    claim?: ClaimUpdateOneWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutDeletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rent?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posterId?: StringFieldUpdateOperationsInput | string
    claimed?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUncheckedUpdateOneWithoutPostNestedInput
  }

  export type UserCreateWithoutLimitProfileInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutPosterInput
    claims?: ClaimCreateNestedManyWithoutSellerInput
    requestLogs?: SellerRequestLogCreateNestedManyWithoutSellerInput
    sellerQueues?: SellerQueueCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionCreateNestedManyWithoutSellerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLimitProfileInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutPosterInput
    claims?: ClaimUncheckedCreateNestedManyWithoutSellerInput
    requestLogs?: SellerRequestLogUncheckedCreateNestedManyWithoutSellerInput
    sellerQueues?: SellerQueueUncheckedCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionUncheckedCreateNestedManyWithoutSellerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLimitProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLimitProfileInput, UserUncheckedCreateWithoutLimitProfileInput>
  }

  export type UserUpsertWithoutLimitProfileInput = {
    update: XOR<UserUpdateWithoutLimitProfileInput, UserUncheckedUpdateWithoutLimitProfileInput>
    create: XOR<UserCreateWithoutLimitProfileInput, UserUncheckedCreateWithoutLimitProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLimitProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLimitProfileInput, UserUncheckedUpdateWithoutLimitProfileInput>
  }

  export type UserUpdateWithoutLimitProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutPosterNestedInput
    claims?: ClaimUpdateManyWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUpdateManyWithoutSellerNestedInput
    sellerQueues?: SellerQueueUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLimitProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutPosterNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUncheckedUpdateManyWithoutSellerNestedInput
    sellerQueues?: SellerQueueUncheckedUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUncheckedUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRequestLogsInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutPosterInput
    claims?: ClaimCreateNestedManyWithoutSellerInput
    limitProfile?: SellerLimitCreateNestedOneWithoutSellerInput
    sellerQueues?: SellerQueueCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionCreateNestedManyWithoutSellerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestLogsInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutPosterInput
    claims?: ClaimUncheckedCreateNestedManyWithoutSellerInput
    limitProfile?: SellerLimitUncheckedCreateNestedOneWithoutSellerInput
    sellerQueues?: SellerQueueUncheckedCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionUncheckedCreateNestedManyWithoutSellerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestLogsInput, UserUncheckedCreateWithoutRequestLogsInput>
  }

  export type UserUpsertWithoutRequestLogsInput = {
    update: XOR<UserUpdateWithoutRequestLogsInput, UserUncheckedUpdateWithoutRequestLogsInput>
    create: XOR<UserCreateWithoutRequestLogsInput, UserUncheckedCreateWithoutRequestLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestLogsInput, UserUncheckedUpdateWithoutRequestLogsInput>
  }

  export type UserUpdateWithoutRequestLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutPosterNestedInput
    claims?: ClaimUpdateManyWithoutSellerNestedInput
    limitProfile?: SellerLimitUpdateOneWithoutSellerNestedInput
    sellerQueues?: SellerQueueUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutPosterNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutSellerNestedInput
    limitProfile?: SellerLimitUncheckedUpdateOneWithoutSellerNestedInput
    sellerQueues?: SellerQueueUncheckedUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUncheckedUpdateManyWithoutSellerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutPosterInput
    claims?: ClaimCreateNestedManyWithoutSellerInput
    limitProfile?: SellerLimitCreateNestedOneWithoutSellerInput
    requestLogs?: SellerRequestLogCreateNestedManyWithoutSellerInput
    sellerQueues?: SellerQueueCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    userName: string
    password: string
    sessionVersion?: number
    isActive?: boolean
    type: $Enums.UserType
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutPosterInput
    claims?: ClaimUncheckedCreateNestedManyWithoutSellerInput
    limitProfile?: SellerLimitUncheckedCreateNestedOneWithoutSellerInput
    requestLogs?: SellerRequestLogUncheckedCreateNestedManyWithoutSellerInput
    sellerQueues?: SellerQueueUncheckedCreateNestedManyWithoutSellerInput
    postDeletions?: PostDeletionUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutPosterNestedInput
    claims?: ClaimUpdateManyWithoutSellerNestedInput
    limitProfile?: SellerLimitUpdateOneWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUpdateManyWithoutSellerNestedInput
    sellerQueues?: SellerQueueUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessionVersion?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutPosterNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutSellerNestedInput
    limitProfile?: SellerLimitUncheckedUpdateOneWithoutSellerNestedInput
    requestLogs?: SellerRequestLogUncheckedUpdateManyWithoutSellerNestedInput
    sellerQueues?: SellerQueueUncheckedUpdateManyWithoutSellerNestedInput
    postDeletions?: PostDeletionUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type PostCreateManyPosterInput = {
    id?: string
    phone: string
    message: string
    clientName: string
    agentName: string
    location: string
    rent: string
    screenshot: string
    createdAt?: Date | string
    claimed?: boolean
    new?: boolean
    deleted?: boolean
  }

  export type ClaimCreateManySellerInput = {
    id?: string
    postId: string
    claimedAt?: Date | string
  }

  export type SellerRequestLogCreateManySellerInput = {
    id?: string
    createdAt?: Date | string
    outcome: $Enums.RequestStatus
  }

  export type SellerQueueCreateManySellerInput = {
    id?: string
    createdAt?: Date | string
  }

  export type PostDeletionCreateManySellerInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    postId: string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type?: $Enums.NotificationType
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    read?: boolean
  }

  export type PostUpdateWithoutPosterInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rent?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimed?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUpdateOneWithoutPostNestedInput
    deletions?: PostDeletionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPosterInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rent?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimed?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUncheckedUpdateOneWithoutPostNestedInput
    deletions?: PostDeletionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutPosterInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rent?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimed?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClaimUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutClaimNestedInput
  }

  export type ClaimUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerRequestLogUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type SellerRequestLogUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type SellerRequestLogUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type SellerQueueUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerQueueUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerQueueUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDeletionUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutDeletionsNestedInput
  }

  export type PostDeletionUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostDeletionUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostDeletionCreateManyPostInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    sellerId: string
  }

  export type PostDeletionUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutPostDeletionsNestedInput
  }

  export type PostDeletionUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
  }

  export type PostDeletionUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
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