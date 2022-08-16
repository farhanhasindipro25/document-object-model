// Step 1: Add event listener to the button

document.getElementById('btn-post').addEventListener('click',function(){
    // Step 2: Get the comment inside the text area
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;
    console.log(newComment);

    // Step 3: Set the comment inside the comment container

    // Get the comment container
    const commentContainer = document.getElementById('comment-container');
    // Create a new element (paragraph tag)
    const p = document.createElement('p');
    // Set the text of the comment ad innerText of the paragraph tag
    p.innerText = newComment;
    // Add the paragraph tag using appendChild
    commentContainer.appendChild(p);

    // Step 4: Clear the textarea
    commentBox.value = '';

});





