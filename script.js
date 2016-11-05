// Get contacts from JSON file
var contactPopulate = function (contactList) {
  var contact = '';
  var profilePic = '';
  for (var i = 0; i < contactList.length; i++) {
    contact = contactList[i];
    if (contact.profileimage === undefined) {
      profilePic = '<span class="contact-placeholder">'
        +contact.username.substring(0,1) //get first letter of name
        +'</span>';
    }
    else {
      profilePic = '<img src="'+contact.profileimage+'"/>';
    }

    document.getElementById('contacts-list').innerHTML +=
    '<li class="contact">'
      +'<div class="contact-image">'
        +profilePic
      +'</div>'
      +'<p class="contact-name">'+contact.username+'</p>'
      +'<div class="contact-status-'+contact.status.toLowerCase()+'"></div>'
    +'</li>'

  }
}

// Async request
function XHR(callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
        //response code of 0 accepted due to local file system requirements
            callback(xhr.responseText);
        }
    };
    xhr.open('GET', 'contact-list-users.json', true);
    xhr.send();
}

function init() {
 XHR(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    contactPopulate(actual_JSON);
 });
}

init();

// function loadJSON(callback) {
//
//     var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'contact-list-users.json', true);
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);
//  }
//


// CONTACT LIST TOGGLE
function slideToggle() {
    var contactList = document.getElementById('hide-container');
    if(contactList.className == 'hide-container contacts-hide') {
      contactList.classList.toggle('contacts-hide');
    }
    else {
      contactList.classList.toggle('contacts-hide');
    }
}
