import React, { useEffect, useState } from 'react';

function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('/api/customers/')
            .then(response => response.json())
            .then(data => setCustomers(data));
    }, []);

    return (
        <div>
            <h1>Customers</h1>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>{customer.first_name} {customer.last_name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Customers;
