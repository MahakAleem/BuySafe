import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [allergicWords, setAllergicWords] = useState('');
  const [ocrSuccessful, setOcrSuccessful] = useState(false);
  const [buyDecision, setBuyDecision] = useState('');
  const [imageSource, setImageSource] = useState('upload'); // 'upload' or 'capture'

  const webcamRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setImageSource('upload');
      };
      reader.readAsDataURL(file);
    }
  };

  const captureImage = async () => {
    const capturedImage = webcamRef.current.getScreenshot();
    setUploadedImage(capturedImage);
    setImageSource('capture');
  };

  const performOCR = (image) => {
    Tesseract.recognize(
      image,
      'eng', // Language: English
      { logger: (info) => console.log(info) }
    ).then({ data: { text } }) => {
        Tesseract.recognize(
            image,
            'eng', // Language: English
            { logger: (info) => console.log(info) }
          ).then(({ data: { text } }) => {
            setOcrSuccessful(true);
            const extractedText = text.toLowerCase();
            const allergicWordsArray = allergicWords.split(',').map(word => word.trim().toLowerCase());
      
            const foundAllergicWords = allergicWordsArray.filter(word => extractedText.includes(word));
      
            if (foundAllergicWords.length > 0) {
              setBuyDecision('Do not buy. Contains allergic words.');
            } else {
              setBuyDecision('Safe to buy.');
            }
    });
  };

  return (
    <div className="App">
      <h1>Product Purchase Decision</h1>
      <div>
        <h2>Step 1: Enter Allergic Words</h2>
        <input
          type="text"
          placeholder="Enter comma-separated allergic words"
          value={allergicWords}
          onChange={(e) => setAllergicWords(e.target.value)}
        />
      </div>
      <div>
        <h2>Step 2: Select Image Source</h2>
        <label>
          <input
            type="radio"
            value="upload"
            checked={imageSource === 'upload'}
            onChange={() => setImageSource('upload')}
          />
          Upload Image
        </label>
        <label>
          <input
            type="radio"
            value="capture"
            checked={imageSource === 'capture'}
            onChange={() => setImageSource('capture')}
          />
          Capture Image
        </label>
        {imageSource === 'upload' && (
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        )}
        {imageSource === 'capture' && (
          <div className="webcam-container">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <button onClick={captureImage}>Capture Image</button>
          </div>
        )}
      </div>
      {(uploadedImage && imageSource === 'upload') || (uploadedImage && imageSource === 'capture') ? (
        <div>
          <h2>Image :</h2>
          <div className="uploaded-image-container">
            <img
              src={uploadedImage}
              alt="Image"
              style={{ width: '250px', height: '250px' }}
            />
          </div>
          <h2>Step 3: Analyze Purchase</h2>
          <button onClick={() => performOCR(uploadedImage)}>Analyze</button>
          {ocrSuccessful && (
            <div>
              <h3>Buy Decision:</h3>
              <p>{buyDecision}</p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default App;
