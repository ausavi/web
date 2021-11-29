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
            <div className="rel img-block left-column video-preview wow fadeInRight">
              <VideoImage
                img="images/img-08.png"
                extraClass="video-btn video-btn-xl bg-pink ico-90"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column white-color wow fadeInLeft">
              {/* Section ID */}
              <span className="section-id txt-upcase">Seamless Integrations</span>
              {/* Title */}
              <h2 className="h2-xs">Connect Ausavi seamlessly to your other applications.</h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                  One-click integrations that automate data entry, allowing you to spend more time nurturing and converting prospects.  Increase productivity instantly.
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                  Ausavi Integrations automate administrative tasks without interfering with your existing procedures.
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                  To ensure that your database is always squeaky clean and full of boiling hot leads, Ausavi saves contacts in bulk directly to your CRM and populate the relevant field with the right data.
                  </p>
                </li>
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
