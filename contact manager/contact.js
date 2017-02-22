
$("#add-new-group").hide();
$('#add-group-btn').click(function(){
$('#add-new-group').slideToggle(function(){
  $('#new_group').focus();
});
return false;
})

document.getElementById("cancel").addEventListener("click", function(){
    alert("Add Contact Cancelled!");
});


window.onload = function() {
if (localStorage) {
document.getElementById('myBtn').addEventListener('click', function() {

      var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
        var company = document.getElementById('company').value;
            var address = document.getElementById('address').value;

      // Save the name in localStorage.
      localStorage.setItem('phone', phone);
      localStorage.setItem('name', name);
      localStorage.setItem('company', company);
      localStorage.setItem('address', address)
    });

for (var i = 0; i < localStorage.length; i++) {
  console.log(localStorage.key(i))
};
}
}