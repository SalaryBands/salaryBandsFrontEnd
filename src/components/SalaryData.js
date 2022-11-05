import axios from "axios";
import Select from "react-select";
import Toggle from "react-toggle";
import { useState, useEffect } from "react";
import "react-toggle/style.css";

function SalaryData() {
  const [userSubmissionData, setUserSubmissionData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [advancedFilter, setAdvancedFilter] = useState(false);
  const [userGender, setUserGender] = useState("");
  const [userRace, setUserRace] = useState("");
  const [negotiateToggle, setNegotiateToggle] = useState(false);
  const [disabilityToggle, setDisabilityToggle] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://salarybandsapi.onrender.com/contributions",
    }).then((apiData) => {
      setUserSubmissionData(apiData.data);
    });
  }, []);

  const handleChange = function (e) {
    setSearchTerm(e.target.value);
  };

  const handleClick = function () {
    setAdvancedFilter(!advancedFilter);
  };

  const handleNegotiate = function (e) {
    setNegotiateToggle(e.target.checked);
  };

  const handleDisability = function (e) {
    setDisabilityToggle(e.target.checked);
  };

  const genders = [
    { value: "all", label: "All" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "transgender", label: "Transgender" },
    { value: "nonBinary", label: "Non Binary" },
    { value: "prefer", label: "Prefer not to say" },
  ];

  const races = [
    { value: "all", label: "All" },
    { value: "caucasian", label: "Caucasian" },
    { value: "native", label: "Native American or Alaska Native" },
    { value: "black", label: "Black or African American" },
    { value: "asian", label: "Asian" },
    { value: "latino", label: "Hispanic or Latino" },
    { value: "two", label: "Two or more races" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="wrapper">
      <div className="userSubmissionTable" id="userSubmissionTable">
        <div className="searchAndRecentDataContainer">
          <div className="searchContainer">
            <label htmlFor="search"></label>
            <input
              className="searchFilter"
              type="text"
              name="search"
              placeholder="Search title, company, city, ect"
              value={searchTerm}
              onChange={handleChange}
            />
            <div className="advancedFilterContainer">
              <button onClick={handleClick} className="advancedFilter">
                Filter
              </button>
              {advancedFilter ? (
                <div className="filterOptionsContainer">
                  <div className="submissionsContainer">
                    <p>Salary</p>
                    <div className="salaryFilters">
                      <label>
                        <Toggle
                          defaultChecked={negotiateToggle}
                          icons={false}
                          onChange={handleNegotiate}
                        />
                      </label>
                      <span className="toggleSpan">Negotiated</span>
                    </div>
                    <div className="salaryFilters">
                      <label>
                        <Toggle
                          defaultChecked={disabilityToggle}
                          icons={false}
                          onChange={handleDisability}
                        />
                      </label>
                      <span className="toggleSpan">Disabled</span>
                    </div>
                  </div>
                  <div className="genderContainer">
                    <label htmlFor="">Gender</label>
                    <Select
                      options={genders}
                      onChange={(e) => setUserGender(e.value)}
                    />
                  </div>
                  <div className="raceContainer">
                    <label htmlFor="">Race/Ethnicity</label>
                    <Select
                      options={races}
                      onChange={(raceType) => setUserRace(raceType.value)}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="recentData">
            <div className="recentDataTextContainer">
              <h3 className="recentDataText">Recent Data</h3>
              <p>
                <span className="totalSubmissions">
                  {userSubmissionData.length} total submissions
                </span>
              </p>
            </div>
            <div className="paidWorthContainer">
              <p className="paidWorth">
                SalaryBands is here to help you figure out how to get paid what
                you're worth.
              </p>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th className="tableHeadContainer title">
                <div>
                  <div>
                    <p className="tableHeadText">Title/Position</p>
                  </div>
                  <div>
                    <p className="tableHeadText">Location</p>
                  </div>
                </div>
              </th>
              <th className="company">
                <div className="tableHeadContainer">
                  <div>
                    <p className="tableHeadText">Company</p>
                  </div>
                  <div>
                    <p className="tableHeadText">Industry</p>
                  </div>
                </div>
              </th>
              <th className="tableHeadContainer years">
                <p className="tableHeadText">YoE</p>
              </th>
              <th className="tableHeadContainer gender">
                <p className="tableHeadText">Gender</p>
              </th>
              <th className="tableHeadContainer race">
                <p className="tableHeadText">Race</p>
              </th>
              <th className="compensation">
                <div className="tableHeadContainer">
                  <div>
                    <p className="tableHeadText">Compensation</p>
                  </div>
                  <div>
                    <p className="tableHeadText">Base, % Negotiated</p>
                  </div>
                </div>
              </th>
              <th className="tableHeadContainer tags">
                <p className="tableHeadText">Tags</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {userSubmissionData
              .filter(
                (userData) =>
                  userData.job_title
                    .toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  userData.company
                    .toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  userData.country
                    .toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  userData.work_arrangement
                    .toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
              )
              .filter((userData) => {
                if (userGender === "" || userGender === "all") {
                  return true;
                } else {
                  console.log(userGender);
                  return (
                    userData.gender
                      .toString()
                      .toLowerCase()
                      .includes(userGender.toLowerCase()) &&
                    userData.gender.length === userGender.length
                  );
                }
              })
              .filter((userData) => {
                if (userRace === "" || userRace === "all") {
                  return true;
                } else {
                  return (
                    userData.race
                      .toString()
                      .toLowerCase()
                      .includes(userRace.toLowerCase()) &&
                    userData.race.length === userRace.length
                  );
                }
              })
              .filter((userData) => {
                if (negotiateToggle === false) {
                  return true;
                } else {
                  return !userData.negotiate_check === negotiateToggle;
                }
              })
              .filter((userData) => {
                if (disabilityToggle === false) {
                  return true;
                } else {
                  console.log(userData);
                  return userData.disability.length >= 1;
                }
              })
              .reverse()
              .map((val, key) => {
                return (
                  <tr className="tableRow" key={key}>
                    <td>
                      <div className="">
                        <div className="topText">{val.job_title}</div>
                        <div className="bottomText">{val.country}</div>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <div className="topText">{val.company}</div>
                        <div className="bottomText">{val.industry}</div>
                      </div>
                    </td>
                    <td>{val.years_of_experience}</td>
                    <td>
                      <span className="genderText">{val.gender}</span>
                    </td>
                    <td>
                      <span className="raceText">{val.race}</span>
                    </td>
                    <td>
                      <div className="salaryNegotiationContainer">
                        <div className="salaryNumber">${val.salary}</div>
                        {val.negotiation_percentage ? (
                          <div className="percentIncrease">
                            <span className="increasedPercentage">
                              &#8593; {val.negotiation_percentage}%
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </td>
                    <td>
                      <div className="tagsContainer">
                        {!val.negotiate_check ? (
                          <div className="negotiateContainer">
                            <span className="negotiateText">
                              Negotiated Salary
                            </span>
                          </div>
                        ) : null}
                        <div className="workArrangementContainer">
                          <span className="workArr">
                            {val.work_arrangement}
                          </span>
                        </div>
                        {val.disability.map((userDisability) => {
                          console.log(userDisability);
                          return (
                            <div className="disabilityContainer">
                              <span className="disabilityText">
                                {userDisability}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalaryData;
