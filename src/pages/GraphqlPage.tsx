import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  CreatePostDocument,
  DeletePostDocument,
  GetAllPostsDocument,
  UpdatePostDocument,
  GetAllPostsQuery,
  Post,
  GetPostsWithAliasAndConditionDocument,
  GetPostsWithAliasAndConditionQuery,
} from "../generated/graphql";

// Configure typings and code generation in your project.
// Use generated hooks for fetching/updating data.
// Use the typings for data returned from the server.

const GraphqlPage: React.FC = () => {
  const [newPost, setNewPost] = useState({ title: "", user_id: "", views: 0 });
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [updatedPost, setUpdatedPost] = useState({
    title: "",
    user_id: "",
    views: 0,
  });

  const { data: allPostDataWithAliases } =
    useQuery<GetPostsWithAliasAndConditionQuery>(
      GetPostsWithAliasAndConditionDocument,
      {
        variables: { includeViews: false, includeUser: false },
      }
    );

  console.log({ allPostDataWithAliases });

  const {
    data: allPostsData,
    loading: loadingAllPosts,
    error,
  } = useQuery<GetAllPostsQuery>(GetAllPostsDocument);


  const [createPost] = useMutation(CreatePostDocument, {
    refetchQueries: [{ query: GetAllPostsDocument }],
  });

  const [updatePost] = useMutation(UpdatePostDocument, {
    refetchQueries: [{ query: GetAllPostsDocument }],
  });

  const [deletePost] = useMutation(DeletePostDocument, {
    refetchQueries: [{ query: GetAllPostsDocument }],
  });

  const handleCreatePost = () => {
    createPost({ variables: newPost });
  };

  const handleUpdatePost = () => {
    if (!selectedPostId) return;
    updatePost({ variables: { id: selectedPostId, ...updatedPost } });
  };

  const handleDeletePost = (id: string) => {
    deletePost({ variables: { id } });
  };

  const handleSelectPostForUpdate = (post: Post) => {
    setSelectedPostId(post.id);
    setUpdatedPost({
      title: post.title,
      user_id: post.User?.id || "",
      views: post.views,
    });
  };

  if (loadingAllPosts) return <div>Loading posts...</div>;

  if (error) {
    return <div>Error loading posts: {error.message}</div>;
  }

  return (
    <div>
      <h1>GraphQL CRUD with Apollo Client</h1>

      <h2>All Posts</h2>
      <ul>
        {allPostsData?.allPosts?.map(
          (post) =>
            post && (
              <li
                key={post.id}
                onClick={() => handleSelectPostForUpdate(post as Post)}
              >
                {post.title} (Views: {post.views || "N/A"}) - {post.User?.name}
                <button onClick={() => handleDeletePost(post.id)}>
                  Delete
                </button>
              </li>
            )
        )}
      </ul>

      <h2>Create Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="User ID"
        value={newPost.user_id}
        onChange={(e) => setNewPost({ ...newPost, user_id: e.target.value })}
      />
      <input
        type="number"
        placeholder="Views"
        value={newPost.views}
        onChange={(e) => setNewPost({ ...newPost, views: +e.target.value })}
      />
      <button onClick={handleCreatePost}>Create Post</button>

      {/* Update Post Form */}
      <h2>Update Post</h2>
      {selectedPostId ? (
        <>
          <input
            type="text"
            placeholder="Updated Title"
            value={updatedPost.title}
            onChange={(e) =>
              setUpdatedPost({ ...updatedPost, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Updated User ID"
            value={updatedPost.user_id}
            onChange={(e) =>
              setUpdatedPost({ ...updatedPost, user_id: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Updated Views"
            value={updatedPost.views}
            onChange={(e) =>
              setUpdatedPost({ ...updatedPost, views: +e.target.value })
            }
          />
          <button onClick={handleUpdatePost}>Update Post</button>
        </>
      ) : (
        <p>Please select a post to update.</p>
      )}
    </div>
  );
};

export default GraphqlPage;
