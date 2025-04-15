import React from 'react';
import axios from 'axios';

function CheckoutButton({ price }) {
  const loadRazorpay = async () => {
    try {
      const { data } = await axios.post('/api/payment/create-order', { price });

      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: 'Two-Wheeler Delivery',
        description: 'Delivery Charge',
        order_id: data.orderId,
        handler: async (response) => {
          const verification = await axios.post('/api/payment/verify', {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verification.data.success) {
            alert('Payment successful!');
          } else {
            alert('Payment failed.');
          }
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('Payment Error:', err);
      alert('Error initiating payment');
    }
  };

  return (
    <button className="btn btn-success mt-3" onClick={loadRazorpay}>
      Pay Now ₹{price}
    </button>
  );
}

export default CheckoutButton;