export type EventType = "DIALOG" | "ACTION";

export interface ActionContext {
  showDialog: (text: string, characterName?: string, characterImage?: string) => void;
  getState: () => any;
  setState: (partial: any) => void;
}

export interface GameEvent {
  id: string;
  type: EventType;
  // For DIALOG type
  text?: string | string[];
  characterName?: string; // Defaults to "Dust" if undefined
  characterImage?: string;
  // For ACTION type
  action?: (context: ActionContext) => void;
}

const baseImageUrl = import.meta.env.BASE_URL + "mage/";

export const GAME_EVENTS: Record<string, GameEvent> = {
  WELCOME: {
    id: "WELCOME",
    type: "DIALOG",
    text: "Welcome! I am Dust, and I will help you with your questions. The only thing you have to do is to click wherever you want.",
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_chill.png`,
  },
  TOGGLE_INTERACTIONS_ON: {
    id: "TOGGLE_INTERACTIONS_ON",
    type: "DIALOG",
    text: [
      "i see I'm still not allowed to rest of the nonsense of this universe.",
      "Why do you invoke me again?",
      "I'm baffled by your persistence.",
      "Aren't you bored of this?",
    ],
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_annoyed.png`,
  },
  FIRST_TIME_TOGGLE_INTERACTIONS_ON: {
    id: "FIRST_TIME_TOGGLE_INTERACTIONS_ON",
    type: "DIALOG",
    text: "Welcome to David's Portfolio. I am Dust. It's my purpose to help you with your questions. Click on any element you find interesting and I will try to answer your questions.",
    characterName: "Dust",
  },
  TOGGLE_INTERACTIONS_OFF: {
    id: "TOGGLE_INTERACTIONS_OFF",
    type: "DIALOG",
    text: [
      "I can finally sleep now.",
      "Silence is golden.",
      "It's been a pleasure to meet you.",
      "Finally, some peace.",
      "Wake me up when you need me.",
      "Goodbye to the world.",
    ],
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_chill.png`,
  },
  ONE_HUNDRED_PERCENT_HUMAN: {
    id: "ONE_HUNDRED_PERCENT_HUMAN",
    type: "DIALOG",
    text: [
      "AI is changing the way we build software. But good software is still orchestrated by human reasoning and strong grasp in architecture and design.",
    ],
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_annoyed.png`,
  },
  LOCATION: {
    id: "LOCATION",
    type: "DIALOG",
    text: "Don't tell anybody. We like our privacy.",
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_annoyed.png`,
  },
  LOREM_IPSUM: {
    id: "LOREM_IPSUM",
    type: "DIALOG",
    text: "He had no idea what to put in this exact space, so he left this placeholder. I can't believe how lazy he is. What bothers me most is that, perhaps he did it on purpose. Did he think it would be hilarious? The people who saw this dialogue but never clicked... What will they think about him?",
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_open_eyes.png`,
  },
  ONE_YEAR_EXPERIENCE: {
    id: "ONE_YEAR_EXPERIENCE",
    type: "DIALOG",
    text: "He has been coding in profesional environments for one year so far, but has been learning since 2018, when he started diving into computer science and web development.",
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_chill.png`,
  },
  ENVIRONMENT_ADAPTABILITY: {
    id: "ENVIRONMENT_ADAPTABILITY",
    type: "DIALOG",
    text: "David excels at adapting to working environments and new technologies. He is always eager to learn, take challenges and improve his skills, and loves working in agile teams.",
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_surprise.png`,
  },
  SOLUTION_MAKER: {
    id: "SOLUTION_MAKER",
    type: "DIALOG",
    text: "He thinks he can handle Business logic, I don't know about that.",
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_open_eyes.png`,
  },
  JD: {
    id: "JD",
    type: "DIALOG",
    text: "As if it wasn't clear enough.",
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_open_eyes.png`,
  },
  VIM: {
    id: "VIM",
    type: "DIALOG",
    text: "Productivity, you say? Did you know that VSCode has keyboard shortcuts too?",
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_angry.png`,
  },
  GIT: {
    id: "GIT",
    type: "DIALOG",
    text: "I remember that one day he commited a merge conflict, pushed it, and pulled it back into a second merge conflict. Don't ask me how he did it, or how he solved it. I believe he's become better handling production code.",
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_blush.png`,
  },
  SKILL_INVENTORY: {
    id: "SKILL_INVENTORY",
    type: "DIALOG",
    text: "He really thinks those skill boxes are still cool. I have seen them in a dozen portfolios already. Also, flipping the cards has no purpose. I wonder where did he learned UX design.",
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_chill.png`,
  },
  LIGHT_MODE: {
    id: "LIGHT_MODE",
    type: "ACTION",
    action: ({ showDialog, getState, setState }) => {
      const state = getState();
      const now = Date.now();
      const timeDiff = now - state.lastLightModeClickTime;

      // Reset if more than 5 seconds have passed
      let newClicks = timeDiff > 6000 ? 1 : state.lightModeClicks + 1;

      setState({ lightModeClicks: newClicks, lastLightModeClickTime: now });

      if (newClicks >= 5) {
        setState({ isBrokenMode: true });
        // Trigger broken dialog
        const brokenEvent = GAME_EVENTS["LIGHT_MODE_BROKEN"];
        if (brokenEvent && brokenEvent.text) {
          const text = Array.isArray(brokenEvent.text) ? brokenEvent.text[0] : brokenEvent.text;
          showDialog(text, brokenEvent.characterName, brokenEvent.characterImage);
        }
      } else {
        // Sequential dialogs
        if (newClicks === 1) {
          showDialog("Wow, wait a minute! Why in the world would you do that?", "Dust");
        } else if (newClicks === 2) {
          showDialog("I am serious. Light mode is not just 'bright', it is currently unstable.", "Dust");
        } else if (newClicks === 3) {
          showDialog("Stop! Bright screens are bad for your eyes!", "Dust");
        }
      }
    },
  },
  LIGHT_MODE_BROKEN: {
    id: "LIGHT_MODE_BROKEN",
    type: "ACTION",
    text: "LOOK WHAT YOU DID! YOU BROKE IT! I TOLD YOU NOT TO TOUCH IT! NOW HALF OF THE UNIVERSE IS GONE! ARE YOU HAPPY NOW?",
    characterName: "Dust",
    action: ({ showDialog }) => {
      // Logic for "breaking" the universe could go here (e.g., triggering a global state change)

      const dialogs = [
        "So... I think reloading the page will do the work",
        "I walked a mile with Pleasure; she chattered all the way, but left me none the wiser for all she had to say. I walked a mile with Sorrow and never a word said she; but oh, the things I learned from her when Sorrow walked with me!",
        "Will I be relieved of this burden?",
      ];
      showDialog(dialogs[Math.floor(Math.random() * dialogs.length)], "Dust ");
    },
    characterImage: `${baseImageUrl}mage_annoyed.png`,
  },
  EXPERIENCE: {
    id: "EXPERIENCE",
    type: "DIALOG",
    text: "Yeah he seems pretty bussy lately.",
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_open_eyes.png`,
  },
  VIBECODE: {
    id: "VIBECODE",
    type: "DIALOG",
    text: "He kind of vibecoded this. Don't tell anyone I said that.",
    characterName: "Dust",
    characterImage: `${baseImageUrl}mage_blush.png`,
  },
};
