// from https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
export const range = (size: number, startAt = 0) => {
  return [...Array(size).keys()].map((i) => i + startAt);
};
