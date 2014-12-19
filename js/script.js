function showPosition() {
    lat = "10.422026";
    lon = "-75.533604";
    latlon = new google.maps.LatLng(lat, lon);
    mapholder = document.getElementById('mapholder');
    //mapholder.style.height = '250px';
    //mapholder.style.width = '500px';

    var myOptions = {
        center:latlon,zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    };

    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}

// Set up an event listener for the suscription form.
$( "#suscripcion" ).submit(function( event ) {

    event.preventDefault();

    var dataString = {
        "email" : $( "#suscripcion input[name='email']").val()
    };

    $.ajax({
        type: "POST",
        url: "suscripcion.php",
        data: dataString,
        cache: true,
        success: function(html){
            $("#suscripcion-message").html(html);
        }
    });
});

// Set up an event listener for the contact form.
$( "#contact-form" ).submit(function( event ) {

    event.preventDefault();

    var dataString = {
        "name" : $( "#contact-form input[name='name']").val(),
        "email" : $( "#contact-form input[name='email']").val(),
        "ciudad" : $( "#contact-form input[name='ciudad']").val(),
        "telefono" : $( "#contact-form input[name='telefono']").val(),
        "mensaje" : $( "#contact-form textarea[name='mensaje']").val()
    };

    $.ajax({
        type: "POST",
        url: "contacto.php",
        data: dataString,
        cache: true,
        success: function(html){
            $("#contact-message").css("display", "block");
            $("#contact-message").html(html);
        }
    });
});