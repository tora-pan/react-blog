import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
