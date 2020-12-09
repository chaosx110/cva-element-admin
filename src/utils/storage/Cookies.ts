import { CookiesStatic, CookieAttributes } from "js-cookie";
import { IStorageService } from "./Storage";

export class CookieService implements IStorageService {
  constructor(private cookie: CookiesStatic) {}

  set(key: string, value: any, config?: CookieAttributes): void {
    this.cookie.set(key, value, config);
  }
  get(key: string): string | undefined {
    return this.cookie.get(key);
  }
  remove(key: string, config?: CookieAttributes): void {
    this.cookie.remove(key, config);
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
}
