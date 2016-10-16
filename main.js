---
---
// disqus configuration
var disqus_config = function () {
this.page.url = '{{ page.url }}';
this.page.identifier = '{{ page.id }}';
};
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'http://comment-nicerhugs-com.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
