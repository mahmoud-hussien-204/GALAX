import {EnumAppKeys} from "@/enums";

export default class AuthHelper {
  static getUserData(): IUser {
    return JSON.parse(localStorage.getItem(EnumAppKeys.userData) || "{}");
  }

  static setUserData(user: IUser) {
    localStorage.setItem(EnumAppKeys.userData, JSON.stringify(user));
  }

  static userIsLoggedIn(): boolean {
    return !!localStorage.getItem(EnumAppKeys.isLoggedIn);
  }

  static setUserIsLoggedIn(isLoggedIn: boolean) {
    localStorage.setItem(EnumAppKeys.isLoggedIn, String(isLoggedIn));
  }

  static userLogout() {
    localStorage.clear();
    window.location.pathname = "/auth/login";
  }
}
