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
        <div className="portrait">
          <img src={"/" + this.captain.key + ".png"} />
        </div>
        <div className="name">{this.captain.name}</div>
        <div className="description">{this.captain.description}</div>
        <div>
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
            <hr />
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
      </div>
    );
  }
}

customElements.define("captain-card", CaptainCard);
