import { VideoImage } from "../VideoContent";

const Fcontent2 = () => {
  return (
    <section
      id="content-2"
      className="content-2 bg-04 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-bb img-block left-column video-preview wow fadeInRight">
            <img
                className="img-fluid"
                src="/images/ll.png"
                alt="content-image"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column white-color wow fadeInLeft">
              {/* Section ID */}
              <span className="section-id txt-upcase">Seamless Integrations</span>
              {/* Title */}
              <h2 className="h2-xs">Filter leads and comapanies based on your preferneces</h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <h4 className="p-lg">
                  📜Company Name
                  </h4>
                </li>
                <li className="list-item">
                  <h4 className="p-lg">
                  📜Lead Designation
                  </h4>
                </li>
                <li className="list-item">
                  <h4 className="p-lg">
                  📜Lead Location
                  </h4>
                </li>
                <li className="list-item">
                  <h4 className="p-lg">
                  📜Industry Name
                  </h4>
                </li>
                <li className="list-item">
                  <h4 className="p-lg">
                  📜Industry Group
                  </h4>
                </li>
                <li className="list-item">
                  <h4 className="p-lg">
                  📜Company type
                  </h4>
                </li>
                <p className="p-lg">
                  
                </p>
                  <p className="p-lg">
                  🔅 Save your applied filter, no need to remmember filters ever again.
                  </p>
              </ul>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Fcontent2;
