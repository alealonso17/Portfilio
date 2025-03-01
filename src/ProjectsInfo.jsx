
export function ProjectInfo({text , img, title, img2}){
    return (
        <div className="ProjectX">
            <img src={img} className="tw-follow-avatar"/> 
            <div className="DescriptionPro">
                <em><strong>{title}</strong></em>
                <p className="DescriptionProject"> {text}</p>
            </div>
                <img src={img2} className="imagenPro"/>

        </div>

    )
}