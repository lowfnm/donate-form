import GeometriaEOT from '../assets/fonts/geometria/Geometria.eot';
import GeometriaBoldEOT from '../assets/fonts/geometria-bold/Geometria-Bold.eot';
import GeometriaExtraBoldEOT from '../assets/fonts/geometria-extra-bold/Geometria-ExtraBold.eot';
import GeometriaLightEOT from '../assets/fonts/geometria-light/Geometria-Light.eot';

import GeometriaTTF from '../assets/fonts/geometria/Geometria.ttf';
import GeometriaBoldTTF from '../assets/fonts/geometria-bold/Geometria-Bold.ttf';
import GeometriaExtraBoldTTF from '../assets/fonts/geometria-extra-bold/Geometria-ExtraBold.ttf';
import GeometriaLightTTF from '../assets/fonts/geometria-light/Geometria-Light.ttf';

import GeometriaWOFF from '../assets/fonts/geometria/Geometria.woff';
import GeometriaBoldWOFF from '../assets/fonts/geometria-bold/Geometria-Bold.woff';
import GeometriaExtraBoldWOFF from '../assets/fonts/geometria-extra-bold/Geometria-ExtraBold.woff';
import GeometriaLightWOFF from '../assets/fonts/geometria-light/Geometria-Light.woff';

import GeometriaWOFF2 from '../assets/fonts/geometria/Geometria.woff2';
import GeometriaBoldWOFF2 from '../assets/fonts/geometria-bold/Geometria-Bold.woff2';
import GeometriaExtraBoldWOFF2 from '../assets/fonts/geometria-extra-bold/Geometria-ExtraBold.woff2';
import GeometriaLightWOFF2 from '../assets/fonts/geometria-light/Geometria-Light.woff2';

import GilroyLightOTF from '../assets/fonts/gilroy-light/Gilroy-Light.otf';

import GilroyExtraBoldOTF from '../assets/fonts/girloy-extra-bold/Gilroy-ExtraBold.otf';

const overrides = {
    MuiCssBaseline: {
        styleOverrides: `
      @font-face {
        font-family: 'Geometria';
        src: url(${GeometriaLightWOFF2}) format('woff2'),
            url(${GeometriaLightTTF}) format('truetype'),
            url(${GeometriaLightEOT}) format('eot'),
            url(${GeometriaLightWOFF}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Geometria';
        src: url(${GeometriaWOFF2}) format('woff2'),
            url(${GeometriaTTF}) format('truetype'),
            url(${GeometriaEOT}) format('eot'),
            url(${GeometriaWOFF}) format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
    
      @font-face {
        font-family: 'Geometria';
        src: url(${GeometriaBoldWOFF2}) format('woff2'),
            url(${GeometriaBoldTTF}) format('truetype'),
            url(${GeometriaBoldEOT}) format('eot'),
            url(${GeometriaBoldWOFF}) format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Geometria';
        src: url(${GeometriaExtraBoldWOFF2}) format('woff2'),
            url(${GeometriaExtraBoldTTF}) format('truetype'),
            url(${GeometriaExtraBoldEOT}) format('eot'),
            url(${GeometriaExtraBoldWOFF}) format('woff');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }
    
      @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyLightOTF}) format('otf');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyExtraBoldOTF}) format('otf');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }
    `,
    },
};

export default overrides;
