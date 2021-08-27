import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Form, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const tblHeading = [
    'Name', 'Email ID', 'Service', 'Project', 'Status'
];

const ServiceList = () => {
    const [getOrder, setGetOrder] = useState([]);
    const user = useSelector(state => state.user)

    useEffect(() => {
        axios.get('https://creative-agency-server82.herokuapp.com/order?email=' + user.email)
            .then(res => {
                setGetOrder(res.data)
            })
    }, [ user, setGetOrder])
    const statusChange = (e, id) => {
        axios.put('https://creative-agency-server82.herokuapp.com/order', {
            id: id,
            status: e.target.value
        })
            .then(res => {
               if(res.data){
                   alert('Status Update Successfully')
               }
            })
    }
    return (
        <div className="serviceList_area p-5 ">
            <div className="bg-light service-list-table p-5">
                <Table striped bordered hover className="border-0 " >
                    <thead className="border-0 bg-secondary text-white rounded-3">
                        <tr className="border-0 rounded-3">
                            {tblHeading.map((item, idx) => <th className="border-0" key={idx}>{item}</th>)}
                        </tr>
                    </thead>
                    <tbody className="border-0">
                        {
                            getOrder.map((data, idx) =>

                                <tr className="border-0" key={idx}>
                                    <td className="border-0">{data.name}</td>
                                    <td className="border-0">{data.email}</td>
                                    <td className="border-0">{data.design}</td>
                                    <td className="border-0">{data.description.slice(0, 30)}</td>
                                    <td className="border-0">
                                        <Form.Select aria-label="Floating label select example" className={` border-0 bg-transparent ${(data.status === 'Pending' && 'text-danger') || (data.status === 'Ongoing' && 'text-warning') || (data.status ==='Done' && 'text-success')}`} defaultValue={data.status} onChange={(e) => statusChange(e, data._id)}>
                                            <option value="Pending">Pending</option>
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