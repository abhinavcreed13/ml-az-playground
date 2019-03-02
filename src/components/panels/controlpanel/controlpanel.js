import React, {Component} from 'react';
import './controlpanel.css';
import Select from 'react-select';

class ControlPanel extends Component {
    state = {
        selectedLanguage: 'Python'
    }

    models = [
        {value: 'regression', label: 'Regression'},
        {value: 'multiple_linear_regression', label: 'Multiple Linear Regression'},
        {value: 'polynomial_regression', label: 'Polynomial Regression'}
    ];

    onLanguageClick = (event) => {
        if (event.target.id.indexOf('python') != -1) {
            this.setState({'selectedLanguage': 'Python'});
        } else {
            this.setState({'selectedLanguage': 'R'});
        }
    }

    handleModelChange = (selectedOption) => {
        //this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        return (
            <div className="controlpanel">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            Language
                            <div className="container">
                                <div className="row">
                                    <div id="control_panel_python"
                                         className={"col-sm-6 borderbox " + (this.state.selectedLanguage == 'Python' ? 'selected' : '')}
                                         onClick={this.onLanguageClick}>
                                        <span>Python</span>
                                    </div>
                                    <div id="control_panel_r"
                                         className={"col-sm-6 borderbox " + (this.state.selectedLanguage == 'R' ? 'selected' : '')}
                                         onClick={this.onLanguageClick}>
                                        <span>R</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            Model
                            <Select
                                value={null}
                                placeholder='Choose Model...'
                                onChange={this.handleModelChange}
                                options={this.models}
                            />
                        </div>
                        <div className="col-md-4">
                            Algorithm
                            <Select
                                value={null}
                                placeholder='Choose Algorithm...'
                                onChange={this.handleModelChange}
                                isDisabled='true'
                                options={this.models}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{marginTop: 10, backgroundColor: '#efefef', height: 520}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ControlPanel;