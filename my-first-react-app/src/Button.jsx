function Button({text, color, fontSize}){
    const buttonStyle= {
        color: color,
        fontSize: fontSize + 'px',
    };
    
    return(
        <button style={buttonStyle}>{text}</button>
    )
}

export default function RenderButtons(){
    return(
        <div>
             <Button text="Click Me!" color="lightgreen" fontSize={12} />
             <Button text="Don't Click Me!" color="red" fontSize={12} />
             <Button text="Click Me!" color="orange" fontSize={12} />
        </div>
    );
}