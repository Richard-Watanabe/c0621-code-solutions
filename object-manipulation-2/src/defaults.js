/* exported defaults */

// We need to check if the properties in source already exists in target or not.
// If it doesn't add the property to target.

function defaults(target, source) {
  for (var property in source) {
    if (property !== target[property]) {
      target[property] = source[property];
    }
  }
}

// for (var property in source) {
//   var value = source[property];
//   target[property] = value;
//   for (var key in target) {
//     if (key === property) {

//     }
//   }
// }
