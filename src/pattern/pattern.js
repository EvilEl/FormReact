export const pattern = {
  patternEmail: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
  patternPassword: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g,
  patternName: /^([a-zA-Z-А-Яа-я]{6,16})$/,
};
