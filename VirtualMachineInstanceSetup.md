### Date: 28th February, 2024 

Start Time: 20:39

End Time: 20:47

Duration: 8 minutes 

Status: Done 

Activity: Creating a new Google Cloud Platform project and running a GCP Virtual Machine to test ArcGIS Server 

Status: Completed 

Next Step: Set up a Firewall rule

Setting up a new project:
1. Log in to the Google Cloud Platform 
2. Right next to the logo, there's a bar that should prompt you to create a new project or it should say "My First Project". 
3. If the latter option from Step 2 is not available, click on this bar and then click the "New Project" icon in the upper right of the dialogue box that appears. 
4. Choose a statutory name for your project and click the Create button. 

Creating an Instance of a Virtual Machine:
1. Select a project to work on and click the hamburger icon on the top left area of the screen. 
2. Locate the "Compute Engine" option and hover over it. A list of available options will appear to the right. 
3. From the list of options, look for and select the "VM Instances" option. 
4. You will be redirected to a page with a chip logo. If not previously enabled, click on the "enable" button. This will take about 1-3 minutes to enable. 
5. Once enabled, click on the "Create new instance" button 
6. Create an appropriate name for the VM instance. 
7. The zone should be US Iowa. 
8. The computer should be the E2 series, machine type; medium with 2 CPUs and 4 GB or RAM 
9. The boot disk by default is Linux. However, we require a Windows boot disk for this project. 
10. Click on change and go to custom images. Select the ArcGIS Server from the drop-down menu. 
11. Click on the geom99 image. Size should be 50gb. Leave the boot disk default as is and click the Select button. 
12. The monthly estimate will be recalculated accordingly. 
13. In firewall settings, check the boxes for the Allow HTTP and HTTPS. (Doing this will allow us use a web server on this VM instance) 
14. Click on "Create" to initialize the instance. (This step usually takes a bit of time. This is because the image needs to be copied to your GCP account and the system needs to be booted) [took about 2 minutes to initialize] 
