import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import SECTIONS_DATA from './sections.data.js';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: SECTIONS_DATA
        };
    }

    render() {
        const { sections } = this.state;
        console.log('sections', sections);
        return (
            <div className="directory-menu">
                {sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;
