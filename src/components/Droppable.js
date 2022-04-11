import React from 'react'
import { useDrop } from 'react-dnd';
import Draggable from './Draggable';

export default function Droppable({products, addProducts, removeProducts, types, css}) {
    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: types,
        drop: (item) => {
            addProducts.forEach(addProduct => addProduct((prev => [...prev, item])));
            removeProducts.forEach(removeProduct => removeProduct((prev => {
                const newItems = prev.filter(prevItem => prevItem.id !== item.id);
                return newItems;
            })))
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))
    return (
        <section className={css} ref={dropRef} style={isOver ? {backgroundColor: "#e3e3e3"} : {backgroundColor: "#ededed"}}>
            <ul>
                {products.map(product => <Draggable key={product.id} product={product} />)}
            </ul>
      </section>
    )
}
