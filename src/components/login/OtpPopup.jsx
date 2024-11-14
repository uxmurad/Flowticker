import { LiaAngleLeftSolid} from "react-icons/lia";
import FormBox from "../FormBox";

export default function OtpPopup({className, onClick, clickProfile}) {
  return (
    <div className={`login-otp align-items-center justify-content-center p-3 position-fixed top-0 start-0 w-100 z-2 bg-black bg-opacity-20 h-100 ${className}`}>
      <div className="login-otp-wrap bg-white p-3 p-md-4 rounded-4">
        <div className="login-popup-header d-flex align-items-center gap-2 mb-3 pb-md-1">
          <button className="login-close text-body d-flex align-items-center justify-content-center rounded-pill border-0 p-0" onClick={onClick}><LiaAngleLeftSolid /></button>
          <h4 className="mb-0">User Validation </h4>
        </div>
        <FormBox className="mb-3" type="tel" label="Enter the code what we have send in your Email" placeholder="Type here" />
        <button onClick={clickProfile} className="btn bg-primary w-100 fs-14">Verify code</button>
      </div>
    </div>
  )
}
