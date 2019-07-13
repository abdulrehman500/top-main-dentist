$(document).ready(function(){
    $('.start').on('click', function(){
       $('.page-1').hide();
       $('.page-2').show();
    });

    $('.start2').on('click', function(){
       $('.page-2').hide();
       $('.page-3').show();
    });


    $('.start3').on('click', function(){
       $('.page-3').hide();
       $('.page-4').show();
    });


    $('.start4').on('click', function(){
       $('.page-4').hide();
       $('.page-5').show();
    });

     
      
    

    $('.on-click1').on('click', function(){
      alert("yes");
      // $('.modal').modal("show");
   });

});


var placeSearch, autocomplete;


function initAutocomplete() {
    // autocomplete = new google.maps.places.Autocomplete(
    //     // document.getElementById('location'), { componentRestrictions: ['usa']} , {types: ['cities']});
    //     document.getElementById('location'), {types: ['geocode']});

    var options = {
        types: ['(cities)'],
        componentRestrictions: {country: "us"}
    };

    var input = document.getElementById('location');
    var autocomplete = new google.maps.places.Autocomplete(input, options);

}

