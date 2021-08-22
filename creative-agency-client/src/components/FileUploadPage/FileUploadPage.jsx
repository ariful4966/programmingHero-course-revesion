import React, { useState } from 'react';
import axios from 'axios'

function FileUploadPage() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    }
    const handlesubmit =()=>{
        uploadImage(selectedFile)
        .then(data=>{
            console.log(data.data);
        })
    }

    function uploadImage(img) {
        let body = new FormData()
        body.set('key', '9519a86f55d224381c6e2b5e13379f75')
        body.append('image', img)

        return axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        })
    }

    return (
        <div>
            <input type="file" name="file" onChange={changeHandler} />
            {isFilePicked ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button onClick={handlesubmit}>Submit</button>
            </div>
        </div>
    )
}
export default FileUploadPage;