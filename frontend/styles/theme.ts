import { BLACK_100, BLACK_60, BLACK_80, RED_100, WHITE_100 } from "./colors";

export const theme = {
  colors: {
    black: {
      100: BLACK_100,
      80: BLACK_80,
      60: BLACK_60,
    },
    white: {
      100: WHITE_100,
    },
    red: {
      100: RED_100,
    },
  },
  spaces: {},
  fonts: {
    body01: `

      line-height: 1.3;
      font-size: 16px;
      color: ${BLACK_80};
    `,
    body02: `
      font-family: Roboto;
      line-height: 1.2;
      font-size: 14px;
      font-color: ${BLACK_80};
    `,
    body03: `
      font-family: Roboto;
      line-height: 1.1;
      font-size: 12px;
      font-color: ${BLACK_80};
      
    `,
    heading01: `
      line-height: 1.2;
      font-size: 36px;
      font-color: ${BLACK_100};
    `,
    heading02: `
      font-family: Roboto;
      line-height: 1.2;
      font-size: 28px;
      font-color: ${BLACK_100};
    `,
    heading03: `
      font-family: Roboto;
      line-height: 1.2;
      font-size: 24px;
      font-color: ${BLACK_100};
    `,
  },
  borderStyles: {},
};

// export * from "./breakpoints";
