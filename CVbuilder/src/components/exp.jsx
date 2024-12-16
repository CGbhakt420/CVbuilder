import { useState } from 'react';
import '../styles/exp.css';

function PracticalExperience() {
  const [experience, setExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateFrom: '',
    dateTo: '',
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="practical-experience">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="companyName"
            value={experience.companyName}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <input
            name="positionTitle"
            value={experience.positionTitle}
            onChange={handleChange}
            placeholder="Position Title"
          />
          <textarea
            name="mainResponsibilities"
            value={experience.mainResponsibilities}
            onChange={handleChange}
            placeholder="Main Responsibilities"
          />
          <input
            name="dateFrom"
            value={experience.dateFrom}
            onChange={handleChange}
            placeholder="Date From"
            type="date"
          />
          <input
            name="dateTo"
            value={experience.dateTo}
            onChange={handleChange}
            placeholder="Date To"
            type="date"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company Name: {experience.companyName}</p>
          <p>Position Title: {experience.positionTitle}</p>
          <p>Main Responsibilities: {experience.mainResponsibilities}</p>
          <p>From: {experience.dateFrom}</p>
          <p>To: {experience.dateTo}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default PracticalExperience;
