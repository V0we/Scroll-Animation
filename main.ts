// Dom element
const first = document.querySelectorAll('.first') as NodeListOf<HTMLDivElement>;
const second = document.querySelectorAll('.second') as NodeListOf<HTMLDivElement>;
const third = document.querySelectorAll('.third') as NodeListOf<HTMLDivElement>;
const fourth = document.querySelectorAll('.fourth') as NodeListOf<HTMLDivElement>;

// Creating the Intersection Observer
const option: IntersectionObserverInit = {threshold: 0.2};

const Observer = new IntersectionObserver( (entries, Observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, option);

// Attaching the intersection observer
first.forEach(entry => Observer.observe(entry));
second.forEach(entry => Observer.observe(entry));
third.forEach(entry => Observer.observe(entry));
fourth.forEach(entry => Observer.observe(entry));