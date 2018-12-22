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

// var start_stop_time = "03:30";
// var finish_stop_time = "03:35";
// var ride_time = moment(finish_stop_time, "HH:mm").diff(moment(start_stop_time, "HH:mm"), "minutes");
// console.log(ride_time);


//https://septa.p.mashape.com/hackathon/NextToArrive/?req1=Airport+Terminal+B&req2=Ardmore&req3=5
var req1 = "Airport Terminal B";
var req2 = "Ardmore";
var queryURL = "https://septa.p.mashape.com/hackathon/NextToArrive/?req1=" +req1 + "&req2=" + req2 +"req3=5";
"https://septa.p.mashape.com/hackathon/NextToArrive/?req1=Airport+Terminal+B&req2=Ardmore&req3=5"
"https://septa.p.mashape.com/hackathon/NextToArrive/?req1=" +req1 + "&req2=" + req2 +"req3=5";

$.ajax({
    url: queryURL,
    method: "GET",
    headers: {"X-Mashape-Key": "tFjQJGdl2Kmsh9wEtDlHfWdOCEqIp1xtERejsnV94zNR8Th01e", 
          "Accept": "application/json"}
}).then(function(response){
    console.log(response);


}).catch((err) => {
    console.log("error : "+errorObject.code);
});