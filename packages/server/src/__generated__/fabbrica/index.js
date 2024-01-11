import { getClient, createScreener, getScalarFieldValueGenerator, normalizeResolver, normalizeList, getSequenceCounter, } from "@quramy/prisma-fabbrica/lib/internal";
export { initialize, resetSequence, registerScalarFieldValueGenerator, resetScalarFieldValueGenerator } from "@quramy/prisma-fabbrica/lib/internal";
const modelFieldDefinitions = [{
        name: "Shop",
        fields: [{
                name: "partnerManufacturers",
                type: "ShopOnManufacturer",
                relationName: "ShopToShopOnManufacturer"
            }, {
                name: "orders",
                type: "Order",
                relationName: "OrderToShop"
            }]
    }, {
        name: "Manufacturer",
        fields: [{
                name: "handlingProducts",
                type: "ManufacturerHandlingProducts",
                relationName: "ManufacturerToManufacturerHandlingProducts"
            }, {
                name: "partnerShops",
                type: "ShopOnManufacturer",
                relationName: "ManufacturerToShopOnManufacturer"
            }, {
                name: "orders",
                type: "Order",
                relationName: "ManufacturerToOrder"
            }]
    }, {
        name: "ShopOnManufacturer",
        fields: [{
                name: "shop",
                type: "Shop",
                relationName: "ShopToShopOnManufacturer"
            }, {
                name: "manufacturer",
                type: "Manufacturer",
                relationName: "ManufacturerToShopOnManufacturer"
            }]
    }, {
        name: "Product",
        fields: [{
                name: "categories",
                type: "ProductOnProductCategory",
                relationName: "ProductToProductOnProductCategory"
            }, {
                name: "manufacturers",
                type: "ManufacturerHandlingProducts",
                relationName: "ManufacturerHandlingProductsToProduct"
            }, {
                name: "orderItem",
                type: "OrderItem",
                relationName: "OrderItemToProduct"
            }]
    }, {
        name: "ManufacturerHandlingProducts",
        fields: [{
                name: "product",
                type: "Product",
                relationName: "ManufacturerHandlingProductsToProduct"
            }, {
                name: "manufacturer",
                type: "Manufacturer",
                relationName: "ManufacturerToManufacturerHandlingProducts"
            }]
    }, {
        name: "ProductCategory",
        fields: [{
                name: "products",
                type: "ProductOnProductCategory",
                relationName: "ProductCategoryToProductOnProductCategory"
            }]
    }, {
        name: "ProductOnProductCategory",
        fields: [{
                name: "product",
                type: "Product",
                relationName: "ProductToProductOnProductCategory"
            }, {
                name: "category",
                type: "ProductCategory",
                relationName: "ProductCategoryToProductOnProductCategory"
            }]
    }, {
        name: "Order",
        fields: [{
                name: "shop",
                type: "Shop",
                relationName: "OrderToShop"
            }, {
                name: "manufacturer",
                type: "Manufacturer",
                relationName: "ManufacturerToOrder"
            }, {
                name: "items",
                type: "OrderItem",
                relationName: "OrderToOrderItem"
            }]
    }, {
        name: "OrderItem",
        fields: [{
                name: "order",
                type: "Order",
                relationName: "OrderToOrderItem"
            }, {
                name: "product",
                type: "Product",
                relationName: "OrderItemToProduct"
            }]
    }];
function autoGenerateShopScalarsOrEnums({ seq }) {
    return {
        name: getScalarFieldValueGenerator().String({ modelName: "Shop", fieldName: "name", isId: false, isUnique: false, seq }),
        description: getScalarFieldValueGenerator().String({ modelName: "Shop", fieldName: "description", isId: false, isUnique: false, seq })
    };
}
function defineShopFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
    const getFactoryWithTraits = (traitKeys = []) => {
        const seqKey = {};
        const getSeq = () => getSequenceCounter(seqKey);
        const screen = createScreener("Shop", modelFieldDefinitions);
        const build = async (inputData = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateShopScalarsOrEnums({ seq });
            const resolveValue = normalizeResolver(defaultDataResolver ?? {});
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                const acc = await queue;
                const resolveTraitValue = normalizeResolver(traitsDefs[traitKey]?.data ?? {});
                const traitData = await resolveTraitValue({ seq });
                return {
                    ...acc,
                    ...traitData,
                };
            }, resolveValue({ seq }));
            const defaultAssociations = {};
            const data = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...inputData };
            return data;
        };
        const buildList = (inputData) => Promise.all(normalizeList(inputData).map(data => build(data)));
        const pickForConnect = (inputData) => ({
            id: inputData.id
        });
        const create = async (inputData = {}) => {
            const data = await build(inputData).then(screen);
            return await getClient().shop.create({ data });
        };
        const createList = (inputData) => Promise.all(normalizeList(inputData).map(data => create(data)));
        const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "Shop",
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name, ...names) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return {
        ...factory,
        use: useTraits,
    };
}
/**
 * Define factory for {@link Shop} model.
 *
 * @param options
 * @returns factory {@link ShopFactoryInterface}
 */
export function defineShopFactory(options) {
    return defineShopFactoryInternal(options ?? {});
}
function autoGenerateManufacturerScalarsOrEnums({ seq }) {
    return {
        name: getScalarFieldValueGenerator().String({ modelName: "Manufacturer", fieldName: "name", isId: false, isUnique: false, seq }),
        description: getScalarFieldValueGenerator().String({ modelName: "Manufacturer", fieldName: "description", isId: false, isUnique: false, seq })
    };
}
function defineManufacturerFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
    const getFactoryWithTraits = (traitKeys = []) => {
        const seqKey = {};
        const getSeq = () => getSequenceCounter(seqKey);
        const screen = createScreener("Manufacturer", modelFieldDefinitions);
        const build = async (inputData = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateManufacturerScalarsOrEnums({ seq });
            const resolveValue = normalizeResolver(defaultDataResolver ?? {});
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                const acc = await queue;
                const resolveTraitValue = normalizeResolver(traitsDefs[traitKey]?.data ?? {});
                const traitData = await resolveTraitValue({ seq });
                return {
                    ...acc,
                    ...traitData,
                };
            }, resolveValue({ seq }));
            const defaultAssociations = {};
            const data = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...inputData };
            return data;
        };
        const buildList = (inputData) => Promise.all(normalizeList(inputData).map(data => build(data)));
        const pickForConnect = (inputData) => ({
            id: inputData.id
        });
        const create = async (inputData = {}) => {
            const data = await build(inputData).then(screen);
            return await getClient().manufacturer.create({ data });
        };
        const createList = (inputData) => Promise.all(normalizeList(inputData).map(data => create(data)));
        const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "Manufacturer",
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name, ...names) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return {
        ...factory,
        use: useTraits,
    };
}
/**
 * Define factory for {@link Manufacturer} model.
 *
 * @param options
 * @returns factory {@link ManufacturerFactoryInterface}
 */
export function defineManufacturerFactory(options) {
    return defineManufacturerFactoryInternal(options ?? {});
}
function isShopOnManufacturershopFactory(x) {
    return x?._factoryFor === "Shop";
}
function isShopOnManufacturermanufacturerFactory(x) {
    return x?._factoryFor === "Manufacturer";
}
function autoGenerateShopOnManufacturerScalarsOrEnums({ seq }) {
    return {};
}
function defineShopOnManufacturerFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
    const getFactoryWithTraits = (traitKeys = []) => {
        const seqKey = {};
        const getSeq = () => getSequenceCounter(seqKey);
        const screen = createScreener("ShopOnManufacturer", modelFieldDefinitions);
        const build = async (inputData = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateShopOnManufacturerScalarsOrEnums({ seq });
            const resolveValue = normalizeResolver(defaultDataResolver ?? {});
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                const acc = await queue;
                const resolveTraitValue = normalizeResolver(traitsDefs[traitKey]?.data ?? {});
                const traitData = await resolveTraitValue({ seq });
                return {
                    ...acc,
                    ...traitData,
                };
            }, resolveValue({ seq }));
            const defaultAssociations = {
                shop: isShopOnManufacturershopFactory(defaultData.shop) ? {
                    create: await defaultData.shop.build()
                } : defaultData.shop,
                manufacturer: isShopOnManufacturermanufacturerFactory(defaultData.manufacturer) ? {
                    create: await defaultData.manufacturer.build()
                } : defaultData.manufacturer
            };
            const data = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...inputData };
            return data;
        };
        const buildList = (inputData) => Promise.all(normalizeList(inputData).map(data => build(data)));
        const pickForConnect = (inputData) => ({
            shopId: inputData.shopId,
            manufacturerId: inputData.manufacturerId
        });
        const create = async (inputData = {}) => {
            const data = await build(inputData).then(screen);
            return await getClient().shopOnManufacturer.create({ data });
        };
        const createList = (inputData) => Promise.all(normalizeList(inputData).map(data => create(data)));
        const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "ShopOnManufacturer",
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name, ...names) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return {
        ...factory,
        use: useTraits,
    };
}
/**
 * Define factory for {@link ShopOnManufacturer} model.
 *
 * @param options
 * @returns factory {@link ShopOnManufacturerFactoryInterface}
 */
export function defineShopOnManufacturerFactory(options) {
    return defineShopOnManufacturerFactoryInternal(options);
}
function autoGenerateProductScalarsOrEnums({ seq }) {
    return {
        name: getScalarFieldValueGenerator().String({ modelName: "Product", fieldName: "name", isId: false, isUnique: true, seq }),
        description: getScalarFieldValueGenerator().String({ modelName: "Product", fieldName: "description", isId: false, isUnique: false, seq })
    };
}
function defineProductFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
    const getFactoryWithTraits = (traitKeys = []) => {
        const seqKey = {};
        const getSeq = () => getSequenceCounter(seqKey);
        const screen = createScreener("Product", modelFieldDefinitions);
        const build = async (inputData = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateProductScalarsOrEnums({ seq });
            const resolveValue = normalizeResolver(defaultDataResolver ?? {});
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                const acc = await queue;
                const resolveTraitValue = normalizeResolver(traitsDefs[traitKey]?.data ?? {});
                const traitData = await resolveTraitValue({ seq });
                return {
                    ...acc,
                    ...traitData,
                };
            }, resolveValue({ seq }));
            const defaultAssociations = {};
            const data = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...inputData };
            return data;
        };
        const buildList = (inputData) => Promise.all(normalizeList(inputData).map(data => build(data)));
        const pickForConnect = (inputData) => ({
            id: inputData.id
        });
        const create = async (inputData = {}) => {
            const data = await build(inputData).then(screen);
            return await getClient().product.create({ data });
        };
        const createList = (inputData) => Promise.all(normalizeList(inputData).map(data => create(data)));
        const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "Product",
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name, ...names) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return {
        ...factory,
        use: useTraits,
    };
}
/**
 * Define factory for {@link Product} model.
 *
 * @param options
 * @returns factory {@link ProductFactoryInterface}
 */
export function defineProductFactory(options) {
    return defineProductFactoryInternal(options ?? {});
}
function isManufacturerHandlingProductsproductFactory(x) {
    return x?._factoryFor === "Product";
}
function isManufacturerHandlingProductsmanufacturerFactory(x) {
    return x?._factoryFor === "Manufacturer";
}
function autoGenerateManufacturerHandlingProductsScalarsOrEnums({ seq }) {
    return {
        stock: getScalarFieldValueGenerator().Int({ modelName: "ManufacturerHandlingProducts", fieldName: "stock", isId: false, isUnique: false, seq }),
        price: getScalarFieldValueGenerator().Int({ modelName: "ManufacturerHandlingProducts", fieldName: "price", isId: false, isUnique: false, seq })
    };
}
function defineManufacturerHandlingProductsFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
    const getFactoryWithTraits = (traitKeys = []) => {
        const seqKey = {};
        const getSeq = () => getSequenceCounter(seqKey);
        const screen = createScreener("ManufacturerHandlingProducts", modelFieldDefinitions);
        const build = async (inputData = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateManufacturerHandlingProductsScalarsOrEnums({ seq });
            const resolveValue = normalizeResolver(defaultDataResolver ?? {});
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                const acc = await queue;
                const resolveTraitValue = normalizeResolver(traitsDefs[traitKey]?.data ?? {});
                const traitData = await resolveTraitValue({ seq });
                return {
                    ...acc,
                    ...traitData,
                };
            }, resolveValue({ seq }));
            const defaultAssociations = {
                product: isManufacturerHandlingProductsproductFactory(defaultData.product) ? {
                    create: await defaultData.product.build()
                } : defaultData.product,
                manufacturer: isManufacturerHandlingProductsmanufacturerFactory(defaultData.manufacturer) ? {
                    create: await defaultData.manufacturer.build()
                } : defaultData.manufacturer
            };
            const data = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...inputData };
            return data;
        };
        const buildList = (inputData) => Promise.all(normalizeList(inputData).map(data => build(data)));
        const pickForConnect = (inputData) => ({
            id: inputData.id
        });
        const create = async (inputData = {}) => {
            const data = await build(inputData).then(screen);
            return await getClient().manufacturerHandlingProducts.create({ data });
        };
        const createList = (inputData) => Promise.all(normalizeList(inputData).map(data => create(data)));
        const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "ManufacturerHandlingProducts",
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name, ...names) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return {
        ...factory,
        use: useTraits,
    };
}
/**
 * Define factory for {@link ManufacturerHandlingProducts} model.
 *
 * @param options
 * @returns factory {@link ManufacturerHandlingProductsFactoryInterface}
 */
export function defineManufacturerHandlingProductsFactory(options) {
    return defineManufacturerHandlingProductsFactoryInternal(options);
}
function autoGenerateProductCategoryScalarsOrEnums({ seq }) {
    return {
        name: getScalarFieldValueGenerator().String({ modelName: "ProductCategory", fieldName: "name", isId: false, isUnique: true, seq })
    };
}
function defineProductCategoryFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
    const getFactoryWithTraits = (traitKeys = []) => {
        const seqKey = {};
        const getSeq = () => getSequenceCounter(seqKey);
        const screen = createScreener("ProductCategory", modelFieldDefinitions);
        const build = async (inputData = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateProductCategoryScalarsOrEnums({ seq });
            const resolveValue = normalizeResolver(defaultDataResolver ?? {});
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                const acc = await queue;
                const resolveTraitValue = normalizeResolver(traitsDefs[traitKey]?.data ?? {});
                const traitData = await resolveTraitValue({ seq });
                return {
                    ...acc,
                    ...traitData,
                };
            }, resolveValue({ seq }));
            const defaultAssociations = {};
            const data = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...inputData };
            return data;
        };
        const buildList = (inputData) => Promise.all(normalizeList(inputData).map(data => build(data)));
        const pickForConnect = (inputData) => ({
            id: inputData.id
        });
        const create = async (inputData = {}) => {
            const data = await build(inputData).then(screen);
            return await getClient().productCategory.create({ data });
        };
        const createList = (inputData) => Promise.all(normalizeList(inputData).map(data => create(data)));
        const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "ProductCategory",
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name, ...names) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return {
        ...factory,
        use: useTraits,
    };
}
/**
 * Define factory for {@link ProductCategory} model.
 *
 * @param options
 * @returns factory {@link ProductCategoryFactoryInterface}
 */
export function defineProductCategoryFactory(options) {
    return defineProductCategoryFactoryInternal(options ?? {});
}
function isProductOnProductCategoryproductFactory(x) {
    return x?._factoryFor === "Product";
}
function isProductOnProductCategorycategoryFactory(x) {
    return x?._factoryFor === "ProductCategory";
}
function autoGenerateProductOnProductCategoryScalarsOrEnums({ seq }) {
    return {};
}
function defineProductOnProductCategoryFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
    const getFactoryWithTraits = (traitKeys = []) => {
        const seqKey = {};
        const getSeq = () => getSequenceCounter(seqKey);
        const screen = createScreener("ProductOnProductCategory", modelFieldDefinitions);
        const build = async (inputData = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateProductOnProductCategoryScalarsOrEnums({ seq });
            const resolveValue = normalizeResolver(defaultDataResolver ?? {});
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                const acc = await queue;
                const resolveTraitValue = normalizeResolver(traitsDefs[traitKey]?.data ?? {});
                const traitData = await resolveTraitValue({ seq });
                return {
                    ...acc,
                    ...traitData,
                };
            }, resolveValue({ seq }));
            const defaultAssociations = {
                product: isProductOnProductCategoryproductFactory(defaultData.product) ? {
                    create: await defaultData.product.build()
                } : defaultData.product,
                category: isProductOnProductCategorycategoryFactory(defaultData.category) ? {
                    create: await defaultData.category.build()
                } : defaultData.category
            };
            const data = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...inputData };
            return data;
        };
        const buildList = (inputData) => Promise.all(normalizeList(inputData).map(data => build(data)));
        const pickForConnect = (inputData) => ({
            productId: inputData.productId,
            categoryId: inputData.categoryId
        });
        const create = async (inputData = {}) => {
            const data = await build(inputData).then(screen);
            return await getClient().productOnProductCategory.create({ data });
        };
        const createList = (inputData) => Promise.all(normalizeList(inputData).map(data => create(data)));
        const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "ProductOnProductCategory",
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name, ...names) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return {
        ...factory,
        use: useTraits,
    };
}
/**
 * Define factory for {@link ProductOnProductCategory} model.
 *
 * @param options
 * @returns factory {@link ProductOnProductCategoryFactoryInterface}
 */
export function defineProductOnProductCategoryFactory(options) {
    return defineProductOnProductCategoryFactoryInternal(options);
}
function isOrdershopFactory(x) {
    return x?._factoryFor === "Shop";
}
function isOrdermanufacturerFactory(x) {
    return x?._factoryFor === "Manufacturer";
}
function autoGenerateOrderScalarsOrEnums({ seq }) {
    return {};
}
function defineOrderFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
    const getFactoryWithTraits = (traitKeys = []) => {
        const seqKey = {};
        const getSeq = () => getSequenceCounter(seqKey);
        const screen = createScreener("Order", modelFieldDefinitions);
        const build = async (inputData = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateOrderScalarsOrEnums({ seq });
            const resolveValue = normalizeResolver(defaultDataResolver ?? {});
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                const acc = await queue;
                const resolveTraitValue = normalizeResolver(traitsDefs[traitKey]?.data ?? {});
                const traitData = await resolveTraitValue({ seq });
                return {
                    ...acc,
                    ...traitData,
                };
            }, resolveValue({ seq }));
            const defaultAssociations = {
                shop: isOrdershopFactory(defaultData.shop) ? {
                    create: await defaultData.shop.build()
                } : defaultData.shop,
                manufacturer: isOrdermanufacturerFactory(defaultData.manufacturer) ? {
                    create: await defaultData.manufacturer.build()
                } : defaultData.manufacturer
            };
            const data = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...inputData };
            return data;
        };
        const buildList = (inputData) => Promise.all(normalizeList(inputData).map(data => build(data)));
        const pickForConnect = (inputData) => ({
            id: inputData.id
        });
        const create = async (inputData = {}) => {
            const data = await build(inputData).then(screen);
            return await getClient().order.create({ data });
        };
        const createList = (inputData) => Promise.all(normalizeList(inputData).map(data => create(data)));
        const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "Order",
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name, ...names) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return {
        ...factory,
        use: useTraits,
    };
}
/**
 * Define factory for {@link Order} model.
 *
 * @param options
 * @returns factory {@link OrderFactoryInterface}
 */
export function defineOrderFactory(options) {
    return defineOrderFactoryInternal(options);
}
function isOrderItemorderFactory(x) {
    return x?._factoryFor === "Order";
}
function isOrderItemproductFactory(x) {
    return x?._factoryFor === "Product";
}
function autoGenerateOrderItemScalarsOrEnums({ seq }) {
    return {
        quantity: getScalarFieldValueGenerator().Int({ modelName: "OrderItem", fieldName: "quantity", isId: false, isUnique: false, seq })
    };
}
function defineOrderItemFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
    const getFactoryWithTraits = (traitKeys = []) => {
        const seqKey = {};
        const getSeq = () => getSequenceCounter(seqKey);
        const screen = createScreener("OrderItem", modelFieldDefinitions);
        const build = async (inputData = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateOrderItemScalarsOrEnums({ seq });
            const resolveValue = normalizeResolver(defaultDataResolver ?? {});
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                const acc = await queue;
                const resolveTraitValue = normalizeResolver(traitsDefs[traitKey]?.data ?? {});
                const traitData = await resolveTraitValue({ seq });
                return {
                    ...acc,
                    ...traitData,
                };
            }, resolveValue({ seq }));
            const defaultAssociations = {
                order: isOrderItemorderFactory(defaultData.order) ? {
                    create: await defaultData.order.build()
                } : defaultData.order,
                product: isOrderItemproductFactory(defaultData.product) ? {
                    create: await defaultData.product.build()
                } : defaultData.product
            };
            const data = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...inputData };
            return data;
        };
        const buildList = (inputData) => Promise.all(normalizeList(inputData).map(data => build(data)));
        const pickForConnect = (inputData) => ({
            productId: inputData.productId,
            orderId: inputData.orderId
        });
        const create = async (inputData = {}) => {
            const data = await build(inputData).then(screen);
            return await getClient().orderItem.create({ data });
        };
        const createList = (inputData) => Promise.all(normalizeList(inputData).map(data => create(data)));
        const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "OrderItem",
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name, ...names) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return {
        ...factory,
        use: useTraits,
    };
}
/**
 * Define factory for {@link OrderItem} model.
 *
 * @param options
 * @returns factory {@link OrderItemFactoryInterface}
 */
export function defineOrderItemFactory(options) {
    return defineOrderItemFactoryInternal(options);
}
