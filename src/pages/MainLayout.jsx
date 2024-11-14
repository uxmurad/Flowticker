import { useEffect, useState } from 'react'
import LeftSidebar from '../components/dashbaord/LeftSidebar'
import TopBar from '../components/dashbaord/TopBar'
import { Outlet, useLocation } from 'react-router-dom'

export default function MainLayout() {
  const [leftSide, setLeftSide] = useState(false);
  const showLeftSide = () => {
    setLeftSide(!leftSide)
  }
  const pathname = useLocation();
  useEffect(() => {
    let scroll_body = document.querySelector('.dashboard-main');
    scroll_body.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className='dashboard d-flex flex-wrap'>
      <div className={`dashboard-left vh-100 ${leftSide && 'showSidebar'}`}>
        <LeftSidebar onClick={() => showLeftSide()} />
      </div>
      <div className="dashboard-right">
        <TopBar onClick={() => showLeftSide()} />
        <div className="dashboard-main">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
