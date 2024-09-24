import './styles.css';

const dropButtonOne = document.getElementById("drop-button");
const dropButtonTwo = document.getElementById("drop-button-two");

dropButtonOne.addEventListener("click", () => {
   dropdownOne();
});

dropButtonTwo.addEventListener("click", () => {
   dropdownTwo();
})

function dropdownOne() {
   const optionOne = document.getElementById("optionOne");

   optionOne.classList.toggle("show");
};

function dropdownTwo() {
   const optionTwo = document.getElementById("optionTwo");

   optionTwo.classList.toggle("show");
}