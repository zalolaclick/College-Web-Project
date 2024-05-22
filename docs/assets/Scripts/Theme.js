// Key:
// Whenever another one of these (//) is used. Consider it a seperate comment.
// If a sentence in a comment is encased in exclaimation marks (Like this: !{Sentence!}) consider it important or being worked on.

// Loads either variables that don't need change or variables that are specific to certain pages.
var IsDarkTheme = false;
console.log("Variable IsDarkTheme Loaded");
var TitleImage; // Unset because this is not universal to all pages.
console.log("Variable TitleImage Ready");
var PhoneTheme; // Unset because this is not universal to all pages.
console.log("Variable PhoneTheme Ready");

// To change the theme of the website.
function toggleTheme() {
  var lightTheme = document.getElementById("light-theme");
  console.log("Light Theme Loaded");
  var darkTheme = document.getElementById("dark-theme");
  console.log("Dark Theme Loaded");
  var themeButtonImage = document.getElementById("themeButtonImage");
  console.log("Theme Changer Button Loaded");
  var PageTheme = document.getElementsByTagName("HTML")[0].id;
  console.log("PageTheme: ", PageTheme);
  // Sets variables that a specific to certain pages.
  if (PageTheme == "home") {
    TitleImage = document.getElementById("TitleImage");
    console.log("TitleImage loaded");
  } else if (PageTheme == "about") {
    placeholder1 = 0;
  } else if (PageTheme == "portfolio") {
    var Employee1 = document.getElementById("Employee1");
    var Employee2 = document.getElementById("Employee2");
    var Employee3 = document.getElementById("Employee3");
    var Employee4 = document.getElementById("Employee4");
  } else if (PageTheme == "job") {
    placeholder1 = 0;
  } else if (PageTheme == "apply") {
    placeholder1 = 0;
  } else if (PageTheme == "contact") {
    PhoneTheme = document.getElementById("phone");
  }

  IsDarkTheme = !IsDarkTheme;

  // For pages: About, Job, and Contact // Changes to dark theme.
  if (IsDarkTheme && (PageTheme == "about" || PageTheme == "job" || PageTheme == "contact")) {
    // Elements that appear on all pages.
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    console.log("Theme changed to dark.");
    themeButtonImage.src = "../docs/assets/Images/Buttons/Theme-Light.png";
    console.log("Theme Changing Button Image is: " + themeButtonImage.src);
    localStorage.setItem("theme", "dark");
    if (PageTheme == "about") {
      // Elements specific to: About.
      var placeholder1; // !Unfinished Page!
    } else if (PageTheme == "job") {
      // Elements specific to: Job.
      var placeholder1; // !Unfinished Page!
    } else if (PageTheme == "contact") {
      // Elements specific to: Contact.
      PhoneTheme.src = "../docs/assets/Images/Contact/Phone-Dark.png";
      console.log("Phone changed to: " + PhoneTheme.src);
    }
    // For pages: About, Contact and Job // Changes to light theme.
  } else if (PageTheme == "about" || PageTheme == "job" || PageTheme == "contact") {
    // Elements that appear on all pages.
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    console.log("Theme changed to light.");
    themeButtonImage.src = "../docs/assets/Images/Buttons/Theme-Dark.png";
    console.log("Theme Changing Button Image is: " + themeButtonImage.src);
    localStorage.setItem("theme", "light");
    if (PageTheme == "about") {
      // Elements specific to: About.
      var placeholder1 = 0; // !Unfinished Page!
    } else if (PageTheme == "job") {
      // Elements specific to: Job.
      var placeholder1 = 0; // !Unfinished Page!
    } else {
      // Elements specific to: Contact.
      PhoneTheme.src = "../docs/assets/Images/Contact/Phone-Light.png";
      console.log("Phone changed to: " + PhoneTheme.src);
    }
    // For pages: Portfolio and Apply // Changes to dark theme.
  } else if (IsDarkTheme && PageTheme != "home") {
    // Elements that appear on all pages.
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    console.log("Theme changed to dark.");
    themeButtonImage.src = "../../docs/assets/Images/Buttons/Theme-Light.png";
    console.log("Theme Changing Button Image is: " + themeButtonImage.src);
    localStorage.setItem("theme", "dark");
    if (PageTheme == "portfolio") {
      // Elements specific to: Portfolio.
      Employee1.src = "../../docs/assets/Images/Portfolio/Employee1.png";
      Employee2.src = "../../docs/assets/Images/Portfolio/Employee2.png";
      Employee3.src = "../../docs/assets/Images/Portfolio/Employee3.png";
      Employee4.src = "../../docs/assets/Images/Portfolio/Employee4.png";
    }
    // For pages: Portfolio and Apply // Changes to light theme.
  } else if (PageTheme != "home") {
    // Elements that appear on all pages.
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    console.log("Theme changed to light.");
    themeButtonImage.src = "../../docs/assets/Images/Buttons/Theme-Dark.png";
    console.log("Theme Changing Button Image is: " + themeButtonImage.src);
    localStorage.setItem("theme", "light");
    if (PageTheme == "portfolio") {
      // Elements specific to: Portfolio.
      Employee1.src = "../../docs/assets/Images/Portfolio/Employee1-Dark.png";
      Employee2.src = "../../docs/assets/Images/Portfolio/Employee2-Dark.png";
      Employee3.src = "../../docs/assets/Images/Portfolio/Employee3-Dark.png";
      Employee4.src = "../../docs/assets/Images/Portfolio/Employee4-Dark.png";
    }
    // For pages: Home // Changes to dark theme.
  } else if (IsDarkTheme && PageTheme == "home") {
    // Elements that appear on all pages.
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    console.log("Theme changed to dark.");
    themeButtonImage.src = "docs/assets/Images/Buttons/Theme-Light.png";
    console.log("Theme Changing Button Image is: " + themeButtonImage.src);
    localStorage.setItem("theme", "dark");
    // Elements specific to: Home.
    TitleImage.src = "docs/assets/Images/Home/Home-Title-New-Dark.png";
    console.log("Home's Title changed to: " + TitleImage.src);
    // For pages: Home // Changes to light theme.
  } else if (PageTheme == "home") {
    // Elements that appear on all pages.
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    console.log("Theme changed to light.");
    themeButtonImage.src = "docs/assets/Images/Buttons/Theme-Dark.png";
    console.log("Theme Changing Button Image is: " + themeButtonImage.src);
    localStorage.setItem("theme", "light");
    // Elements specific to: Home.
    TitleImage.src = "docs/assets/Images/Home/Home-Title-New-Light.png";
  }
}
