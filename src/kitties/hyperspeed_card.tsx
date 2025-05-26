import jsx from "texsaur";
import { KTUComponent } from "../ktu/ui/core/ktu_component";
import TranslationManager from "../ktu/ui/core/translation_manager";
import { HYPERSPEED_NAME } from "./translations/keys";

export class HyperspeedCard extends KTUComponent {
  constructor() {
    super();
  }

  render(): Element {
    return (
      <div className="card hyperspeedCard">
        <div className="portrait"></div>
        <div className="name">
          {TranslationManager.getInstance().getText(HYPERSPEED_NAME)}
        </div>
      </div>
    );
  }
}

customElements.define("hyperspeed-card", HyperspeedCard);
