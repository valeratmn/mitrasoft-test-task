import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card, Container } from "../components/BootstrapComponent";
import PostList from "../components/PostsList";
import Profile from "../components/Profile";
import Loader from "../components/Loader";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { getUserFetch } from "../store/Slices/userSlice";
import { ProfileProps } from "../types/IProfile";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const AboutUser = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  const { isLoaded, isLoading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserFetch(userId));
    window.scrollTo(0, 0);
  }, []); //eslint-disable-line

  const { name, email, website, username, address }: ProfileProps =
    useAppSelector((state) => state.user.user);

  const userPosts = useAppSelector(
    (state) => state.posts.posts.filter((post: any) => post.userId == userId) // eslint-disable-line
  );

  console.log("user post", userPosts);

  if (error) return <Container>{error}</Container>;

  return isLoaded && !isLoading ? (
    <>
      <Helmet>
        <meta name="desription" content="User page" />
        <title>{username}</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Container>
          <Profile
            name={name}
            email={email}
            website={website}
            username={username}
            address={address}
          />
          <Card className="mt-4">
            <Card.Header>
              <Card.Title>User Posts</Card.Title>
            </Card.Header>
            <PostList posts={userPosts} />
          </Card>
        </Container>
      </motion.div>
    </>
  ) : (
    <Loader />
  );
};

export default AboutUser;
