/*
Задача:
У нас есть набор билетов вида:
[
    { from: 'London', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'SPB' },
    { from: 'SPB', to: 'LA' },
    ...
]

Из этих билетов можно построить единственный, неразрывный маршрут.
Петель и повторов в маршруте нет.

Нужно написать программу, которая возвращает эти же объекты билетов
в порядке следования по маршруту. Начало маршрута известно.
*/

// O(N)
function getRoute(tickets = [], start) {
  const mapaTicket = {};

  tickets.forEach((ticket) => {
    mapaTicket[ticket.from] = ticket.to;
  });

  const result = [];
  let route = start;
  let moreRoute = true;

  while (moreRoute) {
    if (!mapaTicket[route]) {
      result.push(route);
      moreRoute = false;
      break;
    }

    result.push(route);
    route = mapaTicket[route];
  }

  return result;
}

console.log(
  getRoute(
    [
      { from: "London", to: "Moscow" },
      { from: "NY", to: "London" },
      { from: "Moscow", to: "SPB" },
      { from: "SPB", to: "LA" },
    ],
    "London"
  )
);
