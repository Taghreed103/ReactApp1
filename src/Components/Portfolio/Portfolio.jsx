import React from 'react';
import './Portfolio.css';
import { useState } from 'react';
import Modal  from '../Modal/Modal';
export default function Portfolio() {
  

  const images = [
  `${import.meta.env.BASE_URL}img/port1.png`,
  `${import.meta.env.BASE_URL}img/port2.png`,
  `${import.meta.env.BASE_URL}img/port3.png`,
  `${import.meta.env.BASE_URL}img/port1.png`,
  `${import.meta.env.BASE_URL}img/port2.png`,
  `${import.meta.env.BASE_URL}img/port3.png`,
];


  const [currentImg, setCurrentImg] = useState('');

 const handleShow = (img) => setCurrentImg(img); 
  const handleClose = () => setCurrentImg('');

  return (


    <>
     <div className="portfolio text-white text-center py-5">
      <div className="py-5 d-flex flex-column align-items-center">
        <h1 className="text-uppercase   fw-bold">Our Portfolio</h1>

        <div className="d-flex justify-content-center align-items-center gap-2 my-3">
          <div className="bg-white" style={{ width: "50px", height: "2px" }}></div>
          <div className="fs-5">&#9733;</div>
          <div className="bg-white" style={{ width: "50px", height: "2px" }}></div>
        </div>

        {/* image   content  */}
       
<div className="row  d-flex  justify-content-center  align-items-center   g-2">
  {images.map((src, index) => (
    <div className="col-md-4" key={index}>
      <div className="content d-flex justify-content-center align-items-center  ">
        <img src={src}
         alt={`portfolio ${index}`} 
          className="w-100 rounded-2"
           style={{ cursor: 'pointer' }}
         
         />

        <div className="portfolio-overlay"
       onClick={() => handleShow(src)}

        >
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
   {/*   modal   content  */}
 <Modal imgSrc={currentImg}   onClose={handleClose} />
<Modal imgSrc="/img1.png" onClose={handleClose} />
<Modal imgSrc="/img2.png" onClose={handleClose} />
<Modal imgSrc="/img3.png" onClose={handleClose} />
<Modal imgSrc="/img4.png" onClose={handleClose} />
<Modal imgSrc="/img5.png" onClose={handleClose} />
<Modal imgSrc="/img6.png" onClose={handleClose} />
    
    
    </>
   

  );
}
