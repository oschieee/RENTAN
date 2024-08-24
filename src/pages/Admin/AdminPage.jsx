import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AdminPage = () => {
  
//   const data = [
//     { email: 'john.doe@example.com', name: 'John Doe', phone: '123-456-7890', address: '123 Main St' },
//     { email: 'jane.smith@example.com', name: 'Jane Smith', phone: '987-654-3210', address: '456 Elm St' },
//     // Add more rows as needed
//   ];

const {token} = useSelector((state) => state.Auth.user)
const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(token);
        const response = await axios.get('http://localhost:3000/api/users', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        });
        setData(response.data)
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Phone</th>
            <th className="py-2 px-4 text-left">Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">{item.email}</td>
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.phone}</td>
              <td className="py-2 px-4">{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AdminPage;
