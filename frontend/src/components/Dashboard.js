import React, { useState, useEffect } from "react";
import useDocumentTitle from "../useDocumentTitle";
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

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilTrash } from '@coreui/icons'
// const MoreInfo = [
//     {
//         title: 'Strategic Risk',
//         Control: 'Risk Controls',
//         Riskrating: 10
//     },
//     {
//         title: 'Strategic Risk',
//         Control: 'Risk Controls',
//         Riskrating: 10
//     },
//     {
//         title: 'Strategic Risk',
//         Control: 'Risk Controls',
//         Riskrating: 10
//     },
//     {
//         title: 'Strategic Risk',
//         Control: 'Risk Controls',
//         Riskrating: 10
//     },

// ]


const tableContents = [
    {
        name: 'Strategic Risk',
        Event: ' The new product is an utter failure and a new competitor enters the market and undercuts prices by 20%. ',
        GrossLikelihood: 0.6,
        GrossImpact: 0.8,
        Date: '20-06-2020'
    },
    {
        name: 'Strategic Risk',
        Event: ' The new product is an utter failure and a new competitor enters the market and undercuts prices by 20%. ',
        GrossLikelihood: 0.6,
        GrossImpact: 0.8,
        Date: '20-06-2020'
    },
    {
        name: 'Strategic Risk',
        Event: ' The new product is an utter failure and a new competitor enters the market and undercuts prices by 20%. ',
        GrossLikelihood: 0.6,
        GrossImpact: 0.8,
        Date: '20-06-2020'
    },
    {
        name: 'Strategic Risk',
        Event: ' The new product is an utter failure and a new competitor enters the market and undercuts prices by 20%. ',
        GrossLikelihood: 0.6,
        GrossImpact: 0.8,
        Date: '20-06-2020'
    },
]


const Dashboard = (text) => {

    const [visible, setVisible] = useState(false);
    useDocumentTitle('Dashboard')

    return (
        <div>
            <CRow>
                <CCol xs={12} sm={6} lg={3}>
                    <CWidgetStatsB
                        className="mb-4"
                        color="danger"
                        inverse
                        value='60%'
                        title="Ratings"
                        progress={{ value: 60 }}
                        text='Risk is too high'
                    />
                </CCol>
                <CCol xs={12} sm={6} lg={3}>


                    <CWidgetStatsB
                        className="mb-4"
                        color="info"
                        inverse
                        value='60%'
                        title="Ratings"
                        progress={{ value: 60 }}
                        text='Risk is too high'
                    />
                </CCol>
            </CRow>

            <CTable align="middle" className="mb-0 " striped hover responsive caption='top'>
                <CTableCaption>Risks</CTableCaption>
                <CTableHead color="light">

                    <CTableRow>
                        <CTableHeaderCell className='text-center'>#</CTableHeaderCell>
                        <CTableHeaderCell className='text-center'>Name</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Event</CTableHeaderCell>
                        <CTableHeaderCell className='text-center'>Gross Likelihood</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Gross Impact</CTableHeaderCell>
                        <CTableHeaderCell className='text-center'>Date</CTableHeaderCell>
                        <CTableHeaderCell className='text-center'></CTableHeaderCell>
                    </CTableRow>
                </CTableHead>

                <CTableBody>
                    {tableContents.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>

                            <CTableDataCell>
                                <div>{index + 1}</div>
                            </CTableDataCell>
                            <CTableDataCell>
                                <div><a className="text-decoration-none text-dark" href='#' onClick={() => setVisible(!visible)}>{item.name}</a></div>
                                <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>

                                    <CModalHeader>

                                        <CModalTitle>

                                        </CModalTitle>
                                        Details
                                    </CModalHeader>
                                    <CModalBody>



                                    </CModalBody>
                                    <CModalFooter>
                                        <CButton color="secondary" onClick={() => setVisible(false)}>
                                            Close
                                        </CButton>
                                        <CButton color="primary">Save changes</CButton>
                                    </CModalFooter>
                                </CModal>
                            </CTableDataCell>
                            <CTableDataCell>
                                <div>{item.Event}</div>
                                <span></span>
                            </CTableDataCell>
                            <CTableDataCell>
                                <div>{item.GrossLikelihood}</div>
                            </CTableDataCell>
                            <CTableDataCell>
                                <div>{item.GrossImpact}</div>
                            </CTableDataCell>
                            <CTableDataCell>
                                <div>{item.Date}</div>

                            </CTableDataCell>
                            <CTableDataCell>
                                <CIcon icon={cilTrash} size='lg'></CIcon>
                            </CTableDataCell>

                        </CTableRow>

                    ))}
                </CTableBody>

            </CTable>
        </div>


    )
};



export default Dashboard;