$(document).ready(function(){
  console.log(citations.length);
  
  $("#numberField").attr("max", citations.length-1);
  
  $("#fortune_form").on("submit", function(event){
    event.preventDefault();
  });
  
  var listOptions='';
  for(var i=0; i < citations.length; i++)
  {
    listOptions += '<option value="'+i+'">'+citations[i]["auteur"]+'</option>';
  }
  console.log(listOptions);
  $("#authorField").html(listOptions);
  
  
  $("#numberField, #authorField").on("change",function(){
    var nombre = $(this).val();
    
    $("#fortune_cookie").empty();
    $("#fortune_cookie").append("<p>"+citations[nombre]['citation']+"</p>");
    $("#fortune_cookie").append("<span>"+citations[nombre]['auteur']+"</span>");
  });
  
  
  $("#fortune_button").on("click", function(event){
    event.preventDefault();
    var nombre=getTirage(citations.length);
    
    $("#fortune_cookie").empty();
    $("#fortune_cookie").append("<p>"+citations[nombre]['citation']+"</p>");
    $("#fortune_cookie").append("<span>"+citations[nombre]['auteur']+"</span>");
  });
  
  
  function getTirage(limit)
  {
   return Math.floor(Math.random()*limit);
  }
});