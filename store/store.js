import create from "zustand"

const useLoginStore = create((set) => ({
  isLoggedIn: 0,
  setLogin: () => set((state) => ({ isLoggedIn: state.isLoggedIn + 1 })),
  setLogout: () => set({ isLoggedIn: 0 }),
}))

export default useLoginStore;