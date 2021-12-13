import { appAxios } from "../utils/appAxios";

export async function getItem(id) {
  return appAxios.get(`items/${id}`);
}

export async function getItemsSummary() {
  return appAxios.get("items/summary");
}

export async function getItemsByCategoryId(id) {
  return appAxios.get(`items/getByCategoryId/${id}`);
}

export async function getItemsBySubCategoryId(id) {
  return appAxios.get(`items/getBySubCategoryId/${id}`);
}

export async function getItemsBySubtitleId(itemInfo) {
  return appAxios.get(`items/getBySubtitleId/${itemInfo.subCategoryId}/${itemInfo.contentId}`);
}

export async function getItemsBySearchKey(key) {
  return appAxios.get(`items/getBySearchKey/${key}`);
}
