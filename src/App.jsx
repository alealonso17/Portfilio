  import { Premium } from "./Premium";
  import { Noticia } from "./noticias";

  import { NoticiasSmall } from "./noticiasSmall";
  // import { Logo } from "./Logo";
  import { StudiesDisplay } from "./followers";
  import{TecDisplay} from "./TecDisplay"
  import { useState } from "react"
  import { DescriptionBig } from "./description";
  import { AbilitesDisplay } from "./AbilitesDisplay";
  import { AbilitesDisplayMD } from "./AbilitesDisplay";
  import { useEffect } from "react";
  import { DescriptionMD } from "./description";
  import { DescriptionMOBILE } from "./description";
  import { DescriptionTecMOBILE } from "./description";

  export function App(){

    // Estado para el tipo de dispositivo basado en el tamaño de la ventana
    const [device, setDevice] = useState("mobile"); // Valor por defecto "mobile"

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width > 1300) {
          setDevice("desktop");
        } else if (width > 970) {
          setDevice("med");
        } else if (width > 706){
          setDevice("mobile");
        }else {setDevice("phone") }
      };
  
      window.addEventListener("resize", handleResize);
      handleResize(); // Llamar inmediatamente para establecer el estado inicial
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    // Opciones para la barra de búsqueda
    const options = [
      { name: 'GitHub', url: 'https://github.com/alealonso17' },
      { name: 'Twitter', url: 'https://twitter.com' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alejandro-alonso-lopez-b9145b353/' },
      { name: 'Instagram', url: 'https://www.instagram.com/alealonso017/' },
      { name: 'What is FLL?', url: 'https://www.firstlegoleague.org/about' },
      { name: 'Robert Gordon Uni', url: 'https://www.rgu.ac.uk/study/academic-schools/school-of-computing-engineering-and-technology' },


      
    ];

    // Filtrar las opciones según el texto de búsqueda
    const filteredOptions = options.filter(option =>
      option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOptionClick = (index, url) => {
      // Establecer la opción seleccionada
      setSelectedOption(index);
      // Abrir el enlace
      window.open(url, '_blank');
    };



    const [selected, setSelected] = useState(null);
    const [scrollLimit, setScrollLimit] = useState(1000);
    const [isFocused, setIsFocused] = useState(false);

    // Funciones para manejar el enfoque del input
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    let med = false ;
    let mb = false ; 
    let ph = false ; 
    
    const checkScroll = () => {
      setScrollLimit(3000);
      if ( (selected === "Languages" ) && med) {

        setScrollLimit(3000);
      } else if (( selected === "Languages" ) ) {
        setScrollLimit(2400);
      }else if ( (selected === "Web Development") && med ) {
        setScrollLimit(1800);
      }else if ( (selected === "Web Development") ) {
        setScrollLimit(1400);
      }
      else if ( (selected === "Frameworks") ) {
        setScrollLimit(1300);
      } else if ( (selected === "Frameworks") && med ) {
        setScrollLimit(3000);
      }else if ( (selected === "Database") && med ) {
        setScrollLimit(1800);
      }else if ( (selected === "Database") ) {
        setScrollLimit(1400);
      }
      else if (selected === "Database") {
        setScrollLimit(1100);
      }else if (selected === "Tools" ) {
        setScrollLimit(1000);
      }
      
    };

    useEffect(() => {
      checkScroll();
    }, [selected]); // Llamar a checkScroll cuando el estado 'selected' cambie

    useEffect(() => {
      const handleScroll = (event) => {
        // Limita el scroll para que no pase del valor 'scrollLimit'
        if (window.scrollY > scrollLimit) {
          event.preventDefault(); // Bloquea el scroll
          window.scrollTo(0, scrollLimit); // Ajusta la posición del scroll
        }
      };

      // Añadir el event listener cuando el componente se monta
      window.addEventListener('scroll', handleScroll, { passive: false });

      // Limpiar el event listener cuando el componente se desmonta
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollLimit]);  // Vuelve a ejecutar cuando cambie el scrollLimit

    const discover = selected ? "discoverTecOn" : "discoverTec";
    let classRi = "";
    if (selected == "Languages") {
      classRi = "rigthScreen-la"
    } else if (selected == "Web Development") {
      classRi = "rigthScreen-wd"
    
    } else if (selected == "Frameworks") {
      classRi = "rigthScreen-wd-fr"
    
    }else if (selected == "Database") {
      classRi = "rigthScreen-wd-db"
    
    }else if (selected == "Tools") {
      classRi = "rigthScreen-wd-t"
    
    }else {
      classRi = "rigthScreen"
    }

    let classRiMD ="" ; 
    
    if (selected == "Languages") {
      classRiMD = "rigthScreen-laMD"
    } else if (selected == "Web Development") {
      classRiMD = "rigthScreen-wdMD"
    
    } else if (selected == "Frameworks") {
      classRiMD = "rigthScreen-wd-frMD"
    
    }else if (selected == "Database") {
      classRiMD = "rigthScreen-wd-dbMD"
    
    }else if (selected == "Tools") {
      classRiMD = "rigthScreen-wd-tMD"
    
    }else {
      classRiMD = "rigthScreenMD"
    }

      let classRiMB =""

    if ((selected == "Languages") && mb ) {
      classRiMB = "rigthScreen-laMB"
    } else if ((selected == "Web Development")&& mb )  {
      classRiMB = "rigthScreen-wdMB"
    
    } else if ((selected == "Frameworks")&& mb )  {
      classRiMB = "rigthScreen-wd-frMB"
    
    }else if ((selected == "Database") && mb ) {
      classRiMB = "rigthScreen-wd-dbMB"
    
    }else if( (selected == "Tools") && mb ) {
      classRiMB = "rigthScreen-wd-tMB"
    
    }else {
      classRiMB = "rigthScreenMB"
    }
    if (device === "desktop"){
      med = false 
      mb = false
      ph = false 



      return(
          <>
            <div className= {device} >
          
              <img src="/haunter.gif"
                      className="menuGif">
                  </img>
              <section className="leftScreen">
                  <div className="discover"> 
                      <h1 className="Discover_text">Academic Studies</h1>
                      <div className="followers">

                      <StudiesDisplay name= "Robert Gordon University" username= "BSc (Hons) Computer Science – In Progress" link="/rgu.jpg"  buttonlink="https://www.rgu.ac.uk/study/courses/446-bsc-hons-computer-science" /> 
                      <StudiesDisplay  name= "Jesus-Maria" username="Scientific-Technological Baccalaureate"  link = "/jm.jpg" buttonlink="https://jmbilbao.net"/> 
                      
                      </div>
                      
      
                  </div>
                  <div className={discover}> 
                      <h1 className="Discover_text" id ="tech">Technologies & Tools</h1>
                      <div className="followers">
                      <TecDisplay 
                              name="Languages" 
                              username="Python, JavaScript, C#" 
                              link="/python.jpg" 
                              isSelected={selected === "Languages"} 
                              onSelect={() => setSelected("Languages")} 
                          />
                      <TecDisplay 
                              name="Web Development" 
                              username="HTML, CSS, JSX (React)"  
                              link="/web.jpg" 
                              isSelected={selected === "Web Development"} 
                              onSelect={() => setSelected("Web Development")} 
                      />
                      <TecDisplay 
                              name="Frameworks" 
                              username=".NET Core, React" 
                              link="/react.png"  
                              isSelected={selected === "Frameworks"} 
                              onSelect={() => setSelected("Frameworks")} 
                      />
                      <TecDisplay 
                              name="Database" 
                              username="MySQL, SQL Server" 
                              link="/db.webp"  
                              isSelected={selected === "Database"} 
                              onSelect={() => setSelected("Database")} 
                      />
                      <TecDisplay 
                              name="Tools" 
                              username="Visual Studio, Git" 
                              link="/git.jpg"  
                              isSelected={selected === "Tools"} 
                              onSelect={() => setSelected("Tools")} 
                      />
                      </div>
                      
      
                  </div>
                  <div className="discover"> 
                      <h1 className="Discover_text">Social</h1>
                  <div className="SocialIcons"> 
                      <a href="https://www.facebook.com/alex.alonso.77964" target="_blank" rel="noopener noreferrer" >
                          <img className="imagenNoticiaRelevante" src="/fb.jpg"/>
                      </a>
                      <a href="https://www.linkedin.com/in/alejandro-alonso-lopez-b9145b353/"  target="_blank" rel="noopener noreferrer">
                          <img className="imagenNoticiaRelevante" src="/linkedin.png"/> 
                          </a>
                      <a href="https://www.instagram.com/alealonso017/" target="_blank" rel="noopener noreferrer">
                              <img className="imagenNoticiaRelevante" src="/insta.jpg" /> 
                      </a>
                      <a href="https://github.com/alealonso17" target="_blank" rel="noopener noreferrer">
                          <img className="imagenNoticiaRelevante" src="/githubs.png" /> 
                      </a>
                      </div>
                      
      
                  </div>
                  </section>
                  <section className="centerScreen"> 
                      <DescriptionBig/> 
                      <AbilitesDisplay selected = {selected} />
                  </section>
                  <section className =  {classRi}>
                  <div className="searchBar">
                      <input
                        className="searchBar-input"
                        type="text"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el término de búsqueda
                      />

                      {searchTerm && (
                        <div className="searchOptions">
                          <ul>
                            {filteredOptions.map((option, index) => (
                              <li
                                  key={index}
                                  className={`optionSearch ${selectedOption === index ? 'selected' : ''}`}
                                  onClick={(e) => {
                                      e.preventDefault(); // Previene el comportamiento por defecto del enlace
                                      handleOptionClick(index, option.url); // Abre la URL en una nueva pestaña
                                  }}
                              >
                                  <a href={option.url} target="_blank" rel="noopener noreferrer">
                                      {option.name}
                                  </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                      <Premium />
                      <div className="todasNoticias" > 
                          <Noticia />
                          <div className="noticiasAgrupadas"> 
                          <NoticiasSmall GrupoNoticia='2nd Place 🥈' nombre='FLL Team Values' repost='2019' link='https://www.firstlegoleague.org/' /> 
                          <NoticiasSmall GrupoNoticia='2nd Place 🥈' nombre=' FLL Scientific Project' repost='2019' link="https://www.firstlegoleague.org/" /> 
                          <NoticiasSmall GrupoNoticia='4th Place' nombre='FLL Robotic Project' repost='2019' link ="https://www.firstlegoleague.org/" /> 
                          <NoticiasSmall GrupoNoticia='Top 5' nombre='FLL School  Positioning' repost='2019' link = "https://www.firstlegoleague.org/" /> 
                      </div>
                  </div> 
                  </section>

              
              
                  </div>
          </>

      )
    } else if (device === "med") {
      med = true ;
      mb = false ; 
      ph = false ;  
      return(
        <>
          <div className= {device} >
        
            <img src="/haunter.gif"
                    className="menuGif">
                </img>
            <section className="leftScreen">
                <div className="discover"> 
                    <h1 className="Discover_text">Academic Studies</h1>
                    <div className="followers">

                    <StudiesDisplay name= "Robert Gordon University" username= "BSc (Hons) Computer Science – In Progress" link="/rgu.jpg"  buttonlink="https://www.rgu.ac.uk/study/courses/446-bsc-hons-computer-science" /> 
                    <StudiesDisplay  name= "Jesus-Maria" username="Scientific-Technological Baccalaureate"  link = "/jm.jpg" buttonlink="https://jmbilbao.net"/> 
                    
                    </div>
                    
    
                </div>
                <div className={discover}> 
                    <h1 className="Discover_text">Technologies & Tools</h1>
                    <div className="followers">
                    <TecDisplay 
                            name="Languages" 
                            username="Python, JavaScript, C#" 
                            link="/python.jpg" 
                            isSelected={selected === "Languages"} 
                            onSelect={() => setSelected("Languages")} 
                        />
                    <TecDisplay 
                            name="Web Development" 
                            username="HTML, CSS, JSX (React)"  
                            link="/web.jpg" 
                            isSelected={selected === "Web Development"} 
                            onSelect={() => setSelected("Web Development")} 
                    />
                    <TecDisplay 
                            name="Frameworks" 
                            username=".NET Core, React" 
                            link="/react.png"  
                            isSelected={selected === "Frameworks"} 
                            onSelect={() => setSelected("Frameworks")} 
                    />
                    <TecDisplay 
                            name="Database" 
                            username="MySQL, SQL Server" 
                            link="/db.webp"  
                            isSelected={selected === "Database"} 
                            onSelect={() => setSelected("Database")} 
                    />
                    <TecDisplay 
                            name="Tools" 
                            username="Visual Studio, Git" 
                            link="/git.jpg"  
                            isSelected={selected === "Tools"} 
                            onSelect={() => setSelected("Tools")} 
                    />
                    </div>
                    
    
                </div>
                <div className="discover"> 
                    <h1 className="Discover_text">Social</h1>
                <div className="SocialIcons"> 
                    <a href="https://www.facebook.com/alex.alonso.77964" target="_blank" rel="noopener noreferrer" >
                        <img className="imagenNoticiaRelevante" src="/fb.jpg"/>
                    </a>
                    <a href="https://www.linkedin.com/in/alejandro-alonso-lopez-b9145b353/"  target="_blank" rel="noopener noreferrer">
                        <img className="imagenNoticiaRelevante" src="/linkedin.png"/> 
                        </a>
                    <a href="https://www.instagram.com/alealonso017/" target="_blank" rel="noopener noreferrer">
                            <img className="imagenNoticiaRelevante" src="/insta.jpg" /> 
                    </a>
                    <a href="https://github.com/alealonso17" target="_blank" rel="noopener noreferrer">
                        <img className="imagenNoticiaRelevante" src="/githubs.png" /> 
                    </a>
                    </div>
                    
    
                </div>
                </section>
                <section className="centerScreen"> 
                    <DescriptionMD/> 
                    <AbilitesDisplayMD selected = {selected} />
                </section>
                <section className =  {classRiMD}>
                <div className="searchBar">
                    <input
                      className="searchBar-input"
                      type="text"
                      placeholder="Buscar"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el término de búsqueda
                    />

                    {searchTerm && (
                      <div className="searchOptions">
                        <ul>
                          {filteredOptions.map((option, index) => (
                            <li
                                key={index}
                                className={`optionSearch ${selectedOption === index ? 'selected' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault(); // Previene el comportamiento por defecto del enlace
                                    handleOptionClick(index, option.url); // Abre la URL en una nueva pestaña
                                }}
                            >
                                <a href={option.url} target="_blank" rel="noopener noreferrer">
                                    {option.name}
                                </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                    <Premium />
                    <div className="todasNoticias" > 
                        <Noticia />
                        <div className="noticiasAgrupadas"> 
                        <NoticiasSmall GrupoNoticia='2nd Place 🥈' nombre='FLL Team Values' repost='2019' link='https://www.firstlegoleague.org/' /> 
                        <NoticiasSmall GrupoNoticia='2nd Place 🥈' nombre=' FLL Scientific Project' repost='2019' link="https://www.firstlegoleague.org/" /> 
                        <NoticiasSmall GrupoNoticia='4th Place' nombre='FLL Robotic Project' repost='2019' link ="https://www.firstlegoleague.org/" /> 
                        <NoticiasSmall GrupoNoticia='Top 5' nombre='FLL School  Positioning' repost='2019' link = "https://www.firstlegoleague.org/" /> 
                    </div>
                </div> 
                </section>

            
            
                </div>
        </>

    )} else if (device === "mobile") {
      med = false 
      mb = true ; 
      ph = false ; 



      return(
          <>
            <div className="allWindow"> 
            <div className ="firstHalf" > 
              <div className= {device} >
            
                <img src="/haunter.gif"
                        className="menuGif">
                    </img>
                <section className="leftScreen">
                    <div className="discover"> 
                        <h1 className="Discover_text">Academic Studies</h1>
                        <div className="followers">

                        <StudiesDisplay name= "Robert Gordon University" username= "BSc (Hons) Computer Science – In Progress" link="/rgu.jpg"  buttonlink="https://www.rgu.ac.uk/study/courses/446-bsc-hons-computer-science" /> 
                        <StudiesDisplay  name= "Jesus-Maria" username="Scientific-Technological Baccalaureate"  link = "/jm.jpg" buttonlink="https://jmbilbao.net"/> 
                        
                        </div>
                        
        
                    

                    </div>
                    <div className="discover"> 
                        <h1 className="Discover_text">Social</h1>
                    <div className="SocialIcons"> 
                        <a href="https://www.facebook.com/alex.alonso.77964" target="_blank" rel="noopener noreferrer" >
                            <img className="imagenNoticiaRelevante" src="/fb.jpg"/>
                        </a>
                        <a href="https://www.linkedin.com/in/alejandro-alonso-lopez-b9145b353/"  target="_blank" rel="noopener noreferrer">
                            <img className="imagenNoticiaRelevante" src="/linkedin.png"/> 
                            </a>
                        <a href="https://www.instagram.com/alealonso017/" target="_blank" rel="noopener noreferrer">
                                <img className="imagenNoticiaRelevante" src="/insta.jpg" /> 
                        </a>
                        <a href="https://github.com/alealonso17" target="_blank" rel="noopener noreferrer">
                            <img className="imagenNoticiaRelevante" src="/githubs.png" /> 
                        </a>
                        </div>
                        
        
                    </div>
                    </section>

                    <section className =  {classRiMB}>
                    <div className="searchBar">
                        <input
                          className="searchBar-input"
                          type="text"
                          placeholder="Buscar"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el término de búsqueda
                        />

                        {searchTerm && (
                          <div className="searchOptions">
                            <ul>
                              {filteredOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className={`optionSearch ${selectedOption === index ? 'selected' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault(); // Previene el comportamiento por defecto del enlace
                                        handleOptionClick(index, option.url); // Abre la URL en una nueva pestaña
                                    }}
                                >
                                    <a href={option.url} target="_blank" rel="noopener noreferrer">
                                        {option.name}
                                    </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                        <Premium />
                        <div className="todasNoticias" > 
                            <Noticia />
                            <div className="noticiasAgrupadas"> 
                            <NoticiasSmall GrupoNoticia='2nd Place 🥈' nombre='FLL Team Values' repost='2019' link='https://www.firstlegoleague.org/' /> 
                            <NoticiasSmall GrupoNoticia='2nd Place 🥈' nombre=' FLL Scientific Project' repost='2019' link="https://www.firstlegoleague.org/" /> 
                            <NoticiasSmall GrupoNoticia='4th Place' nombre='FLL Robotic Project' repost='2019' link ="https://www.firstlegoleague.org/" /> 
                            <NoticiasSmall GrupoNoticia='Top 5' nombre='FLL School  Positioning' repost='2019' link = "https://www.firstlegoleague.org/" /> 
                        </div>
                    </div> 
                      <DescriptionMD /> 

                    </section>

                    
                    
                    </div>
                </div> 
                <div className="secondHalf"> 
                  <AbilitesDisplayMD selected = {selected} />
                  </div>
                      

              </div>
          </>

    )
  } else if (device === "phone") {
    med = false 
    mb = false ; 
    ph = true ; 

      return ( 
        <div className="mobileDes"> 

        
            <div className = "mobileIntro">   
                <h2>WELCOME TO MY PORTFOLIO!</h2>
                <div className ="descriptionMobile"> 
                  <img src="haunter.gif" className="imageMobile"/> 
                  
                  <ul> 
                      <li><a href="#descrip">About Me</a></li> 
                      <li><a href="#studies">Academic Studies</a></li>
                      <li><a href="#tec">Technologies</a></li>
                      <li><a href="#competitions">Competition Results</a></li>
                      <li><a href="#social">Socials/Contact</a></li>
                  </ul>
                      
                  
                </div>
            </div>

            <DescriptionMOBILE id="descrip"/>
              
            <div id="studies"> 
                <div className="discoverMOBILE"> 
                        <h1 className="Discover_text" >Academic Studies</h1>
                        <div id="tec" className="followers">

                        <StudiesDisplay name= "Robert Gordon University" username= "BSc (Hons) Computer Science – In Progress" link="/rgu.jpg"  buttonlink="https://www.rgu.ac.uk/study/courses/446-bsc-hons-computer-science" /> 
                        <StudiesDisplay  name= "Jesus-Maria" username="Scientific-Technological Baccalaureate"  link = "/jm.jpg" buttonlink="https://jmbilbao.net"/> 
                        
                        </div>
                        
        
                    </div>
            </div>
                      
              <DescriptionTecMOBILE />
              
            <div className="todasNoticias" id="competitions" > 
                        <Noticia />
                        <div className="noticiasAgrupadas"> 
                        <NoticiasSmall GrupoNoticia='2nd Place 🥈' nombre='FLL Team Values' repost='2019' link='https://www.firstlegoleague.org/' /> 
                        <NoticiasSmall GrupoNoticia='2nd Place 🥈' nombre=' FLL Scientific Project' repost='2019' link="https://www.firstlegoleague.org/" /> 
                        <NoticiasSmall GrupoNoticia='4th Place' nombre='FLL Robotic Project' repost='2019' link ="https://www.firstlegoleague.org/" /> 
                        <NoticiasSmall GrupoNoticia='Top 5' nombre='FLL School  Positioning' repost='2019' link = "https://www.firstlegoleague.org/" /> 
                         </div>
             </div>
             <div className="discover" id ="discover"> 
                      <h1 className="Discover_text" id ="social">Social</h1>
                  <div className="SocialIcons"> 
                      <a href="https://www.facebook.com/alex.alonso.77964" target="_blank" rel="noopener noreferrer" >
                          <img className="imagenNoticiaRelevante" src="/fb.jpg"/>
                      </a>
                      <a href="https://www.linkedin.com/in/alejandro-alonso-lopez-b9145b353/"  target="_blank" rel="noopener noreferrer">
                          <img className="imagenNoticiaRelevante" src="/linkedin.png"/> 
                          </a>
                      <a href="https://www.instagram.com/alealonso017/" target="_blank" rel="noopener noreferrer">
                              <img className="imagenNoticiaRelevante" src="/insta.jpg" /> 
                      </a>
                      <a href="https://github.com/alealonso17" target="_blank" rel="noopener noreferrer">
                          <img className="imagenNoticiaRelevante" src="/githubs.png" /> 
                      </a>
                      </div>
                      
      
             </div>
        </div>
        

      )
  }
}