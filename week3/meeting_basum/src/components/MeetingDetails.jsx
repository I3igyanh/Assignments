import { NavLink, Outlet, useOutletContext, useParams } from 'react-router-dom'
import { meetings } from '../../data/meetings'
import './MeetingDetails.css'

export default function MeetingDetails() {
  const { meetingId } = useParams()
  const meeting = meetings.find((m) => m.id === meetingId)

  return (
    <div className="meetingDetails">
      <div className="hero">
        <div>
          <h1>{meeting.title}</h1>

          <p className="heroSub">
            Host: {meeting.host} <br /><br />
            Time: {meeting.time}
          </p>
        </div>

        <button className="joinBtn">
          Join Now →
        </button>
      </div>

{/* Tab navlinks */}
      <div className="tabs">
        
        <NavLink
          to="details"
          className={({ isActive }) =>
            `tab ${isActive ? 'activeTab' : ''}`
          }
        >
          Details
        </NavLink>

        <NavLink
          to="participants"
          className={({ isActive }) =>
            `tab ${isActive ? 'activeTab' : ''}`
          }
        >
          Participants
        </NavLink>
      </div>

      <div className="content">
        <Outlet context={meeting} />
      </div>
    </div>
  )
}

export function MeetingDetailsTab() {
  const meeting = useOutletContext()

  return (
    <div className="detailCard">
      <h2>Meeting Details</h2>

      <p>
        <strong>Date:</strong> {meeting.date}
      </p>

      <p>
        <strong>Time:</strong> {meeting.time}
      </p>
    </div>
  )
}

export function MeetingParticipantsTab() {
  const meeting = useOutletContext()

  return (
    <div className="detailCard">
      <h2>Participants</h2>

      <p>{meeting.participants.join(', ')}</p>
    </div>
  )
}