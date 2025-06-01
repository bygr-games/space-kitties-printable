import jsx from "texsaur";
import { KTUComponent } from "../ktu/ui/core/ktu_component";
import { CaptainCard } from "./captain_card";
import {
  ABILITY_DISCARD_HAND,
  ABILITY_DISCARD_MAP_DUMP,
  ABILITY_DISCARD_REPEAT,
  ABILITY_DISCARD_SWAP_CARDS,
  ABILITY_DISCARD_POSTPONE_QUEST,
  ABILITY_STACK_EVEN_PLANET,
  ABILITY_STACK_STEAL_CARD,
  ABILITY_STACK_REMOVE_CARD,
  ABILITY_STACK_UNSTABLE_WORMHOLE,
  ABILITY_STACK_PLUS_ONE,
} from "./translations/keys";
import en from "./translations/en";
import TranslationManager from "../ktu/ui/core/translation_manager";
import { PlanetCard } from "./planet_card";
import { HyperspeedCard } from "./hyperspeed_card";
import { FinalFrontierCard } from "./final_frontier_card";

export type Captain = {
  key: string;
  name: string;
  description: string;
  skillA: string;
  skillB: string;
};

export class Game extends KTUComponent {
  captains: Captain[] = [
    {
      key: "JAMES",
      name: "James T Kitt",
      description: "Charming Explorer",
      skillA: ABILITY_STACK_UNSTABLE_WORMHOLE,
      skillB: ABILITY_DISCARD_SWAP_CARDS,
    },
    {
      key: "JEANLUC",
      name: "Jean-Luc Kattard",
      description: "Resolute Commander",
      skillA: ABILITY_STACK_EVEN_PLANET,
      skillB: ABILITY_DISCARD_REPEAT,
    },
    {
      key: "LEELA",
      name: "Leela Kattanga",
      description: "Audacious Captain",
      skillA: ABILITY_STACK_UNSTABLE_WORMHOLE,
      skillB: ABILITY_DISCARD_HAND,
    },
    {
      key: "NEIL",
      name: "Neil Katstrong",
      description: "Corageous Daredevil",
      skillA: ABILITY_STACK_PLUS_ONE,
      skillB: ABILITY_DISCARD_HAND,
    },
    {
      key: "KAT",
      name: "Kat Solo",
      description: "Witty Smuggler",
      skillA: ABILITY_STACK_STEAL_CARD,
      skillB: ABILITY_DISCARD_MAP_DUMP,
    },
    {
      key: "LANDO",
      name: "Lando Kattissian",
      description: "Intergalactic Opportunist",
      skillA: ABILITY_STACK_STEAL_CARD,
      skillB: ABILITY_DISCARD_SWAP_CARDS,
    },
    {
      key: "KATTHRYN",
      name: "Katthryn Kattway",
      description: "Decisive Strategist",
      skillA: ABILITY_STACK_REMOVE_CARD,
      skillB: ABILITY_DISCARD_POSTPONE_QUEST,
    },
    {
      key: "YURI",
      name: "Yuri Kattarin",
      description: "Determined Cosmonaut",
      skillA: ABILITY_STACK_REMOVE_CARD,
      skillB: ABILITY_DISCARD_REPEAT,
    },
    {
      key: "VICTORIA",
      name: "Victoria Kattsichore",
      description: "Heavy Metal Hauler",
      skillA: ABILITY_STACK_EVEN_PLANET,
      skillB: ABILITY_DISCARD_MAP_DUMP,
    },
    {
      key: "FELICETTE",
      name: "Felicette",
      description: "Brave Pioneer",
      skillA: ABILITY_STACK_PLUS_ONE,
      skillB: ABILITY_DISCARD_POSTPONE_QUEST,
    },
  ];

  constructor() {
    super();
    TranslationManager.getInstance().setLanguage("EN", en);
  }

  render(): Element {
    const elements: Element[] = [];
    for (const element of this.captains) {
      console.log(element);
      elements.push(new CaptainCard(element));
    }
    /*
    for (let i = 1; i <= 12; i++) {
      for (let ii = 0; ii < 8; ii++) {
        elements.push(new PlanetCard(i));
      }
    }
    for (let i = 0; i < 6; i++) {
      elements.push(new HyperspeedCard());
    }
    for (let i = 0; i < 8; i++) {
      elements.push(new FinalFrontierCard());
    }
      */
    return <div>{elements}</div>;
  }
}

customElements.define("game-root", Game);
