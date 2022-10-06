import { stylingObject } from '../models/int_models';

export const stylingCalculator = (
  height: number,
  stylingValues: stylingObject
) => {
  if (height >= 667 && height < 736) {
    return stylingValues.xs;
  } else if (height >= 736 && height < 812.57) {
    return stylingValues.sm;
  } else if (height >= 812.57 && height < 826.9) {
    return stylingValues.md;
  } else if (height >= 826.9 && height < 844) {
    return stylingValues.lg;
  } else if (height >= 844 && height < 930) {
    return stylingValues.xl;
  }
};
