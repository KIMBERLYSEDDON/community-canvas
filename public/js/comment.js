const postId = document.querySelector("#comment").getAttribute('data-post-id');

const commentHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username-input").value.trim();
    const message = document.querySelector("#comment").value.trim();
  
    if (username && message) {
      const response = await fetch(`/api/comment/${postId}`, {
        method: "POST",
        body: JSON.stringify({ username, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {

        document.location.replace(`/post/${postId}`);

      } else {
        alert("Failed to create comment");

      }
    }
};

const likeHandler = async (event) => {
  event.preventDefault();
  let likes = document.querySelector("#like-btn").getAttribute('data-like-id');
  console.log("THIS", likes)
  if (likes) {
    likes++;
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ likes }),
      headers: {
        "Content-Type": "application/json",
      },
    });
      document.location.replace(`/post/${postId}`);
}
}
const delBtnHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert("Failed to delete comment");
    }
  }
};
  
  
document
    .querySelector(".comment-form")
    .addEventListener("submit", commentHandler);

    
document
    .querySelector(".feature")
    .addEventListener("click", likeHandler);

document.querySelector(".comments").addEventListener("click", delBtnHandler);