# A few tile service request codes i tried that worked
## You may copy these and replace line <line here> of the [leaflet map result]()
### Resources: 
- [URL Request for ArcGIS Tile Service](https://developers.arcgis.com/documentation/mapping-apis-and-services/data-hosting/map-tile-services/introduction/)
- [Other URL Request resources](https://snyk.io/advisor/npm-package/leaflet/functions/leaflet.tileLayer)

### ArcGIS Online:
##### Code:
L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri'
}).addTo(map);

### CartoDB:
#### Code:
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Tiles &copy; CartoDB'
}).addTo(map);
