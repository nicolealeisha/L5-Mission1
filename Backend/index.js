'use strict';

const express = require('express');
const multer = require('multer');
const fs = require('fs');
const util = require('util');
const path = require('path');
const TrainingApi = require("@azure/cognitiveservices-customvision-training");
const PredictionApi = require("@azure/cognitiveservices-customvision-prediction");
const msRest = require("@azure/ms-rest-js");
require('dotenv').config();
const cors = require('cors');

// Retrieve environment variables
const trainingKey = process.env["VISION_TRAINING_KEY"];
const trainingEndpoint = process.env["VISION_TRAINING_ENDPOINT"];
const predictionKey = process.env["VISION_PREDICTION_KEY"];
const predictionEndpoint = process.env["VISION_PREDICTION_ENDPOINT"];

// Set up Azure Custom Vision credentials
const credentials = new msRest.ApiKeyCredentials({ inHeader: { "Training-key": trainingKey } });
const trainer = new TrainingApi.TrainingAPIClient(credentials, trainingEndpoint);
const predictor_credentials = new msRest.ApiKeyCredentials({ inHeader: { "Prediction-key": predictionKey } });
const predictor = new PredictionApi.PredictionAPIClient(predictor_credentials, predictionEndpoint);

// Set up Express app and Multer for file upload
const app = express();
const upload = multer({ dest: '../Backend/uploads/' }); // This will save uploaded files in 'uploads' folder

//add middleware
app.use(cors('http://localhost:5173'))
   // address to whitelist

const publishIterationName = "Mission1"; // Name of backend project

// Route for uploading the image and classifying it
app.post('/upload', upload.single('image'), async (req, res) => {
    console.log("File received:", req.file);

    try {
        // List all the projects to find the projectId of the 'Mission1' project
        const projects = await trainer.getProjects();
        const existingProject = projects.find(project => project.name === "Mission1");

        console.log(`Using existing project with ID: ${existingProject.id}`);

        // Read the uploaded image file
        const testFile = fs.readFileSync(req.file.path);

        // Perform classification on the existing project
        const results = await predictor.classifyImage(existingProject.id, publishIterationName, testFile);

        // Show results
        
        const predictions = results.predictions.map(predictedResult => {
            return `${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`;
        });
        console.log(`Results: ${predictions}`);

        // Send results back to the client
        res.json({
            message: 'Classification results',
            predictions: predictions
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred while processing the image.");
    } 
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
