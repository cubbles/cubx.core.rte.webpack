'use strict';
/**
 * Find an element in Dom with the given attribute and value;
 * @param {string} attribute attribute name
 * @param {string} value attribute value
 * @returns {HTMLElement|undefined}
 * @private
 */
export function elementFindByAttributeValue (attribute, value) {
  var all = document.getElementsByTagName('*');
  for (var i = 0; i < all.length; i++) {
    if (all[i].getAttribute(attribute) === value) {
      return all[i];
    }
  }
}

export function findAncestorElement (element, ancestorName) {
  if (element.closest) {
    return element.closest(ancestorName);
  } else {
    var ancestor = element;
    while ((ancestor = ancestor.parentElement) && ancestor.tagName !== ancestorName.toUpperCase()) {}
    return ancestor;
  }
}
