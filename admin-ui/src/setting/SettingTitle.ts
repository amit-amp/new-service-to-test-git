import { Setting as TSetting } from "../api/setting/Setting";

export const SETTING_TITLE_FIELD = "logs";

export const SettingTitle = (record: TSetting): string => {
  return record.logs || String(record.id);
};
