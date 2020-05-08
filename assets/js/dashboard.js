d3.csv("data/kaggle-six-nations.csv").then(makeGraphs);

function makeGraphs(data) {
    var chart = dc.barChart('#total-outright-wins');
    var chart,two = dc.barChart('#total-grand-slams');
    
    const COUNTRY = 'Country';
    const COUNTRY_KEY = 'country';
    const OUTRIGHT_WINS = 'Outright Wins';
    const OUTRIGHT_WINS_KEY = 'outrightWins';
    const GRAND_SLAMS = 'Grand Slams';
    const GRAND_SLAMS_KEY = 'grandSlams';
    const TRIPLE_CROWNS = 'Triple Crowns';
    const TRIPLE_CROWNS_KEY = 'tripleCrowns';
    const WOODEN_SPOONS = 'Wooden Spoons';
    const WOODEN_SPOONS_KEY = 'woodenSpoons';
    const HEINEKEN_CUP_WINS = 'Heineken Cup Wins';
    const HEINEKEN_CUP_WINS_KEY = 'heinekenCupWins';
    const HEINEKEN_CUP_RUNNER_UPS = 'Heineken Cup Runner Ups';
    const HEINEKEN_CUP_RUNNER_UPS_KEY = 'heinekenCupRunnerUps';
    const POPULATION = 'Population';
    const POPULATION_KEY = 'population';
    const TOTAL_PLAYERS = 'Total Players';
    const TOTAL_PLAYERS_KEY = 'totalPlayers'
    const REGISTERED_PLAYERS = 'Registered Players';
    const REGISTERED_PLAYERS_KEY = 'registeredPlayers';

    // var parseDate = d3.timeParse("%d/%m/%Y");
  
    data.forEach((d) => {
        d[COUNTRY_KEY] = d[COUNTRY];
        d[OUTRIGHT_WINS_KEY] = Number(d[OUTRIGHT_WINS]);
    });

    console.log(data);

    data.forEach((d) => {
        d[COUNTRY_KEY] = d[COUNTRY];
        d[GRAND_SLAMS_KEY] = Number(d[GRAND_SLAMS]);
    });

    console.log(data);

    // data.forEach((d) => {
    //     d[COUNTRY] = parseDate(d[COUNTRY]);
    //     d[STARTDATE_KEY] = parseDate(d[STARTDATE_KEY]);
    //     d[TOTAL_COMMITMENT_KEY] = Number(d[TOTAL_COMMITMENT_KEY].replace(/[^0-9.-]+/g,""));
    // });
    
    var ndx = crossfilter(data);
    var outrightWinsDimension = ndx.dimension((d) => d[OUTRIGHT_WINS]);
    var grandSlamsDimension = ndx.dimension((d) => d[GRAND_SLAMS]);
    // var commitmentSumGroup = programmeDimension.group().reduceSum((d) => d[TOTAL_COMMITMENT_KEY]);
    
    // console.log(commitmentSumGroup.all());
    var g = groupBy(outrightWinsDimension.top(Infinity), OUTRIGHT_WINS_KEY);
    var h = groupBy(grandSlamsDimension.top(Infinity), GRAND_SLAMS_KEY);
    
    chart
        .width(386)
        .height(240)
        .x(d3.scaleBand())
        .xUnits(dc.units.ordinal)
        .brushOn(false)
        .xAxisLabel(COUNTRY)
        .yAxisLabel(OUTRIGHT_WINS)
        .dimension(outrightWinsDimension)
        .barPadding(0.1)
        .outerPadding(0.05)
        .group(g)
        .useViewBoxResizing(true)
    chart.render();

    chart,two
        .width(386)
        .height(240)
        .x(d3.scaleBand())
        .xUnits(dc.units.ordinal)
        .brushOn(false)
        .xAxisLabel(COUNTRY)
        .yAxisLabel(GRAND_SLAMS)
        .dimension(grandSlamsDimension)
        .barPadding(0.1)
        .outerPadding(0.05)
        .group(h)
        .useViewBoxResizing(true)
    chart,two.render();

}

function groupBy(data, column) {
    return {
        all: function() {
            return data.reduce((acc, currentValue) => {
                acc.push({'key': currentValue.country, 'value': currentValue[column]});
                return acc;
            }, []);
        }
    };
}


