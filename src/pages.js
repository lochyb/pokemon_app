import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./state/actions/index";

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return <p>Post is HERE</p>;
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state,
  posts: state,
  hasErrors: state,
});

export default connect(mapStateToProps)(PostsPage);
