import React, { useSyncExternalStore } from "react";

import { CNavItem, CNavGroup, CNavTitle, CNavLink, } from "@coreui/react";


const _nav = [

    {
        component: CNavGroup,
        name: 'Customers',
        to: '/businessorgans/addbusinessorgan',
        items: [
            {
                component: CNavLink,
                name: 'Male Customers',
                to: '/customers/male',

            }
        ]
    },
    

]

export default _nav;


