function changeColor() {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    const randomColor = `rgb(${r}, ${g}, ${b})`;
  
    document.getElementById("box").style.backgroundColor = randomColor;
  }
  