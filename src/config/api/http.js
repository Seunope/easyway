import GLOBALS from './globals';
import {GetFunc, PostFunc, DelFunc, PutFunc} from './http_mthd';
import {SaveToken, SaveToStorage} from '../../config/functions';
import {MAP_BOX_TOKEN} from '../../../env';

// API calls

export const FORWARD_GEO_CODING = async data => {
  const url = `${GLOBALS.MAP_BOX_URL}${data.address}.json?access_token=${MAP_BOX_TOKEN}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const REVERSE_GEO_CODING = async data => {
  const url = `${GLOBALS.MAP_BOX_URL}${data.longitude},${data.latitude}.json?access_token=${MAP_BOX_TOKEN}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};
