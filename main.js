// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal =  document.getElementById('modal');
const modalMessage = document.getElementById('modal-message')
const hiddenClass = 'hidden'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll('.like-glyph')

hearts.forEach(span => span.addEventListener('click', handleHeartsClick))

function handleHeartsClick(e){
  console.log(e.target);

  mimicServerCall() 
    .then(() => handleSuccess(e.target))
    .catch(handleError)
}



function handleSuccess(heartSpan) { 
  if(heartSpan.textContent === EMPTY_HEART) {
    heartSpan.textContent = FULL_HEART;
    heartSpan.classList.add('activated-heart')
  } else { 
      heartSpan.textContent = EMPTY_HEART;
      heartSpan.classList.remove('activated-heart')
  }
};

function handleError(message) { 
  console.log('Thats an error')
  
  modal.classList.remove('hiddenClass')
  setTimeout(() => modal.classList.add(hiddenClass), 3000)
  modalMessage.textContent = message;
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
