function findMiddleIndex(images) {
  for (let i = 0; i < images.length; i += 1) {
    if (images[i].classList.contains('middle')) return i;
  }
  return false;
}

export function nextImage() {
  const images = document.querySelectorAll('.slider-img');
  const middleIndex = findMiddleIndex(images);
  if (middleIndex === false) {
    images[0].classList.add('middle');
    return;
  }
  if (middleIndex === images.length - 1) return;
  images[middleIndex].classList.remove('middle');
  images[middleIndex].classList.add('right');
  images[middleIndex + 1].classList.add('middle');
}

export function prevImage() {
  const images = document.querySelectorAll('.slider-img');
  const middleIndex = findMiddleIndex(images);
  if (middleIndex === false || middleIndex === 0) return;
  images[middleIndex].classList.remove('middle');
  images[middleIndex - 1].classList.remove('right');
  images[middleIndex - 1].classList.add('middle');
}

function showImageWithIndex(index) {
  const images = document.querySelectorAll('.slider-img');
  if (index < 0 || index >= images.length) return;
  if (images[index].classList.contains('middle')) return;
  if (images[index].classList.contains('right'))
    images[index].classList.remove('right');
  const middleIndex = findMiddleIndex(images);
  images[middleIndex].classList.remove('middle');
  images[index].classList.add('middle');
}

export function createImageButtons() {
  const imageButtons = document.querySelectorAll('li');
  for (let i = 0; i < imageButtons.length; i += 1) {
    imageButtons[i].addEventListener('click', () => {
      showImageWithIndex(i);
    });
  }
}
