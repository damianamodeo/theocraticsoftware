import { RxDatabase, createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

import {
  PublishersCollection,
  publishersCollectionMethods,
  publishersDocMethods,
  publishersSchema,
} from './publishers';

export type OrderlyCollections = {
  publishers: PublishersCollection;
};

export type OrderlyDB = RxDatabase<OrderlyCollections>;

export const orderlyDB = async () => {
  const db = await createRxDatabase<OrderlyCollections>({
    name: 'orderly',
    storage: getRxStorageDexie(),
  });
  return db;
};

export const createOrderlyDBCollections = async (
  db: RxDatabase<OrderlyCollections, any, any, unknown>
) => {
  db.addCollections({
    publishers: {
      schema: publishersSchema,
      // migrationStrategies: {
      //   1: function (oldDoc) {
      //     return oldDoc;
      //   },
      // },
      methods: publishersDocMethods,
      statics: publishersCollectionMethods,
    },
  });

  console.log('OrderlyDB collections created');
};

export const initOrderlyDB = async () => {
  const db = await orderlyDB();
  await createOrderlyDBCollections(db);
  return db;
};
