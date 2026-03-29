import { useEffect } from 'react';
import { Box, Button, styled } from '@mui/material';
import { useLocation, useNavigate } from '@docusaurus/router';

import AuthForm from './AuthForm';
import { useSupabaseStore } from '../../utilities/store';
import { client } from '../../utilities/api';


const Styled = {
    AuthBox1: styled(Box)(() => ({
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center" 
    })),
    AuthBox2: styled(Box)(() => ({
        border: "1px solid white",
        borderRadius: "8px",
        padding: "24px",
        display: "block"
    }))
};


async function handleSignout() {
    // ?? -> might need to pass the id of the user
    const response = (await client.get('/auth/signout')).data;
    console.log("handleSignout response: ", response)
};

export function AuthProvider({ children }: any) {
    const supabaseStore = useSupabaseStore();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(
            "The location has changed. Are we authenticated? ", 
            supabaseStore,
            "If we are not then need to clear the session if there is any and navigate to the auth page"
        )
    }, [location.pathname])

    async function handleGuestSignIn() {
        supabaseStore.setUserType("guest");
        
        // If Auth from Backend
        const response = (await client.post('/auth/signin/guest')).data;
        supabaseStore.setSession(response);
        // If auth from Front end
        // const { data } = await supabase.auth.signInAnonymously();
        // console.log("handleGuestSignIn: ", response);
        // supabaseStore.setSession(data.session as any);
    };

    async function handleSubmit(form: { email: string, password: string }, loginType: string) {
        supabaseStore.setUserType("admin");

        if (loginType === "signin") {
            // If Auth from Backend
            const response = (await client.post('/auth/signin', form)).data;
            // console.log("handleSubmit: ", response);
            supabaseStore.setSession(response);

            // const { data } = await supabase.auth.setSession(response.session)
            // if (data) console.log("setSession: Success!");
            
            // // If auth from Front end
            // const { data, error } = await supabase.auth.signInWithOAuth({
            //     provider: 'github',
            //     // redirect_uri: `https://mlkukbowpsapjiwfqvgb.supabase.co/auth/v1/callback`,
            //     options: {
            //         redirectTo: `http://localhost:5505/api/v1/auth/callback`,
            //         // redirectTo: `https://mlkukbowpsapjiwfqvgb.supabase.co/auth/v1/callback`,
            //     },
            // });

            // console.log("signinWithOAuth.data: ", data, error);

            // const { data }  = await supabase.auth.signInWithPassword(form);
            // supabaseStore.setSession(data.session as any);
        }

        if (loginType === "signup") {
            // If Auth from Backend
            const response = await client.post('/auth/signup', form);
            // console.log("handleSubmit:.signup:  ", response);
            // // If auth from Front end
            // const { data } = await supabase.auth.signUp(form);
            supabaseStore.setSession(response.data as any);
        }
    };

    async function handleCancel() {
        supabaseStore.setUserType(null);
        supabaseStore.setSession(null);
    };

    async function handleForgotPassword(email: string) {
        // const { data, error } = await supabase.auth.resetPasswordForEmail(email);
        console.log("handleForgotPassword: ", email);
    };

    useEffect(() => {
        (async () => {
            const result = (await client.get("/auth/session")).data
            // console.log("Need to get active session: ", result)
            if (result?.user) supabaseStore.setSession(result);
        })()
        // supabase.auth.getSession().then(({ data: { session } }: any) => {
        //     supabaseStore.setSession(session)
        // })

        // const {
        //     data: { subscription },
        // } = supabase.auth.onAuthStateChange((_event, session: any) => {
        //     supabaseStore.setSession(session)
        // })

        // return () => subscription.unsubscribe()
    }, []);

    useEffect(() => {
        // ?? Because the auth provider is not a child of the AppRouter, the location ...
        // ?? ... will not be updated when logging out and redirected to the login page ...
        // ?? ... causing a bug when trying to log back in and the old path was still there. 
        if (window.location.pathname !== "/") window.location.replace("/");
    }, []);

    // todo: Work on auto-login with JWT
    // useEffect(() => {
    //     const jwt = localStorage.getItem("jwt");

    //     if (jwt) client.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
        
    //     client.post('/auth/protected', { token: jwt })
    //         .then(({ data }: any) => {
    //             if (data) console.log('/auth/protected: Success!')
    //             supabaseStore.setUserType("admin");
    //             // supabaseStore.setSession(data);
    //             // fitnessStore.setRegistrationView(false);
    //         })
    // }, []);


    if (!supabaseStore.session && !supabaseStore.userType) return (
        <Styled.AuthBox1>
            <Styled.AuthBox2>
                <Button color="inherit" onClick={() => supabaseStore.setUserType("admin")}>
                    Sign In
                </Button>
                <Button color="inherit" onClick={handleGuestSignIn}>
                    Continue as Guest
                </Button>
            </Styled.AuthBox2>
        </Styled.AuthBox1>
    );

    if (!supabaseStore.session && (supabaseStore.userType === "admin")) return (
        <AuthForm 
            handleSubmit={handleSubmit} 
            handleCancel={handleCancel}
            handleForgotPassword={handleForgotPassword}
        />
    );

    else return children;
};