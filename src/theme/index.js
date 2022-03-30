import { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import GlobalStyles from './global-styles';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import overrides from './overrides';

const ThemeConfig = ({ children }) => {
    const themeOptions = useMemo(
        () => ({
            palette,
            typography,
            breakpoints,
            components: overrides,
        }),
        []
    );

    const theme = createTheme(themeOptions);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export default ThemeConfig;
