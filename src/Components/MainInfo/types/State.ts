import { User, Operation } from "./Type";

export type UserState = {
  data: User[]
  pages: number;
  error: string | undefined;
}
export type OperatiobState = {
  data: Operation[]
  error: string | undefined;
}