import {create} from 'zustand'


export const useAuthStore = create((set) => ({
    isSignedIn: false,
    setIsLoggedIn: (isLoggedIn: boolean) => set({isLoggedIn}),
}))
