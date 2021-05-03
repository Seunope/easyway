import {Platform, Linking, Alert} from 'react-native';
import TouchID from 'react-native-touch-id';
import * as Keychain from 'react-native-keychain';
import AndroidOpenSettings from 'react-native-android-open-settings';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

export const CheckBiometricSupportedAndEnrolled = async () => {
  const optionalConfigObject = {
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // if true is passed, it will allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
  };
  return new Promise((resolve, reject) => {
    //isSupported returns both cases 1. if supported 2. Is enabled/configured/enrolled
    TouchID.isSupported(optionalConfigObject)
      .then((biometryType) => {
        console.log(biometryType);
        // Success code.
        // as we are focusing on fingerprint for now
        if (biometryType && biometryType != 'FaceID') {
          resolve(true);
        } else {
          let fingerprintLabelForOS =
            Platform.OS == 'ios' ? 'Touch ID' : 'Fingerprint';
          reject(fingerprintLabelForOS + ' is not available on this device');
        }
      })
      .catch((error) => {
        console.log(error.code);
        // iOS Error Format and android error formats are different
        // android use code and ios use name
        // check at https://github.com/naoufal/react-native-touch-id
        let errorCode = Platform.OS == 'ios' ? error.name : error.code;
        if (
          errorCode === 'LAErrorTouchIDNotEnrolled' ||
          errorCode === 'NOT_AVAILABLE' ||
          errorCode === 'NOT_ENROLLED'
        ) {
          let fingerprintLabelForOS =
            Platform.OS == 'ios' ? 'Touch ID' : 'Fingerprint';
          resolve(
            fingerprintLabelForOS +
              ' has no enrolled fingers. Please go to settings and enable ' +
              fingerprintLabelForOS +
              ' on this device.',
          );
        } else {
          reject(
            Platform.OS == 'ios' ? error.message : translations.t(error.code),
          );
        }
      });
  });
};

export const SetCredentials = async (username, password) => {
  return new Promise((resolve, reject) => {
    // Store the credentials
    Keychain.setGenericPassword(username, password)
      .then((resp) => {
        console.log(resp);
        resolve(true);
      })
      .catch((err) => {
        console.log('err: ', err);
        reject(err);
      });
  });
};

export const GetCredentials = async () => {
  return new Promise((resolve, reject) => {
    Keychain.getGenericPassword()
      .then((credentials) => {
        if (credentials && credentials.username) {
          console.log(
            'Credentials successfully loaded for user ' + credentials.username,
          );
          resolve(credentials);
        } else {
          // console.log('No credentials stored');
          resolve(null);
        }
      })
      .catch((err) => {
        console.log('err: ', err);
        reject(err);
      });
  });
};

export const AuthenticateFingerPrint = () => {
  return new Promise((resolve, reject) => {
    let fingerprintLabelForOS =
      Platform.OS == 'ios' ? 'Touch ID' : 'Fingerprint';

    TouchID.authenticate(
      'Login to Arvofinance using ' + fingerprintLabelForOS,
      optionalConfigObject,
    )
      .then((success) => {
        console.log('Authenticated Successfully', success);
        resolve(success);
      })
      .catch((error) => {
        console.log('Authentication Failed', error.code);
        reject(error);
      });
  });
};

export const ResetCredentials = async () => {
  return new Promise((resolve, reject) => {
    Keychain.resetGenericPassword()
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const IsBiometricSupported = async () => {
  return TouchID.isSupported(optionalConfigObject)
    .then((biometryType) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};

export const SaveUserDetails2KeyChain = async (telephone, password) => {
  const isFingerPrintSupported = await CheckBiometricSupportedAndEnrolled();
  let username = telephone;
  if (isFingerPrintSupported === true) {
    await SetCredentials(username, password);
  } else {
    Alert.alert('Alert', isFingerPrintSupported, [
      {
        text: 'Ok',
        onPress: () => {
          //redirect to settings
          Platform.OS === 'ios'
            ? Linking.openURL('app-settings:')
            : AndroidOpenSettings.securitySettings();
        },
      },
    ]);
  }
};
