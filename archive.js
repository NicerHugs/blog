var uls = [].slice.call(document.querySelectorAll('.archive-by-year li ul'));

window.addEventListener('hashchange', openYear)

function openYear() {
	var id = location.hash;
	if (location.hash !== '') {
		uls.forEach(function (ul) {
			if (ul.id === id) {
				ul.style.height = ul.children.length * 3.24 + 'rem';
			} else {
				ul.style.height = '0';
			}
		})
	}
}

openYear();
