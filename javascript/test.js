
// A diff. way to retrive dd/mm/yyy
	 var today = new Date();
	    var dd = today.getDate();
	    var mm = today.getMonth() + 1; //January is 0!

	    var yyyy = today.getFullYear();

	    	if( dd<10 ){
	        	dd ='0'+ dd;
	    	} 
	    	if( mm<10 ){
	        	mm ='0'+ mm;
	    	} 

	    var currDay = dd+'/'+mm+'/'+yyyy;
   
  
    	$(".test").append( '<p>' +  currDay + '</p> ');