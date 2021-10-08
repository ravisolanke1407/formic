import React from 'react'
import { Formik, Form, Field,ErrorMessage,FieldArray,FastField} from 'formik'
import * as Yup from "yup"
import TextError from './TextError'

const initialValues = {  //corresponds to name attribute of form fields
    name: "",
    email: "",
    channel: "",
    comments:"",
    address:"",
    social:{
        fb:"",
        tw:""
    },
    phoneNumbers:["",""],
    phNumbers:[""]

}

const savedData = {  //corresponds to name attribute of form fields
    name: "Ravindra Solanke",
    email: "ravisolanke1407@gmail.com",
    channel: "you Tube ",
    comments:"Test",
    address:"Hingoli",
    social:{
        fb:"",
        tw:""
    },
    phoneNumbers:["",""],
    phNumbers:[""]

}



const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    channel: Yup.string().required("Required"),
    // comments: Yup.string().required("Required"),
    address: Yup.string().required("Required")
})

const validateComments =value =>{
    let error 

    if(!value){
        error = "Required comments"
    }

    return error
}
function SimpleForm() {
    const [formValues, setFormValues] = React.useState(null)

    const onSubmit = (values,onSubmitProps) => {
        console.log("Submitted values", values)
       setTimeout(() => {
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
        setFormValues(null)
       }, 5000);
    }
    return (
        <Formik
            initialValues={formValues || initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {formic =>{
                console.log(formic)
                return ( <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text"  id="name"  name="name"  />
                    <ErrorMessage  name="name" component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email"  name="email" />
                    <ErrorMessage name="email">
                        {errMsg=><div className="error">{errMsg}</div>}
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id="channel" name="channel" />
                    <ErrorMessage name="channel" component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor="comments">Comments</label>
                    <Field as="textarea" type="text" id="comments" name="comments" validate={validateComments}/>
                    <ErrorMessage name="comments" component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor="fb">Facebook</label>
                    <Field  type="text" id="fb" name="social.fb" />
                    <ErrorMessage name="fb" component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor="tw">Twitter</label>
                    <Field type="text" id="tw" name="social.tw" />
                    <ErrorMessage name="tw" component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor="pmno">Primary phone number</label>
                    <Field  type="number" id="pmno" name="phoneNumbers[0]" />
                    <ErrorMessage name="phoneNumbers[0]" component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor="scno">Secondary phone number</label>
                    <Field type="number" id="scno" name="phoneNumbers[1]" />
                    <ErrorMessage name="phoneNumbers[1]" component={TextError}/>
                </div>
                
                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    <FastField  name="address" >
                       {
                           props=>{
                               const {meta,field} =props
                            //    console.log("Fast Field rerender")

                               return(
                                   <div>
                                       <input type="text" id="address" {...field}/>
                                        {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                                    </div>
                               )
                           }
                       }
                    </FastField>
                </div>
              
                <div className="form-control">
                    <label >List of phone numbers</label>
                    <FieldArray name="phNumbers" >
                       {
                           (props)=>{
                            //    console.log(props)
                               const {form,push,remove} = props
                                const {values} = form
                                const {phNumbers} = values

                                return <div>
                                    {
                                        phNumbers.map((phNumber,idx)=>(
                                            <div key={idx}>
                                                <Field name={`phNumbers[${idx}]`}/>
                                               {idx > 0 && <button type="button" onClick={()=>remove(idx)}>Delete</button>}
                                                <button type="button" onClick={()=>push("")}>Add</button>

                                            </div>
                                        ))
                                    }
                                </div>
                               
                           }
                       }
                    </FieldArray>
                </div>
               
               
                <button type="button" onClick={()=>setFormValues(savedData)}>Load data</button>
                <button type="submit" disabled={!formic.isValid || formic.isSubmitting} >Submit</button>
            </Form>
      
                )}}
      </Formik>
    )
}

export default SimpleForm
