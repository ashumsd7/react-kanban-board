export function capitalizeFirstLetter(inputString) {
  if (!inputString) {
      return inputString;
  }

  // Convert the first character to uppercase and the rest to lowercase
  return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
}