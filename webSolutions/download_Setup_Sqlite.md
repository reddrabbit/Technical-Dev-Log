# Activity: Downloading and Setting up SQLite via CMD and VS Code 

### Date: March 14th, 2024 

### Start Time: 22:40 

### End Time: 23:00 

### Duration: 20 minutes 

### Outcomes:  

  * Install sqlite3 on local computer 

  * Ensure that sqlite3 is available in python library 

  * Ensure it can be accessed via the CMD 

 

### CMD: 

1. Log on to the official SQL Lite webpage at sqllite.org 

1. Click on the Download page and scroll till you find the Precompiled Binaries for Windows option 

1. Select the sqllite-tools-win-64 option to download. The DLL files above this in the same category do not contain the tools for SQLite to function 

1. Once downloaded, extract the data to a secure directory 

1. In the windows search bar, look for Edit Environment Variable and click on it 

1. Once the window opens, click on the Environment Variables button 

1. Under the System Variables box, click New and populate the fields as follows: 

    * Variable name: Any name related to sqlite 

    * Variable value: Browse for the sqlite3.exe that was downloaded>extracted to a safe directory 

1. Once done, click ok and then under the same System Variables box, look for path and double click to open it up 

1. Go to the directory where the extracted downloaded sqlite data was stored and copy the path to this directory 

1. Return your attention to the path window and click on the button that says New.  

1. Paste the path and then click Ok for all open windows that relate to the environment variable 

1. Start a command prompt session and type in sqlite3 

1. If it runs without a hitch, your installation was a success. 

1. Use the command .exit or .quit to close the sqlite3 session😐. 

 

### Python: 

1. In the IDE, type import sqlite3 

1. SQLite already exists in python's library. Has been there since Python 2.5 so you should be fine 

1. Once imported, proceed to test out some codes with it
