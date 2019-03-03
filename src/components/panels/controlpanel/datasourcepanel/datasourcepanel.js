import React, {Component} from 'react';
import axios from 'axios';
import FileUploadCSV from './fileupload/fileuploadcsv';
import './datasourcepanel.css';

class DataSource extends Component {

    render() {
        const algorithm = this.props.algorithm;
        let datasourcecontrol = null;
        switch (algorithm) {
            case 'simple_linear_regression':
                datasourcecontrol = (
                    <div className="datasourcecontrol">
                        <FileUploadCSV />
                    </div>
                );
                break;
        }
        return (
            <div className="datasource">
                {datasourcecontrol}
            </div>
        )
    }
}

export default DataSource;