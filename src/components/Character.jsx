export default function Character({name, image}){
    
    return (
        <div>
            <img src={image} alt={name} width="200" /> 
        </div>
        
        
    )
}