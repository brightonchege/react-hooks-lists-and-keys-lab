import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const listlinks = links.map(item =><a key={item} href={`#${item}`}>{item}</a>)
 /*function listt(links){
  for(var i = 0; i < links.length ;i ++){
    return <a href={`#${links[i]}`}>{links[i]}</a> 
  }
 }
 */
  return <nav>{listlinks}</nav>;
    /* display an <a> tag for each link here */
}

export default NavBar;


