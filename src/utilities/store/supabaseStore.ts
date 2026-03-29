import { create } from 'zustand';
import { client } from '../api';

// *** SUPABASE STORE ***

interface SupabaseUser {
    id: string;
    email: string;
    app_metadata: {
        provider: string;
    };
    user_metadata: {
        name: string;
    };
}

interface SupabaseSession {
    access_token: string;
    token_type: string;
    user: SupabaseUser;
}

interface SupabaseStore {
    session: SupabaseSession | null;
    userType: "admin" | "guest" | null;
    setUserType: (userType: "admin" | "guest" | null) => void;
    setSession: (session: SupabaseSession | null) => void;

    handleSignout: (store: SupabaseStore) => void;
}

// Helper
// ** Since auth is handled in the server
async function handleSignout(store: SupabaseStore) {
    // ?? -> might need to pass the id of the user
    const response = (await client.get('/auth/signout')).data;
    console.log("handleSignout response: ", response)
    store.setSession(null);
    store.setUserType(null);
};

const useSupabaseStore = create<SupabaseStore>((set) => ({
    // states
    session: null,
    userType: null,
    // actions
    setSession: (session: any) => set({ session }),
    setUserType: (userType: any) => set({ userType }),

    // injected helpers to be globally accessible
    handleSignout
}));

export { useSupabaseStore };
export type { SupabaseStore, SupabaseUser, SupabaseSession };
