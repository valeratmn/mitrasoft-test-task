import { ChangeEvent } from "react";

import { Form, Container } from "./BootstrapComponent";

interface SearchFormProps {
  searchValue: number | string;
  setSearchValue: (event: string) => void;
}

function SeacrhForm({ searchValue, setSearchValue }: SearchFormProps) {
  const handleInputChanged = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };
  return (
    <Container className="mt-2">
      <Form className="mb-4">
        <Form.Group className="mb-3" controlId="form">
          <Form.Control
            type="search"
            placeholder="Search post of title"
            value={searchValue}
            onChange={handleInputChanged}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default SeacrhForm;
