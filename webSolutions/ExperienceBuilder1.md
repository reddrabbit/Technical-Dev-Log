# Activity: Exploring Experience Builder Part 1 [Making a web app from scratch] 
### Start Time: 6:40
### End Time: 7:30 
### Duration: 50 mins 
### Next Step: [Working with Experience Builder from scratch Part2](https://github.com/reddrabbit/Technical-Dev-Log/blob/main/webSolutions/ExperienceBuilder2.md) 
### Resource: [ESRI's YouTube Channel](https://www.youtube.com/watch?v=zQMBhtQOwwY&t=420s) 

### Steps: 
**_Note: Experience Builder does not autosave as Story Maps does. Saving along the way Is crucial for maintaining a happy mental state in the event of a sudden device failure_** 😉 

+ Log into your organizational or personal account on [arcgis.com](https://arcgis.com) 
+ Locate the Experience Builder tool 
+ On the home page, click on the Create New button to initiate a new web app instance
    + Exp Builder enables you to create modern 2D & 3D web experiences
    + Several web templates exist
    + Choose the **Blank Fullscreen** option 😎
+ Give the workspace a new name. Something intuitive
+ The left-hand side of the screen contains the content layout. Here you can see all the tools needed to make the web app
+ In the left pane, locate the Data icon and select it to begin adding data to your page
    + Once all data have been collected/identified, click the done button to load them
    + The data will not be added to the pages but will be referenced from the data tab if used in a widget
    + The data tab will also show the number of widgets a particular data is being used in, as well as the total number of layers the data has
+ Click on the page icon in the left-hand pane to view its components.
    + The page icon has options for Overview(Header) and Body
    + Note that the right panel of the exp builder is dedicated to styling the page
    + Also, you can add multiple pages by clicking the Add Page icon
+ Now go back to the Insert section (The topmost icon) to begin adding widgets to customize the current page.
+ Insert a column which is a widget that acts as a container for other widgets
+  Select a List widget and place it inside the column
    +  On the right panel, style the column's width and height however you want
    +  Style the list as well, and choose a layout/orientation template from the __Content & Style__ windows on the left panel
+  Once the styles and content orientations have been set, while still in the Contents window, click Start to begin adding data to the list of items
    + This process links the items to their respective data sources
+ Select any of the list items and then turn your focus to the right-hand pane
+ Under the Data window, select Default. This will load up records from the feature layer and use them as list items
    + <Insert Ex1>
+ Once done, click on the name text for the list item
    + Locate the Dynamic Content icon. This will help in populating the names with a specified field using the Arcade scripting language
    + <Insert Exp2> 
    + <Insert Exp3>
+ After acquiring the place name, click on the image next to the title to also give it a photo.
    + For this step, a dynamic option may also be selected or a Static one from the right panel
    + If using Dynamic, one of the 3 options is available
    + <Insert Exp4>  
    + The Symbol option uses the map symbology for the features
    + The attachment requires an image attachment field in the records to have been pre-populated, which is then used accordingly
    + The URL is...well, a URL that links to a photo that'll be referenced and used
+ Once done, you may click on the text just below the Heading for the list item to set a dynamic one to the field of interest.
    + Font and position can also be played around with
+ The next step is to add a map widget. Do so by locating the map widget on the left pane and dragging it to an appropriate space on the page.
    + <Insert Exp5>
+ On the right pane, the map data source,  tools, orientation, and style of the map can be set.
+ On the ribbon, an option called Live View exists, which can help preview the look of the webpage prior to publishing. Toggle this option on and off as you see fit. 
+ The next step is to configure triggers for the map items. One easy one is a zoom-to trigger. This forces an auto zoom option when one of our list items is selected. 
+ If in the live view mode, toggle it off. 
+ Select any one of the list items 
+ In the right pane, go to the Action section. 
+ Click on the Add Trigger button to initiate the process 
+ Two options are made available: 
    + <Insert Exp6>
+ Select the Record Selection Changes 
+ You will be prompted to select a target. Choose the map as the target, as this is what we want to do something with when an item is selected from the list:
    + <Insert Exp7>
+ You will then have to select an action to complete on the map:
    + <Insert Exp8>
+ Once done, the setup page will look like this
    + <Insert Exp9>
+ Now save your work and head back to the live preview to see it in action. 

