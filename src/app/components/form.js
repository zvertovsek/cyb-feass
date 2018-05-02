import React from 'react';
import { Form, Input, Radio, Select, InputNumber, Button } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const itemLayoutProps = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    }
};

const applicantForm = (props) => (
    <Form onSubmit={props.onSubmit}>
        <h1>Some Usefull Service</h1>
        
        <FormItem 
            {...itemLayoutProps}
            validateStatus={!props.formData.name.isValid && props.formData.name.touched ? "error" : "success"} 
            label="Name">
            <Input 
                onChange={(event) => props.onChange(event.target.value, "name")} 
                value={props.formData.name.value} />
        </FormItem>

        <FormItem 
            {...itemLayoutProps} 
            label="Sex">
            <RadioGroup 
                onChange={(event) => props.onChange(event.target.value, "sex")}
                value={props.formData.sex.value}>
                <Radio value='M'>Male</Radio>
                <Radio value='F'>Female</Radio>
            </RadioGroup>
        </FormItem>
        
        <FormItem 
            {...itemLayoutProps} 
            validateStatus={!props.formData.age.isValid && props.formData.age.touched ? "error" : "success"} 
            label="Age">
            <Input
                style={{ width: "100px" }}
                onChange={(event) => props.onChange(event.target.value, "age")} 
                value={props.formData.age.value} />
        </FormItem>
        
        <FormItem {...itemLayoutProps} label="Country">
            <Select 
                onChange={(value) => props.onChange(value, "country")}
                value={props.formData.country.value}>
                {props.countries}
            </Select>
        </FormItem>
        
        <FormItem {...itemLayoutProps}>
            <Button disabled={!props.formIsValid} type="primary" htmlType="submit">Submit</Button>
        </FormItem>
    </Form>
);

export default applicantForm;
