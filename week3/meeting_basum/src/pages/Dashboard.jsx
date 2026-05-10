import { useNavigate } from 'react-router-dom'
import { meetings } from '../../data/meetings'
import './Dashboard.css'

const quickActions = [
    {
        to: '/new-meeting',
        title: 'Start New Meeting',
        desc: 'Start a meeting',
        btnLabel: 'Start Now ',
    },
    {
        to: '/join-meeting',
        title: 'Join with Code',
        desc: 'Join a meeting with code',
        btnLabel: 'Join Meeting ',
    },
    {
        to: '/schedule-meeting',
        title: 'Schedule Meeting',
        desc: 'Plan your meeting',
        btnLabel: 'Schedule Now ',
    },
]

const Dashboard = () => {
    const navigate = useNavigate()

    return (
        <div className="dashboardPage">
            <div className="greeting">
                <h1>Good Morning, Bigyan</h1>
            </div>


{/* cards */}
            <div className="cards">
                {quickActions.map((q) => (
                    <div key={q.title} className="card">
                        <h3 className="cardTitle">{q.title}</h3>

                        <p className="cardDesc">{q.desc}</p>

                        <button
                            className="btn"
                            onClick={() => navigate(q.to)}
                        >
                            {q.btnLabel}
                        </button>
                    </div>
                ))}
            </div>


{/* /// Upcoming meetings section */}
            <div className="section">
                <div className="sectionHeader">
                    <h2>Upcoming Meetings</h2>

                    <button className="viewAll">
                        View All
                    </button>
                </div>

                <div className="meetingList">
                    {meetings.map((m) => (
                        <div key={m.id} className="meetingRow">
                            <div className="meetingLeft">
                                <div className="meetingAvatar">
                                    <i className="fas fa-user"></i>
                                </div>

                                <div>
                                    <p className="meetingTitle">
                                        {m.title}
                                    </p>

                                    <p className="meetingHost">
                                        Host: {m.host}
                                    </p>
                                </div>
                            </div>

                            <div className="meetingRight">
                                <span className="meetingTime">
                                    {m.time}
                                </span>

                                <button
                                    className="btn joinBtn"
                                    onClick={() => navigate(`/meetings/${m.id}`)}
                                >
                                    Join
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard