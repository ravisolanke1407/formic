import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"

const initialValues = {  //corresponds to name attribute of form fields
    name: "",
    email: "",
    channel: ""
}
const onSubmit = values => {
    console.log("Submitted values", values)
}


const validationSchema =Yup.object({
    name:Yup.string().required("Required"),
    email:Yup.string().email("Invalid Email Format").required("Required"),
    channel:Yup.string().required("Required"),

})
function SimpleForm() {
    const formic = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    // console.log("Visited Fields", formic.touched)
    return (
        <div>
            <form onSubmit={formic.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        {...formic.getFieldProps("name")}
                    />
                    {formic.touched.name && formic.errors.name && <div className="error">{formic.errors.name}</div>}
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        {...formic.getFieldProps("email")}


                    />
                    {formic.touched.email && formic.errors.email && <div className="error">{formic.errors.email}</div>}

                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input
                        type="text"
                        id="channel"
                        name="channel"
                        {...formic.getFieldProps("channel")}


                    />
                    {formic.touched.channel && formic.errors.channel && <div className="error">{formic.errors.channel}</div>}

                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm
