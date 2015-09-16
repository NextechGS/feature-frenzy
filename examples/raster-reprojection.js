proj4.defs('ESRI:54009', '+proj=moll +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 ' +
    '+units=m +no_defs');
ol.proj.get('ESRI:54009').setExtent([-18e6, -9e6, 18e6, 9e6]);

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM({
        reprojectionErrorThreshold: 10,
        url: 'https://otile{1-4}-s.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg',
        wrapX: false,
        attributions: [
          new ol.Attribution({
            html: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a>'
          })
        ]
      })
    })
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 1
  })
});

var projection = document.getElementById('projection');
projection.addEventListener('change', function() {
  var view = map.getView();
  var newProj = projection.options[projection.selectedIndex].value;
  var oldProj = view.getProjection();
  map.setView(new ol.View({
    projection: newProj,
    center: ol.proj.transform(view.getCenter(), oldProj, newProj),
    zoom: view.getZoom(),
    rotation: view.getRotation()
  }));
});
