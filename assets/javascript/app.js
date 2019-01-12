$(document).ready(function(){

    $(document).on("click",'input[type="radio"]' ,get_type_of_ride);
    $(document).on("click","#submit_ride" ,get_stops,);
    $(document).on("click","#submit_ride" ,onYouTubeIframeAPIReady)
    
});
function get_type_of_ride(){
    $("#beginning_stop").empty();
    $("#destination_stop").empty();
    var checked_radio_id = $(this).val();
    var stops_array = [];
    switch (checked_radio_id){
        case "AirportLine" : stops_array = airport, 
            $("#route_img").html("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/SEPTA_Airport_Line_map.svg/250px-SEPTA_Airport_Line_map.svg.png'>");
            break;
        case "ChestnutHillEastLine" : stops_array = ChestnutHillEast, 
            $("#route_img").html("<img src='https://moovitapp.com/index/41/public-transit-resources/line/282/211794/1/SEPTA_Rail_To_Chestnut_Hill.jpg'>");
            break;
        case "ChestnutHillWestLine" : stops_array = ChestnutHillWest, 
            $("#route_img").html("<img src='https://moovitapp.com/index/41/public-transit-resources/line/282/211795/2/SEPTA_Rail_To_Chestnut_Hill_West.jpg'>");
            break;
        case "FoxChaseLine" : stops_array = FoxChase,
            $("#route_img").html("<img src='https://moovitapp.com/index/41/public-transit-resources/line/282/211788/1/SEPTA_Rail_To_Fox_Chase.jpg'>");
            break;
        case "GlensideCombined" : stops_array = Glenside,
            $("#route_img").html("<img src='http://mrbiggs.com/wp-content/uploads/2010/05/SEPTA_system_map.png'>");
            break;
        case "Lansdale/DoylestownLine" : stops_array = LansdaleDoylestownLine,
            $("#route_img").html("<img src='https://moovitapp.com/index/41/public-transit-resources/line/282/211796/1/SEPTA_Rail_To_Doylestown.jpg'>");
            break;
        case "CenterCitytoUniversityCity" : stops_array = CenterCitytoUniversityCity,
            $("#route_img").html("<img src='http://mrbiggs.com/wp-content/uploads/2010/05/SEPTA_system_map.png'>");
            break;
        case "ManayunkNorristownLine" : stops_array = ManayunkNorriston,
            $("#route_img").html("<img src='http://www.septa.org/site/images/norristown-high-speed-line-map-700x700.jpg'>");
            break;
        case "MediaElwynLine" : stops_array = MediaElwynLine,
            $("#route_img").html("<img src='https://moovitapp.com/index/41/public-transit-resources/line/282/211790/1/SEPTA_Rail_To_City_Center_Philadelphia.jpg'>");
            break;
        case "PaoliThorndaleLine" : stops_array = PaoliThorndale,
            $("#route_img").html("<img src='https://moovitapp.com/index/41/public-transit-resources/line/282/211792/1/SEPTA_Rail_To_Center_City_Philadelphia.jpg'>");
            break;
        case "TrentonLine" : stops_array = Trenton,
            $("#route_img").html("<img src='https://moovitapp.com/index/41/public-transit-resources/line/282/211787/2/SEPTA_Rail_To_Trenton.jpg'>");
            break;
        case "WarminsterLine" : stops_array = Warminster,
            $("#route_img").html("<img src='https://moovitapp.com/index/41/public-transit-resources/line/282/211789/1/SEPTA_Rail_To_Warmister.jpg'>");
            break;
        case "WestTrentonLine" : stops_array = WestTrenton,
            $("#route_img").html("<img src='https://moovitapp.com/index/41/public-transit-resources/line/282/211791/1/SEPTA_Rail_To_West_Trenton.jpg'>");
            break;
        case "WilmingtonNewarkLine" : stops_array = WilmingtonNewarkLine,
            $("#route_img").html("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Wilmington_Newark_Line_2015.png/300px-Wilmington_Newark_Line_2015.png'>");
            break;
        case "FernRocktoCenterCity" : stops_array = FernRocktoCenterCity,
            $("#route_img").html("<img src='http://mrbiggs.com/wp-content/uploads/2010/05/SEPTA_system_map.png'>");
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
        var depart_time = response[0].orig_departure_time;
        var arrival_time =  response[0].orig_arrival_time;
        var ride_time = moment(arrival_time, "HH:mmA").diff(moment(depart_time, "HH:mmA"), "minutes");
        localStorage.setItem("ridetime", ride_time)
        $("#time").text(ride_time);
        $("#from").text(req1);
        $("#to").text(req2);
        $("#from_time").text(depart_time);
        $("#to_time").text(arrival_time);
        

    }).catch((errorObject) => {
        $("#error").remove();
        var error_div = $("<div id='error' class='alert alert-danger' role='alert'>");
        error_div.append("At this time there are no trains available to complete this trip");
        $("#result").append(error_div);
        $("#time").text("???");
        setTimeout(function(){
            $("#error").fadeOut();
        }, 3000);
        $("#from").empty();
        $("#to").empty();
        $("#from_time").empty();
        $("#to_time").empty();

        
    });
    
    
}


var req1 = "";
var req2 = "";
var LansdaleDoylestownLine = ["Doylestown", "Delaware Valley University", "New Britain", "Chalfont", "Link Belt", "Colmar", "Fortuna", "9th St", "Lansdale", "Pennbrook", "North Wales", "Gwynedd Valley", "Penllyn", "Ambler", "Ft Washington", "Oreland", "North Hills", "Glenside", "Jenkintown-Wyncote", "Elkins Park", "Melrose Park", "Fern Rock TC", "Wayne Junction", "North Broad", "Temple University", "Jefferson Station", "Suburban Station", "30th Street Station"]
var WilmingtonNewarkLine = ["Newark", "Churchmans Crossing", "Wilmington", "Claymont", "Marcus Hook", "Highland Ave", "Chester TC", "Eddystone", "Crum Lynne", "Ridley Park", "Prospect Park", "Norwood", "Glenolden", "Folcroft", "Sharon Hill", "Curtis Park", "Darby", "University City", "30th Street Station", "Suburban Station", "Jefferson Station", "Temple University"];
var CenterCitytoUniversityCity = ["University City", "30th Street Station", "Suburban Station", "Jefferson Station"];
var FernRocktoCenterCity = ["Fern Rock TC", "Wayne Jct", "North Broad St", "Temple U", "Jefferson Station", "Suburban Station", "30th Street Station"];
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
"Main St",
"Norristown Transportation Center",
"Conshohocken",
"Spring Mill",
"Miquon",
"Ivy Ridge",
"Manayunk",
"Wissahickon",
"East Falls",
" Allegheny",
"North Broad St",
"Temple University",
"Jefferson Station",
"Suburban Station",
"30th Street Station",
"University City"];
var ChestnutHillEast = ["Chestnut Hill East",
"Gravers",
"Wyndmoor",
"Mt Airy",
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

var Trenton= ["Trenton",
"Levittown",
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
var WestTrenton = ["West Trenton",
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

function onYouTubeIframeAPIReady() {
    
    var tag = document.createElement('script');
    
    tag.src = "https://www.youtube.com/iframe_api";
    
    var firstScriptTag = document.getElementsByTagName('script')[0];
    
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    ride_time = localStorage.ridetime
    
    var numP1 = Math.floor((Math.random() * 38) + 1);
    
    player = new YT.Player('player', {
         width : '320',
         height : '180',
 playerVars: {
 listType: 'playlist',
 list: 'PLtGGAyMRLY7_ItP_oOEwWEt_h5CEsu2md',
 index: numP1,
 autoplay: 1,
 },
 
         events : {
             'onReady' : onPlayerReady,
             'onStateChange' : onPlayerStateChange,
         }
      });
    


 function onPlayerReady(event) {
     event.target.playVideo();
 }
var done = false

function onPlayerStateChange(event) {

if (event.data == YT.PlayerState.PLAYING && !done) {
 if (ride_time <=5) {
event.target.setShuffle({'shufflePlaylist' : true});	
 setTimeout(stopVideo, 10000);
 done = true;
   }if (ride_time <=10) {
event.target.setShuffle({'shufflePlaylist' : true});	
    setTimeout(stopVideo, 600000);
    done = true;
 }if (ride_time <=20) {
event.target.setShuffle({'shufflePlaylist' : true});	
    setTimeout(stopVideo, 1200000);
    done = true;
}if (ride_time <=30) {
event.target.setShuffle({'shufflePlaylist' : true});	
setTimeout(stopVideo, 1800000 );
done = true;
} if (ride_time <=40) {
event.target.setShuffle({'shufflePlaylist' : true});	
    setTimeout(stopVideo, 2400000);
    done = true;
    } if (ride_time <=50) {
    event.target.setShuffle({'shufflePlaylist' : true});	
        setTimeout(stopVideo, 3000000);
        done = true;
        } if (ride_time <=60) {
        event.target.setShuffle({'shufflePlaylist' : true});	
            setTimeout(stopVideo, 3600000);
            done = true;
            }if (ride_time <=70) {
            event.target.setShuffle({'shufflePlaylist' : true});	
                setTimeout(stopVideo, 4200000);
                done = true;
                } if (ride_time <=80) {
                event.target.setShuffle({'shufflePlaylist' : true});	
                    setTimeout(stopVideo, 4800000);
                    done = true;
                    }
                }
            }
    
            
function stopVideo() {
 player.stopVideo();
};

};
