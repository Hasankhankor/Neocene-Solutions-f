import React from 'react';

const FaqsPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Frequently Asked Questions</h1>
      <div style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '20px' }}>
        <h3 style={{ marginTop: '0' }}>What payment methods do you accept?</h3>
        <p>We accept payments via credit cards, PayPal, and bank transfer.</p>
      </div>
      <div style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '20px' }}>
        <h3 style={{ marginTop: '0' }}>How do I return an item?</h3>
        <p>Please contact our customer support team to initiate the return process.</p>
      </div>
      <div style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '20px' }}>
        <h3 style={{ marginTop: '0' }}>Is shipping free?</h3>
        <p>Shipping is free for orders above $50 within the continental United States.</p>
      </div>
      <div style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '20px' }}>
        <h3 style={{ marginTop: '0' }}>Do you offer international shipping?</h3>
        <p>Yes, we offer international shipping to select countries. Please check our shipping policy for more details.</p>
      </div>
    </div>
  );
}

export default FaqsPage;
