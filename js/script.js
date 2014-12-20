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

var main_slider = $(".slider figure.main-slider");
var label = $(".slider figure.main-slider .label");
var label01 =  $(".slider figure.main-slider .label01");
var label02 = $(".slider figure.main-slider .label02");
var label03 = $(".slider figure.main-slider .label03");
var leftcontrol = document.getElementsByClassName('slider-control-left');
var rightcontrol = document.getElementsByClassName('slider-control-right');

function slide_right(){
    //Se deshabilitan los controles
    leftcontrol[0].onclick = null;
    rightcontrol[0].onclick = null;

    var left = main_slider[0].style.left;
    if (left==""){
        left = 0;
    }else if (left=="-200%"){//(num images -1) x 100
        left= 100;
    }else{
        left = parseFloat(left);
    }

    left = left - 100;

    modify_labels(left/100*-1);

    main_slider.animate({
        "left":  left + '%'
    }, "slow" , function() {
        // Animation complete.
        show_labels(left/100*-1);
        //Se rehabilitan los controles
        leftcontrol[0].onclick = slide_left;
        rightcontrol[0].onclick = slide_right;
    });
}

function slide_left(){
    //Se deshabilitan los controles
    leftcontrol[0].onclick = null;
    rightcontrol[0].onclick = null;

    var left = main_slider[0].style.left;
    if (left=="" || left=="0%") {
        left = -300; // num images x -100
    }else{
        left = parseFloat(left);
    }

    left = left + 100;

    modify_labels(left/100*-1);

    main_slider.animate({
        "left":  left + '%'
    }, "slow", function() {
        // Animation complete.
        show_labels(left/100*-1)
        //Se rehabilitan los controles
        leftcontrol[0].onclick = slide_left;
        rightcontrol[0].onclick = slide_right;
    });
}

function modify_labels(image_num){
    label.hide( "fast", function() {
        // Animation complete.
        switch(image_num) {
            case 0:
                label01.css('left', '1%');
                label01.css('top', '75%');

                label02.css('left', '14%');
                label02.css('top', '80%');

                label03.css('left', '26%');
                label03.css('top', '80%');

                label01.find("h2").html("VS-03A");
                label02.find("h2").html("VS-01A");
                label03.find("h2").html("VS-02A");
                break;
            case 1:
                label01.css('left', '35%');
                label01.css('top', '78%');

                label02.css('left', '48%');
                label02.css('top', '85%');

                label03.css('left', '60%');
                label03.css('top', '78%');

                label01.find("h2").html("VS-06M");
                label02.find("h2").html("VS-05A");
                label03.find("h2").html("VS-04A");
                break;
            case 2:
                label01.css('left', '71%');
                label01.css('top', '80%');

                label02.css('left', '90%');
                label02.css('top', '78%');

                label01.find("h2").html("VS-01B");
                label02.find("h2").html("VS-02B");
                break;
            default:
                alert("No se ha asignado esta posicion");
        }
    });
}

function show_labels(image_num){
    switch(image_num) {
        case 0:
            label.slideDown("slow");
            break;
        case 1:
            label.slideDown("slow");
            break;
        case 2:

            label.slideDown("slow");
            label03.hide();
            break;
        default:
            alert("No se ha asignado esta posicion");
    }
}

setInterval(slide_right,5000);