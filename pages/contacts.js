import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";
import Demo7content3 from "../src/components/olmo/demo7/Demo7content3";

const contacts = () => {
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="contacts-2"
        className="bg-snow wide-50 inner-page-hero contacts-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-80">
                {/* Title */}
                <h2 className="h2-xs">
                  {`Advance towards your growth goals with Ausavi`}
                </h2>
                {/* Text */}
                <p className="p-xl">
                Whether you're a marketer aiming to increase your company's lead generation or a salesman attempting to contact a critical prospect, you can count on Ausavi to do the heavy lifting.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End container */}
      </section>
      {/* END CONTACTS-2 */}
      
      <Demo7content3 />
      {/* CALL TO ACTION-8
			============================================= */}
      <section id="cta-8" className="bg-snow wide-100 cta-section division">
        <div className="container">
          <div className="cta-8-wrapper pc-25">
            <div className="row row-cols-1 row-cols-md-2">
              {/* BOX #1 */}
              <div className="col">
                <Link href="/pricing">
                  <a>
                    <div className="cta-box cta-top-box bg-white wow fadeInUp">
                      {/* Icon */}
                      <div className="cta-ico">
                        <div className="ico-60">
                          <span className="flaticon-wallet" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cta-txt">
                        {/* Title */}
                        <h5 className="h5-md">View Pricing</h5>
                        {/* Text */}
                        <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus at auctor tempus
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>{" "}
              {/* END BOX #1 */}
              {/* BOX #2 */}
              <div className="col">
                <Link href="/faqs">
                  <a>
                    <div className="cta-box bg-white wow fadeInUp">
                      {/* Icon */}
                      <div className="cta-ico">
                        <div className="ico-60">
                          <span className="flaticon-help" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cta-txt">
                        {/* Title */}
                        <h5 className="h5-md">Read the FAQs</h5>
                        {/* Text */}
                        <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus at auctor tempus
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>{" "}
              {/* END BOX #2 */}
            </div>{" "}
            {/* End cta-8-wrapper */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END CALL TO ACTION-8 */}
      {/* DIVIDER LINE */}
      <hr className="divider" />
    </Layout>
  );
};

export default contacts;
