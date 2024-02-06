import { fetchAccessToken } from './auth/authSlice';

export const apiTokerErrorMiddleware = (store) => {
  console.log('middleware store: ', store);

  return (next) => {
    console.log('middleware next: ', next);

    return async (action) => {
      const state = store.getState();
      console.log('middleware state: ', state);

      if (action.type.endsWith('rejected') && action.payload?.status === 401) {
        console.log('middleware rejected and 401');

        if (!state.auth.loading) {
          console.log();
        }
        const refreshAction = await store.dispatch(fetchAccessToken());
        console.log('refreshAction: ', refreshAction);
      }
    };
  };
};
