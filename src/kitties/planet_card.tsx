import jsx from "texsaur";
import { KTUComponent } from "../ktu/ui/core/ktu_component";
import TranslationManager from "../ktu/ui/core/translation_manager";
import { PLANET_NAME } from "./translations/keys";

export class PlanetCard extends KTUComponent {
  level: number;
  constructor(level: number) {
    super();
    this.level = level;
  }

  render(): Element {
    return (
      <div className="card planetCard">
        <div className="portrait"></div>
        <div className="name">
          {TranslationManager.getInstance()
            .getText(PLANET_NAME)
            .replace("##LEVEL##", this.level + "")}
        </div>
      </div>
    );
  }
}

customElements.define("planet-card", PlanetCard);
