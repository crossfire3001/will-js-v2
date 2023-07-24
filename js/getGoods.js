const getGoods = () => {
  fetch("/db/db.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

getGoods();
