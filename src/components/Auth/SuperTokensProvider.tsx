import React from 'react';

import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import Passwordless from "supertokens-auth-react/recipe/passwordless";
import ThirdParty from "supertokens-auth-react/recipe/thirdparty";
import Session from "supertokens-auth-react/recipe/session";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { ThirdPartyPreBuiltUI } from 'supertokens-auth-react/recipe/thirdparty/prebuiltui';
import { PasswordlessPreBuiltUI } from 'supertokens-auth-react/recipe/passwordless/prebuiltui';


SuperTokens.init({
    appInfo: {
        appName: "playground",
        apiDomain: "http://localhost:5505",
        websiteDomain: "http://localhost:3002",
        apiBasePath: "/api/v1/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        Passwordless.init({
            contactMethod: "EMAIL_OR_PHONE",
        }),
        ThirdParty.init({
            signInAndUpFeature: {
                providers: [
                    ThirdParty.Github.init(),
                    ThirdParty.Google.init(),
                    ThirdParty.Facebook.init(),
                    ThirdParty.Apple.init(),
                ],
            }
        }),
        Session.init()
    ]
});


/* Your App */
export const SuperTokensProvider = ({children}: { children: React.ReactNode }) => {
    return (
        <SuperTokensWrapper>
            {children}
        </SuperTokensWrapper>
    );
};

export const renderApp = (reactRouterDom: any) => getSuperTokensRoutesForReactRouterDom(reactRouterDom, [ThirdPartyPreBuiltUI, PasswordlessPreBuiltUI]);
