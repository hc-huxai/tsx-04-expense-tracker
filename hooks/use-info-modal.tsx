import { create } from "zustand";

interface useInfoModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useInfoModal = create<useInfoModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
