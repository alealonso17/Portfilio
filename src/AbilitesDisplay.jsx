import  '/src/TecDisplay.jsx'
import { ProjectInfo } from './ProjectsInfo'

export function AbilitesDisplay({selected}) {
    
    if(selected == "Languages"){
        return(
            <div>
                <section className='Languages'>
                    <h2 className="titleLa">Languages</h2>

                    <p>Throughout my studies, I have worked with different programming languages such<br/> as Python, C#, JavaScript, etc.</p>
                    <ul>
                        
                        <li><strong>JavaScript:</strong> Web development and the p5.js library.</li> 
                        <li><strong>C#: </strong>Object-oriented programming.</li> 
                        <li><strong>Python:</strong> Coding apps, data processing, and machine learning.<br/> I’ve used libraries like scikit-learn and pandas for data normalization.</li> 
                    </ul>
                    <div className='imagesLanguages'>
                        <img className="imagenNoticiaRelevante" src="/python.png"/>
                        <img className="imagenNoticiaRelevante" src="/js.png"/>
                        <img className="imagenNoticiaRelevante" src="/c.png"/>
                    </div>
                    <h2 className="titlePro">Projects</h2>
                    <ProjectInfo
                        img = "/python.png"
                        title="Wild Buddy - HackazonRGU 2024: "
                        text={
                            <>
                            An Android app designed <br/>to bring us closer <br/>
                            to animals. It was <br/>fed with a table <br/>containing thousands of animals<br/>
                             and their information. The<br/> app featured a menu<br/>
                              where you could filter<br/> and search for specific<br/>
                               animals, add new ones,<br/> and take photos using <br/>
                               the camera to display <br/>data about the animal <br/>
                               and whether it is dangerous <br/>(using a trained AI model). <br/>
                               The final option predicted <br/>with 86% accuracy whether<br/>
                                an animal was endangered <br/>based on its height,<br/>weight, and whether it<br/>
                                 was alone or accompanied <br/>when you saw it. <br/>This was achieved <br/>
                                 by cleaning the animal <br/>data table and training <br/>
                                 it with the Random <br/>Forest algorithm, reaching <br/>
                                 the desired accuracy.
                            </>
                        }
                        img2="/trofeo.jpg"
                    /> 
                        <ProjectInfo
                        img = "/python.png"
                        title="Bakio Surf Cleaner App"
                        text={
                            <>
                            A desktop app built<br/> with Python. My surf<br/>
                             coach often records clips,<br/> but sometimes the shots<br/>
                              go wrong, and the<br/> recording stops. Usually,<br/>
                               there are many bad<br/> shots and few good<br/>
                                ones, but the good <br/>ones are longer, while
                                 the bad ones<br/> are typically under 10 seconds.<br/>
                                  In this app, you open the <br/>folder with
                                   a user-friendly<br/> interface, set the<br/> minimum duration,
                                    and it<br/> instantly removes 
                                    all videos<br/> shorter than that.
                            </>
                        }
                        img2="/trofeo.jpg"
                    /> 
                                            <ProjectInfo
                        img = "/c.png"
                        title="Terminal Decision-Making Game"
                        text={
                            <>
                                 A game where players<br/>
                                  make decisions, and based<br/> on those choices, they <br/>
                                  encounter monsters with item <br/>drop rates. The game<br/>
                                   includes a personal inventory<br/> system with armor, potions,<br/>
                                    and weapons that can<br/> be equipped. Combat mechanics <br/>
                                    are also part of <br/>the game. Additionally, players<br/>
                                     can register and save<br/> their progress at the<br/>
                                      end of each chapter.<br/> This allows players to <br/>
                                      continue from where they<br/> left off with the <br/>
                                      same inventory and stats<br/> the next time they <br/>
                                      play. This is achieved<br/> through a MySQL server<br/>
                                       that stores player data.
                            </>
                        }
                        img2="/trofeo.jpg"
                    /> 
                        
                </section>
            </div>
        )
    }else if(selected=="Web Development"){
        return(
            <div>
                <h1>Web Development</h1>
            </div>
        )
    }else if(selected=="Frameworks"){
        return(
            <div>
                <h1>Frameworks</h1>
            </div>
        )
    }else if(selected=="Database"){
        return(
            <div>
                <h1>Database</h1>
            </div>
        )
    }else if(selected=="Tools"){
        return(
            <div>
                <h1>Tools</h1>
            </div>
        )
    }else{
        return (
            <div>
            <h1>Select an option</h1>
        </div>
        )
    }
    

}
