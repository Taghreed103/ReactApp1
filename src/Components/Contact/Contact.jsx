import  { useState } from 'react';
import "./Contact.css"
export default function Contact() {
  const [formData, setFormData] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
    

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Data is  send  successfully ")
    // يمكنك هنا إرسال البيانات لـ API أو عرض رسالة نجاح
  };




  return (
<>

    
       <div className="contact  container   text-white text-center py-5">
        <div className="py-5 d-flex flex-column align-items-center">
          <h1 className="text-uppercase   text-black fw-bold pt-5">Contact us </h1>
          <div className="lines text-black       d-flex justify-content-center align-items-center gap-2 my-3">
            <div  id='Rline'   style={{ width: "50px", height: "2px" }}></div>
            <div className="fs-5">&#9733;</div>
            <div id="Lline" style={{ width: "50px", height: "2px" }}></div>
          </div>
        </div>
      </div>



      <form  noValidate    onSubmit={handleSubmit} className="form-floating w-50 mx-auto text-start">
        <div className="floating-placeholder     mb-3">
          <input
            type="text"
            name="userName"
            placeholder="userName"
            className="form-control"
            value={formData.userName}
            required
            onChange={handleChange}
          />

        </div>

        <div className= "floating-placeholder        mb-3">
          <input
            type="number"
            name="userAge"
            placeholder="userAge"
            className="form-control"
            value={formData.userAge}
            required
            onChange={handleChange}
          />

         </div>

        <div className="floating-placeholder         mb-3">
          <input
            type="email"
            name="userEmail"
            placeholder="userEmail"
           required
            className="form-control"
            value={formData.userEmail}
            onChange={handleChange}
          />

        </div>

        <div className=" floating-placeholder      mb-3">
          <input
            type="password"
            name="userPassword"
            placeholder="userPassword"
            className="form-control"
                 required
            value={formData.userPassword}
            onChange={handleChange}
          />

        </div>

        <button type="submit" className="btn btn-success  mb-5">send Message</button>
      </form>
    

</>
  )
}
