import { useState } from "react";

import { CountrySelect, StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export default function CountryDropdown() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  return (
    <div className="d-grid grid-count-2 align-items-center flex-wrap gap-3">
      <div className="form-box">
        <label htmlFor="#" className="form-label mb-2 fs-14 fw-medium text-heading">Country</label>
        <CountrySelect onChange={(e) => { setCountryid(e.id) }} placeHolder="Select Country" />
      </div>
      <div className="form-box">
        <label htmlFor="#" className="form-label mb-2 fs-14 fw-medium text-heading">State</label>
        <StateSelect countryid={countryid} onChange={(e) => { setstateid(e.id) }} placeHolder="Select State" />
      </div>
    </div>
  );
}


