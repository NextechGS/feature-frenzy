# OpenLayers Feature Frenzy

## Set up

Dependencies pulled in with [npm](https://npmjs.org/).

After cloning the repo (and installing Node):

    npm install

## Examples

The examples all share the same basic layout, so they are built from templates.  To facilitate rebuilding of examples during development, a simple server and watch task are included.  This can be fired up with the following:

    npm start

This will build the examples, copy over files that don't need pre-processing, start a static file server rooted in the `.grunt/self` directory, and launch a file watcher task that will re-build/copy when files change.

While this task is running, the slideshow is available at http://localhost:4000/ and examples are at http://localhost:4000/examples/.  When the slides are deployed, the examples will have the same relative path to the slides (e.g. slides can link to examples with './examples/hello-world.html').

## Deploying

To publish the slides (with dependencies) to the `gh-pages` branch on GitHub, run the following:

    npm run deploy

# Things to show:

Tim

 * tile handling / raster source support
  * XYZ, OSM, Bing, ArcGIS Rest (3.3), TileJSON, etc.
  * tile load events (3.3)
  * world wrapping (3.4)
  * non-square tiles (3.5)

Eric

 * controls & interactions (rotation)

Andreas

 * vector format support
  * KML, GeoJSON, TopoJSON, WKT, GPX, EsriJSON (3.5)
  * transform while parsing

 * vector rendering
  * geometry simplification
  * replay (maintain stroke, symbol size, and fonts)
  * world wrapped rendering (3.5)

Eric

 * feature interaction
   * UTFGrid (3.1)
   * forEachLayerAtPixel
   * forEachFeatureAtPixel

Tim

 * custom rendering
  * geometry function (3.1)
  * immediate rendering
  * pre/postcompose context manipulation
  * raster operations

Eric

 * feature editing
   * draw point, line, polygon, circle (3.4), regular polygon (3.6)
   * modify, translate (3.9)
   * maintain topology
   * snapping (3.5)

Andreas

 * API refinements
   * simpler vector sources (3.5)
   * removal of two way binding (3.5)
   * removal of feature overlay (3.7)

 * upcoming
  * raster reprojection
  * vector tiles

Tim

 * custom builds
 * conclusion
