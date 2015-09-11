//exersisetracker.js file

document.addEventListener("deviceready", function(){

	if(navigator.network.connection.type == Connection.NONE){
	  $("#home_network_button").text('No Internet Access')
	               .attr("data-icon", "delete")
				   .button('refresh');
	}
});

var track_id = ' '; //name/id of the exercise
var watch_id = null; //id of the geolocation
var tracking_data = []; //array containing gps position objects

$("#startTracking_start").live('click', function(){
    //start tracking the User
	watch_id = navigator.geolocation.watchPosition(
	
	   //Success
	   function(position){
	           tracking_data.push(position);
	    },
		
		//Error
		function(error){
		        console.log(error);
		},
		
		//Settings
		{frequency: 3000, enableHighAccuracy: true});
		
	//Tidy up the UI
	track_id = $("#track_id").val();
	
	$("#track_id").hide();
	
	$("#startTracking_status").html("Tracking workout: <strong>" + track_id + "</strong>");
	});