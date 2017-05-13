var $

$('form').on('submit', function(){
   
   var item = $('form input');
   var todo = {item: item.val()};
   
   $.ajax({
       type: 'POST',
       url: '/todo',
       data: todo,
       succes: function(data){
           
           
           location.reload();
       }
   });
    return false;
});



