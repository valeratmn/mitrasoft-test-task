import { IPost } from "../types/IPost";
import PostItem from "./PostItem";

const PostList = ({ posts }: any) => {
  let postsItem;
  if (posts !== undefined) {
    postsItem = posts.map((post: IPost) => {
      return (
        <div key={post.id}>
          <PostItem
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        </div>
      );
    });
  } else {
    postsItem = [];
  }
  return <>{postsItem}</>;
};

export default PostList;
