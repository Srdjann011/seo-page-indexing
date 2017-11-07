//Code active and published on kcm.co.rs, idea and coding by Srdjan Nikolic November 11 2017 nsrdjo@gmail.com  -SEO Specialist-
window.onload = function() {
	$.ajax({
	    type: "GET",
	    url: "http://www.kcm.co.rs/sitemap.xml",
	    dataType: "xml",
	    success: function (data) {
	    	var pageLinkLocation = window.location.href;
	    	var sitemap = data;
	    	var sitemapLength = sitemap.getElementsByTagName("loc");
	    		for (var i = 0; i < sitemapLength.length; i++) {
	    			
					if(pageLinkLocation == sitemap.getElementsByTagName("loc")[i].innerHTML){
						writeYes();
						break;
					}
					else if(pageLinkLocation != sitemap.getElementsByTagName("loc")[i].innerHTML && i == sitemapLength.length-1) {
						writeNO();
						break;
					}
	    		}
	    	function writeYes(){
				var canonicalEl = document.createElement('link');
				canonicalEl.setAttribute("rel", "canonical");
				canonicalEl.setAttribute("href", pageLinkLocation);
				var headElement = document.getElementsByTagName("head")[0];
				headElement.appendChild(canonicalEl);		
			}
			function writeNO(){
				var noIndexEL= document.createElement('meta');
				noIndexEL.setAttribute("name", "robots");
				noIndexEL.setAttribute("content", "noindex, follow");
				var headElementNO = document.getElementsByTagName("head")[0];
				headElementNO.appendChild(noIndexEL);		
			}

	  	}
	});
};