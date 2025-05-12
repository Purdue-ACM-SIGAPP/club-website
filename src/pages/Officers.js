import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css'; // Keep for card styles

const Officers = React.forwardRef((props, ref) => (
  <section id="officers" ref={ref} className="py-5 bg-white text-dark">
    <div className="container">
      <h2 className="fw-bold mb-4">Our Officers</h2>
      <p className="mb-5">
        SIGAPP is led by passionate students who plan events, mentor newcomers,
        and guide the club forward. Leadership is open to any motivated member
        ready to grow.
      </p>

      <div className="d-flex flex-row justify-content-center flex-wrap gap-5">
        {/* Officer 1 */}
        <div className="d-flex align-items-center" style={{ maxWidth: '600px' }}>
          <div className="me-4 text-end" style={{ width: '150px' }}>
            <p className="fw-semibold">President</p>
            <p className="small text-muted">SIGAPP Lead</p>
          </div>
          <div className="project-card">
            <div className="card-inner">
              <div className="card-front d-flex flex-column align-items-center justify-content-center">
                <img
                  src="/images/soleil.jpg"
                  alt="Soleil Pham"
                  className="img-fluid mb-2 rounded"
                  style={{ height: '140px', width: '140px', objectFit: 'cover' }}
                />
                <h5>Soleil Pham</h5>
              </div>
              <div className="card-back d-flex flex-column justify-content-center">
                <p>
                  Sophomore in Computer Science, Machine Intelligence & Cyber Security tracks.
                </p>
              </div>
            </div>
          </div>
          <div className="ms-4 text-start" style={{ width: '150px' }}>
            <p className="fw-semibold">Leads team meetings</p>
            <p className="small text-muted">Focus on projects & outreach</p>
          </div>
        </div>

        {/* Officer 2 */}
        <div className="d-flex align-items-center" style={{ maxWidth: '600px' }}>
          <div className="me-4 text-end" style={{ width: '150px' }}>
            <p className="fw-semibold">Vice President</p>
            <p className="small text-muted">Internal Coordinator</p>
          </div>
          <div className="project-card">
            <div className="card-inner">
              <div className="card-front d-flex flex-column align-items-center justify-content-center">
                <img
                  src="/images/david.jpg"
                  alt="David Panek"
                  className="img-fluid mb-2 rounded"
                  style={{ height: '140px', width: '140px', objectFit: 'cover' }}
                />
                <h5>David Panek</h5>
              </div>
              <div className="card-back d-flex flex-column justify-content-center">
                <p>
                  Junior in Computer Science, Machine Learning track.
                </p>
              </div>
            </div>
          </div>
          <div className="ms-4 text-start" style={{ width: '150px' }}>
            <p className="fw-semibold">Manages logistics</p>
            <p className="small text-muted">Supports project leads</p>
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default Officers;
