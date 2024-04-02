import React from 'react';

const CareersPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Welcome to Our Careers Page!</h1>
        <p>Explore exciting opportunities to join our team and make a difference.</p>
      </header>
      <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div style={{ width: 'calc(33.33% - 20px)', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
          <h3>Software Engineer</h3>
          <p>We are looking for a talented software engineer to join our development team.</p>
          <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Apply Now</button>
        </div>
        <div style={{ width: 'calc(33.33% - 20px)', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
          <h3>Marketing Specialist</h3>
          <p>Join our marketing team and help us promote our products to the world.</p>
          <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Apply Now</button>
        </div>
        <div style={{ width: 'calc(33.33% - 20px)', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
          <h3>Customer Support Representative</h3>
          <p>We need friendly and helpful individuals to provide top-notch customer support.</p>
          <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Apply Now</button>
        </div>
      </section>
      <section style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
        <h2>Why Join Our Team?</h2>
        <ul>
          <li>Exciting projects and opportunities for growth</li>
          <li>Collaborative and supportive work environment</li>
          <li>Competitive salaries and benefits</li>
          <li>Flexible work arrangements</li>
          <li>Opportunity to make a positive impact</li>
        </ul>
      </section>
    </div>
  );
}

export default CareersPage;
