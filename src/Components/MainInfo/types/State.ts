import { User } from "./Type";

export type UserState = {
  data: User[]
  pages: number;
  error: string | undefined;
}