import React, { useState } from 'react';
import './Apply.css';

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    birthdate: '',
    birthplace: '',
    enrollmentyear: '',
    branch: '',
    sid: '',
    acpc_rank: '',
    cast_category: '',
    subcast: '',
    motherTongue: '',
    nationality: '',
    after: '12th',
    degree: 'B.Tech',
    gujcat: '' ,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost/api/sdp/student/addstudentinfo.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to register. Please try again later.');
      }

      // If the response is successful, you can handle it here
      console.log('Registration successful!');
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error registering:', error.message);
    }
  };


  return (
    <div className="container">
      <div className="space-y-2">
        <div className="space-y-8 bg-green-200 dark:bg-green-800 p-8 rounded-lg">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">College Registration</h2>
            <p className="text-gray-500 dark:text-gray-400">Enter your information to register for college.</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="birthdate">Birthdate</label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="birthplace">Birthplace</label>
              <input
                type="text"
                id="birthplace"
                name="birthplace"
                value={formData.birthplace}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="enrollmentyear">Enrollment Year</label>
              <input
                type="text"
                id="enrollmentyear"
                name="enrollmentyear"
                value={formData.enrollmentyear}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="branch">Branch</label>
              <input
                type="text"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="sid">Student ID</label>
              <input
                type="text"
                id="sid"
                name="sid"
                value={formData.sid}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="acpc_rank">ACPC Rank</label>
              <input
                type="text"
                id="acpc_rank"
                name="acpc_rank"
                value={formData.acpc_rank}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="gujcat">gujcat marks</label>
              <input
                type="text"
                id="gujcat"
                name="gujcat"
                value={formData.gujcat}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="cast_category">Cast Category</label>
              <input
                type="text"
                id="cast_category"
                name="cast_category"
                value={formData.cast_category}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subcast">Subcast</label>
              <input
                type="text"
                id="subcast"
                name="subcast"
                value={formData.subcast}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="motherTongue">Mother Tongue</label>
              <input
                type="text"
                id="motherTongue"
                name="motherTongue"
                value={formData.motherTongue}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="after">After</label>
              <input
                type="text"
                id="after"
                name="after"
                value={formData.after}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>

        
           

            <button className="button" onClick={handleSubmit}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
