// https://mui.com/material-ui/integrations/nextjs/#font-optimization
'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
    },
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    cssVariables: true, // Enable CSS variables
    components: {
        // https://mui.com/material-ui/api/tab/#theme-default-props
        // disable Uppercase transformation of Tab labels
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});

export default theme;
