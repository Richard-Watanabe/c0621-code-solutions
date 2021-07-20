/* exported defaults */

// We need to check if the properties in source already exists in target or not, and also check if the value in source isn't null.
// If it doesn't exist and if it isn't null, add to target.

function defaults(target, source) {
  for (var property in source) {
    if (!target[property] && target[property] !== null) {
      target[property] = source[property];
    }
  }
}
