import { useState } from "react";
import "../styles/edu.css";

function EducationalExperience() {
  const [info, setInfo] = useState({
    university: "",
    branch: "",
    grade: "",
    date: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="educational-experience">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="university"
            value={info.university}
            onChange={handleChange}
            placeholder="University"
          />
          <input
            name="branch"
            value={info.branch}
            onChange={handleChange}
            placeholder="Branch"
          />
          <input
            name="grade"
            value={info.grade}
            onChange={handleChange}
            placeholder="Grade"
            type="date"
          />
          <input
            name="date"
            value={info.date}
            onChange={handleChange}
            placeholder="Date of Study"
            type="date"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>University Name: {info.university}</p>
          <p>Field of Study: {info.branch}</p>
          <p>Grade: {info.grade}</p>
          <p>Date of Study: {info.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default EducationalExperience;
