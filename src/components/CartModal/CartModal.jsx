import { Modal, Button } from 'react-bootstrap';
import './CartModal.css';

function CartModal({ setShow, show, enroll }) {

    const enrolledBalance = enroll.reduce((total, course) => total + course.price, 0)
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
                                <h5>{course.name}</h5>
                                <img src={course.picture} alt="" />
                            </div>)
                    }
                </Modal.Body>
                <Modal.Footer>
                    <span className="mr-auto"> Total Courses Price: <strong>${enrolledBalance}</strong></span>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartModal;