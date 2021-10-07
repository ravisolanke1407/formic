import React from 'react'
import { useFormik } from 'formik'

function SimpleForm() {
    const formic = useFormik({
        initialValues: {  //corresponds to name attribute of form fields
            name: "Ravi Solanke",
            email: "",
            channel: ""
        }
    })

    console.log("Form Values", formic.values)
    return (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formic.name}
                    onChange={formic.handleChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formic.email}
                    onChange={formic.handleChange}
                />

                <label htmlFor="channel">Channel</label>
                <input
                    type="text"
                    id="channel"
                    name="channel"
                    value={formic.channel}
                    onChange={formic.handleChange}
                />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm
