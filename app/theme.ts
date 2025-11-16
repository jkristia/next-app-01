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
});

export default theme;
