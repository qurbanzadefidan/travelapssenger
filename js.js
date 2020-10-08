  $('#i').click(function(){
    $('#dropdown').each(function(){
      if ($(this).val('') !== '')
        $(this).val('');
    }); 
});

  function set_mouseover(id) {
  jQuery('#dropdown').val(id);
}
  
// call menu_item
  function  fun2() {
    document.getElementById("menuitem").style.display="block";
 }
 document.getElementById("dropdown").addEventListener("click", fun2, true);

// close

window.addEventListener('mouseup',function(event){
    var menuitem = document.getElementById('menuitem');
    if(event.target != menuitem && event.target.parentNode != menuitem){
        menuitem.style.display = 'none';
    }
});  



// call person

function calitems(){
    document.getElementById("item_drop").style.display="block";

}
document.getElementById("person").addEventListener("click", calitems, true);
// close
window.addEventListener('mouseup',function(event){
    var item_drop = document.getElementById('item_drop');
    if(event.target != item_drop && event.target.parentNode != item_drop){
        item_drop.style.display = 'none';
    }
});  











// daterangepicker lib
 $(function() {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
  
    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });
  
    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  
  });



//   increaseQty,decreaseQty

  $(function(){
    var minVal = 1, maxVal = 20; 
    $(".increaseQty").on('click', function(){
            var $parentElm = $(this).parents(".qtySelector");
            $(this).addClass("clicked");
            setTimeout(function(){
                $(".clicked").removeClass("clicked");
            },100);
            var value = $parentElm.find(".qtyValue").val();
            if (value < maxVal) {
                value++;
            }
            $parentElm.find(".qtyValue").val(value);
    });
    
    $(".decreaseQty").on('click', function(){
            var $parentElm = $(this).parents(".qtySelector");
            $(this).addClass("clicked");
            setTimeout(function(){
                $(".clicked").removeClass("clicked");
            },100);
            var value = $parentElm.find(".qtyValue").val();
            if (value > 1) {
                value--;
            }
            $parentElm.find(".qtyValue").val(value);
        });
  })



