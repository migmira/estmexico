(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-100421426-1', 'auto');
ga('send', 'pageview', location.pathname);


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
			case '/videoporteros.html':
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
			case '/preguntas.html':
				$("#preguntas").addClass('active');
				break;

			default:
				break;
		}



	});
	
});