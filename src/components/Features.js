const Features = () => {
  return (
    <section id="features-8" className="wide-60 features-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">Your Success is our Success</h2>
              {/* Text */}
              <p className="p-xl">
              With our highly accurate B2B contact data and sales & market intelligence, you can harness your team's full potential.
              </p>
            </div>
          </div>
        </div>
        {/* FEATURES-8 WRAPPER */}
        <div className="fbox-8-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-3">
            {/* FEATURE BOX #1 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                  <img
                    className="img-fluid"
                    src="/images/img-21.png"
                    alt="feature-icon"
                  />
                </div>
                {/* Title */}
                <h5 className="h5-md">Sales Intelligence</h5>
                {/* Text */}
                <p className="p-lg">
                Unleashing the real power of your sales team is only a software away.
                </p>
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                  <img
                    className="img-fluid"
                    src="/images/img-22.png"
                    alt="feature-icon"
                  />
                </div>
                {/* Title */}
                <h5 className="h5-md">Market Intelligence</h5>
                {/* Text */}
                <p className="p-lg">
                It shouldn't be this simple to market your product and get leads, but it actually is.
                </p>
              </div>
            </div>
            {/* FEATURE BOX #3 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                  <img
                    className="img-fluid"
                    src="/images/img-23.png"
                    alt="feature-icon"
                  />
                </div>
                {/* Title */}
                <h5 className="h5-md">Ausavi API</h5>
                {/* Text */}
                <p className="p-lg">
                Ausavi's data can be used in conjunction with developer-friendly APIs to enable you to carry our precise data with you wherever you go.
                </p>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* END FEATURES-8 WRAPPER */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Features;
