
const searchBar = document.getElementById('search')

searchBar.addEventListener('input', debounce((event) => {
    const userInput = event.target.value
    
    const url = document.querySelector('[data-search-form]').getAttribute('action')

    history.replaceState({}, '','?searchValue=' + userInput + '&async=true')

    fetch(url + '?query=' + userInput + '&async=true')
        .then(res => res.text())
        .then(html => {
            document.querySelector('main').innerHTML = html
        })
    
}))

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};