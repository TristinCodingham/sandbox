import React from 'react'
import { useDrag } from 'react-dnd';

export default function Draggable({product}) {
    const [{isDragging, monitor}, dragRef] = useDrag(() => ({
        type: product.type,
        item: {
            id: product.id,
            type: product.type,
            name: product.name
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            monitor: monitor
        })
    }))
    return (
        <li ref={dragRef} style={{display: isDragging ? "none" : "block"}}>
            {console.log("monitor: ", monitor)}
            <span>{product.name}</span>
        </li>
    )
}
