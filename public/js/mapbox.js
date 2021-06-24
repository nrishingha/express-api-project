export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibnJveSIsImEiOiJja3FhaWZ1amQwZGFyMm9sOTh5d3NyeTM5In0.C8o0soacyAeMGuO1gFDFvQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nroy/ckqajxpzg1arg17o7o8zr7urh',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({ offset: 40 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      right: 100,
      bottom: 150,
      left: 100,
    },
  });
};
