import { NavLink } from 'react-router-dom'

const SideBar = () => {

    //** links array
    //** to gives path and label give text name in sidebar  */
    const links = [
        { to: '/', label: 'Dashboard', end: true },
        { to: '/new-meeting', label: 'New Meeting' },
        { to: '/join-meeting', label: 'Join Meeting' },
        { to: '/calendar', label: 'Calendar' },
        { to: '/schedule-meeting', label: 'Schedule Meetings' },
        { to: '/profile-settings', label: 'Profile Settings' },
    ]
  return (
    <aside className="sidebar">
        <h2 className="sidebar-title">meeting basum</h2>
        <nav>
            <ul className="sidebar-links">
                {links.map((link) => (
                    <li key={link.to}>
                        <NavLink end={link.end} to={link.to} 
                        className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
                          {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
  )
}

export default SideBar