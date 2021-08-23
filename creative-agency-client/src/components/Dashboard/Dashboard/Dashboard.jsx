import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard_area w-100 bg-lihth position-fixed h-100">
            <Container fluid>
                <Row>
                    <div className="dashboar-sidebar col-md-2">
                        <Sidebar />
                    </div>
                    <div className="dashboar-content  col-md-10 ">
                        <section className="content_area p-2">
                            <div className="content-heading d-flex justify-content-between py-3">
                                <h3>Order</h3>
                                <h4>Ariful Islam</h4>
                            </div>
                            <div className="content-item bg-secondary">
                                <Order/>
                            </div>
                        </section>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;