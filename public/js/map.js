
const mapFormHandler = async (event) => {
    event.preventDefault();
    // console.log("coordinates submission")
    const lon = document.querySelector('#lon-input').nodeValue.trim();
    const lat = document.querySelector('#lat-input').nodeValue.trim();
    // console.log(lat, lon);




map = new OpenLayers.Map("mapdiv");
map.addLayer(new OpenLayers.Layer.OSM());
   
var pois = new OpenLayers.Layer.Text( "My Points",
                { location:"./textfile.txt",
                  projection: map.displayProjection
                });
map.addLayer(pois);
// create layer switcher widget in top right corner of map.
var layer_switcher= new OpenLayers.Control.LayerSwitcher({});
map.addControl(layer_switcher);
//Set start centrepoint and zoom    
var lonLat = new OpenLayers.LonLat( lon, lat )
      .transform(
        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
        map.getProjectionObject() // to Spherical Mercator Projection
      );
var zoom=11;
map.setCenter (lonLat, zoom);  

      }


 document
 .querySelector('.map')
 .addEventListener('submit', mapFormHandler);