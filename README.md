# Cognos-Custom-Portal
Simple Custom Portal for Cognos analytics

This is some sample code I used for my video on custom Cognos Portals, https://www.youtube.com/watch?v=ETvDNbcQC-8&t=7s for IBM Cognos Anlalytics.  If you find the code useful or interesting, please consider giving the video a like. 

This code provides a starting point for creating a custom portal to reports to deliver a small subset of Cognos reports based on a Cognos Folder ID.    


To Use: Simply create a folder named customportal in the Cognos webcontent directory.   That’s important because it uses relative paths to get to the Cognos server. Then place alle the files there.   

Run it in the browser. The url should simply be http://server:9300/customportal/portal.html  or http://server:9300/customportal/login.html, of course replace the server name with yours.  

Once the portal is up and running, simply copy and paste the ID of a Cognos folder that contains either reports or dashboards into the search box at the top right of the portal.  


ToDos:

As Mentioned already this is sample code only meant to help get you started. So the ToDos depend on your requierments, some feedback I recived mentioned:
Larger IFrame
Support for sub folders
Default Folder
Report Format selection
Multiple Iframes for multiple reports
Multiple layouts
Custom Prompts

The sample code can be tweaked to support these any many other requierments.


Issues:  The logon page is based on the cognos sample shipped with the install.  It seems to hang or retun an error if the user is already logged in.  
