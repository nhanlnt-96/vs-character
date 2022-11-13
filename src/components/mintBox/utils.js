export const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;
