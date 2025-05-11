import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

import { useState } from "react";

const SocialAuthentication = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
      <div className="flex items-center gap-1.25rem flex-wrap">
        <GoogleButton />
        <FacebookButton />
      </div>
    </GoogleOAuthProvider>
  );
};

export default SocialAuthentication;

const GoogleButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // get user information
      setIsLoading(() => true);
      const getUserInfo = await fetch(
        "https://www.googleapis.com/oauth2/v1/userinfo",
        {
          headers: {
            Authorization: `${tokenResponse.token_type} ${tokenResponse.access_token}`,
          },
        }
      );

      const userInfo = await getUserInfo.json();

      console.log(userInfo);

      setIsLoading(() => false);
    },
  });
  return (
    <button
      onClick={() => loginWithGoogle()}
      type="button"
      className="whitespace-nowrap flex items-center gap-0.62rem flex-1 border border-neutral-border py-1rem px-0.75rem text-neutral-1100 text-12 rounded-0.5rem bg-neutral-bg justify-center"
      disabled={isLoading}
    >
      <img src="/google.png" alt="Google" />
      Google account
    </button>
  );
};

const FacebookButton = () => {
  return (
    <button
      type="button"
      className="whitespace-nowrap flex items-center gap-0.62rem flex-1 border border-neutral-border py-1rem px-0.75rem text-neutral-1100 text-12 rounded-0.5rem bg-neutral-bg justify-center"
    >
      <img src="/facebook.png" alt="Facebook" />
      Facebook account
    </button>
  );
};
