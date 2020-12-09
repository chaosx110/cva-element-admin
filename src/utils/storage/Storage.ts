
export type StorageType = "cookie" | "sessionStorage" | "localStorage";

export interface IStorageService {
  set(key: string, value: any, config?:CookieAttributes ): void;
  get(key: string): string | undefined;
  remove(key: string, config?: CookieAttributes): void;
  clear(): void;
}

