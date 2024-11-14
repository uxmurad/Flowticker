
import { Col, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormBox from '../components/FormBox';
import PhoneInput from '../components/login/PhoneInput';
import CountryDropdown from '../components/login/CountryDropdown';
import profilebanner from "../assets/img/profile-banner.png"
import uploadicon from "../assets/img/profile-banner-icon.png"
import profileimg from "../assets/img/profile-img.png"
import { Link } from 'react-router-dom';

import { LiaAngleLeftSolid } from 'react-icons/lia';
import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { CiEdit } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import Api from "../api/api.js";

const options = [
  { value: 'CDS (INR)', label: 'CDS (INR)' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function Profile() {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (options) => {
    setSelectedOptions(options);
  };
  const [addBroker, setAddBroker] = useState(false);
  const tablevalue = [
    {
      name: "Lovafrique.Shop",
      exchanges: "Exchanges",
      info: "Info"
    },
    {
      name: "Lovafrique.Shop",
      exchanges: "Exchanges",
      info: "Info"
    },
    {
      name: "Lovafrique.Shop",
      exchanges: "Exchanges",
      info: "Info"
    },
    {
      name: "Lovafrique.Shop",
      exchanges: "Exchanges",
      info: "Info"
    }
  ]

  let [user, setUser]=useState(null)

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      let res = await Api.profile();
      setUser(res?.data[0]);
      console.log(res?.data[0]);
    } catch (error) {
      alert("Error while pending tasks");
    }
  }

  return (
    <>
      <div className='dashboard-wrap profile'>
        <Tabs
          defaultActiveKey="my_profile"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="my_profile" title="My Profile">
            <Row>
              <Col xs={12} lg={6} className='mb-4 mb-lg-0' >
                <div className="profile-details">
                  <div className='position-relative z-0'>
                    <div className='position-relative z-0'>
                      <div className="image"><img className='w-100' src={profilebanner} alt="" /></div>
                      <label htmlFor='cover_upload' className=" d-flex justify-content-center align-items-center upload-banner position-absolute z-1">
                        <input type="file" className='d-none' id='cover_upload' />
                        <img src={uploadicon} alt="" />
                      </label>
                    </div>
                    <div className='position-absolute z-2 start-50 translate-middle profile-area'>
                      <div className="profile-img "><img src={profileimg} alt="" /></div>
                      <a >
                        <label htmlFor='profile_img' className="profile-edit start-50 translate-middle bg-primary  d-flex justify-content-center align-items-center position-absolute z-3">
                          <input type="file" className='d-none' id='profile_img' />
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99999 3.99996L12 5.99996M8.66666 13.3333H14M3.33332 10.6666L2.66666 13.3333L5.33332 12.6666L13.0573 4.94263C13.3073 4.69259 13.4477 4.35351 13.4477 3.99996C13.4477 3.64641 13.3073 3.30733 13.0573 3.05729L12.9427 2.94263C12.6926 2.69267 12.3535 2.55225 12 2.55225C11.6464 2.55225 11.3074 2.69267 11.0573 2.94263L3.33332 10.6666Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </label>
                      </a>
                    </div>
                  </div>
                  <div className="profile-history">
                    <div className="form-item d-lg-flex gap-3 mb-2 pb-1 w-100">
                      <FormBox className='w-100' label="Name" placeholder={user?.first_name+" "+user?.last_name} />
                      <FormBox className='w-100' label="Email" placeholder={user?.email} />
                    </div>
                    <div className="form-item  mb-2 pb-1">
                      <PhoneInput />
                    </div>
                    <div className="form-item  mb-2 pb-1">
                      <CountryDropdown />
                    </div>
                    <div className="line "></div>
                    <p className='mt-2 mb-2 fs-6 fw-medium invoice'>Information for invoice </p>
                    <div className="form-item d-lg-flex gap-3 ">
                      <FormBox className='w-100' label="GST number" placeholder="Bangladesh" />
                      <FormBox className='w-100' label="Pan number" placeholder="Bangladesh" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} >
                <div className="profile-social">
                  <p className='title fw-medium mb-3'>Social Networks</p>
                  <div className="social">
                    <FormBox className='mb-3' label="Facebook" placeholder="facebook.com/" />
                    <FormBox className='mb-3' label="Twitter" placeholder="twitter.com/" />
                    <FormBox className='mb-3' label="Instagram" placeholder="instagram.com/" />
                    <FormBox className='mb-3' label="Linkdin" placeholder="Linkdin.com/" />
                  </div>
                  <button className='btn bg-primary fw-medium'>Save</button>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="subscriptions" title="Subscriptions">
            Tab content for Profile
          </Tab>
          <Tab eventKey="Broker" title="Broker" >
            <div className="broken-area">
              <div className="broken-heading mb-3 d-flex align-items-center gap-3 gap-md-0 justify-content-between">
                <div className='input-item position-relative'>
                  <input className='form-control border-0 fz-14 fw-normal' type="text" name="" id="" placeholder='Search' />
                  <div className='position-absolute lh-1 ms-2 ps-1 position-absolute top-50 translate-middle-y'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.75 15.75L12.4927 12.4927M12.4927 12.4927C13.0499 11.9356 13.4919 11.2741 13.7934 10.5461C14.0949 9.81816 14.2501 9.03792 14.2501 8.24997C14.2501 7.46202 14.0949 6.68178 13.7934 5.95381C13.4919 5.22584 13.0499 4.56439 12.4927 4.00722C11.9356 3.45006 11.2741 3.00809 10.5461 2.70655C9.81816 2.40502 9.03792 2.24982 8.24997 2.24982C7.46202 2.24982 6.68178 2.40502 5.95381 2.70655C5.22584 3.00809 4.56439 3.45006 4.00722 4.00722C2.88197 5.13247 2.24982 6.65863 2.24982 8.24997C2.24982 9.84131 2.88197 11.3675 4.00722 12.4927C5.13247 13.618 6.65863 14.2501 8.24997 14.2501C9.84131 14.2501 11.3675 13.618 12.4927 12.4927Z" stroke="#8E8F95" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.75 15.75L12.4927 12.4927M12.4927 12.4927C13.0499 11.9356 13.4919 11.2741 13.7934 10.5461C14.0949 9.81816 14.2501 9.03792 14.2501 8.24997C14.2501 7.46202 14.0949 6.68178 13.7934 5.95381C13.4919 5.22584 13.0499 4.56439 12.4927 4.00722C11.9356 3.45006 11.2741 3.00809 10.5461 2.70655C9.81816 2.40502 9.03792 2.24982 8.24997 2.24982C7.46202 2.24982 6.68178 2.40502 5.95381 2.70655C5.22584 3.00809 4.56439 3.45006 4.00722 4.00722C2.88197 5.13247 2.24982 6.65863 2.24982 8.24997C2.24982 9.84131 2.88197 11.3675 4.00722 12.4927C5.13247 13.618 6.65863 14.2501 8.24997 14.2501C9.84131 14.2501 11.3675 13.618 12.4927 12.4927Z" stroke="black" strokeOpacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <button className="filter position-absolute top-50 translate-middle-y end-0 me-1 p-0 border-0 bg-secondary text-white">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.88924 1.3125H11.1107C11.4998 1.3125 11.8323 1.3125 12.0983 1.34575C12.3801 1.38133 12.6525 1.46125 12.8765 1.67125C13.104 1.88533 13.1944 2.15192 13.2341 2.429C13.2708 2.68392 13.2708 3.00067 13.2708 3.36233V3.815C13.2708 4.10025 13.2708 4.34583 13.2498 4.55175C13.2265 4.77342 13.1769 4.9805 13.0567 5.17942C12.9372 5.37717 12.7767 5.52067 12.5912 5.649C12.4168 5.77033 12.1946 5.89575 11.9321 6.04333L10.2159 7.00933C9.82507 7.22925 9.68916 7.30858 9.59816 7.38733C9.38991 7.56817 9.27032 7.76942 9.21432 8.02083C9.19041 8.12875 9.18749 8.26408 9.18749 8.67592V10.2696C9.18749 10.7952 9.18749 11.2414 9.13324 11.585C9.07607 11.9496 8.94249 12.2996 8.59249 12.5183C8.25007 12.7324 7.87382 12.7126 7.50749 12.6257C7.15457 12.5422 6.71999 12.3719 6.19849 12.1683L6.14832 12.1485C5.90332 12.0528 5.68982 11.9694 5.52066 11.8819C5.33866 11.788 5.16949 11.6713 5.04057 11.4893C4.90932 11.305 4.85741 11.1078 4.83349 10.906C4.81249 10.7222 4.81249 10.5017 4.81249 10.2556V8.67592C4.81249 8.26408 4.81016 8.12875 4.78566 8.02083C4.7327 7.77247 4.59745 7.54925 4.40182 7.38733C4.31082 7.30858 4.17432 7.22925 3.78407 7.00933L2.06791 6.04333C1.80541 5.89575 1.58316 5.77033 1.40874 5.649C1.22324 5.52067 1.06282 5.37717 0.94324 5.17942C0.823073 4.9805 0.77349 4.77283 0.75074 4.55175C0.729156 4.34642 0.729156 4.10025 0.729156 3.815V3.36233C0.729156 3.00067 0.729156 2.68392 0.765906 2.429C0.805573 2.15192 0.89599 1.88533 1.12349 1.67125C1.34749 1.46125 1.61932 1.38133 1.90166 1.34575C2.16766 1.3125 2.50016 1.3125 2.88924 1.3125ZM2.01132 2.21433C1.81649 2.23883 1.75466 2.2785 1.72257 2.30942C1.69341 2.33625 1.65607 2.3835 1.63157 2.55325C1.60532 2.73875 1.60416 2.99192 1.60416 3.39208V3.79458C1.60416 4.10608 1.60416 4.30675 1.62049 4.46192C1.63566 4.606 1.66132 4.67542 1.69282 4.72733C1.72491 4.78042 1.77857 4.8405 1.90749 4.93033C2.04399 5.02483 2.23007 5.13042 2.51416 5.29025L4.21341 6.24692L4.26007 6.27317C4.58674 6.45692 4.80841 6.58175 4.97524 6.72642C5.31265 7.01106 5.54646 7.3993 5.64024 7.83067C5.68749 8.04475 5.68749 8.28567 5.68749 8.624V10.2334C5.68749 10.5087 5.68807 10.6779 5.70324 10.8051C5.71607 10.9206 5.73766 10.9597 5.75341 10.9824C5.77091 11.0069 5.80591 11.0448 5.92199 11.1049C6.04566 11.1685 6.21657 11.2356 6.48607 11.3412C7.04666 11.5605 7.42407 11.7069 7.70932 11.7746C7.98874 11.8411 8.08091 11.8067 8.12816 11.7769C8.16782 11.7518 8.22907 11.7011 8.26932 11.4485C8.31132 11.1819 8.31249 10.8051 8.31249 10.2328V8.624C8.31249 8.28567 8.31249 8.04475 8.36032 7.83067C8.45395 7.39938 8.68754 7.01115 9.02474 6.72642C9.19157 6.58175 9.41382 6.45633 9.73932 6.27317L9.78657 6.24692L11.4858 5.29025C11.7699 5.13042 11.956 5.02483 12.0925 4.93033C12.2214 4.8405 12.2751 4.78042 12.3072 4.72733C12.3387 4.67542 12.3643 4.606 12.3789 4.46192C12.3952 4.30675 12.3958 4.10608 12.3958 3.794V3.3915C12.3958 2.99192 12.3947 2.73817 12.3684 2.55325C12.3439 2.3835 12.306 2.33625 12.278 2.30942C12.2453 2.27908 12.1835 2.23883 11.9887 2.21433C11.7845 2.18808 11.5074 2.1875 11.0833 2.1875H2.91666C2.49257 2.1875 2.21607 2.18808 2.01132 2.21433Z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
                <button onClick={() => setAddBroker(!addBroker)} className='bg-primary btn fs-6 fw-medium d-flex align-items-center  gap-2'>
                  <LuPlus />Add New
                </button>
              </div>
              <div className="broken-table overflow-auto ">
                <Table >
                  <thead>
                    <tr className='tableheader'>
                      <th>
                        <div className='d-flex gap-1 align-items-center'>
                          <p className='table-label' >Name</p>
                          <span>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.99879 4.60265C1.94309 4.55003 1.87758 4.50888 1.80599 4.48157C1.7344 4.45427 1.65813 4.44132 1.58154 4.44349C1.50494 4.44566 1.42953 4.46289 1.35959 4.4942C1.28966 4.52551 1.22658 4.5703 1.17395 4.62599C1.12132 4.68168 1.08018 4.74719 1.05287 4.81878C1.02556 4.89037 1.01262 4.96664 1.01479 5.04324C1.01696 5.11983 1.03419 5.19525 1.0655 5.26518C1.09681 5.33511 1.14159 5.39819 1.19729 5.45082L6.44729 10.4092C6.55559 10.5115 6.69899 10.5686 6.84804 10.5686C6.99708 10.5686 7.14048 10.5115 7.24879 10.4092L12.4994 5.45082C12.5563 5.39854 12.6022 5.33547 12.6346 5.26528C12.6669 5.19509 12.685 5.11918 12.6877 5.04195C12.6904 4.96472 12.6778 4.88771 12.6505 4.8154C12.6233 4.74309 12.5819 4.67692 12.5289 4.62074C12.4758 4.56455 12.4121 4.51947 12.3415 4.4881C12.2709 4.45674 12.1947 4.43972 12.1174 4.43804C12.0402 4.43636 11.9634 4.45004 11.8914 4.4783C11.8195 4.50656 11.7539 4.54883 11.6985 4.60265L6.84804 9.18299L1.99879 4.60265Z" fill="#8E8F95" />
                              <path d="M1.99879 4.60265C1.94309 4.55003 1.87758 4.50888 1.80599 4.48157C1.7344 4.45427 1.65813 4.44132 1.58154 4.44349C1.50494 4.44566 1.42953 4.46289 1.35959 4.4942C1.28966 4.52551 1.22658 4.5703 1.17395 4.62599C1.12132 4.68168 1.08018 4.74719 1.05287 4.81878C1.02556 4.89037 1.01262 4.96664 1.01479 5.04324C1.01696 5.11983 1.03419 5.19525 1.0655 5.26518C1.09681 5.33511 1.14159 5.39819 1.19729 5.45082L6.44729 10.4092C6.55559 10.5115 6.69899 10.5686 6.84804 10.5686C6.99708 10.5686 7.14048 10.5115 7.24879 10.4092L12.4994 5.45082C12.5563 5.39854 12.6022 5.33547 12.6346 5.26528C12.6669 5.19509 12.685 5.11918 12.6877 5.04195C12.6904 4.96472 12.6778 4.88771 12.6505 4.8154C12.6233 4.74309 12.5819 4.67692 12.5289 4.62074C12.4758 4.56455 12.4121 4.51947 12.3415 4.4881C12.2709 4.45674 12.1947 4.43972 12.1174 4.43804C12.0402 4.43636 11.9634 4.45004 11.8914 4.4783C11.8195 4.50656 11.7539 4.54883 11.6985 4.60265L6.84804 9.18299L1.99879 4.60265Z" fill="black" fillOpacity="0.2" />
                            </svg>
                          </span>
                        </div>
                      </th>
                      <th>
                        <div className='d-flex gap-1 align-items-center'>
                          <p className='table-label' >Exchanges</p>
                          <span>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.99879 4.60265C1.94309 4.55003 1.87758 4.50888 1.80599 4.48157C1.7344 4.45427 1.65813 4.44132 1.58154 4.44349C1.50494 4.44566 1.42953 4.46289 1.35959 4.4942C1.28966 4.52551 1.22658 4.5703 1.17395 4.62599C1.12132 4.68168 1.08018 4.74719 1.05287 4.81878C1.02556 4.89037 1.01262 4.96664 1.01479 5.04324C1.01696 5.11983 1.03419 5.19525 1.0655 5.26518C1.09681 5.33511 1.14159 5.39819 1.19729 5.45082L6.44729 10.4092C6.55559 10.5115 6.69899 10.5686 6.84804 10.5686C6.99708 10.5686 7.14048 10.5115 7.24879 10.4092L12.4994 5.45082C12.5563 5.39854 12.6022 5.33547 12.6346 5.26528C12.6669 5.19509 12.685 5.11918 12.6877 5.04195C12.6904 4.96472 12.6778 4.88771 12.6505 4.8154C12.6233 4.74309 12.5819 4.67692 12.5289 4.62074C12.4758 4.56455 12.4121 4.51947 12.3415 4.4881C12.2709 4.45674 12.1947 4.43972 12.1174 4.43804C12.0402 4.43636 11.9634 4.45004 11.8914 4.4783C11.8195 4.50656 11.7539 4.54883 11.6985 4.60265L6.84804 9.18299L1.99879 4.60265Z" fill="#8E8F95" />
                              <path d="M1.99879 4.60265C1.94309 4.55003 1.87758 4.50888 1.80599 4.48157C1.7344 4.45427 1.65813 4.44132 1.58154 4.44349C1.50494 4.44566 1.42953 4.46289 1.35959 4.4942C1.28966 4.52551 1.22658 4.5703 1.17395 4.62599C1.12132 4.68168 1.08018 4.74719 1.05287 4.81878C1.02556 4.89037 1.01262 4.96664 1.01479 5.04324C1.01696 5.11983 1.03419 5.19525 1.0655 5.26518C1.09681 5.33511 1.14159 5.39819 1.19729 5.45082L6.44729 10.4092C6.55559 10.5115 6.69899 10.5686 6.84804 10.5686C6.99708 10.5686 7.14048 10.5115 7.24879 10.4092L12.4994 5.45082C12.5563 5.39854 12.6022 5.33547 12.6346 5.26528C12.6669 5.19509 12.685 5.11918 12.6877 5.04195C12.6904 4.96472 12.6778 4.88771 12.6505 4.8154C12.6233 4.74309 12.5819 4.67692 12.5289 4.62074C12.4758 4.56455 12.4121 4.51947 12.3415 4.4881C12.2709 4.45674 12.1947 4.43972 12.1174 4.43804C12.0402 4.43636 11.9634 4.45004 11.8914 4.4783C11.8195 4.50656 11.7539 4.54883 11.6985 4.60265L6.84804 9.18299L1.99879 4.60265Z" fill="black" fillOpacity="0.2" />
                            </svg>
                          </span>
                        </div>
                      </th>
                      <th>
                        <div className='d-flex gap-1  align-items-center'>
                          <p className='table-label' >Info</p>
                          <span>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.99879 4.60265C1.94309 4.55003 1.87758 4.50888 1.80599 4.48157C1.7344 4.45427 1.65813 4.44132 1.58154 4.44349C1.50494 4.44566 1.42953 4.46289 1.35959 4.4942C1.28966 4.52551 1.22658 4.5703 1.17395 4.62599C1.12132 4.68168 1.08018 4.74719 1.05287 4.81878C1.02556 4.89037 1.01262 4.96664 1.01479 5.04324C1.01696 5.11983 1.03419 5.19525 1.0655 5.26518C1.09681 5.33511 1.14159 5.39819 1.19729 5.45082L6.44729 10.4092C6.55559 10.5115 6.69899 10.5686 6.84804 10.5686C6.99708 10.5686 7.14048 10.5115 7.24879 10.4092L12.4994 5.45082C12.5563 5.39854 12.6022 5.33547 12.6346 5.26528C12.6669 5.19509 12.685 5.11918 12.6877 5.04195C12.6904 4.96472 12.6778 4.88771 12.6505 4.8154C12.6233 4.74309 12.5819 4.67692 12.5289 4.62074C12.4758 4.56455 12.4121 4.51947 12.3415 4.4881C12.2709 4.45674 12.1947 4.43972 12.1174 4.43804C12.0402 4.43636 11.9634 4.45004 11.8914 4.4783C11.8195 4.50656 11.7539 4.54883 11.6985 4.60265L6.84804 9.18299L1.99879 4.60265Z" fill="#8E8F95" />
                              <path d="M1.99879 4.60265C1.94309 4.55003 1.87758 4.50888 1.80599 4.48157C1.7344 4.45427 1.65813 4.44132 1.58154 4.44349C1.50494 4.44566 1.42953 4.46289 1.35959 4.4942C1.28966 4.52551 1.22658 4.5703 1.17395 4.62599C1.12132 4.68168 1.08018 4.74719 1.05287 4.81878C1.02556 4.89037 1.01262 4.96664 1.01479 5.04324C1.01696 5.11983 1.03419 5.19525 1.0655 5.26518C1.09681 5.33511 1.14159 5.39819 1.19729 5.45082L6.44729 10.4092C6.55559 10.5115 6.69899 10.5686 6.84804 10.5686C6.99708 10.5686 7.14048 10.5115 7.24879 10.4092L12.4994 5.45082C12.5563 5.39854 12.6022 5.33547 12.6346 5.26528C12.6669 5.19509 12.685 5.11918 12.6877 5.04195C12.6904 4.96472 12.6778 4.88771 12.6505 4.8154C12.6233 4.74309 12.5819 4.67692 12.5289 4.62074C12.4758 4.56455 12.4121 4.51947 12.3415 4.4881C12.2709 4.45674 12.1947 4.43972 12.1174 4.43804C12.0402 4.43636 11.9634 4.45004 11.8914 4.4783C11.8195 4.50656 11.7539 4.54883 11.6985 4.60265L6.84804 9.18299L1.99879 4.60265Z" fill="black" fillOpacity="0.2" />
                            </svg>
                          </span>
                        </div>
                      </th>
                      <th >
                        <p className='table-label' >Action</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tablevalue.map((item, idx) => (
                        <tr key={idx}>
                          <td>
                            <p className='value'>{item.name}</p>
                          </td>
                          <td>
                            <p className='value'>{item.exchanges}</p>
                          </td>
                          <td>
                            <p className='value'>{item.info} </p>
                          </td>
                          <td >
                            <div className="action d-flex align-items-center gap-2">
                              <a className="edit d-flex justify-content-center align-items-center p-1 mr-1"><CiEdit /></a>
                              <button className="delete d-flex justify-content-center align-items-center p-1">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.92862 2.57146H7.07148C7.07148 2.2873 6.9586 2.01478 6.75767 1.81385C6.55673 1.61292 6.28421 1.50003 6.00005 1.50003C5.71589 1.50003 5.44337 1.61292 5.24244 1.81385C5.04151 2.01478 4.92862 2.2873 4.92862 2.57146ZM4.28577 2.57146C4.28577 2.11681 4.46638 1.68077 4.78787 1.35928C5.10936 1.03779 5.5454 0.857178 6.00005 0.857178C6.45471 0.857178 6.89074 1.03779 7.21224 1.35928C7.53373 1.68077 7.71434 2.11681 7.71434 2.57146H10.3929C10.4782 2.57146 10.5599 2.60533 10.6202 2.66561C10.6805 2.72589 10.7143 2.80764 10.7143 2.89289C10.7143 2.97814 10.6805 3.0599 10.6202 3.12018C10.5599 3.18046 10.4782 3.21432 10.3929 3.21432H9.83148L9.30991 9.47275C9.27196 9.92803 9.06431 10.3524 8.72812 10.6618C8.39194 10.9711 7.95177 11.1429 7.49491 11.1429H4.5052C4.04833 11.1429 3.60817 10.9711 3.27198 10.6618C2.9358 10.3524 2.72814 9.92803 2.6902 9.47275L2.16862 3.21432H1.6072C1.52195 3.21432 1.44019 3.18046 1.37991 3.12018C1.31963 3.0599 1.28577 2.97814 1.28577 2.89289C1.28577 2.80764 1.31963 2.72589 1.37991 2.66561C1.44019 2.60533 1.52195 2.57146 1.6072 2.57146H4.28577ZM3.33091 9.41918C3.35542 9.71378 3.48975 9.98842 3.70726 10.1886C3.92477 10.3888 4.20957 10.5 4.5052 10.5H7.49491C7.79053 10.5 8.07534 10.3888 8.29285 10.1886C8.51036 9.98842 8.64469 9.71378 8.6692 9.41918L9.18691 3.21432H2.81362L3.33091 9.41918ZM5.03577 4.71432C5.12101 4.71432 5.20277 4.74819 5.26305 4.80847C5.32333 4.86874 5.3572 4.9505 5.3572 5.03575V8.67861C5.3572 8.76386 5.32333 8.84561 5.26305 8.90589C5.20277 8.96617 5.12101 9.00004 5.03577 9.00004C4.95052 9.00004 4.86876 8.96617 4.80848 8.90589C4.7482 8.84561 4.71434 8.76386 4.71434 8.67861V5.03575C4.71434 4.9505 4.7482 4.86874 4.80848 4.80847C4.86876 4.74819 4.95052 4.71432 5.03577 4.71432ZM7.28577 5.03575C7.28577 4.9505 7.2519 4.86874 7.19162 4.80847C7.13134 4.74819 7.04959 4.71432 6.96434 4.71432C6.87909 4.71432 6.79733 4.74819 6.73705 4.80847C6.67677 4.86874 6.64291 4.9505 6.64291 5.03575V8.67861C6.64291 8.76386 6.67677 8.84561 6.73705 8.90589C6.79733 8.96617 6.87909 9.00004 6.96434 9.00004C7.04959 9.00004 7.13134 8.96617 7.19162 8.90589C7.2519 8.84561 7.28577 8.76386 7.28577 8.67861V5.03575Z" fill="currentColor" />
                                  <path d="M4.92862 2.57146H7.07148C7.07148 2.2873 6.9586 2.01478 6.75767 1.81385C6.55673 1.61292 6.28421 1.50003 6.00005 1.50003C5.71589 1.50003 5.44337 1.61292 5.24244 1.81385C5.04151 2.01478 4.92862 2.2873 4.92862 2.57146ZM4.28577 2.57146C4.28577 2.11681 4.46638 1.68077 4.78787 1.35928C5.10936 1.03779 5.5454 0.857178 6.00005 0.857178C6.45471 0.857178 6.89074 1.03779 7.21224 1.35928C7.53373 1.68077 7.71434 2.11681 7.71434 2.57146H10.3929C10.4782 2.57146 10.5599 2.60533 10.6202 2.66561C10.6805 2.72589 10.7143 2.80764 10.7143 2.89289C10.7143 2.97814 10.6805 3.0599 10.6202 3.12018C10.5599 3.18046 10.4782 3.21432 10.3929 3.21432H9.83148L9.30991 9.47275C9.27196 9.92803 9.06431 10.3524 8.72812 10.6618C8.39194 10.9711 7.95177 11.1429 7.49491 11.1429H4.5052C4.04833 11.1429 3.60817 10.9711 3.27198 10.6618C2.9358 10.3524 2.72814 9.92803 2.6902 9.47275L2.16862 3.21432H1.6072C1.52195 3.21432 1.44019 3.18046 1.37991 3.12018C1.31963 3.0599 1.28577 2.97814 1.28577 2.89289C1.28577 2.80764 1.31963 2.72589 1.37991 2.66561C1.44019 2.60533 1.52195 2.57146 1.6072 2.57146H4.28577ZM3.33091 9.41918C3.35542 9.71378 3.48975 9.98842 3.70726 10.1886C3.92477 10.3888 4.20957 10.5 4.5052 10.5H7.49491C7.79053 10.5 8.07534 10.3888 8.29285 10.1886C8.51036 9.98842 8.64469 9.71378 8.6692 9.41918L9.18691 3.21432H2.81362L3.33091 9.41918ZM5.03577 4.71432C5.12101 4.71432 5.20277 4.74819 5.26305 4.80847C5.32333 4.86874 5.3572 4.9505 5.3572 5.03575V8.67861C5.3572 8.76386 5.32333 8.84561 5.26305 8.90589C5.20277 8.96617 5.12101 9.00004 5.03577 9.00004C4.95052 9.00004 4.86876 8.96617 4.80848 8.90589C4.7482 8.84561 4.71434 8.76386 4.71434 8.67861V5.03575C4.71434 4.9505 4.7482 4.86874 4.80848 4.80847C4.86876 4.74819 4.95052 4.71432 5.03577 4.71432ZM7.28577 5.03575C7.28577 4.9505 7.2519 4.86874 7.19162 4.80847C7.13134 4.74819 7.04959 4.71432 6.96434 4.71432C6.87909 4.71432 6.79733 4.74819 6.73705 4.80847C6.67677 4.86874 6.64291 4.9505 6.64291 5.03575V8.67861C6.64291 8.76386 6.67677 8.84561 6.73705 8.90589C6.79733 8.96617 6.87909 9.00004 6.96434 9.00004C7.04959 9.00004 7.13134 8.96617 7.19162 8.90589C7.2519 8.84561 7.28577 8.76386 7.28577 8.67861V5.03575Z" fill="black" fillOpacity="0.2" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </Table>
              </div>
            </div>
          </Tab>
          <Tab eventKey="notification" title="Notification" >
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
      {addBroker &&
        <div className={`broken-modal align-items-center justify-content-end  p-3 p-md-4 position-fixed top-0 start-0 w-100 z-2 bg-black bg-opacity-20 h-100  `}>
          <div className="login-otp-wrap bg-white py-4 px-3 rounded-4 h-100 ms-auto">
            <div className="login-otp-scroll h-100 px-2 d-flex flex-column overflow-auto">
              <div className="login-popup-header position-sticky top-0 start-0 z-2 w-100 bg-white d-flex align-items-center gap-2 mb-3 pb-md-1">
                <button onClick={() => setAddBroker(!addBroker)} className="login-close text-body d-flex align-items-center justify-content-center rounded-pill border-0 p-0" ><LiaAngleLeftSolid /></button>
                <h4 className="mb-0">Add New Broker</h4>
              </div>
              <div className=" gap-3 mb-3">
                <p className='broken-contact fs-6'>Select Broker</p>
                <Form.Select aria-label="Default select example">
                  <option>Select</option>
                  <option value="1">Select</option>
                  <option value="2">Select</option>
                  <option value="3">Select</option>
                </Form.Select>
              </div>
              <div className='link-item mb-3'>
                <p className='fs-6 fw-medium mb-2'>Setup Link</p>
                <a className='fs-14 fw-medium ' href="https://tradetron.tech/html-view/Configure-ABSTOX">https://tradetron.tech/html-view/Configure-ABSTOX</a>
              </div>
              <div className='select2 mb-3'>
                <Select
                  options={options}
                  isMulti
                  value={selectedOptions}
                  onChange={handleChange}
                />
              </div>
              <div className="line w-100 mb-3"></div>
              <p className='broken-contact mb-3'>Connect to Broker</p>
              <div className="mb-3">
                <FormBox type="text" label="Secret_Key  " placeholder="Type here" />
              </div>
              <div className="mb-4 mb-lg-5">
                <FormBox type="text" label="app_Key" placeholder="Type here" />
              </div>
              <div className="d-flex flex-column gap-2 mt-auto btns">
                <Link to="#" className="btn bg-transparent w-100 fs-14 mb-1">Back</Link>
                <Link to="#" className="btn bg-primary w-100 fs-14">Save</Link>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
