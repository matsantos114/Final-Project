$('#but').on('click', function () {

  let displayName = $("#dN").val()
  let comment = $("#com").val()

  $('#popUp').append(`
  <div id="textContainer2">
    <div id="displayName2">${displayName}</div>
    <div id="comment2">${comment}</div>
    

    <div class="newComment newComment2" >
      <input type="text" id="editComment" placeholder="Edit Comment">
      <input id="submit2" type="submit" value="Submit">
    </div> 

  <div id=otherSide>
    <div id="button2">
      <button id="edit">Edit</button>
    </div>
    <div id="button3">
      <button id="delete">Delete</button>
    </div>
             
  </div>
             
             
      `

  );



});


$("#popUp").on('click', "#delete", function () {
  //console.log("delete")
  let deletePost1 = $(this).parents()[2];
  
  

 deletePost2 = deletePost1.remove()

  
  console.log(deletePost1)

}

);

$('#popUp').on('click', "#edit", function () {

  //console.log("edit")

  let editPostpt1 = $(this).parents()[2];
  let editPostpt2 = $(editPostpt1).children()[2];

  let editPostpt3 = $(editPostpt2).toggleClass("newComment2");
  //console.log(editPostpt2)

}
);

$("#popUp").on('click', "#submit2", function () {
  
  
  let editComment = $(this).prev().val();
  let editSubmit = $(this).parent()[0];
  let editSubmit2 = $(editSubmit).parent()[0];
  let editSubmit3 = $(editSubmit2).children()[1];
  let editSubmit4 = $(editSubmit3).text(editComment);

  //console.log(editComment)

  
}
);