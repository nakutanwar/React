import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent", key:"parent" }, [
//   React.createElement("div", { id: "child1", key:'sub-parent' }, [
//     React.createElement("h1", {key:"h1"}, "Namste React"),
//     React.createElement("h2", {key:"h2"}, "I am H2 Tag"),
//   ]),
//   React.createElement("div", { id: "child2", key:"ch1" }, [
//     React.createElement("h1", {key:'ch2'}, "I am H1 Tag"),
//     React.createElement("h2", {key:'ch3'}, [
//       "I am H2 Tag",
//       React.createElement(
//         "p",
//         {
//           id: "title",
//           key:'p'
//         },
//         "I am a Paragraph",
//       ),
//     ]),
//   ]),
// ]);

// // JSX

// const heading = React.createElement(
//   "h1",
//   { className: "heading", id: "h1",key:'h1' },
//   "Hello World From React",
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render([parent,heading]); // replace everthing from DOM not appended

// Old Way Not A Good Way

// const heading = React.createElement(
//   "h1",
//   { id: "heading", key: "h1" },
//   "Hello React 🚀",
// );

// JSX - Not HTML in Javascript
// JSX =  is HTML/XML Like Syntax

// console.log(heading);
// JSX (transpilled before it reaches the JS - PARCEL - babel)

// JSX => Babel transpiles it to  React.createElement => ReactElement-JS Object => HTMLElement(render)


// console.log(jsxheading);

// React Component
// 1 class based Conponent - OLD Way  Outdated
// 2 Functional Component - NEW Way

// React Functional Component  is Just a js Function which is return a react element

// a function which is return  a jsx is a functional component

// const fn = () => true;

// const fn2 = () => {
//   true;
// };

// React Component
// const HeadingComponent = () => {
//   return(
//     <div id="container">
//     <h1>Namste React Componet 🚀 Element</h1>
//   </div>
//   )}

// const TitleComponent = () => {
//   return(
//     <div id="container">
//     <h1>Namste React Componet 🚀 Title Element</h1>
//   </div>
//   )}
// React Component
// const number = 100000;
// This is Component Composition
// const HeadingComponent1 = () => (
//     <div id="container">
//       <h2>{number}</h2>
//       <h3>{100 + 300 }</h3>
//       {heading}
//       {console.log("I am From JSX 🤣")
//       }
//       {/* These 3 are the same things */}
//       <TitleComponent />
//       <TitleComponent></TitleComponent>
//       {TitleComponent()}
//       <h1 className="heading">Namste React Functional Component 🚀🚀</h1>
//     </div>
// )
// React Element


// const title = (
//   <span>React Span Element</span>
// )


// const heading = (
//   <div id="container">
//     <h1 className="h1" tabIndex={1} key={'hello'}>
//       Namste React Using JSX 🚀
//     </h1>
//     {/* Element Composition */}
//     {title}
//     {/* {HeadingComponent1()} */}
//     {/* <HeadingComponent1 /> */}
//   </div>
// );




// App Planing is First Thing

/*
*
*
1 Header
==============
1.1 Logo
1.2 Nav Links
1.3 Cart
===============
2 Body
2.1 Search and Search Button
2.2 Card Container
2.2.1 Cards
2.2.2.1 card img, card name, titles, action buttons
3 Footer
3.1 CopyRight
3.2 Footer Links
3.3 Addresses
3.4 Contact 
*
*/



// Food App Code Start Here

//Container App Component Top Level Component
const Header = ()=>{
  return(
    <div className="header">
      <div className="logo">
        <img src="https://png.pngtree.com/png-vector/20220701/ourmid/pngtree-fast-food-logo-png-image_5573657.png"  className="logo-img" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Home
          </li>
          <li>
            About Us
          </li>
          <li>
            Contact us
          </li>
          <li>
            Cart
          </li>
        </ul>
      </div>
    </div>
  )
}

const CardStyle = {
  backgroundColor : '#e1e1e1',
  // padding: '10px'
}

const resList = [
  {
    "id": "489921",
    "name": "Mishtanam By Aggarwal Sweets",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/16/3aa7c16a-1553-462d-b87f-fdeb5804b217_489921.jpg",
    "locality": "Tilak Nagar",
    "areaName": "Tilak Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": ["Sweets", "Snacks"],
    "avgRating": 4.6,
    "totalRatingsString": "6.6K+",
    "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 3.8,
      "slaString": "25-30 mins"
    },
    "isOpen": true
  },
  {
    "id": "55211",
    "name": "Kali Ghata",
    "cloudinaryImageId": "0e03c4884435b61d0f14e789ca01eee4",
    "locality": "Arya Samaj road",
    "areaName": "Uttam Nagar",
    "costForTwo": "₹300 for two",
    "cuisines": ["North Indian", "Chinese", "Sweets"],
    "avgRating": 4.3,
    "totalRatingsString": "9.3K+",
    "sla": {
      "deliveryTime": 31,
      "lastMileTravel": 2.4,
      "slaString": "30-35 mins"
    },
    "isOpen": true
  },
  {
    "id": "20799",
    "name": "Rama Chole Bhature",
    "cloudinaryImageId": "tamyeyeu0qrdseaeyd7u",
    "locality": "Jail Road",
    "areaName": "Jail Road",
    "costForTwo": "₹150 for two",
    "cuisines": ["Street Food"],
    "avgRating": 4.3,
    "totalRatingsString": "47K+",
    "sla": {
      "deliveryTime": 26,
      "lastMileTravel": 3,
      "slaString": "25-30 mins"
    },
    "isOpen": true
  },
  {
    "id": "380681",
    "name": "Nandakishor Di Hatti",
    "cloudinaryImageId": "ojgcooqqdvljoc1en9tl",
    "locality": "Tihar",
    "areaName": "Jail Road",
    "costForTwo": "₹200 for two",
    "cuisines": ["North Indian"],
    "avgRating": 4.6,
    "totalRatingsString": "1.2K+",
    "sla": {
      "deliveryTime": 33,
      "lastMileTravel": 3,
      "slaString": "30-35 mins"
    },
    "isOpen": true
  },
  {
    "id": "695612",
    "name": "Om Corner Karol Bagh Wale",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/4/249ca834-9367-4e26-9457-dda6b47dc41d_695612.jpg",
    "locality": "Nangli sakrawati",
    "areaName": "Janakpuri",
    "costForTwo": "₹225 for two",
    "cuisines": ["North Indian"],
    "avgRating": 4.2,
    "totalRatingsString": "1.3K+",
    "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 1.9,
      "slaString": "15-20 mins"
    },
    "isOpen": true
  },
  {
    "id": "4682",
    "name": "Amritsari Kulccha Corner (Vikaspuri)",
    "cloudinaryImageId": "ca8q6vqngcvpmsdhpz5g",
    "locality": "Vikaspuri",
    "areaName": "Vikaspuri",
    "costForTwo": "₹280 for two",
    "cuisines": ["North Indian", "Street Food", "Chinese"],
    "avgRating": 4.5,
    "totalRatingsString": "18K+",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 2.8,
      "slaString": "20-25 mins"
    },
    "isOpen": true
  },
  {
    "id": "20539",
    "name": "Singla's Sweets, Bakery & Restaurant",
    "cloudinaryImageId": "2ba0ecc76a854c73dfd67be6b86ed0aa",
    "locality": "Tilak Nagar",
    "areaName": "Tilak Nagar",
    "costForTwo": "₹250 for two",
    "cuisines": ["Sweets", "Chinese", "South Indian", "Italian", "Bakery"],
    "avgRating": 4.4,
    "totalRatingsString": "76K+",
    "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 3,
      "slaString": "30-35 mins"
    },
    "isOpen": true
  },
  {
    "id": "219496",
    "name": "Bikanervala",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/9a19793b-7df3-48cb-ab8e-31572e61455b_219496.jpg",
    "locality": "C 2 Block",
    "areaName": "Janakpuri",
    "costForTwo": "₹300 for two",
    "cuisines": ["Chinese", "North Indian", "South Indian", "Desserts", "Snacks"],
    "avgRating": 4.3,
    "totalRatingsString": "13K+",
    "sla": {
      "deliveryTime": 20,
      "lastMileTravel": 0.9,
      "slaString": "20-25 mins"
    },
    "isOpen": true
  },
  {
    "id": "797656",
    "name": "Samosa Party",
    "cloudinaryImageId": "6ac42f648c42a80a3c392dc12cae1989",
    "locality": "Ashok Nagar",
    "areaName": "Janakpuri",
    "costForTwo": "₹150 for two",
    "cuisines": ["Fast Food", "Snacks", "Beverages", "Chaat", "North Indian", "Street Food", "Sweets", "Desserts", "Punjabi", "Bakery"],
    "avgRating": 4.4,
    "totalRatingsString": "1.6K+",
    "sla": {
      "deliveryTime": 20,
      "lastMileTravel": 0.5,
      "slaString": "15-20 mins"
    },
    "isOpen": true
  },
  {
    "id": "5252",
    "name": "Om Sweets & Snacks",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/18/55b62821-a6f1-4fd5-8db3-30c317c732a6_5252.jpg",
    "locality": "Jail Road",
    "areaName": "Jail Road",
    "costForTwo": "₹500 for two",
    "cuisines": ["Sweets", "South Indian", "Chinese", "Snacks", "Desserts"],
    "avgRating": 4.6,
    "totalRatingsString": "96K+",
    "sla": {
      "deliveryTime": 34,
      "lastMileTravel": 3,
      "slaString": "30-35 mins"
    },
    "isOpen": true
  }
]





// Via Destructuring and this called Destructuring on fly
// const RestaurentCard = ({resName,cuisine})=>{
const RestaurentCard = (props)=>{
  const {resData} = props;
  const {name,cuisines,locality,costForTwo,avgRating,slaString,cloudinaryImageId} = resData;
  console.log(props);
  return(
    <div className="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="card image " style={CardStyle} />
      
      
      {/* <img src={resData.cloudinaryImageId} /> */}
      {/* Via Destructuring
      //<h2 className="heding">{resName}</h2>
      //<h4>{cuisine}</h4> */}
      <h2 className="heding">{name}</h2>
      <h4>{cuisines}</h4>
      <h4>{locality} <span>{costForTwo}</span></h4>
      <h6>{avgRating} 
        <span>{slaString}</span>
      </h6>
    </div>
  )
}


// not using key as id (not acceptable) is less than <<<<<<<< INDEX AS Key <<<< Unique Identifier (best practice)


const Body = ()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="card-container">
        {/* Restaurent Card */}
        {/* <RestaurentCard resData={reslist[0]}  /> */}
        <div className="card-container">
        {resList.map((restaurant) => (
          <RestaurentCard
            key={restaurant.id}
            resData={restaurant}
          />
        ))}
      </div>
        
      </div>
    </div>
  )
}


const AppLayout = () =>{
  return (
    <div className="Container">
      {/* //Header
      //Body
      //Footer */}
      <Header />
      <Body />
    </div>
  )
}












const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
root.render([<AppLayout key={1} />])