//!The used APIs!//
const CAT_API = "https://api.thecatapi.com/v1/images/search";
const DOG_API = "https://random.dog/woof.json";
//!End of The used APIs!//

//!Grabbing the divs that will render in!//
const cat_result = document.getElementById("cat_result");
const dog_result = document.getElementById("dog_result");
//!End of Grabbing the divs that will render in!//

//!Get the Cat img async function!//
const getCat = async () => {
  cat_result.innerHTML = `<img src="assests/loading.gif" style="width:124px; height:124px;"/>`;
  const res = await fetch(CAT_API);
  const data = await res.json();
  cat_result.innerHTML = `<img src=${data[0].url} loading="lazy" />`;
};
//!End of Get the Cat img async function!//

//!Get the Dog img async function!//
const getDog = async () => {
  dog_result.innerHTML = `<img src="assests/loading.gif" style="width:124px; height:124px;"/>`;
  const res = await fetch(DOG_API);
  const data = await res.json();
  dog_result.innerHTML = `<img src=${data.url} loading="lazy"  />`;
};
//!End of Get the Dog img async function!//
