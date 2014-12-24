//Mostrar mapa
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

    var this_name = $( "#contact-form input[name='name']");
    var this_email = $( "#contact-form input[name='email']");
    var this_ciudad = $( "#contact-form input[name='ciudad']");
    var this_telefono = $( "#contact-form input[name='telefono']");
    var this_mensaje = $( "#contact-form textarea[name='mensaje']");
    var this_enviar = $( "#contact-form input[name='enviar']");


    var dataString = {
        "name" : this_name.val(),
        "email" : this_email.val(),
        "ciudad" : this_ciudad.val(),
        "telefono" : this_telefono.val(),
        "mensaje" : this_mensaje.val()
    };

    this_name.val("");
    this_email.val("");
    this_ciudad.val("");
    this_telefono.val("");
    this_mensaje.val("");
    this_enviar.attr('disabled', 'disabled');


    $.ajax({
        type: "POST",
        url: "contacto.php",
        data: dataString,
        cache: true,
        success: function(html){
            $("#contact-message").css("display", "block");
            $("#contact-message").html(html);
            this_enviar.removeAttr('disabled');
        }
    });
});

var label = $(".slider div.main-slider .label");
$(document).ready(function(){
    $('#myCarousel').on('slide.bs.carousel', function () {
        label.hide();
    });

    $('#myCarousel').on('slid.bs.carousel', function () {
        label.slideDown("slow");
    });

});