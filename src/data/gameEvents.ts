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

export const GAME_EVENTS: Record<string, GameEvent> = {
  WELCOME: {
    id: "WELCOME",
    type: "DIALOG",
    text: "Welcome to my portfolio! I am Dust, I will help you with your questions, as it's my purpose. The only thing you have to do is to click wherever you want.",
    characterName: "Dust",
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
  },
  ONE_HUNDRED_PERCENT_HUMAN: {
    id: "ONE_HUNDRED_PERCENT_HUMAN",
    type: "DIALOG",
    text: [
      "This should not be a surprise. His friends will tell you he is kind of silly, though.",
      "I guess he's not the only one who thinks so.",
      "Why would you even question this?",
    ],
    characterName: "Dust",
  },
  LOCATION: {
    id: "LOCATION",
    type: "DIALOG",
    text: "Don't tell anybody. We like our piece of privacy.",
    characterName: "Dust",
  },
  LOREM_IPSUM: {
    id: "LOREM_IPSUM",
    type: "DIALOG",
    text: "He had no idea what to put in this exact space, so he left this placeholder. I can't believe how lazy he is. What bothers me most is that, perhaps he did it on purpose. Did he think it would be hilarious? The people who never clicked and saw this dialogue... What will they think about this?",
    characterName: "Dust",
  },
  ONE_YEAR_EXPERIENCE: {
    id: "ONE_YEAR_EXPERIENCE",
    type: "DIALOG",
    text: "He has been coding in profesional environments for one year so far, but has been learning since 2018, when he started diving into computer science and web development.",
    characterName: "Dust",
  },
  ENVIRONMENT_ADAPTABILITY: {
    id: "ENVIRONMENT_ADAPTABILITY",
    type: "DIALOG",
    text: "David excels at adapting to working environments and new technologies. He is always eager to learn, take challenges and improve his skills, and loves working in agile teams.",
    characterName: "Dust",
  },
  SOLUTION_MAKER: {
    id: "SOLUTION_MAKER",
    type: "DIALOG",
    text: "He thinks he can handle Business logic, I don't know about that.",
    characterName: "Dust",
  },
  JD: {
    id: "JD",
    type: "DIALOG",
    text: "As if it wasn't clear enough.",
    characterName: "Dust",
  },
  VIM: {
    id: "VIM",
    type: "DIALOG",
    text: "Productivity, you say? Did you know that VSCode has keyboard shortcuts too?",
    characterName: "Dust",
  },
  GIT: {
    id: "GIT",
    type: "DIALOG",
    text: "A long time ago, he commited a merge conflict, pushed it, and pulled it back into a second merge conflict. Don't ask me how he did it, or how it solved it. I believe he's become better at it.",
    characterName: "Dust",
  },
  SKILL_INVENTORY: {
    id: "SKILL_INVENTORY",
    type: "DIALOG",
    text: "He really thinks those skill boxes are still cool. I have seen them in a dozen portfolios already. Also, flipping the cards has no purpose. I wonder where did he learned UX design.",
    characterName: "Dust",
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
    characterName: "Dust (Reborn)",
    action: ({ showDialog }) => {
      const dialogs = [
        "So... I think reloading the page will do the work",
        "I walked a mile with Pleasure; she chattered all the way, but left me none the wiser for all she had to say. I walked a mile with Sorrow and never a word said she; but oh, the things I learned from her when Sorrow walked with me!",
        "Will I be relieved of this burden?",
      ];
      showDialog(dialogs[Math.floor(Math.random() * dialogs.length)], "Dust (Reborn)");
    },
  },
  EXPERIENCE: {
    id: "EXPERIENCE",
    type: "DIALOG",
    text: "Yeah he seems pretty bussy lately.",
    characterName: "Dust",
  },
};
