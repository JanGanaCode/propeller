// collapse
let title = document.getElementsByClassName("title");
let i;
for (i = 0; i < title.length; i++) {
  title[i].onclick = function() {
    // this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}

// data
fetch("http://design.propcom.co.uk/buildtest/accordion-data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    for (let i = 0; i < myJson.blocks.length; i++) {
      const element = myJson.blocks[i];
      //  headings
      document.getElementsByClassName("title-text")[i].innerHTML =
        myJson.blocks[i].heading;
      // paragraphs
      document.getElementsByClassName("paragraph")[i].innerHTML =
        myJson.blocks[i].content;
    }
  });
