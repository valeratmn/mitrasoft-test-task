import { Container, Pagination } from "./BootstrapComponent";

import { IPagination } from "../types/IPagination";

const PaginationBlock = ({ handlePage, currentPage }: IPagination) => {
  let active: number = currentPage;
  let items: JSX.Element[] = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <div key={number}>
        <Pagination.Item
          onClick={() => {
            handlePage(number);
            window.scrollTo(0, 0);
          }}
          key={number}
          active={number === active}
        >
          {number}
        </Pagination.Item>
      </div>
    );
  }
  return (
    <Container
      style={{ display: "flex", margin: "0 auto", justifyContent: "center" }}
    >
      <Pagination size="sm">{items}</Pagination>
    </Container>
  );
};
export default PaginationBlock;
