import { useSearchParams } from 'react-router-dom'
import './Calendar.css'

const Calendar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const view = searchParams.get('view') === 'week' ? 'week' : 'month'

  return (
    <div className="calendarPage">
        <div>
          <h1>Calendar</h1>
          <p>Switch between month and week</p>
        </div>
        <div className="viewSwitcher">
          <button className={view === 'month' ? 'viewBtn active' : 'viewBtn'} onClick={() => setSearchParams({ view: 'month' })}>
            Month
          </button>
          <button className={view === 'week' ? 'viewBtn active' : 'viewBtn'} onClick={() => setSearchParams({ view: 'week' })}>
            Week
          </button>
        </div>
    </div>
  )
}

export default Calendar