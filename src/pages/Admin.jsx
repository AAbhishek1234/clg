// src/AdminDashboard.js
import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('https://collegeserverone.onrender.com/student/data', {
                headers: {
                    Authorization: `Bearer ${token}`, // Attach token to request
                },
            });

            if (response.ok) {
                const data = await response.json();
                setStudents(data);
            } else {
                console.log('Failed to fetch students');
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                {students.map((student) => (
                    <li key={student._id}>
                        {student.name} - {student.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
