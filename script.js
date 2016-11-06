// Get contacts from JSON file
var contactPopulate = function (contactList) {
  var contact = '';
  var profilePic = '';
  for (var i = 0; i < contactList.length; i++) {
    contact = contactList[i];
    if (contact.profileimage === undefined) {
      profilePic = '<span class="contact__placeholder">'
        +contact.username.substring(0,1) //get first letter of name
        +'</span>';
    }
    else {
      profilePic = '<img src="'+contact.profileimage+'"/>';
    }

    document.getElementById('contacts-list').innerHTML +=
    '<li class="contact">'
      +'<div class="contact__image">'
        +profilePic
      +'</div>'
      +'<p class="contact__name">'+contact.username+'</p>'
      +'<div class="contact__status--'+contact.status.toLowerCase()+'"></div>'
    +'</li>';

  }
};

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
