import React from 'react'
import jawa from "../assets/jawa.jpeg"
import karthi from "../assets/karthi.jpeg"
import rohit from "../assets/rohit.jpeg"


function Teammembers() {

    const cardData = [{
        img:jawa,
        title:"JAWAHAR",
        price:"Light's Man"
    },{
        img:karthi,
        title:"KARTHICK",
        price:"Candid photographer"
    },{
        img:rohit,
        title:"ROHIT",
        price:"Actor"
    },
    {
        img:jawa,
        title:"KATHIR",
        price:100
    },{
        img:karthi,
        title:"Img1",
        price:100
    },{
        img:rohit,
        title:"Img1",
        price:100
    }]
    return (
        <div>
            <section class="text-center">
  <div >
    <h1 >About Us</h1>
    <p >
      At <span>ROGStudio</span>, we believe every moment has a story to tell. 
      With passion and creativity, we specialize in <strong>photography, videography, and editing</strong> services 
      that bring your memories to life.
    </p>
    <p >
      From intimate portraits to grand celebrations, our team captures emotions, details, 
      and experiences with a perfect blend of artistry and technology. 
      Be it weddings, events, product shoots, or creative projects, 
      we make sure every frame reflects quality and perfection.
    </p>
    <p >
      Our mission is simple: 
      <span>to turn your moments into unforgettable stories.</span>
    </p>
  </div>
</section>

        
            <div className='card_details'>
                {cardData.map((cards)=>(
                    <div className='card'>
                        <img src={cards.img} width={290} height={230} alt="" />
                        <h1>{cards.title}</h1>
                        <h3>{cards.price}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Teammembers