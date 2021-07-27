import './write.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Write = () => {
    return (
        <div className="write">
            <img src="https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?cs=srgb&dl=pexels-pixabay-390051.jpg&fm=jpg" alt="surfing in the sunset" className="writeImg" />
            <div className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <FontAwesomeIcon icon={faPlus} className="writeIcon"/>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmitBtn">Publish</button>
            </div>
        </div>
    )
}

export default Write
