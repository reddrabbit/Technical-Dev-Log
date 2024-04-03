# Activity: Working with Geopackage JS and Geopackage files for offline functionality
### Start Time: 22:00
### End Time: 23:00
### Date: April 1st, 2024
### Duration: 60 Mins
### Outcomes:
- Understand what a Geopackage is
- Get a feel for its JS libraries
- Deploy a web map with a Geopackage in it [Click Here for Result]()
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

 
