import { Fragment } from 'react'

const AppointmentTable = ({ data, heading, dateAppointment, patientAll }) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    {
                        heading.map((hd, idx) => <th key={idx} className="text-secondary">{hd}</th>)
                    }
                </tr>
            </thead>
            <tbody>

                {dateAppointment &&
                    data.map((item) => <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                    </tr>)
                }
                {
                    patientAll &&
                    data.map((item, idx) => <tr key={item._id}>
                        <td>{idx + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.age}</td>
                        <td>{item.weight}KG</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                    </tr>)
                }

            </tbody>
        </table>
    );
};

export default AppointmentTable;