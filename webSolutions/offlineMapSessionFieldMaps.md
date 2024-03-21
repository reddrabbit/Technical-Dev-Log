# Activity: Setting up an Offline Map Session in Field Maps
### Start Time: 18:00 
### End Time: 18:30
### Duration: 30 mins
### Next Steps: Discuss Findings with Group and Explore Leaflet

 #### Steps:
 - Log into your account on [arcgis.com](https://www.arcgis.com)
 - On the home page, locate the **Field Maps Designer** app from the application catalogue
 - Once in, a gallery of web maps that you have created will appear
 - Select the map you would like to enable offline functionality for
 - If none of the maps are suitable, then head on over to AGOL to create a web map of the area of interest or use ArcGIS Pro and then export to AGOL
 - Once you have a map selected, the first window that opens up would be the forms window.
   - This window will be empty as there are no forms configured by default
   - We will skip this part for now, as it is not a neccessity in our problem statement.
 - On the left panel of the Designer window, click on the **Offline** option to begin setting up the map for offline use
 - A list of all available layers in the map will be shown, and the basemap as well
 - if you get an error message that reads:
   -  _"Errors in the Content section must be resolved before the map can be enabled for offline use"_
 -  Expand the layers drop down and look at the errors shown on each layer. The 2 most common errors are:
  - Layer is not synced:
    - To fix this, simply click on the Enable sync text next to the layer
  - Layer is nit supported:
    -To fix this error, you will have to do away with the layer, unfortunately.
- Once completed, hit refresh and then toggle on the Offline button on the top left corner of the screen.
- Now that the map has been made offline, the **Manage Areas** button will become accessible
- This will help create areas that will be enabled for offline use.
  - While it would be great to have the entire area within the web map go offline, the reality is that rendering power and storage are a limiting factor
  - The areas created will allow the organization or anyone in charge create offline regions within the map that are of importance.
- Click on the Manage Areas button and select the option to create offline areas.
- Best practice is to use the free form polygon tool to draw the areas within the map for offline functionality as opposed to using the rectangular polygon tool
- After selecting an area, give the area a name, and set the level of detail and packaging options.
  - Packaging option is the duration and frequency with which an offline area would be updated or synced if ever a change was made to the original offline version
  - However, an internet connection is required for syncing to work.
- Exit out of the Manage Areas window and go to the App Setting to configure settings for the forms, GPS accuracy, map level of detail and so on
  - None of these are of importance to offline emegency response, so i have skipped them
- Next step is to share the map
- On the Sharing page, ensure the level is set to Organization or public
- Copy the link or share the QR code with the stakeholders so that they can load it up on their field maps mobile apps
- Alternaively, once the map has been set up, field workers will be able to search for the map on the mobile app
- The map will pop up and notify them of the offline area(s) as well 
