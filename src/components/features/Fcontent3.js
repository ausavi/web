import Counter from "../Counter";

const Fcontent3 = () => {
  return (
    <section
      id="content-3"
      className="bg-snow content-3 wide-60 content-section division"
    >
      <div className="container">
        {/* TOP ROW */}
        <div className="top-row pb-50">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="img-block img-bb left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/images/img-09.png"
                  alt="content-image"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                {/* Section ID */}
                <span className="section-id txt-upcase">Totally Optimized</span>
                {/* Title */}
                <h2 className="h2-xs">See top preferred companies based on our buying signals.</h2>
                {/* Text */}
                <p className="p-lg">
                <b>Sales Growth</b> - it is the most fundamental profitability measure. A firm with a high EPS is considered more lucrative.
                </p>
                {/* Text */}
                <p className="p-lg">
                <b>Employee Expense Growth</b> - is one of the key indicator that shows growth over a period of time.
                </p>
                <p className="p-lg">
                <b>Fixed Asset Growth</b> - ratio reveals how efficient a company is at generating sales from its existing fixed assets.
                </p>
                <p className="p-lg">
                <b>Profit Growth</b> - is an indicator of how profitable a company is relative to its assets or the resources it owns or controls.
                </p>
              </div>
            </div>
            {/* END TEXT BLOCK */}
          </div>
        </div>
        {/* END TOP ROW */}
        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-lg-6 order-last order-lg-2">
              <div className="txt-block slim-column left-column wow fadeInRight">
                {/* TEXT BOX */}
                <div className="txt-box">
                  {/* Title */}
                  <h5 className="h5-lg">Identifying leads with high decision-making power</h5>
                  <p className="p-lg">
                  During the sales process, the decision maker is the individual who can make the authoritative decision to make a purchase without having to confer to anyone else. In B2B sales, they are typically in the C-suite and sign the check when the sale is made.
                  </p>
                  <h5>Precise data points to Identify the lead: </h5>
                  <p className="p-lg">
                  <ul>
                    <b>
                      <li>✔ Lead’s Company Size</li>
                      <li>✔ Lead’s Company Name</li>
                      <li>✔ Lead’s Title</li>
                      <li>✔ Lead’s Location</li>
                      <li>✔ Lead’s Industry Name</li>
                      <li>✔ Lead’s Industry Group</li>
                    </b>
                  </ul>
                  </p>
                </div>{" "}
                {/* END TEXT BOX */}
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* CB WRAPPER */}
            <div className="col-lg-6 order-first order-lg-2">
              <div className="cb-wrapper">
                {/* CB HOLDER */}
                <div className="cb-holder wow fadeInLeft">
                  {/* CB BOX #1 */}
                  <div className="cb-single-box">
                    <p className="p-lg cb-header">Assist your search with Ausavi's ranking of firms based on signal strength,</p>
                    <h5 className="h2-title-xs statistic-number">
                    We offer the following details to identify the companies by
                    </h5>
                  </div>
                  <hr />
                  {/* CB BOX #2 */}
                  <div className="cb-single-box">
                    <b>
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-md">
                        ⭐ Sales Growth
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-md">
                        🚀 Profit Growth
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-md">
                        ⚡ Employee Expense Growth
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-md">
                        🎯 Fixed Asset Growth 
                        </p>
                      </li>
                    </ul>
                    </b>
                  </div>
                  {/* CB BOX #3 */}
                  <div className="cb-single-box cb-box-rounded bg-blue white-color mt-25">
                    <h5 className="h4-lg">💡</h5>
                    <p className="p-lg">Assist your search with Ausavi's ranking of firms based on signal strength</p>
                  </div>
                </div>{" "}
                {/* END CB HOLDER */}
                {/* CB SHAPE */}
                <div className="cb-shape-1">
                  <img
                    className="img-fluid"
                    src="/images/bg-shape-1.png"
                    alt="content-image"
                  />
                </div>
                {/* CB SHAPE */}
                <div className="cb-shape-2">
                  <img
                    className="img-fluid"
                    src="/images/bg-shape-2.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>{" "}
            {/* END CB WRAPPER */}
          </div>
        </div>{" "}
        {/* END BOTTOM ROW */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Fcontent3;
