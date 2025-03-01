export function StudiesDisplay({name, username,link, buttonlink}){
    
    

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-Header">
                <img className="tw-follow-avatar" src={link}/> 
                <div className="tw-followCard-info">
                    <strong class="name">{name}</strong>
                    <span className="tw-followCard-InfoUsername">{username}</span>
                </div>
            </header>

            <aside>
                 <a href={buttonlink}   >
                    <button className="tw-follow-button" >
                        See
                    </button>
                </a>
            </aside>
        </article>
    )

}
