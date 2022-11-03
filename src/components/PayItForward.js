import { useState, useEffect, useCallback } from "react";
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

  function handleInput(e) {
    const value = e.target.value;
    setPayItForward({
      ...payItForward,
      [e.target.name]: value,
    });
  }

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
          industry: props.userDe.industry,
        },
        {
          headers: {
            Authorization: tokenAccess,
          },
        }
      );
    },
    [submitInfo]
  );

  return (
    <>
      <div className="transparencyContainer">
        {!submitInfo ? (
          <>
            <div className="payItForwardTextContainer">
              <h2>Pay it foward</h2>
              <p>
                You can provide as much information as you feel comfortable
                sharing.
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

                <button type="submit">Submit</button>
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
