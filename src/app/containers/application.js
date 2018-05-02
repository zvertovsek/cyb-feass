import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Select } from 'antd';
import { Model, validateField } from '../models/applicant';
import { updateObject } from '../utils';

import ApplicantForm from '../components/form';
import CompletedNotice from '../components/completed'

class Application extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            formData: Model,
            formIsValid: false
        };
    }

    componentDidMount(){
        this.props.onFetchCountries();
    }

    render(){
        const countries = this.props._metadata.countries.map( (country, index) => {
            return <Select.Option key={index} value={country.name}>{country.name}</Select.Option>;
        } );

        return this.props.applicationSent ?
            <CompletedNotice applicantName={this.props.applicationData.name} /> :
            <ApplicantForm
                formData={this.state.formData}
                formIsValid={this.state.formIsValid}
                countries={countries}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange} />;
    
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const formData = this.state.formData;
        const userData = {}
        for (let key in formData) {
            userData[key] = formData[key].value;
        }
        userData.dateCreated = new Date().toString();
        this.props.onSubmitApplication(userData);
    }

    handleChange = (_value, fieldID) => {
        const _field = this.state.formData[fieldID];

        const updatedField = updateObject(_field, {
            value: _value,
            isValid: validateField(_value, _field.validation),
            touched: true 
        });

        const updatedForm = updateObject(this.state.formData, {
            [fieldID]: updatedField
        });

        let formIsValid = true;
        for (let field in updatedForm) {
            formIsValid = updatedForm[field].isValid && formIsValid;
        }

        this.setState({
            formData: updatedForm,
            formIsValid: formIsValid
        });
    }
}

const mapStateToPRops = state => {
    return {
        _metadata: state._metadata,
        applicationData: state.application.applicationData,
        applicationSent: state.application.applicationSent
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCountries: () => dispatch(actions.fetchCountries()),
        onSubmitApplication: (userData) => dispatch(actions.submitApplication(userData))
    };
};

export default connect(mapStateToPRops, mapDispatchToProps)(Application);