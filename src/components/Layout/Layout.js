import React from 'react';

import Auo from '../../hoc/Auo';
import classes from './Layout.css';

const layout = ( props ) => (
    <Auo>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auo>
);

export default layout;