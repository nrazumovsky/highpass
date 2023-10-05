let center = [55.77000343200856, 37.63919422554778];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 15,
  });

  let placemark = new ymaps.Placemark(
    center,
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: './img/geotag.svg',
      iconImageSize: [12, 12],
      iconImageOffset: [-25, -40],
    }
  );

  let position = map.getGlobalPixelCenter();

  map.setGlobalPixelCenter([position[0] - 250, position[1] + 85]);

  map.geoObjects.add(placemark);

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
}

ymaps.ready(init);
