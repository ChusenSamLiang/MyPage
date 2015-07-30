

// jQuery to transition profile about me blocks

var action = "show";

$("#profile .details .topic .main").on("click", viewProfile);

function viewProfile() {
	if(action == "show") {
		$("#profile .details .topic .main").css("background-color","red");
		$("#profile .details .topic .main").css("left","0px");
		$('#profile .details .subtopic').show();
		$('#profile .details .subtopic').css("width","55%");
		$('#profile .details .topic').css("width","45%");
		action = "hide";
	}
	else{
		$("#profile .details .topic .main").css("background-color","yellow");
		$("#profile .details .topic .main").css("left","100px");
		$('#profile .details .subtopic').hide();
		action = "show";
	}
}



  //   $("#profile .details .topic .main").click(function(){
	 //    	$("#profile .details .topic .main").css("background-color","red");
		// 	$("#profile .details .topic .main").css("left","0%");
	 //    	$('#profile .details .subtopic').show();
	 //    	$('#profile .details .subtopic').css("background-color","yellow");
		// });
	 // //    .mouseout(function(){
		// // 	$("#profile .details .topic .main").css("background-color","yellow");
		// // 	$("#profile .details .topic .main").css("left","25%");
		// // 	$('#profile .details .subtopic').hide();
		// // });
    	

	// // $('#profile .details .middle').stop().animate({'margin-top': '200px'}, 1500);
	// //     $('#profile .details .top').stop().animate({'margin-bottom': '-200px'}, 1500);
	//  //    , 
	//  //    function(){
	//  //        $('#profile .details .top').stop().animate({'margin-bottom': '50px'}, 1500);
	// 	// }


	// 	 $('#profile .details .bottom').stop().animate({'margin-top': '400px'}, 1500);
	//  //    , 
	//  //    function(){
	//  //        $('#profile .details .bottom').stop().animate({'margin-top': '50px'}, 1500);
	// 	// }

	// 	 $('#profile .details .left').stop().animate({'margin-right': '300px'}, 1500);
	//  //    , 
	//  //    function(){
	//  //        $('#profile .details .left').stop().animate({'margin-right': '50px'}, 1500);
	// 	// }

	// 	 $('#profile .details .right').stop().animate({'margin-left': '-300px'}, 1500);
	    
	  


