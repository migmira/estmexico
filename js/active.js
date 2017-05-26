// $(function(){
$( document ).ready(function() {
	var path = window.location.pathname;
	console.log(path)
	
	function cctv(){
		$("#productos").addClass("active");
        $("#cctv").addClass('active');
	}
	
    $(document).on('DOMNodeInserted', function(e) {

        // console.log(e);
   
		// switch( path ) {
		// 	case '/migmira/estmexico/cctv.html':
		// 		cctv();
		// 		break;
		//     case '/migmira/estmexico/cctv-kit1.html':
		// 		cctv();
		//         break;
		//     case '/migmira/estmexico/cctv-kit2.html':
		// 		cctv();
		//         break;
		//
		//     default:
		//     	break;
		// }


		switch( path ) {
			case '/estmexico/cctv.html':
				cctv();
				break;
			case '/estmexico/cctv-kit1.html':
				cctv();
				break;
			case '/estmexico/cctv-kit2.html':
				cctv();
				break;
			case '/estmexico/cctv-kit3.html':
				cctv();
				break;
			case '/estmexico/cctv-kit4.html':
				cctv();
				break;
			case '/estmexico/cctv-kit5.html':
				cctv();
				break;
			case '/estmexico/cctv-kit6.html':
				cctv();
				break;
			case '/estmexico/cctv-kit7.html':
				cctv();
				break;

			default:
				break;
		}



	});
	
})