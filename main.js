"use strict";
// Dom element
const first = document.querySelectorAll('.first');
const second = document.querySelectorAll('.second');
const third = document.querySelectorAll('.third');
const fourth = document.querySelectorAll('.fourth');
// Intersection Observer
const option = { threshold: 0.2 };
const Observer = new IntersectionObserver((entries, Observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, option);
first.forEach(entry => Observer.observe(entry));
second.forEach(entry => Observer.observe(entry));
third.forEach(entry => Observer.observe(entry));
fourth.forEach(entry => Observer.observe(entry));
