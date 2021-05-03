import AsyncStorage from '@react-native-async-storage/async-storage';
import Moment from 'moment';

export const RefreshSession = async (expireInMinutes) => {
  const now = new Date();
  let expireTime = new Date(now);
  let sessionTime = JSON.stringify(
    expireTime.setMinutes(now.getMinutes() + expireInMinutes),
  );
  await SaveToStorage('expireAt', sessionTime);
};

export const SaveToStorage = async (index, value) => {
  if (!index || !value) {
    //console.log('storage parameters cannot be null');
    return false;
  }
  try {
    await AsyncStorage.setItem(index, JSON.stringify(value));
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const GetDataFromStorage = async (index) => {
  let value = null;
  if (!index) {
    //console.log('storage parameters cannot be null');
    return value;
  }
  try {
    value = JSON.parse(await AsyncStorage.getItem(index));
  } catch (e) {
    console.log(e);
    // error reading value
  }
  return value;
};

export const DeleteDataFromStorage = async (index) => {
  let value = null;
  if (!index) {
    return value;
  }
  try {
    value = await AsyncStorage.removeItem(index);
  } catch (e) {
    // error reading value
  }
  return value;
};

export const ClearAllFromStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // error reading value
  }
};

export function FormatNumber(numb, fixed) {
  var decimalPart;
  let num = Number(numb);

  var array = Math.floor(num).toString().split('');
  var index = -3;
  while (array.length + index > 0) {
    array.splice(index, 0, ',');
    index -= 4;
  }

  if (fixed > 0) {
    decimalPart = num.toFixed(fixed).split('.')[1];
    return array.join('') + '.' + decimalPart;
  }
  return array.join('');
}

export function UpperCaseFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function FormatDate(datetime) {
  if (datetime != null) {
    let dateAdjusted = datetime.replace(' ', 'T');
    let theDate = new Date(dateAdjusted);
    return Moment(theDate, 'YYYYMMDD').fromNow();
  }
  return datetime;
}
