var isDarkTheme = false;

function toggleTheme() {
  var lightTheme = document.getElementById('light-theme');
  var darkTheme = document.getElementById('dark-theme');
  
  isDarkTheme = !isDarkTheme;
  
  if (isDarkTheme) {
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    document.getElementById('themeButtonImage').src = "../../Assets/Images/Buttons/Theme-Light.png";
  } else {
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    document.getElementById('themeButtonImage').src = "../../Assets/Images/Buttons/Theme-Dark.png";
  };
};