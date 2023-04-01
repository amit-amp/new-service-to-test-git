import { User } from "../user/User";

export type Setting = {
  createdAt: Date;
  id: string;
  logs: string | null;
  updatedAt: Date;
  user?: User | null;
};
