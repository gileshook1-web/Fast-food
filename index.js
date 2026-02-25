const generateRandomRestaurant = () => {
  const restaurantsArray = [
    "The Crazy Madonna",
    "Russels",
    "The Florence Arms",
    "Sandwich Spot by Inoa",
    "The Queen's Hotel",
  ];
  console.log("Hello !");
  const randomRestaurantParagraph = document.getElementById(
    "randomRestaurant__text",
  );

  const randomRestaurant =
    restaurantsArray[Math.random(0, restaurantsArray.length - 1)];
  randomRestaurantParagraph.appendChild(randomRestaurant);
};

const button = document.getElementById("randomRestaurant__button");

button.addEventListener("click", generateRandomRestaurant());
