// Get contacts from JSON file
var request = new XMLHttpRequest();
   request.open("GET", "contact-list-users.json", false);
   request.send(null);
   var contacts = JSON.parse(request.responseText);
   alert (my_JSON_object.result[0]);

//
data.images.forEach( function(obj) {
  var img = new Image();
  img.src = obj.bannerImg1;
  img.setAttribute("class", "banner-img");
  img.setAttribute("alt", "effy");
  document.getElementById("img-container").appendChild(img);
});
//contacts.user.username
//contacts.user.status
//contacts.user.profileimage
