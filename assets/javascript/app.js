// $(document).ready(function(){

//     $(document).on("click",'input[type="radio"]' ,get_type_of_ride);
//     $(document).on("click","#submit" ,get_stops);
    
// });

// function get_type_of_ride(){
//     var checked_radio_id = $(this).val();
//     console.log(checked_radio_id);
// };

// function get_stops(){
//     var start_stop = $("#something selection id").val();
//     var finish_stop = $("#something selection id").val();

// }

var req1 = "Allegheny";
var req2 = "Bala";

var queryURL = "https://septa.p.mashape.com/hackathon/NextToArrive/?req1=" +req1.trim() + "&req2=" + req2.trim() +"&req3=1";

$.ajax({
    url: queryURL,
    method: "GET",
    headers: {"X-Mashape-Key": "tFjQJGdl2Kmsh9wEtDlHfWdOCEqIp1xtERejsnV94zNR8Th01e", 
          "Accept": "application/json"}
}).then(function(response){
    console.log(response);
    console.log(response[0].orig_departure_time);
    console.log(response[0].orig_arrival_time);
    var depart_time = response[0].orig_departure_time;
    var arrival_time =  response[0].orig_arrival_time;
    var ride_time = moment(arrival_time, "HH:mmA").diff(moment(depart_time, "HH:mmA"), "minutes");
    console.log(ride_time);


}).catch((errorObject) => {
    console.log("error : "+errorObject.code);
    console.log("At this time there are no trains available to complete this trip");
});