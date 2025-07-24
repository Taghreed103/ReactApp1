import "./About.css";
export default function About() {
  return (
<>
  <div className="about     bg-info text-white text-center py-5">
   
        <div className="py-5 d-flex flex-column align-items-center">
          <h1 className="text-uppercase fw-bold    fs-3">About Component</h1>
          <div className="d-flex justify-content-center align-items-center gap-2 my-3">
            <div className="bg-white" style={{ width: "50px", height: "2px" }}></div>
            <div className="fs-5">&#9733;</div>
            <div className="bg-white" style={{ width: "50px", height: "2px" }}></div>
          </div>
          <div className="row  px-5 py-3">
            <div className="col-md-6  fs-7">
              <p className="text-white">
                This is the About component. It provides information about the application and its purpose.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, temporibus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloribus!
              </p>
            </div>
            <div className="col-md-6  fs-7">
              <p className="text-white">
                This is the About component. It provides information about the application and its purpose.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, temporibus.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloribus!


              </p>
            </div>
          </div>
        </div>
      </div>




</>



  )
}
