## To do
- [ ] Реализовать backend с использованием `express` или `koa` + `lowdb`
- [ ] Сгенерировать пользовательский токен, и положить в cookie
- [ ] Выполнить верстку страниц каталога и корзины по макету
- [ ] Реализовать логику взаимодействия между фронтом и бэкендом (добавление/удаление товаров, покупка)
------------------------------------------------------
REST API
Реализовать работу 4 методов: 
- [ ] `GET` /api/v1/cart/get
- [ ] `POST` /api/v1/cart/update
- [ ] `POST` /api/v1/cart/add?productId=12334 
- [ ] `POST` /api/v1/cart/delete?productId=12334 
------------------------------------------------------
`бонусная часть`
- [ ] Предусмотреть механизм работы кнопки “Оформить заказ” с отправкой данных на бекенд, и записью списка товаров, их количества и данных
ФИО, email, дату заказа на сервере
- [ ] Вывести список всех оформленных заказов на отдельной странице (mysite.ru/orders) - [ ] Каждый заказ должен содержать:
* UserId, ФИО, Email, Дату заказа
* Список купленных товаров
* Размер скидки
* Общую стоимость
* Если заказов более 10 предусмотреть пагинацию
* Предусмотреть поиск всех заказов по userId
- [ ] Размер скидки должен хранится в отдельной структуре базы данных (json) и рассчитываться из общей схемы скидок + дополнительная скидка
рассчитывается исходя из количества заказов
* от 2 заказов - 2%
* от 5 заказов - 5%
* от 10 заказов и более - 8%
## Done

- [x] Реализовать backend с использованием `express` или `koa` + `lowdb`
- [x] Сгенерировать пользовательский токен, и положить в cookie
- [x] Выполнить верстку страниц каталога и корзины по макету
- [x] Реализовать логику взаимодействия между фронтом и бэкендом (добавление/удаление товаров, покупка и т.п.)
------------------------------------------------------
REST API
Реализовать работу 4 методов: 
- [x] `GET` /api/v1/cart/get
- [x] `POST` /api/v1/cart/update
- [x] `POST` /api/v1/cart/add?productId=12334 
- [x] `POST` /api/v1/cart/delete?productId=12334 