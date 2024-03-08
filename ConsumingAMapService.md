# Activity: Creating a web map with a map image layer from the server's service directory 

### Date: 7th  March, 2024 

### Start Time: 12:24 

### End Time:12:36 

### Duration: 12 minutes 

### Status: Completed 

### Next Step: Publish a map service to the server via ArcGIS Pro 

 

### Steps to follow: 

1. Log in to the Google Cloud Platform if necessary 

1. Start up the virtual machine instance 

1. Connect to the remote desktop with the external IP 

1. Once the desktop Is up and running, move over to your local browser and connect to the REST service directory with the same external IP 

  * https://externalIP/arcgis/rest/services 

  * Note that "https" is crucial in the url to make it work. You will get a safety warning prompt. Proceed regardless of that. 

1. Once in, locate the Map Service and proceed to copy the URL to the service 

1. Open up AGOL and in the contents section, add new item. 

1. Insert your URL into the dialog box. You will be prompted to select the type of item/source of the item 

  * By default, this should identify the URL as an ArcGIS Server item 

  * If not, search for and choose the ArcGIS Server Item 

1. Once done, proceed to finish up by naming, adding tags, descriptions, and that's it! 😉 

1. Create a web map with your newly added image service and save that. 
