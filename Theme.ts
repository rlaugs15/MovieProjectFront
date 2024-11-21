import { createTheme } from "@mui/material/styles";
import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export const globalStyles = css`
  ${emotionNormalize}

  html, body {
    margin: 0;
    padding: 0;
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    background-color: white;
    min-height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
export const theme = createTheme({
  palette: {
    mode: "light",
    // primary: {
    //   main: #efefef,
    // },
    // secondary: {
    //   main: '#..',
    // },
  },
  typography: {
    fontFamily: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI"`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "black",
          lineHeight: 0,
          "&.Mui-selected": {
            color: "black",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // backgroundColor: '#F3EEEA',
          boxShadow: "none",
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "1.8rem",
          "@media (min-width:600px)": {
            minHeight: "2rem",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "black",
          "&.Mui-selected": {
            color: "#776B5D",
          },
          indicator: {
            backgroundColor: "#776B5D",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#776B5D",
        },
      },
    },
  },
});