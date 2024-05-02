function toggleTheme() {
    var lightTheme = document.getElementById('light-theme');
    var darkTheme = document.getElementById('dark-theme');
    
    if (lightTheme.href.endsWith('light.css')) {
      lightTheme.disabled = true;
      darkTheme.disabled = false;
    } else {
      lightTheme.disabled = false;
      darkTheme.disabled = true;
    }
  }