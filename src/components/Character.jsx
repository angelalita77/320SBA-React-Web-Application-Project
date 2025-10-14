export default function Character({name, image}){
    
    return (
        <div className="rickmorty-card" >
            <div className="inner">
                <div className="front">
                    <img src={image} alt={name} width="200" /> 
                </div>
                <div className="back">?</div>
            </div>
        </div>
        
        
    )
}