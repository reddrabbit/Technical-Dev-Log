# Activity: Setting up firewall rule for ArcGIS Ports 


### Date: 2nd  March, 2024 
### Start Time: 14:40 
### End Time: 14:49 
### Duration: 9 minutes 
### Status: Done 
### Next Step: Read and Learn about the services 

 

### Set up GCP firewall rule to allow ArcGIS server management ports 

1. Log in to your GCP account 
1. From the hamburger menu locate Firewall option. Select it. 
1. Click on the option to create a new firewall rule from the ribbon 
1. Set up a name for your rule.  
1. Ensure that the Target option is set to All Instances 
1. Set the source filter to ipv4 ranges, and enter your IP address 
1. Under protocols and port,  check the TCP option. Set TCP ports 6443 and 6080 
1. Click on create to add this rule 

 

### Setting up the firewall via Windows' firewall 

1. From the windows start menu, search for "Windows defender firewall with admin security" 
1. Open it and select the Inbound Rules option from the left panel.  
1. On the right panel of the window, select New Rule. Click next 
1. On the next window, select Port as the rule type. Click next 
1. Select TCP as the port type and set 6443 and 6080 as your ports in the Specific Local Ports input box. Click next 
1. Choose the option Allow the connection. Click next 
1. Make sure Domain, Private and Public options are selected. Click next. 
1. Give your rule a name and click finish to set up the rule. 
