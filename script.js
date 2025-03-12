let list = document.querySelectorAll('section ul li');
let itemBox = document.querySelectorAll('.product .itemBox');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function() {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }
    this.classList.add('active');
    let filter = this.getAttribute('data-filter');

    for (let k = 0; k < itemBox.length; k++) {
      if (filter === 'all') {
        itemBox[k].classList.remove('hidden');
      } else {
        if (itemBox[k].getAttribute('data-item') === filter) {
          itemBox[k].classList.remove('hidden');
        } else {
          itemBox[k].classList.add('hidden');
        }
      }
    }
  });
}
