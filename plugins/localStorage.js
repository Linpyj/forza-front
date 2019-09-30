import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: ['authUser'],  // localStorageに保存したいstoreを入れる
  })(store);
};
