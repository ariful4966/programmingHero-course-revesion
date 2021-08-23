import React from 'react';
import { FloatingLabel, Form, Table } from 'react-bootstrap';
const tblHeading = [
    'Name', 'Email ID', 'Service', 'Project', 'Status'
];
const tblData = [
    {
        name: 'Sufi Ahmed Hamim',
        email: 'sufi@gmail.com',
        service: 'Mobile App',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        status: 'Pending'
    }, {
        name: 'Sufi Ahmed Hamim',
        email: 'sufi@gmail.com',
        service: 'Mobile App',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        status: 'Done'
    }, {
        name: 'Sufi Ahmed Hamim',
        email: 'sufi@gmail.com',
        service: 'Mobile App',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        status: 'Ongoin'
    }, {
        name: 'Sufi Ahmed Hamim',
        email: 'sufi@gmail.com',
        service: 'Mobile App',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        status: 'Pending'
    },
]

const ServiceList = () => {
    return (
        <div className="serviceList_area p-5 ">
            <div className="bg-light service-list-table p-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {tblHeading.map((item, idx) => <th key={idx}>{item}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tblData.map((data, idx) =>

                                <tr key={idx}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.service}</td>
                                    <td>{data.details}</td>
                                    <td>
                                        <Form.Select aria-label="Floating label select example">
                                            <option value="Pending">Panding</option>
                                            <option value="Ongoing">Ongoing</option>
                                            <option value="Done">Done</option>
                                        </Form.Select>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ServiceList;