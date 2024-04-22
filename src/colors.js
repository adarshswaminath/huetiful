/**

 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef {import('../types/types.js').TailwindColorFamilies} TailwindColorFamilies
 * @typedef {import('../types/types.js').ScaleValues} ScaleValues

 */

/// Extracted from TailwindCSS

import { keys, values } from './fp';
import tailwind from './maps/tailwind.js';

/**
 *
 *  Returns TailwindCSS color value(s) of the specified `shade` from the default palette. If called with no parameters, it returns an array of colors from `050` to `900`. If called with parameter will return the specified shade value.
 * @param {TailwindColorFamilies |`all`} shade The hue family to return.
 * @param  {ScaleValues} value The tone value of the shade. Values are in incrementals of `100`. For example numeric (`100`) and its string equivalent (`'100'`) are valid.
 * @returns {Array<string>|string} A hex string value or array of hex strings.
 * @example
 *
 * import { tailwindColors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
let red = tailwindColors("red");
console.log(red());
// [
  '#fef2f2', '#fee2e2',
  '#fecaca', '#fca5a5',
  '#f87171', '#ef4444',
  '#dc2626', '#b91c1c',
  '#991b1b', '#7f1d1d'
]


console.log(red(100));
// '#fee2e2'

console.log(red('900'));
// '#7f1d1d'


 *
 */

function colors(shade, value) {
  var w = tailwind;

  var [d, k] = ['all', keys(w)];

  var [p, q] = [
    (h) => k.includes(h),
    (i) =>
      [
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900'
      ].includes(i.toString())
  ];

  // @ts-ignore
  shade = shade.toLowerCase();
  var o;
  if (shade === d) {
    if (q(value)) {
      o = k.map((y) => w[y][value]);
    } else {
      o = k.map((y) => values(w[y])).flat(2);
    }
  } else if (p(shade)) {
    if (q(value)) {
      o = w[shade][value];
    } else {
      o = values(w[shade]);
    }
  } else if (!shade || (!shade && !value)) {
    o = k.map((h) => w[h]);
  }
  return o;
}

export { colors };
