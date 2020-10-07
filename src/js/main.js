const loader = document.querySelector('.loader');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const brand = document.querySelector('.brand__image');


function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none'

    header.style.display = 'block';
    setTimeout(() => (header.style.opacity) = 1, 50);

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity) = 1, 50);

    footer.style.display = 'block';
    setTimeout(() => (footer.style.opacity) = 1, 50);

    brand.style.display = 'block';
    setTimeout(() => (brand.style.opacity) = 1, 500);
  }, 3000);

}

init();
