$(document).ready(function(){
    $('#search').click(function(){
        alert("search");
        var checker=0;
        for(var i=0;i<12;i++){
            var card=$("div").filter(".col-md-3")[i];
            var title=$("h5").filter(".card-title")[i].innerText.toUpperCase();

            if(title.indexOf($("#inp").val().toUpperCase())>-1){
                card.style.display='block';
                checker++;
            } 
            else{
                card.style.display='none';
            }
        }
        if(checker>0){
            $("#not_find_any_thing").text("");
        }
        else{
            $("#not_find_any_thing").text("No Result Found").fadeIn();
        }
    })
  });
