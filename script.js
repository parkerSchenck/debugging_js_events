let buttonBtn = document.querySelector("button");
let anchorBtn = document.querySelector(".needyAnchorTag");
let paragraphBtn = document.querySelector(".needyParagraphTag");
let myImage = document.querySelector(img);

// This hides the img tag
myImage.style.display = 'none';

// When the button is clicked, the img tag will be displayed and 
// the src (i.e., image to be displayed) will be updated.
buttonBtn.addEventListener("click", function() {
    myImage.style.display = 'block';
    myImage = "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg";
});

// When the mouse is over the anchor tag, the img tag will be displayed and 
// the src (i.e., image to be displayed) will be updated.
anchorBtn.addEventListener("mouseover", function() {
    myImage.style = 'block';
    myImage.src = "https://cdn.pixabay.com/photo/2023/12/13/06/40/cat-8446390_1280.jpg";
});

// When the mouse is over the paragraph tag and then leaves, the img tag will be displayed and 
// the src (i.e., image to be displayed) will be updated.
paragraphBtn.addEventListener("mouseout") {
    myImage.style.display = 'block';
    myImage.src = "https://cdn.pixabay.com/photo/2014/05/07/06/44/cat-339400_1280.jpg";
});