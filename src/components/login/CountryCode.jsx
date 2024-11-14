import { useEffect, useState } from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

export default function CountryCode() {
    const [countries, setCountries] = useState([]);
    const [selectCode, setSelectCode] = useState('+880');
    const [isShow, setIsShow] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countryCodes = data.map(item => ({
                    code: (item.idd.root?item.idd.root:'') + (item.idd.suffixes ? item.idd.suffixes[0] : '')
                }));
                setCountries(countryCodes);
            })
            .catch(error => console.error('Error fetching country data:', error));
    }, []);

    const handleChange = (country) => {
        setSelectCode(country.code);
        setIsShow(false);
        setSearch('')
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredCountries = countries.filter(country =>
        country.code.includes(search)
    );

    return (
        <div className="country-code position-relative z-1">
            <div className={`country-value cursor-pointer form-control d-flex align-items-center gap-2 ${isShow ? 'show' : ''}`} onClick={() => setIsShow(!isShow)}>
                <span>{selectCode}</span>
                {isShow ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </div>
            {isShow && (
                <div className={`country-list pt-0 overflow-auto w-100 position-absolute top-100 start-0 ${isShow ? 'show' : ''}`}>
                    <ul>
                        <li className="py-2 px-1 position-sticky top-0 start-0 w-100 z-2 bg-white">
                            <input
                                type="text"
                                className="form-control fs-12 px-2"
                                placeholder="Search.."
                                value={search}
                                onChange={handleSearchChange}
                            />
                        </li>
                        {filteredCountries.map((country, key) => (
                            <li onClick={() => handleChange(country)} key={key} className={`fs-14 fw-medium lh-base cursor-pointer ${country.code === selectCode?'selected':''}`}>
                               {country.code}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
