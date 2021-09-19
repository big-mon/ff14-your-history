export const Language = {
  JP: "ja",
  EN: "en",
} as const;
export type LanguageType = typeof Language[keyof typeof Language];

/** 種族コードから種族を出力
 * @param code 種族コード
 * @param lang 言語
 */
export const raceConvert = (code: number, lang: LanguageType = Language.JP) => {
  switch (code) {
    case 1:
      // ヒューラン
      return lang == Language.JP ? "ヒューラン" : "Hyur";
    case 2:
      // エレゼン
      return lang == Language.JP ? "エレゼン" : "Elezen";
    case 3:
      // ララフェル
      return lang == Language.JP ? "ララフェル" : "Lalafell";
    case 4:
      // ミコッテ
      return lang == Language.JP ? "ミコッテ" : "Miqo'te";
    case 5:
      // ルガディン
      return lang == Language.JP ? "ルガディン" : "Roegadyn";
    case 6:
      // アウラ
      return lang == Language.JP ? "アウラ" : "Au Ra";
    case 7:
      // ロスガル
      return lang == Language.JP ? "ロスガル" : "Hrothgar";
    case 8:
      // ヴィエラ
      return lang == Language.JP ? "ヴィエラ" : "Viera";
    default:
      return "";
  }
};

/** 部族コードから部族を出力
 * @param code 部族コード
 * @param lang 言語
 */
export const tribeConvert = (
  code: number,
  lang: LanguageType = Language.JP
) => {
  switch (code) {
    case 1:
      // ヒューラン
      return lang == Language.JP ? "ミッドランダー" : "Midlander";
    case 2:
      // ヒューラン
      return lang == Language.JP ? "ハイランダー" : "Highlander";
    case 3:
      // エレゼン
      return lang == Language.JP ? "フォレスター" : "Wildwood";
    case 4:
      // エレゼン
      return lang == Language.JP ? "シェーダー" : "Duskwight";
    case 5:
      // ララフェル
      return lang == Language.JP ? "プレーンフォーク" : "Plainsfolk";
    case 6:
      // ララフェル
      return lang == Language.JP ? "デューンフォーク" : "Dunesfolk";
    case 7:
      // ミコッテ
      return lang == Language.JP ? "サンシーカー" : "Seeker of the Sun";
    case 8:
      // ミコッテ
      return lang == Language.JP ? "ムーンキーパー" : "Keeper of the Moon";
    case 9:
      // ルガディン
      return lang == Language.JP ? "ゼーヴォルフ" : "Sea Wolf";
    case 10:
      // ルガディン
      return lang == Language.JP ? "ローエンガルデ" : "Hellsguard";
    case 11:
      // アウラ
      return lang == Language.JP ? "アウラ・レン" : "Raen";
    case 12:
      // アウラ
      return lang == Language.JP ? "アウラ・ゼラ" : "Xaela";
    case 13:
      // ロスガル
      return lang == Language.JP ? "ヘリオン" : "Helions";
    case 14:
      // ロスガル
      return lang == Language.JP ? "ロスト" : "The Lost";
    case 15:
      // ヴィエラ
      return lang == Language.JP ? "ラヴァ・ヴィエラ" : "Rava";
    case 16:
      // ヴィエラ
      return lang == Language.JP ? "ヴィナ・ヴィエラ" : "Veena";
    default:
      return "";
  }
};
