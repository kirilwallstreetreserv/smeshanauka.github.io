function moveButton(button) {
    // Get the dimensions of the box container
    const container = document.querySelector('.box');
    const containerRect = container.getBoundingClientRect();
  
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
  
    // Calculate the maximum possible positions within the box
    const maxX = containerRect.width - buttonWidth;
    const maxY = containerRect.height - buttonHeight;
  
    // Generate random positions ensuring the button stays within the box
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
  
    // Set the button's new position
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  }
  
  function handleFortniteClick() {
    // Перенаправление на fortnite.html
    window.location.href = 'fortnite.html';
  
    // После 5 секунд перенаправление на scam.html
    setTimeout(() => {
      window.location.href = 'scam.html';
    }, 500);
  }
  