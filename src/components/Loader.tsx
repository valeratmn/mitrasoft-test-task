import { Spinner, Container } from "./BootstrapComponent";

function Loader() {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "15%",
      }}
    >
      <Spinner animation="border" role="status" />
    </Container>
  );
}

export default Loader;
