'use client'

import { useOCAuth , LoginCallBack} from "@opencampus/ocid-connect-js";
import { useNavigate } from "react-router";

function CustomErrorComponent() {
    const { authState } = useOCAuth();
    return <div>Error Logging in: {authState.error?.message}</div>;
    }
  
    function CustomLoadingComponent() {
    return <div>Loading....</div>;
    }

export default function RedirectPage() {
  const navigate = useNavigate();

  const loginSuccess = () => {
    navigate('/dashboard'); // Redirect after successful login
  };

  const loginError = (error) => {
    console.error('Login error:', error);
  };

 

  return (
    <LoginCallBack 
      errorCallback={loginError} 
      successCallback={loginSuccess}
      customErrorComponent={<CustomErrorComponent />}
      customLoadingComponent={<CustomLoadingComponent />} 
    />
  );
}