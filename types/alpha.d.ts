export type ColorToken = import('../types/types.js').ColorToken;
/**
 *
 * Returns the color token's alpha channel value if the the `amount` parameter is not passed in else it sets the color token's alpha channel with the `amount` specified.
 *
 * * Also supports expressions for the `amount` parameter. For example `*0.5` which means the value multiply the current alpha by `0.5` and set the product as the new alpha value. In short `currentAlpha * 0.5 = newAlpha`. The supported symbols are `* , - , / , +`
 *
 * @param {ColorToken} color The color with the targeted opacity/alpha channel.
 * @param {number | string} amount The value to apply to the opacity channel. The value is between [0,1]
 * @returns {number|ColorToken} Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 * // Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
 */
export function alpha(color: ColorToken, amount: number | string): number | ColorToken;
