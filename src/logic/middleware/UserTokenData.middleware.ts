import { UserTokenDataGetter } from '../services';
import {
  UserTokenDataResArr,
  UserTokenDataResEntry,
} from '../models/int_models';
import { mainTokenSvgArr } from '../constants';

export const UserTokenDataCleaner = (
  UserTokenDataResponse: UserTokenDataResEntry[]
) => {
  const tempArr: UserTokenDataResArr = JSON.parse(
    JSON.stringify(UserTokenDataResponse)
  );
  UserTokenDataResponse.map((tokenVal, tokenIndex) => {
    mainTokenSvgArr.map((svgVal) => {
      if (svgVal.name === tokenVal.name) {
        tempArr[tokenIndex].id = tokenIndex;
        tempArr[tokenIndex].svg = svgVal.svg;
      }
    });
  });
  console.log(`THA TEMP ARR =====> ${tempArr[0]}`);
  return tempArr as UserTokenDataResArr;
};
