import React from 'react';
import '../styles/globals.css';
import {AppProps} from 'next/app';
import BasicLayout from '../layouts/basic.layout';
import '../styles/index.scss';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from '../core/themes/theme';
import {CacheProvider, EmotionCache} from '@emotion/react';
import createEmotionCache from '../core/unit/createEmotionCache';
import Script from 'next/script';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

/**
 * @param {AppProps} props
 * @constructor
 * @return {JSX.Element}
 */
function MyApp(props: MyAppProps) {
  const {Component, pageProps, emotionCache = clientSideEmotionCache} = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <BasicLayout>
          {/* Google Analytics*/}
          <GoogleAnalytics measurementId={'G-YKCPHDYK53'}/>
          {/* microsoft clarity */}
          <Script dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "b91ge7rn7p");
            `,
          }}/>
          <CssBaseline/>
          <Component {...pageProps} />
        </BasicLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
