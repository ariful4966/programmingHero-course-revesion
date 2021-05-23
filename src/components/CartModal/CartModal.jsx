import { Modal, Button } from 'react-bootstrap';
import './CartModal.css';

function CartModal({ setShow, show, enroll }) {


    const handleClose = () => setShow(false);


    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Enrolled Courses</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        enroll.map(course => 
                        <div key={course.id} className="course-list">
                            <h4>{course.name}</h4>
                            <img src={course.picture} alt="" />
                        </div>)
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartModal;