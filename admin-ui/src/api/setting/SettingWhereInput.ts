import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SettingWhereInput = {
  id?: StringFilter;
  logs?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
