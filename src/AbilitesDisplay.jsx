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
