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
        tempArr[tokenIndex].svg = svgVal.svg;
      }
    });
  });
  return tempArr as UserTokenDataResArr;
};
