'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
  $("#submitBtn").click(updateProject);
})

function updateProject(e) {
   console.log('hi');
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });
   console.log('hi again');
   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
    $("#testjs").text("Please wait...");
    $(".jumbotron p").toggleClass("active");
  });
    $("a.thumbnail").click(projectClick);
	}

  function projectClick(e) {
    //prevent the page from reloading
    e.preventDefault();

    // In an event handler, $(this) refers to 
    // the object that triggered the event
  
    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
      containingProject.append("<div class='project-description'><p>Description of the project.</p></div>"); 
      $(".project-description").show();
    } else { 
       $(".project-description").hide();
       
    }
  }
