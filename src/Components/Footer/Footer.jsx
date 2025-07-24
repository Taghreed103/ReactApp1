import './Footer.css';
export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-0">
      <div className="container main-footer">
        <div className="row text-center gy-2">
          <div className="col-md-4">
            <h5 className="text-uppercase fw-bold">Location</h5>
            <p className='paragraph    mb-0'>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase fw-bold">Around the Web</h5>
            <div className="d-flex justify-content-center gap-2">
              <a href="#" className="text-info fs-7"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="text-info fs-7"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="text-info fs-7"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="text-info fs-7"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase fw-bold">About Freelancer</h5>
            <p className='paragraph    mb-0  '>
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center mt-4 " style={{ background: "#3d3e3fff", padding: "10px 0" , fontSize:"17px" }}>
        Copyright<span   className='text-info fs-2 p-1'>©</span>  Your Website 2021
      </div>
    </footer>
  )}