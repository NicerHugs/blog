var years = [].slice.call(document.querySelectorAll('.archive-by-year li'));

window.addEventListener('hashchange', openYear)

function openYear() {
	var id = location.hash;
	if (location.hash !== '') {
		years.forEach(function (li) {
			if (li.id === id) {
				var labelHeight = 34;
				var childHeight = li.querySelector('.posts-list').clientHeight;
				var totalHeight = labelHeight + childHeight + 'px';
				li.style.height = totalHeight;
			} else {
				li.style.height = '34px';
			}
		})
	}
}

openYear();
