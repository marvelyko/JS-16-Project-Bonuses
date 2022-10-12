let map;
const mapData = [
  {
    coordinats: { lat: 41.6798, lng: 44.8298 },
    title: "Hello Tbilisi",
    comment: "Hello Tbilisi Contnet",
  },
  {
    coordinats: { lat: 42.2591, lng: 42.7011 },
    title: "Hello Kutaisi",
    comment: "Hello Kutaisi Contnet",
  },
  {
    coordinats: { lat: 42.1611, lng: 42.3371 },
    title: "Hello Samtredia",
    comment: "",
  },
];

initMap = () => {
  // Add pin location on the map
  const myLating = { lat: 41.6798, lng: 44.8298 };
  var options = {
    zoom: 6,
    center: myLating,
  };
  map = new google.maps.Map(document.getElementById("map"), options);

  //Add GeoLocation

  window.addEventListener("load", () => {
    let long;
    let lat;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((reference_position) => {
        let ltd = reference_position.coords.latitude;
        let lgd = reference_position.coords.longitude;
        addMarker({
          coordinats: { lat: ltd, lng: lgd },
          title: "my current location",
          comment: "my current location",
        });
      });
    }
  });

  // Add location pin on the map

  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coordinats,
      map: map,
      title: props.title,
    });
    if (props.comment) {
      var info_window = new google.maps.InfoWindow({
        content: props.comment,
      });
      marker.addListener("click", function () {
        info_window.open(map, marker);
      });
    } else {
      marker.addListener("click", function () {
        alert("this location doesn't have content");
      });
    }
  }
  // Add locations from array
  mapData.forEach((data) => {
    addMarker(data);
  });
  // Add location by click
  google.maps.event.addListener(map, "click", function (e) {
    addMarker({ coordinats: e.latLng });
  });
};
