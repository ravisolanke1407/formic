import React from 'react'
import { useFormik } from 'formik'

const initialValues = {  //corresponds to name attribute of form fields
    name: "Ravi Solanke",
    email: "",
    channel: ""
}
const onSubmit=values=>{
    console.log("Submitted values",values)
}

const validate = values=>{
    let errors={}

    if(!values.name){
        errors.name="Required"
    }

    
    if(!values.email){
        errors.email="Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email="Invalid Email Address"
    }
    
    if(!values.channel){
        errors.channel="Required"
    }
    return errors
}

function SimpleForm() {
    const formic = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    // console.log("Form Values", formic.values)
    return (
        <div>
            <form onSubmit={formic.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formic.values.name}
                    onChange={formic.handleChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formic.values.email}
                    onChange={formic.handleChange}
                />

                <label htmlFor="channel">Channel</label>
                <input
                    type="text"
                    id="channel"
                    name="channel"
                    value={formic.values.channel}
                    onChange={formic.handleChange}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm
