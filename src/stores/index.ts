import { ref } from "vue";
import { defineStore } from "pinia";

const STORE = "store";

export const useStore = defineStore(STORE, () => {
  return {};
});

const store = useStore();
store.$subscribe((mutation) => {
  if (mutation.storeId === STORE) {
    sessionStorage.setItem(
      STORE,
      JSON.stringify({
        // companies: store.companies,
        // query: store.query,
      }),
    );
  }
});
