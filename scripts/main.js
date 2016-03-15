$(document).ready(function(){
  console.log(citations.length);
  
  
  var historiqueCitations=localStorage.getItem("historiqueCitationsString");
  if(historiqueCitations == null)
  {
    historiqueCitations=new Array();
  }
  else
  {
    historiqueCitations=JSON.parse(historiqueCitations);
  }
  
  
  
  
  $("#numberField").attr("max", citations.length-1);
  
  $("#fortune_form").on("submit", function(event){
    event.preventDefault();
  });
  
  var listOptions='';
  for(var i=0; i < citations.length; i++)
  {
    listOptions += '<option value="'+i+'">'+citations[i]["auteur"]+'</option>';
  }
  //console.log(listOptions);
  $("#authorField").html(listOptions);
  
  
  $("#numberField, #authorField").on("change",function(){
    var nombre = $(this).val();
    
    
    historiqueCitations.push(nombre);
    historiqueCitationsString=JSON.stringify(historiqueCitations);
    localStorage.setItem("historiqueCitationsString",historiqueCitationsString );
    
    console.log(historiqueCitations);
    $("#fortune_cookie").empty();
    $("#fortune_cookie").append("<p>"+citations[nombre]['citation']+"</p>");
    $("#fortune_cookie").append("<span>"+citations[nombre]['auteur']+"</span>");
  });
  
  
  $("#fortune_button").on("click", function(event){
    event.preventDefault();
    var nombre=getTirage(citations.length);
    
    historiqueCitations.push(nombre);
    historiqueCitationsString=JSON.stringify(historiqueCitations);
    localStorage.setItem("historiqueCitationsString",historiqueCitationsString );
    
    
    $("#fortune_cookie").empty();
    $("#fortune_cookie").append("<p>"+citations[nombre]['citation']+"</p>");
    $("#fortune_cookie").append("<span>"+citations[nombre]['auteur']+"</span>");
  });
  
  
  function getTirage(limit)
  {
   return Math.floor(Math.random()*limit);
  }
  
  $("#nom p").on('blur', function(){
    localStorage.setItem("nomUser", $(this).html() );
  });
  
  
  
  var nomUser = localStorage.getItem("nomUser");
  
  if(nomUser != null)
  {
    $("#nom p").html(nomUser);
  }
  
  
  $("#nom span").on('click', function(){
    localStorage.removeItem("nomUser");
    $("#nom p").html("Votre nom");
  });
  
  $("#menu button").on("click", function(){
  
    $("#menuContent").toggleClass("open");
    $(this).toggleClass("is-active");
    
  
  });
  
  /*citationsString=JSON.stringify(citations);
  localStorage.setItem("citationDsLocal", citationsString );
  
  citations=localStorage.getItem("citationDsLocal");
  citations=JSON.parse(citations);*/
  
  
  
  
  
  
  
  
  
  
  
  
});