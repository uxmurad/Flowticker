import { LiaAngleLeftSolid } from "react-icons/lia";
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";

import card_icon_1 from "../assets/img/visa.png"
import card_icon_2 from "../assets/img/paple.png"
import card_icon_3 from "../assets/img/backcard3.png"

export default function SubscribeModal({onClick}) {
    const bankCard = [
      {
        icon: card_icon_1,
        bank_name: 'visa',
        holder_name: 'Murad Hossain',
        card_number: 'XXXX XXXX XXXX 8980'
      },
      {
        icon: card_icon_2,
        bank_name: 'visa',
        holder_name: 'Murad Hossain',
        card_number: 'XXXX XXXX XXXX 8980'
      },
      {
        icon: card_icon_3,
        bank_name: 'visa',
        holder_name: 'Murad Hossain',
        card_number: 'XXXX XXXX XXXX 8980'
      },
    ]
  return (
    <div className={`subscribe align-items-center justify-content-end p-3 p-md-4 position-fixed top-0 start-0 w-100 z-2 bg-black bg-opacity-20 h-100`}>
          <div className="subscribe-modal bg-white py-4 px-3 rounded-4 h-100 ms-auto">
            <div className="login-otp-scroll h-100 px-2 d-flex flex-column overflow-auto">
              <div className="login-popup-header position-sticky top-0 start-0 z-2 w-100 bg-white d-flex align-items-center gap-2 mb-3 pb-md-1">
                <button onClick={onClick} className="login-close text-body d-flex align-items-center justify-content-center rounded-pill border-0 p-0"><LiaAngleLeftSolid /></button>
                <h4 className="mb-0">Subscribe Strategies</h4>
              </div>
              <div className="subscribe-modal-costcard p-3">
                <p className="title fs-6 fw-semibold mb-2 pb-1">Strategy Name AI Calculation </p>
                <p className="des fw-14 fw-normal mb-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.</p>
                <div className="input-item mb-3 position-relative z-0">
                  <p className="input-title mb-2 fs-6 fw-semibold">Select Duration</p>
                  <Form.Select aria-label="Default select example">
                    <option>12 Month</option>
                    <option value="1">12 Month</option>
                    <option value="2">12 Month</option>
                    <option value="3">12 Month  </option>
                  </Form.Select>
                  <span className="position-absolute z-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.45818 4.85493C2.39453 4.79478 2.31966 4.74776 2.23784 4.71655C2.15602 4.68534 2.06885 4.67055 1.98132 4.67303C1.89379 4.67551 1.8076 4.6952 1.72767 4.73098C1.64775 4.76677 1.57565 4.81795 1.51551 4.88159C1.45536 4.94524 1.40834 5.02011 1.37713 5.10193C1.34592 5.18375 1.33113 5.27092 1.33361 5.35845C1.33609 5.44599 1.35578 5.53218 1.39157 5.6121C1.42735 5.69202 1.47853 5.76412 1.54218 5.82426L7.54218 11.4909C7.66596 11.608 7.82984 11.6732 8.00018 11.6732C8.17052 11.6732 8.3344 11.608 8.45818 11.4909L14.4588 5.82426C14.5239 5.76451 14.5764 5.69244 14.6134 5.61222C14.6503 5.532 14.6709 5.44524 14.6741 5.35698C14.6772 5.26871 14.6628 5.18071 14.6316 5.09807C14.6005 5.01543 14.5532 4.93981 14.4925 4.8756C14.4319 4.81138 14.3591 4.75986 14.2784 4.72401C14.1977 4.68817 14.1106 4.66872 14.0224 4.6668C13.9341 4.66487 13.8463 4.68052 13.7641 4.71281C13.6819 4.74511 13.6069 4.79341 13.5435 4.85493L8.00018 10.0896L2.45818 4.85493Z" fill="#8E8F95" />
                      <path d="M2.45818 4.85493C2.39453 4.79478 2.31966 4.74776 2.23784 4.71655C2.15602 4.68534 2.06885 4.67055 1.98132 4.67303C1.89379 4.67551 1.8076 4.6952 1.72767 4.73098C1.64775 4.76677 1.57565 4.81795 1.51551 4.88159C1.45536 4.94524 1.40834 5.02011 1.37713 5.10193C1.34592 5.18375 1.33113 5.27092 1.33361 5.35845C1.33609 5.44599 1.35578 5.53218 1.39157 5.6121C1.42735 5.69202 1.47853 5.76412 1.54218 5.82426L7.54218 11.4909C7.66596 11.608 7.82984 11.6732 8.00018 11.6732C8.17052 11.6732 8.3344 11.608 8.45818 11.4909L14.4588 5.82426C14.5239 5.76451 14.5764 5.69244 14.6134 5.61222C14.6503 5.532 14.6709 5.44524 14.6741 5.35698C14.6772 5.26871 14.6628 5.18071 14.6316 5.09807C14.6005 5.01543 14.5532 4.93981 14.4925 4.8756C14.4319 4.81138 14.3591 4.75986 14.2784 4.72401C14.1977 4.68817 14.1106 4.66872 14.0224 4.6668C13.9341 4.66487 13.8463 4.68052 13.7641 4.71281C13.6819 4.74511 13.6069 4.79341 13.5435 4.85493L8.00018 10.0896L2.45818 4.85493Z" fill="black" fillOpacity="0.2" />
                    </svg>
                  </span>
                </div>
                <div className="cost-details">
                  <p className="title fs-6 fw-semibold mb-3">Cost Details</p>
                  <div className="d-flex align-items-center justify-content-between mb-2 pb-1">
                    <p className="d-flex align-items-center gap-1 cost fs-14 fw-normal">
                      <span>
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.15201 10.258C2.12201 9.22735 1.60668 8.71269 1.41535 8.04402C1.22335 7.37535 1.38735 6.66535 1.71535 5.24602L1.90401 4.42735C2.17935 3.23269 2.31735 2.63535 2.72601 2.22602C3.13535 1.81735 3.73268 1.67935 4.92735 1.40402L5.74601 1.21469C7.16601 0.887355 7.87535 0.723354 8.54401 0.914688C9.21268 1.10669 9.72735 1.62202 10.7573 2.65202L11.9773 3.87202C13.7713 5.66535 14.6667 6.56135 14.6667 7.67469C14.6667 8.78869 13.7707 9.68469 11.978 11.4774C10.1847 13.2707 9.28868 14.1667 8.17468 14.1667C7.06135 14.1667 6.16468 13.2707 4.37201 11.478L3.15201 10.258Z" stroke="#4DD5B8" />
                          <path d="M10.26 9.76004C10.65 9.36871 10.7027 8.78871 10.3773 8.46271C10.052 8.13738 9.47132 8.19004 9.08066 8.58071C8.69066 8.97138 8.10999 9.02404 7.78466 8.69871C7.45932 8.37338 7.51199 7.79271 7.90266 7.40271M7.90266 7.40271L7.66666 7.16671M7.90266 7.40271C8.12332 7.18138 8.40466 7.06938 8.66666 7.07138M10.4953 9.99538L10.2593 9.75938C9.99266 10.0267 9.63599 10.136 9.33332 10.0734" stroke="#4DD5B8" strokeLinecap="round" />
                          <path d="M6.68084 6.36218C7.20154 5.84148 7.20154 4.99726 6.68084 4.47656C6.16014 3.95586 5.31593 3.95586 4.79523 4.47656C4.27453 4.99726 4.27453 5.84148 4.79523 6.36218C5.31592 6.88288 6.16014 6.88288 6.68084 6.36218Z" stroke="#4DD5B8" />
                        </svg>
                      </span>
                      Cost
                    </p>
                    <p className="price fs-6 fw-semibold">$110.99</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2 pb-1">
                    <p className="d-flex align-items-center gap-1 cost fs-14 fw-normal">
                      <span>
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.16675H3.99998C2.52722 2.16675 1.33331 3.36066 1.33331 4.83341V11.5001C1.33331 12.9728 2.52722 14.1667 3.99998 14.1667H12C13.4727 14.1667 14.6666 12.9728 14.6666 11.5001V4.83341C14.6666 3.36066 13.4727 2.16675 12 2.16675Z" stroke="#4DD5B8" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M5.33331 0.833374V3.50004M10.6666 0.833374V3.50004M1.33331 6.16671H14.6666" stroke="#4DD5B8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      Duration
                    </p>
                    <p className="price fs-6 fw-semibold">6 Months</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2 pb-1">
                    <p className="cost fs-14 fw-normal">
                      Discount
                    </p>
                    <p className="price fs-6 fw-semibold"><span>(10%)</span> -$10.99</p>
                  </div>
                  <div className="total d-flex justify-content-between align-items-center">
                    <p className="total-cost fs-14 fw-normal">Total Cost</p>
                    <p className="fs-6 fw-semibold ">$100.99</p>
                  </div>
                </div>
              </div>
              <div className="bank-cards">
                {bankCard.map((item, index) => (
                  <label htmlFor={`bank_${index+1}`} key={index} className="card-item mb-3 d-flex align-items-center justify-content-between">
                    <input className="d-none" type="radio" name="bank" id={`bank_${index+1}`} />
                    <div className="bank-card d-flex align-items-center gap-2">
                      <div className="image">
                        <img className="p-0" src={item.icon} alt="" />
                      </div>
                      <div>
                        <span className="fs-14 fw-semibold mb-1">Murad Hossain</span>
                        <p className="fs-14 fw-medium">XXXX XXXX XXXX 8980</p>
                      </div>
                    </div>
                    <div className="circle"></div>
                  </label>
                ))}
              </div>
              <div className="d-flex flex-column gap-2 mt-4">
                <Link to="#" className="btn bg-transparent w-100 fs-14 mb-1 d-flex align-items-center gap-1 justify-content-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0.9375V11.0625ZM11.0625 6H0.9375Z" fill="#151B22" />
                    <path d="M6 0.9375V11.0625M11.0625 6H0.9375" stroke="black" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Add new card
                </Link>
                <Link to="#" className="btn bg-primary w-100 fs-14">Pay Now</Link>
              </div>
            </div>
          </div>
        </div>
  )
}
