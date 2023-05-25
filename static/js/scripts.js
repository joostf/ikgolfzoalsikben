const options = {
    threshold: 0.25
}
const observer = new IntersectionObserver(showToTop, options); 
const toTopButton = document.querySelector('main > a');
const sections = document.querySelectorAll('section')

sections.forEach(section =>{
    observer.observe(section) 
})

function showToTop(entries) { 
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting && entry.boundingClientRect.y > 500) {
            toTopButton.classList.add('observed')
        } else {
            toTopButton.classList.remove('observed')
        }
    });
};
