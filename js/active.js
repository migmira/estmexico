// $(function(){
$( document ).ready(function() {
	var path = window.location.pathname;
	console.log(path)
	
	var temp = $('#productos')
	// if (temp.length){
	// 	console.log(temp);
	// 	console.log("exitse");
	// }
	// else
	// 	console.log("no");
	
	switch( path ) {
		case '/migmira/estmexico/cctv.html':
			$("#productos").addClass("active");
	        $("#cctv").addClass('active');
			break;
	    case '/migmira/estmexico/cctv-kit1.html':
	        $("#productos").addClass("active");
	        $("#cctv").addClass('active');
	        break;
	    case '/migmira/estmexico/cctv-kit2.html':
	        break;
	        
	    default:
	    	break;
	}    
})