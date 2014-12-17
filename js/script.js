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