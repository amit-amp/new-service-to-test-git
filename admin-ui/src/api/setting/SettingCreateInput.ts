import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SettingCreateInput = {
  logs?: string | null;
  user?: UserWhereUniqueInput | null;
};
