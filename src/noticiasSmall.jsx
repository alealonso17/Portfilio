

export function NoticiasSmall({GrupoNoticia, nombre, repost, link}){

    return(
        <article class="noticia">
            
            <h2 className="GrupoNoticia">{GrupoNoticia}</h2>
            <h1 class="nombreNoticia"><a href={link}>{nombre}</a></h1>
            <h2 className="NumeroRepost">{repost}</h2>
                
        </article>
    )

}