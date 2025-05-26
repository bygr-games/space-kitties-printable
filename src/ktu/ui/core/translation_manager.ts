export type LANGUAGES = "EN" | "ES";

class TranslationManager {
  static _instance: TranslationManager;

  language: LANGUAGES;
  languageKeys: Record<LANGUAGES, Record<string, string>>;

  constructor() {
    this.language = "EN";
    this.languageKeys = { EN: {}, ES: {} };
  }

  setLanguage(language: LANGUAGES, keys: Record<string, string>) {
    this.language = language;
    this.languageKeys[language] = keys;
    console.log(this.languageKeys);
  }

  getText(key: string): string {
    console.log(key);
    return this.languageKeys[this.language][key];
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new TranslationManager();
    }
    return this._instance;
  }
}
export default TranslationManager;
