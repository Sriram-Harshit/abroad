import { useState, useEffect } from "react";
import collegesData from "../collegesData.json"; // Correctly importing the data
import "./study.css";

const Study = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fieldOfStudy: "",
    countries: "",
    aptitudeExamType: "",
    englishExamType: "",
  });

  // State to manage filtered colleges
  const [filteredColleges, setFilteredColleges] = useState([]);

  // State to manage unique countries and fields of study
  const [countriesList, setCountriesList] = useState([]);
  const [fieldsOfStudyList, setFieldsOfStudyList] = useState([]);

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Filter colleges based on field of study, country, exam type
  const filterColleges = () => {
    return collegesData.filter((college) => {
      const meetsFieldOfStudy = formData.fieldOfStudy
        ? college.fieldOfStudy === formData.fieldOfStudy
        : true;
      const meetsCountry = formData.countries
        ? college.location
            .toLowerCase()
            .includes(formData.countries.toLowerCase())
        : true;

      // Filter by Aptitude Tests (GRE, GMAT)
      const meetsAptitudeExamType = formData.aptitudeExamType
        ? college.aptitudeTests[`${formData.aptitudeExamType}Required`] === true
        : true;

      // Filter by English Tests (TOEFL, IELTS, PTE)
      const meetsEnglishExamType = formData.englishExamType
        ? college.englishTests[`${formData.englishExamType}Required`] === true
        : true;

      return (
        meetsFieldOfStudy &&
        meetsCountry &&
        meetsAptitudeExamType &&
        meetsEnglishExamType
      );
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredColleges(filterColleges());
  };

  // Extract unique countries and fields of study from the colleges data
  useEffect(() => {
    const uniqueCountries = [
      ...new Set(
        collegesData.map((college) => {
          const locationParts = college.location.split(", ");
          return locationParts[1]; // Extract the country from the location
        })
      ),
    ];
    setCountriesList(uniqueCountries);

    const uniqueFieldsOfStudy = [
      ...new Set(collegesData.map((college) => college.fieldOfStudy)),
    ];
    setFieldsOfStudyList(uniqueFieldsOfStudy);
  }, []);

  return (
    <div className="study-container">
      <form id="study-form" onSubmit={handleSubmit} className="study-form">
        <div className="form-group">
          <label htmlFor="fieldOfStudy">Field of Study:</label>
          <select
            id="fieldOfStudy"
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleChange}
          >
            <option value="">-- Select Field of Study --</option>
            {fieldsOfStudyList.map((field, index) => (
              <option key={index} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="countries">Countries:</label>
          <select
            id="countries"
            name="countries"
            value={formData.countries}
            onChange={handleChange}
          >
            <option value="">-- Select Country --</option>
            {countriesList.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Aptitude Exam Filters */}
        <div className="form-group">
          <label htmlFor="aptitudeExamType">Aptitude Exam Type:</label>
          <select
            id="aptitudeExamType"
            name="aptitudeExamType"
            value={formData.aptitudeExamType}
            onChange={handleChange}
          >
            <option value="">-- Select Aptitude Exam --</option>
            <option value="GRE">GRE</option>
            <option value="GMAT">GMAT</option>
          </select>
        </div>

        {/* English Exam Filters */}
        <div className="form-group">
          <label htmlFor="englishExamType">English Exam Type:</label>
          <select
            id="englishExamType"
            name="englishExamType"
            value={formData.englishExamType}
            onChange={handleChange}
          >
            <option value="">-- Select English Exam --</option>
            <option value="TOEFL">TOEFL</option>
            <option value="IELTS">IELTS</option>
            <option value="PTE">PTE</option>
          </select>
        </div>

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {filteredColleges.length > 0 && (
        <div className="results-container">
          <h3>Search Results:</h3>
          <ul>
            {filteredColleges.map((college, index) => (
              <li key={index} className="college-item">
                <h4>{college.collegeName}</h4>
                <p>
                  <strong>Location:</strong> {college.location}
                </p>
                <p>
                  <strong>Tuition Fee:</strong> {college.tuitionFee}{" "}
                  {college.currency}
                </p>
                <p>
                  <strong>Rank:</strong> QS Ranking:{" "}
                  {college.rankings.qsRanking}, Regional Ranking:{" "}
                  {college.rankings.regionalRanking}
                </p>
                <p>
                  <strong>Scholarships Available:</strong>{" "}
                  {college.scholarshipsAvailable ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Application Deadline:</strong>{" "}
                  {college.applicationDeadline}
                </p>
                <p>
                  <strong>Facilities:</strong> {college.facilities.join(", ")}
                </p>
                <p>
                  <strong>Internship Opportunities:</strong>{" "}
                  {college.internshipOpportunities ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Job Placement Rate:</strong>{" "}
                  {college.jobPlacementRate}%
                </p>
                <p>
                  <strong>Study Abroad Opportunities:</strong>{" "}
                  {college.studyAbroadOpportunities ? "Yes" : "No"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Study;
