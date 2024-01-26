import { Avatar, Button, Input, Textarea } from "@mui/joy";
import React, { useEffect, useState } from "react";
import "./Dahboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("All Post");
  const [expandedPosts, setExpandedPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3002/get-posts");

      if (response.ok) {
        const postsData = await response.json();
        setPosts(postsData);
        return postsData; // Return the fetched posts
      } else {
        console.error("Error fetching posts:", await response.json());
        return [];
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3002/create-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (response.ok) {
        console.log("Post created successfully");
        alert("Post created successfully");

        // Refresh posts after creating a new post
        const updatedPosts = await fetchPosts();
        setPosts(updatedPosts);

        // Clear title and description fields
        setTitle("");
        setDescription("");

        // Navigate to "All Post" section
        setSelectedOption("All Post");
        navigate("/dashboard");
      } else {
        console.error("Error creating post:", await response.json());
        alert("Error creating post");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      alert("An unexpected error occurred");
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handlePostToggle = (postId) => {
    setExpandedPosts((prevExpanded) => {
      if (prevExpanded.includes(postId)) {
        // If post is already expanded, do nothing (no collapsing)
        return prevExpanded;
      } else {
        // If post is collapsed, expand it
        return [...prevExpanded, postId];
      }
    });
  };

  const [selectedPost, setSelectedPost] = useState(null);

  const handleCommentClick = (postId) => {
    // Set the selected post state
    setSelectedPost(postId);
  };
  const CommentInput = ({ postId }) => {
    const [comment, setComment] = useState("");

    const handleCommentSubmit = async () => {
      try {
        // Assuming you have an API endpoint for adding comments
        await fetch(`http://localhost:3002/add-comment/${postId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment,
          }),
        });

        // After successfully adding the comment, refresh the posts
        const updatedPosts = await fetchPosts();
        setExpandedPosts([]);
        setPosts(updatedPosts);

        // Clear the comment input field
        setComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    };

    return (
      <div className="mt-3 d-flex gap-3 align-items-center">
        <input
          className="border-0 rounded-2 p-3"
          style={{
            background: "#191919",
            width:"60%",
            height: "38px",
            color: "white",
          }}
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          size="lg"
          style={{
            background: "#252525",
            color: "#787878",
          }}
          onClick={handleCommentSubmit}
        >
          Post Comment
        </Button>
      </div>
    );
  };
  return (
    <div className="container text-white p-3">
      <div
        className="d-flex align-items-start justify-content-around gap-5"
        style={{}}
      >
        {/* Left Side Panel with options */}
        <div className="mt-4" style={{ width: "200px" }}>
          <div
            className={`p-3 mb-4 rounded-3 ${
              selectedOption === "All Post" ? "active" : ""
            }`}
            style={{ width: "290px", background: "#4c4c4c" }}
            onClick={() => handleOptionClick("All Post")}
          >
            All Post
          </div>
          <div
            className={`p-3 mb-4 rounded-3 ${
              selectedOption === "Commented Post" ? "active" : ""
            }`}
            style={{
              width: "290px",
              background: "#0d0d0d",
              color: "rgba(255, 255, 255, 0.5)",
            }}
            onClick={() => handleOptionClick("Commented Post")}
          >
            Commented Post
          </div>
          <div
            className={`p-3 mb-4 rounded-3 ${
              selectedOption === "Commented Post" ? "active" : ""
            }`}
            style={{
              width: "290px",
              background: "#0d0d0d",
              color: "rgba(255, 255, 255, 0.5)",
            }}
            onClick={() => handleOptionClick("Replied Post")}
          >
            Replied Post
          </div>
          <div
            className={` rounded-3 ${
              selectedOption === "Create Post" ? "active" : ""
            }`}
            style={{ marginTop: "70px" }}
            onClick={() => handleOptionClick("Create Post")}
          >
            <button
              className="p-3  d-flex align-items-center justify-content-center gap-2 rounded-3"
              style={{
                width: "290px",
                background: "#0d0d0d",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM17 11H13V7H11V11H7V13H11V17H13V13H17V11Z"
                  fill="white"
                  fill-opacity="0.5"
                />
              </svg>
              <div style={{ fontSize: "20px" }}>Create Post</div>
            </button>
          </div>
        </div>
        {/* Right Side Panel */}
        <div
          className=" p-3 rounded-3"
          style={{
            width: "554px",
            background: "#0d0d0d",
            height: "100%",
            minHeight: "450px",
          }}
        >
          {/* Content based on the selected option */}
          {selectedOption === "All Post" && (
            <div>
              <p className="" style={{ fontSize: "15px" }}>
                All Post
              </p>
              {posts.map((post) => (
                <div
                  className={`p-3 rounded-3 mb-3  ${
                    expandedPosts.includes(post.id) ? "expanded" : ""
                  }`}
                  style={{
                    background: "#191919",
                    cursor: "pointer",
                    color: "rgba(255, 255, 255, 0.5) ",
                  }}
                  key={post.id}
                  onClick={() => handlePostToggle(post.id)}
                >
                  <div>
                    <h5>{post.title}</h5>
                  </div>
                  {expandedPosts.includes(post.id) ? (
                    <div>
                      <p style={{ fontSize: "11px" }}>{post.description}</p>
                      <div className="d-flex align-items-center gap-3 ">
                        {/* Make the "2 Comment" text clickable */}
                        <p onClick={() => handleCommentClick(post.id)}>
                          2 Comment
                        </p>
                        <p>5 Reply</p>
                        </div>
                        {/* Render the CommentInput only if it's the selected post */}
                        {selectedPost === post.id && (
                          <CommentInput postId={post.id} />
                        )}
                    </div>
                  ) : (
                    <div className="d-flex align-items-center gap-3 ">
                      <p>2 Comment</p>
                      <p>5 Reply</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {selectedOption === "Commented Post" && (
            <div>Commented Post Content</div>
          )}
          {selectedOption === "Replied Post" && <div>Replied Post Content</div>}
          {selectedOption === "Create Post" && (
            <div>
              Create Post
              <div className="p-2 mt-3">
                <div className="mb-3">
                  <input
                    className="border-0 rounded-2 p-3"
                    style={{
                      width: "100%",
                      background: "#191919",
                      height: "38px",
                      color: "white",
                    }}
                    placeholder="Post Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <textarea
                    name="Solid"
                    minRows={4}
                    placeholder="Describe your post..."
                    variant="solid"
                    className="border-0 px-3 rounded-2"
                    style={{
                      background: "#191919",
                      width: "100%",
                      height: "130px",
                      color: "white",
                      resize: "none",
                      overflow: "hidden",
                    }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="d-flex align-items-center justify-content-center mt-3">
                  <Button
                    size="lg"
                    style={{
                      width: "290px",
                      background: "#252525",
                      color: "#787878",
                    }}
                    onClick={handlePostSubmit}
                  >
                    Post Submit
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
