import axios from 'axios';



// Initialize Swiper
    var swiper = new Swiper(".home", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

const orderButton = document.querySelector(".orderButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

orderButton.addEventListener("click", ()=>{
  payment.style.display='flex'
});

close.addEventListener("click",()=>{
  payment.style.display='none'
});

// Reviews using Randomuser.me api
const randomuser = `https://randomuser.me/api/`;

function getReviews(){
  const randomuser = `https://randomuser.me/api/`;

  axios.get(randomuser)
    .then((response) => {
      console.log(response);
    })

  const holder = (
    <></>
  );
}

fetch(randomuser)
    .then(response => {
        if (!response.ok) throw new Error('API request failed');
        return response.json();
    })
    .then(data => {
        const user = data.results[0]; // Get the first user from the results
        displayData(user);
    })
    .catch(error => console.error('Problem with the fetch operation'));

function generateRandomReview() {
  const reviews = [
    "This is an amazing product!",
    "I had a great experience.",
    "Highly recommend to everyone!",
    "Will definitely buy again.",
    "Not what I expected, but still good."
  ]};
  return reviews[Math.floor(Math.random() * reviews.length)];


function displayData(user) {
  document.getElementById('imager').src = user.picture.thumbnail;
  document.getElementById('namer').textContent = '${user.name.first} ${user.name.last}';
  document.getElementById('reviewr').textContent = generateRandomReview(); // Function to generate random review
}









 
