import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './AppointmentTable.css'


const AppointmentTable = ({ data, heading, dateAppointment, patientAll, dashboard }) => {


    return (
        <table className={`table table-borderless ${dashboard ? '': 'shadow'} p-5`}>
            
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
                {
                    dashboard &&
                    data.map((item, idx) =>
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{new Date(`${item.date}`).getDate()}-{new Date(`${item.date}`).getMonth()}-{new Date(`${item.date}`).getFullYear()}</td>
                            <td>{new Date(`${item.date}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td className="prescrip"><button className="btn">View</button></td>
                            <td className="action"><button className="btn action-pending" >Pending</button><button className=" action-icon btn"><FontAwesomeIcon icon={faPenAlt}/></button></td>
                        </tr>)
                }

            </tbody>
        </table>
    );
};

export default AppointmentTable;