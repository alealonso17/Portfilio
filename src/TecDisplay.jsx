



export function TecDisplay({ name, username, link, buttonlink, isSelected, onSelect }) {
    const text = isSelected ? "" : "See";
    const cls = isSelected? "name-selected" : "name"
   


    return(
        <article className="tw-followCard">
            <header className="tw-followCard-Header">
                <img className="tw-follow-avatar" src={link}/> 
                <div className="tw-followCard-info">
                    <strong class={cls}>{name}</strong>
                    <span className="tw-followCard-InfoUsername">{username}</span>
                </div>
            </header>

            <aside>
                 <a href={buttonlink}   >
                    <button className="tw-follow-button" onClick={onSelect}>
                        {text}
                    </button>
                </a>
            </aside>
        </article>
    )

}