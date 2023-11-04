import React, { useState } from 'react';
import axios from 'axios';
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
const data={
  email:email
}
  const handleSubscribe = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/subscribe',data);
        
            if (response.status === 201) {
              setSubscribed(true);
            }
          } catch (error) {
            console.error('Error subscribing:', error);
          }
  };

  return (
    <div className="App">
      <h1>Newsletter Subscription</h1>
      {subscribed ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      )}
    </div>
  );
}

