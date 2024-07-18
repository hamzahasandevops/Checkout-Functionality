import "../index.css";
import { useState } from "react";
import React from "react";

export const CheckoutSteper = ({ steps_config = [] }) => {
  const [currentStep, setcurrentStep] = useState(1);
  const [isComplete, setisComplete] = useState(false);

  if (!steps_config.length) {
    return <>SAFAYA</>;
  }

  const handlenext = () => {
    setcurrentStep(prvStep =>{
        if(prvStep === steps_config.length){
            setisComplete(true)
            return prvStep
        }else{
            return prvStep +1;
        }
    })
  };

 const  calculatedProgressBarsWidth = ()=>{
return ((currentStep-1)/(steps_config.length-1) * 100);
 }

const ActiveComponent = steps_config[currentStep-1].Component


  return (
    <>
      <div className="stepper">
        {steps_config.map((step, index) => {
          return (
            <div
              key={step.name}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""} `}
            >
              <div className="step_index">
                {currentStep > index + 1 || isComplete ? (
                  <span>✔️</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step_name">{step.name}</div>
            </div>
          );
        })}

        <div className="progress-bar">
            <div className="pro" style={{width :`${calculatedProgressBarsWidth()}%`}}></div>
        </div>
      </div>

      <ActiveComponent/>
      {!isComplete && (
        <button className={`${currentStep === steps_config.length ? "btn btn-outline-success" : "btn btn-outline-primary"}`} onClick={handlenext}>
          {currentStep === steps_config.length ? "Finish" : "Next"}
        
        </button>
      )}
    </>
  );
};
