/*
 *+------------------------------------------------------------------------+
 *| Licensed Materials - Property of IBM
 *| IBM Cognos Products: Content Explorer
 *| (C) Copyright IBM Corp. 2015, 2016
 *|
 *| US Government Users Restricted Rights - Use, duplication or disclosure
 *| restricted by GSA ADP Schedule Contract with IBM Corp.
 *+------------------------------------------------------------------------+
 */
//Updated Line 31 to redirect to Portal example *Ed Gonzalez

// Login via the CMS (Cognos Mashup Service) API
function login() {
    var xmlhttp = new XMLHttpRequest();
    var oForm = document.forms[0];

    // grab the login form input values
    var namespace = oForm.elements.namespace.value;
    var userID = oForm.elements.userid.value;
    var password = oForm.elements.password.value;
    var canAuthenticate = true;

    // sent a POST request to the CMS Login API
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {
            // if not logged in attempt to login
            if (xmlhttp.status === 200) {
                // Redirect to page with embedded iFrames after authenticated
                //Updated to redirect to portal Sample
                window.location = 'portal.html';
            } else if (xmlhttp.status === 441) {
                var loginContext = getLoginContext(namespace, userID, password);
                canAuthenticate = false;
                xmlhttp.open("POST", "/bi/v1/disp/rds/auth/logon", false);
                xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xmlhttp.send(loginContext);
            }
        }
    };
    // attempt to GET home perspective to trigger a 441 if not authenticated
    xmlhttp.open("GET", '/bi/v1/perspectives/home' + '?' + Date.now(), true);
    xmlhttp.send();
}

function getLoginContext(nameSpace, userID, password) {

    var context = "xmlData=<credentials>" +
        "<credentialElements><name>CAMNamespace</name><label>Namespace:</label>" +
        "<value><actualValue>" + nameSpace + "</actualValue></value>" +
        "</credentialElements><credentialElements><name>CAMUsername</name><label>User ID:</label>" +
        "<value><actualValue>" + userID + "</actualValue></value>" +
        "</credentialElements><credentialElements><name>CAMPassword</name><label>Password:</label>" +
        "<value><actualValue>" + password + "</actualValue></value>" +
        "</credentialElements></credentials>";


    return context;
}