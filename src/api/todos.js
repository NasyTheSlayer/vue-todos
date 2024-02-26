import { client } from "@/utils/httpClient"

export const getTodos = () => {
  return client.get('/todos?userId=6342');
}