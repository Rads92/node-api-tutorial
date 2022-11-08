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
