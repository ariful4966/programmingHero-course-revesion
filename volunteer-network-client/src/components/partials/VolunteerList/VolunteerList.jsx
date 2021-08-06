import axios from "axios";
import { Table } from "react-bootstrap";
import deleteIcon from "../../../images/trash-2 9.png"

const VolunteerList = ({ registations }) => {


    const tableHeading = ["Name", "Email ID", "Registation Date", "Volunteer Task", "Action"];

    const handleVolunteerDelete = (id) => {
        axios.delete(`https://volunteer-network-server82.herokuapp.com/events/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {

                    alert('Delete Item is Successfully')

                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className="volunteer_sec_content">
            <div className="sec_header">
                <h1>Volunteer Registar List</h1>
            </div>
            <article className="sec_content">
                <div className="event_form">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                {tableHeading.map((tHead, i) => <th key={i}>{tHead}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                registations.length > 0 && registations.map(registation =>
                                    <tr key={registation._id}>
                                        <td>{registation.name}</td>
                                        <td>{registation.email}</td>
                                        <td>{registation.date}</td>
                                        <td>{registation.organization}</td>
                                        <td><img src={deleteIcon} alt="" onClick={() => handleVolunteerDelete(`${registation._id}`)} /></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </Table>
                </div>
            </article>
        </div>
    );
};



export default VolunteerList;