import { NavLink } from "react-router-dom";

import { Card, Row, Col, Image } from "./BootstrapComponent";

import avatar from "./avatar.png";

import { IPost } from "../types/IPost";

const PostItemBody = ({ userId, title, body }: IPost) => {
  return (
    <>
      <Card.Title>
        <Row>
          <Col
            style={{
              maxWidth: "80px",
            }}
          >
            <NavLink to={`/user/${userId}`}>
              <Image
                src={avatar}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            </NavLink>{" "}
          </Col>
          <Col
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: 0,
            }}
          >
            <h2 style={{ fontSize: 18 }}>{title}</h2>{" "}
          </Col>
        </Row>
      </Card.Title>
      <Card.Text>{body}</Card.Text>
    </>
  );
};

export default PostItemBody;
