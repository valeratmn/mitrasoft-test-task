import { NavLink } from "react-router-dom";
import { Container, Card, Image, Button } from "./BootstrapComponent";

import avatar from "./avatar.png";

import { ProfileProps } from "../types/IProfile";

const Profile = ({ name, email, website, username, address }: ProfileProps) => {
  return (
    <Container className="mt-4">
      <Card className="text-center">
        <Card.Body>
          <Image
            src={avatar}
            alt="avatar"
            style={{ width: "30%", maxWidth: "200px" }}
          />
          <Card.Title>
            <h2>{name}</h2>
          </Card.Title>
          <Card.Subtitle>username: {username}</Card.Subtitle>
          <br />
          <p>City: {address.city}</p>
          email: <Card.Link>{email}</Card.Link>
          <br />
          website:<Card.Link>{website}</Card.Link>
          <br />
          <Button size="sm" className="mt-2">
            <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
              Back to Main Page
            </NavLink>
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
