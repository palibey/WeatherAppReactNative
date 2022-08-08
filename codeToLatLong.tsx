// @ts-ignore
import Data from './countryCode.json';

export function codeToLatLong(code: String) {
  let toReturn = [];
  if (code != null) {
    code = code.toUpperCase();
    let arr = Data.ref_country_codes;
    for (let i = 0; i < arr.length; i++) {
      if (code == arr[i].alpha2 || code == arr[i].alpha3) {
        toReturn.push(arr[i].latitude);
        toReturn.push(arr[i].longitude);
      }
    }
    return toReturn;
  }
  toReturn.push(32);
  toReturn.push(-100);
  return toReturn;
}
export function checkExistence(code: String) {
  code = code.toUpperCase();
  let arr = Data.ref_country_codes;
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (code == arr[i].alpha2 || code == arr[i].alpha3) {
        flag = true;
        return flag;
      }
    }
  return flag;
}


