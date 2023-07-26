const getGoods = () => {
  const links = document.querySelectorAll(".navigation-link");

  // получаем данные с json
  const getData = () => {
    fetch("/db/db.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  // получаем все ссылки и назначаем на них клик
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // блокируем переход по url
      getData(); // при каждом клике вызывается функция getData
    });
  });

  localStorage.setItem("goods", JSON.stringify([1, 2, 3, 4, 5]));

  const goods = JSON.parse(localStorage.getItem("goods"));
  console.log(goods);

  localStorage.removeItem("goods");

  console.log(localStorage);
};

getGoods();
