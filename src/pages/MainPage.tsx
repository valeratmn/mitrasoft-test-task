import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { Helmet } from "react-helmet";
import {
  setPostSortById,
  setPostSortByTitle,
} from "../store/Slices/postsSlice";

import { Container, Button } from "../components/BootstrapComponent";

import PostsList from "../components/PostsList";
import PaginationBlock from "../components/Pagination";
import SeacrhForm from "../components/SearchForm";
import Loader from "../components/Loader";
import { IPost, PostsState } from "../types/IPost";

const MainPage = () => {
  const [sort, setSort] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const posts: PostsState = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const lastPostIndex: number = currentPage * 10;
  const firtPostIndex: number = lastPostIndex - 10;

  let currentPosts: IPost[] = posts.posts.slice(firtPostIndex, lastPostIndex);

  if (searchValue.trim().length !== 0) {
    currentPosts = posts.posts.filter((post: IPost) =>
      post.title.includes(searchValue)
    );
  }

  useEffect(() => {
    sort ? dispatch(setPostSortByTitle()) : dispatch(setPostSortById());
  }, [sort]); // eslint-disable-line

  if (posts.error) return <Container>{posts.error}</Container>;

  const handlePage = (page: number) => setCurrentPage(page);
  const handleSort = () => {
    setSort((sort) => !sort);
  };

  return posts.isLoaded && !posts.isLoading && !posts.error ? (
    <>
      <Helmet>
        <meta name="desription" content="Main content page" />
        <title>Main Page</title>
      </Helmet>
      <SeacrhForm searchValue={searchValue} setSearchValue={setSearchValue} />
      <Container>
        <Button onClick={handleSort} variant="outline-primary" size="sm">
          {sort ? "Sort by Title" : "Default Sort"}
        </Button>
      </Container>
      {posts.isLoaded && <PostsList posts={currentPosts} />}
      {!searchValue && (
        <PaginationBlock handlePage={handlePage} currentPage={currentPage} />
      )}
    </>
  ) : (
    <Loader />
  );
};

export default MainPage;
