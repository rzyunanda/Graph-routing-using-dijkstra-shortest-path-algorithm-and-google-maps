                    var i = 0;
                    var airport = {
                        lat: 33.64017019720775,
                        lng: -84.444197108928
                    };

                    function initMap() {
                        var map = new google.maps.Map(document.getElementById('map'), {
                            zoom: 18,
                            center: airport
                        });
                        var script = document.createElement('script');
                        script.src = "geojson.json";
                        document.getElementsByTagName('head')[0].appendChild(script);
                        map.data.addGeoJson(data);

                        var Path = new google.maps.Polyline({
                            path: x_path,
                            geodesic: true,
                            strokeColor: '#FF0000',
                            strokeOpacity: 1.0,
                            strokeWeight: 2
                        });
                        Path.setMap(map);
                    }

                    var data = {
                        "type": "FeatureCollection",
                        "features": [{
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44419691672579,
                                        33.64016740527309
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.4446556369029,
                                        33.640183023035334
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44373563921079,
                                        33.64019642119824
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.4442077079974,
                                        33.640471083078374
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44467709457501,
                                        33.640488947235355
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44375441467389,
                                        33.640488947235355
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.4443337718211,
                                        33.640640792420044
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44433645403012,
                                        33.64116778245426
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44467709457501,
                                        33.64117894746248
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44371149932965,
                                        33.64117001545601
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44374100362882,
                                        33.64136205339048
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44468514120206,
                                        33.64137545136993
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44275395071134,
                                        33.641379917362606
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44243745004758,
                                        33.64152952798377
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44232211505994,
                                        33.64154292593706
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44233552610501,
                                        33.64176845783956
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44245622551068,
                                        33.64236243012198
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.442332843896,
                                        33.64236019715115
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44244507183839,
                                        33.64126510629753
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44237935771753,
                                        33.6411969997931
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44237667550851,
                                        33.641094281684516
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.4423203491192,
                                        33.6410965146882
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.4423691018086,
                                        33.64081561416334
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44236002435844,
                                        33.64063557541271
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44247535934608,
                                        33.640550720778556
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44246918607053,
                                        33.64041012312567
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44238335538205,
                                        33.640307404078385
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44238603759106,
                                        33.64018682069261
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44231361794766,
                                        33.64018682069261
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44240213084515,
                                        33.639889827559344
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44231093573865,
                                        33.639818370411994
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44243968177136,
                                        33.63980050611588
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.4424289529353,
                                        33.6395615707992
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44230557132062,
                                        33.63949681251507
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.4424000651295,
                                        33.63924791763676
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44231423444103,
                                        33.63924568458515
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44237860745739,
                                        33.63880353922673
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.442308870023,
                                        33.638801306163586
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44244298047374,
                                        33.63867625453603
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44243225163768,
                                        33.638292166258694
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.442308870023,
                                        33.63816934697132
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44240765431778,
                                        33.637713167704575
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44230573037521,
                                        33.63760821234602
                                    ]
                                },
                                "properties": {}
                            },
                            {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-84.44232718804733,
                                        33.6373201427258
                                    ]
                                },
                                "properties": {}
                            }
                        ]
                    }

                    window.eqfeed_callback = function(results) {
                        for (var i = 0; i < results.features.length; i++) {
                            var coords = results.features[i].geometry.coordinates;
                            var latLng = new google.maps.LatLng(coords[1], coords[0]);
                            var marker = new google.maps.Marker({
                                position: latLng,
                                map: map
                            });
                        }
                    }

                    function weight(a, b) {
                        var R = 6371; // Radius of the earth in km
                        var dLat = deg2rad(b[1] - a[1]); // deg2rad below
                        var dLon = deg2rad(b[0] - a[0]);
                        var temp =
                            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                            Math.cos(deg2rad(a[1])) * Math.cos(deg2rad(b[1])) *
                            Math.sin(dLon / 2) * Math.sin(dLon / 2);
                        var c = 2 * Math.atan2(Math.sqrt(temp), Math.sqrt(1 - temp));
                        var d = R * c; // Distance in km
                        return d;
                    }

                    function deg2rad(deg) {
                        return deg * (Math.PI / 180)
                    }

                    var INFINITY = 1 / 0;

                    function DirectedGraph() {
                        this.vertices = {};
                        this.addVertex = function(name, edges) {
                            edges = edges || null;
                            this.vertices[name] = edges;
                        }
                    }

                    function findSmallest(dist, q) {
                        var min = Infinity;
                        var minNode;

                        for (var node in q) {
                            if (dist[node] <= min) {
                                min = dist[node]
                                minNode = node;
                            }
                        }

                        delete q[minNode]
                        return minNode;
                    }

                    function djikstra(graph, startVertex) {
                        var dist = {};
                        var prev = {};
                        var q = {};
                        var shortestPaths = {};

                        for (var vertex in graph.vertices) {
                            dist[vertex] = INFINITY;
                            prev[vertex] = null;
                            q[vertex] = graph.vertices[vertex];
                            shortestPaths[vertex] = [];
                        }

                        dist[startVertex] = 0;

                        while (Object.keys(q).length !== 0) {
                            var smallest = findSmallest(dist, q);
                            var smallestNode = graph.vertices[smallest]
                            //searches for the vertex u in the vertex set Q that has the least dist[smallest] value.

                            for (var neighbor in smallestNode) {
                                var alt = dist[smallest] + smallestNode[neighbor];
                                //smallestNode[neighbor] is the distance between smallest and neighbor
                                if (alt < dist[neighbor]) {
                                    dist[neighbor] = alt
                                    prev[neighbor] = smallest
                                }
                            }
                        }

                        getShortestPaths(prev, shortestPaths, startVertex, dist)

                        return {
                            shortestPaths: shortestPaths,
                            shortestDistances: dist
                        }
                    }

                    function getShortestPaths(previous, shortestPaths, startVertex, dist) {
                        debugger
                        for (var node in shortestPaths) {
                            var path = shortestPaths[node];

                            while (previous[node]) {
                                path.push(node);
                                node = previous[node];
                            }

                            //gets the starting node in there as well if there was a path from it
                            if (dist[node] === 0) {
                                path.push(node);
                            }
                            path.reverse();
                        }
                    }
                    var graph = new DirectedGraph();
                    graph.addVertex('0', {
                        '1': weight(data.features[0].geometry["coordinates"], data.features[1].geometry["coordinates"]),
                        '2': weight(data.features[0].geometry["coordinates"], data.features[2].geometry["coordinates"]),
                        '3': weight(data.features[0].geometry["coordinates"], data.features[3].geometry["coordinates"])
                    });
                    graph.addVertex('1', {
                        '4': weight(data.features[1].geometry["coordinates"], data.features[4].geometry["coordinates"])
                    });
                    graph.addVertex('2', {
                        '5': weight(data.features[2].geometry["coordinates"], data.features[5].geometry["coordinates"])
                    });
                    graph.addVertex('3', {
                        '4': weight(data.features[3].geometry["coordinates"], data.features[4].geometry["coordinates"]),
                        '5': weight(data.features[3].geometry["coordinates"], data.features[5].geometry["coordinates"]),
                        '6': weight(data.features[3].geometry["coordinates"], data.features[6].geometry["coordinates"])
                    });
                    graph.addVertex('4', {
                        '7': weight(data.features[4].geometry["coordinates"], data.features[7].geometry["coordinates"])
                    });
                    graph.addVertex('5');
                    graph.addVertex('6', {
                        '7': weight(data.features[6].geometry["coordinates"], data.features[7].geometry["coordinates"])
                    })
                    graph.addVertex('7', {
                        '8': weight(data.features[7].geometry["coordinates"], data.features[8].geometry["coordinates"]),
                        '9': weight(data.features[7].geometry["coordinates"], data.features[9].geometry["coordinates"])
                    })
                    graph.addVertex('8', {
                        '11': weight(data.features[8].geometry["coordinates"], data.features[11].geometry["coordinates"])
                    })
                    graph.addVertex('9', {
                        '10': weight(data.features[9].geometry["coordinates"], data.features[10].geometry["coordinates"])
                    })
                    graph.addVertex('10', {
                        '12': weight(data.features[10].geometry["coordinates"], data.features[12].geometry["coordinates"])
                    })
                    graph.addVertex('11')
                    graph.addVertex('12', {
                        '13': weight(data.features[12].geometry["coordinates"], data.features[13].geometry["coordinates"])
                    })
                    graph.addVertex('13', {
                        '14': weight(data.features[13].geometry["coordinates"], data.features[14].geometry["coordinates"]),
                        '15': weight(data.features[13].geometry["coordinates"], data.features[15].geometry["coordinates"]),
                        '16': weight(data.features[13].geometry["coordinates"], data.features[16].geometry["coordinates"]),
                        '18': weight(data.features[13].geometry["coordinates"], data.features[18].geometry["coordinates"])
                    })
                    graph.addVertex('14')
                    graph.addVertex('15', {
                        '16': weight(data.features[15].geometry["coordinates"], data.features[16].geometry["coordinates"])
                    })
                    graph.addVertex('16', {
                        '17': weight(data.features[16].geometry["coordinates"], data.features[17].geometry["coordinates"])
                    })
                    graph.addVertex('17')
                    graph.addVertex('18', {
                        '19': weight(data.features[18].geometry["coordinates"], data.features[19].geometry["coordinates"])
                    })
                    graph.addVertex('19', {
                        '20': weight(data.features[19].geometry["coordinates"], data.features[20].geometry["coordinates"])
                    })
                    graph.addVertex('20', {
                        '21': weight(data.features[20].geometry["coordinates"], data.features[21].geometry["coordinates"]),
                        '22': weight(data.features[20].geometry["coordinates"], data.features[22].geometry["coordinates"])
                    })
                    graph.addVertex('21')
                    graph.addVertex('22', {
                        '23': weight(data.features[22].geometry["coordinates"], data.features[23].geometry["coordinates"])
                    })
                    graph.addVertex('23', {
                        '24': weight(data.features[23].geometry["coordinates"], data.features[24].geometry["coordinates"])
                    })
                    graph.addVertex('24', {
                        '25': weight(data.features[24].geometry["coordinates"], data.features[25].geometry["coordinates"])
                    })
                    graph.addVertex('25', {
                        '26': weight(data.features[25].geometry["coordinates"], data.features[26].geometry["coordinates"])
                    })
                    graph.addVertex('26', {
                        '27': weight(data.features[26].geometry["coordinates"], data.features[27].geometry["coordinates"])
                    })
                    graph.addVertex('27', {
                        '28': weight(data.features[27].geometry["coordinates"], data.features[28].geometry["coordinates"]),
                        '29': weight(data.features[27].geometry["coordinates"], data.features[29].geometry["coordinates"])
                    })
                    graph.addVertex('28')
                    graph.addVertex('29', {
                        '30': weight(data.features[29].geometry["coordinates"], data.features[30].geometry["coordinates"]),
                        '31': weight(data.features[29].geometry["coordinates"], data.features[31].geometry["coordinates"])
                    })
                    graph.addVertex('30')
                    graph.addVertex('31', {
                        '32': weight(data.features[31].geometry["coordinates"], data.features[32].geometry["coordinates"])
                    })
                    graph.addVertex('32', {
                        '33': weight(data.features[32].geometry["coordinates"], data.features[33].geometry["coordinates"]),
                        '34': weight(data.features[32].geometry["coordinates"], data.features[34].geometry["coordinates"])
                    })
                    graph.addVertex('33')
                    graph.addVertex('34', {
                        '35': weight(data.features[34].geometry["coordinates"], data.features[35].geometry["coordinates"]),
                        '36': weight(data.features[34].geometry["coordinates"], data.features[36].geometry["coordinates"])
                    })
                    graph.addVertex('35')
                    graph.addVertex('36', {
                        '37': weight(data.features[36].geometry["coordinates"], data.features[37].geometry["coordinates"]),
                        '38': weight(data.features[36].geometry["coordinates"], data.features[38].geometry["coordinates"])
                    })
                    graph.addVertex('37')
                    graph.addVertex('38', {
                        '39': weight(data.features[38].geometry["coordinates"], data.features[39].geometry["coordinates"])
                    })
                    graph.addVertex('39', {
                        '40': weight(data.features[39].geometry["coordinates"], data.features[40].geometry["coordinates"]),
                        '41': weight(data.features[39].geometry["coordinates"], data.features[41].geometry["coordinates"])
                    })
                    graph.addVertex('40')
                    graph.addVertex('41', {
                        '42': weight(data.features[41].geometry["coordinates"], data.features[42].geometry["coordinates"]),
                        '43': weight(data.features[41].geometry["coordinates"], data.features[43].geometry["coordinates"])
                    })
                    graph.addVertex('42')
                    graph.addVertex('43')

                    var out = djikstra(graph, '0')
                    var end_point = prompt("Please enter the end point(between 1-43):");
                    var x_path = [];
                    for (i = 0; i < data.features.length; i++) {
                        for (j = 0; j < out.shortestPaths[end_point].length; j++) {
                            if (String(i) == out.shortestPaths[end_point][j]) {
                                var x_i = i
                                x_path.push({
                                    lat: data.features[x_i].geometry.coordinates[1],
                                    lng: data.features[x_i].geometry.coordinates[0]
                                })
                            }
                        }
                    }
                    x_path.push({
                        lat: data.features[end_point].geometry.coordinates[1],
                        lng: data.features[end_point].geometry.coordinates[0]
                    })
                    document.getElementById("demo").innerHTML = (out.shortestPaths[end_point]);
                </script>

                <script async defer src="https://maps.googleapis.com/maps/api/js?key=apikey&callback=initMap">
                </script>
