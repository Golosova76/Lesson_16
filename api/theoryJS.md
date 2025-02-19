Когда пишется запрос на языках программирования (JavaScript, TypeScript, Python), то это просто пример запроса в коде. Но когда этот код выполняется, браузер или библиотека формирует реальный HTTP-запрос, который отправляется на сервер. Его можно увидеть в devtools в Network.

В **JavaScript** сетевые запросы (например fetch()) выполняются асинхронно. Это значит что **JavaScript** не ждет, пока запрос завершится, а продолжает выполнение кода. Когда вызывается fetch(), он возвращает **Promise** - объект, который обещает вернуть результат позже.

**Fetch API** предоставляет интерфейс для получения ресурсов, эта встроенная функция JavaScript для выполнения HTTP-запросов.

**fetch()** - отправляет запрос и возвращает объект **Promise**, принимает один обязательный аргумент - путь к данным, которые нужно получить (строка URL куда отправляется запрос). Второй аргумент - необязательный объект с настройками (method, headers, body и др).

### Первый вариант

```javascript
let responseData;

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
})
  .then((response) => response.json()) // Парсим JSON (преобразуем ответ) ждем, когда сервер вернет ответ.
  .then((data) => {
    responseData = data; // Сохраняем ответ в переменную
  })
  .catch((error) => {
    responseData = error; // Сохраняем ошибку в переменную
  });
```

### Второй вариант

```javascript
const url = "https://api.example.com/users/123"; // URL

const method = "GET"; // Метод (по умолчанию GET, поэтому его можно не указывать)

// Заголовки
const headers = {
  Accept: "application/json",
};

// Тело (для GET-запроса тело обычно не требуется)

// Выполнение запроса
fetch(url, { method, headers })
  .then((response) => response.json()) // Преобразуем ответ в JSON
  .then((data) => console.log(data)) // Выводим данные
  .catch((error) => console.error("Ошибка:", error));
```

### Третий вариант

```javascript
const url = "https://api.example.com/users"; // URL

const method = "POST"; // Метод

// Заголовки
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// Тело (данные для создания пользователя)
const body = JSON.stringify({
  name: "Мария Петрова",
  email: "maria@example.com",
  password: "securepassword123",
});

// Выполнение запроса
fetch(url, { method, headers, body })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Ошибка:", error));
```

Когда вызывается **fetch()**, браузер не останавливает выполнение кода и не ждет ответа от сервера. Вместо этого он сразу возвращает объект **Promise**, который "ожидает" завершения запроса. Когда сервер ответит, **Promise** выполнится успешно (fulfilled), даже если ответ содержит ошибку. Если успешно, тогда на полученном объекте **Promise** сработает метод **then()**. Если сети нет или сервер недоступен **Promise** отклоняется (rejected) (завершится с ошибкой) и сработает **catch()**.

Если сервер ответил (даже с ошибкой 404) => **.then()** выполнится.  
Если сеть недоступна или сервер не отвечает => **catch()** обработает ошибку.

Второй аргумент это объект с настройками запроса, и он соответствует стандартному HTTP-запросу (**Request**), который используется в **REST API**. По сути, когда используешь **fetch()**, то отправляется обычный HTTP-запрос.  
Если не передавать второй аргумент в **fetch()**, то используется **GET** по умолчанию.

Метод **.then()** это метод объекта Promise => .then(callback) **что такое методы объекта??????**  
Метод **catch()** это метод объекта Promise => .catch(callback)

Этот метод принимает функцию-обработчик, которая выполнится, когда **Promise** завершится успешно.
Что делает этот метод? Ждет пока **Promise** выполнится (fulfilled), получает аргументом результат выполнения **Promise** (в случае fetch() — это объект Response), и выполняет переданную функцию.
Можно использовать цепочку .then() для обработки данных.

Метод **JSON.stringify()** используется для преобразования JavaScript-объекта в строку формата JSON, потому что сервер ожидает данные в таком виде.  
**fetch()** не может отправлять объекты JavaScript напрямую. Он принимает тело запроса только в виде строки (JSON-строка) или FormData.

После выполнения кода браузер или библиотека формирует реальный HTTP-запрос, который отправляется на сервер.

**HTTP-запрос на сервер**

```
POST /posts HTTP/1.1
Host: jsonplaceholder.typicode.com
Content-Type: application/json
Content-Length: 40

{
"title": "foo",
"body": "bar",
"userId": 1
}
```

- первая строка стартовая линия запроса (Request Line)

**HTTP-ответ от сервера**

```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 101,
  "title": "foo",
  "body": "bar",
  "userId": 1
}
```

#### Разбор по шагам

```javascript

.then(response => response.json())

```

- response — это объект ответа (Response)
- response.json() преобразует тело ответа в JSON и возвращает Promise<data>

```javascript

.then(data => { responseData = data; })

```

- data это уже распарсенные JSON-данные, которые вернул сервер.
- сохраняем в переменную responseData
