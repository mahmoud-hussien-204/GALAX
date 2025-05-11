import { EnumAppKeys } from "@/enums";

export default class AuthJourneyHelper {
  static getUserEmail(): string {
    return localStorage.getItem(EnumAppKeys.userJourney) || "";
  }

  static setUserEmail(email: string) {
    localStorage.setItem(EnumAppKeys.userJourney, email);
  }
}
