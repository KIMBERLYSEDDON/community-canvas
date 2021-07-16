// name Cloudinary api key variables

// const cloudApiKey = process.env.CLOUD_KEY;

// const cloudSecret = process.env.CLOUD_SECRET;

// const cloudURL = process.env.CLOUDINARY_URL;



// upload widget script for my-block view

// var myWidget = cloudinary.createUploadWidget({
//     cloudName: 'cloudcontrol', 
//     uploadPreset: 'canvas'}, (error, result) => { 
//       if (!error && result && result.event === "success") { 
//         console.log('Done! Here is the image info: ', result.info); 
//       }
//     }
//   )
  
//   document.getElementById("upload_widget").addEventListener("click", function(){
//       myWidget.open();
//     }, false);



//second attempt from Cloudinary docs

    const cloudName = "cloudcontrol"; // replace with your own cloud name
    const uploadPreset = "canvas"; // replace with your own upload preset
    const myWidget = cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,

        // Remove the comments from the code below to add 
        // additional functionality.
        // Note that these are only a few examples, to see 
        // the full list of possible parameters that you 
        // can add see:
        //   https://cloudinary.com/documentation/upload_widget_reference

        cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        multiple: false,  //restrict upload to a single file
        folder: "community_canvas", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        maxImageWidth: 1000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
      },
      (error, result) => {
        console.log(error, result)
        if (!error && result /* && result.event === "success"*/) {
          console.log("Done! Here is the image info: ", result.info);
          // document.getElementById("uploadedimage").setAttribute("src", result.info.secure_url);
        } else {
          console.log('!!!!!!', error)
        }
      }
    );

    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );



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




