
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

//second attempt from Cloudinary docs
let imgUrl;
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
    console.log(error, result);
    if (!error && (result && result.event === "success")) {
      console.log("Done! Here is the image info: ", result.info.secure_url);
      const image = result.info.secure_url
      fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify( { image }),
        headers: { 'Content-Type': 'application/json' },
      }).then ((res) =>{
        res.json();
      } ).then ((data)=> {
        console.log(data)
      })
      return imgUrl;
      // document.getElementById("uploadedimage").setAttribute("src", result.info.secure_url);
    } else {
      console.log("!!!!!!", error);
    }
  }
);


document.getElementById("upload_widget").addEventListener(
  "click",
  function (e) {
    e.preventDefault()
    myWidget.open();
    return imgUrl;
  },
  false
);
console.log(imgUrl)
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
