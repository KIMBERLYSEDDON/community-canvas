// name Cloudinary api key variables

const cloudApiKey = process.env.CLOUD_KEY;

const cloudSecret = process.env.CLOUD_SECRET;

const cloudURL = process.env.CLOUDINARY_URL;

// upload widget script for my-block view

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'cloudcontrol', 
    uploadPreset: 'canvas'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);





//write fetch function

// function callCloud(){
//     fetch(CLOUDINARY_URL)
//     .then(function (response) {
//         return response.json();
//     }).catch(function (error) {
//         console.warn(error);

//     })
  
// };

//call fetch function

// callCloud();


