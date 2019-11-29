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
     drawChart(arr1,arr2,arr3, arr4)
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