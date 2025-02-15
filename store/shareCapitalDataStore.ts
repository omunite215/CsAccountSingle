import { shareCapitalContent } from "@/lib/constants";
import type { ShareCapitalProps } from "./types";
import { create } from "zustand";

export type State = {
  shareCapitalData: ShareCapitalProps[];
};

export type Actions = {
  addShareCapitalData: (data: ShareCapitalProps) => void;
  deleteShareCapitalData: (id: number) => void;
  updateShareCapitalData: (shareData: ShareCapitalProps) => void;
};

export const useShareCapitalStore = create<State & Actions>()((set) => ({
  shareCapitalData: shareCapitalContent,
  addShareCapitalData: (data: ShareCapitalProps) =>
    set((state) => ({
      shareCapitalData: [...state.shareCapitalData, data],
    })),
  deleteShareCapitalData: (id: number) =>
    set((state) => ({
      shareCapitalData: state.shareCapitalData.filter((task) => task.id !== id),
    })),
  updateShareCapitalData: (shareData: ShareCapitalProps) =>
    set((state) => ({
      shareCapitalData: state.shareCapitalData.map((data) =>
        data.id === shareData.id ? { ...data, ...shareData } : data
      ),
    })),
}));
