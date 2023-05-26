import { ColorConsumer } from "../context/color";

const colors = [
    'red',
    'blue',
    'green',
    'black',
    'orange',
    'purple',
    'indigo',
    'violet',
    'yellow',
];

const ColorPicker = () => {

    return(
        <div>
            <h1>색상을 고르세요</h1>
            <ColorConsumer>
            {({actions})=>(
                <div style={{display:'flex'}}>
                    {colors.map(color=>(
                        <div 
                            key={color}
                            style={{background: color,width : '10px',height:'10px'}}
                            onClick={()=>actions.setColor(color)}
                            onContextMenu={(e)=>{
                                e.preventDefault()
                                actions.setSubColor(color);    
                                }
                            }
                        >

                        </div>
                    ))}
                </div>
            )}
            </ColorConsumer>
        </div>
    )
}

export default ColorPicker;