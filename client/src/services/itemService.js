import { inject } from "vue";

const appAxios = inject("appAxios");

export async function getItem(id) {
  const response = await appAxios.get(`/api/items/${id}`);
  const item = await response.json();
  return item;
}

export async function getItems() {
  const response = await appAxios.get("/api/items");
  const items = await response.json();
  return items;
}
