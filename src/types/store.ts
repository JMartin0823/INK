import { Post } from "./posts";

export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
  LANDING = "LANDING",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  HOMEPAGE = "HOMEPAGE",
  PROFILE = "PROFILE",
  EDITPROFILE = "EDITPROFILE",
  CREATEPAGE = "CREATEPAGE",
}
