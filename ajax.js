$(document).ready(function(){
//load
$("#datos").load("https://reqres.in/")

// Get y post

$.get("https://reqres.in/api/users", {page:3},function(response){

console.log(response)

});
});


