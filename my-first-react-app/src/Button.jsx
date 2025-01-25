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
             <Button text="Don't Click Me!" handleClick={()=> handleButtonClick('https://youtu.be/hPr-Yc92qaY?si=j6U0vpTPkYHnehwJ')} color="red" fontSize={12} />
             <Button text="Nothing to see here" color="orange" handleClick={()=> handleButtonClick('https://images.app.goo.gl/RMRYV1z5AAQRMYym7') } fontSize={12} />
        </div>
    );
}