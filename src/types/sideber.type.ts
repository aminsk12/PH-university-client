import { ReactNode } from "react";

export type TSideberItem = {
  key: string;
  label: ReactNode;
  children?: TSideberItem[];
};

export type TUserPaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPaths[];
};

export type TRout = {
  path: string;
  element: ReactNode;
};
