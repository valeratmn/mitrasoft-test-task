import { NavLink } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        Page doesn't exist
      </p>
      <NavLink
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          margin: "30px",
        }}
        to="/"
      >
        Back to main page
      </NavLink>
    </>
  );
};

export default NoMatch;
