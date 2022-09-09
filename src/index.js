import './style.css';
import createDropDowns from './dropdown';
import { nextImage, prevImage, createImageButtons } from './slider';

createDropDowns(document.getElementById('drop-down'));

document.getElementById('next-button').addEventListener('click', () => {
  nextImage();
});

document.getElementById('prev-button').addEventListener('click', () => {
  prevImage();
});

createImageButtons();
