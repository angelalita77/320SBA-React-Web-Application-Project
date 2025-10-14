import '../styles/PageCenter.css'; // Import the centering styles

export default function LeaderBoard(){


    const centerPage = {
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems:"center",
            padding: 30
        }

    return (

        
        <div style={centerPage}>
            <h1>There is no leaderboard!</h1>
            <img src="AngryRick02.jpg" alt="Angry Rick" width="400px"/>
            <h2>Why?</h2>
            <p>Because I'm the ULTIMATE here! Do you...*BURP*..you think you are smarter than me!? 
                I'm the smartest man in the universe! Leaderboards are pointless!

                But..*BURP* ..doesn't mean you can't have fun playing the game. 
                Play for fun dummy.
            </p>
        </div>
    
    
    )
}