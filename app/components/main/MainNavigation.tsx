// https://mui.com/material-ui/react-tabs/
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Tabs, Tab, Box } from '@mui/material';
import '../common.styles.scss';

enum MainRoutes {
    HOME = '/',
    TAB1 = '/tab1',
    TAB2 = '/tab2',
}

export default function MainNavigation() {
    const pathname = usePathname();

    // Determine current tab based on pathname
    const getCurrentTab = () => {
        if (pathname === MainRoutes.TAB1) return MainRoutes.TAB1;
        if (pathname === MainRoutes.TAB2) return MainRoutes.TAB2;
        return MainRoutes.HOME;
    };

    return (
        <Box className="bottom-border">
            <Tabs value={getCurrentTab()} aria-label="navigation tabs">
                <Tab label="Home" value={MainRoutes.HOME} component={Link} href={MainRoutes.HOME} />
                <Tab label="Tab1" value={MainRoutes.TAB1} component={Link} href={MainRoutes.TAB1} />
                <Tab label="Tab2" value={MainRoutes.TAB2} component={Link} href={MainRoutes.TAB2} />
            </Tabs>
        </Box>
    );
}
