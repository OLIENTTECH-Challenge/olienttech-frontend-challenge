import {
  getClient,
  createScreener,
  getScalarFieldValueGenerator,
  normalizeResolver,
  normalizeList,
  getSequenceCounter,
} from '@quramy/prisma-fabbrica/lib/internal';
export {
  initialize,
  resetSequence,
  registerScalarFieldValueGenerator,
  resetScalarFieldValueGenerator,
} from '@quramy/prisma-fabbrica/lib/internal';
const modelFieldDefinitions = [
  {
    name: 'User',
    fields: [
      {
        name: 'posts',
        type: 'Post',
        relationName: 'PostToUser',
      },
    ],
  },
  {
    name: 'Post',
    fields: [
      {
        name: 'author',
        type: 'User',
        relationName: 'PostToUser',
      },
    ],
  },
];
function autoGenerateUserScalarsOrEnums({ seq }) {
  return {
    email: getScalarFieldValueGenerator().String({
      modelName: 'User',
      fieldName: 'email',
      isId: false,
      isUnique: true,
      seq,
    }),
  };
}
function defineUserFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
  const getFactoryWithTraits = (traitKeys = []) => {
    const seqKey = {};
    const getSeq = () => getSequenceCounter(seqKey);
    const screen = createScreener('User', modelFieldDefinitions);
    const build = async (inputData = {}) => {
      const seq = getSeq();
      const requiredScalarData = autoGenerateUserScalarsOrEnums({ seq });
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
    const buildList = (inputData) => Promise.all(normalizeList(inputData).map((data) => build(data)));
    const pickForConnect = (inputData) => ({
      id: inputData.id,
    });
    const create = async (inputData = {}) => {
      const data = await build(inputData).then(screen);
      return await getClient().user.create({ data });
    };
    const createList = (inputData) => Promise.all(normalizeList(inputData).map((data) => create(data)));
    const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
    return {
      _factoryFor: 'User',
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
 * Define factory for {@link User} model.
 *
 * @param options
 * @returns factory {@link UserFactoryInterface}
 */
export function defineUserFactory(options) {
  return defineUserFactoryInternal(options ?? {});
}
function isPostauthorFactory(x) {
  return x?._factoryFor === 'User';
}
function autoGeneratePostScalarsOrEnums({ seq }) {
  return {
    title: getScalarFieldValueGenerator().String({
      modelName: 'Post',
      fieldName: 'title',
      isId: false,
      isUnique: false,
      seq,
    }),
  };
}
function definePostFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
  const getFactoryWithTraits = (traitKeys = []) => {
    const seqKey = {};
    const getSeq = () => getSequenceCounter(seqKey);
    const screen = createScreener('Post', modelFieldDefinitions);
    const build = async (inputData = {}) => {
      const seq = getSeq();
      const requiredScalarData = autoGeneratePostScalarsOrEnums({ seq });
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
        author: isPostauthorFactory(defaultData.author)
          ? {
              create: await defaultData.author.build(),
            }
          : defaultData.author,
      };
      const data = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...inputData };
      return data;
    };
    const buildList = (inputData) => Promise.all(normalizeList(inputData).map((data) => build(data)));
    const pickForConnect = (inputData) => ({
      id: inputData.id,
    });
    const create = async (inputData = {}) => {
      const data = await build(inputData).then(screen);
      return await getClient().post.create({ data });
    };
    const createList = (inputData) => Promise.all(normalizeList(inputData).map((data) => create(data)));
    const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
    return {
      _factoryFor: 'Post',
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
 * Define factory for {@link Post} model.
 *
 * @param options
 * @returns factory {@link PostFactoryInterface}
 */
export function definePostFactory(options) {
  return definePostFactoryInternal(options);
}
