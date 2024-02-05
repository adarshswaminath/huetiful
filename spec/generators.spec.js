import * as generators from '../lib/generators.esm.mjs';

/** 
 * @license
 * sortBy.ts - Test suite for huetiful-js palette generator module. 
Copyright 2023 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

describe(`This test suite checks the generators. `, () => {
  var data = {
    discoverPalettes: {
      params: [
        [
          '#ffff00',
          '#00ffdc',
          '#00ff78',
          '#00c000',
          '#007e00',
          '#164100',
          '#720000',
          '#600000',
          '#4e0000',
          '#3e0000',
          '#310000'
        ],
        'tetradic'
      ],
      description:
        'Takes an array of colors and finds the best matches for a set of predefined palettes.',
      expect: ['#310000', '#3e0000', '#4e0000', '#164100']
    },
    // earthtone: {
    //   params: ['pink', 'lch', { earthtones: 'clay', samples: 5 }],
    //   description:
    //     'Creates a scale of a spline interpolation between an earthtone and a color.',
    //   expect: ['#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff']
    // },
    hueShift: {
      params: ['#3e0000'],
      description: 'Generates a palette of hue shifted colors',
      expect: [
        '#3f0101',
        '#2b1800',
        '#002620',
        '#2f1500',
        '#321300',
        '#3f0007',
        '#3e0000',
        '#561a17',
        '#743356',
        '#915077',
        '#268fad',
        '#cb8ebe',
        '#fcaca7'
      ]
    },
    interpolateSpline: {
      params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch', 8, 'natural'],
      description:
        'Returns a spline interpolator function with customizable interpolation methods',
      expect: [
        '#b2c3f1',
        '#5ccdec',
        '#22d1b0',
        '#76c85b',
        '#c5b73d',
        '#f1ac6c',
        '#fdae9d',
        '#f3bac1'
      ]
    },
    pairedScheme: {
      params: ['green', { hueStep: 6, samples: 4, tone: 'dark' }],
      description:
        'Creates a scheme that consists of a scheme color that is incremented by a hueStep to get the final hue to pair with',
      expect: ['#008000', '#348e2a', '#79b36f', '#cfe4cb']
    }
  };

  for (const [func, args] of Object.entries(data)) {
    it(args['description'], () => {
      expect(generators[func](...args['params'])).toEqual(args['expect']);
    });
  }
});