import React from 'react'
import { useFormik } from 'formik'

const initialValues = {  //corresponds to name attribute of form fields
    name: "",
    email: "",
    channel: ""
}
const onSubmit = values => {
    console.log("Submitted values", values)
}

const validate = values => {
    let errors = {}

    if (!values.name) {
        errors.name = "Required"
    }


    if (!values.email) {
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid Email Address"
    }

    if (!values.channel) {
        errors.channel = "Required"
    }
    return errors
}

function SimpleForm() {
    const formic = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log("Visited Fields", formic.touched)
    return (
        <div>
            <form onSubmit={formic.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formic.values.name}
                        onChange={formic.handleChange}
                        onBlur={formic.handleBlur}
                    />
                    {formic.touched.name && formic.errors.name && <div className="error">{formic.errors.name}</div>}
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formic.values.email}
                        onChange={formic.handleChange}
                        onBlur={formic.handleBlur}

                    />
                    {formic.touched.email && formic.errors.email && <div className="error">{formic.errors.email}</div>}

                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input
                        type="text"
                        id="channel"
                        name="channel"
                        value={formic.values.channel}
                        onChange={formic.handleChange}
                        onBlur={formic.handleBlur}

                    />
                    {formic.touched.channel && formic.errors.channel && <div className="error">{formic.errors.channel}</div>}

                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm
