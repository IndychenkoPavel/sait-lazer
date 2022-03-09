$( function() {
    $( ".aaa" ).tooltip({
      
      position: {
        my: "right right", 
        at: "right right",   
        using: function( position) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      },
      track: true,
    });
  });


