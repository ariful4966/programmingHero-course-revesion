import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Order from '../Order/Order';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = ({ user }) => {
    const { path, url } = useRouteMatch();
    const [sidebar, setSidebar] = useState('Order')
    return (
        <div className="dashboard_area w-100 bg-lihth  h-100">
            <Container fluid>
                <Row>
                    <div className="dashboar-sidebar col-md-2">
                        <Sidebar setSidebar={setSidebar} sidebar={sidebar} url={url} />
                    </div>
                    <div className="dashboar-content offset-md-2 col-md-10 ">
                        <section className="content_area p-2">
                            <div className="content-heading d-flex justify-content-between py-3">
                                <h3>{sidebar}</h3>
                                <h4>{user.name}</h4>
                            </div>
                            <div className="content-item bg-secondary" >
                                <Switch>
                                    <Route path={`${path}/order/:orderId`}>
                                        <Order />
                                    </Route>
                                    <Route exact path={`${path}`}>
                                        <OrderList />
                                    </Route>
                                    <Route path={`${path}/review`}>
                                        <Review />
                                    </Route>
                                    <Route path={`${path}/serviceList`}>
                                        <ServiceList />
                                    </Route>
                                    <Route path={`${path}/addService`}>
                                        <AddService />
                                    </Route>
                                    <Route path={`${path}/makeAdmin`}>
                                        <MakeAdmin />
                                    </Route>
                                </Switch>

                            </div>
                        </section>
                    </div>
                </Row>
            </Container>
        </div>
    );
};
const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(Dashboard);