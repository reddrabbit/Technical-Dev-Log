# Activity: Exploring SQLite and its capabilities in supporting offline mapping 

### Date: March 14th, 2024 

### Start Time: 21:00 

### End Time: 22:20 

### Duration: 80 minutes 

### Activity Outcome: 

  * Understand SQLite and what it is capable of 

  * Figure out if SQLite is a good technology to take maps offline 

  * Gain insight from peer reviews and blogs about SQLite 

  * Test the software out with a simple workflow 

  * Does it work well with JS APIs like leaflet? Google? ESRI software? 

### Next Step: Download and Set Up SQLite 

### Resources: 

  * [SQLite Homepage] (https://sqlite.org) 

  * [Python SQLite3 Doc] (https://docs.python.org/3/library/sqlite3.html#) 

  * [Taking maps offline with SQLite  -GIS Cloud] (https://av.tib.eu/media/41051) 

### Studying SQLite 

#### What is SQLite: 

SQLite is the most commonly/widely used database in the world today. Written in C programming language. It is not an application but rather a library that can be embedded into applications. It is built into all mobile devices and most computers. Browsers such as Firefox, Chrome make use of SQLite as well. 
It is light weight, fast, and self-contained and requires no installs. Very portable with about 400 kb in size. 
In terms of website deployment, it is a good alternative for relatively small to medium scale web apps. SQLite can handle anywhere up to 100k hits (site visits, an estimated value) per day. Sometimes, may be able to handle more than that. Although, this is indirectly proportional to the dependency on the database. That is to say, if the website makes use of the database very frequently and in a heavy context, then the HTTP requests that can be handled per day will most likely reduce. 
Data analysis functionality is also present within SQLite which may be useful for spatial analysis. Like getting to know the radius of a buffer, perhaps or how many records fall within a certain area after a query has been run.  

### SQLite for Mapping: 
SQLite can and has been in use for a while now in mapping services to store data, often times with the use of an extension called **Spatialite** which makes it easier to store and work with spatial data. It boasts a quick and easy way to be able to get at maps (includes vector and raster) without having to rely on network connectivity all the time.  
### Storing Maps in SQLite: 
1. Can be stored as Vector or Raster Tiles 

  * Downside to tiling: 

    * Lossy compression format 

    * Will require more storage space to accommodate tiles of detailed areas 

    * Time consuming to generate tiles 

    * Not ideal for larger areas 

    * Data cannot be queried as they are just image layers 
1. Can be stored as raw Vector or Raster Data 

  * Pros to raw data 

    * Attributes of the data can be carried over 

    * It is possible to query the data for results 

    * Data is more precise 

    * Rendering maps directly from the DB is easier 

    * Can search the data/map 

  * Cons 

    * Processing and rendering on limited hardware will pose a challenge 

 

### Personal Thoughts: 

SQLite seems to be a good resource for data storing (Data tier). It feels a bit complex when trying to use it for the first time via CMD but is supported by python which makes it easier to work around. The syntax does change within python environments, so understanding both the CMD and Python syntaxes may be a bit tasking. 

The perk of it already installed within mobile devices and browsers makes it a great option because compatibility issues most likely will not be occurring. 

The HTTP request part of SQLite will also not cause a major problem for the client, as there will most likely be very little HTTP requests to the web app per day, since it'll mostly be used for offline purposes in the event that the internet goes out. Pairing the SQLite database with Leaflet will also allow maps to be downloaded for offline functionality, allowing users turn off their internet and still be able to navigate the map. 

A way to integrate this with a web application or any HTML package, however, is a tad bit confusing.  

From an end-user's perspective, this will be a great way to have data presented to them since it can store all sorts of data owing to its database functionality, and can handle up to 281 TB of data. 

Downside is that the files/databases created using SQLite cannot be readily accessed by other RDBMS because SQLite is a self-serving, flat file system. This will only ever be a problem if the client wishes to scale up and use PostgreSQL or some other DBMS. 
