import './OrderPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
    const [orders, setOrders] = useState({});
    const [expandedUserId, setExpandedUserId] = useState(null);
    const [pharmacyId, setPharmacyId] = useState(null);
    const navigate = useNavigate();
    // Retrieve pharmacyId from local storage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setPharmacyId(user.id);
        }
    }, []);

    // Fetch orders when pharmacyId is available
    useEffect(() => {
        if (pharmacyId) {
            axios.get(`http://localhost:8080/api/order-histories/grouped-by-date-and-user/${pharmacyId}`)
                .then(response => {
                    console.log('Orders data:', response.data);
                    setOrders(response.data);
                })
                .catch(error => {
                    console.error('Error fetching orders:', error);
                });
        }
    }, [pharmacyId]);

    // Toggle the expanded state of user details
    const handleToggleUserDetails = (userId) => {
        setExpandedUserId(expandedUserId === userId ? null : userId);
    };

    // Handle reply action
    const handleReply = (userId) => {
        console.log(`Reply to user with ID: ${userId}`);
        // Add your reply logic here
    };

    return (
        <div className='orders-body'>
           
            <div className='app-order'>
                <div className="order-section">
                    <div className="order-header">
                        <h1>Orders</h1>
                        <a href="#" className="export-link">Export</a>
                    </div>
                    {/*<div className="order-filters">
                        <a href="#" className="active">All</a>
                        <a href="#">Active</a>
                        <a href="#">Requested</a>
                        <a href="#">Order Placed</a>
                    </div>*/}
                    {Object.keys(orders).map(date => (
                        <div key={date} className="order-date-section">
                            <h2>{date}</h2>
                            {Object.keys(orders[date]).map(userKey => {
                                const userOrders = orders[date][userKey];
                                const user = userOrders.user;
                                const medicines = userOrders.medicines;

                                return (
                                    <div key={user.id} className="user-orders">
                                        <button
                                            onClick={() => handleToggleUserDetails(user.id)}
                                            className="toggle-details-button"
                                        >
                                            {expandedUserId === user.id ? 'Hide Details' : 'Show Details'}
                                        </button>

                                        {expandedUserId === user.id && (
                                            <div className="user-details">
                                                <p><strong>Username:</strong> {user.username}</p>
                                                <p><strong>Email:</strong> {user.email}</p>
                                                <p><strong>Date of Birth:</strong> {user.dob}</p>
                                                <p><strong>Mobile Number:</strong> {user.mobileNumber}</p>
                                                <p><strong>Address:</strong> {user.address}</p>
                                                <p><strong>Pincode:</strong> {user.pincode}</p>
                                            </div>
                                        )}

                                        <table className="order-table">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Purpose</th>
                                                    <th>Category</th>
                                                    <th>Brand</th>
                                                    <th>Cost</th>
                                                    <th>Form</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {medicines.map(medicine => (
                                                    <tr key={medicine.id}>
                                                        <td>{medicine.id}</td>
                                                        <td>{medicine.name}</td>
                                                        <td>{medicine.purpose}</td>
                                                        <td>{medicine.category}</td>
                                                        <td>{medicine.brand}</td>
                                                        <td>{medicine.cost}</td>
                                                        <td>{medicine.form}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <button
                                            onClick={() => handleReply(user.id)}
                                            className="reply-button"
                                        >
                                            Reply
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderPage;