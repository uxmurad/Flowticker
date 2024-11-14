import { useState } from "react";
import CountryCode from "./CountryCode";

export default function PhoneInput({ label }) {
    const [isValid, setIsValid] = useState(true);
    const [phone, setPhone] = useState('');
    const handleChange = (event) => {
        const value = event.target.value;
        // const pattern = /^[7-9][0-9]{9}$/;
        setPhone(value);
        // setIsValid(pattern.test(value));
    };
    return (
        <div className="mb-3">
            {label && <label htmlFor="#" className="form-label mb-2 fs-14 fw-medium text-heading">{label}</label>}
            <div className="d-flex align-items-center gap-2">
                <CountryCode />
                <div className="d-flex flex-column gap-2 w-100">
                    <input
                        type="text"
                        id="phone"
                        className={`form-control ${isValid ? '' : 'is-invalid'}`}
                        value={phone}
                        placeholder="1234567890"
                        onChange={handleChange}
                        pattern="[7-9]{1}[0-9]{9}"
                        title="Phone number must start with 7, 8, or 9 and be 10 digits long"
                    />
                    {/* {!isValid && <div className="invalid-feedback">Please enter a valid phone number.</div>} */}
                </div>
            </div>
        </div>
    )
}
