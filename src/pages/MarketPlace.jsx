import { Link } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination';
import { Col, Container, Row } from 'react-bootstrap'
import { FaAnglesLeft, FaAnglesRight, FaAngleLeft, FaAngleRight } from "react-icons/fa6";


import icon1 from "../assets/img/marketplace/1.png"
import icon2 from "../assets/img/marketplace/2.png"
import icon3 from "../assets/img/marketplace/3.png"
import icon4 from "../assets/img/marketplace/4.png"
import icon5 from "../assets/img/marketplace/5.png"
import icon6 from "../assets/img/marketplace/5.png"
import {useEffect, useState} from "react";
import Api from "../api/api.js";



export default function MarketPlace() {

  let [marketPlace, setMarketPlace]=useState([])

  const values= [
    {
      image: icon1,
      price: "$180.99",
      value: "Trades"
    },
    {
      image: icon2,
      price: "11.6k",
      value: "Drawdown"
    },
    {
      image: icon3,
      price: "180k",
      value: "Min Capital"
    },
    {
      image: icon4,
      price: "$10.99",
      value: "Cost"
    },
    {
      image: icon5,
      price: "1 Months",
      value: "Duration"
    },
    {
      image: icon6,
      price: "180k",
      value: "Min Capital"
    },
  ]

  const marketPlaceCards = [
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia. non deserunt ullamco est sit aliqua dolor do amet sint",
      time: "10 months ago",
      live: "10",
      values: [
        {
          image: icon1,
          price: "$180.99",
          value: "Trades"
        },
        {
          image: icon2,
          price: "11.6k",
          value: "Drawdown"
        },
        {
          image: icon3,
          price: "180k",
          value: "Min Capital"
        },
        {
          image: icon4,
          price: "$10.99",
          value: "Cost"
        },
        {
          image: icon5,
          price: "1 Months",
          value: "Duration"
        },
        {
          image: icon6,
          price: "180k",
          value: "Min Capital"
        },
      ]
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia. non deserunt ullamco est sit aliqua dolor do amet sint",
      time: "10 months ago",
      live: "10",
      values: [
        {
          image: icon1,
          price: "$180.99",
          value: "Trades"
        },
        {
          image: icon2,
          price: "11.6k",
          value: "Drawdown"
        },
        {
          image: icon3,
          price: "180k",
          value: "Min Capital"
        },
        {
          image: icon4,
          price: "$10.99",
          value: "Cost"
        },
        {
          image: icon5,
          price: "1 Months",
          value: "Duration"
        },
        {
          image: icon6,
          price: "180k",
          value: "Min Capital"
        },
      ]
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia. non deserunt ullamco est sit aliqua dolor do amet sint",
      time: "10 months ago",
      live: "10",
      values: [
        {
          image: icon1,
          price: "$180.99",
          value: "Trades"
        },
        {
          image: icon2,
          price: "11.6k",
          value: "Drawdown"
        },
        {
          image: icon3,
          price: "180k",
          value: "Min Capital"
        },
        {
          image: icon4,
          price: "$10.99",
          value: "Cost"
        },
        {
          image: icon5,
          price: "1 Months",
          value: "Duration"
        },
        {
          image: icon6,
          price: "180k",
          value: "Min Capital"
        },
      ]
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia. non deserunt ullamco est sit aliqua dolor do amet sint",
      time: "10 months ago",
      live: "10",
      values: [
        {
          image: icon1,
          price: "$180.99",
          value: "Trades"
        },
        {
          image: icon2,
          price: "11.6k",
          value: "Drawdown"
        },
        {
          image: icon3,
          price: "180k",
          value: "Min Capital"
        },
        {
          image: icon4,
          price: "$10.99",
          value: "Cost"
        },
        {
          image: icon5,
          price: "1 Months",
          value: "Duration"
        },
        {
          image: icon6,
          price: "180k",
          value: "Min Capital"
        },
      ]
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia. non deserunt ullamco est sit aliqua dolor do amet sint",
      time: "10 months ago",
      live: "10",
      values: [
        {
          image: icon1,
          price: "$180.99",
          value: "Trades"
        },
        {
          image: icon2,
          price: "11.6k",
          value: "Drawdown"
        },
        {
          image: icon3,
          price: "180k",
          value: "Min Capital"
        },
        {
          image: icon4,
          price: "$10.99",
          value: "Cost"
        },
        {
          image: icon5,
          price: "1 Months",
          value: "Duration"
        },
        {
          image: icon6,
          price: "180k",
          value: "Min Capital"
        },
      ]
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia. non deserunt ullamco est sit aliqua dolor do amet sint",
      time: "10 months ago",
      live: "10",
      values: [
        {
          image: icon1,
          price: "$180.99",
          value: "Trades"
        },
        {
          image: icon2,
          price: "11.6k",
          value: "Drawdown"
        },
        {
          image: icon3,
          price: "180k",
          value: "Min Capital"
        },
        {
          image: icon4,
          price: "$10.99",
          value: "Cost"
        },
        {
          image: icon5,
          price: "1 Months",
          value: "Duration"
        },
        {
          image: icon6,
          price: "180k",
          value: "Min Capital"
        },
      ]
    },
  ]

  useEffect(() => {
    getMarketPlace();
  }, []);

  async function getMarketPlace() {
    try {
      let res = await Api.marketPlace();
      setMarketPlace(res?.data);
      console.log(res?.data);
    } catch (error) {
      alert("Error while fetching Marketplace");
    }
  }

  return (
    <div className='dashboard-wrap marketplace'>
      <div className="marketplace-header mb-3 mb-md-4 d-flex flex-wrap align-items-center justify-content-between">
        <p className='fs-18 fw-bold text-heading d-none d-md-block'>Marketplace</p>
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
      </div>
      <Container fluid className="marketplace-items g-0">
        <Row className='marketplace-items-row'>
          {marketPlace?.map((item, idx) => (
            <Col xs={12} lg={6} xl={4} className='marketplace-items-cards mb-2 mb-md-3' key={idx}>
              <div className="marketplace-items-cards-card">
                <p className='title mb-2 pb-1 fs-6 fw-medium '>{item?.strategy_name}</p>
                <p className='mb-2 pb-1 des fs-14 fw-normal'>{item?.desc}<span>Read More</span></p>
                <div className="card-history mb-3 d-flex align-items-center gap-2">
                  <p className='month fs-14 fw-medium '>Created: {item?.start_date}</p>
                  <p className='live fs-14 fw-medium'>Live development: {item?.live}</p>
                </div>
                <div className="all-valur-history mb-3 d-grid grid-count-2 gap-2">
                  {values?.map((itm, iddx) => (
                    <div className='total-value mb-2 d-flex align-items-center gap-2 p-2' key={iddx}>
                      <div className="image-area">
                        <img src={itm.image} alt="" />
                      </div>
                      <div className='values'>
                        <p className='mb-1 price fs-6 fw-semibold'>{itm.price}</p>
                        <p className='fs-14' >{itm.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='btns d-flex align-items-center'>
                  <Link to="/subscribe" className='text-center fs-14 font-medium btn bg-primary'>Subscribe</Link>
                  <button className="wish p-0 d-flex align-items-center justify-content-center">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.1823 2.95312C11.7057 2.95312 10.4218 3.61898 9.66663 4.73484C8.91147 3.61898 7.62756 2.95312 6.151 2.95312C5.03252 2.95443 3.96022 3.39932 3.16933 4.19021C2.37845 4.98109 1.93355 6.05339 1.93225 7.17187C1.93225 9.225 3.21194 11.3618 5.73616 13.5218C6.89284 14.5074 8.14227 15.3787 9.46694 16.1234C9.52833 16.1563 9.59693 16.1736 9.66663 16.1736C9.73632 16.1736 9.80492 16.1563 9.86631 16.1234C11.191 15.3787 12.4404 14.5074 13.5971 13.5218C16.1213 11.3618 17.401 9.225 17.401 7.17187C17.3997 6.05339 16.9548 4.98109 16.1639 4.19021C15.373 3.39932 14.3007 2.95443 13.1823 2.95312ZM9.66663 15.2655C8.5128 14.5997 2.776 11.0897 2.776 7.17187C2.77693 6.27705 3.13281 5.41915 3.76554 4.78642C4.39828 4.15368 5.25618 3.79781 6.151 3.79687C7.57694 3.79687 8.77436 4.55836 9.27639 5.78461C9.30818 5.86199 9.36225 5.92817 9.43173 5.97474C9.50121 6.02132 9.58298 6.04619 9.66663 6.04619C9.75028 6.04619 9.83204 6.02132 9.90152 5.97474C9.97101 5.92817 10.0251 5.86199 10.0569 5.78461C10.5589 4.55836 11.7563 3.79687 13.1823 3.79687C14.0771 3.79781 14.935 4.15368 15.5677 4.78642C16.2004 5.41915 16.5563 6.27705 16.5573 7.17187C16.5573 11.0897 10.8205 14.5997 9.66663 15.2655Z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
            </Col>
          ))
          }
        </Row>
      </Container>
      <div className='marketplace-pagination d-flex justify-content-center pt-1'>
        <Pagination>
          <Pagination.First><FaAnglesLeft /></Pagination.First>
          <Pagination.Prev><FaAngleLeft /></Pagination.Prev>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Next><FaAngleRight /></Pagination.Next>
          <Pagination.Last><FaAnglesRight /></Pagination.Last>
        </Pagination>
      </div>
    </div>
  )
}
