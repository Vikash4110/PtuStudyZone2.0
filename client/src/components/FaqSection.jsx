import React from 'react';

const FaqSection = () => {
  return (
    <section className="container pt-1 pt-lg-3" id="faq">
      <div className="position-relative bg-primary rounded-3 overflow-hidden px-3 px-sm-4 px-md-0 py-5">

        {/* Parallax patterns */}
        <div 
          className="rellax position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block" 
          data-rellax-percentage="0.5" 
          data-rellax-speed="1.75"
        >
          <img 
            src="assets/img/landing/online-courses/pattern-1.svg" 
            className="position-absolute top-0 start-100 translate-middle ms-n4" 
            alt="Pattern" 
          />
          <img 
            src="assets/img/landing/online-courses/pattern-2.svg" 
            className="position-absolute top-50 start-0 mt-n5 ms-n5" 
            alt="Pattern" 
          />
          <img 
            src="assets/img/landing/online-courses/pattern-3.svg" 
            className="position-absolute top-100 start-100 translate-middle ms-n5 mt-n5" 
            alt="Pattern" 
          />
        </div>

        <div className="row justify-content-center position-relative zindex-2 py-lg-4">
          <div className="col-xl-8 col-lg-9 col-md-10 py-2">
            <h2 className="h1 text-light text-center mt-n2 mt-lg-0 mb-4 mb-lg-5">Frequently Asked Questions</h2>
            <div className="accordion" id="faq">

              {/* Item 1 */}
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h3 className="accordion-header">
                  <button 
                    className="accordion-button shadow-none rounded-3 collapsed fs-lg" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#q-3" 
                    aria-expanded="false" 
                    aria-controls="q-3"
                  >
                    Can I try it before I commit?
                  </button>
                </h3>
                <div className="accordion-collapse collapse" id="q-3" data-bs-parent="#faq">
                  <div className="accordion-body fs-xl pt-0">
                    <p>Yes! We offer a 14-day free trial for all new users.</p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h3 className="accordion-header">
                  <button 
                    className="accordion-button shadow-none rounded-3 collapsed fs-lg" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#q-4" 
                    aria-expanded="false" 
                    aria-controls="q-4"
                  >
                    How do I embed the calculators on my site?
                  </button>
                </h3>
                <div className="accordion-collapse collapse" id="q-4" data-bs-parent="#faq">
                  <div className="accordion-body fs-xl pt-0">
                    <p>It’s as simple as copying and pasting a few lines of code. No technical skills required.</p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h3 className="accordion-header">
                  <button 
                    className="accordion-button shadow-none rounded-3 collapsed fs-lg" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#q-5" 
                    aria-expanded="false" 
                    aria-controls="q-5"
                  >
                    What types of calculators are available?
                  </button>
                </h3>
                <div className="accordion-collapse collapse" id="q-5" data-bs-parent="#faq">
                  <div className="accordion-body fs-xl pt-0">
                    <p>We offer a wide range of calculators for various niches including finance, fitness, business, and more.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
