import React, {Component} from 'react';
import './controlpanel.css';
import Select from 'react-select';
import DataSource from './datasourcepanel/datasourcepanel';

class ControlPanel extends Component {
    state = {
        selectedLanguage: 'Python',
        algorithmOptions: [],
        selectedModel: null,
        selectedAlgorithm: null
    };

    models = [
        {value: 'regression', label: 'Regression'},
        {value: 'classification', label: 'Classification'},
        {value: 'clustering', label: 'Clustering'}
    ];

    algorithms = {
        'regression': [
            {value: 'simple_linear_regression', label: 'Simple Linear Regression'},
            {value: 'multiple_linear_regression', label: 'Multiple Linear Regression'},
            {value: 'polynomial_regression', label: 'Polynomial Regression'},
            {value: 'support_vector_regression', label: 'Support Vector Regression (SVR)'},
            {value: 'decision_tree_regression', label: 'Decision Tree Regression'},
            {value: 'random_forest_regression', label: 'Random Forest Regression'}
        ]
    };

    onLanguageClick = (event) => {
        if (event.target.id.indexOf('python') !== -1) {
            this.setState({'selectedLanguage': 'Python'});
        } else {
            this.setState({'selectedLanguage': 'R'});
        }
    };

    handleModelChange = (selectedOption) => {
        //this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        if (this.algorithms[selectedOption.value]) {
            console.log(this.algorithms[selectedOption.value]);
            this.setState({
                'algorithmOptions': this.algorithms[selectedOption.value],
                'selectedModel': selectedOption.value
            });
        } else {
            this.setState({'algorithmOptions': []});
        }
    };

    handleAlgorithmChange = (selectedOption) => {
        //this.setState({ selectedOption });
        this.setState({'selectedAlgorithm': selectedOption.value});
    };

    render() {
        console.log('render ->' + this.state.selectedModel);
        return (
            <div className="controlpanel">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            Language
                            <div className="container">
                                <div className="row">
                                    <div id="control_panel_python"
                                         className={"col-sm-6 borderbox " + (this.state.selectedLanguage === 'Python' ? 'selected' : '')}
                                         onClick={this.onLanguageClick}>
                                        <span>Python</span>
                                    </div>
                                    <div id="control_panel_r"
                                         className={"col-sm-6 borderbox " + (this.state.selectedLanguage === 'R' ? 'selected' : '')}
                                         onClick={this.onLanguageClick}>
                                        <span>R</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            Model
                            <Select
                                //value={this.state.selectedModel}
                                placeholder='Choose Model...'
                                onChange={this.handleModelChange}
                                options={this.models}
                            />
                        </div>
                        <div className="col-md-4">
                            Algorithm
                            {this.state.algorithmOptions.length > 0 ?
                                <Select
                                    //value={this.state.selectedAlgorithm}
                                    placeholder='Choose Algorithm...'
                                    onChange={this.handleAlgorithmChange}
                                    options={this.state.algorithmOptions}/>
                                :
                                <Select
                                    value={null}
                                    placeholder='Choose Model First...'
                                    isDisabled={true}
                                />
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <DataSource algorithm={this.state.selectedAlgorithm} model={this.state.selectedModel}/>
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