import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SettingUpdateInput = {
  logs?: string | null;
  user?: UserWhereUniqueInput | null;
};
