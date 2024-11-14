import { useState, useEffect } from "react";

export default  function FormBox({className="", label, placeholder, inputClass="", value= "", type="text" }) {
    const [inValue, setInValue] = useState(value);
    useEffect(() => {
        setInValue(value);
    }, [value]);
    const handleChangeValue = (event) => {
        setInValue(event.target.value);
    };

    return (
        <div className={`form-box ${className}`}>
            {label && <label htmlFor="#" className="form-label mb-2 fs-14 fw-medium text-heading">{label}</label>}
            <input
                className={`form-control ${inputClass}`}
                type={type}
                placeholder={placeholder}
                value={inValue}
                onChange={handleChangeValue}
            />
        </div>
    );
}
