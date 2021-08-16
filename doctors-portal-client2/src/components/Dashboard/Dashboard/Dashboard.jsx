import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="container-fluid">
            <div className="row">
                <Sidebar/>
                <div className="col-md-10">
                    <h2>Dashboard</h2>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;