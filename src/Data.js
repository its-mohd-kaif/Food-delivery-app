import img1 from "./Images/dosa.jpeg";
import img2 from "./Images/pooriImg.jpeg";
import img3 from "./Images/masaladosa.jpeg";
import img4 from "./Images/baji.jpeg";
import img5 from "./Images/mixveg.jpeg";
import img6 from "./Images/nonveg.jpeg";
import img7 from "./Images/egg.jpeg";
import veg from "./Images/veg.png";
import nonveg from "./Images/nonveg.png";

export const products = [
  {
    id: 101,
    name: "Plain Dosa",
    type: "veg",
    typeImg: veg,
    price: 20,
    image: img1,
  },
  {
    id: 102,
    name: "Poori",
    type: "veg",
    typeImg: veg,
    price: 30,
    image: img2,
  },
  {
    id: 103,
    name: "Masala Dosa",
    type: "veg",
    typeImg: veg,
    price: 30,
    image: img3,
  },
  {
    id: 104,
    name: "Baji",
    type: "veg",
    typeImg: veg,
    price: 25,
    image: img4,
  },
  {
    id: 105,
    name: "Veg Meal",
    type: "veg",
    typeImg: veg,
    price: 35,
    image: img5,
  },
  {
    id: 106,
    name: "Non Veg Meal",
    type: "Non veg",
    typeImg: nonveg,
    price: 40,
    image: img6,
  },
  {
    id: 107,
    name: "Egg Meal",
    type: "Non veg",
    typeImg: nonveg,
    price: 20,
    image: img7,
  },
];
