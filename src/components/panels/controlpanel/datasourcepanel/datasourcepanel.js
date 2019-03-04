import React, {Component} from 'react';
import axios from 'axios';
import './datasourcepanel.css';
import FileUploader from 'react-x-file-uploader';

class DataSource extends Component {

    onUploadHandler = (data) => {
        console.log("Parent->" + data);
    }

    render() {
        const algorithm = this.props.algorithm;
        let datasourcecontrol = null;
        switch (algorithm) {
            case 'simple_linear_regression':
                datasourcecontrol = (
                    <div className="datasourcecontrol">
                        <FileUploader type='CSV' onUpload={this.onUploadHandler}/>
                    </div>
                )
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