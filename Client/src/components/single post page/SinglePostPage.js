import React from "react";
import "./singlepostpage.css";
import { Link } from "react-router-dom";

const SinglePost = () => {
  return (
    <div>
      <div className="top-post-bg">
        <div className="post-details">
          <div className="author-details">
            <div className="author-pic">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="author-name">
              <Link className="link" to="/user/:id">
                {" "}
                by John Morph{" "}
              </Link>
            </div>
          </div>

          <div className="post-time-date">
            <div className="post-date">23 Nov 2021</div>
            <div className="post-time">11:05:55</div>
          </div>

          <div className="post-tech">
            <ul>
              <li>Nodejs</li>
              <li>React</li>
            </ul>
            <i
              class="far fa-edit "
              data-toggle="tooltip"
              data-placement="bottom"
              title="Edit"
              style={{ margin: "0.75rem" }}
            ></i>
            <i
              class="far fa-trash-alt"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Delete"
              style={{ margin: "0.75rem" }}
            ></i>
          </div>
        </div>
      </div>

      <div className="post-content">
        <div className="post-title">This is heading</div>

        <div className="post-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quam
          voluptates quibusdam quidem blanditiis obcaecati nulla eius eligendi?
          Harum beatae, unde ea itaque voluptate aspernatur ut, delectus debitis
          cumque, veniam inventore repellendus deleniti corporis. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Cumque, obcaecati. Error
          commodi hic, optio fuga corporis architecto suscipit possimus cum
          aliquid quod eum saepe iste totam nihil enim veniam officia officiis
          doloribus laboriosam obcaecati dicta. Esse modi quia vitae aspernatur
          obcaecati recusandae nemo ipsum, eius architecto velit, aut placeat.
          Esse qui quibusdam, modi rerum eos aspernatur ea animi est voluptatum.
          Provident facere dolorem laborum eaque nihil quod esse quaerat sunt
          adipisci dolores porro a corrupti omnis amet alias, necessitatibus
          totam voluptates sequi, consectetur quae error possimus aperiam?
          Beatae illo perspiciatis iste magni, quasi aliquid consectetur alias
          quibusdam, laboriosam, dolor magnam!
        </div>

        <button className="single-post-btn">
          <Link className="link" to="/posts">
            {" "}
            Go To Post Page{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
