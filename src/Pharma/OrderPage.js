import React from 'react';
import './OrderPage.css';

const orders = [
  { id: 'MO20', customer: 'Navitha', cost: '₹170', status: 'Requested', date: '27 July, 2024' },
  { id: 'MO21', customer: 'Kasthuri', cost: '₹50', status: 'Requested', date: '27 July, 2024' },
  { id: 'MO22', customer: 'Karthika', cost: '₹280', status: 'Requested', date: '27 July, 2024' },
  { id: 'MO23', customer: 'Sahfiya', cost: '₹200', status: 'Requested', date: '27 July, 2024' },
  { id: 'MO24', customer: 'Vishnu Priya', cost: '₹100', status: 'Requested', date: '27 July, 2024' },
];

const OrderPage = () => {
  return (
    <div className='app-order'>
    <div className="order-section">
      <div className="order-header">
        <h1>Orders</h1>
        <a href="#" className="export-link">Export</a>
      </div>
      <div className="order-filters">
        <a href="#" className="active">All</a>
        <a href="#">Active</a>
        <a href="#">Requested</a>
        <a href="#">Order Placed</a>
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Cost</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.cost}</td>
              <td><span className="status-requested">{order.status}</span></td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default OrderPage;
