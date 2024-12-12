import {GoogleSignin,  statusCodes, isSuccessResponse, isErrorWithCode, isCancelledResponse} from "@react-native-google-signin/google-signin";
const useGoogleSignIn = () => {
    const signIn = async() => {
        try {
            const response = await GoogleSignin.signIn();
            // if the response is successfully
            if (isSuccessResponse(response)) {
                console.log("success", response);
                return;
            }

            if (isCancelledResponse(response)) {
                console.log("cancelled", response)
                return;
            }

        } catch (error) {
            if (isErrorWithCode(error)) {
                switch (error.code) {
                    case statusCodes.SIGN_IN_CANCELLED:
                        //
                        console.log("signin fail", error)
                        break;
                    case statusCodes.SIGN_IN_REQUIRED:
                        // Android-only, you probably have hit rate limiting.
                        // You can still call `presentExplicitSignIn` in this case.
                        console.log("signin required fail", error)
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        // Android: play services not available or outdated.
                        // Get more details from `error.userInfo`.
                        // Web: when calling an unimplemented api (requestAuthorization)
                        // or when the Google Client Library is not loaded yet.
                        console.log("play store fail", error)
                        break;
                    default:
                    // something else happened
                }
            } else {
                // do something else
            }
        }

    }

    return {signIn}
}

export default useGoogleSignIn;
