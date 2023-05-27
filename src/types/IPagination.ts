export interface IPagination {
  handlePage: (page: number) => void;
  currentPage: number;
}

export default IPagination;
