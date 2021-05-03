import GLOBALS from './globals';
import {GetFunc, PostFunc, DelFunc, PutFunc} from './http_mthd';
import {SaveToken, SaveToStorage} from '../../config/functions';

// API calls
export const CREATE_ACCOUNT = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/create-account`;
  return PostFunc(url, data);
};

export const LOGIN_ACCOUNT = async (data) => {
  const url = `${GLOBALS.BASE_URL}v1/login`;
  let response;
  try {
    response = await PostFunc(url, data);
    await SaveToStorage('token', response.token);
    await USER_DATA();
  } catch (error) {
    response = error;
  }
  return response;
};

export const USER_DATA = async () => {
  const url = `${GLOBALS.BASE_URL}v1/profile-info`;
  let response;
  try {
    response = await GetFunc(url);
    await SaveToStorage('user', response);
  } catch (error) {
    response = error;
  }
  return response;
};

export const TOP_EARNER = async () => {
  const url = `${GLOBALS.BASE_URL}v1/random-recharge`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const PROFILE = async () => {
  const url = `${GLOBALS.BASE_URL}v1/profile`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const WALLET_BALANCE = async () => {
  const url = `${GLOBALS.BASE_URL}v1/wallet-balance`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const WALLET_HISTORY = async () => {
  const url = `${GLOBALS.BASE_URL}v1/wallet-history`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const EARNING_BALANCE = async () => {
  const url = `${GLOBALS.BASE_URL}v1/earning-balance`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const EARNING_HISTORY = async () => {
  const url = `${GLOBALS.BASE_URL}v1/earnings-history`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const FAQS = async () => {
  const url = `${GLOBALS.BASE_URL}v1/faqs`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};





export const VERIFY_OTP = (otp, id, email) => {
  let data = {token: otp};
  const url = `${GLOBALS.BASE_URL}api/v3/customer/verifyotp?id=${id}&email=${email}`;
  return PostFunc(url, data);
};

export const RESEND_OTP = (telephone) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/resendotp?telephone=${telephone}`;
  return GetFunc(url);
};

export const CREATE_PIN = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/create-password`;
  return PutFunc(url, data);
};

export const PERSONAL_DETAILS = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/personal-details/update`;
  return PutFunc(url, data);
};

export const FORGOT_PASSWORD = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/forgot-password`;
  return PostFunc(url, data);
};

export const RESET_PASSWORD = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/reset-password`;
  return PutFunc(url, data);
};

export const CHANGE_PASSWORD = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/password/change`;
  return PutFunc(url, data);
};

export const EMPLOYMENT_RECORD = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/employment-record`;
  return PostFunc(url, data);
};

export const BANK_ACCOUNT_INFO = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/account-info`;
  return PostFunc(url, data);
};

///////LOAN//////////////
// export const REQUEST_LOAN = data => { //was never used
//   const url = `${GLOBALS.BASE_URL}api/v1/customer/requestloan`;
//   return PostFunc(url, data);
// };

export const LOAN_HISTORY = () => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/loans/history`;
  return GetFunc(url);
};

export const LOAN_DATA = () => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/loan-data`;
  return GetFunc(url);
};

export const LOAN_REQUEST_APPLICATION = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/loanrequest`;
  return PostFunc(url, data);
};

export const PENDING_LOAN = () => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/loans/pending`;
  return GetFunc(url);
};

export const ACCEPT_LOAN_OFFER = (customerDecision, requestId) => {
  let data = {customerDecision: customerDecision};
  const url =
    `${GLOBALS.BASE_URL}api/v3/customer/loanoffer/accept?requestId=` +
    requestId;
  return PutFunc(url, data);
};

export const CANCEL_LOAN_OFFER = (customerDecision, requestId) => {
  let data = {customerDecision: customerDecision};
  const url =
    `${GLOBALS.BASE_URL}api/v3/customer/loanrequest/cancel?requestId=` +
    requestId;
  return PutFunc(url, data);
};

export const CLEAR_BALANCE = (requestId) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/get-clear-balance?requestId=${requestId}`;
  return GetFunc(url);
};

export const NEXT_REPAYMENT = (requestId) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/get-next-repayment?requestId=${requestId}`;
  return GetFunc(url);
};

export const RAVE_PAY_CLEAR_BALANCE = (data) => {
  const url =
    `${GLOBALS.BASE_URL}api/v3/flutterwave/card-client/clear-balance?requestId=` +
    data.requestId;
  return PostFunc(url, data);
};

export const RAVE_PAY_NEXT_REPAYMENT = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/repayment/mobile-payment`; //api/v3/flutterwave/card-client/next-repayment`;
  return PostFunc(url, data);
};

export const GET_NOTIFICATION = () => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/notifications/retrieve`;
  return GetFunc(url);
};

export const CLEAR_NOTIFICATION = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/notification/update/bulk`;
  return PutFunc(url, data);
};

// export const UPDATE_NOTIFICATION = data => {
//   const url =
//     `${GLOBALS.BASE_URL}api/v3/customer/notification/update?notificationId="` +
//     data.notificationId;
//   return PutFunc(url, data);
// };

///// END LOAN////////////////////
export const REFERRAL_CODE = () => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/referral-code`;
  return GetFunc(url);
};

export const CUSTOMER_REFERRALS = () => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/referrals`;
  return GetFunc(url);
};

export const CUSTOMER_WITHDRAWAL_REFERRAL = async (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/referrals/request-withdrawal`;
  let response;
  try {
    response = await PutFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const UPLOAD_PASSPORT = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/passport`;
  return PostFunc(url, data);
};

export const CUSTOMER_STATUS = () => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/status`;
  return GetFunc(url);
};

export const GET_ACTIVE_LOAN = () => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/loans/active`;
  return GetFunc(url);
};

export const GET_NEXT_LOAN_REQUEST_DATE = () => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/loanrequest/nextrequestdate`;
  return GetFunc(url);
};

export const PHONE_RECORDS = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/phone-records`;
  return PostFunc(url, data);
};

export const PROFILE_COMPLETE = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/profile/complete`;
  return PutFunc(url, data);
};

export const GET_RECORDS = () => {
  const url = `${GLOBALS.BASE_URL}api/v3/customer/getrecords`;
  return GetFunc(url);
};

export const SAVE_FUND = (data) => {
  const url = `${GLOBALS.BASE_URL}api/v3/flutterwave/card/save-refund`;
  return PostFunc(url, data);
};
