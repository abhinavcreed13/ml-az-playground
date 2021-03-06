import React from 'react';
import ControlPanel from './controlpanel/controlpanel';
import OutputPanel from './outputpanel/outputpanel';

const Panels = () => {
    return (
        <div className="panels" style={{
            overflowY: 'auto',
            'height': 600
        }}>
            <ControlPanel></ControlPanel>
            <OutputPanel></OutputPanel>
        </div>
    )
}

export default Panels;