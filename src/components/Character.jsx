export default function Character({image, name}){
    
    return (
        <div className="gallery-card">
            <img src={image} alt={name} width="200" /> 
            <p>{name}</p>
        </div>
        
        
    )
}