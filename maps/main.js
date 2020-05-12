mapboxgl.accessToken = 'pk.eyJ1Ijoiem9uZXVzIiwiYSI6ImNrYTI0d2JyZTA2eWszZm1rczh6aGJieWEifQ.4jCh43s508NQWkb0Z8m0NA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 3,
        center: [4.899, 52.372]
    });

    var layerList = document.getElementById('menu');
    var inputs = layerList.getElementsByTagName('input');

    function switchLayer(layer) {
        var layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    }

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = switchLayer;
    }

     // Add geolocate control to the map.
     map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );

    //search button
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );