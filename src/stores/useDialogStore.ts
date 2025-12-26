import { create } from "zustand";
import { GAME_EVENTS } from "../data/gameEvents";

interface DialogState {
  isVisible: boolean;
  text: string;
  characterName: string;
  characterImage?: string;
  isInteractionsEnabled: boolean;
  hasEnabledInteractionsBefore: boolean;
  showDialog: (text: string, characterName?: string, characterImage?: string) => void;
  hideDialog: () => void;
  setText: (text: string) => void;
  toggleInteractions: () => void;
  setInteractionsEnabled: (enabled: boolean) => void;
  handleEvent: (eventId: string) => void;
  lightModeClicks: number;
  lastLightModeClickTime: number;
  isBrokenMode: boolean;
}

export const useDialogStore = create<DialogState>((set, get) => ({
  isVisible: false,
  text: "",
  characterName: "",
  characterImage: undefined,
  isInteractionsEnabled: false,
  hasEnabledInteractionsBefore: false,

  // Light Mode Logic
  lightModeClicks: 0,
  lastLightModeClickTime: 0,
  isBrokenMode: false,

  showDialog: (text, characterName = "Dust", characterImage = undefined) => {
    const { isInteractionsEnabled } = get();
    if (!isInteractionsEnabled) return;
    set({ isVisible: true, text, characterName, characterImage });
  },

  hideDialog: () => set({ isVisible: false }),

  setText: (text) => set({ text }),

  toggleInteractions: () => {
    const { isInteractionsEnabled, hasEnabledInteractionsBefore } = get();
    const newState = !isInteractionsEnabled;
    set({ isInteractionsEnabled: newState });

    // Trigger feedback event
    let feedbackEventId = "TOGGLE_INTERACTIONS_OFF";

    if (newState) {
      if (!hasEnabledInteractionsBefore) {
        feedbackEventId = "FIRST_TIME_TOGGLE_INTERACTIONS_ON";
        set({ hasEnabledInteractionsBefore: true });
      } else {
        feedbackEventId = "TOGGLE_INTERACTIONS_ON";
      }
    }

    const event = GAME_EVENTS[feedbackEventId];
    if (event && event.type === "DIALOG") {
      const text = Array.isArray(event.text)
        ? event.text[Math.floor(Math.random() * event.text.length)]
        : event.text || "";

      // We bypass the check here to allow the "disabled" message to show
      set({
        isVisible: true,
        text,
        characterName: event.characterName || "Dust",
        characterImage: event.characterImage,
      });
    }
  },

  setInteractionsEnabled: (enabled) => set({ isInteractionsEnabled: enabled }),

  handleEvent: (eventId) => {
    const { isInteractionsEnabled, showDialog } = get();

    const event = GAME_EVENTS[eventId];

    if (!event) {
      console.warn(`Event ${eventId} not found`);
      return;
    }

    if (event.type === "DIALOG") {
      if (!isInteractionsEnabled) return;

      const text = Array.isArray(event.text)
        ? event.text[Math.floor(Math.random() * event.text.length)]
        : event.text || "";

      showDialog(text, event.characterName, event.characterImage);
    } else if (event.type === "ACTION") {
      if (event.action) {
        event.action({
          showDialog,
          getState: get,
          setState: set,
        });
      }
    }
  },
}));
