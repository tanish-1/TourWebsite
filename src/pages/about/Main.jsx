import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./about.css";

const Main = () => {
  return (
<div>
    <div className='Container'>
          <div className="image-box-container">
              <div className="contents">
                <h1 className='heading-1'>About us</h1>
        
            </div>
          </div>

          <div className="Welcome-To-Aplha">
            <div className="img-box">
                <img src={require("../../components/asset/trainer.jpg")}alt="" srcset="" width={"634px"} />
            </div>
            <div className="contents-2">
                 <h2 className="headings-2">Welcome to Tourset</h2>
                <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat odio sunt quibusdam, quam minus hic officiis, maiores explicabo cum consequatur enim. Aliquid, quaerat ullam? Commodi ab magni soluta ipsa repudiandae, omnis exercitationem ipsum possimus magnam recusandae quasi incidunt, inventore eaque laboriosam consequatur nesciunt dolore?</strong>
                <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere similique dolores qui tempore mollitia atque quisquam quis voluptate fugit, aliquid vitae maiores est cupiditate, enim id rem dolorem! Deserunt esse odit deleniti fugiat quas natus praesentium accusantium reiciendis sequi porro facere fugit fuga corporis ipsam suscipit, eum placeat. Soluta hic expedita modi, magnam magni fugit harum! Ab et sint tempora quaerat? Esse nostrum maxime, dolores, amet ad illo dolor laboriosam blanditiis atque iusto quaerat porro et eos.
                </p>
            </div>
          </div>
          <div className="choose-section">
            <div className="choose-contents">
            <h1 className="heading-1">Why choose us</h1>
             <p className="para p-2">Our fitness experts can help you discover new training techniques</p>
             <div className="icons">
                  <div className="icon-1">
                  
                    <h3 className="heading-3">
                    How do I become an author?
                    </h3>
                    <p className="para p-2">
                    Event Calendar and Event Calendar Pro full support out of the box.
                    </p>
                  </div>
                  <div className="icon-2">
                    <h3 className="heading-3">
                    Is my license transferable?
                    </h3>
                    <p className="para p-2">
                    Event Calendar and Event Calendar Pro full support out of the box.
                    </p>
                  </div>
                  <div className="icon-3">
                    <h3 className="heading-3">
                    What do you mean by item?
                    </h3>
                    <p className="para p-2">
                    Event Calendar and Event Calendar Pro full support out of the box.
                    </p>
                  </div>
                  <div className="icon-4">
                    <h3 className="heading-3">
                    Top notch customer support
                    </h3>
                    <p className="para p-2">
                    Event Calendar and Event Calendar Pro full support out of the box.
                    </p>
                  </div>
             </div>
             </div>
          </div>



<div className="Our-Teams">
<h1 className="heading-1 he">
        Meet Our Teams
    </h1>
    <div className="Teams-container">
        <div className="Team-contents">
        <div className="team1">
            <div className="team1-img"></div>
            <div className="para-box">
            <p className="para par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aliquam natus dolorum!</p>
            </div>
        </div>
        <div className="team2">
        <div className="team2-img"></div>
        <div className="para-box">
            <p className="para par">Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Doloremque aliquam natus dolorum!</p>
            </div>
        </div>
        <div className="team3">
        <div className="team3-img"></div>
        <div className="para-box">
            <p className="para par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aliquam natus dolorum!</p>
       </div>
        </div>
        <div className="team4">
        <div className="team4-img"></div>
        <div className="para-box">
            <p className="para par">Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Doloremque aliquam natus dolorum!</p>
        </div>
        </div>
    </div>
    </div>
</div>
    </div>
    </div>
  )
}                  

export default Main
