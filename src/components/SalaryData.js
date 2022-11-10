import axios from "axios";
import Select from "react-select";
import Toggle from "react-toggle";
import { useState, useEffect, useMemo } from "react";
import { Country, State } from "country-state-city";
import { FiSearch } from 'react-icons/fi'; 
import "react-toggle/style.css";
import Pagination from "./Pagination";

let PageSize = 30;


function SalaryData() {
  const [userSubmissionData, setUserSubmissionData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [advancedFilter, setAdvancedFilter] = useState(false);
  const [userGender, setUserGender] = useState("");
  const [userRace, setUserRace] = useState("");
  const [negotiateToggle, setNegotiateToggle] = useState(false);
  const [disabilityToggle, setDisabilityToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    axios({
      method: "get",
      url: "https://salarybandsapi.fly.dev/contributions",
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

  const currentTableData = useMemo(() => {


    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return userSubmissionData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, userSubmissionData]);

  console.log(userSubmissionData);
  

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

  const checkCountry = (countryCode) => {
    let myCountry = Country.getAllCountries().filter(
      (country) => country.isoCode === countryCode
    );
    if (myCountry.length === 0) {
      return countryCode;
    } else {
      return myCountry[0].name;
    }
  };

  return (
    <div className="wrapper">
      <div className="userSubmissionTable" id="userSubmissionTable">
        <div className="searchAndRecentDataContainer">
          <div className="searchContainer">
            <div className="iconContainer">
              <FiSearch />
            </div>
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
                      onChange={(e) => setUserGender(e.label)}
                    />
                  </div>
                  <div className="raceContainer">
                    <label htmlFor="">Race/Ethnicity</label>
                    <Select
                      options={races}
                      onChange={(raceType) => setUserRace(raceType.label)}
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
        <table onClick={() => { setAdvancedFilter(false) }}>
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
            {currentTableData
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
                if (userGender === "" || userGender === "All") {
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
                console.log(userData);
                if (userRace === "" || userRace === "All") {
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
                        <div className="bottomText">
                          {val.city}, {checkCountry(val.country)}
                        </div>
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
                        <div className="salaryNumber">${val.salary.toLocaleString()}</div>
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
        <Pagination 
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={userSubmissionData.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>

      <div className="mobileTableView" id="userSubmissionTable">
        <div className="searchAndRecentDataContainer">
          <div className="searchContainer">
            <div className="iconContainer">
              <FiSearch />
            </div>
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
                      onChange={(e) => setUserGender(e.label)}
                    />
                  </div>
                  <div className="raceContainer">
                    <label htmlFor="">Race/Ethnicity</label>
                    <Select
                      options={races}
                      onChange={(raceType) => setUserRace(raceType.label)}
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
        <table onClick={() => { setAdvancedFilter(false) }}>
          <thead>
            <tr>
              <th className="tableHeadContainer title">
                <div className="titleContainer">
                  <div>
                    <p className="tableHeadText">Title/Position</p>
                  </div>
                  <div>
                    <p className="tableHeadText">Company</p>
                  </div>
                  <div><p className="tableHeadText">YoE</p></div>
                </div>
              </th>
              <th className="company">
                <div className="tableHeadContainer">
                  <p className="tableHeadText">Gender</p>
                </div>
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
            </tr>
          </thead>
          <tbody>
            {currentTableData
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
                if (userGender === "" || userGender === "All") {
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
                console.log(userData);
                if (userRace === "" || userRace === "All") {
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
                    <td className="titleRow">
                      <div className="">
                        <div className="topText">{val.job_title}</div>
                        <div className="bottomText">
                          {val.company}
                        </div>
                        <div className="bottomText">{val.years_of_experience}</div>
                      </div>
                    </td>
                    <td>
                      <span className="genderText">{val.gender}</span>
                    </td>
                    <td>
                      <span className="raceText">{val.race}</span>
                    </td>
                    <td>
                      <div className="salaryNegotiationContainer">
                        <div className="salaryNumber">${val.salary.toLocaleString()}</div>
                        {val.negotiation_percentage ? (
                          <div className="percentIncrease">
                            <span className="increasedPercentage">
                              &#8593; {val.negotiation_percentage}%
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={userSubmissionData.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default SalaryData;
