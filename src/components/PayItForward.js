import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Finish from "./Finish";
import Ladder from "../assets/ladder.png";

function PayItForward(props) {
  const baseURL = "https://salarybandsapi.onrender.com/contributions";

  const [submitInfo, setSubmitInfo] = useState(false);

  const [payItForward, setPayItForward] = useState({
    adviceBreak: "",
    adviceNegotiate: "",
  });

  let tokenAccess = localStorage.getItem("token");

const handleInput = useCallback((e) => {
        const value = e.target.value
        setPayItForward({
            ...payItForward, 
            [e.target.name]: value
        })
    }, [payItForward.adviceBreak, payItForward.adviceNegotiate])
    console.log(payItForward.adviceBreak)
    console.log(payItForward.adviceNegotiate)

  console.log(tokenAccess);

  const setTrue = useCallback(
    (e) => {
      e.preventDefault();
      setSubmitInfo(true);
      axios.post(
        baseURL,
        {
          company: props.userDe.company,
          country: props.userDe.country,
          state: props.userDe.state,
          city: props.userDe.city,
          job_title: props.userPosition,
          salary: props.userDe.salary,
          period: props.userWorkPer,
          years_of_experience: props.userDe.years,
          work_arrangement: props.userWorkArr,
          negotiate_check: props.userNegoCheck,
          negotiation_percentage: props.userDe.negotiatePercent,
          gender: props.userG,
          race: props.userR,
          disability_check: "",
          disability: props.userD,
          advice_break: payItForward.adviceBreak,
          advice_negotiate: payItForward.adviceNegotiate,
          industry: props.userI,
         }, { headers: {
            'Authorization': tokenAccess
        }})
        
    }, [submitInfo, payItForward])

  return (
    <>
      <div className="transparencyContainer">
        {!submitInfo ? (
          <>
            <div className="payItForwardTextContainer">
              <h2>Pay it foward <span className="optionalText">(optional)</span></h2>
              <p>
                By sharing your personal advice and tips, you can help someone set their own salary expectations and raise their negotiating power. You can provide as much or as little information as you feel fit.
              </p>
            </div>

            <div className="payItForwardFormContainer">
              <form onSubmit={setTrue} action="#">
                <div className="adviceContainer">
                  <label htmlFor="adviceBreak">
                    What advice can you share with others looking to break into
                    your field or role?
                  </label>
                  <textarea
                    onInput={handleInput}
                    name="adviceBreak"
                    value={payItForward.adviceBreak}
                  />
                </div>

                <div className="negotiateContainer">
                  <label htmlFor="adviceNegotiate">
                    What advice can you share about negotiating compensation in
                    tech?
                  </label>
                  <textarea
                    onInput={handleInput}
                    name="adviceNegotiate"
                    value={payItForward.adviceNegotiate}
                  />
                </div>

                <div className="nextAndBackContainer">
                    <div className="backContainer">
                      <button className="backButton">Back</button>
                    </div>
                    <div className="nextContainer">
                      <button type="submit" className="verifyButton">
                        Submit
                      </button>
                    </div>
                </div>
              </form>
            </div>
          </>
        ) : (
          <Finish />
        )}
      </div>
      <div className="infoCard">
        <div className="infoImgContainer">
          <img src={Ladder} alt="" />
        </div>
        <div className="infoCardTextContainer">
          <h3>Help other people navigate tech</h3>
          <p>
            {" "}
            We are dedicated to helping our users make informed decisions to set
            their own salary expectations and raise their negotiating power.
          </p>
        </div>
      </div>
    </>
  );
}

export default PayItForward;
