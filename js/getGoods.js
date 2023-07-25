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

  // получаем все ссылки и назначаем им клик
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // блокируем переход по url
      getData(); // при каждом клике вызывается функция getData
    });
  });
};

getGoods();
