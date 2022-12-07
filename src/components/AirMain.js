import React from "react";
import MyImage2 from './photo-grid.png'
import MyImage3 from './image 12.png'
import MyImage4 from './Star 1.png'
import MyImage5 from './wedding-photography 1.png'
import MyImage6 from './mountain-bike 1.png'

export default function AirMain(){
    return (
        <main class="AirMain">
            
            <img src={MyImage2} alt='' id='MyImage2'/>

            <p id="topic-container">Online Experiences</p>

            <div class='wordcontent'>
                <p id="wordcontainer">Join unique interactive activities led by one-of-a-kind hosts all without leaving home.</p>
            </div>
            <section>
      
                <div class='picturecontent'>
                    <img src={MyImage3} alt='' class="image3"/>
                    <div class='starcontent'>
                        <img src={MyImage4} alt="" class='imageStar'/>
                        <p class='starcontainer'>5.0</p>
                        <p class='wordsomething'>
                            (6)
                        </p>
                        <p class='wordsomething' id="dotcontainer">
                            .
                        </p>
                        <p class='wordsomething'>
                            USA
                        </p>

                    </div>
                    <div class='somecontainer'>
                            <p class='sentenceContainer'>Life lessons with Kafie Zaferes</p>
                    </div>
                    <div class='lastContent'>
                <p class='lastContainer'>From $360/</p>
                <p class='personContainer'>person</p>
                </div>
                </div>
                
                <div class='picturecontent'>
                    <img src={MyImage5} alt='' class="image3"/>
                    <div class='starcontent'>
                        <img src={MyImage4} alt="" class='imageStar'/>
                        <p class='starcontainer'>5.0</p>
                        <p class='wordsomething'>
                            (30)
                        </p>
                        <p class='wordsomething' id="dotcontainer">
                            .
                        </p>
                        <p class='wordsomething'>
                            USA
                        </p>
                    </div>
                    <div class='somecontainer'>
                            <p class='sentenceContainer'>Learn wedding photography</p>
                    </div>
                    <div class='lastContent'>
                    <p class='lastContainer'>From $125/</p>
                    <p class='personContainer'>person</p>
                    </div>
                </div>
                <div class='picturecontent'>
                    <img src={MyImage6} alt='' class="image3"/>
                    <div class='starcontent'>
                        <img src={MyImage4} alt="" class='imageStar'/>
                        <p class='starcontainer'>4.8</p>
                        <p class='wordsomething'>
                            (2)
                        </p>
                        <p class='wordsomething' id="dotcontainer">
                            .
                        </p>
                        <p class='wordsomething'>
                            USA
                        </p>
                    </div>
                    <div class='somecontainer'>
                            <p class='sentenceContainer'>Ground Mountain Bikini</p>
                    </div>
                    <div class='lastContent'>
                    <p class='lastContainer'>From $50/</p>
                    <p class='personContainer'>person</p>
                    </div>
                </div>
            </section>
        </main>
    )
}