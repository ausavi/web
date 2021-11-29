const Fcontent1 = () => {
  return (
    <section
      id="content-1"
      className="content-1 wide-60 inner-page-hero content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6 order-last order-md-2">
            <div className="txt-block left-column wow fadeInRight">
              {/* Section ID */}
              <span className="section-id txt-upcase">Market Intelligence</span>
              {/* Title */}
              <h2 className="h2-xs">
                {`Boost your revenue growth with Ausavi`}
              </h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                  Discover new consumers with an intuitive platform that includes over 62 million contact profiles, a chrome extension, an API, data enrichment, and account-based marketing.
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                  A sophisticated email search engine that enables you to connect with the important decision-makers that matter to you.
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                  Simply refine your search by applying one of over 50 filters to identify prospects who match your ideal profile. Then, access their profile to obtain their direct contact details and initiate communication in a matter of seconds.
                  </p>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6 order-first order-md-2">
            <div className="rel img-block right-column wow fadeInLeft">
              <img
                className="img-fluid"
                src="/images/img-07.png"
                alt="content-image"
              />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Fcontent1;
