d3.csv("data/kaggle-six-nations.csv").then(makeGraphs);

function makeGraphs(data) {
    var chart = dc.barChart('#total-outright-wins');
    
    const COUNTRY = 'Country';
    const COUNTRY_KEY = 'country';
    const OUTRIGHT_WINS = 'Outright Wins';
    const OUTRIGHT_WINS_KEY = 'outrightWins';
    const GRAND_SLAMS = 'Grand Slams';
    const TRIPLE_CROWNS = 'Triple Crowns';
    const WOODEN_SPOONS = 'Wooden Spoons';
    const HEINEKEN_CUP_WINS = 'Heineken Cup Wins';
    const HEINEKEN_CUP_RUNNER_UPS = 'Heineken Cup Runner Ups';
    const POPULATION = 'Population';
    const TOTAL_PLAYERS = 'Total Players';
    const REGISTERED_PLAYERS = 'Registered Players';
    const RESEARCH_TITLE_KEY = 'Title of Research';

    var parseDate = d3.timeParse("%d/%m/%Y");
  
    data.forEach((d) => {
        d[COUNTRY_KEY] = d[COUNTRY];
        d[OUTRIGHT_WINS_KEY] = Number(d[OUTRIGHT_WINS]);
    });

    console.log(data);

    // data.forEach((d) => {
    //     d[COUNTRY] = parseDate(d[COUNTRY]);
    //     d[STARTDATE_KEY] = parseDate(d[STARTDATE_KEY]);
    //     d[TOTAL_COMMITMENT_KEY] = Number(d[TOTAL_COMMITMENT_KEY].replace(/[^0-9.-]+/g,""));
    // });
    
    var ndx = crossfilter(data);
    var outrightWinsDimension = ndx.dimension((d) => d[OUTRIGHT_WINS]);
    // var commitmentSumGroup = programmeDimension.group().reduceSum((d) => d[TOTAL_COMMITMENT_KEY]);
    
    // console.log(commitmentSumGroup.all());
    var g = groupBy(outrightWinsDimension.top(Infinity), OUTRIGHT_WINS_KEY);
    
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
