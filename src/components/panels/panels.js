import React from 'react';
import ControlPanel from './controlpanel/controlpanel';
import OutputPanel from './outputpanel/outputpanel';

const Panels = () => {
    return (
        <div className="panels">
            <ControlPanel></ControlPanel>
            <OutputPanel></OutputPanel>
        </div>
    )
}

export default Panels;