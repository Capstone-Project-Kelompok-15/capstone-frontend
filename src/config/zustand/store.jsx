import { create } from "zustand";
import { createClickSlice } from "./Click/ClickSlice";

export const useBoundStore = create((...a) => ({
    ...createClickSlice(...a)
}))