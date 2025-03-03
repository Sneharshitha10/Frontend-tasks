import React from 'react'
import { useDrag } from 'react-dnd'

function Picture({id,url})
{
    const [{isDragging},drag] = useDrag(() => ({
        type : "image", 
        item : {id : id},
        collect : (monitor) => ({
            isDragging : !!monitor.isDragging(),
        }),
    }));
    return(
        <div ref={drag} style={{ display: "inline-block", cursor: "grab" }}>
           <img  src = {url} width = "150px" style={{border : isDragging ? "5px solid pink" : "0px "}}/>
        </div>
    );
}

export default Picture