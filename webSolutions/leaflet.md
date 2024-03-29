# Activity: Creating Map Views with Leaflet 
### Date: 28th March, 2024 
### Start Time: 12:00 
### End Time: 13:30 
### Duration:  90 mins 
### Activity: Creating a web map with buffer functionality  
### Outcomes:  
  - Learn about Leaflet and how it works 
### Next Step: 
  - Explore the rumoured Leaflet Offline JS
### Note:
**Leaflet is a JS library, and as such, is a web tier or presentation part of the web architecture. It is not a full-stack web application and requires a middle tier to handle algorithms and connections to a data component.**

### Steps
##### Setting up the HTML Page:
- Set up a base HTML page on VSCode or any IDE of your choosing 
- Add a link tag to facilitate a link to Leaflet's CSS and Leaflet's drawing libraries  
- The drawing library will allow us to add shapes to the map later.
  - <Will add HTML1  here soon>
- In the body of the HTML document, initialize an empty div element with an id map 
- Create buttons for the Buffer functionality. Name them accordingly. Setting the button that would be used to reset the buffer analysis to a none display.
This ensures it is not visible when the webpage goes live.
  - <Will add HTML2 here soon>
- Now, link the JS files from leaflet for interactive maps, and one for the drawing library from leaflet:
  - <Will add HTML3 here soon>
- Lastly, link a custom external JS file that will hold code for the buffering functions, setting map view and extent, etc:
  -<Will add HTML4 here soon>
  
#### Authoring the Custom JavaScript:
##### Initializing Map Object and Tile Data 
- In the JavaScript Doc, initialize a Leaflet map object and assign it to a variable.
  - Call this variable map for easy understanding. 
  - This instance is what will sit inside of the div element with the id map in our HTML doc. 
  - Set the map's initial view to whichever Lat, Long coordinate that interests you 
  - Unlike Google's and ESRI's JS, the zoom level is also set within the Map object.
- After setting the map instance, we will proceed to set up a Leaflet request to Open Street Maps for map tile layers to be rendered on the map.
This section of the code consists of various parameters:
  - A URL template for fetching tiles, where {s} is a placeholder for the subdomain, {z} is the zoom level, {x} and {y} are the tile coordinates.  
  - The maximum zoom level. This simply means the map's zoom cannot exceed whatever number is set 
  - **Note:** _**Leaflet uses an algorithm known as Domain Sharding to split the load between different subdomains when a request for map tile layers is made.**_
  - <Will add JS1 image here>
- Zoom level 19 is the street-level view. The 12 after the coordinates is the zoom extent for the map object. This is how the map will first be displayed when loaded.  
- **Please note that the placement of the placeholders z, x, and y are very important. Setting these in a different pattern will result in errors.**
- The .addTO(map) code will add the tile layers to the map variable.
##### Set up Leaflet Draw 
- Create a new variable to hold the Leaflet feature group for drawn items 
- Create another variable for the Leaflet draw control for drawing shapes on the map 
- The featureGroup option specifies that the drawn shapes will be added to the drawnItems FeatureGroup.
  -<Will add JS2 image here> 
