$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="main__comment__box">
         <div class="main__comment__box__top">
           <div class="main__comment__box__top__left">
             ${message.user_name}
           </div>
           <div class="main__comment__box__top__right">
             ${message.created_at}
           </div>
         </div>
         <div class="main__comment__box__under">
           <p class="main__comment__box__under__comment">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="main__comment__box">
         <div class="main__comment__box__top">
           <div class="main__comment__box__top__left">
             ${message.user_name}
           </div>
           <div class="main__comment__box__top__right">
             ${message.created_at}
           </div>
         </div>
         <div class="main__comment__box__under">
           <p class="main__comment__box__under__comment">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.main__comment').append(html);
    $('.main__comment').animate({ scrollTop: $('.main__comment')[0].scrollHeight});
    $('form')[0].reset();
    $('.main__bottom__chat__send').prop('disabled',false);
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
});
})
});