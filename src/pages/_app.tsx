import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NextNProgress 
          color={theme.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
        />
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
