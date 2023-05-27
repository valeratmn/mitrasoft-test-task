import { useEffect, useState } from "react";
import axios from "axios";

import { Card, Container } from "./BootstrapComponent";

import ComentList from "./ComentsList";
import PostItemBody from "./PostItemBody";
import CustomButton from "./CustomButton";

import { IPost } from "../types/IPost";
import { IComent } from "../types/IComent";

const PostItem = ({ userId, id, title, body }: IPost) => {
  const [comentList, setComentList] = useState<IComent[]>([]);
  const [firstComentLoad, setFirstComentLoad] = useState<boolean>(false);
  const [commentsVisibility, setCommentsVisibility] = useState<boolean>(false);
  const [comentsLoading, setComentsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const getComentsFetch = async () => {
    setComentsLoading(true);
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => setComentList(response.data))
      .catch((error) => {
        console.log(error);
        setError(true);
      });
    const timer = setTimeout(() => setComentsLoading(false), 500);
    return () => clearTimeout(timer);
  };
  useEffect(() => {
    if (commentsVisibility) loadComments();
  }, [commentsVisibility]); // eslint-disable-line

  const loadComments = () => {
    if (firstComentLoad) {
      return;
    } else {
      getComentsFetch();
    }
    setFirstComentLoad(true);
  };

  const toggleComentsVisibility = () =>
    setCommentsVisibility((commentsVisibility) => !commentsVisibility);

  return (
    <Container className="mt-2 mb-2">
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <PostItemBody title={title} body={body} userId={userId} />
          <CustomButton
            toggleComentsVisibility={toggleComentsVisibility}
            comentsLoading={comentsLoading}
            commentsVisibility={commentsVisibility}
          />
          {commentsVisibility && !comentsLoading && (
            <ComentList comentsList={comentList} error={error} />
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostItem;
