export const getAllCatalogs = (state) => state.catalogs.catalogs;
export const getLoadingCatalogs = (state) => state.catalogs.isLoading;
export const getErrorCatalogs = (state) => state.catalogs.error;
export const getTotalItemsCatalogs = (state) => state.catalogs.totalItems;
export const isModalOpen = (state) => state.catalogs.isModalOpen;
export const currentPage = (state) => state.catalogs.page;