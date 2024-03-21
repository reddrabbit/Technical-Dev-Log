# Activity: Reading About and Exploring ESRI's Field Maps 
### Date: 16th March, 2024 
### Start Time: 15:00 
### End Time: 15:30 
### Duration: 30 mins 
#### Outcomes:  
- Get to know field maps 
- Get a feel for the Interface 
- How do you get offline functionality 
#### Next Steps: Set up an Offline Map Session in Field Maps  

### Takeaway: 

- Field maps is a one-stop shop for mobile mapping functionality as well as data collection to enhance field operations as efficiently as possible within an organization 

- It allows Dynamic map accessibility 24/7 with or without internet connectivity 

  - This bit is especially intriguing as the problem statement was/is to find a way for offline map capabilities with emergency response teams in mind 

- Maps can be made offline in 3 ways. 

The first is to create a map via the field maps designer interface and then set the offline extent. 

  - Maps created via the designer interface are usually data collection maps. 

  - They're empty with no cartography features on them, save for the basemap. 

  - Most likely done this way to allow field staff to create the map's data themselves 

The second is via a mobile map package file which can be used in two ways [Read-Only] 

  - A .mmpk file can be launched directly to the device with field maps installed on it to enable offline mapping options 

  The same .mmpk file can also be sent to AGOL and then loaded onto the field maps designer which then can be referenced from the mobile version 

- Third is a normal web map from AGOL and ArcGIS Pro, which can be used as either a read-only or data collection map 

#### Mobile Map Packages: 

- A single file that has all of a map's attributes and data stored, including symbology, colours, and other cartographic entities. 

- The size of the .mmpk file depends on the extent of what is being packaged. 
- Files that can be packaged in a .mmpk: 
  - SHPs and Feature classes 
  - Feature layers and AGOL-hosted layers 
  - Vector Tiles 
  - Raster 
  - Annotations from Pro 
- This method is ideal for read-only situations and offline mapping.

**_While the .mmpk file option is ideal for going offline, it does not really fit into a web solution per see but when considered to be used via AGOL which is part of the web infrastructure for the
ESRI suite of apps, then it could be a potential addition to the web workflow. It would serve as the web tier which creates the interactive interface for the users, as well as the data store where all attributes pertaining to the map
packaged are stored._**
