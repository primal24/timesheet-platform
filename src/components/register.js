import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
    const departments = [
        "Applied computer science", 
        "Construction, Energy & Society",
        "Engineering",
        "Health Studies",
        "Management",
        "Media & Design"
    ]; 
    const institutions = [
        "Institute of Applied Production Sciences",
        "Institute of Architecture and Civil Engineering",
        "Institute of Banking & Insurance",
        "Institute of Biomedical Analytics",
        "Institute of Design & Communication",
        "Institute of Dietetics",
        "Institute  of eHealth",
        "Institute of Electronic Engineering",
        "Institute of Energy, traffic and environmental management",
        "Institute of Occupational therapy",
        "Institute of Fahrzeugtechnik / Automotive Engineering",
        "Institute of Healthcare and nursing",
        "Institute of Health & Tourism Management",
        "Institute of Midwifery Sciences",
        "Institute of Industrial Design",
        "Institute of Industrial Management",
        "Institute of International Management and Entrepreneurship",
        "Institute of Journalism and Digital Media",
        "Institute of Speech therapy",
        "Institute of Luftfahrt / Aviation",
        "Institute of Physiotherapy",
        "Institute of Radiology Technology",
        "Institute of Software Design and Security",
        "Institute of Social Work",
        "Institute of Business Informatics and Data Science" 
    ];

    const [formData, setFormData] = useState({
        workerId: '',
        firstName: '',
        lastName: '',
        email: '',
        employmentCapacity: '',
        department: '',
        institution: '',
        otherDepartment: '', // For custom department entries
        otherInstitution: '', // For custom institution entries
        role: ''
    });

    const [errorMessage, setErrorMessage] = useState(null); 

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        setErrorMessage(null); // Clear errors on change
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Client-side Validation
        if (!formData.workerId||!formData.FirstName||!formData.LastName||
            !formData.email||!formData.password||!formData.employeeCapacity||!formData.department||
            !formData.institution||!formData.role /*...check other fields... */ ) { 
            setErrorMessage('Please fill out all required fields.');
            return; // Stop submission
        }
    
        // Simple email regex - refine as needed
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
    
        // Backend submission
        try {
            const response = await axios.post('src/server/routes/users.js', formData);

            if (response.status === 201) {
                // ... Handle success (redirect, store tokens, etc.)
            } else {
                setErrorMessage('Something went wrong with registration.');
            }

        } catch (error) {
            // ...  Network errors or backend validation errors (refine handling) 
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.error); 
            } else {
                setErrorMessage('Connection error during registration'); 
            }        
        }
    };
    

    return (
        <div>
            {errorMessage && <div className="error-message">{errorMessage}</div>} 
            
            <form onSubmit={handleSubmit}>

                <div> 
                    <label htmlFor="workerId">Worker ID:</label>
                    <input type="text" id="workerId" name="workerId" value={formData.workerId} onChange={handleChange} required />
                </div>
                <div> 
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div> 
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>  
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                {/* Employment Capacity (select dropdown) */}

                <div>
                    <label htmlFor="department">Department:</label>
                    <select  id="department" name="department" value={formData.department} onChange={handleChange} required> 
                        <option value="">-- Select Department --</option>
                        {departments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))} 
                        <option value="Other">Other</option>
                    </select>
                    {formData.department === 'Other' && ( 
                        <input type="text" name="otherDepartment" value={formData.otherDepartment} onChange={handleChange}  />
                    )}
                </div>
                <div>
                    <label htmlFor="institution">Institution:</label>
                    <select  id="institution" name="institution" value={formData.institution} onChange={handleChange} required> 
                        <option value="">-- Select Institution --</option>
                        {institutions.map(inst => (
                            <option key={inst} value={inst}>{inst}</option>
                        ))} 
                        <option value="Other">Other</option>
                    </select>
                    {formData.institution === 'Other' && ( 
                        <input type="text" name="otherInstitution" value={formData.otherInstitution} onChange={handleChange}  />
                    )}
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <select id="role" name="role" value={formData.role} onChange={handleChange} required>
                        <option value="">-- Select Role --</option>
                        <option value="employee">Employee</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                <button type="submit">Register</button> 
            </form>
        </div>
    );
};

export default Register;