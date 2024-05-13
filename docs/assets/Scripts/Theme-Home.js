var isDarkTheme = false;

function toggleTheme() {
  var lightTheme = document.getElementById('light-theme');
  var darkTheme = document.getElementById('dark-theme');
  var themeButtonImage = document.getElementById("themeButtonImage");
  var homeTitle = document.getElementById("homeTitle");
  
  isDarkTheme = !isDarkTheme;
  
  if (isDarkTheme) {
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    themeButtonImage.src = "docs/assets/Images/Buttons/Theme-Light.png";
    homeTitle.src = "docs/assets/Images/Home-Title/Home-Title-New-Dark.png.png";
    localStorage.setItem("theme", "dark");
  } else {
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    themeButtonImage.src = "docs/assets/Images/Buttons/Theme-Dark.png";
    homeTitle.src = "docs/assets/Images/Home-Title/Home-Title-New-Light.png.png";
    localStorage.setItem("theme", "light");
  };
};