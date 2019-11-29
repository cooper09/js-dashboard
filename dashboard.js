var Dashboard = function () {

    this.getData = async function() {
        console.log("Dashboard.getData: ")
        var http = new XMLHttpRequest();
        var url = 'https://sleepy-everglades-99189.herokuapp.com/multiline_facebook_conversions';

        http.open('GET', url, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 && http.status == 200) {
             //console.log("Update data: " + http.responseText); 
                //return this.cleanData(http.reponse);
                return spit(http.response);
            } else {
             //   alert("Failed - Update data: " + http.readyState+" "+ http.status);
            }
        }//end on state change
        http.send();

        function spit(data) {
            console.log("Spit on me: ", data );
            return shit(data)
        }

        function shit(data) {
            console.log("shit!!!!");
            return data;
        }
    }  //end Dashboard.getData

    this.cleanData = function(data ) {
        console.log("Dashboard.cleanData: ", data );
        return this.displayData(data)
    }//end cleanData

    this.displayData = function (data) {
        console.log("Dashboard.displayData: ", data );
            
        return (data);
    }//end displayData

}//end Dashboard


  /*  this.addElements = function(options) {
        console.log("add html elements");

        var mySelect = document.createElement("SELECT");
        mySelect.id = 'mySelect';
        mySelect.setAttribute("style","margin-right: 0.5em;font-size:1em");

            // cooper s - add multiple options from an array

            for (var i=0 ; i < options.length ; ++i) {
                var option = document.createElement("option");
                option.text = options[i];

                mySelect.add(option);
            }

        document.body.appendChild(mySelect);

         var myButton = document.createElement("BUTTON");
         document.body.appendChild(myButton);
         var t = document.createTextNode("CLICK ME");
         myButton.setAttribute("style","color:red;font-size:1em;cursor:pointer");
     
         myButton.appendChild(t);
         myButton.onclick =  function (){ 
            var x = document.getElementById("mySelect").selectedIndex;
            var y = document.getElementById("mySelect").options;
            alert("Index: " + y[x].index + " is " + y[x].text);
            var  myValue = document.getElementById("mySelect").options[document.getElementById("mySelect").selectedIndex].text;

            alert("The Value: "+ myValue );
         };

    }
}//end doyourstuff */