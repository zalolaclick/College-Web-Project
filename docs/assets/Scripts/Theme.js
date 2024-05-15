var isDarkTheme = false;

function toggleTheme() {
  var lightTheme = document.getElementById('light-theme');
  var darkTheme = document.getElementById('dark-theme');
  var themeButtonImage = document.getElementById("themeButtonImage");
  var htmlthemeid = document.getElementsByTagName("HTML")
  if (htmlthemeid.id == "about") {
    var placeholder1 = 0;
  } else if (htmlthemeid.id == "job") {
    var placeholder1 = 0;
  } else {
    phonetheme = document.getElementById("phone")
  };
  
  isDarkTheme = !isDarkTheme;
  
  if (isDarkTheme) {
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    themeButtonImage.src = "../docs/assets/Images/Buttons/Theme-Light.png";
    localStorage.setItem("theme", "dark");
    if (htmlthemeid.id == "about") {
      var placeholder1 = 0;
    } else if (htmlthemeid.id == "job") {
      var placeholder1 = 0;
    } else {
      phonetheme.src = "../docs/assets/Images/Contact/Phone-Dark.png";
    };
  } else {
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    themeButtonImage.src = "../docs/assets/Images/Buttons/Theme-Dark.png";
    localStorage.setItem("theme", "light");
    if (htmlthemeid.id == "about") {
      var placeholder1 = 0;
    } else if (htmlthemeid.id == "job") {
      var placeholder1 = 0;
    } else {
      phonetheme.src = "../docs/assets/Images/Contact/Phone-Light.png";
    };
  };
};