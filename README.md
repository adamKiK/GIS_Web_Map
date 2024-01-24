## GIS Web Map | Author: Adam K.
This repositorium and Github Pages feature my "Geoportal"-like project for my *Fundamentals of Geoinformatics* university course. The title of my map is *Mapa Turystyczna Województwa Opolskiego* and it features all points of interest (POI) which seemed useful to me.

The featured objects include:
 - Historic Places:
	 - Archeological sites,
	 - Museums,
	 - Palaces,
	 - Battlefields and bomb craters,
	 - Forts, castles, city walls & ruins,
	 - Memorials & tombs
 - Natural Places:
	 - Fountains & natural springs,
	 - Beaches,
	 - Cave entrances,
	 - Parks & nature reserves,
	 - Peaks,
	 - Picnic sites,
	 - Zoos,
 - Leisure:
	 - Cafes,
	 - Restaurants,
	 - Water intakes,
	 - Restrooms,
 - Places connected to art:
	 - Attractions,
	 - Galleries,
	 - View points,
	 - Public artworks,
 - Accomodations:
	 - Hotels, motels, hostels,
	 - Camp sites,
	 - Caravan sites,
	 - Shelters
 - Others:
	 - Tourist information points,
	 - Places of worship (chapels, shrines, churches, crosses)
	 - Theme parks,
	 - Buildings & protected buildings
 - Base layers
	 - [OpenStreetMap](https://www.openstreetmap.org/#map=6/52.018/19.137)
	 - [OpenRailwayMap](https://www.openrailwaymap.org/)
	 - [Hiking & Cycling Trails](https://waymarkedtrails.org/)

All of the above make up a database of ~ 14 900 features in GeoJSON format. The data was acquired in the most part with the use of the [OSM Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API). The data was downloaded with the use of the [Overpass Turbo](https://overpass-turbo.eu/) website. The project has been created locally with the use of [QGIS 3.28.11 - Firenze Software](https://www.qgis.org/pl/site/). The main part of the LeafletJS project code was created with the use of the [qgis2web plugin](https://plugins.qgis.org/plugins/qgis2web/version/3.17.2/).
