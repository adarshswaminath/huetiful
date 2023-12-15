import type { callback, Factor, Color } from '../../types';

const colorObj = (factor: Factor, callback: callback) => (color: Color) => {
  return { [factor]: callback(color), name: color };
};

export { colorObj };
