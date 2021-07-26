import './sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodepen, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?cs=srgb&dl=pexels-creation-hill-1681010.jpg&fm=jpg" alt="picture of guy" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, earum? Dicta voluptatem voluptates ab debitis maxime a unde adipisci officia numquam cumque harum, vitae quae!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Movies</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <FontAwesomeIcon className="sidebarIcon" icon={faGithub}/>
                    <FontAwesomeIcon className="sidebarIcon" icon={faLinkedin}/>
                    <FontAwesomeIcon className="sidebarIcon" icon={faCodepen}/>
                    <FontAwesomeIcon className="sidebarIcon" icon={faInstagram}/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
