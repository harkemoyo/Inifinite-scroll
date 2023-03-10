const URL =         "https://gist.githubusercontent.com/prof3ssorSt3v3/1944e7ba7ffb62fe771c51764f7977a4/raw/c58a342ab149fbbb9bb19c94e278d64702833270/infinite.json";
document.addEventListener('DOMContentLoaded',() =>{

    let options = {
        root: null,
        rootMargins: "0px",
        threshold: 0.5
    }

    const observe = new IntersectionObserver(handleIntersect, options);
    observe.observe(document.querySelector('footer')); 
});
function handleIntersect(entries) {
    if (entries[0].isIntersecting) {
      console.warn("something is intersecting with the viewport");
      getData();
    }
  }
function getData() {
    let main = document.querySelector("main");
    console.log("fetch some JSON data");
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        // data.items[].img, data.items[].name
        data.items.forEach(item => {
          let fig = document.createElement("figure");
          let fc = document.createElement("figcaption");
          let img = document.createElement("img");
          img.src = item.img;
          img.alt = item.name;
          fc.textContent = item.name;
          fig.appendChild(img);
          fig.appendChild(fc);
          main.appendChild(fig);
        });
    });
}
