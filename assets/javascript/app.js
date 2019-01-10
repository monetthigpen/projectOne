$(document).ready(function(){

    $(document).on("click",'input[type="radio"]' ,get_type_of_ride);
    $(document).on("click","#submit_ride" ,get_stops);
    
});

function get_type_of_ride(){
    $("#beginning_stop").empty();
    $("#destination_stop").empty();
    var checked_radio_id = $(this).val();
    var stops_array = [];
    console.log(checked_radio_id);
    switch (checked_radio_id){
        case "AirportLine" : stops_array = airport;
            break;
        case "ChestnutHillEastLine" : stops_array = ChestnutHillEast;
            break;
        case "ChestnutHillWestLine" : stops_array = ChestnutHillWest;
            break;
        case "CynwydLine" : stops_array = Cynwyd;
            break;
        case "FoxChaseLine" : stops_array = FoxChase;
            break;
        case "GlensideCombined" : stops_array = Glenside;
            break;
        case "Lansdale/DoylestownLine" : stops_array = LansdaleDoylestownLine;
            break;
        case "CenterCitytoUniversityCity" : stops_array = CenterCitytoUniversityCity;
            break;
        case "ManayunkNorristownLine" : stops_array = ManayunkNorriston;
            break;
        case "MediaElwynLine" : stops_array = MediaElwynLine;
            break;
        case "PaoliThorndaleLine" : stops_array = PaoliThorndale;
            break;
        case "TrentonLine" : stops_array = Trenton;
            break;
        case "WarminsterLine" : stops_array = Warminster;
            break;
        case "WestTrentonLine" : stops_array = WestTrenton;
            break;
        case "WilmingtonNewarkLine" : stops_array = WilmingtonNewarkLine;
            break;
        case "FernRocktoCenterCity" : stops_array = FernRocktoCenterCity;
            break;
    }
    
    var beginnig_select = $("<select>");
    beginnig_select.addClass("form-control");
    beginnig_select.attr("id", "beginning");

    var destination_select = $("<select>");
    destination_select.addClass("form-control");
    destination_select.attr("id", "destination");

    for(var i=0; i<stops_array.length; i++){
        $(beginnig_select).append("<option id='"+stops_array[i]+"'>"+stops_array[i]+"</option>");
    }
    for(var i=0; i<stops_array.length; i++){
        $(destination_select).append("<option id='"+stops_array[i]+"'>"+stops_array[i]+"</option>");
    }
    $("#beginning_stop").append("<label for='beginning'>Beginning Stop : </label>");
    $("#beginning_stop").append(beginnig_select);
    $("#destination_stop").append("<label for='destination'>Destination Stop : </label>");
    $("#destination_stop").append(destination_select);
    
};

function get_stops(){
    event.preventDefault();
    var start_stop = $("#beginning").val();
    var finish_stop = $("#destination").val();
    req1 = start_stop;
    req2 = finish_stop;
    


    var queryURL = "https://septa.p.mashape.com/hackathon/NextToArrive/?req1=" +req1.trim() + "&req2=" + req2.trim() +"&req3=1";

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {"X-Mashape-Key": "tFjQJGdl2Kmsh9wEtDlHfWdOCEqIp1xtERejsnV94zNR8Th01e", 
          "Accept": "application/json"}
    }).then(function(response){
        $("#error").remove();
        console.log(response);
        console.log(response[0].orig_departure_time);
        console.log(response[0].orig_arrival_time);
        var depart_time = response[0].orig_departure_time;
        var arrival_time =  response[0].orig_arrival_time;
        var ride_time = moment(arrival_time, "HH:mmA").diff(moment(depart_time, "HH:mmA"), "minutes");
        console.log(ride_time);
        $("#time").text(ride_time);
        $("#from").text(req1);
        $("#to").text(req2);
        $("#from_time").text(depart_time);
        $("#to_time").text(arrival_time);
        

    }).catch((errorObject) => {
        console.log("error : "+errorObject.code);
        $("#error").remove();
        console.log("At this time there are no trains available to complete this trip");
        var error_div = $("<div id='error' class='alert alert-danger' role='alert'>");
        error_div.append("At this time there are no trains available to complete this trip");
        $("#result").append(error_div);
        $("#time").text("???");
        
        $("#from").empty();
        $("#to").empty();
        $("#from_time").empty();
        $("#to_time").empty();
    });

}

var req1 = "";
var req2 = "";
var LansdaleDoylestownLine = ["Doylestown", "Delaware Valley University", "New Britain", "Chalfont", "Link Belt", "Colmar", "Fortuna", "9th St", "Lansdale", "Pennbrook", "North Wales", "Gwynedd Valley", "Penllyn", "Ambler", "Ft Washington", "Oreland", "North Hills", "Glenside", "Jenkintown-Wyncote", "Elkins Park", "Melrose Park", "Fern Rock TC", "Wayne Junction", "North Broad", "Temple University", "Jefferson Station", "Suburban Station", "30th Street Station"]
var WilmingtonNewarkLine = ["Newark", "Churchmans Crossing", "Wilmington", "Claymont", "Marcus Hook", "Highland Ave", "Chester TC", "Eddystone", "Crum Lynne", "Ridley Park", "Prospect Park-Moore", "Norwood", "Glenolden", "Folcroft", "Sharon Hill", "Curtis Park", "Darby", "University City", "30th Street Station", "Suburban Station", "Jefferson Station", "Temple University"];
var CenterCitytoUniversityCity = ["University City", "30th Street Station", "Suburban Station", "Jefferson Station"];
var FernRocktoCenterCity = ["FernRock T.C.", "WayneJct", "N. Broad Station", "Temple U", "Jefferson Station", "Suburban Station", "30th Street Station"];
var airport = [ "Airport Terminal A",
"Airport Terminal B",
"Airport Terminal C-D",
"Airport Terminal E-F",
"Eastwick",
"Temple University",
"Jefferson Station",
"Suburban Station",
"30th Street Station",
"University City",
"Temple University",
"Wayne Junction",
"Fern Rock TC",
"Melrose Park",
"Elkins Park",
"Jenkintown-Wyncote",
"Glenside"];
var ManayunkNorriston = ["Elm St",
"Main Street",
"Norristown Transportation Center",
"Conshohocken",
"Spring Mill",
"Miquon",
"Ivy Ridge",
"Manayunk",
"Wissahickon",
"East Falls",
" Allegheny",
"North Broad",
"Temple University",
"Jefferson Station",
"Suburban Station",
"30th Street Station",
"University City"];
var ChestnutHillEast = ["Chestnut Hill East",
"Gravers",
"Wyndmoor",
"Mount Airy",
"Sedgwick",
"Stenton",
"Washington Lane",
"Germantown",
"Wister",
"Wayne Junction",
"Temple University"
];
var MediaElwynLine = ["Elwyn Station",
"Media",
"Moylan-Rose Valley",
"Wallingford",
 "Swarthmore",
 "Morton",
 "Secane",
 "Primos",
 "Clifton-Aldan",
 "Gladstone",
 "Lansdowne",
 "Fernwood",
 "Angora",
 "49th St",
 "University City",
 "30th Street Station",
 "Suburban Station",
 "Jefferson Station",
 "Temple University"
];
var ChestnutHillWest= ["Chestnut Hill West",
    "Highland",
    "St. Martins",
    "Allen Lane",
    "Carpenter",
    "Upsal",
    "Tulpehocken",
    "Chelten Avenue",
    "Queen Lane",
    "North Philadelphia",
    "30th Street Station",
    "Suburban Station",
    "Jefferson Station",
    "Temple University"
];
var PaoliThorndale = ["Thorndale",
    "Downingtown",
    "Whitford",
    "Exton",
    "Malvern",
    "Paoli",
    "Daylesford",
    "Berwyn",
    "Devon",
    "Strafford",
    "Wayne",
    "St. Davids",
    "Radnor",
    "Villanova",
    "Rosemont",
    "Bryn Mawr",
    "Haverford",
    "Ardmore",
    "Wynnewood",
    "Narberth",
    "Merion",
    "Overbrook",
    "30th Street Station",
    "Suburban Station",
    "Jefferson Station",
    "Temple University"
];

var Trenton= ["Trenton Transit Center",
"Levittown-Tullytown",
"Bristol",
"Croydon",
"Eddington",
"Cornwells Heights",
"Torresdale",
"Holmesburg Jct",
"Tacony",
"Bridesburg",
"30th Street Station",
"Suburban Station",
"Jefferson Station",
"Temple University"
];
var FoxChase = ["Fox Chase",
"Ryers",
 "Cheltenham",
 "Lawndale",
 "Olney",
 "Wayne Junction",
 "Temple University",
 "Jefferson Station",
 "Suburban Station",
 "30th Street Station"
];
var Warminster = ["Warminster",
"Hatboro",
"Willow Grove",
"Crestmont",
"Roslyn",
"Ardsley",
"Glenside",
"Jenkintown-Wyncote",
"Elkins Park",
"Melrose Park",
"Fern Rock TC",
"Wayne Junction",
"Temple University",
"Jefferson Station",
"Suburban Station",
"30th Street Station",
"UniversityCity"];
var Glenside = ["Glenside",
"Jenkintown-Wyncote",
"Elkins Park",
"Melrose Park",
"Fern Rock TC",
"Wayne Junction",
"North Broad",
"Temple University",
"Jefferson Station",
"Suburban Station",
"30th Street Station",
"University City"
];
var WestTrenton = ["West Trenton, NJ",
"Yardley",
"Woodbourne",
"Langhorne",
"Neshaminy Falls",
"Trevose",
"Somerton",
"Forest Hills",
"Philmont",
"Bethayres",
"Meadowbrook",
"Rydal",
"Noble",
"Jenkintown-Wyncote",
"Elkins Park",
"Melrose Park",
"Fern Rock TC",
"Wayne Junction",
"Temple University",
"Jefferson Station",
"Suburban Station",
"30th Street Station",
"University City"
];