export const toDashCase = (str) => str.toLowerCase().replaceAll(/\s+/g, "-");

export const toCapitalFirst = (str) => {
  const lowered = str.toLowerCase();
  return `${lowered[0].toUpperCase()}${lowered.slice(1)}`;
}

export const toCapitalFirstAll = (str) => str
  .split(/\s+/g)
  .map(toCapitalFirst)
  .join(" ");

export const toCamelCase = (str) => {
  return str.split(/\s+/g).map((word, index) => index > 0 ? toCapitalFirst(word) : word.toLowerCase());
}
