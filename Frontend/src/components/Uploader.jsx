import React, { useState } from 'react';

function Uploader () {
    const [imageFile, setImageFile] = useState(null);

    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the first file
        setImageFile(file);
    };

    // Upload image function
    const uploadImg = async () => {
        if (!imageFile) {
            console.error('No image file selected');
            return;
        }

        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const res = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                body: formData // Send as FormData to handle file upload
            });

            if (res.ok) {
                console.log('Success');
                const responseJson = await res.json();
                console.log(responseJson);
            } else {
                console.log('Error:', res.status);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); uploadImg(); }}>
                <input 
                    type="file" 
                    name="image" 
                    onChange={handleFileChange} 
                    required 
                />
                <button type="submit">Upload</button>
            </form>
        </>
    );
}

export default Uploader;
