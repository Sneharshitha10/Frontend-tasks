import React from 'react'
import Picture from './Picture'
import "../App.css"
import { useDrop } from 'react-dnd'
import { useState } from 'react'

const PictureList = [
    {
        id : 1,
        url : "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500"
    },
    {
        id : 2,
        url : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
        id : 3,
        url : "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500"
    }
]

function DragDrop()
{
    const [board, setBoard] = useState([]);

    const [{isOver},drop] = useDrop(() => ({
        accept : "image",
        drop : (item) => addImageToBoard(item.id),
        collect : (monitor) => ({
            isOver : !!monitor.isOver(),
        }),
    }))

    const addImageToBoard = (id) => {
       const pictureList = PictureList.filter((picture) => id === picture.id);
       setBoard([pictureList[0]]);
    };
    return(
        <>
          <div className='Pictures'> {PictureList.map((picture) => {
            return <Picture url = {picture.url} id = {picture.id} />;
          })}</div>
          <div className='Board' ref={drop}>
            {board.map((picture) => {
                return <Picture url = {picture.url} id={picture.id} />
            })}
          </div>
        </>
    )
}

export default DragDrop