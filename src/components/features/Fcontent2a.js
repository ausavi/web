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
                  <b>Industry</b> - Your product may only be useful in particular businesses or sectors. As a result, targeting leads who do not belong to such industries or sectors makes little or no sense.
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                  <b>Employee Strength</b> - If you're an enterprise-focused SaaS company that prices its goods depending on the number of users, it's not worth your time to target small businesses. If your product is in its early stages of development and cannot take the rigours of enterprise-level operation, you should concentrate your efforts on smaller enterprises.
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
