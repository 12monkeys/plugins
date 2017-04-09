function sortBy(containerID) {
	var container = document.getElementById(containerID),
		selected = container.querySelector('.selected'),
		currentInList = container.querySelector('.dropdown-active'),
		dropdown = container.querySelector('.dropdown');

	var ignoredClicked = [selected, dropdown];

	if (container && selected && currentInList && dropdown){
		selected.innerHTML = currentInList.innerHTML;	
	}

	selected.addEventListener('click', function() {
		if (dropdown.className.indexOf('open') > -1) {
			dropdown.className = 'dropdown'	
		} 
		else {
			dropdown.className = 'dropdown open';
			setTimeout(function() {
				dropdown.className = 'dropdown open visible'
			}, 10)
		}
	});
	
	document.body.addEventListener('click', function() {
		dropdown.className = 'dropdown';
	});

	for (var i = 0; i < ignoredClicked.length; i++){
		ignoredClicked[i].addEventListener('click', function(e) {
			e.stopPropagation();
		})
	}
}