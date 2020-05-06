d3.csv("data/kaggle-six-nations.csv").then(makeGraphs);

function makeGraphs(data) {
    var commitmentByProgrammeNameChart = dc.barChart('#commitment-by-programme-name');
    
    const COUNTRY = 'Country';
    const OUTRIGHT_WINS = 'Outright Wins';
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
        d[OUTRIGHT_WINS] = Number(d[OUTRIGHT_WINS]);
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
    
    commitmentByProgrammeNameChart
        .width(768)
        .height(480)
        .x(d3.scaleBand())
        .xUnits(dc.units.ordinal)
        .brushOn(false)
        .xAxisLabel(OUTRIGHT_WINS)
        .yAxisLabel("Total Commitmemt")
        .dimension(outrightWinsDimension)
        .barPadding(0.1)
        .outerPadding(0.05)
        .group(outrightWinsDimension.group())
    commitmentByProgrammeNameChart.render();
}