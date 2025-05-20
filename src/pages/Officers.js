import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import soleilImg from '../images/soleil.jpg';
// import davidImg from '../images/david.jpg';

const Officers = React.forwardRef((props, ref) => (
  <section id="officers" ref={ref} className="py-5 bg-white text-dark">
    <div className="container">
      <h2 className="fw-bold mb-4">Our Officers</h2>
      <p className="mb-5">
        SIGAPP is led by passionate students who manage projects, coordinate technical infrastructure, and guide new members. Leadership is open to any motivated student ready to grow and contribute.
      </p>

      <div className="d-flex flex-row justify-content-center flex-wrap gap-5">
        {/* President */}
        <OfficerCard
          title="President"
          subtitle="Lead Project Manager"
          name="Soleil Pham"
          image={soleilImg}
          leftDesc="Sets direction and ensures release targets"
          rightDesc="Oversees Team Leads, deployment, and progress"
        />

        {/* Vice President */}
        <OfficerCard
          title="Vice President"
          subtitle="Assistant Project Manager"
          name="David Panek"
          image="../images/david.jpg"
          leftDesc="Ensures club operations align with ACM"
          rightDesc="Assists President and manages internal support"
        />

      </div>
    </div>
  </section>
));

// Reusable officer card
const OfficerCard = ({ title, subtitle, name, image, leftDesc, rightDesc }) => (
  <div className="d-flex align-items-center" style={{ maxWidth: '600px' }}>
    <div className="me-4 text-end" style={{ width: '150px' }}>
      <p className="fw-semibold">{title}</p>
      <p className="small text-muted">{subtitle}</p>
    </div>
    <div className="project-card">
      <div className="card-inner">
        <div className="card-front d-flex flex-column align-items-center justify-content-center">
          <img
            src={image}
            alt={name}
            className="img-fluid mb-3 rounded"
            style={{
               width: '200px',
                height: '200px',
                objectFit: 'cover',
            }}
          />
          <h5>{name}</h5>
        </div>
        <div className="card-back d-flex flex-column justify-content-center">
          <p className="text-center small">{leftDesc}</p>
          <p className="text-center small">{rightDesc}</p>
        </div>
      </div>
    </div>
    <div className="ms-4 text-start" style={{ width: '150px' }}>
      <p className="fw-semibold">{leftDesc}</p>
      <p className="small text-muted">{rightDesc}</p>
    </div>
  </div>
);

export default Officers;
