import { Button, Spinner } from "./BootstrapComponent";

interface CustomButtonProps {
  toggleComentsVisibility: () => void;
  comentsLoading: boolean;
  commentsVisibility: boolean;
}
const CustomButton = ({
  toggleComentsVisibility,
  comentsLoading,
  commentsVisibility,
}: CustomButtonProps) => {
  return (
    <>
      <Button
        onClick={toggleComentsVisibility}
        variant="outline-primary"
        size="sm"
        className="mb-3"
        disabled={comentsLoading}
      >
        {commentsVisibility ? "Hide Comments" : "Show Comments"}
        {"  "}
        {comentsLoading && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="ml-3"
          />
        )}
      </Button>
    </>
  );
};

export default CustomButton;
