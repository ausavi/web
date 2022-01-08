const Demo7content3 = () => {
  return (
    <section
      id="content-3"
      className="content-3 content-section division"
    >
      <div className="container">
        {/* TOP ROW */}
        <div className="top-row">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="img-block left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/images/img-10.png"
                  alt="content-image"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                {/* Section ID */}
                <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                  Contact Us
                </span>
                {/* Title */}
                <h2 className="h2-xs">Leave us a mail here<h2 className="h2-xl blue-color">business@ausavi.com</h2>and we'll get back to you as aoon as possible</h2>
                {/* Text */}
                
              </div>
            </div>
            {/* END TEXT BLOCK */}
          </div>
        </div>
        {/* END TOP ROW */}
        
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo7content3;
