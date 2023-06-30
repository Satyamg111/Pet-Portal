// init Isotope
var $grid = $('#product-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
function fun(){
    window.open("search.html","_self");
}
$(document).ready(function(){
    $('search').click(function(){
        alert("search");
        var checker=0;
        for(var i=0;i<12;i++){
            var card=$("div").filter(".col-lg-4")[i];
            var title=$("h5").filter(".d-block")[i].innerText.toUpperCase();

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
