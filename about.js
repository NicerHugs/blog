function resize(img) {
	var height = img.height + 'px';
	document.querySelector('.mask').style.height = height;
	document.querySelector('.about-wrapper').style['min-height'] = height;
}

var img = document.querySelector('.about .about-wrapper img');

if (img.complete) {
	resize(img);
} else {
	img.addEventListener('load', resize.bind(null, img));
}
