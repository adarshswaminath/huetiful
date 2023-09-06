export type tone = "light" | "dark";
export type hue =
  | "red-purple"
  | "red"
  | "yellow-red"
  | "yellow"
  | "green-yellow"
  | "green"
  | "blue-green"
  | "blue"
  | "purple-blue"
  | "purple";

export type earthtones =
  | "light gray"
  | "silver"
  | "sand"
  | "tupe"
  | "mahogany"
  | "brick red"
  | "clay"
  | "cocoa"
  | "dark brown"
  | "dark";
export type divergingScheme =
  | "Spectral"
  | "RdYlGn"
  | "RdBu"
  | "PiYG"
  | "PRGn"
  | "RdYlBu"
  | "BrBG"
  | "RdGy"
  | "PuOr";
export type qualitativeScheme =
  | "Set2"
  | "Accent"
  | "Set1"
  | "Set3"
  | "Dark2"
  | "Paired"
  | "Pastel2"
  | "Pastel1";

export type sequentialScheme =
  | "OrRd"
  | "PuBu"
  | "BuPu"
  | "Oranges"
  | "BuGn"
  | "YlOrBr"
  | "YlGn"
  | "Reds"
  | "RdPu"
  | "Greens"
  | "YlGnBu"
  | "Purples"
  | "GnBu"
  | "Greys"
  | "YlOrRd"
  | "PuRd"
  | "Blues"
  | "PuBuGn"
  | "Viridis";

export type palette =
  | "analogous"
  | "triadic"
  | "tetradic"
  | "complementary"
  | "splitComplementary"
  | "customAnalogous";
export type Color = number | string | object;

/**
 * @param
 * An array of baseColor tokens (in short, just an array of valid colors)
 */

/**
 * @param
 *
 */
export type filterBy = (
  colors: Color[],
  against?: Color,
  start: number,
  end: number
) => Color[];

export type filterBy = (colors: Color[], start: number, end: number) => Color[];

/**
 * @type
 * The property being queried. Used in utilities that perform operations on collections.
 */
export type factor =
  | "luminance"
  | "temp"
  | "saturation"
  | "contrast"
  | "distance"
  | "lightness"
  | "hue";
export type sortBy = (
  colors: Color[],
  against?: Color,
  order: "asc" | "desc"
) => Color[];
export type sortBy = (colors: Color[], order: "asc" | "desc") => Color[];

export type factorMapper = (
  factor: factor,
  cb: (arg: Color, colorSpace?: HueColorSpaces) => number,
  order?: "asc" | "desc",
  colorObj = false
) => (colors: Color[]) => Color[];

export type ColorSpaces =
  | A98
  | Cubehelix
  | Dlab
  | Dlch
  | Hsi
  | Hsl
  | Hsv
  | Hwb
  | Jab
  | Jch
  | Lab
  | Lab65
  | Lch
  | Lch65
  | Lchuv
  | Lrgb
  | Luv
  | Okhsl
  | Okhsv
  | Oklab
  | Oklch
  | P3
  | Prophoto
  | Rec2020
  | Rgb
  | Xyz50
  | Xyz65
  | Yiq;
export type HueColorSpaces = "hsl" | "hsv" | "hsi" | "oklch" | "lch" | "hwb";

export type ScaleValues =
  | "100"
  | "50"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type HueMap = {
  indigo: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };
  gray: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  zinc: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  neutral: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  stone: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  red: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  orange: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  amber: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  yellow: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  lime: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  green: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  emerald: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  teal: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  sky: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  blue: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  violet: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  purple: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  fuchsia: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  pink: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  rose: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };
};

type ColorTemp = "warm" | "cool" | "daylight" | "incadescent" | "fluorescent";
