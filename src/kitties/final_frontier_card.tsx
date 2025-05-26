import jsx from "texsaur";
import { KTUComponent } from "../ktu/ui/core/ktu_component";
import TranslationManager from "../ktu/ui/core/translation_manager";
import { FINAL_FRONTIER_NAME } from "./translations/keys";

export class FinalFrontierCard extends KTUComponent {
  constructor() {
    super();
  }

  render(): Element {
    return (
      <div className="card finalFrontierCard">
        <div className="portrait"></div>
        <div className="name">
          {TranslationManager.getInstance().getText(FINAL_FRONTIER_NAME)}
        </div>
      </div>
    );
  }
}

customElements.define("final-frontier-card", FinalFrontierCard);
