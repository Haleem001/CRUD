import React, { useState, useEffect } from "react";
import useDocumentTitle from "../useDocumentTitle";
import axios from 'axios'
import apiClient from '../http-common'
import {
    CAvatar,
    CButton,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CTableCaption,
    CWidgetStatsB,
    CModal,
    CModalBody,
    CModalTitle, CModalHeader, CModalFooter,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CContainer,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilTrash } from '@coreui/icons'

const MaleCustomers = () => {
    const [customer , setCustomer] = useState({name : "" , height : "" , shoulder : "" ,chest : "", tummy : "", waist :"",sleeve_length : "",sleeve_round : "",links : "",neck : "",length : "",lap : "", trouser_length : "", boot : "",knee :""})
    const{name , height , shoulder ,chest, tummy, waist,sleeve_length,sleeve_round,links,neck,length,lap, trouser_length, boot,knee} = customer
    const [customers , getCustomers] = useState([])
    const [visible, setVisible] = useState(false);
    const [searchedVal, setSearchedVal] = useState("");
    
    // const [deleteCustomer, setDeleteCustomer] = useState([])
    useDocumentTitle('Male Customers')

    const getAllCustomers = async () => {
        const { data } = await apiClient.get('/api/malecustomers/');
        getCustomers(data);
    
      };
    useEffect (() =>{
            getAllCustomers();
        }, [])

    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://127.0.0.1:8000/api/malecustomers/", customer)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
           
    };

    const handleDelete = async (id) => {
        try {
          const item = await apiClient.delete(`/api/malecustomers/${id}`)
          console.log('Item successfully deleted.')
          window.location.reload(false);
        } catch (error) {
          alert(error)
        }
      }
    return (
        <div>

            <CContainer className="overflow-hidden">
      <CRow xs={{ gutterX: 5 }}>
                 <CCol md={4}><CFormInput onChange={(e) => setSearchedVal(e.target.value)} placeholder="Search Customers by Name" /></CCol>
        <CCol  md={{ span: 4, offset: 4}} >
             <CButton onClick={() => setVisible(!visible)} >Add Customer</CButton>
        </CCol>
       
            </CRow>

            </CContainer>
      
           
        <CModal alignment="center"  visible={visible} onClose={() => setVisible(false)}>

<CModalHeader>

    <CModalTitle>
  Add Customer
    </CModalTitle>
 
</CModalHeader>
<CModalBody>
<CForm className="row g-3" onSubmit={handleSubmit} >
<CCol md={12}>
<CFormLabel htmlFor="inputName">Name</CFormLabel>
<CFormInput type="name" id="inputName" name="name" value={name} onChange={handleChange}   />
</CCol>
<CCol md={3}>
<CFormLabel htmlFor="inputName">Height</CFormLabel>
<CFormInput type="text" id="inputName" name="height"  value={height} onChange={handleChange}  />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Shoulder</CFormLabel>
<CFormInput type="text" id="inputName" name="shoulder" value={shoulder} onChange={handleChange}   />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Chest</CFormLabel>
<CFormInput type="text" id="inputName" name="chest" value={chest}  onChange={handleChange}   />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Tummy</CFormLabel>
<CFormInput type="text" id="inputName" name="tummy"  value={tummy} onChange={handleChange}  />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Waist</CFormLabel>
<CFormInput type="text" id="inputName" name="waist"  value={waist }onChange={handleChange} />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Sleeve Length</CFormLabel>
<CFormInput type="text" id="inputName" name="sleeve_length" value={sleeve_length} onChange={handleChange}   />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Sleeve Round</CFormLabel>
<CFormInput type="text" id="inputName" name="sleeve_round" value={sleeve_round} onChange={handleChange}    />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Links</CFormLabel>
<CFormInput type="text" id="inputName" name="links"  value={links} onChange={handleChange} />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Neck</CFormLabel>
<CFormInput type="text" id="inputName" name="neck"  value={neck} onChange={handleChange}  />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Length</CFormLabel>
<CFormInput type="text" id="inputName" name="length" value={length} onChange={handleChange}   />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Lap</CFormLabel>
<CFormInput type="text" id="inputName" name="lap" value={lap} onChange={handleChange}   />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Trouser Length</CFormLabel>
<CFormInput type="text" id="inputName" name="trouser_length" value={trouser_length}   onChange={handleChange} />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Boot</CFormLabel>
<CFormInput type="text" id="inputName" name="boot" value={boot}   onChange={handleChange} />
</CCol>

<CCol md={3}>
<CFormLabel htmlFor="inputName">Knee</CFormLabel>
<CFormInput type="text" id="inputName" name="knee"  value={knee} onChange={handleChange}  />
</CCol>
<CButton color="primary" type="submit" >Save changes</CButton>
</CForm>


</CModalBody>
<CModalFooter>
    <CButton color="secondary" onClick={() => setVisible(false)}>
        Close
    </CButton>

</CModalFooter>
</CModal>

            <CTable align="middle" className="mb-0 " color="dark" responsive small >
                
                <CTableHead color="light">

                    <CTableRow>
                        <CTableHeaderCell className='text-center'>#</CTableHeaderCell>
                        <CTableHeaderCell className='text-center'>Name</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Height</CTableHeaderCell>
                        <CTableHeaderCell className='text-center'>Shoulder</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Chest</CTableHeaderCell>
                        <CTableHeaderCell className='text-center'>Tummy</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Waist</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Sleeve Length</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Sleeve Round</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Links</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Neck</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Length</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Trouser Length</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Boot</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Knee</CTableHeaderCell>
                       

                        <CTableHeaderCell className='text-center'></CTableHeaderCell>
                        <CTableHeaderCell className='text-center'></CTableHeaderCell>
                    </CTableRow>
                </CTableHead>

                <CTableBody>
                    {customers
                    .filter((row) =>
                    // note that I've incorporated the searchedVal length check here
                    !searchedVal.length || row.name
                      .toString()
                      .toLowerCase()
                      .includes(searchedVal.toString().toLowerCase()) )
                    .map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>

                            <CTableDataCell>
                                <div>{index + 1}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center" >
                                <div><a>{item.name}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center">
                                <div><a >{item.height}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center">
                                <div><a >{item.shoulder}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center" >
                                <div><a >{item.chest}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center">
                                <div><a  >{item.tummy}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center">
                                <div><a  >{item.waist}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center">
                                <div><a  >{item.sleeve_length}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center">
                                <div><a  >{item.links}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center">
                                <div><a  >{item.neck}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-darktext-center">
                                <div><a  >{item.length}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center" >
                                <div><a >{item.lap}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center" >
                                <div><a >{item.trouser_length}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center" >
                                <div><a >{item.boot}</a></div>
                            </CTableDataCell>
                            <CTableDataCell className="text-decoration-none text-dark text-center">
                                <div><a  >{item.knee}</a></div>
                            </CTableDataCell>
                            <CTableDataCell>
                              <a onClick={()=> handleDelete (item.id)}  ><CIcon icon={cilTrash} ></CIcon></a>  
                                
                            </CTableDataCell>
                            <CTableDataCell>
                            <CButton>Print</CButton>
                            </CTableDataCell>

                        </CTableRow>

                    ))}
                </CTableBody>

            </CTable>
        </div>


    )
};



export default MaleCustomers;