// calendar

document.getElementById('add-to-calendar').addEventListener('click', function() {
    const title = encodeURIComponent('#MEDFLUENCERSACADEMY');
    const details = encodeURIComponent('We are delighted to invite you to the 1st edition of our #MedfluencersAcademy by LDB Europe and ISDI Digital University, where you will learn the best tools to maximize your business through social media.');
    const location = encodeURIComponent('Calle de Viriato, 20, 28010 Madrid');
    const startDate = '20240714T090000Z';
    const endDate = '20240714T100000Z';

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;

    window.open(googleCalendarUrl, '_blank');
});

// mapa

function initMap() {
    var location = {lat: 40.433926, lng: -3.700888};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 16,
      styles: [
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {"saturation": 36},
            {"color": "#000000"},
            {"lightness": 40}
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {"visibility": "on"},
            {"color": "#ffffff"},
            {"lightness": 16}
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
            {"visibility": "off"}
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            {"color": "#d6d6d6"},
            {"lightness": 20}
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {"color": "#c6c6c6"},
            {"lightness": 17},
            {"weight": 1.2}
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {"color": "#e0e0e0"},
            {"lightness": 20}
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {"color": "#f0f0f0"},
            {"lightness": 21}
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {"color": "#b8b8b8"},
            {"lightness": 17}
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {"color": "#a8a8a8"},
            {"lightness": 29},
            {"weight": 0.2}
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {"color": "#d8d8d8"},
            {"lightness": 18}
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {"color": "#f8f8f8"},
            {"lightness": 16}
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {"color": "#d6d6d6"},
            {"lightness": 19}
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {"color": "#e6e6e6"},
            {"lightness": 17}
          ]
        }
      ]
    });
  
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Calle de Viriato, 20, 28010 Madrid',
      icon: './img/pin-mapa.svg'  
    });
  }