import React from 'react'
import "./componentsCss.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


 function ListItems(props) {

    const items=props.items;
    const listItems=items.map(item=>{
        return(
         <div  key={item.id} className="listItem">
         <p className="ItemText">
          <input type="text" 
          value={item.text} 
          key={item.id} className="input" 
          onChange={(e)=>props.updateItem(e.target.value,item.id)}/>
          <span>
           <FontAwesomeIcon icon={faTrash}  
           className="favIcon" 
           onClick={()=>props.deleteItem(item.id)}/>
          </span>
          </p>
          
           </div>
      
        )
    })
    return (
        <div>
           {listItems} 
        </div>
    )
}
export default  ListItems;