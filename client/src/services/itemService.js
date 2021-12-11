import { appAxios } from "../utils/appAxios";

export async function getItem(id) {
  return appAxios.get(`items/${id}`);
}

export async function getItemsSummary() {
  return appAxios.get("items/summary");
}
