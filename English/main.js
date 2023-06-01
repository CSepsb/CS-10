document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("yearSlider");
  var yearLabel = document.getElementById("yearLabel");
  var title = document.getElementById("title");
  var warContainer = document.getElementById("warContainer");

  var currentYear = new Date().getFullYear();
  title.textContent = currentYear;
  yearLabel.textContent = "Wars in " + currentYear + ":";
  warContainer.textContent = getTitle(currentYear);

  slider.value = currentYear;

  slider.oninput = function () {
    var year = parseInt(this.value);
    title.textContent = year;
    yearLabel.textContent = "Wars in " + year + ":";
    warContainer.textContent = getTitle(year);
  };
});
