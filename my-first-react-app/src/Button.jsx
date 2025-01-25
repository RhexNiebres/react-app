function Button({text = 'Click Me!', color = 'lightgreen', fontSize=12, handleClick}){
    const buttonStyle= {
        color: color,
        fontSize: fontSize + 'px',
    };
    
    return(
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
    )
}

export default function RenderButtons(){
    const handleButtonClick= (url) => {
       window.location.href = url;
    }
    return(
        <div>
             <Button text="Google" handleClick={()=> handleButtonClick('https://www.google.com')}  />
             <Button text="Don't Click Me!" color="red" fontSize={12} />
             <Button color="orange" fontSize={12} />
        </div>
    );
}