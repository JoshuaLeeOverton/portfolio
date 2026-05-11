import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StoryContext, StoryFn } from '@storybook/react';
import { CssBaseline } from '@mui/material';

// Import your actual app theme here if you have one
const theme = createTheme({
});

export const decorators = [
  (Story: StoryFn, context: StoryContext) =>  {

    const {args} = context

    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {Story(args, context)}
        </ThemeProvider>
    )
  }
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};