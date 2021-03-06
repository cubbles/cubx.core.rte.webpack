/* eslint no-unused-vars: [2, { "varsIgnorePattern": "guid" }]  */

/**
 * Generates a GUID string.
 * @returns {string} The generated GUID.
 * @example af8a8416-6e18-a307-bd9c-f2c947bbb3aa
 * @author Slavik Meltser (slavik@meltser.info).
 * @link http://slavik.meltser.info/?p=142
 * @link http://slavik.meltser.info/the-efficient-way-to-create-guid-uuid-in-javascript-with-explanation/
 */

export default function guid () {
  function _p8 (s) {
    var p = (Math.random().toString(16) + '000000000').substr(2, 8);
    return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
  }

  return _p8() + _p8(true) + _p8(true) + _p8();
}
