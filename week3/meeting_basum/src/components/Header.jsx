
const Header = () => {
//gives todays date
    const now = () => {
        const date = new Date();
        return date.toLocaleDateString();
    }

    //gives current time,
    //TODO: should try to make it update like the clock above.
    const timeNow = () => {
        const date = new Date();
        return date.toLocaleTimeString();
    }
    
    return (
        <header className="app-header">
            <div className="header-main">
                <span>{now()}</span>
                <span className="header-sep">|</span>
                <span>{timeNow()}</span>
            </div>

            <div className="headerUser">
                <span className="bell"><i class="fa-solid fa-bell"></i></span>
                <div className="avatar" /><i className="fa-solid fa-user"></i>
                <span>Bigyan Himalaya</span>
            </div>
        </header>
    )
}
export default Header