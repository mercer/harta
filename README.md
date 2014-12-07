[![Build Status](https://travis-ci.org/mercer/harta.svg)](https://travis-ci.org/mercer/harta)

About
-----------
A mobile friendly web app that visualizes Bucharest centered POI categories.

Categories
-------------
* Non-stop pharmacies
* more tbd

Components
--------------
* application: this web app, offers a map-based visualization POI categories centered on Bucharest  
* data import: tbd app that would facilitate data import/data insert for desired POIs

Developers
-----------
* clone the repo
* install npm, ruby or ruby-devel
* install compass gem
* install globally grunt, yo, bower-cli
* bower install & npm install
* to run the app locally, grunt serve and open http://0.0.0.0:9000/#/
* to run the tests, grunt test
* the CI build is on travis: https://travis-ci.org/mercer/harta
* to create a distribution, grunt build

Release on gh-pages
--------------------------------
* make sure all is commited and the travis build is green
* make a clone the project to GH_PAGES_REPO_PATH
* git checkout gh-pages
* go back the main project with master branch path and run ./release.sh GH_PAGES_REPO_PATH

Architecture
-------------
* OSM data <- overpass <- OverPassLayer <- leaflet

Resources
---------------
* http://overpass-turbo.eu/
* http://overpass-api.de/
* http://wiki.openstreetmap.org/wiki/Overpass_API
* https://www.openstreetmap.org/#map=19/44.44731/26.10552&layers=D
* http://leafletjs.com/examples/quick-start.html
* https://github.com/kartenkarsten/leaflet-layer-overpass
* http://wiki.openstreetmap.org/wiki/MapCSS
* http://wiki.openstreetmap.org/wiki/Overpass_turbo
* http://codepen.io/swirlycheetah/pen/cFtzb
* https://github.com/tombatossals/angular-leaflet-directive
* http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL
* http://ypid.de/~osm/evaluation_tool/
* http://wiki.openstreetmap.org/wiki/Key:opening_hours

Credits
------------
* Envelope icon created by Eric Standley for the Noun Project
* Pin icon created by https://commons.wikimedia.org/wiki/User:Mono
