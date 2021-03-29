admixAPI.on('load', function(){ 
	admixAPI.init({
		'resize': [
			{
			'name': 'state-1',
			'width': '240px',
			'height': '350px'
			}
		]
	});
	function $(id){
		return document.getElementById(id);
	}

	document.body.onclick = function(){
		admixAPI.click();
	};

	
	document.body.onselectstart = function() {
		return false;
	}
});