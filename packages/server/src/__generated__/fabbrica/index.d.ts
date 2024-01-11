import type { Shop } from "../prisma-client-js";
import type { Manufacturer } from "../prisma-client-js";
import type { ShopOnManufacturer } from "../prisma-client-js";
import type { Product } from "../prisma-client-js";
import type { ManufacturerHandlingProducts } from "../prisma-client-js";
import type { ProductCategory } from "../prisma-client-js";
import type { ProductOnProductCategory } from "../prisma-client-js";
import type { Invoice } from "../prisma-client-js";
import type { InvoiceItem } from "../prisma-client-js";
import { Prisma } from "../prisma-client-js";
import { Resolver } from "@quramy/prisma-fabbrica/lib/internal";
export { initialize, resetSequence, registerScalarFieldValueGenerator, resetScalarFieldValueGenerator } from "@quramy/prisma-fabbrica/lib/internal";
type BuildDataOptions = {
    readonly seq: number;
};
type ShopFactoryDefineInput = {
    id?: string;
    name?: string;
    description?: string;
    partnerManufacturers?: Prisma.ShopOnManufacturerCreateNestedManyWithoutShopInput;
    invoice?: Prisma.InvoiceCreateNestedManyWithoutShopInput;
};
type ShopFactoryDefineOptions = {
    defaultData?: Resolver<ShopFactoryDefineInput, BuildDataOptions>;
    traits?: {
        [traitName: string | symbol]: {
            data: Resolver<Partial<ShopFactoryDefineInput>, BuildDataOptions>;
        };
    };
};
type ShopTraitKeys<TOptions extends ShopFactoryDefineOptions> = keyof TOptions["traits"];
export interface ShopFactoryInterfaceWithoutTraits {
    readonly _factoryFor: "Shop";
    build(inputData?: Partial<Prisma.ShopCreateInput>): PromiseLike<Prisma.ShopCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.ShopCreateInput>): PromiseLike<Prisma.ShopCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.ShopCreateInput>[]): PromiseLike<Prisma.ShopCreateInput[]>;
    pickForConnect(inputData: Shop): Pick<Shop, "id">;
    create(inputData?: Partial<Prisma.ShopCreateInput>): PromiseLike<Shop>;
    createList(inputData: number | readonly Partial<Prisma.ShopCreateInput>[]): PromiseLike<Shop[]>;
    createForConnect(inputData?: Partial<Prisma.ShopCreateInput>): PromiseLike<Pick<Shop, "id">>;
}
export interface ShopFactoryInterface<TOptions extends ShopFactoryDefineOptions = ShopFactoryDefineOptions> extends ShopFactoryInterfaceWithoutTraits {
    use(name: ShopTraitKeys<TOptions>, ...names: readonly ShopTraitKeys<TOptions>[]): ShopFactoryInterfaceWithoutTraits;
}
/**
 * Define factory for {@link Shop} model.
 *
 * @param options
 * @returns factory {@link ShopFactoryInterface}
 */
export declare function defineShopFactory<TOptions extends ShopFactoryDefineOptions>(options?: TOptions): ShopFactoryInterface<TOptions>;
type ManufacturerFactoryDefineInput = {
    id?: string;
    name?: string;
    description?: string;
    handlingProducts?: Prisma.ManufacturerHandlingProductsCreateNestedManyWithoutManufacturerInput;
    partnerShops?: Prisma.ShopOnManufacturerCreateNestedManyWithoutManufacturerInput;
    invoice?: Prisma.InvoiceCreateNestedManyWithoutManufacturerInput;
};
type ManufacturerFactoryDefineOptions = {
    defaultData?: Resolver<ManufacturerFactoryDefineInput, BuildDataOptions>;
    traits?: {
        [traitName: string | symbol]: {
            data: Resolver<Partial<ManufacturerFactoryDefineInput>, BuildDataOptions>;
        };
    };
};
type ManufacturerTraitKeys<TOptions extends ManufacturerFactoryDefineOptions> = keyof TOptions["traits"];
export interface ManufacturerFactoryInterfaceWithoutTraits {
    readonly _factoryFor: "Manufacturer";
    build(inputData?: Partial<Prisma.ManufacturerCreateInput>): PromiseLike<Prisma.ManufacturerCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.ManufacturerCreateInput>): PromiseLike<Prisma.ManufacturerCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.ManufacturerCreateInput>[]): PromiseLike<Prisma.ManufacturerCreateInput[]>;
    pickForConnect(inputData: Manufacturer): Pick<Manufacturer, "id">;
    create(inputData?: Partial<Prisma.ManufacturerCreateInput>): PromiseLike<Manufacturer>;
    createList(inputData: number | readonly Partial<Prisma.ManufacturerCreateInput>[]): PromiseLike<Manufacturer[]>;
    createForConnect(inputData?: Partial<Prisma.ManufacturerCreateInput>): PromiseLike<Pick<Manufacturer, "id">>;
}
export interface ManufacturerFactoryInterface<TOptions extends ManufacturerFactoryDefineOptions = ManufacturerFactoryDefineOptions> extends ManufacturerFactoryInterfaceWithoutTraits {
    use(name: ManufacturerTraitKeys<TOptions>, ...names: readonly ManufacturerTraitKeys<TOptions>[]): ManufacturerFactoryInterfaceWithoutTraits;
}
/**
 * Define factory for {@link Manufacturer} model.
 *
 * @param options
 * @returns factory {@link ManufacturerFactoryInterface}
 */
export declare function defineManufacturerFactory<TOptions extends ManufacturerFactoryDefineOptions>(options?: TOptions): ManufacturerFactoryInterface<TOptions>;
type ShopOnManufacturershopFactory = {
    _factoryFor: "Shop";
    build: () => PromiseLike<Prisma.ShopCreateNestedOneWithoutPartnerManufacturersInput["create"]>;
};
type ShopOnManufacturermanufacturerFactory = {
    _factoryFor: "Manufacturer";
    build: () => PromiseLike<Prisma.ManufacturerCreateNestedOneWithoutPartnerShopsInput["create"]>;
};
type ShopOnManufacturerFactoryDefineInput = {
    shop: ShopOnManufacturershopFactory | Prisma.ShopCreateNestedOneWithoutPartnerManufacturersInput;
    manufacturer: ShopOnManufacturermanufacturerFactory | Prisma.ManufacturerCreateNestedOneWithoutPartnerShopsInput;
};
type ShopOnManufacturerFactoryDefineOptions = {
    defaultData: Resolver<ShopOnManufacturerFactoryDefineInput, BuildDataOptions>;
    traits?: {
        [traitName: string | symbol]: {
            data: Resolver<Partial<ShopOnManufacturerFactoryDefineInput>, BuildDataOptions>;
        };
    };
};
type ShopOnManufacturerTraitKeys<TOptions extends ShopOnManufacturerFactoryDefineOptions> = keyof TOptions["traits"];
export interface ShopOnManufacturerFactoryInterfaceWithoutTraits {
    readonly _factoryFor: "ShopOnManufacturer";
    build(inputData?: Partial<Prisma.ShopOnManufacturerCreateInput>): PromiseLike<Prisma.ShopOnManufacturerCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.ShopOnManufacturerCreateInput>): PromiseLike<Prisma.ShopOnManufacturerCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.ShopOnManufacturerCreateInput>[]): PromiseLike<Prisma.ShopOnManufacturerCreateInput[]>;
    pickForConnect(inputData: ShopOnManufacturer): Pick<ShopOnManufacturer, "shopId" | "manufacturerId">;
    create(inputData?: Partial<Prisma.ShopOnManufacturerCreateInput>): PromiseLike<ShopOnManufacturer>;
    createList(inputData: number | readonly Partial<Prisma.ShopOnManufacturerCreateInput>[]): PromiseLike<ShopOnManufacturer[]>;
    createForConnect(inputData?: Partial<Prisma.ShopOnManufacturerCreateInput>): PromiseLike<Pick<ShopOnManufacturer, "shopId" | "manufacturerId">>;
}
export interface ShopOnManufacturerFactoryInterface<TOptions extends ShopOnManufacturerFactoryDefineOptions = ShopOnManufacturerFactoryDefineOptions> extends ShopOnManufacturerFactoryInterfaceWithoutTraits {
    use(name: ShopOnManufacturerTraitKeys<TOptions>, ...names: readonly ShopOnManufacturerTraitKeys<TOptions>[]): ShopOnManufacturerFactoryInterfaceWithoutTraits;
}
/**
 * Define factory for {@link ShopOnManufacturer} model.
 *
 * @param options
 * @returns factory {@link ShopOnManufacturerFactoryInterface}
 */
export declare function defineShopOnManufacturerFactory<TOptions extends ShopOnManufacturerFactoryDefineOptions>(options: TOptions): ShopOnManufacturerFactoryInterface<TOptions>;
type ProductFactoryDefineInput = {
    id?: string;
    name?: string;
    description?: string;
    categories?: Prisma.ProductOnProductCategoryCreateNestedManyWithoutProductInput;
    manufacturers?: Prisma.ManufacturerHandlingProductsCreateNestedManyWithoutProductInput;
    invoiceItem?: Prisma.InvoiceItemCreateNestedManyWithoutProductInput;
};
type ProductFactoryDefineOptions = {
    defaultData?: Resolver<ProductFactoryDefineInput, BuildDataOptions>;
    traits?: {
        [traitName: string | symbol]: {
            data: Resolver<Partial<ProductFactoryDefineInput>, BuildDataOptions>;
        };
    };
};
type ProductTraitKeys<TOptions extends ProductFactoryDefineOptions> = keyof TOptions["traits"];
export interface ProductFactoryInterfaceWithoutTraits {
    readonly _factoryFor: "Product";
    build(inputData?: Partial<Prisma.ProductCreateInput>): PromiseLike<Prisma.ProductCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.ProductCreateInput>): PromiseLike<Prisma.ProductCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.ProductCreateInput>[]): PromiseLike<Prisma.ProductCreateInput[]>;
    pickForConnect(inputData: Product): Pick<Product, "id">;
    create(inputData?: Partial<Prisma.ProductCreateInput>): PromiseLike<Product>;
    createList(inputData: number | readonly Partial<Prisma.ProductCreateInput>[]): PromiseLike<Product[]>;
    createForConnect(inputData?: Partial<Prisma.ProductCreateInput>): PromiseLike<Pick<Product, "id">>;
}
export interface ProductFactoryInterface<TOptions extends ProductFactoryDefineOptions = ProductFactoryDefineOptions> extends ProductFactoryInterfaceWithoutTraits {
    use(name: ProductTraitKeys<TOptions>, ...names: readonly ProductTraitKeys<TOptions>[]): ProductFactoryInterfaceWithoutTraits;
}
/**
 * Define factory for {@link Product} model.
 *
 * @param options
 * @returns factory {@link ProductFactoryInterface}
 */
export declare function defineProductFactory<TOptions extends ProductFactoryDefineOptions>(options?: TOptions): ProductFactoryInterface<TOptions>;
type ManufacturerHandlingProductsproductFactory = {
    _factoryFor: "Product";
    build: () => PromiseLike<Prisma.ProductCreateNestedOneWithoutManufacturersInput["create"]>;
};
type ManufacturerHandlingProductsmanufacturerFactory = {
    _factoryFor: "Manufacturer";
    build: () => PromiseLike<Prisma.ManufacturerCreateNestedOneWithoutHandlingProductsInput["create"]>;
};
type ManufacturerHandlingProductsFactoryDefineInput = {
    stock?: number;
    product: ManufacturerHandlingProductsproductFactory | Prisma.ProductCreateNestedOneWithoutManufacturersInput;
    manufacturer: ManufacturerHandlingProductsmanufacturerFactory | Prisma.ManufacturerCreateNestedOneWithoutHandlingProductsInput;
};
type ManufacturerHandlingProductsFactoryDefineOptions = {
    defaultData: Resolver<ManufacturerHandlingProductsFactoryDefineInput, BuildDataOptions>;
    traits?: {
        [traitName: string | symbol]: {
            data: Resolver<Partial<ManufacturerHandlingProductsFactoryDefineInput>, BuildDataOptions>;
        };
    };
};
type ManufacturerHandlingProductsTraitKeys<TOptions extends ManufacturerHandlingProductsFactoryDefineOptions> = keyof TOptions["traits"];
export interface ManufacturerHandlingProductsFactoryInterfaceWithoutTraits {
    readonly _factoryFor: "ManufacturerHandlingProducts";
    build(inputData?: Partial<Prisma.ManufacturerHandlingProductsCreateInput>): PromiseLike<Prisma.ManufacturerHandlingProductsCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.ManufacturerHandlingProductsCreateInput>): PromiseLike<Prisma.ManufacturerHandlingProductsCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.ManufacturerHandlingProductsCreateInput>[]): PromiseLike<Prisma.ManufacturerHandlingProductsCreateInput[]>;
    pickForConnect(inputData: ManufacturerHandlingProducts): Pick<ManufacturerHandlingProducts, "id">;
    create(inputData?: Partial<Prisma.ManufacturerHandlingProductsCreateInput>): PromiseLike<ManufacturerHandlingProducts>;
    createList(inputData: number | readonly Partial<Prisma.ManufacturerHandlingProductsCreateInput>[]): PromiseLike<ManufacturerHandlingProducts[]>;
    createForConnect(inputData?: Partial<Prisma.ManufacturerHandlingProductsCreateInput>): PromiseLike<Pick<ManufacturerHandlingProducts, "id">>;
}
export interface ManufacturerHandlingProductsFactoryInterface<TOptions extends ManufacturerHandlingProductsFactoryDefineOptions = ManufacturerHandlingProductsFactoryDefineOptions> extends ManufacturerHandlingProductsFactoryInterfaceWithoutTraits {
    use(name: ManufacturerHandlingProductsTraitKeys<TOptions>, ...names: readonly ManufacturerHandlingProductsTraitKeys<TOptions>[]): ManufacturerHandlingProductsFactoryInterfaceWithoutTraits;
}
/**
 * Define factory for {@link ManufacturerHandlingProducts} model.
 *
 * @param options
 * @returns factory {@link ManufacturerHandlingProductsFactoryInterface}
 */
export declare function defineManufacturerHandlingProductsFactory<TOptions extends ManufacturerHandlingProductsFactoryDefineOptions>(options: TOptions): ManufacturerHandlingProductsFactoryInterface<TOptions>;
type ProductCategoryFactoryDefineInput = {
    id?: string;
    name?: string;
    products?: Prisma.ProductOnProductCategoryCreateNestedManyWithoutCategoryInput;
};
type ProductCategoryFactoryDefineOptions = {
    defaultData?: Resolver<ProductCategoryFactoryDefineInput, BuildDataOptions>;
    traits?: {
        [traitName: string | symbol]: {
            data: Resolver<Partial<ProductCategoryFactoryDefineInput>, BuildDataOptions>;
        };
    };
};
type ProductCategoryTraitKeys<TOptions extends ProductCategoryFactoryDefineOptions> = keyof TOptions["traits"];
export interface ProductCategoryFactoryInterfaceWithoutTraits {
    readonly _factoryFor: "ProductCategory";
    build(inputData?: Partial<Prisma.ProductCategoryCreateInput>): PromiseLike<Prisma.ProductCategoryCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.ProductCategoryCreateInput>): PromiseLike<Prisma.ProductCategoryCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.ProductCategoryCreateInput>[]): PromiseLike<Prisma.ProductCategoryCreateInput[]>;
    pickForConnect(inputData: ProductCategory): Pick<ProductCategory, "id">;
    create(inputData?: Partial<Prisma.ProductCategoryCreateInput>): PromiseLike<ProductCategory>;
    createList(inputData: number | readonly Partial<Prisma.ProductCategoryCreateInput>[]): PromiseLike<ProductCategory[]>;
    createForConnect(inputData?: Partial<Prisma.ProductCategoryCreateInput>): PromiseLike<Pick<ProductCategory, "id">>;
}
export interface ProductCategoryFactoryInterface<TOptions extends ProductCategoryFactoryDefineOptions = ProductCategoryFactoryDefineOptions> extends ProductCategoryFactoryInterfaceWithoutTraits {
    use(name: ProductCategoryTraitKeys<TOptions>, ...names: readonly ProductCategoryTraitKeys<TOptions>[]): ProductCategoryFactoryInterfaceWithoutTraits;
}
/**
 * Define factory for {@link ProductCategory} model.
 *
 * @param options
 * @returns factory {@link ProductCategoryFactoryInterface}
 */
export declare function defineProductCategoryFactory<TOptions extends ProductCategoryFactoryDefineOptions>(options?: TOptions): ProductCategoryFactoryInterface<TOptions>;
type ProductOnProductCategoryproductFactory = {
    _factoryFor: "Product";
    build: () => PromiseLike<Prisma.ProductCreateNestedOneWithoutCategoriesInput["create"]>;
};
type ProductOnProductCategorycategoryFactory = {
    _factoryFor: "ProductCategory";
    build: () => PromiseLike<Prisma.ProductCategoryCreateNestedOneWithoutProductsInput["create"]>;
};
type ProductOnProductCategoryFactoryDefineInput = {
    product: ProductOnProductCategoryproductFactory | Prisma.ProductCreateNestedOneWithoutCategoriesInput;
    category: ProductOnProductCategorycategoryFactory | Prisma.ProductCategoryCreateNestedOneWithoutProductsInput;
};
type ProductOnProductCategoryFactoryDefineOptions = {
    defaultData: Resolver<ProductOnProductCategoryFactoryDefineInput, BuildDataOptions>;
    traits?: {
        [traitName: string | symbol]: {
            data: Resolver<Partial<ProductOnProductCategoryFactoryDefineInput>, BuildDataOptions>;
        };
    };
};
type ProductOnProductCategoryTraitKeys<TOptions extends ProductOnProductCategoryFactoryDefineOptions> = keyof TOptions["traits"];
export interface ProductOnProductCategoryFactoryInterfaceWithoutTraits {
    readonly _factoryFor: "ProductOnProductCategory";
    build(inputData?: Partial<Prisma.ProductOnProductCategoryCreateInput>): PromiseLike<Prisma.ProductOnProductCategoryCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.ProductOnProductCategoryCreateInput>): PromiseLike<Prisma.ProductOnProductCategoryCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.ProductOnProductCategoryCreateInput>[]): PromiseLike<Prisma.ProductOnProductCategoryCreateInput[]>;
    pickForConnect(inputData: ProductOnProductCategory): Pick<ProductOnProductCategory, "productId" | "categoryId">;
    create(inputData?: Partial<Prisma.ProductOnProductCategoryCreateInput>): PromiseLike<ProductOnProductCategory>;
    createList(inputData: number | readonly Partial<Prisma.ProductOnProductCategoryCreateInput>[]): PromiseLike<ProductOnProductCategory[]>;
    createForConnect(inputData?: Partial<Prisma.ProductOnProductCategoryCreateInput>): PromiseLike<Pick<ProductOnProductCategory, "productId" | "categoryId">>;
}
export interface ProductOnProductCategoryFactoryInterface<TOptions extends ProductOnProductCategoryFactoryDefineOptions = ProductOnProductCategoryFactoryDefineOptions> extends ProductOnProductCategoryFactoryInterfaceWithoutTraits {
    use(name: ProductOnProductCategoryTraitKeys<TOptions>, ...names: readonly ProductOnProductCategoryTraitKeys<TOptions>[]): ProductOnProductCategoryFactoryInterfaceWithoutTraits;
}
/**
 * Define factory for {@link ProductOnProductCategory} model.
 *
 * @param options
 * @returns factory {@link ProductOnProductCategoryFactoryInterface}
 */
export declare function defineProductOnProductCategoryFactory<TOptions extends ProductOnProductCategoryFactoryDefineOptions>(options: TOptions): ProductOnProductCategoryFactoryInterface<TOptions>;
type InvoiceshopFactory = {
    _factoryFor: "Shop";
    build: () => PromiseLike<Prisma.ShopCreateNestedOneWithoutInvoiceInput["create"]>;
};
type InvoicemanufacturerFactory = {
    _factoryFor: "Manufacturer";
    build: () => PromiseLike<Prisma.ManufacturerCreateNestedOneWithoutInvoiceInput["create"]>;
};
type InvoiceFactoryDefineInput = {
    id?: string;
    shop: InvoiceshopFactory | Prisma.ShopCreateNestedOneWithoutInvoiceInput;
    manufacturer: InvoicemanufacturerFactory | Prisma.ManufacturerCreateNestedOneWithoutInvoiceInput;
    items?: Prisma.InvoiceItemCreateNestedManyWithoutInvoiceInput;
};
type InvoiceFactoryDefineOptions = {
    defaultData: Resolver<InvoiceFactoryDefineInput, BuildDataOptions>;
    traits?: {
        [traitName: string | symbol]: {
            data: Resolver<Partial<InvoiceFactoryDefineInput>, BuildDataOptions>;
        };
    };
};
type InvoiceTraitKeys<TOptions extends InvoiceFactoryDefineOptions> = keyof TOptions["traits"];
export interface InvoiceFactoryInterfaceWithoutTraits {
    readonly _factoryFor: "Invoice";
    build(inputData?: Partial<Prisma.InvoiceCreateInput>): PromiseLike<Prisma.InvoiceCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.InvoiceCreateInput>): PromiseLike<Prisma.InvoiceCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.InvoiceCreateInput>[]): PromiseLike<Prisma.InvoiceCreateInput[]>;
    pickForConnect(inputData: Invoice): Pick<Invoice, "id">;
    create(inputData?: Partial<Prisma.InvoiceCreateInput>): PromiseLike<Invoice>;
    createList(inputData: number | readonly Partial<Prisma.InvoiceCreateInput>[]): PromiseLike<Invoice[]>;
    createForConnect(inputData?: Partial<Prisma.InvoiceCreateInput>): PromiseLike<Pick<Invoice, "id">>;
}
export interface InvoiceFactoryInterface<TOptions extends InvoiceFactoryDefineOptions = InvoiceFactoryDefineOptions> extends InvoiceFactoryInterfaceWithoutTraits {
    use(name: InvoiceTraitKeys<TOptions>, ...names: readonly InvoiceTraitKeys<TOptions>[]): InvoiceFactoryInterfaceWithoutTraits;
}
/**
 * Define factory for {@link Invoice} model.
 *
 * @param options
 * @returns factory {@link InvoiceFactoryInterface}
 */
export declare function defineInvoiceFactory<TOptions extends InvoiceFactoryDefineOptions>(options: TOptions): InvoiceFactoryInterface<TOptions>;
type InvoiceIteminvoiceFactory = {
    _factoryFor: "Invoice";
    build: () => PromiseLike<Prisma.InvoiceCreateNestedOneWithoutItemsInput["create"]>;
};
type InvoiceItemproductFactory = {
    _factoryFor: "Product";
    build: () => PromiseLike<Prisma.ProductCreateNestedOneWithoutInvoiceItemInput["create"]>;
};
type InvoiceItemFactoryDefineInput = {
    quantity?: number;
    invoice: InvoiceIteminvoiceFactory | Prisma.InvoiceCreateNestedOneWithoutItemsInput;
    product: InvoiceItemproductFactory | Prisma.ProductCreateNestedOneWithoutInvoiceItemInput;
};
type InvoiceItemFactoryDefineOptions = {
    defaultData: Resolver<InvoiceItemFactoryDefineInput, BuildDataOptions>;
    traits?: {
        [traitName: string | symbol]: {
            data: Resolver<Partial<InvoiceItemFactoryDefineInput>, BuildDataOptions>;
        };
    };
};
type InvoiceItemTraitKeys<TOptions extends InvoiceItemFactoryDefineOptions> = keyof TOptions["traits"];
export interface InvoiceItemFactoryInterfaceWithoutTraits {
    readonly _factoryFor: "InvoiceItem";
    build(inputData?: Partial<Prisma.InvoiceItemCreateInput>): PromiseLike<Prisma.InvoiceItemCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.InvoiceItemCreateInput>): PromiseLike<Prisma.InvoiceItemCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.InvoiceItemCreateInput>[]): PromiseLike<Prisma.InvoiceItemCreateInput[]>;
    pickForConnect(inputData: InvoiceItem): Pick<InvoiceItem, "productId" | "invoiceId">;
    create(inputData?: Partial<Prisma.InvoiceItemCreateInput>): PromiseLike<InvoiceItem>;
    createList(inputData: number | readonly Partial<Prisma.InvoiceItemCreateInput>[]): PromiseLike<InvoiceItem[]>;
    createForConnect(inputData?: Partial<Prisma.InvoiceItemCreateInput>): PromiseLike<Pick<InvoiceItem, "productId" | "invoiceId">>;
}
export interface InvoiceItemFactoryInterface<TOptions extends InvoiceItemFactoryDefineOptions = InvoiceItemFactoryDefineOptions> extends InvoiceItemFactoryInterfaceWithoutTraits {
    use(name: InvoiceItemTraitKeys<TOptions>, ...names: readonly InvoiceItemTraitKeys<TOptions>[]): InvoiceItemFactoryInterfaceWithoutTraits;
}
/**
 * Define factory for {@link InvoiceItem} model.
 *
 * @param options
 * @returns factory {@link InvoiceItemFactoryInterface}
 */
export declare function defineInvoiceItemFactory<TOptions extends InvoiceItemFactoryDefineOptions>(options: TOptions): InvoiceItemFactoryInterface<TOptions>;
