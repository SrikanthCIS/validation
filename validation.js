/**
 *  check if String is valid or not
 * @param {string} input
 * @param {string} message
 */
function isValidString(input, message) {
  if ((input == null) | (input.trim() == "")) {
    throw new Error(message);
  }
}
