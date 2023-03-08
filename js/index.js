const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var elems = document.getElementsByClassName("accordion");
    for(let it of elems) {
      it.classList.remove('font-bold');
      it.nextElementSibling.style.maxHeight = null;
    }

    this.classList.toggle('font-bold');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });

}