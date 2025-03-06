import { useState } from 'react';
import './Uploader.css'

function Uploader () {
    const [imageFile, setImageFile] = useState('');
    const [imgOutcome, setImgOutcome] = useState('');
    const [insurancePremium, setInsurancePremium] = useState('')
    const [loading, setLoading] = useState(false)

    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the first file
        setImageFile(file);
        // clears previous outcome if img had been loaded previously
        setImgOutcome('');
        setInsurancePremium('');
    };


    // Upload image function
    const uploadImg = async () => {
        if (!imageFile) {
            console.error('No image file selected');
            return;
        }

        setLoading(true);

        //execute a timer to display loading icon while server fetches info 
        setTimeout(()=>{
            setLoading(false);
        }, 2500)

        // encode file uploaded by user to transmit over fetch request
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const res = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                body: formData // Send as FormData to handle file upload
            });

            if (res.ok) {
                console.log('Success');
                const imgOutput = await res.json();
                console.log(imgOutput);

                const results = imgOutput.predictions;

                // iterate through array to find the prediction with the highest percentage, start with 0 as max 
                const highestPrediction = results.reduce((max, prediction) => {
                    // Split prediction into vehicle type and percentage
                    const [vehicle, percentage] = prediction.split(": ");
                    const percentValue = parseFloat(percentage);

                    // Check if this prediction has a higher percentage
                    if (percentValue > max.percentValue) {
                        return { vehicle, percentValue };
                    }

                    return max;
                }, { vehicle: '', percentValue: 0 });

                // Set the imgOutcome to only show the vehicle type (tag)
                setImgOutcome(`This vehicle has been classified as a ${highestPrediction.vehicle}.`);
                console.log(highestPrediction.vehicle);

                //utilise vehicle predicted to set dummy insurance premium
                if (highestPrediction.vehicle.toLowerCase() === 'sedan'){
                    setInsurancePremium(`The approximate cost is $75 per day.`)
                }
                else if (highestPrediction.vehicle.toLowerCase() === 'suv'){
                    setInsurancePremium(`The approximate cost is $100 per day.`)
                }
                else if (highestPrediction.vehicle.toLowerCase() === 'truck'){
                    setInsurancePremium(`The approximate cost is $150 per day.`)
                } 

            } 
            else {
                console.log('Error:', res.status);
                setInsurancePremium('Error, please try again with a different file.')
                
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setInsurancePremium('Error, please try again with a different file.')
        }
    };

    return (
        <div className='main-content'>

            <div className='left-image'>
                <img className='source-image' src='https://content.tgstatic.co.nz/webassets/contentassets/334c8c19736f43d883ca6c5d4cc3328f/img_2469_sky.jpg' alt='image of vehicle'></img>
            </div>

            <div className='uploader'>
                <h1>Vehicle Insurance Calculator</h1>
                <p>Upload an image below to calculate an estimate of the insurance premium</p>

                <form onSubmit={(e) => { e.preventDefault(); uploadImg(); }}>
                    <input className='upload-btn' type="file" name="image" onChange={handleFileChange} required />
                    <button className='submit-btn' type="submit">Upload</button>
                </form>

                <div className='uploader-results'>  
                    { loading &&
                    <img className='loading-img' src='https://c.tenor.com/On7kvXhzml4AAAAC/tenor.gif' alt='loading-img'></img>
                    }
                    {insurancePremium && 
                    <>
                    {/* display vehicle & insurance premium generated once calculated  */}
                        <h3 className='img-result'>{imgOutcome}</h3>
                        <h3>{insurancePremium}</h3>
                        <p className='result-txt'>Please note this system utilises AI technology and errors may occur.</p>
                        <p className='result-txt'>Pricing is a guideline only.</p>
                    </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Uploader;
