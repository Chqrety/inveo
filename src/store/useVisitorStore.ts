import { create } from 'zustand'

interface Visitor {
  id: number
  name: string
  position: string
  presence: string
  short_uuid: string
}

interface VisitorStore {
  visitor: Visitor | null
  setVisitor: (visitor: Visitor | null) => void
}

export const useVisitorStore = create<VisitorStore>((set) => ({
  visitor: null,
  setVisitor: (visitor) => set({ visitor }),
}))
