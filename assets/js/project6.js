let btn = document.querySelector(".button");
let list = document.querySelector(".ul-list");

// Method 1

btn.addEventListener('click', function (){
    list.classList.toggle('active-nav');
})

// Method 2

/*
btn.addEventListener('click', function () {
    if (list.classList.contains("active-nav")){
        list.classList.remove("active-nav");
    }else{
        list.classList.add("active-nav");
    }
})
*/

// Method 3
/*
btn.addEventListener("click", function () {
  if (list.style.display == "flex") {
    list.style.display = "none";
  }else{
    list.style.display = "flex";
  }
});
*/