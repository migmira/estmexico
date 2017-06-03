// $(function(){
$( document ).ready(function() {
	var path = window.location.pathname;
	console.log(path);
	
	function cctv(){
		$("#productos").addClass("active");
        $("#cctv").addClass('active');
	}

	function alarmas(){
		$("#productos").addClass("active");
        $("#alarmas").addClass('active');
	}

	function videoporteros(){
		$("#productos").addClass("active");
		$("#video").addClass('active');
	}

	function gps(){
		$("#productos").addClass("active");
		$("#gps").addClass('active');
	}

	function acceso(){
		$("#productos").addClass("active");
		$("#acceso").addClass('active');
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
			case '/acceso.html':
				acceso();
				break;
			case '/video.html':
				videoporteros();
				break;
			case '/alarmas.html':
				alarmas();
				break;
			case '/gps.html':
				gps();
				break;
			case '/contacto.html':
				$("#contacto").addClass('active');
				break;
			case '/nosotros.html':
				$("#nosotros").addClass('active');
				break;
			case '/preguntas.html':
				$("#preguntas").addClass('active');
				break;

			default:
				break;
		}



	});
	
});