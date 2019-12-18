let SelectedColor = '#4d54df';

function changeColor() {
  SelectedColor = document.getElementById('colorPick').value;
  document.getElementById('colorPick').style.backgroundColor = SelectedColor;
  document.getElementById('colorPick').style.color = SelectedColor;
}

function color(e) {
  e.style.fill = SelectedColor;
}
