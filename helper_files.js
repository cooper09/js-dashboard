//cooper s - usefull helper files

// Functional Ad Tracker

const loadData = async (newData) => {
    console.log("loadData..");
    /*
        cooper s - save for later for full data tracking...
    */
            var http = new XMLHttpRequest();
            var url = 'https://sleepy-everglades-99189.herokuapp.com/multiline_facebook_conversions';
    
            http.open('GET', url, true);
    
            //Send the proper header information along with the request
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
            http.onreadystatechange = function() {//Call a function when the state changes.
                if(http.readyState == 4 && http.status == 200) {
                 //console.log("Update data: " + http.response); 
                 //document.getElementById('loader').addClass("hide-loader")
                 document.getElementById("loader").className += "hide-loader";
                 var data = JSON.parse(http.response);
                 data = data.sort();
                 cleanData(data);

                 return "stinky"; //http.response;

                } else {
                 //   alert("Failed - Update data: " + http.readyState+" "+ http.status);
                }
            }//end on state changg
            http.send();
                        
}//end loadData

function drawTable(arr1,arr2,arr3,arr5) {
    console.log("drawTable: ", arr1);

    result = arr1.map(o => Object.keys(o).map(k => o[k]));

    var dataSet = [
        [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
        [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
        [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
        [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
        [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
        [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
        [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
        [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
        [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
        [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
        [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
        [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
        [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
        [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
        [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
        [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
        [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
        [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
        [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
        [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
        [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
        [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
        [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
        [ "Doris Wilder", "Sales Assistant", "Sydney", "3023", "2010/09/20", "$85,600" ],
        [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
        [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
        [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
        [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
        [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
        [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
        [ "Michelle House", "Integration Specialist", "Sydney", "2769", "2011/06/02", "$95,400" ],
        [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
        [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
        [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
        [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
        [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
    ];


    $(document).ready(function() {
        $('#example').DataTable( {
            data: result,
            columns: [
                { title: "Campaign" },
                { title: "Medium" },
                { title: "Source" },
                { title: "Time Stamp" },
                { title: ""}
            ]
        } );
    } );



}//end drawTable

function drawChart(arr1,arr2,arr3,arr5) {
    console.log("drawChart arr1: ", arr1.length );
    // Start with a D3.js chart
    // set the dimensions and margins of the graph
        var width = 450
        height = 450
        margin = 40

        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        var radius = Math.min(width, height) / 2 - margin

        // append the svg object to the div called 'my_dataviz'
        var svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // Create dummy data
        //var data = {a: 9, b: 20, c:30, d:8, e:12}
        var data = {a: arr1.length, b: arr2.length, c:arr3.length, d:arr4.length}

        // set the color scale
        var color = d3.scaleOrdinal()
        .domain(data)
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

        // Compute the position of each group on the pie:
        var pie = d3.pie()
        .value(function(d) {return d.value; })
        var data_ready = pie(d3.entries(data))

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
        .innerRadius(100)         // This is the size of the donut hole
        .outerRadius(radius)
        )
        .attr('fill', function(d){ return(color(d.data.key)) })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)

        //Try chartjs version
        var ctx = document.getElementById("dataChart");
        var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Multiline Traffic Campaign - End of 2019', 'DMV Services Campaign - 2019', 'Safety Driving Course Instructors -Mount Vernon - Lifetime', 'Defensive Driving Course - December+2019 - Daily'],
            datasets: [{
            label: 'Multi-Line Facebook Campaign Results',
            data: [arr1.length, arr2.length, arr3.length, arr4.length],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 40,
            responsive: false,

        }
        });
}//end drawChart

function displayData(data){
    console.log("displayData - Our clean Data: ", data);

    arr1 = [];
    arr2 = [];
    arr3 = [];
    arr4 = [];

    data.map( campaign => {
        switch (campaign.campaign ) {
            case "Multiline Traffic Campaign - End of 2019":
                arr1.push(campaign)
            break;
            case "DMV Services Campaign - 2019":
                arr2.push(campaign)
            break
            case "Safety Driving Course Instructors -Mount Vernon - Lifetime":
                arr3.push(campaign)
            break
            case "Campaign+-+Defensive+Driving+Course+-+December+2019+-+Daily":
                arr4.push(campaign)
            break
        }//end switch
    })
     drawTable(arr1,arr2,arr3,arr4);
     drawChart(arr1,arr2,arr3,arr4);
    //document.getElementById('stinky').innerHTML=data;
}//end displayData

function cleanCampaigns(campaign){
    //console.log("stinky: ", campaign.campaign)
    return (campaign.campaign !== "driving_instructors")
     && (campaign.campaign !== "{{campaign.name}}")
     && (campaign.campaign !== "{{campaign.name")
     && (campaign.campaign !== "undefined");
}//end cleanCampaigns

function cleanData (data) {
    //console.log("cleanData: ", data );
    
    var finalArr = [];
    data.map( item =>{
        //console.log(data.filter(cleanCampaigns));
        finalArr.push (data.filter(cleanCampaigns));
        })

    //console.log("Our clean Data: ", finalArr[0]);
    displayData(finalArr[0])
}//end cleanData


const func1 = async () => {
    console.log("func1..");
    return loadData().then( result => {
        console.log("loadData has finished doing its thing: ", result );
       }
    );
}//end func1