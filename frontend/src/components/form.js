import React, { useState } from "react";
import apiClient from '../http-common'
import axios from 'axios';
import useDocumentTitle from '../useDocumentTitle'
import {
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CButton,
    CFormTextarea,

} from '@coreui/react'

const AddControls = () => {
    useDocumentTitle('Add Control')
    const [control, setControl] = useState({ description: "", cost: "" });
    const { description, cost } = control; // destructing

    const handleChange = (e) => {
        //  let obj = {...user}

        //  let key = e.target.name;
        //  obj[key] = e.target.value;
        //  setUser(obj)
        setControl({ ...control, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://127.0.0.1:8000/controls/", control)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };
    return (
        <CForm className="row g-3" onSubmit={handleSubmit}>
            <CCol md={6}>
                <CFormLabel htmlFor="inputName">Description</CFormLabel>
                <CFormInput type="name" id="inputName" name="description" value={description} onChange={handleChange} />
            </CCol>
            <CCol md={4}>
                <CFormLabel htmlFor="inputRole">Cost</CFormLabel>
                <CFormInput type='text' name="cost" value={cost} onChange={handleChange}></CFormInput>
            </CCol>
            <CCol xs={12}>
                <CButton type="submit" >Add Control</CButton>
            </CCol>
        </CForm>
    )



}



export default AddControls;
