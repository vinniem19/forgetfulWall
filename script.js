// I need to be able to post to a db to save different moments
// I should be able to use MySQL for this

// HTML 
//  We will be using a form
// this form will have fields for a username and a message similar to a text
//  the form will include a button marked Post

// JavaScript
// As soon as someone presses the button, their message will go directly below to an 
// area marked "posted-message"
    $(".btn-primary").on("click", function(){
        console.log("I was clicked!");
        $(".posted-messages").append(
            $("#email-address").val().trim() + "<br/>" +
            $("#postText").val().trim() + "<br/>");
            $("#email-address").val("");
            $("#postText").val("");
            
    });

// This will be a post method to the db to create messages that are saved.
// It will also be a get method from the db to the client ("posted-message")


// This is my example:  I walked into my room to get my glasses so I could read the heating
// directions for dinner.  When I got in the room, I forgot what I went in there to get.  I
// had to go back to the kitchen to see what I needed.  When I saw the dinner package, i
// immediately remembered and went back to my room and picked out my reading glasses.