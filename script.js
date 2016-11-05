// Get contacts from JSON file
// var contactPopulate = function (contactList) {
//   var contact = '';
//   var profile = '';
//   for (var i = 0; i < contactList.length; i++) {
//     contact = contactList[i];
//     //contact.status
//     //contact.profileimage
//     if (contact.profileimage === undefined) {
//       profile = '<div class="contact-placeholder">'
//         +contact.name
//         +'</div>';
//       //get first letter of name
//     }
//     else {
//       profile = '<img src="'+contact.profileimage+'"/>';
//       //contact.profileimage;
//     }
//   }
//   '<li class="contacts">'
//     +'<div class="contact-image">'
//       +profile
//     +'</div>'
//     +'<p class="contact-name">'+contact.username+'</p>'
//     +'<div class="contact-status-'+contact.status+'"></div>"'
//   +'</li>'
//   //contactList.user.username
//   //contactList.user.status
//   //contactList.user.profileimage
// }

// Async request
var xhr = new XMLHttpRequest();
   xhr.open("GET", "contact-list-users.json", false);
   xhr.send(null);
   xhr.onreadystatechange = function() {
     if ( xhr.readyState === 4 && xhr.status === 200 ) {
       var jsonContact = JSON.parse(xhr.responseText);
       contactPopulate(jsonContact);
     }
   };

// CONTACT LIST TOGGLE
function slideToggle() {
    var contactList = document.getElementById('contacts-list');
    if(contactList.className == 'contacts-list contacts-hide') {
      contactList.classList.toggle('contacts-hide');
    }
    else {
      contactList.classList.toggle('contacts-hide');
    }
}
