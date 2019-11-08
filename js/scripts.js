// assign variables
let musicDivs = document.querySelectorAll('.musicPlayer');
let albumCover = document.querySelectorAll('.albumCover');

// function to hide all divs
function hideAll() {
  musicDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

// run that function right away
hideAll();

// when any album is clicked, make the suitable div appear
albumCover.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    let players = document.querySelectorAll('audio');
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });


    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'blueLines':
        document.querySelector('#album1')
        	.style.display = 'block';
        break;
      case 'mezzanine':
        document.querySelector('#album2')
        	.style.display = 'block';
        break;
      case 'splittingAtom':
        document.querySelector('#album3')
        .style.display = 'block';
        break;
      case 'heligoland':
        document.querySelector('#album4')
        .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()
