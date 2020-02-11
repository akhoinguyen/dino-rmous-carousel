$(".next").on('click', function() {

$(".current").removeClass('current').addClass('hihi');

$(".hihi").next().addClass('current');

$(".hihi.current").removeClass("current");

if($(".hihi").length > 4) {

$(".hihi:first-child").removeClass('hihi').addClass('current');
$(".hihi").removeClass("hihi");

}
})

/* how it works: all imgs except the first one initially are set to have opacity = 0 using class .opa-0. first img has full opacity due to class called .current.
  when 'Next' btn is clicked any img has .current will have .current removed and a meaningless class is added (i chose .hihi :).
  using .next() selector then add .current on any img next to .hihi (which is the previous img that just had .current stripped off).
  to loop: when $("hihi").length exceeds 4 (num of img -1), remove all .hihis and start from beginning (add current to first-child img)

  >> Essentially every time 'Next' is clicked the current img lose its visible class (.current) then added a meaningless class (.hihi), that class helps add .current onto the next img using .next() selector.
     All previous imgs now have that meaningless class which if reach certain numbers will loop by reset the whole stack by stripping all .hihis off and place .current back to the top img. This is done using if and .length().

 */
