const catalogBtns = document.querySelectorAll(".container-nav-btns");
const catalog = document.querySelectorAll(".cards-column");

catalogBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    catalogBtns.forEach((controls) =>
      controls.classList.remove("active-nav-btn")
    );
    btn.classList.add("active-nav-btn");
    const buttonId = btn.dataset.buttonId;
    console.log(buttonId);
    switch (buttonId) {
      case "1":
        catalog.forEach((catalogClear) => {
          catalogClear.innerHTML = "";
        });
        catalog.forEach((catalogFull) => {
          catalogFull.insertAdjacentHTML(
            "afterbegin",
            `
          <div class="cards-column">
            <div class="card-item">
              <img src="img/cards/1.png" alt="" class="img-card" />
              <div class="item-text">
                <p class="text-author">Марсель Руссо</p>
                <p class="text-card-name">Охота Амура</p>
                <p class="text-material-and-sizes">Холст, масло (50х80)</p>
                <p class="text-price">14 500 руб</p>
                <button class="block-btn card-btn">В коризну</button>
              </div>
            </div>
            <div class="card-item">
              <img src="img/cards/2.png" alt="" class="img-card" />
              <div class="item-text">
                <p class="text-author">Анри Селин</p>
                <p class="text-card-name">Дама с собачкой</p>
                <p class="text-material-and-sizes">Акрил, бумага (50х80)</p>
                <p class="text-price">16 500 руб</p>
                <button class="block-btn card-btn">В коризну</button>
              </div>
            </div>
            <div class="card-item">
              <img src="img/cards/3.png" alt="" class="img-card" />
              <div class="item-text">
                <p class="text-author">Франсуа Дюпон</p>
                <p class="text-card-name">Процедура</p>
                <p class="text-material-and-sizes">
                  Цветная литография (40х60)
                </p>
                <p class="text-price">20 000 руб</p>
                <button class="block-btn card-btn">В коризну</button>
              </div>
            </div>
            <div class="card-item">
              <img src="img/cards/4.png" alt="" class="img-card" />
              <div class="item-text">
                <p class="text-author">Луи Детуш</p>
                <p class="text-card-name">Роза</p>
                <p class="text-material-and-sizes">Бумага, акрил (50х80)</p>
                <p class="text-price">12 000 руб</p>
                <button class="block-btn card-btn">В коризну</button>
              </div>
            </div>
            <div class="card-item">
              <img src="img/cards/5.png" alt="" class="img-card" />
              <div class="item-text">
                <p class="text-author">Франсуа Дюпон</p>
                <p class="text-card-name">Птичья трапеза</p>
                <p class="text-material-and-sizes">
                  Цветная литография (40х60)
                </p>
                <p class="text-price">22 500 руб</p>
                <button class="block-btn card-btn">В коризну</button>
              </div>
            </div>
            <div class="card-item">
              <img src="img/cards/6.png" alt="" class="img-card" />
              <div class="item-text">
                <p class="text-author">Пьер Моранж</p>
                <p class="text-card-name">Пейзаж с рыбой</p>
                <p class="text-material-and-sizes">
                  Цветная литография (40х60)
                </p>
                <p class="text-price">20 000 руб</p>
                <button class="block-btn card-btn">В коризну</button>
              </div>
            </div>
            <div class="card-item">
              <img src="img/cards/3.png" alt="" class="img-card" />
              <div class="item-text">
                <p class="text-author">Марсель Руссо</p>
                <p class="text-card-name">Охота Амура</p>
                <p class="text-material-and-sizes">Холст, масло (50х80)</p>
                <p class="text-price">14 500 руб</p>
                <button class="block-btn card-btn">В коризну</button>
              </div>
            </div>
            <div class="card-item">
              <img src="img/cards/4.png" alt="" class="img-card" />
              <div class="item-text">
                <p class="text-author">Марсель Руссо</p>
                <p class="text-card-name">Охота Амура</p>
                <p class="text-material-and-sizes">Холст, масло (50х80)</p>
                <p class="text-price">14 500 руб</p>
                <button class="block-btn card-btn">В коризну</button>
              </div>
            </div>
          </div>
            `
          );
        });
        break;
      case "2":
        catalog.forEach((catalogClear) => {
          catalogClear.innerHTML = "";
        });
        catalog.forEach((catalogFull) => {
          catalogFull.insertAdjacentHTML(
            "afterbegin",
            `
            <div class="cards-column">
              <div class="card-item">
                <img src="img/cards/germany/1.png" alt="" class="img-card" />
                <div class="item-text">
                  <p class="text-author">Курт Вернер</p>
                  <p class="text-card-name">Над городом</p>
                  <p class="text-material-and-sizes">Цветная литография (40х60)</p>
                  <p class="text-price">16 000 руб</p>
                  <button class="block-btn card-btn">В коризну</button>
                </div>
              </div>
              <div class="card-item">
                <img src="img/cards/germany/2.png" alt="" class="img-card" />
                <div class="item-text">
                  <p class="text-author">Макс Рихтер</p>
                  <p class="text-card-name">Птенцы</p>
                  <p class="text-material-and-sizes">Холст, масло (50х80)</p>
                  <p class="text-price">14 500 руб</p>
                  <button class="block-btn card-btn">В коризну</button>
                </div>
              </div>
              <div class="card-item">
                <img src="img/cards/germany/3.png" alt="" class="img-card" />
                <div class="item-text">
                  <p class="text-author">Мартин Майер</p>
                  <p class="text-card-name">Среди листьев</p>
                  <p class="text-material-and-sizes">
                   Цветная литография (40х60) 
                  </p>
                  <p class="text-price">20 000 руб</p>
                  <button class="block-btn card-btn">В коризну</button>
                </div>
              </div>
              <div class="card-item">
                <img src="img/cards/germany/4.png" alt="" class="img-card" />
                <div class="item-text">
                  <p class="text-author">Герман Беккер</p>
                  <p class="text-card-name">Яркая птица</p>
                  <p class="text-material-and-sizes">Цветная литография (40х60)</p>
                  <p class="text-price">13 000 руб</p>
                  <button class="block-btn card-btn">В коризну</button>
                </div>
              </div>
              <div class="card-item">
                <img src="img/cards/germany/5.png" alt="" class="img-card" />
                <div class="item-text">
                  <p class="text-author">Вульф Бауэр</p>
                  <p class="text-card-name">Дятлы</p>
                  <p class="text-material-and-sizes">
                 Бумага, акрил (50х80) 
                  </p>
                  <p class="text-price">20 000 руб</p>
                  <button class="block-btn card-btn">В коризну</button>
                </div>
              </div>
              <div class="card-item">
                <img src="img/cards/germany/6.png" alt="" class="img-card" />
                <div class="item-text">
                  <p class="text-author">Вальтер Хартманн</p>
                  <p class="text-card-name">Большие воды</p>
                  <p class="text-material-and-sizes">
                   Бумага, акрил (50х80) 
                  </p>
                  <p class="text-price">23 000 руб</p>
                  <button class="block-btn card-btn">В коризну</button>
                </div>
              </div>
                <div class="card-item">
                <img src="img/cards/germany/3.png" alt="" class="img-card" />
                <div class="item-text">
                  <p class="text-author">Мартин Майер</p>
                  <p class="text-card-name">Среди листьев</p>
                  <p class="text-material-and-sizes">
                   Цветная литография (40х60) 
                  </p>
                  <p class="text-price">20 000 руб</p>
                  <button class="block-btn card-btn">В коризну</button>
                </div>
              </div>
              <div class="card-item">
                <img src="img/cards/germany/4.png" alt="" class="img-card" />
                <div class="item-text">
                  <p class="text-author">Герман Беккер</p>
                  <p class="text-card-name">Яркая птица</p>
                  <p class="text-material-and-sizes">Цветная литография (40х60)</p>
                  <p class="text-price">13 000 руб</p>
                  <button class="block-btn card-btn">В коризну</button>
                </div>
              </div>
            </div>
              `
          );
        });
        break;
      case "3":
        catalog.forEach((catalogClear) => {
          catalogClear.innerHTML = "";
        });
        catalog.forEach((catalogFull) => {
          catalogFull.insertAdjacentHTML(
            "afterbegin",
            `
           <div class="cards-column">
             <div class="card-item">
               <img src="img/cards/england/1.png" alt="" class="img-card" />
               <div class="item-text">
                 <p class="text-author">Пол Смит</p>
                 <p class="text-card-name">Дикий зверь</p>
                 <p class="text-material-and-sizes">Акварель, бумага (50х80)</p>
                 <p class="text-price">19 500 руб</p>
                 <button class="block-btn card-btn">В коризну</button>
               </div>
             </div>
             <div class="card-item">
               <img src="img/cards/england/2.png" alt="" class="img-card" />
               <div class="item-text">
                 <p class="text-author">Джон Уайт</p>
                 <p class="text-card-name">Скалистый берег</p>
                 <p class="text-material-and-sizes">Цветная литография (40х60)</p>
                 <p class="text-price">17 500 руб</p>
                 <button class="block-btn card-btn">В коризну</button>
               </div>
             </div>
             <div class="card-item">
               <img src="img/cards/england/3.png" alt="" class="img-card" />
               <div class="item-text">
                 <p class="text-author">Джим Уотсон</p>
                 <p class="text-card-name">Река и горы</p>
                 <p class="text-material-and-sizes">
                  Акварель, бумага (50х80)
                 </p>
                 <p class="text-price">20 500 руб</p>
                 <button class="block-btn card-btn">В коризну</button>
               </div>
             </div>
             <div class="card-item">
               <img src="img/cards/england/4.png" alt="" class="img-card" />
               <div class="item-text">
                 <p class="text-author">Юджин Зиллион</p>
                 <p class="text-card-name">Белый попугай</p>
                 <p class="text-material-and-sizes">
                Цветная литография (40х60) 
                 </p>
                 <p class="text-price">15 500 руб</p>
                 <button class="block-btn card-btn">В коризну</button>
               </div>
             </div>
             <div class="card-item">
               <img src="img/cards/england/5.png" alt="" class="img-card" />
               <div class="item-text">
                 <p class="text-author">Эрик Гиллман</p>
                 <p class="text-card-name">Ночная рыба</p>
                 <p class="text-material-and-sizes">
             Бумага, акрил (50х80) 
                 </p>
                 <p class="text-price">12 500 руб</p>
                 <button class="block-btn card-btn">В коризну</button>
               </div>
             </div>
             <div class="card-item">
               <img src="img/cards/england/6.png" alt="" class="img-card" />
               <div class="item-text">
                 <p class="text-author">Альфред Барр</p>
                 <p class="text-card-name">Рыжий кот</p>
                 <p class="text-material-and-sizes">
                 Цветная литография (40х60) 
                 </p>
                 <p class="text-price">21 000 руб</p>
                 <button class="block-btn card-btn">В коризну</button>
               </div>
             </div>
               <div class="card-item">
               <img src="img/cards/england/3.png" alt="" class="img-card" />
               <div class="item-text">
                 <p class="text-author">Джим Уотсон</p>
                 <p class="text-card-name">Река и горы</p>
                 <p class="text-material-and-sizes">
                  Акварель, бумага (50х80)
                 </p>
                 <p class="text-price">20 500 руб</p>
                 <button class="block-btn card-btn">В коризну</button>
               </div>
             </div>
             <div class="card-item">
               <img src="img/cards/england/4.png" alt="" class="img-card" />
               <div class="item-text">
                 <p class="text-author">Юджин Зиллион</p>
                 <p class="text-card-name">Белый попугай</p>
                 <p class="text-material-and-sizes">
                Цветная литография (40х60) 
                 </p>
                 <p class="text-price">15 500 руб</p>
                 <button class="block-btn card-btn">В коризну</button>
               </div>
             </div>
           </div>
             `
          );
        });
        break;
    }
  });
});
const listMenu = document.querySelector(".menu-list-w320");

listMenu.addEventListener("click", () => {
  listMenu.classList.add("active-list");
});
