import React, { Fragment } from "react"

export const App = () =>{
  return(
    <Fragment>
    <React.Fragment>
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
</React.Fragment>
</Fragment>
  )
}
const Card=()=>{
 const name = "Dirilis Ertugrul Seasons 1"
 const sumry = "Diriliş: Ertuğrul Season 1 revolves around Ertuğrul Bey, leader of the Kayi tribe, as he battles the Crusaders, Mongols, and internal enemies. It highlights his leadership, honor, loyalty, and struggles to protect his people. Ertuğrul forms strategic alliances, confronts betrayal, and seeks justice while preparing for the rise of the Ottoman Empire."

 const by = ()=>{
  const byu = "UMER"
  return byu
 }
return(
<>
<p>{8*8-63}</p>
<h1> NAME : {name} </h1>
<p> SUMMARY :{sumry}</p>
<img height={"200px"} width={"300px"} w src="s-l1200.jpg" alt="" />
<h5>BY:{by()}</h5>
</>
  )
}