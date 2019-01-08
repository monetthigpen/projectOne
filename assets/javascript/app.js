$(document).ready(function(){

    $(document).on("click",'input[type="radio"]' ,get_type_of_ride);
    //$(document).on("click","#submit" ,get_stops);
    
});

function get_type_of_ride(){
    $("#stops_list").empty();
    var checked_radio_id = $(this).val();
    var stops_array = [];
    //console.log(checked_radio_id);
    switch (checked_radio_id){
        case "AirportLine" : stops_array = "";
            break;
        case "ChestnutHillEastLine" : stops_array = "";
            break;
        case "ChestnutHillWestLine" : stops_array = "";
            break;
        case "CynwydLine" : stops_array = "";
            break;
        case "FoxChaseLine" : stops_array = "";
            break;
        case "GlensideCombined" : stops_array = "";
            break;
        case "Lansdale/DoylestownLine" : stops_array = LansdaleDoylestownLine;
            break;
        case "CenterCitytoUniversityCity" : stops_array = CenterCitytoUniversityCity;
            break;
        case "ManayunkNorristownLine" : stops_array = "";
            break;
        case "MediaElwynLine" : stops_array = "";
            break;
        case "PaoliThorndaleLine" : stops_array = "";
            break;
        case "TrentonLine" : stops_array = "";
            break;
        case "WarminsterLine" : stops_array = "";
            break;
        case "WestTrentonLine" : stops_array = "";
            break;
        case "WilmingtonNewarkLine" : stops_array = WilmingtonNewarkLine;
            break;
        case "FernRocktoCenterCity" : stops_array = FernRocktoCenterCity;
            break;
    }
    // $("#stops_list").append("<select class='form-control'>");
    // for(var i=0; i<stops_array.length; i++){
    //     $("#stops_list").append("<option id='"+stops_array[i]+"'>"+stops_array[i]+"</option>");
    // };
    // $("#stops_list").append("</select>");
    
    let select = $("<select>");
    let options
    `<option>${stops_array[i]}</option>`
    $(select).append(options);
    $("#stops_list").append(select);
    // <select class='form-control'>
    // <option id='"+stops_array[i]+"'>"+stops_array[i]+"</option>
    // <option id='"+stops_array[i]+"'>"+stops_array[i]+"</option>
    // <option id='"+stops_array[i]+"'>"+stops_array[i]+"</option>
    // </select>

    
};

// function get_stops(){
//     var start_stop = $("#something selection id").val();
//     var finish_stop = $("#something selection id").val();

// }

var req1 = "Allegheny";
var req2 = "Bala";
var LansdaleDoylestownLine = ["Doylestown", "Delaware Valley University", "New Britain", "Chalfont", "Link Belt", "Colmar", "Fortuna", "9th Street", "Lansdale", "Pennbrook", "North Wales", "Gwynedd Valley", "Penllyn", "Ambler", "Fort Washington", "Oreland", "North Hills", "Glenside", "Jenkintown-Wyncote", "Elkins Park", "Melrose Park", "Fern Rock T.C", "Wayne Junction", "North Broad", "Temple University", "Jefferson Station", "Suburban Station", "30th Street Station"];
var WilmingtonNewarkLine = ["Newark", "Churchmans Crossing", "Wilmington", "Claymont", "Marcus Hook", "Highland Avenue", "Chester T.C.", "Eddystone", "Crum Lynne", "Ridley Park", "Prospect Park-Moore", "Norwood", "Glenolden", "Folcroft", "Sharon Hill", "Curtis Park", "Darby", "University City", "30th Street Station", "Suburban Station", "Jefferson Station", "Temple University"];
var CenterCitytoUniversityCity = ["University City Station", "30th Street Station", "Suburban Station", "Jefferson Station"];
var FernRocktoCenterCity = ["FernRock T.C.", "WayneJct", "N. Broad Station", "Temple U", "Jefferson Station", "Suburban Station", "30thStreet Station"];


//var stops = ["University City","49th Street","30th Street Station","Suburban Station","Jefferson Station","Angora","Fernwood-Yeadon","Darby","Temple University","Wynnefield Avenue",""];
var airport = [ "AIRPORT TERMINALS E and F",
"AIRPORT TERMINALS C and D",
"AIRPORT TERMINAL B",
"AIRPORT TERMINAL A EAST",
"AIRPORT TERMINAL A WEST",
"Eastwick",
"Temple University",
"Jefferson Station",
"Suburban Station",
"30th Street Station",
"University City",
"Temple University",
"Wayne Junction",
"Fern Rock Transportation Center",
"Melrose Park",
"Elkins Park",
"Jenkintown-Wyncote",
"Glenside"];
var ManayunkNorriston = ["Norristown",
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
var MediaElwynLine = ["Elwyn",
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
 "Fernwood-Yeadon",
 "Angora",
 "49th Street",
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
var Cynwyd = ["Cynwyd",
"Bala",
"Wynnefield Avenue",
"30th Street Station",
"Suburban Station"
];
var Trenton= ["Trenton Transit Center",
"Levittown-Tullytown",
"Bristol",
"Croydon",
"Eddington",
"Cornwells Heights",
"Torresdale",
"Holmesburg Junction",
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
"Fern Rock T.C.",
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
"Fern Rock T.C",
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
"Fern Rock T.C.",
"Wayne Junction",
"Temple University",
"Jefferson Station",
"Suburban Station",
"30th Street Station",
"University City"
];

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

