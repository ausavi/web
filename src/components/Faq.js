import Link from "next/dist/client/link";
const Faq = () => {
  return (
    <section id="faqs-2" className="wide-60 faqs-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-80">
              {/* Title */}
              <h2 className="h2-md">Got Questions? Look Here</h2>
              {/* Text */}
              <p className="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis a libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
            </div>
          </div>
        </div>
        {/* FAQs-2 QUESTIONS */}
        <div className="faqs-2-questions">
          <div className="row row-cols-1 row-cols-lg-2">
            {/* QUESTIONS HOLDER */}
            <div className="col">
              <div className="questions-holder pr-15">
                {/* QUESTION #1 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  I can't find a specific company. What do I do?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  So you want to look up a particular company but can't find it in our database. You've tried searching for it on the Companies page but no luck.
When you're in this situation, click on the "Ask Us" on the dashboard under the Query section to let us know you're looking for information on this particular company.
                  </p>
                </div>
                {/* QUESTION #2 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  I need more direct dials. What do I do?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  If you're searching for more leads for a particular company or just looking for direct dials of decision-makers, you can let us know by clicking on the "Ask Us" button on the dashboard under the Query section.
                  </p>
                </div>
                {/* QUESTION #3 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  Why are some data points missing for some companies?
                  </h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      Revenue data is available on the Internet only for publicly traded companies. So, if it's missing, it means that no trusted source has declared the company's revenue. 
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* END QUESTIONS HOLDER */}
            {/* QUESTIONS HOLDER */}
            <div className="col">
              <div className="questions-holder pl-15">
                {/* QUESTION #4 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">Can I see AUSAVI in action before purchasing?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  Yes you can access the trial version of Ausavi before purchasing. Please contact us for further queries.
                  </p>
                </div>
                {/* QUESTION #5 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">How many users can use Ausavi at a time?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  Ausavi is limited to a single-user product. One user can log in only once at a time. Buying for your organization? Please contact us for details.
                  </p>
                </div>
                {/* QUESTION #6 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">What details will I get for a particular company?</h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      Ausavi provides you with all exclusive details including funding and leads at the top management level of the company. You can opt for a trial version for hands-on experience. 
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* END QUESTIONS HOLDER */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* END FAQs-2 QUESTIONS */}
        {/* MORE QUESTIONS BUTTON */}
        <div className="row">
          <div className="col">
            <div className="more-questions">
              <h5 className="h5-sm">
                Have more questions?{" "}
                <Link href="#">
                  <a>Ask your question here</a>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Faq;
