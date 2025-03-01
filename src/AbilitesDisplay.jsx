import  '/src/TecDisplay.jsx'
import { ProjectInfo } from './ProjectsInfo'

export function AbilitesDisplay({selected}) {
    
    if(selected == "Languages"){
        return(
            <div>
                <section className='Languages'>
                    <h2 className="titleLa">LANGUAGES</h2>

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
                    <h2 className="titlePro">PROJECTS</h2>
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
                <section className='Languages'>
                    <h2 className="titleLa">WEB DEVELOPEMENT</h2>

                    <p>I have worked with different web developing tools such as CSS, JSx and HTML.</p>
                    <ul>
                        
                        <li><strong>JavaScriptXML</strong></li> 
                        <li><strong>CSS</strong></li> 
                        <li><strong>HTML</strong></li> 
                    </ul>
                    <div className='imagesLanguages'>
                        <img className="imagenNoticiaRelevante" src="/html.webp"/>
                        <img className="imagenNoticiaRelevante" src="/jsx.png"/>
                        <img className="imagenNoticiaRelevante" src="/css.svg"/>
                    </div>
                    <h2 className="titlePro">PROJECTS</h2>
                    <ProjectInfo
                        img = "/jsx.png"
                        title="Portfolio Website"
                        text={
                            <>
                                 This website was entirely <br/>created by me using <br/>HTML, CSS, and JSX(react).<br/>
                                  With only three days<br/> of intensive study in <br/>these technologies, I embarked<br/>
                                   on the development of<br/> my portfolio. I am<br/>
                                    truly passionate about this<br/> field, and if I was<br/>
                                     able to achieve this<br/> in just three days, I <br/>
                                     can only imagine what<br/> I will be capable<br/>
                                      of as I continue learning.<br/> Knowledge is a powerful tool, <br/>
                                      and with dedication and <br/>curiosity, the possibilities are<br/>
                                       endless.
                            </>
                        }
                        img2="/trofeo.jpg"
                    /> 

                        
                </section>
            </div>
        )
    }else if(selected=="Frameworks"){
        return(
            <div>
                <section className='Languages'>
                    <h2 className="titleLa">FRAMEWORKS</h2>

                    <p>During my studies, we have used .NET 9.0 and 8.0 with C#. On the other hand, React<br/> is something I have learned through self-study.</p>
                    <ul>
                        
                        <li><strong>.NET</strong></li> 
                        <li><strong>React</strong></li> 
                        
                    </ul>
                    <div className='imagesLanguages'>
                        <img className="imagenNoticiaRelevante" src="/dotnet.png"/>
                        <img className="imagenNoticiaRelevante" src="/react.png"/>
                        
                    </div>
                    <h2 className="titlePro">PROJECTS</h2>
                    <ProjectInfo
                        img = "/react.png"
                        title="Portfolio Website"
                        text={
                            <>
                                 This website was entirely <br/>created by me using <br/>HTML, CSS, and JSX(react).<br/>
                                  With only three days<br/> of intensive study in <br/>these technologies, I embarked<br/>
                                   on the development of<br/> my portfolio. I am<br/>
                                    truly passionate about this<br/> field, and if I was<br/>
                                     able to achieve this<br/> in just three days, I <br/>
                                     can only imagine what<br/> I will be capable<br/>
                                      of as I continue learning.<br/> Knowledge is a powerful tool, <br/>
                                      and with dedication and <br/>curiosity, the possibilities are<br/>
                                       endless.
                            </>
                        }
                        img2="/trofeo.jpg"
                    /> 

                        
                </section>
            </div>
        )
    }else if(selected=="Database"){
        return(
            <div>
                <section className='Languages'>
                    <h2 className="titleLa">DATABASE</h2>

                    <p>During my studies, I have worked with SQL Server and have deeply studied SQL<br/> and its fundamentals, including diagrams, table normalization, and other core concepts.<br/> Additionally,I have self-taught myself MySQL and R.</p>
                    <ul>
                        
                        <li><strong>MySQL</strong></li> 
                        <li><strong>SQL Server</strong></li> 
                        
                    </ul>
                    <div className='imagesLanguages'>
                        <img className="imagenNoticiaRelevante" src="/sqls.webp"/>
                        <img className="imagenNoticiaRelevante" src="/mysql.png"/>
                        
                    </div>
                    <h2 className="titlePro">PROJECTS</h2>
                    <ProjectInfo
                        img = "/mysql.png"
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
    }else if(selected=="Tools"){
        return(
            <div>
                <section className='Languages'>
                    <h2 className="titleLa">TOOLS</h2>

                    <p>I have proactively taken a Git course outside of university and become more<br/> comfortable with the commands. This has greatly improved my workflow and <br/>collaboration skills.In addition, I have spent the majority of my timeworking with<br/> Visual Studio Code, which has become <br/>my primary toolfor development </p>
                    <ul>
                        
                        <li><strong>GIT</strong></li> 
                        <li><strong>VSCode</strong></li> 
                        
                    </ul>
                    <div className='imagesLanguages'>
                        <img className="imagenNoticiaRelevante" src="/vsc.png"/>
                        <img className="imagenNoticiaRelevante" src="/git.jpg"/>
                        
                    </div>
                    <h2 className="titlePro">PROJECTS</h2>

                        

                        
                </section>
            </div>
        )
    }else{
        return(
            <div>
                <section className='None'>
                    <h2 className="titleLa">SELECT AN OPTION </h2>
                    <img className="arrowImg"src ="/arrow.png"/>

                        
                </section>
            </div>
        )
    }
    

}
