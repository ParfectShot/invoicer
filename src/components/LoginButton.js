import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import Button from '@material-ui/core/Button';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '988934884913-4ocfm6noqtgqcr6dhbjcpq7o2gmvtcma.apps.googleusercontent.com';

function LoginHooks() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/parfectshot`
    );
  };

  const { SignIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      onClick={SignIn}
    >
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </Button>
  );
}

export default LoginHooks;