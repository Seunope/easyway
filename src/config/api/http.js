import GLOBALS from './globals';
import {GetFunc, PostFunc, DelFunc, PutFunc} from './http_mthd';
import {SaveToken, SaveToStorage} from '../../config/functions';
import {MAPBOX_TOKEN} from '../../../env';

// API calls

export const GEO_DECODING = async data => {
  const url = `${GLOBALS.MAP_BOX_URL}${data.address}.json?access_token=${MAPBOX_TOKEN}`;
  console.log(url);
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};
