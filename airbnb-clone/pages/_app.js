import '../styles/globals.css';

import Router from 'next/router';

// https://visgl.github.io/react-map-gl/docs/get-started/get-started
import 'mapbox-gl/dist/mapbox-gl.css';

// inplementing loader bar/indicator
// https://www.npmjs.com/package/@badrap/bar-of-progress
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  // The size (height) of the progress bar.
  // Numeric values get converted to px.
  size: 4,

  // Color of the progress bar.
  // Also used for the glow around the bar.
  color: "#FE595E",

  // Class name used for the progress bar element.
  className: "bar-of-progress z-50",

  // How many milliseconds to wait before the progress bar
  // animation starts after calling .start().
  delay: 100,
});

// connecting the progress bar to the next.js router
// Search : What is Router.events()?
Router.events.on("routeChangeStart", progress.start); // Show the progress bar and begin animating it.
Router.events.on("routeChangeComplete", progress.finish); // End the progress bar animation.
Router.events.on("routeChangeError", progress.finish); // End the progress bar animation.

// recoil
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      
      <Component {...pageProps} />
     
    </RecoilRoot>
  )
}

export default MyApp
