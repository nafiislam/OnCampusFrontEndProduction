import { initEdgeStore } from '@edgestore/server';
import {createEdgeStoreNextHandler} from '@edgestore/server/adapters/next/app';
 


const es = initEdgeStore.create();
 
/**
 * This is the main router for the Edge Store buckets.
 */
const edgeStoreRouter = es.router({
  myPublicFiles: es
  .fileBucket({
    maxSize: 1024 * 1024 * 10, // 10MB
    // accept: ['image/jpeg', 'image/png'], // wildcard also works: ['image/*']
  })
  .beforeUpload(({ ctx, input, fileInfo }) => {
    console.log('beforeUpload', ctx, input, fileInfo);
    return true; // allow upload
  })
  /**
   * return `true` to allow delete
   * This function must be defined if you want to delete files directly from the client.
   */
  .beforeDelete(({ ctx, fileInfo }) => {
    console.log('beforeDelete', ctx, fileInfo);
    return true; // allow delete
  })
});
 
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});
 
export { handler as GET, handler as POST };
 
/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;