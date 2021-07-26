import './header.css'

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm"> React & Node</span>
                <span className="headerTitleLg"> Blog</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?cs=srgb&dl=pexels-kaique-rocha-775201.jpg&fm=jpg" alt="forest photo" />
        </div>
    )
}

export default Header
