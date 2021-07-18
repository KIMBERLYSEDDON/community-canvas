const commentHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username-input").value.trim();
    const message = document.querySelector("#comment").value.trim();
    const postId = document.querySelector("#comment").getAttribute('data-post-id');
    console.log("POST", postId)
  
    if (username && message) {
      const response = await fetch(`/api/comment/${postId}`, {
        method: "POST",
        body: JSON.stringify({ username, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        console.log("hello");
        document.location.replace(`/post/${postId}`);
        // document.location.replace(`/post/${post_id}`);
      } else {
        alert("Failed to create comment");
        console.log(error)
      }
    }
  };
  
  document
    .querySelector(".comment-form")
    .addEventListener("submit", commentHandler);