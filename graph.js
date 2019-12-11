function connector(){
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
    });
    graph.addVertex('7', {
        '8': weight(data.features[7].geometry["coordinates"], data.features[8].geometry["coordinates"]),
        '9': weight(data.features[7].geometry["coordinates"], data.features[9].geometry["coordinates"])
    });
    graph.addVertex('8', {
        '11': weight(data.features[8].geometry["coordinates"], data.features[11].geometry["coordinates"])
    });
    graph.addVertex('9', {
        '10': weight(data.features[9].geometry["coordinates"], data.features[10].geometry["coordinates"])
    });
    graph.addVertex('10', {
        '12': weight(data.features[10].geometry["coordinates"], data.features[12].geometry["coordinates"])
    });
    graph.addVertex('11');
    graph.addVertex('12');
    graph.addVertex('13');
   
}