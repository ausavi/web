import Link from "next/dist/client/link";
const Demo6cta11 = () => {
  return (
    <section id="cta-11" className="cta-section division">
      <div className="container">
        <div className="bg-tra-purple cta-11-wrapper">
          <div className="row d-flex align-items-center">
            {/* CALL TO ACTION TEXT */}
            <div className="col-lg-7 col-lg-7">
              <div className="cta-11-txt">
                {/* Title */}
                <h2 className="h2-xs">Advance towards your growth goals with Ausavi</h2>
                {/* Text */}
                <p className="p-lg">
                Whether you're a marketer aiming to increase your company's lead generation or a salesman attempting to contact a critical prospect, you can count on Ausavi to do the heavy lifting.
                </p>
                {/* Button */}
                <Link href="#">
                  <a className="btn btn-stateblue tra-stateblue-hover">
                    Get Started Now
                  </a>
                </Link>
              </div>
            </div>
            {/* CALL TO ACTION BUTTON */}
            <div className="col-lg-5">
              <div className="text-end">
                <div className="cta-11-img text-center">
                  <img
                    className="img-fluid"
                    src="/images/img-25.png"
                    alt="cta-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo6cta11;
