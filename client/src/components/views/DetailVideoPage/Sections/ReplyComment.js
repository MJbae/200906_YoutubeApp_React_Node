import React from "react";
import SingleComment from "./SingleComment";

function ReplyComment() {
  const renderReplyComment = (parentCommentId) => {
    props.commentLists.map((comment, index) => {
      <React.Fragment>
        {comment.responseTo === parentCommentId && (
          <div>
            <SingleComment
              refreshFunction={props.refreshFunction}
              comment={comment}
              postId={props.postId}
            ></SingleComment>
            <ReplyComment
              commentLists={props.commentLists}
              postId={props.videoId}
              parentCommentId={comment._id}
              refreshFunction={props.refreshFunction}
            ></ReplyComment>
          </div>
        )}
      </React.Fragment>;
    });
  };

  return (
    <div>
      <p style={{ fontSize: "14px", margin: 0, color: "gray" }}></p>
      {renderReplyComment(props.parentCommentId)}
    </div>
  );
}

export default ReplyComment;
