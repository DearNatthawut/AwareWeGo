  var myFirebaseRef = new Firebase("https://aware-we-go-1473782559511.firebaseio.com");
    var chatRef = myFirebaseRef.child("chatroom");

     $('#myDropdown').on({
            "shown.bs.dropdown": function() { this.closable = true; },
            "click":             function() { this.closable = true; },
            "hide.bs.dropdown":  function() { return this.closable; }
            });


    $('#btn-chat').click(function(){
        if ($('#message').val() == ""){
            alert('Please Enter your message');
        }else if ($('#name').val() == ""){
            alert('Please Enter your name');
        }else{

            chatRef.push({
               name: $("#name").val(),
                message: $("#message").val()
                 });
                   $("#message").val("")
        }

    });

   chatRef.on("child_added", function(data){
           msgData = data.val();
              $(".chat").prepend( "<li>"+
               "<div class='chat-body clearfix'>"+
               "<div class='header-cart'>"+
               "<strong class='primary-font'>"+msgData.name+"</strong>"+
               "<small class='pull-right text-muted'>"+
               "</div>"+
               "<p>"+
                 msgData.message+
              "</p>"+
              "</div>"+
              "</li>");
          });
