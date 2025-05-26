import jsx from "texsaur";
import { KTUComponent } from "../ktu/ui/core/ktu_component";
import type { Captain } from "./game";
import TranslationManager from "../ktu/ui/core/translation_manager";

export class CaptainCard extends KTUComponent {
  captain: Captain;
  constructor(captain: Captain) {
    super();
    this.captain = captain;
  }

  render(): Element {
    return (
      <div className="card captainCard">
        <div className="portrait"></div>
        <div className="name">{this.captain.name}</div>
        <div className="description">{this.captain.description}</div>
        <ul>
          <li className="skill skillA">
            <b>
              {TranslationManager.getInstance().getText(
                this.captain.skillA + "_NAME"
              )}
              :
            </b>{" "}
            {TranslationManager.getInstance().getText(this.captain.skillA)}
          </li>
          <li className="skill skillB">
            <b>
              {TranslationManager.getInstance().getText(
                this.captain.skillB + "_NAME"
              )}
              :
            </b>{" "}
            {TranslationManager.getInstance().getText(this.captain.skillB)}
          </li>
        </ul>
      </div>
    );
  }
}

customElements.define("captain-card", CaptainCard);
