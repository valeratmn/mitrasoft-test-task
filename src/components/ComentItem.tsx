import { comentProps } from "../types/IComent";
import { Card } from "./BootstrapComponent";
const ComentItem = ({ email, body }: comentProps) => {
  return (
    <Card className="mt-2">
      <Card.Header>
        <h3 style={{ fontSize: 15 }}>{email}</h3>
      </Card.Header>
      <Card.Body>
        <p>{body}</p>
      </Card.Body>
    </Card>
  );
};

export default ComentItem;
