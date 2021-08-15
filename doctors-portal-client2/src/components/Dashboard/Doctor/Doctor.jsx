import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Doctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)
    const handleBlur = e => {
        const newInfo = {
            ...info
        }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('http://localhost:5000/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid">
            <div className="row dashbord-bg">
                <Sidebar />
                <div className="col-md-10 p-4 pr-5">
                    <h5 className="text-brand">Add a Doctor</h5>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="inputName" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" id="inputName" placeholder="Your Name" onBlur={handleBlur} />

                        </div>
                        <div className="mb-3">
                            <label for="inputEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" id="inputEmail" placeholder="Enter Email" onBlur={handleBlur} />
                        </div>
                        <div className="mb-3 ">
                            <label for="imgUpdoad" className="form-label">Upload Image</label>
                            <input type="file" class="form-control" id="imgUpdoad" onChange={handleFileChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Doctor;