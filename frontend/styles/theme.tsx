export const SM_BREAKPOINT = 430;
export const MD_BREAKPOINT = 740;
export const LG_BREAKPOINT = 1000;
export const XL_BREAKPOINT = 1300;
export const XXL_BREAKPOINT = 1900;

export const MAX_CONTAINER_WIDTH = 1200;

const breakpoints = [
  {
    name: "sm",
    value: SM_BREAKPOINT,
  },
  {
    name: "md",
    value: MD_BREAKPOINT,
  },
  {
    name: "lg",
    value: LG_BREAKPOINT,
  },
  {
    name: "xl",
    value: XL_BREAKPOINT,
  },
  {
    name: "xxl",
    value: XXL_BREAKPOINT,
  },
];

const generateBreakpoints = (breakpointsArray: typeof breakpoints) => {
  const result: Record<string, string> = {};
  breakpointsArray.forEach(({ name, value }) => {
    result[name] = `(min-width: ${value}px)`;
  });

  return result;
};

export const mq = generateBreakpoints(breakpoints);

export const theme = {
  colors: {
    black: {
      100: "#161913",
      80: "#20231D",
      60: "#2C2F28",
    },
    white: {
      100: "#FFFDF9",
    },
    red: {
      100: "#CD0000",
    },
  },
  spaces: {},
  fonts: {
    body01: `
      font: Roboto;
      line-height: 1.3;
      font-size: 16px;
    `,
    body02: `
      font: Roboto;
      line-height: 1.2;
      font-size: 14px;
    `,
    body03: `
      font: Roboto;
      line-height: 1.1;
      font-size: 12px;
    `,
    heading01: `
      font: Roboto;
      line-height: 1.2;
      font-size: 36px;
    `,
    heading02: `
      font: Roboto;
      line-height: 1.2;
      font-size: 28px;
    `,
    heading03: `
      font: Roboto;
      line-height: 1.2;
      font-size: 24px;
    `,
  },
  borderStyles: {},
};
