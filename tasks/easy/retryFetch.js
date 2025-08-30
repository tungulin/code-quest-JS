/**
 * Задача:
 * Необходимо написать функцию, которая на вход принимает url,
 * асинхронно ходит по этому урлу GET запросом и возвращает данные (json).
 * Для получения данных использовать fetch.
 * Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
 * Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен".
 */

function retryFetch(url) {
  let counter = 5;

  const retry = () => {
    return fetch(url)
      .then((resp) => resp.json())
      .catch(() => {
        if (counter === 0) {
          return Promise.reject("Заданный URL недоступен");
        }

        counter--;
        return retry();
      });
  };

  return retry();
}

retryFetch("https://ps-trybuy-back.bytew1ave.space/region")
  .then((res) => console.log("Success: ", res))
  .catch((err) => console.error("Error: ", err));
