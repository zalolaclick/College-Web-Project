var isDarkTheme = false;

function toggleTheme() {
  var lightTheme = document.getElementById('light-theme');
  var darkTheme = document.getElementById('dark-theme');
  
  isDarkTheme = !isDarkTheme;
  
  if (isDarkTheme) {
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    themeButtonImage.src = '..\\..\\Assets\\Images\\Buttons\\Theme-Dark.png';
  } else {
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    themeButtonImage.src = '..\\..\\Assets\\Images\\Buttons\\Theme-Light.png';
  }
}