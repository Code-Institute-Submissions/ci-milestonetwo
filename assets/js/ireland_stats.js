anychart.onDocumentReady(function () {
    //create data set on our data
    var data = [
        ['Outright Wins', 4],
        ['Grand Slams', 2],
        ['Triple Crowns', 5],
        ['Wooden Spoons', 0],
    ];

    //create area chart
    var chart = anychart.column();

    //turn on chart animation
    chart.animation(true);

    //set container id for the chart
    chart.container('container');

    var series = anychart.data.mapAsTable(data);
    for (var i in series) {
        chart.column(series[i]);
    }

    //initiate chart drawing
    chart.draw();
});