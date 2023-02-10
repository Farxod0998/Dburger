// ELEMENTS >>

const basketBtn = document.querySelector('.wrapper__right-basket'), // tovar karzina knopkasi
  basketBtnCounter = basketBtn.querySelector('.wrapper__right-counter'), // tovar karzina hisoblagichi
  basketModal = document.querySelector('.wrapper__modal'),
  basketModalCose = basketModal.querySelector('.wrapper__modal-close'),
  basketChecklist = basketModal.querySelector('.wrapper__modal-checklist'),
  basketTotalPrice = basketModal.querySelector('.wrapper__price'),
  productCounter = document.querySelectorAll('.wrapper__menu-count'),
  productAdd = document.querySelectorAll('.wrapper__menu-addProduct');

// << ELEMENTS END

productAdd.forEach((btn) => {
  btn.addEventListener('click', () => {
    const parent = btn.closest('.wrapper__menu-card'),
      parentId = parent.getAttribute('id');

      db[parentId].count++;
      basket()
  });
});


function basket() {
  const addArray = [];
  let totalCounter = 0;

  for (const key in db) {
    const po = db[key]
    const productCard = document.querySelector(`#${po.name.toLowerCase()}`);
    const productCount = productCard.querySelector('.wrapper__menu-count')
    const productImage = productCard.querySelector('img').getAttribute('src')
    po.img = productImage;
  
    if(po.count) {
      addArray.push(po);
  
  
      productCount.innerHTML = po.count
      productCount.classList.add('open')

      totalCounter += po.count
      basketBtnCounter.classList.add('active')
    }else {
      
      productCount.classList.remove('open')
      productCount.innerHTML = 0
    }
    
    
    basketBtnCounter.innerHTML = totalCounter
    }
    basketChecklist.innerHTML = ''
    for (let i = 0; i < addArray.length; i++) {
      const el = addArray[i];

      basketChecklist.innerHTML += cardItemBurger(el)
    }
    basketTotalPrice.innerHTML = totalSumm()
  }

  function cardItemBurger(dataBurger) {
  const {name, count, totalSumm, img} = dataBurger
    return `
      <div class="wrapper__modal-prod">
        <div class="wrapper__modal-left">
          <img src="${img}" alt="">
          <div class="wrapper__modal-info">
            <h3 class="wrapper__modal-name">${name}</h3>
            <p class="wrapper__modal-price"><span>${totalSumm}</span> сум</p>
          </div>
        </div>

      <div class="wrapper__modal-right" id="${name.toLowerCase()}__card">
        <button class="wrapper__modal-btn minus" data-symbol="-">-</button>
        <output class="wrapper__modal-count">${count}</output>
        <button class="wrapper__modal-btn plus"data-symbol="+">+</button>
      </div>

      </div>
    `
  }

  function totalSumm() {
    let total = 0;
    for (const key in db) {
      total += db[key].totalSumm
    }
    return total.toLocaleString()
  }
      window.addEventListener('click', function(event) {
       const btn = event.target
       if(btn.classList.contains('wrapper__modal-btn')) {
        const attr = btn.getAttribute ('data-symbol')
        const parent = btn.closest('.wrapper__modal-right')
        if (parent) {
          const idProduct = parent.getAttribute('id').split('_')[0]
          if (attr == '+') {
            db[idProduct].count++
          }else if(attr == '-') {
            db[idProduct].count--
          }
          basket()
        }
       }
      })






// ADD MODAL >>
basketBtn.addEventListener('click', () => {
  basketModal.classList.add('active')
})

// CLOSE MODAL >>
basketModalCose.addEventListener('click', () => {
  basketModal.classList.remove('active')
})