import React from 'react'
import { Formik, Form } from "formik"
import * as Yup from "yup";
import FormikController from './FormikController';

function FormicContainer() {
    const dropdownOptions=[
        {key:"Select Option",value:""},
        {key:"Option 1",value:"option1"},
        {key:"Option 2",value:"option2"},
        {key:"Option 3",value:"option3"},

    ]
    const initialValues = {
        email: "",
        description: "",
        selectOption:""
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Format!").required("Required"),
        description:Yup.string().required("Required"),
        selectOption:Yup.string().required("Required"),
    })
    const onSubmit = values => console.log(values)
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => <Form>
                    <FormikController
                        label="Email"
                        type="email"
                        name="email"
                        control="input"
                    />
                    
                    <FormikController
                        as="textarea"
                        label="Description"
                        name="description"
                        control="textarea"
                    />

                    <FormikController
                        label="Select a Option"
                        name="selectOption"
                        control="select"
                        options={dropdownOptions}
                    />
                    <button type="submit">Submit</button>
                </Form>
            }
        </Formik>
    )
}

export default FormicContainer
