import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.css';

import React from 'react'
import { Card } from 'primereact/card';

export const GifGridItem = ({ id, title, url}) => {
    
    const header = (
        <img src={ url } alt={ title }/>
    );

    return (
        <Card
            title={ title }
            style={{width: '360px'}}
            className="ui-card-shadow card animate__animated animate__fadeIn"
            header={header}
        />
    )
}
