// main file
import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';
import PageHero from '../src/components/PageHero';
import HowItWorks from '../src/components/HowItWorks';
import './App.css';
let words;




function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [allergicWords, setAllergicWords] = useState('');
  const [ocrSuccessful, setOcrSuccessful] = useState(false);
  const [buyDecision, setBuyDecision] = useState('');
  const [imageSource, setImageSource] = useState('upload'); // 'upload' or 'capture'
  // set loading to true while ocr
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    alert("Loading..........");
    Tesseract.recognize(
      image,
      'eng', // Language: English
      { logger: (info) => console.log(info) }
    ).then(({ data: { text } }) => {
      setLoading(false);
      setOcrSuccessful(true);
      const extractedText = text.toLowerCase();
      const allergicWordsArray = allergicWords.split(',').map(word => word.trim().toLowerCase());

      const foundAllergicWords = allergicWordsArray.filter(word => extractedText.includes(word));
      words = allergicWordsArray.filter(word => extractedText.includes(word));

      if (foundAllergicWords.length > 0) {
        setBuyDecision(<span style={{ color: 'red' }}>UnSafe.</span>);
      } else {
        setBuyDecision(<span style={{ color: 'green' }}>Safe .</span>);
      }
      
     
    });
  };

  return (
   
    <div className="App">
     <> <PageHero/>
     <HowItWorks/>
     </>
     
     <div>
        <div className="page-section" id="start">
        <div className="container">
            <div className="row">
            <div className="col-lg-6 offset-lg-1 py-3 mt-lg-5 wow fadeInUp">
                <h1 className="mb-4">Enter Allergen Words</h1>
                <input
          type="text"
          placeholder="Enter comma-separated allergic words"
          value={allergicWords}
          onChange={(e) => setAllergicWords(e.target.value)}
        />
        <br></br>
                <a href="#find" className="btn btn-outline-primary rounded-pill">find</a>
            </div>
            <div className="col-lg-5 py-3">
                <div className="img-place mobile-preview shadow wow zoomIn">
                <div className="img-place mobile-preview shadow floating-animate">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/searching-keyword-6630403-5552845.png?f=webp" alt="" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>

        <div className="page-section bg-dark fg-white" id="find">
          <div className="container">
          <div className="col-lg-5 py-3">
          <div >
                <div className="img-place mobile-preview1 shadow floating-animate">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/upload-social-media-post-4291893-3569926.png" alt="" />
                </div>
                </div>
                
            </div>
            
            <br></br>
            <br></br>
            <label className="form-control">
  <input
    type="radio"
    value="upload"
    checked={imageSource === 'upload'}
    onChange={() => setImageSource('upload')}
  />
   Upload Image
</label>
<br></br>

   {imageSource === 'upload' && (
          // <input type="file" accept="image/*" placeholder='Upload Image' onChange={handleImageUpload} />
          <label className="file-upload">
  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
  />
  <span className="upload-label">Select Image</span>
</label>
        )}
        <br></br>
        <br></br>
        <br></br>
       <label className="form-control">
                 <input
            type="radio"
            value="capture"
            checked={imageSource === 'capture'}
            onChange={() => setImageSource('capture')}
          />
          Capture Image
        </label>
            <div className="row">
              <div className="col-md-6 col-lg-3 py-3">
              <div style={{ display: 'flex', alignItems: 'center' }}>

                



</div>

       
       
      
      </div>
              <div className="col-md-6 col-lg-3 py-3">
              
          
        {imageSource === 'capture' && (
          <div className="webcam-container">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <button onClick={captureImage} className="btn btn-gradient btn-split-icon rounded-pill"><span className="icon mai-camera"></span>Capture Image</button>
          </div>
        )}

        {(uploadedImage && imageSource === 'upload') || (uploadedImage && imageSource === 'capture') ? (
      
        <div>
           <div className="col-lg-5 py-3">
                <div className="img-place mobile-preview shadow wow zoomIn">
                <div className="img-place mobile-preview shadow floating-animate">
                <img
              src={uploadedImage}
              alt="Image"
              style={{ width: '450px', height: '437px' }}
            />
                </div>
                </div>
            </div>
       
                  <button onClick={() => performOCR(uploadedImage)}  className="btn btn-gradient btn-split-icon rounded-pill" href ="#analyze"> <span className="icon mai-scan"></span> Analyze</button>
                
        </div>
      ) : null}
                
                 
              
              </div>
            </div>
          </div>
        </div>
      <div>
         
        </div>

        <div className="page-section bg-image" style={{ backgroundImage: 'url(../assets/img/pattern_2.svg)' }} id="analyze">
        <h1 className="mb-4">Result:</h1>
        <br></br>
        <br></br>
        <br></br>

        <div className="container">
       
            <div className="row justify-content-center align-items-center">

            <div className="col-lg-7">
                <div className="pricing-table">
                <div className="pricing-item active wow zoomIn">
                    <div className="pricing-header">
                    </div>
                    <div className="pricing-body">
                    {ocrSuccessful && (
            <div>
              <h5>Buy Decision:</h5> 
              <h1><p>{buyDecision}</p></h1>
            </div>
          )}
                 <ul className="theme-list">
                 <ul className="theme-list">
            {words && words.length > 0 ? (
              words.map((word, index) => (
                <li key={index} className="list1-item" style={{ color: 'red' }}>{word}</li>
              ))
            ) : (
              <li className="list-item" style={{ color: 'green' }}>No allergic words found.</li>
            )}
          </ul>
</ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    </div>

    
  );
}

export default App;
