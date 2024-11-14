import { LiaAngleLeftSolid } from "react-icons/lia";
import FormBox from "../FormBox";
import { Link } from "react-router-dom";
import PhoneInput from "./PhoneInput";
import CountryDropdown from "./CountryDropdown";
import ImageUploadPreview from "../ImageUploadPreview";

export default function Profile({ className, onClick }) {    
    return (
        <div className={`login-otp align-items-center justify-content-end p-3 p-md-4 position-fixed top-0 start-0 w-100 z-2 bg-black bg-opacity-20 h-100 ${className}`}>
            <div className="login-otp-wrap bg-white py-4 px-3 rounded-4 h-100">
                <div className="login-otp-scroll h-100 px-2 d-flex flex-column overflow-auto">
                    <div className="login-popup-header position-sticky top-0 start-0 z-2 w-100 bg-white d-flex align-items-center gap-2 mb-3 pb-md-1">
                        <button className="login-close text-body d-flex align-items-center justify-content-center rounded-pill border-0 p-0" onClick={onClick}><LiaAngleLeftSolid /></button>
                        <h4 className="mb-0">Complete my Profile </h4>
                    </div>
                    <div className="d-grid grid-count-2 align-items-center flex-wrap gap-3 mb-3">
                        <FormBox type="text" label="First Name" placeholder="Type here" />
                        <FormBox type="text" label="Last Name" placeholder="Type here" />
                    </div>
                    <PhoneInput label="Phone" />
                    <FormBox className="mb-3" type="email" label="Email" placeholder="Type here" />
                    <div className="mb-3">
                        <CountryDropdown />
                    </div>
                    <FormBox className="mb-3" type="text" label="Address Line 1" placeholder="Type here" />
                    <FormBox className="mb-3" type="text" label="Address Line 2" placeholder="Type here" />
                    <ImageUploadPreview className="mb-4" id="profile_upload" />
                    <div className="d-flex flex-column gap-2 mt-auto">
                        <Link to="/dashboard" className="btn bg-transparent w-100 fs-14 mb-1">Skip</Link>
                        <Link to="/dashboard" className="btn bg-primary w-100 fs-14">Save Information</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
