const buttonGrid = document.getElementById('button-grid');
    const buttons = buttonGrid.children;
    let clickableButtons = 3; // Сколько кнопок можно нажать
    let clickedButtons = 0; // Сколько кнопок нажато
    let score = 0; // Сколько бонусов заработали (вот эту переменную желатильно потом в бдшку хавать, ну или на пофиг просто сделать подсчёт, думаю и этого хватит)
    const scoreElement = document.getElementById('score');

    // берём короче 3 рандомные кнопки который будут давать бонусы
    const specialButtons = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * buttons.length);
      specialButtons.push(buttons[randomIndex]);
    }

    // делаем так чтобы кнопки правильно реагировали на нажатие
    Array.prototype.forEach.call(buttons, button => {
      button.addEventListener('click', () => {
        if (clickedButtons < clickableButtons) {
          button.classList.add('clicked');
          clickedButtons++;
          if (specialButtons.includes(button)) {
            button.classList.add('special');
            score += 50; // Вот тут сколько бонусов добавляем
            scoreElement.textContent = `Бонусы: ${score}`;
          }
          if (clickedButtons === clickableButtons) {
            // выключаем все кнопки когда много нажатий... Многа это сколько в clickableButtons
            Array.prototype.forEach.call(buttons, button => {
              button.disabled = true;
            });
          }
        }
      });
    });