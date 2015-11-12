/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope

	function dayTracker(){
		var date = new Date()
			, arrOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
			 	, today = arrOfDays[ date.getDay() ];	

		console.log(date);
		console.log( arrOfDays[0] );
		console.log(today, ' - today ');

		$(".test").append( '<p>' + today + '</p>' );
	}

	dayTracker();

	function monthTracker(){
		var date = new Date()
		 	, months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
			, getMonth = months[ date.getMonth() ];

		console.log(getMonth, ' - month ');
		$(".test").append( '<p>' +  getMonth + '</p>' );
	}
	
	monthTracker();

	function currYear(){
		var date = new Date()
			, year = date.getFullYear();	
		console.log(year);
		$(".test").append( '<p>' +  year + '</p>' );	
	}

	currYear();

	 // var today = new Date();
	 //    var dd = today.getDate();
	 //    var mm = today.getMonth() + 1; //January is 0!

	 //    var yyyy = today.getFullYear();

	 //    	if( dd<10 ){
	 //        	dd ='0'+ dd;
	 //    	} 
	 //    	if( mm<10 ){
	 //        	mm ='0'+ mm;
	 //    	} 

	 //    var currDay = dd+'/'+mm+'/'+yyyy;
   
  
  //   	$(".test").append( '<p>' +  currDay + '</p> ');

})();