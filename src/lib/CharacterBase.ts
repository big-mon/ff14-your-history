import {
  LanguageType,
  Language,
  raceConvert,
  tribeConvert,
} from "../lib/CharacterDataConvert";

export class CharacterBase {
  /** 名前 */
  name: string = "Your Name";
  /** データセンター */
  dc: string = "Your DC";
  /** サーバー */
  server: string = "Your Server";
  /** フリーカンパニー */
  fc: string = "Your FreeCompany";
  /** フリーカンパニーID */
  fcId: string = "Your FreeCompanyId";
  /** 自己紹介 */
  bio: string = "Your Bio";
  /** アバター画像 */
  avatar: string = "Your Avatar Image";
  /** ポートレート画像 */
  portrait: string = "Your Portrait Image";
  /** 種族 */
  race: string = "Your Race";
  /** 部族 */
  tribe: string = "Your Tribe";
  /** 性別 */
  gender: number = 0;

  constructor(jsonText: string, lang: LanguageType = "ja") {
    try {
      const json = JSON.parse(jsonText);
      if (!json) return;

      if (json.Character) {
        const character = json.Character;
        this.name = character.Name;
        this.dc = character.DC;
        this.server = character.Server;
        this.fc = character.FreeCompanyName;
        this.fcId = character.FreeCompanyId;
        this.bio = character.Bio;
        this.avatar = character.Avatar;
        this.portrait = character.Portrait;
        this.race = raceConvert(character.Race, lang);
        this.tribe = tribeConvert(character.Tribe, lang);
        this.gender = character.Gender;
      }
    } catch (e) {
      // エラー時は初期値のまま
    }
  }
}
