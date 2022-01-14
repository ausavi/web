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
                    <li className="list-item">
                      <p className="p-lg">
                        Nemo ipsam egestas volute turpis dolores ut aliquam
                        quaerat sodales sapien undo pretium a purus
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
                  <h5 className="h5-md">Do you have a free trial?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                    Cubilia laoreet augue egestas and luctus donec curabite diam
                    vitae dapibus libero and quisque gravida donec and neque.
                    Blandit justo aliquam molestie nunc sapien
                  </p>
                </div>
                {/* QUESTION #5 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">Proident ea eu laboris sunt voluptate laboris exercitation reprehenderit do cillum aliquip dolore incididunt.?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                    Etiam amet mauris suscipit sit amet in odio. Integer congue
                    leo metus. Vitae arcu mollis blandit ultrice ligula
                  </p>
                  {/* Answer */}
                  <p className="p-lg">
                    An enim nullam tempor sapien gravida donec congue leo metus.
                    Vitae arcu mollis blandit integer at velna
                  </p>
                </div>
                {/* QUESTION #6 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">Sit ipsum aliqua consequat sunt occaecat esse cillum culpa fugiat.</h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus, luctus mauris orci auctor purus
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Quaerat sodales sapien euismod blandit purus and ipsum
                        primis in cubilia laoreet augue luctus
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
