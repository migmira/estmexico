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
   
		switch( path ) {
			case '/cctv.html':
				cctv();
				break;
			case '/cctv-kit1.html':
				cctv();
				break;
			case '/cctv-kit2.html':
				cctv();
				break;
			case '/cctv-kit3.html':
				cctv();
				break;
			case '/cctv-kit4.html':
				cctv();
				break;
			case '/cctv-kit5.html':
				cctv();
				break;
			case '/cctv-kit6.html':
				cctv();
				break;
			case '/cctv-kit7.html':
				cctv();
				break;

			default:
				break;
		}



	});
	
})