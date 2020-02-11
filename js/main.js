var imgindex = 0;

$("img:eq(0)").removeClass("hidden");

$(".next").on('click', function() {

$(`img:eq(${imgindex})`).addClass("hidden");
imgindex++;
if(imgindex > 2) {
  imgindex = 0;
}
$(`img:eq(${imgindex})`).removeClass("hidden");
})

$(".prev").on('click', function(e) {

$(`img:eq(${imgindex})`).addClass("hidden");
imgindex--;
if(imgindex < -2) {
  imgindex = 0;
}
$(`img:eq(${imgindex})`).removeClass("hidden");
})

/* how it works: assign each img a var: img-index (first one starts at 0). WHen Next is clicked, hide current img, increase img-index by 1 and show the img with the new img-index */
