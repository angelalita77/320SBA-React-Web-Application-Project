export default function Character({image, name}){
    
    return (
        <div className="character-card">
            <img 
                src={image} 
                alt={name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            /> 
            <p>{name}</p>
        </div>
        
        
    )
}