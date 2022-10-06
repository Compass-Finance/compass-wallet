type styleSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type stylingObject = {
  [key in styleSizes]: number;
};
