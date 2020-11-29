import  React, { Component } from 'react'
import ListItems from "./ListItems";
import "./componentsCss.css"

 class TodoLayout extends Component {
     constructor(props)
     {
        super(props);
        this.state={
            items:[],
           userInput:{
               text:"",
               id:""
           }  
        }
        /* binding function */ 

        this.myHandleChange=this.myHandleChange.bind(this);
        this.myOnSubmitHandler=this.myOnSubmitHandler.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.updateItem=this.updateItem.bind(this);
    }
 
      /* input change handle function */ 
     myHandleChange(e)
     {
         this.setState({userInput:{text: e.target.value,id:Math.random()}});
        
     }
     myOnSubmitHandler(e)
     {
       e.preventDefault(); 
           const newItem=this.state.userInput;
           if(newItem.text!=="")
           {
               const newItems=[...this.state.items,newItem];
        
            // reset state 
            this.setState({ 
             items:newItems,
              userInput:{
                  text:"",
                  id:""
              }
            }); 
           
        } 

     }
     //delete todo list item function//
     deleteItem(id)
     {
         const filterItem=this.state.items.filter(item=>item.id!==id);
         this.setState({
             items:filterItem
         })
     }
     //update input feild of list item//
     updateItem(text,id)
     {
       const items=this.state.items;
       items.map((item)=> {
         
           if(item.id===id)
           {
           item.text=text
           }
           
          
        })
           this.setState({
               items:items
           })
     }
  
    render() {
        return (
            <div className="mainContainer">
            <div className="header">
            <h1  className="headerText">My To Do App
            <p> let's get started</p></h1>
            </div>
            <div className="formContainer">
          <form onSubmit={this.myOnSubmitHandler} className="form">
                       <input
                        type="text"
                        placeholder="Enter Username"
                        onChange={this.myHandleChange}
                        value={this.state.userInput.text}>
                         </input>
                        <button type="submit" >Add</button>
                        </form>
                         <ListItems items={this.state.items}
                          deleteItem={this.deleteItem}
                          updateItem={this.updateItem}
                          />
            </div>
            </div>
        )
    }
}
export default TodoLayout;
