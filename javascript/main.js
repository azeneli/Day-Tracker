/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope

	/**
		* @dayTracker
		* @description - retrieves current year using getDay() method from Date Object and displays result to screen
		* @return - returns current day
	**/

	function dayTracker(){
		var date = new Date()
			, arrOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
			 	, today = arrOfDays[ date.getDay() ];	

		console.log(date);
		console.log( arrOfDays[0] );
		console.log(today, ' - today ');

		$(".js-day").append( '<p>' + today + '</p>' );
	}

	dayTracker();

	/**
		* @monthTracker
		* @description - retrieves current year using getMonth() method from Date Object and displays result to screen
		* @return - returns current month
	**/	

	function monthTracker(){
		var date = new Date()
		 	, months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
			, getMonth = months[ date.getMonth() ];

		console.log(getMonth, ' - month ');
		$(".js-month").append( '<p>' +  getMonth + '</p>' );
	}
	
	monthTracker();

	/**
		* @mcurrYear
		* @description - retrieves current year using getFullYear() method from Date Object and displays result to screen
		* @return - returns current year
	**/		

	function currYear(){
		var date = new Date()
			, year = date.getFullYear();	
		console.log(year);
		$(".js-year").append( '<p>' +  year + '</p>' );	
	}

	currYear();

})();