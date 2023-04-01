import { SortOrder } from "../../util/SortOrder";

export type SettingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  logs?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
