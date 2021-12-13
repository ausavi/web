const Fcontent2a = () => {
  return (
    <section
      id="content-2a"
      className="content-2 bg-lightgrey wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-block left-column wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/img-05.png"
                alt="content-image"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Section ID */}
              <span className="section-id txt-upcase">Handling With Ease</span>
              {/* Title */}
              <h2 className="h2-xs">More productivity with less effort</h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                  Locate a target account on LinkedIn Sales Navigator and launch the Ausavi extension.
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                  Using LinkedIn's filters, you can narrow down your list of contacts. Ausavi can be used to gather data on any potential customer.
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                  Update records at the same time as Ausavi routes your contacts. Prospecting may now begin for you and your team.
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

export default Fcontent2a;
