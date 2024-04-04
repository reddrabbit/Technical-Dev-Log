# Activity: Pairing Leaflet and JS to access local geojson data
## Start Time: 20:20
## End Time: 20:55
## Duration: 35 minutes
## Outcomes:
- Get a web map to display local data
## Next Steps:
- Research ways to facilitate data query for the local geoJson file without an API
### Result: [Attempt](https://reddrabbit.github.io/Technical-Dev-Log/webSolutions/leafletMaps/offlinetest/index.html). Please note that when you do run this via the link provided, it will not display the GeoJson. You must use a local server for this to work. 
### Resources: [Maria Coitinho on Medium](https://medium.com/@brasildu/fetch-get-request-on-local-api-6beb290ec50b)
**Will be making use of local server for this as web servers have a security restriction on accessing locally stored data due to security reasons**
**Error when using a non local server:**
![image](https://github.com/reddrabbit/Technical-Dev-Log/assets/146376039/34ca55f1-964f-4fae-aca9-2293d0b42cd3)
### Steps:
- Set up a leaflet map view as usual
  - Initial plan was to generate a tiled basemap and save that locally, but that would consume more time and is along the lines of data acquisition, which is outside
   the allowance for this course.
  - Decided to use a tile layer from OSM
- For handling the GeoJSON, enter this JS:
![image](https://github.com/reddrabbit/Technical-Dev-Log/assets/146376039/2d2d4bdd-578e-4303-830b-f98cfe48aea2)
- The Fetch path should be changed to match whichever port and host is currently being used. 
- The script will fetch the geoJSON using the local host. Make sure the file is within the same directory as where the local server has been set to run on.
- Now launch the html file via the local server.

#### Takeaway and notes:
- This is not 100% offline, and while it does allow me access spatial data without hitting a service, i am not entirely sure running a local sevrer
  fully counts as a web solution.
- The local server tends to lag sometimes when the page is refreshed and it tried a GET Request for the geoJSON, even though it is locally stored
- Fairly satisfactory outcome, although once the internet is completely gone, the leaflet map will not be accessible
- This causes the JS to also be inaccessible to the local server. This is becuase it is being added with a leaflet API
- As at this time, i will only recommend this option for testing and not full deployment.
- It seems to only have a web tier and middle tier which is the part of the JSthat goes to get the basemap. Not a full stack option.
- The Data tier more or less does not exist or could be an optional part as the data lives on the local computer so is not integrated with the web whatsoever.

Final Note:
This solution seemed promising, but alas, the dependency on the Leaflet JS functionality in displaying a basemap and deploying the offline data onto the map makes it
a solution that still requires web functionality, and as such will not be ideal for solving the problem statement of the group. 
