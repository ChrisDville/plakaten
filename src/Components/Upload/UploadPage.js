import React, { useState } from 'react';
import firebase from 'firebase/app';
import './uploadImage.scss';

import FileUploader from 'react-firebase-file-uploader';

import {storage} from '../../firebase/firebase';

export default function UploadPage() {

    const handleUploadStart = () => {
        console.log('Upload has started');
    }

    const handleUploadSuccess = () => {
        console.log('Upload has succesfully finished');
    }

    const handleUploadError = () => {
        console.log('Upload error');
    }




    return (
        <section className="uploadImage">
            <h1>Upload et billede</h1>

            <form action="">
                {/* <input type="file"/> */}

                <FileUploader
                storageRef = {firebase.storage().ref("Images")}
                onUploadStart={handleUploadStart}
                onUploadSuccess={handleUploadSuccess}
                onUploadError={handleUploadError}
                />

            </form>

            

        </section>
    )
}
