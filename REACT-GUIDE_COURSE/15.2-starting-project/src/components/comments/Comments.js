import { useState, useEffect, useCallback } from 'react';
import {useParams} from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from "../../hooks/use-http";
import {getAllComments} from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {
      sendRequest,
      status,
      data: loadedComments,
      error
  } = useHttp(getAllComments);
  const {
      quoteId
  } = useParams();

  useEffect(() => {
      sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const handlerAddComment = useCallback(() => {
      sendRequest(quoteId);
  }, [sendRequest, quoteId]);

    let comments;

    if(status === 'pending') {
    comments = (
        <div className='centered'>
            <LoadingSpinner/>
        </div>
    )
    }

    if(error) {
        comments = (
            <p className='centered focused'>
                {error}
            </p>
        )
    }

    if(status === 'completed' && (loadedComments || loadedComments.length > 0)) {
        comments = (
            <CommentsList
                comments={loadedComments}
            />
        )
    }

    if(status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
        comments = (
            <p className='centered'>
                No comments
            </p>
        )
    }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm
          quoteId={quoteId}
          onAddedComment={handlerAddComment}
      />}
        {comments}
    </section>
  );
};

export default Comments;
