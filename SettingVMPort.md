# Activity: Setting up a firewall rule, Configuring login details & Connecting to the VM 


### Date: 28th February, 2024 

### Start Time: 20:50

### End Time: 21:15

### Duration: 25 minutes 

### Status: Done 
### Status: Completed 

### Next Step:  Setting ArcGIS Server Ports [Set up GCP firewall rule to allow ArcGIS server management ports] 

 

### Setting up the rule for the firewall: 

1. From the buttons beneath the newly created VM instance, locate the Set Up Firewall Rule button and click on it. 
2. On the ribbon, click on the Create firewall rule icon. 
3. A new window appears. Name your new rule flemingrdp444 (This name is not generic. Name can be anything but for the sake of the course and easy debugging, we will use flemingrdp444) 
4. Slide down all the way to Direction of traffic & Action on match. Ensure the options Ingress & Allow are selected respectively.  
5. Next, make sure the Targets option is set to "All instances in network" which can be selected from the drop down menu. 
6. Under Source Filter ensure IPV4 Ranges is selected. You will need to provide the IP address you want to grant access to in the next text box. 
7. For security reasons, it is best to have this IP Address be the one for your local computer, however, a not so restricted option is available at: 0.0.0.0/0. This will allow any IP address to get at the VM. [Note that this IP range can always be changed] 
8. To get your IP address, visit www.whatsmyip.org The IP you provide in the step above should never begin with 192. 
9. Under the protocols and port section, check TCP and set to 444. 3389 is the default for RDP, but for the course we have made it 444 so it works at Fleming. Set the TCP port to 444. 
10. Click on the create button to finalize this step. 

 

### Log in configuration [Crucial step so we can get to know the username and password for our VM]: 

### Note that this step can be carried out irrespective of whether the Firewall rule is available or not. 

1. If you have already created the firewall rule, go back to the hamburger icon, locate the compute engine option and then the VM instance. 
2. Find your already initialized machine, and under the connect field where it says RDP, click on the little dropdown arrow icon. 
3. Click on the "Set Windows password" option from the dropdown menu. 
4. Swap out whatever name is there to student and click set. Using student ensures we get everything on the VM preset for the sake of the course. Issuing a different name in this field will cause a Google to create a whole new account for us. 
5. Upon changing the name of the user, you will be met with a new pop-up window. This window holds the password to the student account, Copy the password to a secure location. This window will display only once.  

 

### Connecting to the VM : 

### This part of the Activity will allow you to connect to the Virtual Machine. 

1. If you have successfully followed the steps above, then you are ready to get into the Remote Desktop environment. 
2. Still on the VM instance page where your VM instance is located, click on the copy icon next to the External IP Address option. [This is the only IP we can utilize as we are outside of Google's Iowa facility, where the Internal one can be used] 
3. Next, search for the Remote Desktop application on your local computer. In the search bar, type mtsc and it should pop right up. 
4. Click to launch, and in the computer field, paste the copied External Ip. 
5. You should be prompted to specify a username. Sometimes you won't be. If you wish to login via a different user, click on the "show options" dropdown arrow and you'll be able to enter username credential. 
6. Click connect and then enter the password you saved from the last step in the previous section. 
7. When you enter password, a certificate authentication window will appear. Fear not! Just click yes.  
8. You'll then be logged into the remote desktop. Celebrate! 

### Note: 
- You do not turn off the Remote Desktop by clicking "logout or sign out" from the power menu 
- Be extremely careful with the **X** mark that usually indicates a cancel operation or close. This also does not end the virtual session. Your machine will still run if you click it. 
- You can always return to your local computer screen by minimizing the virtual one. 
- You log out or close a session on the VM by shutting down the Remote Desktop as you would a normal local comp. Or selecting the "stop" option from the Compute Engine window 
- Always make is a habit to properly end a session when not in use. 
- If you accidentally touch the **X** symbol, worry not. Just go over to the mtsc login page and redo the steps from this section to reconnect. 
