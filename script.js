// Функция для получения данных пользователя с сервера
function getUserData(userId) {
 return fetch(`https://example.com/users/${userId}`)
     .then(response => {
         if (!response.ok) {
             throw new Error(`User with ID ${userId} not found`);
         }
         return response.json();
     })
     .then(data => {
         return data;
     })
     .catch(error => {
         throw new Error(error.message);
     });
}

// Функция для сохранения данных пользователя на сервер
function saveUserData(userData) {
 return fetch('https://example.com/users', {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json',
     },
     body: JSON.stringify(userData)
 })
 .then(response => {
     if (!response.ok) {
         throw new Error('Failed to save user data');
     }
     return response.json();
 })
 .then(data => {
     return data;
 })
 .catch(error => {
     throw new Error(error.message);
 });
}

// Функция для изменения стиля элемента после задержки
function changeStyleDelayed(elementId, delay) {
 setTimeout(() => {
     const element = document.getElementById(elementId);
     if (element) {
         element.style.backgroundColor = 'yellow'; // Пример изменения стиля
     } else {
         console.error('Element not found');
     }
 }, delay);
}

// Примеры использования функций
// Получение данных пользователя
getUserData(1)
 .then(userData => console.log(userData))
 .catch(error => console.error(error));

// Сохранение данных пользователя
const newUser = {
 name: 'John Smith',
 age: 30,
 email: 'john@example.com'
};

saveUserData(newUser)
 .then(() => console.log('User data saved successfully'))
 .catch(error => console.error(error));

// Изменение стиля элемента с id 'myElement' через 2000 миллисекунд
changeStyleDelayed('myElement', 2000);
