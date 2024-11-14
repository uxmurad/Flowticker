import { TfiAngleLeft } from "react-icons/tfi";
import icon_1 from '../assets/img/dashboard/detail-item-icon-1.png'
import icon_2 from '../assets/img/dashboard/detail-item-icon-2.png'
import icon_3 from '../assets/img/dashboard/detail-item-icon-3.png'
import icon_4 from '../assets/img/dashboard/detail-item-icon-4.png'
import icon_5 from '../assets/img/dashboard/detail-item-icon-5.png'
import icon_6 from '../assets/img/dashboard/detail-item-icon-6.png'
import { Link } from "react-router-dom";

export default function StrategiesDC({onClick}) {
    const detailItem = [
        { title: '$180.99', des: 'Trades', icon: icon_1 },
        { title: '11.6k', des: 'Drawdown', icon: icon_2 },
        { title: '180K', des: 'Min Capital', icon: icon_3 },
        { title: '$10.99', des: 'Cost', icon: icon_4 },
        { title: '1 Months', des: 'Duration', icon: icon_5 },
        { title: '180K', des: 'Min Capital', icon: icon_6 },
    ]
    return (
        <div className="strategies-detail bg-white p-3 p-md-4">
            <div className="strategies-detail-header d-flex align-items-center gap-2">
                <Link to="/strategies" className="icon d-flex align-items-center justify-content-center">
                    <TfiAngleLeft />
                </Link>
                <div className="text">
                    <h4 className='fw-semibold lh-base text-heading'>BankNifty Positional Weekly</h4>
                    <p className='fs-14 lh-base fw-medium'>By: <a href="#" className='text-decoration-underline'>Market Star</a></p>
                </div>
            </div>
            <div className="d-flex align-items-center button">
                <span className='fs-12 lh-base fw-medium'>Subscribed</span>
                <span className='fs-12 lh-base fw-medium text-heading'>Marketplace</span>
            </div>
            <div className="description">
                <h3 className='fs-14 lh-base fw-medium mb-2'>Strategy description</h3>
                <p className='mb-2 fs-12 lh-base d-inline-block'><h3 className='fw-semibold d-inline fs-14'>BankNifty Positional Weekly </h3> is an option selling strategy designed to trade in BankNifty. It works BankNifty weekly OTM strangles. It is a non-directional strategy and never breaks the pair. It enters 3 pairs of the strangle with 3 pairs of OTM hedges. Depending on the market moves if needed it shifts the pair one by one. As the name suggests it is a weekly positional strategy which starts on Friday/Monday, first day of weekly expiry and ends on expiry day. Some days it exits one day before the weekly expiry if risk and reward does not match properly.</p>
                <p className='mb-4 fs-12 lh-base d-inline-block'><h3 className='fw-semibold d-inline fs-14'>User's responsibilty :</h3>Users are rquested to keep 5 to 10 % more capital than the recommended capital as per their broker and to handle capital rise by exchange on rising VIX days. Once capital is properly maintained and token has been genrated between 8:30 AM to 9 AM, 95% cases there will not be any execution issue. Still if any error on your live deployment, you will get notification via whatsapp or get call from Tradetron. Please check notification log in the deployment to understand the issue and fix it as soon as possible. Once deployment will be in error, strategy stops working which can result in unexpected results. If you are unable to fix the error then connect with us via our telegram group or via personal telegram id mentioned above. We will help you..</p>
                <p className='mb-4 fs-12 lh-base d-inline-block'><h3 className='fw-semibold d-inline fs-14'>User's responsibilty :</h3>Users are rquested to keep 5 to 10 % more capital than the recommended capital as per their broker and to handle capital rise by exchange on rising VIX days. Once capital is properly maintained and token has been genrated between 8:30 AM to 9 AM, 95% cases there will not be any execution issue. Still if any error on your live deployment, you will get notification via whatsapp or get call from Tradetron. Please check notification log in the deployment to understand the issue and fix it as soon as possible. Once deployment will be in error, strategy stops working which can result in unexpected results. If you are unable to fix the error then connect with us via our telegram group or via personal telegram id mentioned above. We will help you..</p>
            </div>
            <div className="detail-item d-flex gap-3 gap-md-2 flex-wrap">
                {detailItem.map((item, index) => (
                    <div key={index} className="detail-item-single p-2 d-flex align-items-center  gap-2">
                        <div className="icon bg-white d-flex align-items-center justify-content-center"><img src={item.icon} alt="" /></div>
                        <div className="text">
                            <h4 className='fs-14 lh-base fw-semibold text-heading mb-1'>{item.title}</h4>
                            <p className='fs-12 lh-base '>{item.des} </p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn bg-primary mt-3" onClick={onClick}>Subscribe</button>
        </div>
    )
}
