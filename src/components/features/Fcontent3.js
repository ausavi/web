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
              <div className="img-block left-column wow fadeInRight">
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
                <h2 className="h2-xs">Don't just go the market; take control of it.</h2>
                {/* Text */}
                <p className="p-lg">
                AUSAVI's suite of products accelerates your pipeline by combining B2B intelligence and company contact data with engagement tools and dynamic workflows.
                </p>
                {/* Tools List */}
                <div className="tools-list ico-40 mt-30">
                  {/* Text */}
                  <h6 className="h6-xl">Technologies We Use:</h6>
                  {/* Icons */}
                  <span className="flaticon-html-5 text-black-50" />
                  <span className="flaticon-css-3 text-black-50" />
                  <span className="flaticon-wordpress-logo text-black-50" />
                  <span className="flaticon-js text-black-50" />
                  <span className="flaticon-diamond-1 text-black-50" />
                </div>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
          </div>
        </div>{" "}
        {/* END TOP ROW */}
        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-lg-6 order-last order-lg-2">
              <div className="txt-block slim-column left-column wow fadeInRight">
                {/* TEXT BOX */}
                <div className="txt-box mb-20">
                  {/* Title */}
                  <h5 className="h5-lg">Only the best quality data for you</h5>
                  {/* Text */}
                  <p className="p-lg">
                  We are devoted to providing you with high-quality data, and we go to great measures to ensure that it is accurate and current. Outlined below is our stringent data collecting and verification method, as well as our real-time email verification tool. In short, when you unlock a lead's contact information on UpLead, our technology verifies the lead's email address on the spot. For bulk downloads, Ausavi offers real-time email verification before downloading your selected leads' information.
                  </p>
                </div>
                {/* TEXT BOX */}
                <div className="txt-box">
                  {/* Title */}
                  <h5 className="h5-lg">Meticulous lead verification</h5>
                  {/* List */}
                      <p className="p-lg">
                      How does this function exactly? A loading indicator appears when you click “Unlock” to access a lead's information (or use the bulk download feature to receive several leads' information). Ausavi offers three verification statuses: Valid, Invalid, and Accept All. If the lead's email server supports verification, the email is 97 percent+ verified at the time of download or export. Ausavi will show the email address without prompting. Invalid email addresses are automatically updated by our manual research staff.
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
                    <p className="p-lg cb-header">New Customers</p>
                    <h2 className="h2-title-xs statistic-number">
                      <sup>+</sup>
                      {/* <Counter end={784} /> */}
                      <Counter end={784} />
                    </h2>
                    <p className="p-md mt-5 ico-10">
                      <span className="green-color">
                        <span className="flaticon-" /> 4.6%
                      </span>{" "}
                      vs last 7 days
                    </p>
                  </div>
                  <hr className="divider" />
                  {/* CB BOX #2 */}
                  <div className="cb-single-box">
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-md">
                          Fringilla risus luctus mauris auctor and purus euismod
                          purus
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-md">
                          Nemo ipsam volute turpis dolores ut quaerat sodales
                          sapien
                        </p>
                      </li>
                    </ul>
                  </div>
                  {/* CB BOX #3 */}
                  <div className="cb-single-box cb-box-rounded bg-green white-color mt-25">
                    <h4 className="h4-lg">98.245</h4>
                    <p className="p-lg">Ligula risus auctor tempus</p>
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
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Fcontent3;
