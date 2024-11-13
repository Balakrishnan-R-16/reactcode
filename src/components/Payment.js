import React, { useState } from 'react';
import '../styles/Payment.css';

function Payment() {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [transactions, setTransactions] = useState([]);

  // Simulate payment processing
  const handlePayment = () => {
    setLoading(true);
    setError(null);

    // Validate payment details
    if (paymentMethod === 'creditCard' && (!cardNumber || !expirationDate || !cvv)) {
      setError('Please fill in all credit card details.');
      setLoading(false);
      return;
    }

    // Simulate an API call for payment processing
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;

      if (isSuccess) {
        setPaymentStatus('success');
        alert('Payment successful!');

        // Log transaction
        const newTransaction = {
          method: paymentMethod,
          date: new Date().toLocaleString(),
          amount: 100, // Replace with actual amount
        };
        setTransactions([...transactions, newTransaction]);
      } else {
        setPaymentStatus('error');
        setError('Payment failed. Please try again.');
      }

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Payment Page</h2>
        <p>Complete your payment here.</p>

        {/* Payment Method Selection */}
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            PayPal
          </label>
        </div>

        {/* Credit Card Details */}
        {paymentMethod === 'creditCard' && (
          <div className="credit-card-details">
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="card-expiry-cvv">
              <input
                type="text"
                placeholder="MM/YY"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Payment button */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className={`payment-button ${loading ? 'loading' : ''}`}
        >
          {loading ? 'Processing...' : 'Proceed to Pay'}
        </button>

        {/* Display loading spinner */}
        {loading && <p className="loading-text">Processing your payment...</p>}

        {/* Display payment status */}
        {paymentStatus === 'success' && (
          <p className="success-text">Payment completed successfully!</p>
        )}
        {paymentStatus === 'error' && <p className="error-text">{error}</p>}

        {/* Transaction History */}
        {transactions.length > 0 && (
          <div className="transaction-history">
            <h3>Transaction History</h3>
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index}>
                  {transaction.method} - {transaction.date} - ${transaction.amount}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
