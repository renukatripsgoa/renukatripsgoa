import * as React from "react";

const HotelName = ({ hotel_Name, onHotelName, hotel_ID }) => {
  var h_name = "";

  h_name = capitalize_each_word(hotel_Name);
  function capitalize_each_word(val) {
    if (val === undefined || val === null) {
      return "";
    }

    const words = val.toString().split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    var str = words.join("");
    var replacedStr = "";

    for (var i = 0; i < str.length; i++) {
      if (str[i] === ",") {
        replacedStr += "";
      } else {
        replacedStr += str[i];
      }
    }

    return replacedStr;
  }

  var Imgs = {
    [h_name + "1"]:
      "/img/" + h_name + "-" + hotel_ID + "/Property Main-PM00001/1.jpg",
    [h_name + "2"]:
      "/img/" + h_name + "-" + hotel_ID + "/Property Main-PM00001/2.jpeg",
    [h_name + "3"]:
      "/img/" + h_name + "-" + hotel_ID + "/Property Main-PM00001/3.jpg",
    [h_name + "4"]:
      "/img/" + h_name + "-" + hotel_ID + "/Property Main-PM00001/4.jpeg",
    [h_name + "5"]:
      "/img/" + h_name + "-" + hotel_ID + "/Property Main-PM00001/5.jpg",
  };

  React.useEffect(() => {
    onHotelName(Imgs);
  }, [h_name]);

  return <></>;
};

const IMAGES = {
  "Scuba Combo": "/img/tour/scuba-combo/scuba-combo-home-imp.webp",
  "Couple Scuba Water Sports": "/img/tour/couple-scuba-watersports/couple-scuba-watersport.jpg",
  "Scuba Combo Paradise Island": "/img/tour/scuba-combo/scuba-combo-home-imp.webp",
  "Scuba Combo Malwan": "/img/tour/scuba-combo-malwan/scuba-combo-malwan.jpg",
  "Water Sports Combo": "/img/tour/water-sports-combo/water-sports.jpg",
  "Couple Package - 1": "/img/couple-packages-goa/couple-package-one/couple-package-one.png",
  "Couple Package - 2": "/img/couple-packages-goa/couple-package-two/couple-package-two.jpg",
  "Couple Package - 3": "/img/couple-packages-goa/couple-package-three/couple-package-three.jpg",
  "Group Package - 1": "/img/group-packages-goa/group-package-one/group-package-one.jpg",
  "Group Package - 2": "/img/group-packages-goa/group-package-two/group-package-two.png",
  "Group Package - 3": "/img/group-packages-goa/group-package-three/group-package-three.jpg",
  "Scuba Diving Package - 1": "/img/scubadiving-packages-goa/scubadiving-package-1/Oceanographer.jpeg",
  "Adventure Party Boat": "/img/boatparty2.jpeg",
  "Dinner Cruise": "/img/tour/dinner-cruise/hq720.jpg",
  "Bungee Jump": "/img/tour/bunjee-jump/bunjee-jump.webp",
  "North Goa Tour": "/img/tour/north-goa-tour/northgoa.jpg",
  "South Goa Tour": "/img/tour/south-goa-tour/southgoa.webp",
  "Flyboarding": "/img/tour/flyboarding/flyboardingg.jpeg",
  "Dudhsagar Waterfalls": "/img/tour/dudhsagar-waterfall-trip/dudhsagar-waterfalls-trekking.jpg",
  "Island Trip Goa": "/img/tour/island-trip/grand-island.jpg",
  "Whatsappwal": "/img/whatsappwal.jpg",
  "adventure": "/img/adventure.jpg",
  "scubahome": "/img/scubahome.jpg",
  "jetski": "/img/jetski.jpg",
  "test1": "/img/test1.jpg",
  "test2": "/img/test2.jpg",
  "test3": "/img/test3.jpg",
  "contact": "/img/contact.jpg",
  "Adminloginbg": "/img/adminloginbg.jpg"
};
export { IMAGES };

export default HotelName;
