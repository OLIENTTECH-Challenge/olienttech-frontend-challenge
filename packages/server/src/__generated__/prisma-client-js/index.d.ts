
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model Manufacturer
 * 
 */
export type Manufacturer = $Result.DefaultSelection<Prisma.$ManufacturerPayload>
/**
 * Model ShopOnManufacturer
 * 
 */
export type ShopOnManufacturer = $Result.DefaultSelection<Prisma.$ShopOnManufacturerPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ManufacturerHandlingProducts
 * 
 */
export type ManufacturerHandlingProducts = $Result.DefaultSelection<Prisma.$ManufacturerHandlingProductsPayload>
/**
 * Model ProductCategory
 * 
 */
export type ProductCategory = $Result.DefaultSelection<Prisma.$ProductCategoryPayload>
/**
 * Model ProductOnProductCategory
 * 
 */
export type ProductOnProductCategory = $Result.DefaultSelection<Prisma.$ProductOnProductCategoryPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Shops
 * const shops = await prisma.shop.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Shops
   * const shops = await prisma.shop.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs>;

  /**
   * `prisma.manufacturer`: Exposes CRUD operations for the **Manufacturer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manufacturers
    * const manufacturers = await prisma.manufacturer.findMany()
    * ```
    */
  get manufacturer(): Prisma.ManufacturerDelegate<ExtArgs>;

  /**
   * `prisma.shopOnManufacturer`: Exposes CRUD operations for the **ShopOnManufacturer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopOnManufacturers
    * const shopOnManufacturers = await prisma.shopOnManufacturer.findMany()
    * ```
    */
  get shopOnManufacturer(): Prisma.ShopOnManufacturerDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.manufacturerHandlingProducts`: Exposes CRUD operations for the **ManufacturerHandlingProducts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManufacturerHandlingProducts
    * const manufacturerHandlingProducts = await prisma.manufacturerHandlingProducts.findMany()
    * ```
    */
  get manufacturerHandlingProducts(): Prisma.ManufacturerHandlingProductsDelegate<ExtArgs>;

  /**
   * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategory.findMany()
    * ```
    */
  get productCategory(): Prisma.ProductCategoryDelegate<ExtArgs>;

  /**
   * `prisma.productOnProductCategory`: Exposes CRUD operations for the **ProductOnProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductOnProductCategories
    * const productOnProductCategories = await prisma.productOnProductCategory.findMany()
    * ```
    */
  get productOnProductCategory(): Prisma.ProductOnProductCategoryDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Shop: 'Shop',
    Manufacturer: 'Manufacturer',
    ShopOnManufacturer: 'ShopOnManufacturer',
    Product: 'Product',
    ManufacturerHandlingProducts: 'ManufacturerHandlingProducts',
    ProductCategory: 'ProductCategory',
    ProductOnProductCategory: 'ProductOnProductCategory',
    Order: 'Order',
    OrderItem: 'OrderItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'shop' | 'manufacturer' | 'shopOnManufacturer' | 'product' | 'manufacturerHandlingProducts' | 'productCategory' | 'productOnProductCategory' | 'order' | 'orderItem'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>,
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      Manufacturer: {
        payload: Prisma.$ManufacturerPayload<ExtArgs>
        fields: Prisma.ManufacturerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManufacturerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManufacturerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          findFirst: {
            args: Prisma.ManufacturerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManufacturerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          findMany: {
            args: Prisma.ManufacturerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>[]
          }
          create: {
            args: Prisma.ManufacturerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          delete: {
            args: Prisma.ManufacturerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          update: {
            args: Prisma.ManufacturerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          deleteMany: {
            args: Prisma.ManufacturerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ManufacturerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ManufacturerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          aggregate: {
            args: Prisma.ManufacturerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateManufacturer>
          }
          groupBy: {
            args: Prisma.ManufacturerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ManufacturerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManufacturerCountArgs<ExtArgs>,
            result: $Utils.Optional<ManufacturerCountAggregateOutputType> | number
          }
        }
      }
      ShopOnManufacturer: {
        payload: Prisma.$ShopOnManufacturerPayload<ExtArgs>
        fields: Prisma.ShopOnManufacturerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopOnManufacturerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopOnManufacturerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopOnManufacturerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopOnManufacturerPayload>
          }
          findFirst: {
            args: Prisma.ShopOnManufacturerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopOnManufacturerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopOnManufacturerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopOnManufacturerPayload>
          }
          findMany: {
            args: Prisma.ShopOnManufacturerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopOnManufacturerPayload>[]
          }
          create: {
            args: Prisma.ShopOnManufacturerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopOnManufacturerPayload>
          }
          delete: {
            args: Prisma.ShopOnManufacturerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopOnManufacturerPayload>
          }
          update: {
            args: Prisma.ShopOnManufacturerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopOnManufacturerPayload>
          }
          deleteMany: {
            args: Prisma.ShopOnManufacturerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShopOnManufacturerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShopOnManufacturerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopOnManufacturerPayload>
          }
          aggregate: {
            args: Prisma.ShopOnManufacturerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShopOnManufacturer>
          }
          groupBy: {
            args: Prisma.ShopOnManufacturerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShopOnManufacturerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopOnManufacturerCountArgs<ExtArgs>,
            result: $Utils.Optional<ShopOnManufacturerCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ManufacturerHandlingProducts: {
        payload: Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>
        fields: Prisma.ManufacturerHandlingProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManufacturerHandlingProductsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerHandlingProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManufacturerHandlingProductsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerHandlingProductsPayload>
          }
          findFirst: {
            args: Prisma.ManufacturerHandlingProductsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerHandlingProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManufacturerHandlingProductsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerHandlingProductsPayload>
          }
          findMany: {
            args: Prisma.ManufacturerHandlingProductsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerHandlingProductsPayload>[]
          }
          create: {
            args: Prisma.ManufacturerHandlingProductsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerHandlingProductsPayload>
          }
          delete: {
            args: Prisma.ManufacturerHandlingProductsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerHandlingProductsPayload>
          }
          update: {
            args: Prisma.ManufacturerHandlingProductsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerHandlingProductsPayload>
          }
          deleteMany: {
            args: Prisma.ManufacturerHandlingProductsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ManufacturerHandlingProductsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ManufacturerHandlingProductsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManufacturerHandlingProductsPayload>
          }
          aggregate: {
            args: Prisma.ManufacturerHandlingProductsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateManufacturerHandlingProducts>
          }
          groupBy: {
            args: Prisma.ManufacturerHandlingProductsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ManufacturerHandlingProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManufacturerHandlingProductsCountArgs<ExtArgs>,
            result: $Utils.Optional<ManufacturerHandlingProductsCountAggregateOutputType> | number
          }
        }
      }
      ProductCategory: {
        payload: Prisma.$ProductCategoryPayload<ExtArgs>
        fields: Prisma.ProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          delete: {
            args: Prisma.ProductCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          update: {
            args: Prisma.ProductCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductCategory>
          }
          groupBy: {
            args: Prisma.ProductCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      ProductOnProductCategory: {
        payload: Prisma.$ProductOnProductCategoryPayload<ExtArgs>
        fields: Prisma.ProductOnProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductOnProductCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOnProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductOnProductCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOnProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductOnProductCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOnProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductOnProductCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOnProductCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductOnProductCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOnProductCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductOnProductCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOnProductCategoryPayload>
          }
          delete: {
            args: Prisma.ProductOnProductCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOnProductCategoryPayload>
          }
          update: {
            args: Prisma.ProductOnProductCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOnProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductOnProductCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductOnProductCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductOnProductCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOnProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductOnProductCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductOnProductCategory>
          }
          groupBy: {
            args: Prisma.ProductOnProductCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductOnProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductOnProductCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductOnProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    partnerManufacturers: number
    orders: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partnerManufacturers?: boolean | ShopCountOutputTypeCountPartnerManufacturersArgs
    orders?: boolean | ShopCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountPartnerManufacturersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopOnManufacturerWhereInput
  }


  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Count Type ManufacturerCountOutputType
   */

  export type ManufacturerCountOutputType = {
    handlingProducts: number
    partnerShops: number
    orders: number
  }

  export type ManufacturerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    handlingProducts?: boolean | ManufacturerCountOutputTypeCountHandlingProductsArgs
    partnerShops?: boolean | ManufacturerCountOutputTypeCountPartnerShopsArgs
    orders?: boolean | ManufacturerCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes

  /**
   * ManufacturerCountOutputType without action
   */
  export type ManufacturerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerCountOutputType
     */
    select?: ManufacturerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ManufacturerCountOutputType without action
   */
  export type ManufacturerCountOutputTypeCountHandlingProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacturerHandlingProductsWhereInput
  }


  /**
   * ManufacturerCountOutputType without action
   */
  export type ManufacturerCountOutputTypeCountPartnerShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopOnManufacturerWhereInput
  }


  /**
   * ManufacturerCountOutputType without action
   */
  export type ManufacturerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    categories: number
    manufacturers: number
    orderItem: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | ProductCountOutputTypeCountCategoriesArgs
    manufacturers?: boolean | ProductCountOutputTypeCountManufacturersArgs
    orderItem?: boolean | ProductCountOutputTypeCountOrderItemArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOnProductCategoryWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountManufacturersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacturerHandlingProductsWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }



  /**
   * Count Type ProductCategoryCountOutputType
   */

  export type ProductCategoryCountOutputType = {
    products: number
  }

  export type ProductCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductCategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryCountOutputType
     */
    select?: ProductCategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOnProductCategoryWhereInput
  }



  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type ShopMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type ShopMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: string
    name: string
    description: string
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    partnerManufacturers?: boolean | Shop$partnerManufacturersArgs<ExtArgs>
    orders?: boolean | Shop$ordersArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partnerManufacturers?: boolean | Shop$partnerManufacturersArgs<ExtArgs>
    orders?: boolean | Shop$ordersArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      partnerManufacturers: Prisma.$ShopOnManufacturerPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }


  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShopFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Shop that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShopFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShopFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
    **/
    create<T extends ShopCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopCreateArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
    **/
    delete<T extends ShopDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShopUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShopDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShopUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
    **/
    upsert<T extends ShopUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
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
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    partnerManufacturers<T extends Shop$partnerManufacturersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$partnerManufacturersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopOnManufacturerPayload<ExtArgs>, T, 'findMany'> | Null>;

    orders<T extends Shop$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Shop model
   */ 
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'String'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly description: FieldRef<"Shop", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }


  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
  }


  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }


  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
  }


  /**
   * Shop.partnerManufacturers
   */
  export type Shop$partnerManufacturersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOnManufacturer
     */
    select?: ShopOnManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopOnManufacturerInclude<ExtArgs> | null
    where?: ShopOnManufacturerWhereInput
    orderBy?: ShopOnManufacturerOrderByWithRelationInput | ShopOnManufacturerOrderByWithRelationInput[]
    cursor?: ShopOnManufacturerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopOnManufacturerScalarFieldEnum | ShopOnManufacturerScalarFieldEnum[]
  }


  /**
   * Shop.orders
   */
  export type Shop$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
  }



  /**
   * Model Manufacturer
   */

  export type AggregateManufacturer = {
    _count: ManufacturerCountAggregateOutputType | null
    _min: ManufacturerMinAggregateOutputType | null
    _max: ManufacturerMaxAggregateOutputType | null
  }

  export type ManufacturerMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type ManufacturerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type ManufacturerCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type ManufacturerMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ManufacturerMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ManufacturerCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type ManufacturerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manufacturer to aggregate.
     */
    where?: ManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturerOrderByWithRelationInput | ManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Manufacturers
    **/
    _count?: true | ManufacturerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManufacturerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManufacturerMaxAggregateInputType
  }

  export type GetManufacturerAggregateType<T extends ManufacturerAggregateArgs> = {
        [P in keyof T & keyof AggregateManufacturer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManufacturer[P]>
      : GetScalarType<T[P], AggregateManufacturer[P]>
  }




  export type ManufacturerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacturerWhereInput
    orderBy?: ManufacturerOrderByWithAggregationInput | ManufacturerOrderByWithAggregationInput[]
    by: ManufacturerScalarFieldEnum[] | ManufacturerScalarFieldEnum
    having?: ManufacturerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManufacturerCountAggregateInputType | true
    _min?: ManufacturerMinAggregateInputType
    _max?: ManufacturerMaxAggregateInputType
  }

  export type ManufacturerGroupByOutputType = {
    id: string
    name: string
    description: string
    _count: ManufacturerCountAggregateOutputType | null
    _min: ManufacturerMinAggregateOutputType | null
    _max: ManufacturerMaxAggregateOutputType | null
  }

  type GetManufacturerGroupByPayload<T extends ManufacturerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManufacturerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManufacturerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManufacturerGroupByOutputType[P]>
            : GetScalarType<T[P], ManufacturerGroupByOutputType[P]>
        }
      >
    >


  export type ManufacturerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    handlingProducts?: boolean | Manufacturer$handlingProductsArgs<ExtArgs>
    partnerShops?: boolean | Manufacturer$partnerShopsArgs<ExtArgs>
    orders?: boolean | Manufacturer$ordersArgs<ExtArgs>
    _count?: boolean | ManufacturerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manufacturer"]>

  export type ManufacturerSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type ManufacturerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    handlingProducts?: boolean | Manufacturer$handlingProductsArgs<ExtArgs>
    partnerShops?: boolean | Manufacturer$partnerShopsArgs<ExtArgs>
    orders?: boolean | Manufacturer$ordersArgs<ExtArgs>
    _count?: boolean | ManufacturerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ManufacturerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manufacturer"
    objects: {
      handlingProducts: Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>[]
      partnerShops: Prisma.$ShopOnManufacturerPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
    }, ExtArgs["result"]["manufacturer"]>
    composites: {}
  }


  type ManufacturerGetPayload<S extends boolean | null | undefined | ManufacturerDefaultArgs> = $Result.GetResult<Prisma.$ManufacturerPayload, S>

  type ManufacturerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ManufacturerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ManufacturerCountAggregateInputType | true
    }

  export interface ManufacturerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manufacturer'], meta: { name: 'Manufacturer' } }
    /**
     * Find zero or one Manufacturer that matches the filter.
     * @param {ManufacturerFindUniqueArgs} args - Arguments to find a Manufacturer
     * @example
     * // Get one Manufacturer
     * const manufacturer = await prisma.manufacturer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ManufacturerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ManufacturerFindUniqueArgs<ExtArgs>>
    ): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Manufacturer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ManufacturerFindUniqueOrThrowArgs} args - Arguments to find a Manufacturer
     * @example
     * // Get one Manufacturer
     * const manufacturer = await prisma.manufacturer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ManufacturerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManufacturerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Manufacturer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerFindFirstArgs} args - Arguments to find a Manufacturer
     * @example
     * // Get one Manufacturer
     * const manufacturer = await prisma.manufacturer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ManufacturerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ManufacturerFindFirstArgs<ExtArgs>>
    ): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Manufacturer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerFindFirstOrThrowArgs} args - Arguments to find a Manufacturer
     * @example
     * // Get one Manufacturer
     * const manufacturer = await prisma.manufacturer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ManufacturerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManufacturerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Manufacturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manufacturers
     * const manufacturers = await prisma.manufacturer.findMany()
     * 
     * // Get first 10 Manufacturers
     * const manufacturers = await prisma.manufacturer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manufacturerWithIdOnly = await prisma.manufacturer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ManufacturerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManufacturerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Manufacturer.
     * @param {ManufacturerCreateArgs} args - Arguments to create a Manufacturer.
     * @example
     * // Create one Manufacturer
     * const Manufacturer = await prisma.manufacturer.create({
     *   data: {
     *     // ... data to create a Manufacturer
     *   }
     * })
     * 
    **/
    create<T extends ManufacturerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ManufacturerCreateArgs<ExtArgs>>
    ): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Manufacturer.
     * @param {ManufacturerDeleteArgs} args - Arguments to delete one Manufacturer.
     * @example
     * // Delete one Manufacturer
     * const Manufacturer = await prisma.manufacturer.delete({
     *   where: {
     *     // ... filter to delete one Manufacturer
     *   }
     * })
     * 
    **/
    delete<T extends ManufacturerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ManufacturerDeleteArgs<ExtArgs>>
    ): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Manufacturer.
     * @param {ManufacturerUpdateArgs} args - Arguments to update one Manufacturer.
     * @example
     * // Update one Manufacturer
     * const manufacturer = await prisma.manufacturer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ManufacturerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ManufacturerUpdateArgs<ExtArgs>>
    ): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Manufacturers.
     * @param {ManufacturerDeleteManyArgs} args - Arguments to filter Manufacturers to delete.
     * @example
     * // Delete a few Manufacturers
     * const { count } = await prisma.manufacturer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ManufacturerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManufacturerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manufacturers
     * const manufacturer = await prisma.manufacturer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ManufacturerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ManufacturerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Manufacturer.
     * @param {ManufacturerUpsertArgs} args - Arguments to update or create a Manufacturer.
     * @example
     * // Update or create a Manufacturer
     * const manufacturer = await prisma.manufacturer.upsert({
     *   create: {
     *     // ... data to create a Manufacturer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manufacturer we want to update
     *   }
     * })
    **/
    upsert<T extends ManufacturerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ManufacturerUpsertArgs<ExtArgs>>
    ): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerCountArgs} args - Arguments to filter Manufacturers to count.
     * @example
     * // Count the number of Manufacturers
     * const count = await prisma.manufacturer.count({
     *   where: {
     *     // ... the filter for the Manufacturers we want to count
     *   }
     * })
    **/
    count<T extends ManufacturerCountArgs>(
      args?: Subset<T, ManufacturerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManufacturerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manufacturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManufacturerAggregateArgs>(args: Subset<T, ManufacturerAggregateArgs>): Prisma.PrismaPromise<GetManufacturerAggregateType<T>>

    /**
     * Group by Manufacturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerGroupByArgs} args - Group by arguments.
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
      T extends ManufacturerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManufacturerGroupByArgs['orderBy'] }
        : { orderBy?: ManufacturerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManufacturerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManufacturerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manufacturer model
   */
  readonly fields: ManufacturerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manufacturer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManufacturerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    handlingProducts<T extends Manufacturer$handlingProductsArgs<ExtArgs> = {}>(args?: Subset<T, Manufacturer$handlingProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    partnerShops<T extends Manufacturer$partnerShopsArgs<ExtArgs> = {}>(args?: Subset<T, Manufacturer$partnerShopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopOnManufacturerPayload<ExtArgs>, T, 'findMany'> | Null>;

    orders<T extends Manufacturer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Manufacturer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Manufacturer model
   */ 
  interface ManufacturerFieldRefs {
    readonly id: FieldRef<"Manufacturer", 'String'>
    readonly name: FieldRef<"Manufacturer", 'String'>
    readonly description: FieldRef<"Manufacturer", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Manufacturer findUnique
   */
  export type ManufacturerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturer to fetch.
     */
    where: ManufacturerWhereUniqueInput
  }


  /**
   * Manufacturer findUniqueOrThrow
   */
  export type ManufacturerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturer to fetch.
     */
    where: ManufacturerWhereUniqueInput
  }


  /**
   * Manufacturer findFirst
   */
  export type ManufacturerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturer to fetch.
     */
    where?: ManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturerOrderByWithRelationInput | ManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manufacturers.
     */
    cursor?: ManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manufacturers.
     */
    distinct?: ManufacturerScalarFieldEnum | ManufacturerScalarFieldEnum[]
  }


  /**
   * Manufacturer findFirstOrThrow
   */
  export type ManufacturerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturer to fetch.
     */
    where?: ManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturerOrderByWithRelationInput | ManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manufacturers.
     */
    cursor?: ManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manufacturers.
     */
    distinct?: ManufacturerScalarFieldEnum | ManufacturerScalarFieldEnum[]
  }


  /**
   * Manufacturer findMany
   */
  export type ManufacturerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturers to fetch.
     */
    where?: ManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturerOrderByWithRelationInput | ManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Manufacturers.
     */
    cursor?: ManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    distinct?: ManufacturerScalarFieldEnum | ManufacturerScalarFieldEnum[]
  }


  /**
   * Manufacturer create
   */
  export type ManufacturerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * The data needed to create a Manufacturer.
     */
    data: XOR<ManufacturerCreateInput, ManufacturerUncheckedCreateInput>
  }


  /**
   * Manufacturer update
   */
  export type ManufacturerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * The data needed to update a Manufacturer.
     */
    data: XOR<ManufacturerUpdateInput, ManufacturerUncheckedUpdateInput>
    /**
     * Choose, which Manufacturer to update.
     */
    where: ManufacturerWhereUniqueInput
  }


  /**
   * Manufacturer updateMany
   */
  export type ManufacturerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Manufacturers.
     */
    data: XOR<ManufacturerUpdateManyMutationInput, ManufacturerUncheckedUpdateManyInput>
    /**
     * Filter which Manufacturers to update
     */
    where?: ManufacturerWhereInput
  }


  /**
   * Manufacturer upsert
   */
  export type ManufacturerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * The filter to search for the Manufacturer to update in case it exists.
     */
    where: ManufacturerWhereUniqueInput
    /**
     * In case the Manufacturer found by the `where` argument doesn't exist, create a new Manufacturer with this data.
     */
    create: XOR<ManufacturerCreateInput, ManufacturerUncheckedCreateInput>
    /**
     * In case the Manufacturer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManufacturerUpdateInput, ManufacturerUncheckedUpdateInput>
  }


  /**
   * Manufacturer delete
   */
  export type ManufacturerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter which Manufacturer to delete.
     */
    where: ManufacturerWhereUniqueInput
  }


  /**
   * Manufacturer deleteMany
   */
  export type ManufacturerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manufacturers to delete
     */
    where?: ManufacturerWhereInput
  }


  /**
   * Manufacturer.handlingProducts
   */
  export type Manufacturer$handlingProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerHandlingProducts
     */
    select?: ManufacturerHandlingProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerHandlingProductsInclude<ExtArgs> | null
    where?: ManufacturerHandlingProductsWhereInput
    orderBy?: ManufacturerHandlingProductsOrderByWithRelationInput | ManufacturerHandlingProductsOrderByWithRelationInput[]
    cursor?: ManufacturerHandlingProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManufacturerHandlingProductsScalarFieldEnum | ManufacturerHandlingProductsScalarFieldEnum[]
  }


  /**
   * Manufacturer.partnerShops
   */
  export type Manufacturer$partnerShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOnManufacturer
     */
    select?: ShopOnManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopOnManufacturerInclude<ExtArgs> | null
    where?: ShopOnManufacturerWhereInput
    orderBy?: ShopOnManufacturerOrderByWithRelationInput | ShopOnManufacturerOrderByWithRelationInput[]
    cursor?: ShopOnManufacturerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopOnManufacturerScalarFieldEnum | ShopOnManufacturerScalarFieldEnum[]
  }


  /**
   * Manufacturer.orders
   */
  export type Manufacturer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Manufacturer without action
   */
  export type ManufacturerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerInclude<ExtArgs> | null
  }



  /**
   * Model ShopOnManufacturer
   */

  export type AggregateShopOnManufacturer = {
    _count: ShopOnManufacturerCountAggregateOutputType | null
    _min: ShopOnManufacturerMinAggregateOutputType | null
    _max: ShopOnManufacturerMaxAggregateOutputType | null
  }

  export type ShopOnManufacturerMinAggregateOutputType = {
    shopId: string | null
    manufacturerId: string | null
  }

  export type ShopOnManufacturerMaxAggregateOutputType = {
    shopId: string | null
    manufacturerId: string | null
  }

  export type ShopOnManufacturerCountAggregateOutputType = {
    shopId: number
    manufacturerId: number
    _all: number
  }


  export type ShopOnManufacturerMinAggregateInputType = {
    shopId?: true
    manufacturerId?: true
  }

  export type ShopOnManufacturerMaxAggregateInputType = {
    shopId?: true
    manufacturerId?: true
  }

  export type ShopOnManufacturerCountAggregateInputType = {
    shopId?: true
    manufacturerId?: true
    _all?: true
  }

  export type ShopOnManufacturerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopOnManufacturer to aggregate.
     */
    where?: ShopOnManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopOnManufacturers to fetch.
     */
    orderBy?: ShopOnManufacturerOrderByWithRelationInput | ShopOnManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopOnManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopOnManufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopOnManufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopOnManufacturers
    **/
    _count?: true | ShopOnManufacturerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopOnManufacturerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopOnManufacturerMaxAggregateInputType
  }

  export type GetShopOnManufacturerAggregateType<T extends ShopOnManufacturerAggregateArgs> = {
        [P in keyof T & keyof AggregateShopOnManufacturer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopOnManufacturer[P]>
      : GetScalarType<T[P], AggregateShopOnManufacturer[P]>
  }




  export type ShopOnManufacturerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopOnManufacturerWhereInput
    orderBy?: ShopOnManufacturerOrderByWithAggregationInput | ShopOnManufacturerOrderByWithAggregationInput[]
    by: ShopOnManufacturerScalarFieldEnum[] | ShopOnManufacturerScalarFieldEnum
    having?: ShopOnManufacturerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopOnManufacturerCountAggregateInputType | true
    _min?: ShopOnManufacturerMinAggregateInputType
    _max?: ShopOnManufacturerMaxAggregateInputType
  }

  export type ShopOnManufacturerGroupByOutputType = {
    shopId: string
    manufacturerId: string
    _count: ShopOnManufacturerCountAggregateOutputType | null
    _min: ShopOnManufacturerMinAggregateOutputType | null
    _max: ShopOnManufacturerMaxAggregateOutputType | null
  }

  type GetShopOnManufacturerGroupByPayload<T extends ShopOnManufacturerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopOnManufacturerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopOnManufacturerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopOnManufacturerGroupByOutputType[P]>
            : GetScalarType<T[P], ShopOnManufacturerGroupByOutputType[P]>
        }
      >
    >


  export type ShopOnManufacturerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shopId?: boolean
    manufacturerId?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    manufacturer?: boolean | ManufacturerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopOnManufacturer"]>

  export type ShopOnManufacturerSelectScalar = {
    shopId?: boolean
    manufacturerId?: boolean
  }

  export type ShopOnManufacturerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    manufacturer?: boolean | ManufacturerDefaultArgs<ExtArgs>
  }


  export type $ShopOnManufacturerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopOnManufacturer"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      manufacturer: Prisma.$ManufacturerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      shopId: string
      manufacturerId: string
    }, ExtArgs["result"]["shopOnManufacturer"]>
    composites: {}
  }


  type ShopOnManufacturerGetPayload<S extends boolean | null | undefined | ShopOnManufacturerDefaultArgs> = $Result.GetResult<Prisma.$ShopOnManufacturerPayload, S>

  type ShopOnManufacturerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShopOnManufacturerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ShopOnManufacturerCountAggregateInputType | true
    }

  export interface ShopOnManufacturerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopOnManufacturer'], meta: { name: 'ShopOnManufacturer' } }
    /**
     * Find zero or one ShopOnManufacturer that matches the filter.
     * @param {ShopOnManufacturerFindUniqueArgs} args - Arguments to find a ShopOnManufacturer
     * @example
     * // Get one ShopOnManufacturer
     * const shopOnManufacturer = await prisma.shopOnManufacturer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShopOnManufacturerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShopOnManufacturerFindUniqueArgs<ExtArgs>>
    ): Prisma__ShopOnManufacturerClient<$Result.GetResult<Prisma.$ShopOnManufacturerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ShopOnManufacturer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShopOnManufacturerFindUniqueOrThrowArgs} args - Arguments to find a ShopOnManufacturer
     * @example
     * // Get one ShopOnManufacturer
     * const shopOnManufacturer = await prisma.shopOnManufacturer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShopOnManufacturerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopOnManufacturerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShopOnManufacturerClient<$Result.GetResult<Prisma.$ShopOnManufacturerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ShopOnManufacturer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOnManufacturerFindFirstArgs} args - Arguments to find a ShopOnManufacturer
     * @example
     * // Get one ShopOnManufacturer
     * const shopOnManufacturer = await prisma.shopOnManufacturer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShopOnManufacturerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopOnManufacturerFindFirstArgs<ExtArgs>>
    ): Prisma__ShopOnManufacturerClient<$Result.GetResult<Prisma.$ShopOnManufacturerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ShopOnManufacturer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOnManufacturerFindFirstOrThrowArgs} args - Arguments to find a ShopOnManufacturer
     * @example
     * // Get one ShopOnManufacturer
     * const shopOnManufacturer = await prisma.shopOnManufacturer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShopOnManufacturerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopOnManufacturerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShopOnManufacturerClient<$Result.GetResult<Prisma.$ShopOnManufacturerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ShopOnManufacturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOnManufacturerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopOnManufacturers
     * const shopOnManufacturers = await prisma.shopOnManufacturer.findMany()
     * 
     * // Get first 10 ShopOnManufacturers
     * const shopOnManufacturers = await prisma.shopOnManufacturer.findMany({ take: 10 })
     * 
     * // Only select the `shopId`
     * const shopOnManufacturerWithShopIdOnly = await prisma.shopOnManufacturer.findMany({ select: { shopId: true } })
     * 
    **/
    findMany<T extends ShopOnManufacturerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopOnManufacturerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopOnManufacturerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ShopOnManufacturer.
     * @param {ShopOnManufacturerCreateArgs} args - Arguments to create a ShopOnManufacturer.
     * @example
     * // Create one ShopOnManufacturer
     * const ShopOnManufacturer = await prisma.shopOnManufacturer.create({
     *   data: {
     *     // ... data to create a ShopOnManufacturer
     *   }
     * })
     * 
    **/
    create<T extends ShopOnManufacturerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopOnManufacturerCreateArgs<ExtArgs>>
    ): Prisma__ShopOnManufacturerClient<$Result.GetResult<Prisma.$ShopOnManufacturerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a ShopOnManufacturer.
     * @param {ShopOnManufacturerDeleteArgs} args - Arguments to delete one ShopOnManufacturer.
     * @example
     * // Delete one ShopOnManufacturer
     * const ShopOnManufacturer = await prisma.shopOnManufacturer.delete({
     *   where: {
     *     // ... filter to delete one ShopOnManufacturer
     *   }
     * })
     * 
    **/
    delete<T extends ShopOnManufacturerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShopOnManufacturerDeleteArgs<ExtArgs>>
    ): Prisma__ShopOnManufacturerClient<$Result.GetResult<Prisma.$ShopOnManufacturerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ShopOnManufacturer.
     * @param {ShopOnManufacturerUpdateArgs} args - Arguments to update one ShopOnManufacturer.
     * @example
     * // Update one ShopOnManufacturer
     * const shopOnManufacturer = await prisma.shopOnManufacturer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShopOnManufacturerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopOnManufacturerUpdateArgs<ExtArgs>>
    ): Prisma__ShopOnManufacturerClient<$Result.GetResult<Prisma.$ShopOnManufacturerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ShopOnManufacturers.
     * @param {ShopOnManufacturerDeleteManyArgs} args - Arguments to filter ShopOnManufacturers to delete.
     * @example
     * // Delete a few ShopOnManufacturers
     * const { count } = await prisma.shopOnManufacturer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShopOnManufacturerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopOnManufacturerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopOnManufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOnManufacturerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopOnManufacturers
     * const shopOnManufacturer = await prisma.shopOnManufacturer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShopOnManufacturerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShopOnManufacturerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopOnManufacturer.
     * @param {ShopOnManufacturerUpsertArgs} args - Arguments to update or create a ShopOnManufacturer.
     * @example
     * // Update or create a ShopOnManufacturer
     * const shopOnManufacturer = await prisma.shopOnManufacturer.upsert({
     *   create: {
     *     // ... data to create a ShopOnManufacturer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopOnManufacturer we want to update
     *   }
     * })
    **/
    upsert<T extends ShopOnManufacturerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShopOnManufacturerUpsertArgs<ExtArgs>>
    ): Prisma__ShopOnManufacturerClient<$Result.GetResult<Prisma.$ShopOnManufacturerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ShopOnManufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOnManufacturerCountArgs} args - Arguments to filter ShopOnManufacturers to count.
     * @example
     * // Count the number of ShopOnManufacturers
     * const count = await prisma.shopOnManufacturer.count({
     *   where: {
     *     // ... the filter for the ShopOnManufacturers we want to count
     *   }
     * })
    **/
    count<T extends ShopOnManufacturerCountArgs>(
      args?: Subset<T, ShopOnManufacturerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopOnManufacturerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopOnManufacturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOnManufacturerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopOnManufacturerAggregateArgs>(args: Subset<T, ShopOnManufacturerAggregateArgs>): Prisma.PrismaPromise<GetShopOnManufacturerAggregateType<T>>

    /**
     * Group by ShopOnManufacturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOnManufacturerGroupByArgs} args - Group by arguments.
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
      T extends ShopOnManufacturerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopOnManufacturerGroupByArgs['orderBy'] }
        : { orderBy?: ShopOnManufacturerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopOnManufacturerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopOnManufacturerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopOnManufacturer model
   */
  readonly fields: ShopOnManufacturerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopOnManufacturer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopOnManufacturerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    manufacturer<T extends ManufacturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManufacturerDefaultArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ShopOnManufacturer model
   */ 
  interface ShopOnManufacturerFieldRefs {
    readonly shopId: FieldRef<"ShopOnManufacturer", 'String'>
    readonly manufacturerId: FieldRef<"ShopOnManufacturer", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ShopOnManufacturer findUnique
   */
  export type ShopOnManufacturerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOnManufacturer
     */
    select?: ShopOnManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopOnManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which ShopOnManufacturer to fetch.
     */
    where: ShopOnManufacturerWhereUniqueInput
  }


  /**
   * ShopOnManufacturer findUniqueOrThrow
   */
  export type ShopOnManufacturerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOnManufacturer
     */
    select?: ShopOnManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopOnManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which ShopOnManufacturer to fetch.
     */
    where: ShopOnManufacturerWhereUniqueInput
  }


  /**
   * ShopOnManufacturer findFirst
   */
  export type ShopOnManufacturerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOnManufacturer
     */
    select?: ShopOnManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopOnManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which ShopOnManufacturer to fetch.
     */
    where?: ShopOnManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopOnManufacturers to fetch.
     */
    orderBy?: ShopOnManufacturerOrderByWithRelationInput | ShopOnManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopOnManufacturers.
     */
    cursor?: ShopOnManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopOnManufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopOnManufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopOnManufacturers.
     */
    distinct?: ShopOnManufacturerScalarFieldEnum | ShopOnManufacturerScalarFieldEnum[]
  }


  /**
   * ShopOnManufacturer findFirstOrThrow
   */
  export type ShopOnManufacturerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOnManufacturer
     */
    select?: ShopOnManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopOnManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which ShopOnManufacturer to fetch.
     */
    where?: ShopOnManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopOnManufacturers to fetch.
     */
    orderBy?: ShopOnManufacturerOrderByWithRelationInput | ShopOnManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopOnManufacturers.
     */
    cursor?: ShopOnManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopOnManufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopOnManufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopOnManufacturers.
     */
    distinct?: ShopOnManufacturerScalarFieldEnum | ShopOnManufacturerScalarFieldEnum[]
  }


  /**
   * ShopOnManufacturer findMany
   */
  export type ShopOnManufacturerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOnManufacturer
     */
    select?: ShopOnManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopOnManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which ShopOnManufacturers to fetch.
     */
    where?: ShopOnManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopOnManufacturers to fetch.
     */
    orderBy?: ShopOnManufacturerOrderByWithRelationInput | ShopOnManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopOnManufacturers.
     */
    cursor?: ShopOnManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopOnManufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopOnManufacturers.
     */
    skip?: number
    distinct?: ShopOnManufacturerScalarFieldEnum | ShopOnManufacturerScalarFieldEnum[]
  }


  /**
   * ShopOnManufacturer create
   */
  export type ShopOnManufacturerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOnManufacturer
     */
    select?: ShopOnManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopOnManufacturerInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopOnManufacturer.
     */
    data: XOR<ShopOnManufacturerCreateInput, ShopOnManufacturerUncheckedCreateInput>
  }


  /**
   * ShopOnManufacturer update
   */
  export type ShopOnManufacturerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOnManufacturer
     */
    select?: ShopOnManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopOnManufacturerInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopOnManufacturer.
     */
    data: XOR<ShopOnManufacturerUpdateInput, ShopOnManufacturerUncheckedUpdateInput>
    /**
     * Choose, which ShopOnManufacturer to update.
     */
    where: ShopOnManufacturerWhereUniqueInput
  }


  /**
   * ShopOnManufacturer updateMany
   */
  export type ShopOnManufacturerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopOnManufacturers.
     */
    data: XOR<ShopOnManufacturerUpdateManyMutationInput, ShopOnManufacturerUncheckedUpdateManyInput>
    /**
     * Filter which ShopOnManufacturers to update
     */
    where?: ShopOnManufacturerWhereInput
  }


  /**
   * ShopOnManufacturer upsert
   */
  export type ShopOnManufacturerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOnManufacturer
     */
    select?: ShopOnManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopOnManufacturerInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopOnManufacturer to update in case it exists.
     */
    where: ShopOnManufacturerWhereUniqueInput
    /**
     * In case the ShopOnManufacturer found by the `where` argument doesn't exist, create a new ShopOnManufacturer with this data.
     */
    create: XOR<ShopOnManufacturerCreateInput, ShopOnManufacturerUncheckedCreateInput>
    /**
     * In case the ShopOnManufacturer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopOnManufacturerUpdateInput, ShopOnManufacturerUncheckedUpdateInput>
  }


  /**
   * ShopOnManufacturer delete
   */
  export type ShopOnManufacturerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOnManufacturer
     */
    select?: ShopOnManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopOnManufacturerInclude<ExtArgs> | null
    /**
     * Filter which ShopOnManufacturer to delete.
     */
    where: ShopOnManufacturerWhereUniqueInput
  }


  /**
   * ShopOnManufacturer deleteMany
   */
  export type ShopOnManufacturerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopOnManufacturers to delete
     */
    where?: ShopOnManufacturerWhereInput
  }


  /**
   * ShopOnManufacturer without action
   */
  export type ShopOnManufacturerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOnManufacturer
     */
    select?: ShopOnManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopOnManufacturerInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categories?: boolean | Product$categoriesArgs<ExtArgs>
    manufacturers?: boolean | Product$manufacturersArgs<ExtArgs>
    orderItem?: boolean | Product$orderItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Product$categoriesArgs<ExtArgs>
    manufacturers?: boolean | Product$manufacturersArgs<ExtArgs>
    orderItem?: boolean | Product$orderItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      categories: Prisma.$ProductOnProductCategoryPayload<ExtArgs>[]
      manufacturers: Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>[]
      orderItem: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    categories<T extends Product$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOnProductCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    manufacturers<T extends Product$manufacturersArgs<ExtArgs> = {}>(args?: Subset<T, Product$manufacturersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    orderItem<T extends Product$orderItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.categories
   */
  export type Product$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnProductCategory
     */
    select?: ProductOnProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOnProductCategoryInclude<ExtArgs> | null
    where?: ProductOnProductCategoryWhereInput
    orderBy?: ProductOnProductCategoryOrderByWithRelationInput | ProductOnProductCategoryOrderByWithRelationInput[]
    cursor?: ProductOnProductCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOnProductCategoryScalarFieldEnum | ProductOnProductCategoryScalarFieldEnum[]
  }


  /**
   * Product.manufacturers
   */
  export type Product$manufacturersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerHandlingProducts
     */
    select?: ManufacturerHandlingProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerHandlingProductsInclude<ExtArgs> | null
    where?: ManufacturerHandlingProductsWhereInput
    orderBy?: ManufacturerHandlingProductsOrderByWithRelationInput | ManufacturerHandlingProductsOrderByWithRelationInput[]
    cursor?: ManufacturerHandlingProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManufacturerHandlingProductsScalarFieldEnum | ManufacturerHandlingProductsScalarFieldEnum[]
  }


  /**
   * Product.orderItem
   */
  export type Product$orderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model ManufacturerHandlingProducts
   */

  export type AggregateManufacturerHandlingProducts = {
    _count: ManufacturerHandlingProductsCountAggregateOutputType | null
    _avg: ManufacturerHandlingProductsAvgAggregateOutputType | null
    _sum: ManufacturerHandlingProductsSumAggregateOutputType | null
    _min: ManufacturerHandlingProductsMinAggregateOutputType | null
    _max: ManufacturerHandlingProductsMaxAggregateOutputType | null
  }

  export type ManufacturerHandlingProductsAvgAggregateOutputType = {
    id: number | null
    stock: number | null
    price: number | null
  }

  export type ManufacturerHandlingProductsSumAggregateOutputType = {
    id: number | null
    stock: number | null
    price: number | null
  }

  export type ManufacturerHandlingProductsMinAggregateOutputType = {
    id: number | null
    stock: number | null
    price: number | null
    productId: string | null
    manufacturerId: string | null
  }

  export type ManufacturerHandlingProductsMaxAggregateOutputType = {
    id: number | null
    stock: number | null
    price: number | null
    productId: string | null
    manufacturerId: string | null
  }

  export type ManufacturerHandlingProductsCountAggregateOutputType = {
    id: number
    stock: number
    price: number
    productId: number
    manufacturerId: number
    _all: number
  }


  export type ManufacturerHandlingProductsAvgAggregateInputType = {
    id?: true
    stock?: true
    price?: true
  }

  export type ManufacturerHandlingProductsSumAggregateInputType = {
    id?: true
    stock?: true
    price?: true
  }

  export type ManufacturerHandlingProductsMinAggregateInputType = {
    id?: true
    stock?: true
    price?: true
    productId?: true
    manufacturerId?: true
  }

  export type ManufacturerHandlingProductsMaxAggregateInputType = {
    id?: true
    stock?: true
    price?: true
    productId?: true
    manufacturerId?: true
  }

  export type ManufacturerHandlingProductsCountAggregateInputType = {
    id?: true
    stock?: true
    price?: true
    productId?: true
    manufacturerId?: true
    _all?: true
  }

  export type ManufacturerHandlingProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManufacturerHandlingProducts to aggregate.
     */
    where?: ManufacturerHandlingProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManufacturerHandlingProducts to fetch.
     */
    orderBy?: ManufacturerHandlingProductsOrderByWithRelationInput | ManufacturerHandlingProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManufacturerHandlingProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManufacturerHandlingProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManufacturerHandlingProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManufacturerHandlingProducts
    **/
    _count?: true | ManufacturerHandlingProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManufacturerHandlingProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManufacturerHandlingProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManufacturerHandlingProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManufacturerHandlingProductsMaxAggregateInputType
  }

  export type GetManufacturerHandlingProductsAggregateType<T extends ManufacturerHandlingProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateManufacturerHandlingProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManufacturerHandlingProducts[P]>
      : GetScalarType<T[P], AggregateManufacturerHandlingProducts[P]>
  }




  export type ManufacturerHandlingProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacturerHandlingProductsWhereInput
    orderBy?: ManufacturerHandlingProductsOrderByWithAggregationInput | ManufacturerHandlingProductsOrderByWithAggregationInput[]
    by: ManufacturerHandlingProductsScalarFieldEnum[] | ManufacturerHandlingProductsScalarFieldEnum
    having?: ManufacturerHandlingProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManufacturerHandlingProductsCountAggregateInputType | true
    _avg?: ManufacturerHandlingProductsAvgAggregateInputType
    _sum?: ManufacturerHandlingProductsSumAggregateInputType
    _min?: ManufacturerHandlingProductsMinAggregateInputType
    _max?: ManufacturerHandlingProductsMaxAggregateInputType
  }

  export type ManufacturerHandlingProductsGroupByOutputType = {
    id: number
    stock: number
    price: number
    productId: string
    manufacturerId: string
    _count: ManufacturerHandlingProductsCountAggregateOutputType | null
    _avg: ManufacturerHandlingProductsAvgAggregateOutputType | null
    _sum: ManufacturerHandlingProductsSumAggregateOutputType | null
    _min: ManufacturerHandlingProductsMinAggregateOutputType | null
    _max: ManufacturerHandlingProductsMaxAggregateOutputType | null
  }

  type GetManufacturerHandlingProductsGroupByPayload<T extends ManufacturerHandlingProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManufacturerHandlingProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManufacturerHandlingProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManufacturerHandlingProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ManufacturerHandlingProductsGroupByOutputType[P]>
        }
      >
    >


  export type ManufacturerHandlingProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stock?: boolean
    price?: boolean
    productId?: boolean
    manufacturerId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    manufacturer?: boolean | ManufacturerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manufacturerHandlingProducts"]>

  export type ManufacturerHandlingProductsSelectScalar = {
    id?: boolean
    stock?: boolean
    price?: boolean
    productId?: boolean
    manufacturerId?: boolean
  }

  export type ManufacturerHandlingProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    manufacturer?: boolean | ManufacturerDefaultArgs<ExtArgs>
  }


  export type $ManufacturerHandlingProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManufacturerHandlingProducts"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      manufacturer: Prisma.$ManufacturerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stock: number
      price: number
      productId: string
      manufacturerId: string
    }, ExtArgs["result"]["manufacturerHandlingProducts"]>
    composites: {}
  }


  type ManufacturerHandlingProductsGetPayload<S extends boolean | null | undefined | ManufacturerHandlingProductsDefaultArgs> = $Result.GetResult<Prisma.$ManufacturerHandlingProductsPayload, S>

  type ManufacturerHandlingProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ManufacturerHandlingProductsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ManufacturerHandlingProductsCountAggregateInputType | true
    }

  export interface ManufacturerHandlingProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManufacturerHandlingProducts'], meta: { name: 'ManufacturerHandlingProducts' } }
    /**
     * Find zero or one ManufacturerHandlingProducts that matches the filter.
     * @param {ManufacturerHandlingProductsFindUniqueArgs} args - Arguments to find a ManufacturerHandlingProducts
     * @example
     * // Get one ManufacturerHandlingProducts
     * const manufacturerHandlingProducts = await prisma.manufacturerHandlingProducts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ManufacturerHandlingProductsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ManufacturerHandlingProductsFindUniqueArgs<ExtArgs>>
    ): Prisma__ManufacturerHandlingProductsClient<$Result.GetResult<Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ManufacturerHandlingProducts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ManufacturerHandlingProductsFindUniqueOrThrowArgs} args - Arguments to find a ManufacturerHandlingProducts
     * @example
     * // Get one ManufacturerHandlingProducts
     * const manufacturerHandlingProducts = await prisma.manufacturerHandlingProducts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ManufacturerHandlingProductsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManufacturerHandlingProductsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ManufacturerHandlingProductsClient<$Result.GetResult<Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ManufacturerHandlingProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerHandlingProductsFindFirstArgs} args - Arguments to find a ManufacturerHandlingProducts
     * @example
     * // Get one ManufacturerHandlingProducts
     * const manufacturerHandlingProducts = await prisma.manufacturerHandlingProducts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ManufacturerHandlingProductsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ManufacturerHandlingProductsFindFirstArgs<ExtArgs>>
    ): Prisma__ManufacturerHandlingProductsClient<$Result.GetResult<Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ManufacturerHandlingProducts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerHandlingProductsFindFirstOrThrowArgs} args - Arguments to find a ManufacturerHandlingProducts
     * @example
     * // Get one ManufacturerHandlingProducts
     * const manufacturerHandlingProducts = await prisma.manufacturerHandlingProducts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ManufacturerHandlingProductsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManufacturerHandlingProductsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ManufacturerHandlingProductsClient<$Result.GetResult<Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ManufacturerHandlingProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerHandlingProductsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManufacturerHandlingProducts
     * const manufacturerHandlingProducts = await prisma.manufacturerHandlingProducts.findMany()
     * 
     * // Get first 10 ManufacturerHandlingProducts
     * const manufacturerHandlingProducts = await prisma.manufacturerHandlingProducts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manufacturerHandlingProductsWithIdOnly = await prisma.manufacturerHandlingProducts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ManufacturerHandlingProductsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManufacturerHandlingProductsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ManufacturerHandlingProducts.
     * @param {ManufacturerHandlingProductsCreateArgs} args - Arguments to create a ManufacturerHandlingProducts.
     * @example
     * // Create one ManufacturerHandlingProducts
     * const ManufacturerHandlingProducts = await prisma.manufacturerHandlingProducts.create({
     *   data: {
     *     // ... data to create a ManufacturerHandlingProducts
     *   }
     * })
     * 
    **/
    create<T extends ManufacturerHandlingProductsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ManufacturerHandlingProductsCreateArgs<ExtArgs>>
    ): Prisma__ManufacturerHandlingProductsClient<$Result.GetResult<Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a ManufacturerHandlingProducts.
     * @param {ManufacturerHandlingProductsDeleteArgs} args - Arguments to delete one ManufacturerHandlingProducts.
     * @example
     * // Delete one ManufacturerHandlingProducts
     * const ManufacturerHandlingProducts = await prisma.manufacturerHandlingProducts.delete({
     *   where: {
     *     // ... filter to delete one ManufacturerHandlingProducts
     *   }
     * })
     * 
    **/
    delete<T extends ManufacturerHandlingProductsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ManufacturerHandlingProductsDeleteArgs<ExtArgs>>
    ): Prisma__ManufacturerHandlingProductsClient<$Result.GetResult<Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ManufacturerHandlingProducts.
     * @param {ManufacturerHandlingProductsUpdateArgs} args - Arguments to update one ManufacturerHandlingProducts.
     * @example
     * // Update one ManufacturerHandlingProducts
     * const manufacturerHandlingProducts = await prisma.manufacturerHandlingProducts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ManufacturerHandlingProductsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ManufacturerHandlingProductsUpdateArgs<ExtArgs>>
    ): Prisma__ManufacturerHandlingProductsClient<$Result.GetResult<Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ManufacturerHandlingProducts.
     * @param {ManufacturerHandlingProductsDeleteManyArgs} args - Arguments to filter ManufacturerHandlingProducts to delete.
     * @example
     * // Delete a few ManufacturerHandlingProducts
     * const { count } = await prisma.manufacturerHandlingProducts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ManufacturerHandlingProductsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManufacturerHandlingProductsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManufacturerHandlingProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerHandlingProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManufacturerHandlingProducts
     * const manufacturerHandlingProducts = await prisma.manufacturerHandlingProducts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ManufacturerHandlingProductsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ManufacturerHandlingProductsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ManufacturerHandlingProducts.
     * @param {ManufacturerHandlingProductsUpsertArgs} args - Arguments to update or create a ManufacturerHandlingProducts.
     * @example
     * // Update or create a ManufacturerHandlingProducts
     * const manufacturerHandlingProducts = await prisma.manufacturerHandlingProducts.upsert({
     *   create: {
     *     // ... data to create a ManufacturerHandlingProducts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManufacturerHandlingProducts we want to update
     *   }
     * })
    **/
    upsert<T extends ManufacturerHandlingProductsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ManufacturerHandlingProductsUpsertArgs<ExtArgs>>
    ): Prisma__ManufacturerHandlingProductsClient<$Result.GetResult<Prisma.$ManufacturerHandlingProductsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ManufacturerHandlingProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerHandlingProductsCountArgs} args - Arguments to filter ManufacturerHandlingProducts to count.
     * @example
     * // Count the number of ManufacturerHandlingProducts
     * const count = await prisma.manufacturerHandlingProducts.count({
     *   where: {
     *     // ... the filter for the ManufacturerHandlingProducts we want to count
     *   }
     * })
    **/
    count<T extends ManufacturerHandlingProductsCountArgs>(
      args?: Subset<T, ManufacturerHandlingProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManufacturerHandlingProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManufacturerHandlingProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerHandlingProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManufacturerHandlingProductsAggregateArgs>(args: Subset<T, ManufacturerHandlingProductsAggregateArgs>): Prisma.PrismaPromise<GetManufacturerHandlingProductsAggregateType<T>>

    /**
     * Group by ManufacturerHandlingProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerHandlingProductsGroupByArgs} args - Group by arguments.
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
      T extends ManufacturerHandlingProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManufacturerHandlingProductsGroupByArgs['orderBy'] }
        : { orderBy?: ManufacturerHandlingProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManufacturerHandlingProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManufacturerHandlingProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManufacturerHandlingProducts model
   */
  readonly fields: ManufacturerHandlingProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManufacturerHandlingProducts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManufacturerHandlingProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    manufacturer<T extends ManufacturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManufacturerDefaultArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ManufacturerHandlingProducts model
   */ 
  interface ManufacturerHandlingProductsFieldRefs {
    readonly id: FieldRef<"ManufacturerHandlingProducts", 'Int'>
    readonly stock: FieldRef<"ManufacturerHandlingProducts", 'Int'>
    readonly price: FieldRef<"ManufacturerHandlingProducts", 'Int'>
    readonly productId: FieldRef<"ManufacturerHandlingProducts", 'String'>
    readonly manufacturerId: FieldRef<"ManufacturerHandlingProducts", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ManufacturerHandlingProducts findUnique
   */
  export type ManufacturerHandlingProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerHandlingProducts
     */
    select?: ManufacturerHandlingProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerHandlingProductsInclude<ExtArgs> | null
    /**
     * Filter, which ManufacturerHandlingProducts to fetch.
     */
    where: ManufacturerHandlingProductsWhereUniqueInput
  }


  /**
   * ManufacturerHandlingProducts findUniqueOrThrow
   */
  export type ManufacturerHandlingProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerHandlingProducts
     */
    select?: ManufacturerHandlingProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerHandlingProductsInclude<ExtArgs> | null
    /**
     * Filter, which ManufacturerHandlingProducts to fetch.
     */
    where: ManufacturerHandlingProductsWhereUniqueInput
  }


  /**
   * ManufacturerHandlingProducts findFirst
   */
  export type ManufacturerHandlingProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerHandlingProducts
     */
    select?: ManufacturerHandlingProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerHandlingProductsInclude<ExtArgs> | null
    /**
     * Filter, which ManufacturerHandlingProducts to fetch.
     */
    where?: ManufacturerHandlingProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManufacturerHandlingProducts to fetch.
     */
    orderBy?: ManufacturerHandlingProductsOrderByWithRelationInput | ManufacturerHandlingProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManufacturerHandlingProducts.
     */
    cursor?: ManufacturerHandlingProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManufacturerHandlingProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManufacturerHandlingProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManufacturerHandlingProducts.
     */
    distinct?: ManufacturerHandlingProductsScalarFieldEnum | ManufacturerHandlingProductsScalarFieldEnum[]
  }


  /**
   * ManufacturerHandlingProducts findFirstOrThrow
   */
  export type ManufacturerHandlingProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerHandlingProducts
     */
    select?: ManufacturerHandlingProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerHandlingProductsInclude<ExtArgs> | null
    /**
     * Filter, which ManufacturerHandlingProducts to fetch.
     */
    where?: ManufacturerHandlingProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManufacturerHandlingProducts to fetch.
     */
    orderBy?: ManufacturerHandlingProductsOrderByWithRelationInput | ManufacturerHandlingProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManufacturerHandlingProducts.
     */
    cursor?: ManufacturerHandlingProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManufacturerHandlingProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManufacturerHandlingProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManufacturerHandlingProducts.
     */
    distinct?: ManufacturerHandlingProductsScalarFieldEnum | ManufacturerHandlingProductsScalarFieldEnum[]
  }


  /**
   * ManufacturerHandlingProducts findMany
   */
  export type ManufacturerHandlingProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerHandlingProducts
     */
    select?: ManufacturerHandlingProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerHandlingProductsInclude<ExtArgs> | null
    /**
     * Filter, which ManufacturerHandlingProducts to fetch.
     */
    where?: ManufacturerHandlingProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManufacturerHandlingProducts to fetch.
     */
    orderBy?: ManufacturerHandlingProductsOrderByWithRelationInput | ManufacturerHandlingProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManufacturerHandlingProducts.
     */
    cursor?: ManufacturerHandlingProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManufacturerHandlingProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManufacturerHandlingProducts.
     */
    skip?: number
    distinct?: ManufacturerHandlingProductsScalarFieldEnum | ManufacturerHandlingProductsScalarFieldEnum[]
  }


  /**
   * ManufacturerHandlingProducts create
   */
  export type ManufacturerHandlingProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerHandlingProducts
     */
    select?: ManufacturerHandlingProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerHandlingProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a ManufacturerHandlingProducts.
     */
    data: XOR<ManufacturerHandlingProductsCreateInput, ManufacturerHandlingProductsUncheckedCreateInput>
  }


  /**
   * ManufacturerHandlingProducts update
   */
  export type ManufacturerHandlingProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerHandlingProducts
     */
    select?: ManufacturerHandlingProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerHandlingProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a ManufacturerHandlingProducts.
     */
    data: XOR<ManufacturerHandlingProductsUpdateInput, ManufacturerHandlingProductsUncheckedUpdateInput>
    /**
     * Choose, which ManufacturerHandlingProducts to update.
     */
    where: ManufacturerHandlingProductsWhereUniqueInput
  }


  /**
   * ManufacturerHandlingProducts updateMany
   */
  export type ManufacturerHandlingProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManufacturerHandlingProducts.
     */
    data: XOR<ManufacturerHandlingProductsUpdateManyMutationInput, ManufacturerHandlingProductsUncheckedUpdateManyInput>
    /**
     * Filter which ManufacturerHandlingProducts to update
     */
    where?: ManufacturerHandlingProductsWhereInput
  }


  /**
   * ManufacturerHandlingProducts upsert
   */
  export type ManufacturerHandlingProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerHandlingProducts
     */
    select?: ManufacturerHandlingProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerHandlingProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the ManufacturerHandlingProducts to update in case it exists.
     */
    where: ManufacturerHandlingProductsWhereUniqueInput
    /**
     * In case the ManufacturerHandlingProducts found by the `where` argument doesn't exist, create a new ManufacturerHandlingProducts with this data.
     */
    create: XOR<ManufacturerHandlingProductsCreateInput, ManufacturerHandlingProductsUncheckedCreateInput>
    /**
     * In case the ManufacturerHandlingProducts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManufacturerHandlingProductsUpdateInput, ManufacturerHandlingProductsUncheckedUpdateInput>
  }


  /**
   * ManufacturerHandlingProducts delete
   */
  export type ManufacturerHandlingProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerHandlingProducts
     */
    select?: ManufacturerHandlingProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerHandlingProductsInclude<ExtArgs> | null
    /**
     * Filter which ManufacturerHandlingProducts to delete.
     */
    where: ManufacturerHandlingProductsWhereUniqueInput
  }


  /**
   * ManufacturerHandlingProducts deleteMany
   */
  export type ManufacturerHandlingProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManufacturerHandlingProducts to delete
     */
    where?: ManufacturerHandlingProductsWhereInput
  }


  /**
   * ManufacturerHandlingProducts without action
   */
  export type ManufacturerHandlingProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerHandlingProducts
     */
    select?: ManufacturerHandlingProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManufacturerHandlingProductsInclude<ExtArgs> | null
  }



  /**
   * Model ProductCategory
   */

  export type AggregateProductCategory = {
    _count: ProductCategoryCountAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  export type ProductCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProductCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategory to aggregate.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type GetProductCategoryAggregateType<T extends ProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategory[P]>
      : GetScalarType<T[P], AggregateProductCategory[P]>
  }




  export type ProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithAggregationInput | ProductCategoryOrderByWithAggregationInput[]
    by: ProductCategoryScalarFieldEnum[] | ProductCategoryScalarFieldEnum
    having?: ProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoryCountAggregateInputType | true
    _min?: ProductCategoryMinAggregateInputType
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type ProductCategoryGroupByOutputType = {
    id: string
    name: string
    _count: ProductCategoryCountAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  type GetProductCategoryGroupByPayload<T extends ProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | ProductCategory$productsArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductCategory$productsArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategory"
    objects: {
      products: Prisma.$ProductOnProductCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["productCategory"]>
    composites: {}
  }


  type ProductCategoryGetPayload<S extends boolean | null | undefined | ProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoryPayload, S>

  type ProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductCategoryCountAggregateInputType | true
    }

  export interface ProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategory'], meta: { name: 'ProductCategory' } }
    /**
     * Find zero or one ProductCategory that matches the filter.
     * @param {ProductCategoryFindUniqueArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategory.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductCategory.
     * @param {ProductCategoryCreateArgs} args - Arguments to create a ProductCategory.
     * @example
     * // Create one ProductCategory
     * const ProductCategory = await prisma.productCategory.create({
     *   data: {
     *     // ... data to create a ProductCategory
     *   }
     * })
     * 
    **/
    create<T extends ProductCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCategoryCreateArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a ProductCategory.
     * @param {ProductCategoryDeleteArgs} args - Arguments to delete one ProductCategory.
     * @example
     * // Delete one ProductCategory
     * const ProductCategory = await prisma.productCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory
     *   }
     * })
     * 
    **/
    delete<T extends ProductCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCategoryDeleteArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductCategory.
     * @param {ProductCategoryUpdateArgs} args - Arguments to update one ProductCategory.
     * @example
     * // Update one ProductCategory
     * const productCategory = await prisma.productCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCategoryUpdateArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoryDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductCategory.
     * @param {ProductCategoryUpsertArgs} args - Arguments to update or create a ProductCategory.
     * @example
     * // Update or create a ProductCategory
     * const productCategory = await prisma.productCategory.upsert({
     *   create: {
     *     // ... data to create a ProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory we want to update
     *   }
     * })
    **/
    upsert<T extends ProductCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCategoryUpsertArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategory.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryCountArgs>(
      args?: Subset<T, ProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductCategoryAggregateArgs>(args: Subset<T, ProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductCategoryAggregateType<T>>

    /**
     * Group by ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryGroupByArgs} args - Group by arguments.
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
      T extends ProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategory model
   */
  readonly fields: ProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends ProductCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOnProductCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductCategory model
   */ 
  interface ProductCategoryFieldRefs {
    readonly id: FieldRef<"ProductCategory", 'String'>
    readonly name: FieldRef<"ProductCategory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ProductCategory findUnique
   */
  export type ProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }


  /**
   * ProductCategory findUniqueOrThrow
   */
  export type ProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }


  /**
   * ProductCategory findFirst
   */
  export type ProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }


  /**
   * ProductCategory findFirstOrThrow
   */
  export type ProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }


  /**
   * ProductCategory findMany
   */
  export type ProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }


  /**
   * ProductCategory create
   */
  export type ProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategory.
     */
    data: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
  }


  /**
   * ProductCategory update
   */
  export type ProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategory.
     */
    data: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCategory to update.
     */
    where: ProductCategoryWhereUniqueInput
  }


  /**
   * ProductCategory updateMany
   */
  export type ProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
  }


  /**
   * ProductCategory upsert
   */
  export type ProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategory to update in case it exists.
     */
    where: ProductCategoryWhereUniqueInput
    /**
     * In case the ProductCategory found by the `where` argument doesn't exist, create a new ProductCategory with this data.
     */
    create: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
  }


  /**
   * ProductCategory delete
   */
  export type ProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductCategory to delete.
     */
    where: ProductCategoryWhereUniqueInput
  }


  /**
   * ProductCategory deleteMany
   */
  export type ProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoryWhereInput
  }


  /**
   * ProductCategory.products
   */
  export type ProductCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnProductCategory
     */
    select?: ProductOnProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOnProductCategoryInclude<ExtArgs> | null
    where?: ProductOnProductCategoryWhereInput
    orderBy?: ProductOnProductCategoryOrderByWithRelationInput | ProductOnProductCategoryOrderByWithRelationInput[]
    cursor?: ProductOnProductCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOnProductCategoryScalarFieldEnum | ProductOnProductCategoryScalarFieldEnum[]
  }


  /**
   * ProductCategory without action
   */
  export type ProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCategoryInclude<ExtArgs> | null
  }



  /**
   * Model ProductOnProductCategory
   */

  export type AggregateProductOnProductCategory = {
    _count: ProductOnProductCategoryCountAggregateOutputType | null
    _min: ProductOnProductCategoryMinAggregateOutputType | null
    _max: ProductOnProductCategoryMaxAggregateOutputType | null
  }

  export type ProductOnProductCategoryMinAggregateOutputType = {
    productId: string | null
    categoryId: string | null
  }

  export type ProductOnProductCategoryMaxAggregateOutputType = {
    productId: string | null
    categoryId: string | null
  }

  export type ProductOnProductCategoryCountAggregateOutputType = {
    productId: number
    categoryId: number
    _all: number
  }


  export type ProductOnProductCategoryMinAggregateInputType = {
    productId?: true
    categoryId?: true
  }

  export type ProductOnProductCategoryMaxAggregateInputType = {
    productId?: true
    categoryId?: true
  }

  export type ProductOnProductCategoryCountAggregateInputType = {
    productId?: true
    categoryId?: true
    _all?: true
  }

  export type ProductOnProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOnProductCategory to aggregate.
     */
    where?: ProductOnProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOnProductCategories to fetch.
     */
    orderBy?: ProductOnProductCategoryOrderByWithRelationInput | ProductOnProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductOnProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOnProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOnProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductOnProductCategories
    **/
    _count?: true | ProductOnProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductOnProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductOnProductCategoryMaxAggregateInputType
  }

  export type GetProductOnProductCategoryAggregateType<T extends ProductOnProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductOnProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductOnProductCategory[P]>
      : GetScalarType<T[P], AggregateProductOnProductCategory[P]>
  }




  export type ProductOnProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOnProductCategoryWhereInput
    orderBy?: ProductOnProductCategoryOrderByWithAggregationInput | ProductOnProductCategoryOrderByWithAggregationInput[]
    by: ProductOnProductCategoryScalarFieldEnum[] | ProductOnProductCategoryScalarFieldEnum
    having?: ProductOnProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductOnProductCategoryCountAggregateInputType | true
    _min?: ProductOnProductCategoryMinAggregateInputType
    _max?: ProductOnProductCategoryMaxAggregateInputType
  }

  export type ProductOnProductCategoryGroupByOutputType = {
    productId: string
    categoryId: string
    _count: ProductOnProductCategoryCountAggregateOutputType | null
    _min: ProductOnProductCategoryMinAggregateOutputType | null
    _max: ProductOnProductCategoryMaxAggregateOutputType | null
  }

  type GetProductOnProductCategoryGroupByPayload<T extends ProductOnProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductOnProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductOnProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductOnProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductOnProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductOnProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    categoryId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productOnProductCategory"]>

  export type ProductOnProductCategorySelectScalar = {
    productId?: boolean
    categoryId?: boolean
  }

  export type ProductOnProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }


  export type $ProductOnProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductOnProductCategory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      category: Prisma.$ProductCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: string
      categoryId: string
    }, ExtArgs["result"]["productOnProductCategory"]>
    composites: {}
  }


  type ProductOnProductCategoryGetPayload<S extends boolean | null | undefined | ProductOnProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductOnProductCategoryPayload, S>

  type ProductOnProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductOnProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductOnProductCategoryCountAggregateInputType | true
    }

  export interface ProductOnProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductOnProductCategory'], meta: { name: 'ProductOnProductCategory' } }
    /**
     * Find zero or one ProductOnProductCategory that matches the filter.
     * @param {ProductOnProductCategoryFindUniqueArgs} args - Arguments to find a ProductOnProductCategory
     * @example
     * // Get one ProductOnProductCategory
     * const productOnProductCategory = await prisma.productOnProductCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductOnProductCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOnProductCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductOnProductCategoryClient<$Result.GetResult<Prisma.$ProductOnProductCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductOnProductCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductOnProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductOnProductCategory
     * @example
     * // Get one ProductOnProductCategory
     * const productOnProductCategory = await prisma.productOnProductCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductOnProductCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOnProductCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductOnProductCategoryClient<$Result.GetResult<Prisma.$ProductOnProductCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductOnProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnProductCategoryFindFirstArgs} args - Arguments to find a ProductOnProductCategory
     * @example
     * // Get one ProductOnProductCategory
     * const productOnProductCategory = await prisma.productOnProductCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductOnProductCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOnProductCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__ProductOnProductCategoryClient<$Result.GetResult<Prisma.$ProductOnProductCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductOnProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnProductCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductOnProductCategory
     * @example
     * // Get one ProductOnProductCategory
     * const productOnProductCategory = await prisma.productOnProductCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductOnProductCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOnProductCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductOnProductCategoryClient<$Result.GetResult<Prisma.$ProductOnProductCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductOnProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnProductCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductOnProductCategories
     * const productOnProductCategories = await prisma.productOnProductCategory.findMany()
     * 
     * // Get first 10 ProductOnProductCategories
     * const productOnProductCategories = await prisma.productOnProductCategory.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productOnProductCategoryWithProductIdOnly = await prisma.productOnProductCategory.findMany({ select: { productId: true } })
     * 
    **/
    findMany<T extends ProductOnProductCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOnProductCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOnProductCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductOnProductCategory.
     * @param {ProductOnProductCategoryCreateArgs} args - Arguments to create a ProductOnProductCategory.
     * @example
     * // Create one ProductOnProductCategory
     * const ProductOnProductCategory = await prisma.productOnProductCategory.create({
     *   data: {
     *     // ... data to create a ProductOnProductCategory
     *   }
     * })
     * 
    **/
    create<T extends ProductOnProductCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOnProductCategoryCreateArgs<ExtArgs>>
    ): Prisma__ProductOnProductCategoryClient<$Result.GetResult<Prisma.$ProductOnProductCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a ProductOnProductCategory.
     * @param {ProductOnProductCategoryDeleteArgs} args - Arguments to delete one ProductOnProductCategory.
     * @example
     * // Delete one ProductOnProductCategory
     * const ProductOnProductCategory = await prisma.productOnProductCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductOnProductCategory
     *   }
     * })
     * 
    **/
    delete<T extends ProductOnProductCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOnProductCategoryDeleteArgs<ExtArgs>>
    ): Prisma__ProductOnProductCategoryClient<$Result.GetResult<Prisma.$ProductOnProductCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductOnProductCategory.
     * @param {ProductOnProductCategoryUpdateArgs} args - Arguments to update one ProductOnProductCategory.
     * @example
     * // Update one ProductOnProductCategory
     * const productOnProductCategory = await prisma.productOnProductCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductOnProductCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOnProductCategoryUpdateArgs<ExtArgs>>
    ): Prisma__ProductOnProductCategoryClient<$Result.GetResult<Prisma.$ProductOnProductCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductOnProductCategories.
     * @param {ProductOnProductCategoryDeleteManyArgs} args - Arguments to filter ProductOnProductCategories to delete.
     * @example
     * // Delete a few ProductOnProductCategories
     * const { count } = await prisma.productOnProductCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductOnProductCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOnProductCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductOnProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductOnProductCategories
     * const productOnProductCategory = await prisma.productOnProductCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductOnProductCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOnProductCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductOnProductCategory.
     * @param {ProductOnProductCategoryUpsertArgs} args - Arguments to update or create a ProductOnProductCategory.
     * @example
     * // Update or create a ProductOnProductCategory
     * const productOnProductCategory = await prisma.productOnProductCategory.upsert({
     *   create: {
     *     // ... data to create a ProductOnProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductOnProductCategory we want to update
     *   }
     * })
    **/
    upsert<T extends ProductOnProductCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOnProductCategoryUpsertArgs<ExtArgs>>
    ): Prisma__ProductOnProductCategoryClient<$Result.GetResult<Prisma.$ProductOnProductCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductOnProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnProductCategoryCountArgs} args - Arguments to filter ProductOnProductCategories to count.
     * @example
     * // Count the number of ProductOnProductCategories
     * const count = await prisma.productOnProductCategory.count({
     *   where: {
     *     // ... the filter for the ProductOnProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductOnProductCategoryCountArgs>(
      args?: Subset<T, ProductOnProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductOnProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductOnProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductOnProductCategoryAggregateArgs>(args: Subset<T, ProductOnProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductOnProductCategoryAggregateType<T>>

    /**
     * Group by ProductOnProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnProductCategoryGroupByArgs} args - Group by arguments.
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
      T extends ProductOnProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductOnProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductOnProductCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductOnProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductOnProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductOnProductCategory model
   */
  readonly fields: ProductOnProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductOnProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductOnProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends ProductCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategoryDefaultArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductOnProductCategory model
   */ 
  interface ProductOnProductCategoryFieldRefs {
    readonly productId: FieldRef<"ProductOnProductCategory", 'String'>
    readonly categoryId: FieldRef<"ProductOnProductCategory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ProductOnProductCategory findUnique
   */
  export type ProductOnProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnProductCategory
     */
    select?: ProductOnProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOnProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductOnProductCategory to fetch.
     */
    where: ProductOnProductCategoryWhereUniqueInput
  }


  /**
   * ProductOnProductCategory findUniqueOrThrow
   */
  export type ProductOnProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnProductCategory
     */
    select?: ProductOnProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOnProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductOnProductCategory to fetch.
     */
    where: ProductOnProductCategoryWhereUniqueInput
  }


  /**
   * ProductOnProductCategory findFirst
   */
  export type ProductOnProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnProductCategory
     */
    select?: ProductOnProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOnProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductOnProductCategory to fetch.
     */
    where?: ProductOnProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOnProductCategories to fetch.
     */
    orderBy?: ProductOnProductCategoryOrderByWithRelationInput | ProductOnProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOnProductCategories.
     */
    cursor?: ProductOnProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOnProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOnProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOnProductCategories.
     */
    distinct?: ProductOnProductCategoryScalarFieldEnum | ProductOnProductCategoryScalarFieldEnum[]
  }


  /**
   * ProductOnProductCategory findFirstOrThrow
   */
  export type ProductOnProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnProductCategory
     */
    select?: ProductOnProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOnProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductOnProductCategory to fetch.
     */
    where?: ProductOnProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOnProductCategories to fetch.
     */
    orderBy?: ProductOnProductCategoryOrderByWithRelationInput | ProductOnProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOnProductCategories.
     */
    cursor?: ProductOnProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOnProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOnProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOnProductCategories.
     */
    distinct?: ProductOnProductCategoryScalarFieldEnum | ProductOnProductCategoryScalarFieldEnum[]
  }


  /**
   * ProductOnProductCategory findMany
   */
  export type ProductOnProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnProductCategory
     */
    select?: ProductOnProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOnProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductOnProductCategories to fetch.
     */
    where?: ProductOnProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOnProductCategories to fetch.
     */
    orderBy?: ProductOnProductCategoryOrderByWithRelationInput | ProductOnProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductOnProductCategories.
     */
    cursor?: ProductOnProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOnProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOnProductCategories.
     */
    skip?: number
    distinct?: ProductOnProductCategoryScalarFieldEnum | ProductOnProductCategoryScalarFieldEnum[]
  }


  /**
   * ProductOnProductCategory create
   */
  export type ProductOnProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnProductCategory
     */
    select?: ProductOnProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOnProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductOnProductCategory.
     */
    data: XOR<ProductOnProductCategoryCreateInput, ProductOnProductCategoryUncheckedCreateInput>
  }


  /**
   * ProductOnProductCategory update
   */
  export type ProductOnProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnProductCategory
     */
    select?: ProductOnProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOnProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductOnProductCategory.
     */
    data: XOR<ProductOnProductCategoryUpdateInput, ProductOnProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductOnProductCategory to update.
     */
    where: ProductOnProductCategoryWhereUniqueInput
  }


  /**
   * ProductOnProductCategory updateMany
   */
  export type ProductOnProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductOnProductCategories.
     */
    data: XOR<ProductOnProductCategoryUpdateManyMutationInput, ProductOnProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductOnProductCategories to update
     */
    where?: ProductOnProductCategoryWhereInput
  }


  /**
   * ProductOnProductCategory upsert
   */
  export type ProductOnProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnProductCategory
     */
    select?: ProductOnProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOnProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductOnProductCategory to update in case it exists.
     */
    where: ProductOnProductCategoryWhereUniqueInput
    /**
     * In case the ProductOnProductCategory found by the `where` argument doesn't exist, create a new ProductOnProductCategory with this data.
     */
    create: XOR<ProductOnProductCategoryCreateInput, ProductOnProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductOnProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductOnProductCategoryUpdateInput, ProductOnProductCategoryUncheckedUpdateInput>
  }


  /**
   * ProductOnProductCategory delete
   */
  export type ProductOnProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnProductCategory
     */
    select?: ProductOnProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOnProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductOnProductCategory to delete.
     */
    where: ProductOnProductCategoryWhereUniqueInput
  }


  /**
   * ProductOnProductCategory deleteMany
   */
  export type ProductOnProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOnProductCategories to delete
     */
    where?: ProductOnProductCategoryWhereInput
  }


  /**
   * ProductOnProductCategory without action
   */
  export type ProductOnProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnProductCategory
     */
    select?: ProductOnProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOnProductCategoryInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    manufacturerId: string | null
    approved: boolean | null
    orderAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    manufacturerId: string | null
    approved: boolean | null
    orderAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    shopId: number
    manufacturerId: number
    approved: number
    orderAt: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    shopId?: true
    manufacturerId?: true
    approved?: true
    orderAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    shopId?: true
    manufacturerId?: true
    approved?: true
    orderAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    shopId?: true
    manufacturerId?: true
    approved?: true
    orderAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    shopId: string
    manufacturerId: string
    approved: boolean
    orderAt: Date
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    manufacturerId?: boolean
    approved?: boolean
    orderAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    manufacturer?: boolean | ManufacturerDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    shopId?: boolean
    manufacturerId?: boolean
    approved?: boolean
    orderAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    manufacturer?: boolean | ManufacturerDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      manufacturer: Prisma.$ManufacturerPayload<ExtArgs>
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      manufacturerId: string
      approved: boolean
      orderAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    manufacturer<T extends ManufacturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManufacturerDefaultArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly shopId: FieldRef<"Order", 'String'>
    readonly manufacturerId: FieldRef<"Order", 'String'>
    readonly approved: FieldRef<"Order", 'Boolean'>
    readonly orderAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    orderId: string | null
    productId: string | null
    quantity: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    orderId: string | null
    productId: string | null
    quantity: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    orderId: number
    productId: number
    quantity: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
  }

  export type OrderItemMinAggregateInputType = {
    orderId?: true
    productId?: true
    quantity?: true
  }

  export type OrderItemMaxAggregateInputType = {
    orderId?: true
    productId?: true
    quantity?: true
  }

  export type OrderItemCountAggregateInputType = {
    orderId?: true
    productId?: true
    quantity?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    orderId: string
    productId: string
    quantity: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: string
      productId: string
      quantity: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }


  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const orderItemWithOrderIdOnly = await prisma.orderItem.findMany({ select: { orderId: true } })
     * 
    **/
    findMany<T extends OrderItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
    **/
    create<T extends OrderItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
    **/
    delete<T extends OrderItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
    **/
    upsert<T extends OrderItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }


  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }


  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const ManufacturerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type ManufacturerScalarFieldEnum = (typeof ManufacturerScalarFieldEnum)[keyof typeof ManufacturerScalarFieldEnum]


  export const ShopOnManufacturerScalarFieldEnum: {
    shopId: 'shopId',
    manufacturerId: 'manufacturerId'
  };

  export type ShopOnManufacturerScalarFieldEnum = (typeof ShopOnManufacturerScalarFieldEnum)[keyof typeof ShopOnManufacturerScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ManufacturerHandlingProductsScalarFieldEnum: {
    id: 'id',
    stock: 'stock',
    price: 'price',
    productId: 'productId',
    manufacturerId: 'manufacturerId'
  };

  export type ManufacturerHandlingProductsScalarFieldEnum = (typeof ManufacturerHandlingProductsScalarFieldEnum)[keyof typeof ManufacturerHandlingProductsScalarFieldEnum]


  export const ProductCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum]


  export const ProductOnProductCategoryScalarFieldEnum: {
    productId: 'productId',
    categoryId: 'categoryId'
  };

  export type ProductOnProductCategoryScalarFieldEnum = (typeof ProductOnProductCategoryScalarFieldEnum)[keyof typeof ProductOnProductCategoryScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    manufacturerId: 'manufacturerId',
    approved: 'approved',
    orderAt: 'orderAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: StringFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    description?: StringFilter<"Shop"> | string
    partnerManufacturers?: ShopOnManufacturerListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    partnerManufacturers?: ShopOnManufacturerOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    name?: StringFilter<"Shop"> | string
    description?: StringFilter<"Shop"> | string
    partnerManufacturers?: ShopOnManufacturerListRelationFilter
    orders?: OrderListRelationFilter
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shop"> | string
    name?: StringWithAggregatesFilter<"Shop"> | string
    description?: StringWithAggregatesFilter<"Shop"> | string
  }

  export type ManufacturerWhereInput = {
    AND?: ManufacturerWhereInput | ManufacturerWhereInput[]
    OR?: ManufacturerWhereInput[]
    NOT?: ManufacturerWhereInput | ManufacturerWhereInput[]
    id?: StringFilter<"Manufacturer"> | string
    name?: StringFilter<"Manufacturer"> | string
    description?: StringFilter<"Manufacturer"> | string
    handlingProducts?: ManufacturerHandlingProductsListRelationFilter
    partnerShops?: ShopOnManufacturerListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type ManufacturerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    handlingProducts?: ManufacturerHandlingProductsOrderByRelationAggregateInput
    partnerShops?: ShopOnManufacturerOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type ManufacturerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ManufacturerWhereInput | ManufacturerWhereInput[]
    OR?: ManufacturerWhereInput[]
    NOT?: ManufacturerWhereInput | ManufacturerWhereInput[]
    name?: StringFilter<"Manufacturer"> | string
    description?: StringFilter<"Manufacturer"> | string
    handlingProducts?: ManufacturerHandlingProductsListRelationFilter
    partnerShops?: ShopOnManufacturerListRelationFilter
    orders?: OrderListRelationFilter
  }, "id">

  export type ManufacturerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: ManufacturerCountOrderByAggregateInput
    _max?: ManufacturerMaxOrderByAggregateInput
    _min?: ManufacturerMinOrderByAggregateInput
  }

  export type ManufacturerScalarWhereWithAggregatesInput = {
    AND?: ManufacturerScalarWhereWithAggregatesInput | ManufacturerScalarWhereWithAggregatesInput[]
    OR?: ManufacturerScalarWhereWithAggregatesInput[]
    NOT?: ManufacturerScalarWhereWithAggregatesInput | ManufacturerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Manufacturer"> | string
    name?: StringWithAggregatesFilter<"Manufacturer"> | string
    description?: StringWithAggregatesFilter<"Manufacturer"> | string
  }

  export type ShopOnManufacturerWhereInput = {
    AND?: ShopOnManufacturerWhereInput | ShopOnManufacturerWhereInput[]
    OR?: ShopOnManufacturerWhereInput[]
    NOT?: ShopOnManufacturerWhereInput | ShopOnManufacturerWhereInput[]
    shopId?: StringFilter<"ShopOnManufacturer"> | string
    manufacturerId?: StringFilter<"ShopOnManufacturer"> | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    manufacturer?: XOR<ManufacturerRelationFilter, ManufacturerWhereInput>
  }

  export type ShopOnManufacturerOrderByWithRelationInput = {
    shopId?: SortOrder
    manufacturerId?: SortOrder
    shop?: ShopOrderByWithRelationInput
    manufacturer?: ManufacturerOrderByWithRelationInput
  }

  export type ShopOnManufacturerWhereUniqueInput = Prisma.AtLeast<{
    shopId_manufacturerId?: ShopOnManufacturerShopIdManufacturerIdCompoundUniqueInput
    AND?: ShopOnManufacturerWhereInput | ShopOnManufacturerWhereInput[]
    OR?: ShopOnManufacturerWhereInput[]
    NOT?: ShopOnManufacturerWhereInput | ShopOnManufacturerWhereInput[]
    shopId?: StringFilter<"ShopOnManufacturer"> | string
    manufacturerId?: StringFilter<"ShopOnManufacturer"> | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    manufacturer?: XOR<ManufacturerRelationFilter, ManufacturerWhereInput>
  }, "shopId_manufacturerId">

  export type ShopOnManufacturerOrderByWithAggregationInput = {
    shopId?: SortOrder
    manufacturerId?: SortOrder
    _count?: ShopOnManufacturerCountOrderByAggregateInput
    _max?: ShopOnManufacturerMaxOrderByAggregateInput
    _min?: ShopOnManufacturerMinOrderByAggregateInput
  }

  export type ShopOnManufacturerScalarWhereWithAggregatesInput = {
    AND?: ShopOnManufacturerScalarWhereWithAggregatesInput | ShopOnManufacturerScalarWhereWithAggregatesInput[]
    OR?: ShopOnManufacturerScalarWhereWithAggregatesInput[]
    NOT?: ShopOnManufacturerScalarWhereWithAggregatesInput | ShopOnManufacturerScalarWhereWithAggregatesInput[]
    shopId?: StringWithAggregatesFilter<"ShopOnManufacturer"> | string
    manufacturerId?: StringWithAggregatesFilter<"ShopOnManufacturer"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    categories?: ProductOnProductCategoryListRelationFilter
    manufacturers?: ManufacturerHandlingProductsListRelationFilter
    orderItem?: OrderItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categories?: ProductOnProductCategoryOrderByRelationAggregateInput
    manufacturers?: ManufacturerHandlingProductsOrderByRelationAggregateInput
    orderItem?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    description?: StringFilter<"Product"> | string
    categories?: ProductOnProductCategoryListRelationFilter
    manufacturers?: ManufacturerHandlingProductsListRelationFilter
    orderItem?: OrderItemListRelationFilter
  }, "id" | "name">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
  }

  export type ManufacturerHandlingProductsWhereInput = {
    AND?: ManufacturerHandlingProductsWhereInput | ManufacturerHandlingProductsWhereInput[]
    OR?: ManufacturerHandlingProductsWhereInput[]
    NOT?: ManufacturerHandlingProductsWhereInput | ManufacturerHandlingProductsWhereInput[]
    id?: IntFilter<"ManufacturerHandlingProducts"> | number
    stock?: IntFilter<"ManufacturerHandlingProducts"> | number
    price?: IntFilter<"ManufacturerHandlingProducts"> | number
    productId?: StringFilter<"ManufacturerHandlingProducts"> | string
    manufacturerId?: StringFilter<"ManufacturerHandlingProducts"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    manufacturer?: XOR<ManufacturerRelationFilter, ManufacturerWhereInput>
  }

  export type ManufacturerHandlingProductsOrderByWithRelationInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    manufacturerId?: SortOrder
    product?: ProductOrderByWithRelationInput
    manufacturer?: ManufacturerOrderByWithRelationInput
  }

  export type ManufacturerHandlingProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ManufacturerHandlingProductsWhereInput | ManufacturerHandlingProductsWhereInput[]
    OR?: ManufacturerHandlingProductsWhereInput[]
    NOT?: ManufacturerHandlingProductsWhereInput | ManufacturerHandlingProductsWhereInput[]
    stock?: IntFilter<"ManufacturerHandlingProducts"> | number
    price?: IntFilter<"ManufacturerHandlingProducts"> | number
    productId?: StringFilter<"ManufacturerHandlingProducts"> | string
    manufacturerId?: StringFilter<"ManufacturerHandlingProducts"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    manufacturer?: XOR<ManufacturerRelationFilter, ManufacturerWhereInput>
  }, "id">

  export type ManufacturerHandlingProductsOrderByWithAggregationInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    manufacturerId?: SortOrder
    _count?: ManufacturerHandlingProductsCountOrderByAggregateInput
    _avg?: ManufacturerHandlingProductsAvgOrderByAggregateInput
    _max?: ManufacturerHandlingProductsMaxOrderByAggregateInput
    _min?: ManufacturerHandlingProductsMinOrderByAggregateInput
    _sum?: ManufacturerHandlingProductsSumOrderByAggregateInput
  }

  export type ManufacturerHandlingProductsScalarWhereWithAggregatesInput = {
    AND?: ManufacturerHandlingProductsScalarWhereWithAggregatesInput | ManufacturerHandlingProductsScalarWhereWithAggregatesInput[]
    OR?: ManufacturerHandlingProductsScalarWhereWithAggregatesInput[]
    NOT?: ManufacturerHandlingProductsScalarWhereWithAggregatesInput | ManufacturerHandlingProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ManufacturerHandlingProducts"> | number
    stock?: IntWithAggregatesFilter<"ManufacturerHandlingProducts"> | number
    price?: IntWithAggregatesFilter<"ManufacturerHandlingProducts"> | number
    productId?: StringWithAggregatesFilter<"ManufacturerHandlingProducts"> | string
    manufacturerId?: StringWithAggregatesFilter<"ManufacturerHandlingProducts"> | string
  }

  export type ProductCategoryWhereInput = {
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    id?: StringFilter<"ProductCategory"> | string
    name?: StringFilter<"ProductCategory"> | string
    products?: ProductOnProductCategoryListRelationFilter
  }

  export type ProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: ProductOnProductCategoryOrderByRelationAggregateInput
  }

  export type ProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    products?: ProductOnProductCategoryListRelationFilter
  }, "id" | "name">

  export type ProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ProductCategoryCountOrderByAggregateInput
    _max?: ProductCategoryMaxOrderByAggregateInput
    _min?: ProductCategoryMinOrderByAggregateInput
  }

  export type ProductCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductCategory"> | string
    name?: StringWithAggregatesFilter<"ProductCategory"> | string
  }

  export type ProductOnProductCategoryWhereInput = {
    AND?: ProductOnProductCategoryWhereInput | ProductOnProductCategoryWhereInput[]
    OR?: ProductOnProductCategoryWhereInput[]
    NOT?: ProductOnProductCategoryWhereInput | ProductOnProductCategoryWhereInput[]
    productId?: StringFilter<"ProductOnProductCategory"> | string
    categoryId?: StringFilter<"ProductOnProductCategory"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    category?: XOR<ProductCategoryRelationFilter, ProductCategoryWhereInput>
  }

  export type ProductOnProductCategoryOrderByWithRelationInput = {
    productId?: SortOrder
    categoryId?: SortOrder
    product?: ProductOrderByWithRelationInput
    category?: ProductCategoryOrderByWithRelationInput
  }

  export type ProductOnProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    productId_categoryId?: ProductOnProductCategoryProductIdCategoryIdCompoundUniqueInput
    AND?: ProductOnProductCategoryWhereInput | ProductOnProductCategoryWhereInput[]
    OR?: ProductOnProductCategoryWhereInput[]
    NOT?: ProductOnProductCategoryWhereInput | ProductOnProductCategoryWhereInput[]
    productId?: StringFilter<"ProductOnProductCategory"> | string
    categoryId?: StringFilter<"ProductOnProductCategory"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    category?: XOR<ProductCategoryRelationFilter, ProductCategoryWhereInput>
  }, "productId_categoryId">

  export type ProductOnProductCategoryOrderByWithAggregationInput = {
    productId?: SortOrder
    categoryId?: SortOrder
    _count?: ProductOnProductCategoryCountOrderByAggregateInput
    _max?: ProductOnProductCategoryMaxOrderByAggregateInput
    _min?: ProductOnProductCategoryMinOrderByAggregateInput
  }

  export type ProductOnProductCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductOnProductCategoryScalarWhereWithAggregatesInput | ProductOnProductCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductOnProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductOnProductCategoryScalarWhereWithAggregatesInput | ProductOnProductCategoryScalarWhereWithAggregatesInput[]
    productId?: StringWithAggregatesFilter<"ProductOnProductCategory"> | string
    categoryId?: StringWithAggregatesFilter<"ProductOnProductCategory"> | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    shopId?: StringFilter<"Order"> | string
    manufacturerId?: StringFilter<"Order"> | string
    approved?: BoolFilter<"Order"> | boolean
    orderAt?: DateTimeFilter<"Order"> | Date | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    manufacturer?: XOR<ManufacturerRelationFilter, ManufacturerWhereInput>
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    manufacturerId?: SortOrder
    approved?: SortOrder
    orderAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    manufacturer?: ManufacturerOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    shopId?: StringFilter<"Order"> | string
    manufacturerId?: StringFilter<"Order"> | string
    approved?: BoolFilter<"Order"> | boolean
    orderAt?: DateTimeFilter<"Order"> | Date | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    manufacturer?: XOR<ManufacturerRelationFilter, ManufacturerWhereInput>
    items?: OrderItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    manufacturerId?: SortOrder
    approved?: SortOrder
    orderAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    shopId?: StringWithAggregatesFilter<"Order"> | string
    manufacturerId?: StringWithAggregatesFilter<"Order"> | string
    approved?: BoolWithAggregatesFilter<"Order"> | boolean
    orderAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    productId_orderId?: OrderItemProductIdOrderIdCompoundUniqueInput
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "productId_orderId">

  export type OrderItemOrderByWithAggregationInput = {
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productId?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
  }

  export type ShopCreateInput = {
    id?: string
    name: string
    description: string
    partnerManufacturers?: ShopOnManufacturerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    partnerManufacturers?: ShopOnManufacturerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partnerManufacturers?: ShopOnManufacturerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partnerManufacturers?: ShopOnManufacturerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ManufacturerCreateInput = {
    id?: string
    name: string
    description: string
    handlingProducts?: ManufacturerHandlingProductsCreateNestedManyWithoutManufacturerInput
    partnerShops?: ShopOnManufacturerCreateNestedManyWithoutManufacturerInput
    orders?: OrderCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturerUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    handlingProducts?: ManufacturerHandlingProductsUncheckedCreateNestedManyWithoutManufacturerInput
    partnerShops?: ShopOnManufacturerUncheckedCreateNestedManyWithoutManufacturerInput
    orders?: OrderUncheckedCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    handlingProducts?: ManufacturerHandlingProductsUpdateManyWithoutManufacturerNestedInput
    partnerShops?: ShopOnManufacturerUpdateManyWithoutManufacturerNestedInput
    orders?: OrderUpdateManyWithoutManufacturerNestedInput
  }

  export type ManufacturerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    handlingProducts?: ManufacturerHandlingProductsUncheckedUpdateManyWithoutManufacturerNestedInput
    partnerShops?: ShopOnManufacturerUncheckedUpdateManyWithoutManufacturerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutManufacturerNestedInput
  }

  export type ManufacturerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ManufacturerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ShopOnManufacturerCreateInput = {
    shop: ShopCreateNestedOneWithoutPartnerManufacturersInput
    manufacturer: ManufacturerCreateNestedOneWithoutPartnerShopsInput
  }

  export type ShopOnManufacturerUncheckedCreateInput = {
    shopId: string
    manufacturerId: string
  }

  export type ShopOnManufacturerUpdateInput = {
    shop?: ShopUpdateOneRequiredWithoutPartnerManufacturersNestedInput
    manufacturer?: ManufacturerUpdateOneRequiredWithoutPartnerShopsNestedInput
  }

  export type ShopOnManufacturerUncheckedUpdateInput = {
    shopId?: StringFieldUpdateOperationsInput | string
    manufacturerId?: StringFieldUpdateOperationsInput | string
  }

  export type ShopOnManufacturerUpdateManyMutationInput = {

  }

  export type ShopOnManufacturerUncheckedUpdateManyInput = {
    shopId?: StringFieldUpdateOperationsInput | string
    manufacturerId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description: string
    categories?: ProductOnProductCategoryCreateNestedManyWithoutProductInput
    manufacturers?: ManufacturerHandlingProductsCreateNestedManyWithoutProductInput
    orderItem?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    categories?: ProductOnProductCategoryUncheckedCreateNestedManyWithoutProductInput
    manufacturers?: ManufacturerHandlingProductsUncheckedCreateNestedManyWithoutProductInput
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: ProductOnProductCategoryUpdateManyWithoutProductNestedInput
    manufacturers?: ManufacturerHandlingProductsUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: ProductOnProductCategoryUncheckedUpdateManyWithoutProductNestedInput
    manufacturers?: ManufacturerHandlingProductsUncheckedUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ManufacturerHandlingProductsCreateInput = {
    stock: number
    price: number
    product: ProductCreateNestedOneWithoutManufacturersInput
    manufacturer: ManufacturerCreateNestedOneWithoutHandlingProductsInput
  }

  export type ManufacturerHandlingProductsUncheckedCreateInput = {
    id?: number
    stock: number
    price: number
    productId: string
    manufacturerId: string
  }

  export type ManufacturerHandlingProductsUpdateInput = {
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutManufacturersNestedInput
    manufacturer?: ManufacturerUpdateOneRequiredWithoutHandlingProductsNestedInput
  }

  export type ManufacturerHandlingProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    manufacturerId?: StringFieldUpdateOperationsInput | string
  }

  export type ManufacturerHandlingProductsUpdateManyMutationInput = {
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ManufacturerHandlingProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    manufacturerId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCategoryCreateInput = {
    id?: string
    name: string
    products?: ProductOnProductCategoryCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUncheckedCreateInput = {
    id?: string
    name: string
    products?: ProductOnProductCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductOnProductCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductOnProductCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductOnProductCategoryCreateInput = {
    product: ProductCreateNestedOneWithoutCategoriesInput
    category: ProductCategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductOnProductCategoryUncheckedCreateInput = {
    productId: string
    categoryId: string
  }

  export type ProductOnProductCategoryUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductOnProductCategoryUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductOnProductCategoryUpdateManyMutationInput = {

  }

  export type ProductOnProductCategoryUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    id?: string
    approved?: boolean
    orderAt?: Date | string
    shop: ShopCreateNestedOneWithoutOrdersInput
    manufacturer: ManufacturerCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    shopId: string
    manufacturerId: string
    approved?: boolean
    orderAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    orderAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
    manufacturer?: ManufacturerUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    manufacturerId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    orderAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    orderAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    manufacturerId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    orderAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    quantity: number
    order: OrderCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    orderId: string
    productId: string
    quantity: number
  }

  export type OrderItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ShopOnManufacturerListRelationFilter = {
    every?: ShopOnManufacturerWhereInput
    some?: ShopOnManufacturerWhereInput
    none?: ShopOnManufacturerWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ShopOnManufacturerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type ManufacturerHandlingProductsListRelationFilter = {
    every?: ManufacturerHandlingProductsWhereInput
    some?: ManufacturerHandlingProductsWhereInput
    none?: ManufacturerHandlingProductsWhereInput
  }

  export type ManufacturerHandlingProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManufacturerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ManufacturerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ManufacturerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ShopRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type ManufacturerRelationFilter = {
    is?: ManufacturerWhereInput
    isNot?: ManufacturerWhereInput
  }

  export type ShopOnManufacturerShopIdManufacturerIdCompoundUniqueInput = {
    shopId: string
    manufacturerId: string
  }

  export type ShopOnManufacturerCountOrderByAggregateInput = {
    shopId?: SortOrder
    manufacturerId?: SortOrder
  }

  export type ShopOnManufacturerMaxOrderByAggregateInput = {
    shopId?: SortOrder
    manufacturerId?: SortOrder
  }

  export type ShopOnManufacturerMinOrderByAggregateInput = {
    shopId?: SortOrder
    manufacturerId?: SortOrder
  }

  export type ProductOnProductCategoryListRelationFilter = {
    every?: ProductOnProductCategoryWhereInput
    some?: ProductOnProductCategoryWhereInput
    none?: ProductOnProductCategoryWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type ProductOnProductCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ManufacturerHandlingProductsCountOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    manufacturerId?: SortOrder
  }

  export type ManufacturerHandlingProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
  }

  export type ManufacturerHandlingProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    manufacturerId?: SortOrder
  }

  export type ManufacturerHandlingProductsMinOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    manufacturerId?: SortOrder
  }

  export type ManufacturerHandlingProductsSumOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type ProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProductCategoryRelationFilter = {
    is?: ProductCategoryWhereInput
    isNot?: ProductCategoryWhereInput
  }

  export type ProductOnProductCategoryProductIdCategoryIdCompoundUniqueInput = {
    productId: string
    categoryId: string
  }

  export type ProductOnProductCategoryCountOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductOnProductCategoryMaxOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductOnProductCategoryMinOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    manufacturerId?: SortOrder
    approved?: SortOrder
    orderAt?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    manufacturerId?: SortOrder
    approved?: SortOrder
    orderAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    manufacturerId?: SortOrder
    approved?: SortOrder
    orderAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemProductIdOrderIdCompoundUniqueInput = {
    productId: string
    orderId: string
  }

  export type OrderItemCountOrderByAggregateInput = {
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ShopOnManufacturerCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopOnManufacturerCreateWithoutShopInput, ShopOnManufacturerUncheckedCreateWithoutShopInput> | ShopOnManufacturerCreateWithoutShopInput[] | ShopOnManufacturerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopOnManufacturerCreateOrConnectWithoutShopInput | ShopOnManufacturerCreateOrConnectWithoutShopInput[]
    connect?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutShopInput = {
    create?: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput> | OrderCreateWithoutShopInput[] | OrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShopInput | OrderCreateOrConnectWithoutShopInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ShopOnManufacturerUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopOnManufacturerCreateWithoutShopInput, ShopOnManufacturerUncheckedCreateWithoutShopInput> | ShopOnManufacturerCreateWithoutShopInput[] | ShopOnManufacturerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopOnManufacturerCreateOrConnectWithoutShopInput | ShopOnManufacturerCreateOrConnectWithoutShopInput[]
    connect?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput> | OrderCreateWithoutShopInput[] | OrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShopInput | OrderCreateOrConnectWithoutShopInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ShopOnManufacturerUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopOnManufacturerCreateWithoutShopInput, ShopOnManufacturerUncheckedCreateWithoutShopInput> | ShopOnManufacturerCreateWithoutShopInput[] | ShopOnManufacturerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopOnManufacturerCreateOrConnectWithoutShopInput | ShopOnManufacturerCreateOrConnectWithoutShopInput[]
    upsert?: ShopOnManufacturerUpsertWithWhereUniqueWithoutShopInput | ShopOnManufacturerUpsertWithWhereUniqueWithoutShopInput[]
    set?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    disconnect?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    delete?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    connect?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    update?: ShopOnManufacturerUpdateWithWhereUniqueWithoutShopInput | ShopOnManufacturerUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopOnManufacturerUpdateManyWithWhereWithoutShopInput | ShopOnManufacturerUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopOnManufacturerScalarWhereInput | ShopOnManufacturerScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutShopNestedInput = {
    create?: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput> | OrderCreateWithoutShopInput[] | OrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShopInput | OrderCreateOrConnectWithoutShopInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShopInput | OrderUpsertWithWhereUniqueWithoutShopInput[]
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShopInput | OrderUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShopInput | OrderUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ShopOnManufacturerUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopOnManufacturerCreateWithoutShopInput, ShopOnManufacturerUncheckedCreateWithoutShopInput> | ShopOnManufacturerCreateWithoutShopInput[] | ShopOnManufacturerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopOnManufacturerCreateOrConnectWithoutShopInput | ShopOnManufacturerCreateOrConnectWithoutShopInput[]
    upsert?: ShopOnManufacturerUpsertWithWhereUniqueWithoutShopInput | ShopOnManufacturerUpsertWithWhereUniqueWithoutShopInput[]
    set?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    disconnect?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    delete?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    connect?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    update?: ShopOnManufacturerUpdateWithWhereUniqueWithoutShopInput | ShopOnManufacturerUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopOnManufacturerUpdateManyWithWhereWithoutShopInput | ShopOnManufacturerUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopOnManufacturerScalarWhereInput | ShopOnManufacturerScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput> | OrderCreateWithoutShopInput[] | OrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShopInput | OrderCreateOrConnectWithoutShopInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShopInput | OrderUpsertWithWhereUniqueWithoutShopInput[]
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShopInput | OrderUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShopInput | OrderUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ManufacturerHandlingProductsCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<ManufacturerHandlingProductsCreateWithoutManufacturerInput, ManufacturerHandlingProductsUncheckedCreateWithoutManufacturerInput> | ManufacturerHandlingProductsCreateWithoutManufacturerInput[] | ManufacturerHandlingProductsUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: ManufacturerHandlingProductsCreateOrConnectWithoutManufacturerInput | ManufacturerHandlingProductsCreateOrConnectWithoutManufacturerInput[]
    connect?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
  }

  export type ShopOnManufacturerCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<ShopOnManufacturerCreateWithoutManufacturerInput, ShopOnManufacturerUncheckedCreateWithoutManufacturerInput> | ShopOnManufacturerCreateWithoutManufacturerInput[] | ShopOnManufacturerUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: ShopOnManufacturerCreateOrConnectWithoutManufacturerInput | ShopOnManufacturerCreateOrConnectWithoutManufacturerInput[]
    connect?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<OrderCreateWithoutManufacturerInput, OrderUncheckedCreateWithoutManufacturerInput> | OrderCreateWithoutManufacturerInput[] | OrderUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutManufacturerInput | OrderCreateOrConnectWithoutManufacturerInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ManufacturerHandlingProductsUncheckedCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<ManufacturerHandlingProductsCreateWithoutManufacturerInput, ManufacturerHandlingProductsUncheckedCreateWithoutManufacturerInput> | ManufacturerHandlingProductsCreateWithoutManufacturerInput[] | ManufacturerHandlingProductsUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: ManufacturerHandlingProductsCreateOrConnectWithoutManufacturerInput | ManufacturerHandlingProductsCreateOrConnectWithoutManufacturerInput[]
    connect?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
  }

  export type ShopOnManufacturerUncheckedCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<ShopOnManufacturerCreateWithoutManufacturerInput, ShopOnManufacturerUncheckedCreateWithoutManufacturerInput> | ShopOnManufacturerCreateWithoutManufacturerInput[] | ShopOnManufacturerUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: ShopOnManufacturerCreateOrConnectWithoutManufacturerInput | ShopOnManufacturerCreateOrConnectWithoutManufacturerInput[]
    connect?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<OrderCreateWithoutManufacturerInput, OrderUncheckedCreateWithoutManufacturerInput> | OrderCreateWithoutManufacturerInput[] | OrderUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutManufacturerInput | OrderCreateOrConnectWithoutManufacturerInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ManufacturerHandlingProductsUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<ManufacturerHandlingProductsCreateWithoutManufacturerInput, ManufacturerHandlingProductsUncheckedCreateWithoutManufacturerInput> | ManufacturerHandlingProductsCreateWithoutManufacturerInput[] | ManufacturerHandlingProductsUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: ManufacturerHandlingProductsCreateOrConnectWithoutManufacturerInput | ManufacturerHandlingProductsCreateOrConnectWithoutManufacturerInput[]
    upsert?: ManufacturerHandlingProductsUpsertWithWhereUniqueWithoutManufacturerInput | ManufacturerHandlingProductsUpsertWithWhereUniqueWithoutManufacturerInput[]
    set?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    disconnect?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    delete?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    connect?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    update?: ManufacturerHandlingProductsUpdateWithWhereUniqueWithoutManufacturerInput | ManufacturerHandlingProductsUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: ManufacturerHandlingProductsUpdateManyWithWhereWithoutManufacturerInput | ManufacturerHandlingProductsUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: ManufacturerHandlingProductsScalarWhereInput | ManufacturerHandlingProductsScalarWhereInput[]
  }

  export type ShopOnManufacturerUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<ShopOnManufacturerCreateWithoutManufacturerInput, ShopOnManufacturerUncheckedCreateWithoutManufacturerInput> | ShopOnManufacturerCreateWithoutManufacturerInput[] | ShopOnManufacturerUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: ShopOnManufacturerCreateOrConnectWithoutManufacturerInput | ShopOnManufacturerCreateOrConnectWithoutManufacturerInput[]
    upsert?: ShopOnManufacturerUpsertWithWhereUniqueWithoutManufacturerInput | ShopOnManufacturerUpsertWithWhereUniqueWithoutManufacturerInput[]
    set?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    disconnect?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    delete?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    connect?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    update?: ShopOnManufacturerUpdateWithWhereUniqueWithoutManufacturerInput | ShopOnManufacturerUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: ShopOnManufacturerUpdateManyWithWhereWithoutManufacturerInput | ShopOnManufacturerUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: ShopOnManufacturerScalarWhereInput | ShopOnManufacturerScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<OrderCreateWithoutManufacturerInput, OrderUncheckedCreateWithoutManufacturerInput> | OrderCreateWithoutManufacturerInput[] | OrderUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutManufacturerInput | OrderCreateOrConnectWithoutManufacturerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutManufacturerInput | OrderUpsertWithWhereUniqueWithoutManufacturerInput[]
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutManufacturerInput | OrderUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutManufacturerInput | OrderUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ManufacturerHandlingProductsUncheckedUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<ManufacturerHandlingProductsCreateWithoutManufacturerInput, ManufacturerHandlingProductsUncheckedCreateWithoutManufacturerInput> | ManufacturerHandlingProductsCreateWithoutManufacturerInput[] | ManufacturerHandlingProductsUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: ManufacturerHandlingProductsCreateOrConnectWithoutManufacturerInput | ManufacturerHandlingProductsCreateOrConnectWithoutManufacturerInput[]
    upsert?: ManufacturerHandlingProductsUpsertWithWhereUniqueWithoutManufacturerInput | ManufacturerHandlingProductsUpsertWithWhereUniqueWithoutManufacturerInput[]
    set?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    disconnect?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    delete?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    connect?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    update?: ManufacturerHandlingProductsUpdateWithWhereUniqueWithoutManufacturerInput | ManufacturerHandlingProductsUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: ManufacturerHandlingProductsUpdateManyWithWhereWithoutManufacturerInput | ManufacturerHandlingProductsUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: ManufacturerHandlingProductsScalarWhereInput | ManufacturerHandlingProductsScalarWhereInput[]
  }

  export type ShopOnManufacturerUncheckedUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<ShopOnManufacturerCreateWithoutManufacturerInput, ShopOnManufacturerUncheckedCreateWithoutManufacturerInput> | ShopOnManufacturerCreateWithoutManufacturerInput[] | ShopOnManufacturerUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: ShopOnManufacturerCreateOrConnectWithoutManufacturerInput | ShopOnManufacturerCreateOrConnectWithoutManufacturerInput[]
    upsert?: ShopOnManufacturerUpsertWithWhereUniqueWithoutManufacturerInput | ShopOnManufacturerUpsertWithWhereUniqueWithoutManufacturerInput[]
    set?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    disconnect?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    delete?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    connect?: ShopOnManufacturerWhereUniqueInput | ShopOnManufacturerWhereUniqueInput[]
    update?: ShopOnManufacturerUpdateWithWhereUniqueWithoutManufacturerInput | ShopOnManufacturerUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: ShopOnManufacturerUpdateManyWithWhereWithoutManufacturerInput | ShopOnManufacturerUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: ShopOnManufacturerScalarWhereInput | ShopOnManufacturerScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<OrderCreateWithoutManufacturerInput, OrderUncheckedCreateWithoutManufacturerInput> | OrderCreateWithoutManufacturerInput[] | OrderUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutManufacturerInput | OrderCreateOrConnectWithoutManufacturerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutManufacturerInput | OrderUpsertWithWhereUniqueWithoutManufacturerInput[]
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutManufacturerInput | OrderUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutManufacturerInput | OrderUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutPartnerManufacturersInput = {
    create?: XOR<ShopCreateWithoutPartnerManufacturersInput, ShopUncheckedCreateWithoutPartnerManufacturersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutPartnerManufacturersInput
    connect?: ShopWhereUniqueInput
  }

  export type ManufacturerCreateNestedOneWithoutPartnerShopsInput = {
    create?: XOR<ManufacturerCreateWithoutPartnerShopsInput, ManufacturerUncheckedCreateWithoutPartnerShopsInput>
    connectOrCreate?: ManufacturerCreateOrConnectWithoutPartnerShopsInput
    connect?: ManufacturerWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutPartnerManufacturersNestedInput = {
    create?: XOR<ShopCreateWithoutPartnerManufacturersInput, ShopUncheckedCreateWithoutPartnerManufacturersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutPartnerManufacturersInput
    upsert?: ShopUpsertWithoutPartnerManufacturersInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutPartnerManufacturersInput, ShopUpdateWithoutPartnerManufacturersInput>, ShopUncheckedUpdateWithoutPartnerManufacturersInput>
  }

  export type ManufacturerUpdateOneRequiredWithoutPartnerShopsNestedInput = {
    create?: XOR<ManufacturerCreateWithoutPartnerShopsInput, ManufacturerUncheckedCreateWithoutPartnerShopsInput>
    connectOrCreate?: ManufacturerCreateOrConnectWithoutPartnerShopsInput
    upsert?: ManufacturerUpsertWithoutPartnerShopsInput
    connect?: ManufacturerWhereUniqueInput
    update?: XOR<XOR<ManufacturerUpdateToOneWithWhereWithoutPartnerShopsInput, ManufacturerUpdateWithoutPartnerShopsInput>, ManufacturerUncheckedUpdateWithoutPartnerShopsInput>
  }

  export type ProductOnProductCategoryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductOnProductCategoryCreateWithoutProductInput, ProductOnProductCategoryUncheckedCreateWithoutProductInput> | ProductOnProductCategoryCreateWithoutProductInput[] | ProductOnProductCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOnProductCategoryCreateOrConnectWithoutProductInput | ProductOnProductCategoryCreateOrConnectWithoutProductInput[]
    connect?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
  }

  export type ManufacturerHandlingProductsCreateNestedManyWithoutProductInput = {
    create?: XOR<ManufacturerHandlingProductsCreateWithoutProductInput, ManufacturerHandlingProductsUncheckedCreateWithoutProductInput> | ManufacturerHandlingProductsCreateWithoutProductInput[] | ManufacturerHandlingProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ManufacturerHandlingProductsCreateOrConnectWithoutProductInput | ManufacturerHandlingProductsCreateOrConnectWithoutProductInput[]
    connect?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ProductOnProductCategoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductOnProductCategoryCreateWithoutProductInput, ProductOnProductCategoryUncheckedCreateWithoutProductInput> | ProductOnProductCategoryCreateWithoutProductInput[] | ProductOnProductCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOnProductCategoryCreateOrConnectWithoutProductInput | ProductOnProductCategoryCreateOrConnectWithoutProductInput[]
    connect?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
  }

  export type ManufacturerHandlingProductsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ManufacturerHandlingProductsCreateWithoutProductInput, ManufacturerHandlingProductsUncheckedCreateWithoutProductInput> | ManufacturerHandlingProductsCreateWithoutProductInput[] | ManufacturerHandlingProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ManufacturerHandlingProductsCreateOrConnectWithoutProductInput | ManufacturerHandlingProductsCreateOrConnectWithoutProductInput[]
    connect?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ProductOnProductCategoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductOnProductCategoryCreateWithoutProductInput, ProductOnProductCategoryUncheckedCreateWithoutProductInput> | ProductOnProductCategoryCreateWithoutProductInput[] | ProductOnProductCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOnProductCategoryCreateOrConnectWithoutProductInput | ProductOnProductCategoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductOnProductCategoryUpsertWithWhereUniqueWithoutProductInput | ProductOnProductCategoryUpsertWithWhereUniqueWithoutProductInput[]
    set?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    disconnect?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    delete?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    connect?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    update?: ProductOnProductCategoryUpdateWithWhereUniqueWithoutProductInput | ProductOnProductCategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductOnProductCategoryUpdateManyWithWhereWithoutProductInput | ProductOnProductCategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductOnProductCategoryScalarWhereInput | ProductOnProductCategoryScalarWhereInput[]
  }

  export type ManufacturerHandlingProductsUpdateManyWithoutProductNestedInput = {
    create?: XOR<ManufacturerHandlingProductsCreateWithoutProductInput, ManufacturerHandlingProductsUncheckedCreateWithoutProductInput> | ManufacturerHandlingProductsCreateWithoutProductInput[] | ManufacturerHandlingProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ManufacturerHandlingProductsCreateOrConnectWithoutProductInput | ManufacturerHandlingProductsCreateOrConnectWithoutProductInput[]
    upsert?: ManufacturerHandlingProductsUpsertWithWhereUniqueWithoutProductInput | ManufacturerHandlingProductsUpsertWithWhereUniqueWithoutProductInput[]
    set?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    disconnect?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    delete?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    connect?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    update?: ManufacturerHandlingProductsUpdateWithWhereUniqueWithoutProductInput | ManufacturerHandlingProductsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ManufacturerHandlingProductsUpdateManyWithWhereWithoutProductInput | ManufacturerHandlingProductsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ManufacturerHandlingProductsScalarWhereInput | ManufacturerHandlingProductsScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductOnProductCategoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductOnProductCategoryCreateWithoutProductInput, ProductOnProductCategoryUncheckedCreateWithoutProductInput> | ProductOnProductCategoryCreateWithoutProductInput[] | ProductOnProductCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOnProductCategoryCreateOrConnectWithoutProductInput | ProductOnProductCategoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductOnProductCategoryUpsertWithWhereUniqueWithoutProductInput | ProductOnProductCategoryUpsertWithWhereUniqueWithoutProductInput[]
    set?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    disconnect?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    delete?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    connect?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    update?: ProductOnProductCategoryUpdateWithWhereUniqueWithoutProductInput | ProductOnProductCategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductOnProductCategoryUpdateManyWithWhereWithoutProductInput | ProductOnProductCategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductOnProductCategoryScalarWhereInput | ProductOnProductCategoryScalarWhereInput[]
  }

  export type ManufacturerHandlingProductsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ManufacturerHandlingProductsCreateWithoutProductInput, ManufacturerHandlingProductsUncheckedCreateWithoutProductInput> | ManufacturerHandlingProductsCreateWithoutProductInput[] | ManufacturerHandlingProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ManufacturerHandlingProductsCreateOrConnectWithoutProductInput | ManufacturerHandlingProductsCreateOrConnectWithoutProductInput[]
    upsert?: ManufacturerHandlingProductsUpsertWithWhereUniqueWithoutProductInput | ManufacturerHandlingProductsUpsertWithWhereUniqueWithoutProductInput[]
    set?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    disconnect?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    delete?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    connect?: ManufacturerHandlingProductsWhereUniqueInput | ManufacturerHandlingProductsWhereUniqueInput[]
    update?: ManufacturerHandlingProductsUpdateWithWhereUniqueWithoutProductInput | ManufacturerHandlingProductsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ManufacturerHandlingProductsUpdateManyWithWhereWithoutProductInput | ManufacturerHandlingProductsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ManufacturerHandlingProductsScalarWhereInput | ManufacturerHandlingProductsScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutManufacturersInput = {
    create?: XOR<ProductCreateWithoutManufacturersInput, ProductUncheckedCreateWithoutManufacturersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutManufacturersInput
    connect?: ProductWhereUniqueInput
  }

  export type ManufacturerCreateNestedOneWithoutHandlingProductsInput = {
    create?: XOR<ManufacturerCreateWithoutHandlingProductsInput, ManufacturerUncheckedCreateWithoutHandlingProductsInput>
    connectOrCreate?: ManufacturerCreateOrConnectWithoutHandlingProductsInput
    connect?: ManufacturerWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutManufacturersNestedInput = {
    create?: XOR<ProductCreateWithoutManufacturersInput, ProductUncheckedCreateWithoutManufacturersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutManufacturersInput
    upsert?: ProductUpsertWithoutManufacturersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutManufacturersInput, ProductUpdateWithoutManufacturersInput>, ProductUncheckedUpdateWithoutManufacturersInput>
  }

  export type ManufacturerUpdateOneRequiredWithoutHandlingProductsNestedInput = {
    create?: XOR<ManufacturerCreateWithoutHandlingProductsInput, ManufacturerUncheckedCreateWithoutHandlingProductsInput>
    connectOrCreate?: ManufacturerCreateOrConnectWithoutHandlingProductsInput
    upsert?: ManufacturerUpsertWithoutHandlingProductsInput
    connect?: ManufacturerWhereUniqueInput
    update?: XOR<XOR<ManufacturerUpdateToOneWithWhereWithoutHandlingProductsInput, ManufacturerUpdateWithoutHandlingProductsInput>, ManufacturerUncheckedUpdateWithoutHandlingProductsInput>
  }

  export type ProductOnProductCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductOnProductCategoryCreateWithoutCategoryInput, ProductOnProductCategoryUncheckedCreateWithoutCategoryInput> | ProductOnProductCategoryCreateWithoutCategoryInput[] | ProductOnProductCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductOnProductCategoryCreateOrConnectWithoutCategoryInput | ProductOnProductCategoryCreateOrConnectWithoutCategoryInput[]
    connect?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
  }

  export type ProductOnProductCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductOnProductCategoryCreateWithoutCategoryInput, ProductOnProductCategoryUncheckedCreateWithoutCategoryInput> | ProductOnProductCategoryCreateWithoutCategoryInput[] | ProductOnProductCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductOnProductCategoryCreateOrConnectWithoutCategoryInput | ProductOnProductCategoryCreateOrConnectWithoutCategoryInput[]
    connect?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
  }

  export type ProductOnProductCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductOnProductCategoryCreateWithoutCategoryInput, ProductOnProductCategoryUncheckedCreateWithoutCategoryInput> | ProductOnProductCategoryCreateWithoutCategoryInput[] | ProductOnProductCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductOnProductCategoryCreateOrConnectWithoutCategoryInput | ProductOnProductCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductOnProductCategoryUpsertWithWhereUniqueWithoutCategoryInput | ProductOnProductCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    set?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    disconnect?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    delete?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    connect?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    update?: ProductOnProductCategoryUpdateWithWhereUniqueWithoutCategoryInput | ProductOnProductCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductOnProductCategoryUpdateManyWithWhereWithoutCategoryInput | ProductOnProductCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductOnProductCategoryScalarWhereInput | ProductOnProductCategoryScalarWhereInput[]
  }

  export type ProductOnProductCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductOnProductCategoryCreateWithoutCategoryInput, ProductOnProductCategoryUncheckedCreateWithoutCategoryInput> | ProductOnProductCategoryCreateWithoutCategoryInput[] | ProductOnProductCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductOnProductCategoryCreateOrConnectWithoutCategoryInput | ProductOnProductCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductOnProductCategoryUpsertWithWhereUniqueWithoutCategoryInput | ProductOnProductCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    set?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    disconnect?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    delete?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    connect?: ProductOnProductCategoryWhereUniqueInput | ProductOnProductCategoryWhereUniqueInput[]
    update?: ProductOnProductCategoryUpdateWithWhereUniqueWithoutCategoryInput | ProductOnProductCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductOnProductCategoryUpdateManyWithWhereWithoutCategoryInput | ProductOnProductCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductOnProductCategoryScalarWhereInput | ProductOnProductCategoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput
    connect?: ProductCategoryWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput
    upsert?: ProductUpsertWithoutCategoriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCategoriesInput, ProductUpdateWithoutCategoriesInput>, ProductUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductCategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput
    upsert?: ProductCategoryUpsertWithoutProductsInput
    connect?: ProductCategoryWhereUniqueInput
    update?: XOR<XOR<ProductCategoryUpdateToOneWithWhereWithoutProductsInput, ProductCategoryUpdateWithoutProductsInput>, ProductCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ShopCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ShopCreateWithoutOrdersInput, ShopUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutOrdersInput
    connect?: ShopWhereUniqueInput
  }

  export type ManufacturerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ManufacturerCreateWithoutOrdersInput, ManufacturerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ManufacturerCreateOrConnectWithoutOrdersInput
    connect?: ManufacturerWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShopUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ShopCreateWithoutOrdersInput, ShopUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutOrdersInput
    upsert?: ShopUpsertWithoutOrdersInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutOrdersInput, ShopUpdateWithoutOrdersInput>, ShopUncheckedUpdateWithoutOrdersInput>
  }

  export type ManufacturerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ManufacturerCreateWithoutOrdersInput, ManufacturerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ManufacturerCreateOrConnectWithoutOrdersInput
    upsert?: ManufacturerUpsertWithoutOrdersInput
    connect?: ManufacturerWhereUniqueInput
    update?: XOR<XOR<ManufacturerUpdateToOneWithWhereWithoutOrdersInput, ManufacturerUpdateWithoutOrdersInput>, ManufacturerUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput
    upsert?: ProductUpsertWithoutOrderItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemInput, ProductUpdateWithoutOrderItemInput>, ProductUncheckedUpdateWithoutOrderItemInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ShopOnManufacturerCreateWithoutShopInput = {
    manufacturer: ManufacturerCreateNestedOneWithoutPartnerShopsInput
  }

  export type ShopOnManufacturerUncheckedCreateWithoutShopInput = {
    manufacturerId: string
  }

  export type ShopOnManufacturerCreateOrConnectWithoutShopInput = {
    where: ShopOnManufacturerWhereUniqueInput
    create: XOR<ShopOnManufacturerCreateWithoutShopInput, ShopOnManufacturerUncheckedCreateWithoutShopInput>
  }

  export type OrderCreateWithoutShopInput = {
    id?: string
    approved?: boolean
    orderAt?: Date | string
    manufacturer: ManufacturerCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutShopInput = {
    id?: string
    manufacturerId: string
    approved?: boolean
    orderAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutShopInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput>
  }

  export type ShopOnManufacturerUpsertWithWhereUniqueWithoutShopInput = {
    where: ShopOnManufacturerWhereUniqueInput
    update: XOR<ShopOnManufacturerUpdateWithoutShopInput, ShopOnManufacturerUncheckedUpdateWithoutShopInput>
    create: XOR<ShopOnManufacturerCreateWithoutShopInput, ShopOnManufacturerUncheckedCreateWithoutShopInput>
  }

  export type ShopOnManufacturerUpdateWithWhereUniqueWithoutShopInput = {
    where: ShopOnManufacturerWhereUniqueInput
    data: XOR<ShopOnManufacturerUpdateWithoutShopInput, ShopOnManufacturerUncheckedUpdateWithoutShopInput>
  }

  export type ShopOnManufacturerUpdateManyWithWhereWithoutShopInput = {
    where: ShopOnManufacturerScalarWhereInput
    data: XOR<ShopOnManufacturerUpdateManyMutationInput, ShopOnManufacturerUncheckedUpdateManyWithoutShopInput>
  }

  export type ShopOnManufacturerScalarWhereInput = {
    AND?: ShopOnManufacturerScalarWhereInput | ShopOnManufacturerScalarWhereInput[]
    OR?: ShopOnManufacturerScalarWhereInput[]
    NOT?: ShopOnManufacturerScalarWhereInput | ShopOnManufacturerScalarWhereInput[]
    shopId?: StringFilter<"ShopOnManufacturer"> | string
    manufacturerId?: StringFilter<"ShopOnManufacturer"> | string
  }

  export type OrderUpsertWithWhereUniqueWithoutShopInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutShopInput, OrderUncheckedUpdateWithoutShopInput>
    create: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutShopInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutShopInput, OrderUncheckedUpdateWithoutShopInput>
  }

  export type OrderUpdateManyWithWhereWithoutShopInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutShopInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    shopId?: StringFilter<"Order"> | string
    manufacturerId?: StringFilter<"Order"> | string
    approved?: BoolFilter<"Order"> | boolean
    orderAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type ManufacturerHandlingProductsCreateWithoutManufacturerInput = {
    stock: number
    price: number
    product: ProductCreateNestedOneWithoutManufacturersInput
  }

  export type ManufacturerHandlingProductsUncheckedCreateWithoutManufacturerInput = {
    id?: number
    stock: number
    price: number
    productId: string
  }

  export type ManufacturerHandlingProductsCreateOrConnectWithoutManufacturerInput = {
    where: ManufacturerHandlingProductsWhereUniqueInput
    create: XOR<ManufacturerHandlingProductsCreateWithoutManufacturerInput, ManufacturerHandlingProductsUncheckedCreateWithoutManufacturerInput>
  }

  export type ShopOnManufacturerCreateWithoutManufacturerInput = {
    shop: ShopCreateNestedOneWithoutPartnerManufacturersInput
  }

  export type ShopOnManufacturerUncheckedCreateWithoutManufacturerInput = {
    shopId: string
  }

  export type ShopOnManufacturerCreateOrConnectWithoutManufacturerInput = {
    where: ShopOnManufacturerWhereUniqueInput
    create: XOR<ShopOnManufacturerCreateWithoutManufacturerInput, ShopOnManufacturerUncheckedCreateWithoutManufacturerInput>
  }

  export type OrderCreateWithoutManufacturerInput = {
    id?: string
    approved?: boolean
    orderAt?: Date | string
    shop: ShopCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutManufacturerInput = {
    id?: string
    shopId: string
    approved?: boolean
    orderAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutManufacturerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutManufacturerInput, OrderUncheckedCreateWithoutManufacturerInput>
  }

  export type ManufacturerHandlingProductsUpsertWithWhereUniqueWithoutManufacturerInput = {
    where: ManufacturerHandlingProductsWhereUniqueInput
    update: XOR<ManufacturerHandlingProductsUpdateWithoutManufacturerInput, ManufacturerHandlingProductsUncheckedUpdateWithoutManufacturerInput>
    create: XOR<ManufacturerHandlingProductsCreateWithoutManufacturerInput, ManufacturerHandlingProductsUncheckedCreateWithoutManufacturerInput>
  }

  export type ManufacturerHandlingProductsUpdateWithWhereUniqueWithoutManufacturerInput = {
    where: ManufacturerHandlingProductsWhereUniqueInput
    data: XOR<ManufacturerHandlingProductsUpdateWithoutManufacturerInput, ManufacturerHandlingProductsUncheckedUpdateWithoutManufacturerInput>
  }

  export type ManufacturerHandlingProductsUpdateManyWithWhereWithoutManufacturerInput = {
    where: ManufacturerHandlingProductsScalarWhereInput
    data: XOR<ManufacturerHandlingProductsUpdateManyMutationInput, ManufacturerHandlingProductsUncheckedUpdateManyWithoutManufacturerInput>
  }

  export type ManufacturerHandlingProductsScalarWhereInput = {
    AND?: ManufacturerHandlingProductsScalarWhereInput | ManufacturerHandlingProductsScalarWhereInput[]
    OR?: ManufacturerHandlingProductsScalarWhereInput[]
    NOT?: ManufacturerHandlingProductsScalarWhereInput | ManufacturerHandlingProductsScalarWhereInput[]
    id?: IntFilter<"ManufacturerHandlingProducts"> | number
    stock?: IntFilter<"ManufacturerHandlingProducts"> | number
    price?: IntFilter<"ManufacturerHandlingProducts"> | number
    productId?: StringFilter<"ManufacturerHandlingProducts"> | string
    manufacturerId?: StringFilter<"ManufacturerHandlingProducts"> | string
  }

  export type ShopOnManufacturerUpsertWithWhereUniqueWithoutManufacturerInput = {
    where: ShopOnManufacturerWhereUniqueInput
    update: XOR<ShopOnManufacturerUpdateWithoutManufacturerInput, ShopOnManufacturerUncheckedUpdateWithoutManufacturerInput>
    create: XOR<ShopOnManufacturerCreateWithoutManufacturerInput, ShopOnManufacturerUncheckedCreateWithoutManufacturerInput>
  }

  export type ShopOnManufacturerUpdateWithWhereUniqueWithoutManufacturerInput = {
    where: ShopOnManufacturerWhereUniqueInput
    data: XOR<ShopOnManufacturerUpdateWithoutManufacturerInput, ShopOnManufacturerUncheckedUpdateWithoutManufacturerInput>
  }

  export type ShopOnManufacturerUpdateManyWithWhereWithoutManufacturerInput = {
    where: ShopOnManufacturerScalarWhereInput
    data: XOR<ShopOnManufacturerUpdateManyMutationInput, ShopOnManufacturerUncheckedUpdateManyWithoutManufacturerInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutManufacturerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutManufacturerInput, OrderUncheckedUpdateWithoutManufacturerInput>
    create: XOR<OrderCreateWithoutManufacturerInput, OrderUncheckedCreateWithoutManufacturerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutManufacturerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutManufacturerInput, OrderUncheckedUpdateWithoutManufacturerInput>
  }

  export type OrderUpdateManyWithWhereWithoutManufacturerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutManufacturerInput>
  }

  export type ShopCreateWithoutPartnerManufacturersInput = {
    id?: string
    name: string
    description: string
    orders?: OrderCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutPartnerManufacturersInput = {
    id?: string
    name: string
    description: string
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutPartnerManufacturersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutPartnerManufacturersInput, ShopUncheckedCreateWithoutPartnerManufacturersInput>
  }

  export type ManufacturerCreateWithoutPartnerShopsInput = {
    id?: string
    name: string
    description: string
    handlingProducts?: ManufacturerHandlingProductsCreateNestedManyWithoutManufacturerInput
    orders?: OrderCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturerUncheckedCreateWithoutPartnerShopsInput = {
    id?: string
    name: string
    description: string
    handlingProducts?: ManufacturerHandlingProductsUncheckedCreateNestedManyWithoutManufacturerInput
    orders?: OrderUncheckedCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturerCreateOrConnectWithoutPartnerShopsInput = {
    where: ManufacturerWhereUniqueInput
    create: XOR<ManufacturerCreateWithoutPartnerShopsInput, ManufacturerUncheckedCreateWithoutPartnerShopsInput>
  }

  export type ShopUpsertWithoutPartnerManufacturersInput = {
    update: XOR<ShopUpdateWithoutPartnerManufacturersInput, ShopUncheckedUpdateWithoutPartnerManufacturersInput>
    create: XOR<ShopCreateWithoutPartnerManufacturersInput, ShopUncheckedCreateWithoutPartnerManufacturersInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutPartnerManufacturersInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutPartnerManufacturersInput, ShopUncheckedUpdateWithoutPartnerManufacturersInput>
  }

  export type ShopUpdateWithoutPartnerManufacturersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutPartnerManufacturersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ManufacturerUpsertWithoutPartnerShopsInput = {
    update: XOR<ManufacturerUpdateWithoutPartnerShopsInput, ManufacturerUncheckedUpdateWithoutPartnerShopsInput>
    create: XOR<ManufacturerCreateWithoutPartnerShopsInput, ManufacturerUncheckedCreateWithoutPartnerShopsInput>
    where?: ManufacturerWhereInput
  }

  export type ManufacturerUpdateToOneWithWhereWithoutPartnerShopsInput = {
    where?: ManufacturerWhereInput
    data: XOR<ManufacturerUpdateWithoutPartnerShopsInput, ManufacturerUncheckedUpdateWithoutPartnerShopsInput>
  }

  export type ManufacturerUpdateWithoutPartnerShopsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    handlingProducts?: ManufacturerHandlingProductsUpdateManyWithoutManufacturerNestedInput
    orders?: OrderUpdateManyWithoutManufacturerNestedInput
  }

  export type ManufacturerUncheckedUpdateWithoutPartnerShopsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    handlingProducts?: ManufacturerHandlingProductsUncheckedUpdateManyWithoutManufacturerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutManufacturerNestedInput
  }

  export type ProductOnProductCategoryCreateWithoutProductInput = {
    category: ProductCategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductOnProductCategoryUncheckedCreateWithoutProductInput = {
    categoryId: string
  }

  export type ProductOnProductCategoryCreateOrConnectWithoutProductInput = {
    where: ProductOnProductCategoryWhereUniqueInput
    create: XOR<ProductOnProductCategoryCreateWithoutProductInput, ProductOnProductCategoryUncheckedCreateWithoutProductInput>
  }

  export type ManufacturerHandlingProductsCreateWithoutProductInput = {
    stock: number
    price: number
    manufacturer: ManufacturerCreateNestedOneWithoutHandlingProductsInput
  }

  export type ManufacturerHandlingProductsUncheckedCreateWithoutProductInput = {
    id?: number
    stock: number
    price: number
    manufacturerId: string
  }

  export type ManufacturerHandlingProductsCreateOrConnectWithoutProductInput = {
    where: ManufacturerHandlingProductsWhereUniqueInput
    create: XOR<ManufacturerHandlingProductsCreateWithoutProductInput, ManufacturerHandlingProductsUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateWithoutProductInput = {
    quantity: number
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    orderId: string
    quantity: number
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type ProductOnProductCategoryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductOnProductCategoryWhereUniqueInput
    update: XOR<ProductOnProductCategoryUpdateWithoutProductInput, ProductOnProductCategoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductOnProductCategoryCreateWithoutProductInput, ProductOnProductCategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductOnProductCategoryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductOnProductCategoryWhereUniqueInput
    data: XOR<ProductOnProductCategoryUpdateWithoutProductInput, ProductOnProductCategoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductOnProductCategoryUpdateManyWithWhereWithoutProductInput = {
    where: ProductOnProductCategoryScalarWhereInput
    data: XOR<ProductOnProductCategoryUpdateManyMutationInput, ProductOnProductCategoryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductOnProductCategoryScalarWhereInput = {
    AND?: ProductOnProductCategoryScalarWhereInput | ProductOnProductCategoryScalarWhereInput[]
    OR?: ProductOnProductCategoryScalarWhereInput[]
    NOT?: ProductOnProductCategoryScalarWhereInput | ProductOnProductCategoryScalarWhereInput[]
    productId?: StringFilter<"ProductOnProductCategory"> | string
    categoryId?: StringFilter<"ProductOnProductCategory"> | string
  }

  export type ManufacturerHandlingProductsUpsertWithWhereUniqueWithoutProductInput = {
    where: ManufacturerHandlingProductsWhereUniqueInput
    update: XOR<ManufacturerHandlingProductsUpdateWithoutProductInput, ManufacturerHandlingProductsUncheckedUpdateWithoutProductInput>
    create: XOR<ManufacturerHandlingProductsCreateWithoutProductInput, ManufacturerHandlingProductsUncheckedCreateWithoutProductInput>
  }

  export type ManufacturerHandlingProductsUpdateWithWhereUniqueWithoutProductInput = {
    where: ManufacturerHandlingProductsWhereUniqueInput
    data: XOR<ManufacturerHandlingProductsUpdateWithoutProductInput, ManufacturerHandlingProductsUncheckedUpdateWithoutProductInput>
  }

  export type ManufacturerHandlingProductsUpdateManyWithWhereWithoutProductInput = {
    where: ManufacturerHandlingProductsScalarWhereInput
    data: XOR<ManufacturerHandlingProductsUpdateManyMutationInput, ManufacturerHandlingProductsUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
  }

  export type ProductCreateWithoutManufacturersInput = {
    id?: string
    name: string
    description: string
    categories?: ProductOnProductCategoryCreateNestedManyWithoutProductInput
    orderItem?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutManufacturersInput = {
    id?: string
    name: string
    description: string
    categories?: ProductOnProductCategoryUncheckedCreateNestedManyWithoutProductInput
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutManufacturersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutManufacturersInput, ProductUncheckedCreateWithoutManufacturersInput>
  }

  export type ManufacturerCreateWithoutHandlingProductsInput = {
    id?: string
    name: string
    description: string
    partnerShops?: ShopOnManufacturerCreateNestedManyWithoutManufacturerInput
    orders?: OrderCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturerUncheckedCreateWithoutHandlingProductsInput = {
    id?: string
    name: string
    description: string
    partnerShops?: ShopOnManufacturerUncheckedCreateNestedManyWithoutManufacturerInput
    orders?: OrderUncheckedCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturerCreateOrConnectWithoutHandlingProductsInput = {
    where: ManufacturerWhereUniqueInput
    create: XOR<ManufacturerCreateWithoutHandlingProductsInput, ManufacturerUncheckedCreateWithoutHandlingProductsInput>
  }

  export type ProductUpsertWithoutManufacturersInput = {
    update: XOR<ProductUpdateWithoutManufacturersInput, ProductUncheckedUpdateWithoutManufacturersInput>
    create: XOR<ProductCreateWithoutManufacturersInput, ProductUncheckedCreateWithoutManufacturersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutManufacturersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutManufacturersInput, ProductUncheckedUpdateWithoutManufacturersInput>
  }

  export type ProductUpdateWithoutManufacturersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: ProductOnProductCategoryUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutManufacturersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: ProductOnProductCategoryUncheckedUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ManufacturerUpsertWithoutHandlingProductsInput = {
    update: XOR<ManufacturerUpdateWithoutHandlingProductsInput, ManufacturerUncheckedUpdateWithoutHandlingProductsInput>
    create: XOR<ManufacturerCreateWithoutHandlingProductsInput, ManufacturerUncheckedCreateWithoutHandlingProductsInput>
    where?: ManufacturerWhereInput
  }

  export type ManufacturerUpdateToOneWithWhereWithoutHandlingProductsInput = {
    where?: ManufacturerWhereInput
    data: XOR<ManufacturerUpdateWithoutHandlingProductsInput, ManufacturerUncheckedUpdateWithoutHandlingProductsInput>
  }

  export type ManufacturerUpdateWithoutHandlingProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partnerShops?: ShopOnManufacturerUpdateManyWithoutManufacturerNestedInput
    orders?: OrderUpdateManyWithoutManufacturerNestedInput
  }

  export type ManufacturerUncheckedUpdateWithoutHandlingProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partnerShops?: ShopOnManufacturerUncheckedUpdateManyWithoutManufacturerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutManufacturerNestedInput
  }

  export type ProductOnProductCategoryCreateWithoutCategoryInput = {
    product: ProductCreateNestedOneWithoutCategoriesInput
  }

  export type ProductOnProductCategoryUncheckedCreateWithoutCategoryInput = {
    productId: string
  }

  export type ProductOnProductCategoryCreateOrConnectWithoutCategoryInput = {
    where: ProductOnProductCategoryWhereUniqueInput
    create: XOR<ProductOnProductCategoryCreateWithoutCategoryInput, ProductOnProductCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ProductOnProductCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductOnProductCategoryWhereUniqueInput
    update: XOR<ProductOnProductCategoryUpdateWithoutCategoryInput, ProductOnProductCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductOnProductCategoryCreateWithoutCategoryInput, ProductOnProductCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ProductOnProductCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductOnProductCategoryWhereUniqueInput
    data: XOR<ProductOnProductCategoryUpdateWithoutCategoryInput, ProductOnProductCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductOnProductCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductOnProductCategoryScalarWhereInput
    data: XOR<ProductOnProductCategoryUpdateManyMutationInput, ProductOnProductCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductCreateWithoutCategoriesInput = {
    id?: string
    name: string
    description: string
    manufacturers?: ManufacturerHandlingProductsCreateNestedManyWithoutProductInput
    orderItem?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    description: string
    manufacturers?: ManufacturerHandlingProductsUncheckedCreateNestedManyWithoutProductInput
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductCategoryCreateWithoutProductsInput = {
    id?: string
    name: string
  }

  export type ProductCategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
  }

  export type ProductCategoryCreateOrConnectWithoutProductsInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutCategoriesInput = {
    update: XOR<ProductUpdateWithoutCategoriesInput, ProductUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCategoriesInput, ProductUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    manufacturers?: ManufacturerHandlingProductsUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    manufacturers?: ManufacturerHandlingProductsUncheckedUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCategoryUpsertWithoutProductsInput = {
    update: XOR<ProductCategoryUpdateWithoutProductsInput, ProductCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    where?: ProductCategoryWhereInput
  }

  export type ProductCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: ProductCategoryWhereInput
    data: XOR<ProductCategoryUpdateWithoutProductsInput, ProductCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductCategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ShopCreateWithoutOrdersInput = {
    id?: string
    name: string
    description: string
    partnerManufacturers?: ShopOnManufacturerCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    description: string
    partnerManufacturers?: ShopOnManufacturerUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutOrdersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutOrdersInput, ShopUncheckedCreateWithoutOrdersInput>
  }

  export type ManufacturerCreateWithoutOrdersInput = {
    id?: string
    name: string
    description: string
    handlingProducts?: ManufacturerHandlingProductsCreateNestedManyWithoutManufacturerInput
    partnerShops?: ShopOnManufacturerCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturerUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    description: string
    handlingProducts?: ManufacturerHandlingProductsUncheckedCreateNestedManyWithoutManufacturerInput
    partnerShops?: ShopOnManufacturerUncheckedCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturerCreateOrConnectWithoutOrdersInput = {
    where: ManufacturerWhereUniqueInput
    create: XOR<ManufacturerCreateWithoutOrdersInput, ManufacturerUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    quantity: number
    product: ProductCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    productId: string
    quantity: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type ShopUpsertWithoutOrdersInput = {
    update: XOR<ShopUpdateWithoutOrdersInput, ShopUncheckedUpdateWithoutOrdersInput>
    create: XOR<ShopCreateWithoutOrdersInput, ShopUncheckedCreateWithoutOrdersInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutOrdersInput, ShopUncheckedUpdateWithoutOrdersInput>
  }

  export type ShopUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partnerManufacturers?: ShopOnManufacturerUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partnerManufacturers?: ShopOnManufacturerUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ManufacturerUpsertWithoutOrdersInput = {
    update: XOR<ManufacturerUpdateWithoutOrdersInput, ManufacturerUncheckedUpdateWithoutOrdersInput>
    create: XOR<ManufacturerCreateWithoutOrdersInput, ManufacturerUncheckedCreateWithoutOrdersInput>
    where?: ManufacturerWhereInput
  }

  export type ManufacturerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ManufacturerWhereInput
    data: XOR<ManufacturerUpdateWithoutOrdersInput, ManufacturerUncheckedUpdateWithoutOrdersInput>
  }

  export type ManufacturerUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    handlingProducts?: ManufacturerHandlingProductsUpdateManyWithoutManufacturerNestedInput
    partnerShops?: ShopOnManufacturerUpdateManyWithoutManufacturerNestedInput
  }

  export type ManufacturerUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    handlingProducts?: ManufacturerHandlingProductsUncheckedUpdateManyWithoutManufacturerNestedInput
    partnerShops?: ShopOnManufacturerUncheckedUpdateManyWithoutManufacturerNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    approved?: boolean
    orderAt?: Date | string
    shop: ShopCreateNestedOneWithoutOrdersInput
    manufacturer: ManufacturerCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    shopId: string
    manufacturerId: string
    approved?: boolean
    orderAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutOrderItemInput = {
    id?: string
    name: string
    description: string
    categories?: ProductOnProductCategoryCreateNestedManyWithoutProductInput
    manufacturers?: ManufacturerHandlingProductsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemInput = {
    id?: string
    name: string
    description: string
    categories?: ProductOnProductCategoryUncheckedCreateNestedManyWithoutProductInput
    manufacturers?: ManufacturerHandlingProductsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    orderAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
    manufacturer?: ManufacturerUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    manufacturerId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    orderAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutOrderItemInput = {
    update: XOR<ProductUpdateWithoutOrderItemInput, ProductUncheckedUpdateWithoutOrderItemInput>
    create: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemInput, ProductUncheckedUpdateWithoutOrderItemInput>
  }

  export type ProductUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: ProductOnProductCategoryUpdateManyWithoutProductNestedInput
    manufacturers?: ManufacturerHandlingProductsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: ProductOnProductCategoryUncheckedUpdateManyWithoutProductNestedInput
    manufacturers?: ManufacturerHandlingProductsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ShopOnManufacturerUpdateWithoutShopInput = {
    manufacturer?: ManufacturerUpdateOneRequiredWithoutPartnerShopsNestedInput
  }

  export type ShopOnManufacturerUncheckedUpdateWithoutShopInput = {
    manufacturerId?: StringFieldUpdateOperationsInput | string
  }

  export type ShopOnManufacturerUncheckedUpdateManyWithoutShopInput = {
    manufacturerId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    orderAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturer?: ManufacturerUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    manufacturerId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    orderAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    manufacturerId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    orderAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManufacturerHandlingProductsUpdateWithoutManufacturerInput = {
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutManufacturersNestedInput
  }

  export type ManufacturerHandlingProductsUncheckedUpdateWithoutManufacturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ManufacturerHandlingProductsUncheckedUpdateManyWithoutManufacturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ShopOnManufacturerUpdateWithoutManufacturerInput = {
    shop?: ShopUpdateOneRequiredWithoutPartnerManufacturersNestedInput
  }

  export type ShopOnManufacturerUncheckedUpdateWithoutManufacturerInput = {
    shopId?: StringFieldUpdateOperationsInput | string
  }

  export type ShopOnManufacturerUncheckedUpdateManyWithoutManufacturerInput = {
    shopId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutManufacturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    orderAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutManufacturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    orderAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutManufacturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    orderAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOnProductCategoryUpdateWithoutProductInput = {
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductOnProductCategoryUncheckedUpdateWithoutProductInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductOnProductCategoryUncheckedUpdateManyWithoutProductInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ManufacturerHandlingProductsUpdateWithoutProductInput = {
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    manufacturer?: ManufacturerUpdateOneRequiredWithoutHandlingProductsNestedInput
  }

  export type ManufacturerHandlingProductsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    manufacturerId?: StringFieldUpdateOperationsInput | string
  }

  export type ManufacturerHandlingProductsUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    manufacturerId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductOnProductCategoryUpdateWithoutCategoryInput = {
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type ProductOnProductCategoryUncheckedUpdateWithoutCategoryInput = {
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductOnProductCategoryUncheckedUpdateManyWithoutCategoryInput = {
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ShopCountOutputTypeDefaultArgs instead
     */
    export type ShopCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManufacturerCountOutputTypeDefaultArgs instead
     */
    export type ManufacturerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManufacturerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCategoryCountOutputTypeDefaultArgs instead
     */
    export type ProductCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopDefaultArgs instead
     */
    export type ShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManufacturerDefaultArgs instead
     */
    export type ManufacturerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManufacturerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopOnManufacturerDefaultArgs instead
     */
    export type ShopOnManufacturerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopOnManufacturerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManufacturerHandlingProductsDefaultArgs instead
     */
    export type ManufacturerHandlingProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManufacturerHandlingProductsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCategoryDefaultArgs instead
     */
    export type ProductCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductOnProductCategoryDefaultArgs instead
     */
    export type ProductOnProductCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductOnProductCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemDefaultArgs instead
     */
    export type OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemDefaultArgs<ExtArgs>

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