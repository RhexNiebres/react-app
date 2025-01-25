function Button({text = 'Click Me!', color = 'lightgreen', fontSize=12}){
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
             <Button  />
             <Button text="Don't Click Me!" color="red" fontSize={12} />
             <Button color="orange" fontSize={12} />
        </div>
    );
}