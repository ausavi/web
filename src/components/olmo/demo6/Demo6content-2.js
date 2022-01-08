import { VideoImage } from "../../VideoContent";

const Demo6content2 = () => {
  return (
    <section
      id="content-2"
      className="content-2 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-block left-column video-preview wow fadeInRight">
            <img
                className="img-fluid"
                src="/images/img-08.png"
                alt="hero-image"
              />
            </div> 
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* TEXT BOX */}
              <div className="txt-box mb-20">
                {/* Title */}
                <h5 className="h5-lg">Reinforce the Crux of your Business</h5>
                {/* Text */}
                <p className="p-lg">
                Maintaining databases has never been so simple. Data that is out of current or incomplete might make your sales and marketing processes difficult to manage. Let Ausavi take care of your lead enrichment with an automatic, constantly updated data source. Data from your CRM and Marketing Automation will always be up to date, regardless of where it came from.
                </p>
              </div>
              <hr />
              {/* CONTENT BOX #1 */}
              <div className="cbox-3 mb-10">
                <div className="cbox-3-ico ico-15">
                  <span className="flaticon-check purple-color" />
                </div>
                <div className="cbox-3-txt">
                  <h6 className="h6-lg">
                  Improve your data-dependent workflows.
                  </h6>
                </div>
              </div>
              {/* CONTENT BOX #2 */}
              <div className="cbox-3 mb-10">
                <div className="cbox-3-ico ico-15">
                  <span className="flaticon-check purple-color" />
                </div>
                <div className="cbox-3-txt">
                  <h6 className="h6-lg">
                  Prioritize the most important accounts.  
                  </h6>
                </div>
              </div>
              {/* CONTENT BOX #3 */}
              <div className="cbox-3 mb-10">
                <div className="cbox-3-ico ico-15">
                  <span className="flaticon-check purple-color" />
                </div>
                <div className="cbox-3-txt">
                  <h6 className="h6-lg">Use Ausavi's hundreds of data points to bolster your database.</h6>
                </div>
              </div>
              {/* CONTENT BOX #4 */}
              <div className="cbox-3 mb-10">
                <div className="cbox-3-ico ico-15">
                  <span className="flaticon-check purple-color" />
                </div>
                <div className="cbox-3-txt">
                  <h6 className="h6-lg">Extensive and detailed data that can help you succeed</h6>
                </div>
              </div>
            </div>
          </div>
          {/* END TEXT BLOCK */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo6content2;
