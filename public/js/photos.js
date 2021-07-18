// name Cloudinary api key variables

// const cloudApiKey = process.env.CLOUD_KEY;

// const cloudSecret = process.env.CLOUD_SECRET;

// const cloudURL = process.env.CLOUDINARY_URL;

// upload widget script for my-block view

// var myWidget = cloudinary.createUploadWidget({
//     cloudName: 'cloudcontrol',
//     uploadPreset: 'canvas'}, (error, result) => {
//       if (!error && result) {
//         console.log('Done! Here is the image info: ', result.info);
//       }
//     }
//   )

//   document.getElementById("upload_widget").addEventListener("click", function(){
//       myWidget.open();
//     }, false);
const newPostHandler = async (event) => {
  //second attempt from Cloudinary docs
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
            console.log("Done! Here is the image info: ", result.info.secure_url);
          const description = document.querySelector("#description-input").value.trim();
          const location = document.querySelector("#location-input").value.trim();
          const image = result.info.secure_url;
          // if (!description || !location){
          //   alert("Please fill out all fields before uploading image")
          // }
          if (description && location && image) {
            const response = fetch("/api/post", {
              method: "POST",
              body: JSON.stringify({ description, location, image }),
              headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
              document.location.replace("/my-block");
            } else {
              alert("Please make sure all fields are filled out before uploading photo.")
            }
          }
          // document.getElementById("uploadedimage").setAttribute("src", result.info.secure_url);
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

//   const myWidgetG = cloudinary.galleryWidget({
//     "cloudName": "cloudcontrol",
//     "mediaAssets": [{
//         "publicId": "community_canvas/lvlpdz2g60aacoldd29o",
//         "mediaType": "image"
//     }, {
//         "publicId": "community_canvas/syeouuhnsvarktnwq2br",
//         "mediaType": "image"
//     }],
//     "container": "#my-gallery"
// });
// myWidgetG.render();

// write fetch function

// function callCloud(){
//     fetch(cloudURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function(data) {
//       console.log(data)
//     })
//     .catch(function (error) {
//         console.warn(error);

//     })

// };

// call fetch function

// callCloud();
const delBtnHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/my-block");
    } else {
      alert("Failed to delete post");
    }
  }
};
document.querySelector(".new-post").addEventListener("click", delBtnHandler);
document.querySelector(".your-posts").addEventListener("click", delBtnHandler);
