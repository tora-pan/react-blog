import "./postDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const PostDetail = () => {
  return (
    <div className="postDetail">
      <div className="postDetailWrapper">
        <img
          src="https://picsum.photos/800/300"
          alt="person studying with books"
          className="postDetailImg"
        />
        <h1 className="postDetailTitle">
          Blog Title
          <div className="postDetailEdit">
            <FontAwesomeIcon className="postDetailIcon" icon={faEdit} />
            <FontAwesomeIcon className="postDetailIcon" icon={faTrashAlt} />
          </div>
        </h1>
        <div className="postDetailInfo">
          <span className="postDetailAuthor">
            Author: <b>Travis</b>
          </span>
          <span className="postDetailDate">2 hours ago</span>
        </div>
        <p className="postDetailDescription">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          temporibus cumque corporis, sed ullam eius, officiis non, labore
          asperiores ab ducimus assumenda repudiandae. Minima voluptatibus velit
          iste, rerum alias at, maxime amet earum commodi sit reiciendis
          veritatis, magnam tempora aspernatur nobis nostrum aut consectetur!
          Culpa id illo odit facilis officia praesentium sit. Corrupti velit
          officiis aliquid blanditiis doloribus iure magnam! Nesciunt expedita
          facilis quos ipsam veritatis atque numquam quidem dolores tenetur in.
          Repellendus, sunt facere? Pariatur quaerat qui dolore animi nisi
          labore amet exercitationem debitis beatae, maiores eius veritatis
          doloremque consectetur placeat libero quod adipisci! Reiciendis sit
          expedita beatae at.
        </p>
      </div>
    </div>
  );
};

export default PostDetail;
