 
 
 function removeRes(resData){
      if (confirm('Confirm Remove this Restaurant!!!')) {
        var removeRestaurant = new Firebase("https://aware-we-go-1473782559511.firebaseio.com/restaurant");
        var removeData = removeRestaurant.child(resData);
        var re = removeData.remove();
      }
    }

	function saveRes(resData,nameE,longitudeE,latitudeE){
     
        var updatRestaurant = new Firebase("https://aware-we-go-1473782559511.firebaseio.com/restaurant");
        var updateData = updatRestaurant.child(resData);
	
          updateData.update({
             name: nameE,
             latitude: longitudeE,
             longitude: latitudeE
          })
		  
		  
    }



    var myFirebaseRef = new Firebase("https://aware-we-go-1473782559511.firebaseio.com");
    var resRef = myFirebaseRef.child("restaurant");



    $('#btn-res').click(function(){
       if ($('#name').val() == ""){
            alert('Please Enter restaurant name');
        }else if ($('#latitude').val() == "" || $('#longitude').val() == "") {
              alert('Please Enter latitude and longitude');
        }else {

            resRef.push({
               name: $("#name").val(),
               latitude: $("#latitude").val(),
               longitude: $("#longitude").val()
    });

     $("#name").val("");
     $("#latitude").val("");
     $("#longitude").val("");
  }
});


   resRef.on("child_added", function(data){
   
   
           key  = data.U.path.n[1];
           resData = data.val();
		   
              $("#listBody").prepend( "<tr class='info'>"+
                  "<td>"+
                  "<label class='text-name' >" + resData.name + "</label>"+
                  "<input type='text' id='edit-name' class='edit-input' value='"+ resData.name + "' />"+
                  "</td>"+
                  "<td>"+
                  "<label  class='text-latitude'>" + resData.latitude + "</label>"+
                  "<input type='text' id='edit-latitude' class='edit-input' value='"+ resData.latitude + "' />"+
                       "</td>"+
                  "<td>"+
                  "<label  class='text-longitude'>" + resData.longitude + "</label>"+
                  "<input type='text' id='edit-longitude' class='edit-input' value='"+ resData.longitude + "' />"+
                  "</td>"+
                  "<td>"+
				  "<input type='hidden' class='hidden-key'  value='"+ key + "' />"+
                  "<button class='edit'>Edit</button>"+
                  "<button  class='save'>Save</button>"+
                  "<button class='cancel'>Cancel</button>"+
                  "<button class='remove'>Remove</button>"+
                  "</td>"+
                  "</tr>");
          });
		
		
		 $(document).on(
            'click', '.remove', function(e) {
				
            var dad = $(this).parent().parent();
			removeRes(dad.find('.hidden-key').val());
            dad.remove();
          })
		  

          $(document).on(
            'click', '.edit', function(e) {
            var dad = $(this).parent().parent();
            dad.find('label').hide();
            dad.find('.edit-input').show();
            dad.find('.edit').hide();
            dad.find('.save').show();
            dad.find('.cancel').show();
          })

          $(document).on(
          'click', '.cancel', function(e) {
          var dad = $(this).parent().parent();
          dad.find('label').show();
          dad.find('.edit-input').hide();
          dad.find('.edit').show();
          dad.find('.save').hide();
            dad.find('.cancel').hide();
        })

        $(document).on(
        'click', '.save', function(e) {
        var dad = $(this).parent().parent();
		saveRes(dad.find('.hidden-key').val() ,dad.find("#edit-name").val() ,dad.find("#edit-latitude").val() ,dad.find("#edit-longitude").val());

		dad.find('label.text-name').empty();
		dad.find('label.text-name').append(dad.find("#edit-name").val());
		dad.find('label.text-latitude').empty();
		dad.find('label.text-latitude').append(dad.find("#edit-latitude").val());
		dad.find('label.text-longitude').empty();
		dad.find('label.text-longitude').append(dad.find("#edit-longitude").val());
        dad.find('label').show();
        dad.find('.edit-input').hide();
        dad.find('.edit').show();
        dad.find('.save').hide();
        dad.find('.cancel').hide();
      })
