import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import PromoteTransparency from "./PromoteTransparency";
import House from "../assets/house.png";
import { Country, State, City } from "country-state-city";
import UploadDetails from './UploadDetails';
import UserPathway from "../pages/UserPathway";

function ProfessionalDetails() {
  const [verifyDetails, setVerifyDetails] = useState(false);
  const [userJobTitle, setUserJobTitle] = useState({});
  const [userIndustry, setUserIndustry] = useState({});
  const [verifyData, setVerifyData] = useState(true)
  const [type, setType] = useState({});
  const [didNegotiate, setDidNegotiate] = useState(true);
  const [workArrangement, setWorkArrangement] = useState({});
  const [percentNumber, setPercentNumber] = useState(0);
  const [professionalDetails, setProfessionalDetails] = useState({
    company: "",
    country: "",
    state: "",
    city: "",
    salary: 0,
    years: 0,
    negotiate: "",
    negotiatePercent: 0,
  });
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();

  const availableState = State.getStatesOfCountry(selectedCountry);
  const availableCities = City.getCitiesOfState(selectedCountry, selectedState);

  const jobTitles = [
    { value: "Software Engineer", label: "Software Engineer" },
    { value: "Mobile Developer", label: "Mobile Developer" },
    { value: "Frontend Engineer", label: "Frontend Engineer" },
    { value: "Backend Engineer", label: "Backend Engineer" },
    { value: "Full-Stack Engineer", label: "Full-Stack Engineer" },
    { value: "Software Architect", label: "Software Architect" },
    { value: "Security Engineer", label: "Security Engineer" },
    { value: "Machine Learning Engineer", label: "Machine Learning Engineer" },
    { value: "Data Engineer", label: "Data Engineer" },
    { value: "DevOps", label: "DevOps" },
    { value: "Engineering Manager", label: "Engineering Manager" },
    { value: "QA Engineer", label: "QA Engineer" },
    { value: "Data Scientist", label: "Data Scientist" },
    { value: "Designer", label: "Designer" },
    { value: "UI/UX Designer", label: "UI/UX Designer" },
    { value: "User Research", label: "User Research" },
    { value: "Visual Designer", label: "Visual Designer" },
    { value: "Creative Director", label: "Creative Director" },
    { value: "Design Manager", label: "Design Manager" },
    { value: "Graphic Designer", label: "Graphic Designer" },
    { value: "Product Designer", label: "Product Designer" },
    { value: "Product Manager", label: "Product Manager" },
    { value: "Operations", label: "Operations" },
    { value: "Finance/Accounting", label: "Finance/Accounting" },
    { value: "HR", label: "H.R" },
    { value: "Office Manager", label: "Office Manager" },
    { value: "Recruiter", label: "Recruiter" },
    { value: "Customer Service", label: "Customer Service" },
    { value: "Chief of Staff", label: "Chief of Staff" },
    { value: "Sales", label: "Sales" },
    { value: "Business Development", label: "Business Development" },
    { value: "SDR", label: "Sales Development Representative" },
    { value: "AE", label: "Account Executive" },
    { value: "BD Manager", label: "BD Manager" },
    { value: "AM", label: "Account Manager" },
  ];

  const industry = [
    { value: "AdTech", label: "AdTech" },
    { value: "Aerospace", label: "Aerospace" },
    { value: "Agency", label: "Agency" },
    { value: "Agriculture", label: "Agriculture" },
    { value: "Analytics", label: "Analytics" },
    { value: "Appliances", label: "Appliances" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Automotive", label: "Automotive" },
    { value: "Beauty", label: "Beauty" },
    { value: "Biotech", label: "Biotech" },
    { value: "Chemical", label: "Chemical" },
    { value: "Cloud", label: "Cloud" },
    { value: "Consulting", label: "Consulting" },
    { value: "Consumer Web", label: "Consumer Web" },
    { value: "Cryptocurrency", label: "Cryptocurrency" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Database", label: "Database" },
    { value: "Design", label: "Design" },
    { value: "Digital Media", label: "Digital Media" },
    { value: "eCommerce", label: "eCommerce" },
    { value: "EdTech", label: "EdTech" },
    { value: "Energy", label: "Energy" },
    { value: "Enterprise We", label: "Enterprise Web" },
    { value: "Events", label: "Events" },
    { value: "Fashion", label: "Fashion" },
    { value: "Financial Services", label: "Financial Services" },
    { value: "FinTech", label: "FinTech" },
    { value: "Fitness", label: "Fitness" },
    { value: "Food", label: "Food" },
    { value: "Gaming", label: "Gaming" },
    { value: "Greentech", label: "Greentech" },
    { value: "Hardware", label: "Hardware" },
    { value: "Healthtech", label: "Healthtech" },
    { value: "Hospitality", label: "Hospitality" },
    { value: "HR Tech", label: "HR Tech" },
    { value: "Information Technology", label: "Information Technology" },
    { value: "Insurance", label: "Insurance" },
    { value: "Legal Tech", label: "Legal Tech" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Marketing Tech", label: "Marketing Tech" },
    { value: "Mobile", label: "Mobile" },
    { value: "Music", label: "Music" },
    { value: "News & Entertainment", label: "News & Entertainment" },
    { value: "NFT", label: "NFT" },
    { value: "Payments", label: "Payments" },
    { value: "Pet", label: "Pet" },
    { value: "Pharmaceutical", label: "Pharmaceutical" },
    { value: "Productivity", label: "Productivity" },
    { value: "Professional Services", label: "Professional Services" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Retail", label: "Retail" },
    { value: "Robotics", label: "Robotics" },
    { value: "Sales", label: "Sales" },
    { value: "Security", label: "Security" },
    { value: "Social Impact", label: "Social Impact" },
    { value: "Social Media", label: "Social Media" },
    { value: "Software", label: "Software" },
    { value: "Sports", label: "Sports" },
    { value: "Transportation", label: "Transportation" },
    { value: "Travel", label: "Travel" },
    { value: "Virtual Reality", label: "Virtual Reality" },
    { value: "Web3", label: "Web3" },
    { value: "Other", label: "Other" },
  ];

  const types = [
    { value: "annual", label: "Annual" },
    { value: "monthly", label: "Monthly" },
    { value: "biweek", label: "Bi-weekly" },
  ];

  const workArr = [
    { value: "office", label: "In office" },
    { value: "hybrid", label: "Hybrid" },
    { value: "remote", label: "Remote" },
  ];

  const handleVerifyDetails = function (e) {
    if (professionalDetails.company.length <=0 ) {
      setProfessionalDetails({
        ...professionalDetails,
        company : '--'
      })
    }
    e.preventDefault();
    setVerifyDetails(true)
  };

  function handleInput(e) {
    const value = e.target.value;
    setProfessionalDetails({
      ...professionalDetails,
      [e.target.name]: value,
    });
  }

  useEffect(() => {
    if (userIndustry.length >= 1 && selectedCountry && professionalDetails.salary && professionalDetails.years.length >= 1 && userJobTitle.length >= 1 && type.length >= 1 && workArrangement.length >= 1) {
      setVerifyData(false)
    }
  }, [selectedCountry, professionalDetails.salary, professionalDetails.years, userJobTitle, type, workArrangement, userIndustry])


  return (
    <div className="professionalDetailsCardandImageContainer">
      {!verifyDetails ?
        <>
          <div className="professionalDetailsContainer">
            <div className="tellUsCard">
              <div className="detailsCard">
                <div className="detailsTextContainer">
                  <h2>Tell us about your role</h2>
                  <p>Share your professional details.</p>
                </div>
                <div className="professionalDetails">
                  <form onSubmit={handleVerifyDetails} action="#">
                    <div className="companyAndLocationContainer">
                      <div className="companyContainer">
                        <label htmlFor="company">
                          What company do you work at?{" "}
                          <span className="optionalText">(Optional)</span>
                        </label>
                        <input
                          onInput={handleInput}
                          type="text"
                          name="company"
                          placeholder="Company Name"
                        />
                      </div>

                      <div className="locationContainer">
                        <label htmlFor="industry">
                          What industry do you work in?
                        </label>
                        <CreatableSelect
                          options={industry}
                          onChange={(usersIndustry) =>
                            setUserIndustry(usersIndustry.label)
                          }
                          type="text"
                          name="industry"
                          placeholder="Type or Select an Industry"
                          required
                        />
                      </div>
                    </div>
                    <div className="titleAndLocationContainer">
                      <div className="locationContainer countryStateCityContainer largerWidth">
                        <label htmlFor="country" className="locationSelect">Where do you work?</label>
                        <select
                          className="locationInputs"
                          placeholder="Choose Country"
                          name="country"
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          onInput={handleInput}
                        >
                          <option><p className="locationInputText">Choose Country</p></option>
                          {Country.getAllCountries().map((value, key) => {
                            return (
                              <option value={value.isoCode} key={key}>
                                {value.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="locationContainer countryStateCityContainer middle">
                        <label htmlFor="state" className="locationSelect stateLabel">Select your state</label>
                        <select
                          className="locationInputs"
                          placeholder="State"
                          name="state"
                          value={selectedState}
                          onChange={(e) => setSelectedState(e.target.value)}
                          onInput={handleInput}
                        >
                          <option>Choose State</option>
                          {availableState.map((e, key) => {
                            return (
                              <option value={e.isoCode} key={key}>
                                {e.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="locationContainer countryStateCityContainer">
                        <label htmlFor="city" className="locationSelect stateLabel">Select your city</label>
                        <select
                          className="locationInputs"
                          placeholder="City"
                          name="city"
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          onInput={handleInput}
                        >
                          <option>Choose City</option>
                          {availableCities.map((e, key) => {
                            return (
                              <option value={e.name} key={key}>
                                {e.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="titleAndLocationContainer">
                      <div className="jobTitleContainer">
                        <label htmlFor="title" className="locationSelect">What is your job title?</label>
                        <CreatableSelect
                          options={jobTitles}
                          onChange={(userTitle) =>
                            setUserJobTitle(userTitle.label)
                          }
                          type="text"
                          name="title"
                          placeholder="Type or Select a Title"
                        />
                      </div>
                    </div>

                    <div className="salaryQuestionContainer">
                      <div className="salaryContainer">
                        <label htmlFor="salary">How much do you make?</label>
                        <input
                          onInput={handleInput}
                          type="number"
                          name="salary"
                          placeholder="$00.00"
                        />
                      </div>
                      <div className="typeContainer">
                        <label htmlFor="">Type</label>
                        <Select
                          options={types}
                          onChange={(salaryType) => setType(salaryType.value)}
                        />
                      </div>
                    </div>

                    <div className="yearsAndWorkContainer">
                      <div className="yearsContainer">
                        <label htmlFor="years">Years of Experience?</label>
                        <input
                          onInput={handleInput}
                          type="text"
                          name="years"
                          placeholder="YoE Total or at Company"
                        />
                      </div>
                      <div className="workContainer">
                        <label htmlFor="arrangement">Work Arrangement</label>
                        <Select
                          options={workArr}
                          onChange={(arrangement) =>
                            setWorkArrangement(arrangement.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="negotiateContainer">
                      <div className="negotiateQuestionContainer">
                        <label htmlFor="negotiate">
                          Did you negotiate for this salary?
                        </label>
                        <div className="yesOrNoContainer">
                          <div className="yesContainer">
                            <input
                              onChange={() => setDidNegotiate(false)}
                              type="radio"
                              name="negotiate"
                              id="true"
                              value={didNegotiate}
                            />
                            <label htmlFor="true" value>
                              Yes
                            </label>
                          </div>
                          <div className="noContainer">
                            <input
                              onChange={() => setDidNegotiate(true)}
                              type="radio"
                              name="negotiate"
                              id="false"
                              value="false"
                            />
                            <label htmlFor="false">No</label>
                          </div>
                        </div>
                      </div>
                      <div className="negotiatePercentContainer">
                        <label htmlFor="negotiatePercent">
                          If yes, how much more?
                        </label>
                        <input
                          onInput={handleInput}
                          type="text"
                          name="negotiatePercent"
                          placeholder="2%"
                          disabled={didNegotiate}
                        />
                      </div>
                    </div>
                    <div className="nextAndBackContainer">
                      {/* <div className="backContainer">
                        <button type="submit" className="backButton">Back</button>
                      </div> */}
                      <div className="nextContainer">
                        <button type="submit" className="verifyButton" disabled={verifyData}>
                          Next Step
                        </button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="infoCard">
                    <div className="infoImgContainer">
                      <img src={House} alt="" />
                    </div>
                    <div className="infoCardTextContainer">
                      <h3>Figure out what you're worth and how to get paid what you're worth</h3>
                      <p> We want to help people gain clarity on what they should expect to be paid at their job title and location, thereby creating a better market for both employees and employers.</p>
                    </div>
                  </div>
                </>

                : 
                <PromoteTransparency 
                  userProfessionalDetails={professionalDetails}
                  userWorkType={type}
                  userWorkArrangement={workArrangement}
                  userPercentNumber={percentNumber}
                  userNegotiated={didNegotiate}
                  usersJobTitle={userJobTitle}
                  usersIndustry={userIndustry}
                />


              }
              </div>
  )
}

export default ProfessionalDetails;
