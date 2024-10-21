import React from "react"
import {Link} from 'react-router-dom'
import teamPicture from '../images/team.png'
import logo from '../images/logo.png'
import attack from '../images/attack.png'
import defense from '../images/defense.png'
import chart from '../images/chart.png'
import database from '../images/database.png'
import person from '../images/person.jpg'
import ucg from '../images/UCG_logo.jpg'
import u from '../images/u_logo.png'
import cikom from '../images/cikom_logo.png'
import cortex from '../images/cortex_logo.png'



class Homepage extends React.Component{
    constructor(props){
        super(props)
    }
 
    

    render(){
        return (
            <div>
                <div id='intro'>
                    <h2>Hack Me If You Can</h2>
                    <hr/>
                    <p>Cyber Challenge Lab</p>
                </div> 

                <div className='card1'>
                    <div className="container1">
                        <div className="container12 column">
                            <h2>Mapiranje<br></br> <span className="redS"> naprednih prijetnji</span><br></br></h2>
                            <p className="txt1">
                                Naš tim je ovladao neophodnim vještinama i tehnikama u cilju mapiranja naprednih prijetnji, ranjivosti, procjeni rizika i uopštenom poboljšanju bezbjedosti u IT infrastrukturi. Neke od alata koje smo koristili su  <span className="important greenS">ATT&CK Navigator</span>, <span className=" important yellowS">DeTT&CT</span>,
                               <span className=" important blueS"> SIEM</span> and <span className=" important redS">WAZUH</span>. 
                            </p>
                        </div>
                        <div className="container13">
                            <img className="logo" src={logo}></img>
                        </div>
                        {/* komentar */}
                    </div>
                </div>

                <div className="container">
                    <div className="title">Da li želite da provjerite <b><span className="redS">ranjivosti</span></b> i <b><span className="redS">otvorenosti</span></b><br /> vašeg IT sistema</div>
                    <a href="https://apt.forenzika.me/questionary.html" className="button">Pokreni intervju</a>
                </div>



                <div className="card2">
                    <div className='card21'>
                    <div className="subCard">
                        <div className="container21 green">
                            <p>MITRE ATT&CK Navigator</p>
                            <img src={database} alt="" />
                        </div>
                        </div>

                        <div className="subCard">
                        <div className="container21 yellow">
                            <p>DeTT&CT</p>
                            <img src={defense} alt="" />
                        </div>
                        </div>

                        <div className="subCard">
                        <div className="container21 blue">
                            <p>WAZUH</p>
                            <img src={chart} alt="" />
                        </div>
                        </div>

                        <div className="subCard">
                        <div className="container21 red">
                            <p>CALDERA</p>
                            <img src={attack} alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="card22">
                        <div className='container22'>
                            <p>Ovo su samo neke od alata i tehnologija koje smo koristili za realizaciju našeg projekta</p>
                        </div>
                    </div>
                    
                </div>

                
                <div className="testimonials-section">
                    <div className="title1">Naš tim</div>
                    <div className="subtitle1">
                        Zahvaljujući našem timu, jakoj inicijativi i posvećenosti uspjeli smo da realizujemo naš projekat
                    </div>
                    <div className="testimonials">
                        <div className="testimonial-card">
                            <div className="testimonial-image" style={{ backgroundImage: 'linear-gradient(0deg,rgba(120,30,30,0.7) 0% 15% ,rgba(120,30,30,0.2),rgba(0,0,0,0) 60% 100% ),url(/ognjen.png)' }}></div>
                            
                            <div className="name">Ognjen</div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-image" style={{ backgroundImage: 'linear-gradient(0deg,rgba(120,30,30,0.7) 0% 15% ,rgba(120,30,30,0.2),rgba(0,0,0,0) 60% 100% ),url(/andjela.jpg)' }}></div>
                            
                            <div className="name">Andjela</div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-image" style={{ backgroundImage: 'linear-gradient(0deg,rgba(120,30,30,0.7) 0% 15% ,rgba(120,30,30,0.2),rgba(0,0,0,0) 60% 100% ),url(/mirka.png)' }}></div>
                            
                            <div className="name">Mirka</div>
                        </div>
                    </div>
                </div>



            </div>

            

            
        )
    }
}


export default Homepage