
const newPostHandler = async (event) => {
  //Cloudinary docs
  const cloudName = "cloudcontrol"; // replace with your own cloud name
  const uploadPreset = "canvas"; // replace with your own upload preset
  const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,

      cropping: true, //add a cropping step

      multiple: false, //restrict upload to a single file
      folder: "community_canvas", //upload files to the specified folder

      context: { alt: "user_uploaded" }, //add the given context data to the uploaded files

      maxImageWidth: 1000, //Scales the image down to a width of 2000 pixels before uploading
    },
    (error, result) => {
          if (result.event === "success") {

          const description = document.querySelector("#description-input").value.trim();
          const location = document.querySelector("#location-input").value.trim();
          const image = result.info.secure_url;

          if (description && location && image) {
              fetch("/api/post", {
              method: "POST",
              body: JSON.stringify({ description, location, image }),
              headers: { "Content-Type": "application/json" },
            }).then((response)=> {
            if (response.ok) {
              document.location.replace("/my-block");
            } else {
              alert("Please make sure all fields are filled out before uploading photo.")
            }
          }
        )}
        };
      }
  );
  document.getElementById("upload_widget").addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      myWidget.open();
    },
    false
  );
};

newPostHandler();


const delBtnHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });
console.log(response)
    if (response.ok) {
      document.location.replace("/my-block");
    } else {
      alert("Failed to delete post");
    }
  }
};
document.querySelector(".new-post").addEventListener("click", delBtnHandler);
document.querySelector(".your-posts").addEventListener("click", delBtnHandler);
