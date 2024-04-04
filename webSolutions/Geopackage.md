# Activity: Working with Geopackage JS and Geopackage files for offline functionality
### Start Time: 22:00
### End Time: 23:00
### Date: April 1st, 2024
### Duration: 60 Mins
### Outcomes:
- Understand what a Geopackage is
- Get a feel for its JS libraries
- Deploy a web map with a Geopackage in it [Click Here for Result](https://reddrabbit.github.io/Technical-Dev-Log/webSolutions/leafletMaps/GPKGLeaflet.html)
- Recreate the workflow highlighted for taking the web map offline (Could not complete this during this work session due to inadequate information and resources)
### Next Step:
- Try the Geopackage Offline Workflow
### Resources:
- [Geopackage's GitHub Repository](https://github.com/ngageoint/geopackage-js)
- [Leaflet-Geopackage Plug-in](https://ngageoint.github.io/leaflet-geopackage/examples/index.html)
#### What's a Geopackage and How can You get it:
A Geopackage is an open standards-based container for storing Geospatial information. It is built on the SQLite relational database which allows for quick and easy file sharing and access on web, mobile and desktop devices. It seems to be an alternative to the now open ESRI shapefile format for storing Geospatial data.
The JS libraries for Geopackage have packages that allow the client request for information from geopackaged assets that are stored locally within the device, eliminating the need for a server connection. It does, however, require the assistance of another JS library like Leaflet to deploy map interfaces upon which the geopackaged files will be displayed, as it has no functionality to provide any web tier functionality.

#### Steps: 
##### Creating a Geopackage with the Geopackage JS Library for web applications
**To get data offline, it is required to convert it to a geopackage to allow the Geopackage JS libraries access it**
- Head on to the [Geopackage](https://ngageoint.github.io/geopackage-geojson-js/) JS webpage and click on the API button
- Once there, copy the code to any IDE of choice and swap out parameters
  - ![image](https://github.com/reddrabbit/Technical-Dev-Log/assets/146376039/e1cb33db-c0ea-4a42-87fb-c65975d9a719)
- Run this code in the IDE to get the SHP converted to a GPKG file.
#### This approach did not work. The conversion failed every time. Here are the errors:
- ![image](https://github.com/reddrabbit/Technical-Dev-Log/assets/146376039/01d9ff67-e69a-4900-b69d-f04e8ea5532b)
- Not exactly sure why this failed. I tried a couple of things to remedy the situation, one of which was installing npm and trying to run the script from the command line. None of this worked.
  - ![image](https://github.com/reddrabbit/Technical-Dev-Log/assets/146376039/0a75444b-4558-4ddf-ba5c-99802b241b97)
  - Command Line Script
- The conclusion for this aspect was that the library was either no longer available or the packages i had were missing some key elements. As there was no other resource out there, i decided to drop the idea.
##### Setting up a map area with Geopackage-Leaflet Plugin:
- Head on over to [Geopackage's Leaflet JS Page](https://ngageoint.github.io/leaflet-geopackage/)
- Click on the GitHub button to go straight to where the JS files are located
- Copy the code and customize to meet your preferences
**_Unfortunately, as i did not have any way to create my own Geopackage files from the previous attempt, and also the time alloted for the weekly work period does not cover data processing and acquisition, i had to use the geopackage file from the repository. Hence the similarity in codes and very little changes made to the initial script._** Credit goes to: _ngageoint_
- Once displayed on the map, the geopackage files can be seen but cannot be queried for information.
**This approach uses an online format to get information from a geopackage that has been hosted somewhere on the web. Not ideal for offline mapping but a good way to work with data across the web.**
#### Attempt at mimicking an offline area creation:
I decided to add a print button function to the webpage via the HTML button tag to mimic an offline solution. The problem with this approach is that:
- it does not allow any form of data query or dynamic update of features on the map
- The map is not scrollable or panable
- It exists as a PDF and nothing more
- Cannot add any feature edits to it
- Would only work as a sort of read only alternative when the map area is needed for visualization in reports.
- The printable extent could not be directly configured, so you will have to do a series of panning and zooming to fit the desired extent
- Could not get the button to print just the map div element. Prints entire web page
# Activity: Working with Geopackage's Offline JS solution for web apps
### Start Time: 12:00
### End Time: 13:00
### Date: April 2nd, 2024
### Duration: 60 Mins
### Outcomes:
- Utilize a map package with feature layers extracted and converted to a readable format for JS
- Get map tiles from OSM and have it underlay the geopackage and its data
### Next Step: 
- Divulge findings with team members
#### Steps:
##### Setting up a local server with Python:
##### Resources: [howCode's Youtube Channel](https://www.youtube.com/watch?v=hFNZ6kdBgO0&list=LL&index=1)

**Here's a guide/technical walkthrough to setting up a local server with python via VS Code (would probably work in other IDEs)**
- Open VS Code and then open the folder that contains the files you will be working with
- Create a new script, and in this script enter the code which you can find here -> [python local server script](https://github.com/reddrabbit/Technical-Dev-Log/blob/main/webSolutions/server.py):
-  Once the script has been authored, run the script
-  In your browser of choice, enter 'localhost:port of choice.htmlfile.html'
- **Note that the server will run for the duration that VS Code or your server script is running. Once either is terminated, the server dies**
- Once the server is up and running, you are ready to proceed to the offline solution provided my geopackage's JS Library.
#### Offline maps with geopackages and the web:
- First step is to head over to the repository with the offline solution owned by the [National Geospatial-Intelligence Agency](https://github.com/ngageoint/geopackage-js/tree/master/docs/examples/GoingOfflineWithGeoPackage)
- Download as a zip file and then extract its content into the same directory as the python local server you created earlier
- The tutorial was demoed with a local server via python and so we will be doing the same.
  - **Note: I did try to do it outside of the local server set up and failed. The console returned about 6 errors. 5 of which were 404 errors**
- Once the files have been extracted, fire up the local server and open up a browser to access the index.html file
##### Discovery:
- Upon loading up the HTML, i realised the errors were still present even though I followed the tutorials as stated in the repository
- ![image](https://github.com/reddrabbit/Technical-Dev-Log/assets/146376039/365eb036-7339-4cf3-a3be-a9b52a25ecb0)
- This lead me to believe the server was not an issue.
- I then tried to revise the code to fix the 404 errors.
- Here is what the code looked like initially:
- ![image](https://github.com/reddrabbit/Technical-Dev-Log/assets/146376039/a2a5e2e9-d584-41b4-8ddd-f483d6f234cd)
- Running the code above resulted in this error:
  - ![image](https://github.com/reddrabbit/Technical-Dev-Log/assets/146376039/2b166de8-16f4-4842-aee3-709214ff990a)
- The 404 Errors were due to missing resources. As the server was trying to access these resources and could not find them.
- After much searching on the web, i could not find the dedicated libraries and decided to give up on it.
- The only remedy i could find was getting the updated CDN for Leaflet's JS and commenting out the JS Libraries for geopackage.
- The other fix was in the local JS file. This is the before code:
  - ![image](https://github.com/reddrabbit/Technical-Dev-Log/assets/146376039/cd9b9e40-2a12-4c00-a1a7-807af456a48e)
  - ![image](https://github.com/reddrabbit/Technical-Dev-Log/assets/146376039/c404e7bc-0a72-43ab-98b1-a7d02930c505)
- Returned this error:
  - ![image](https://github.com/reddrabbit/Technical-Dev-Log/assets/146376039/eba3ed7a-9cd5-4cc7-a2cc-aa51f39e0909)
- Lack of knowledge and adequate resources and documentation on the geopackage API prevented me from properly understanding the error above and as such, i could not find any other remedies aside commenting out the lines of code that resulted in errors
- At the end of the day, i was left with a basic Leaflet Map with absolutely no way of accessing or deploying a geopackage.
- The result can be previewed here: [A not so offline web solution](https://reddrabbit.github.io/Technical-Dev-Log/offlinegpkg/index.html)

 
 



#### Final Thoughts on Geopackage's JS library web solution
While this approach seemed promising, it was ultimately a waste of time in some aspects because most of the JS library supports for geopackage were either outdated with very little documentation and/or helpful resources to get the updated versions or the library just did not exist anymore for one reason or the other. It does, however, function well with their native desktop and mobile app that can accept geopakages and allow the user to configure offline areas as you would with ArcGIS' field maps. I did not look into this approach because it was not a web solution, so very little knowledge of this is known at the moment.
Also, the fact that it still required internet access to grab info from Leaflet to deploy a tiled map to serve as the basemap makes it a half solution to offline mapping, assuming it was a working and well documented solution. Ultimately, this was a fair waste of time for these reasons but it was worth the experience in some ways. 

 
