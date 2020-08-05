import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.css';

import React from 'react'
import PropTypes from 'prop-types';
import { Card } from 'primereact/card';

export const GifGridItem = ({ title, url}) => {
    
    const header = ( <img src={ url } alt={ title }/> );

    return (
        <Card
            subTitle={ title }
            style={{width: '360px'}}
            className="ui-card-shadow card animate__animated animate__fadeIn"
            header={ header }
        />
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

Card.propTypes = {
    subTitle: PropTypes.string.isRequired,
    header: PropTypes.object.isRequired
}
