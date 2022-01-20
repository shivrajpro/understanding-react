import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";//name import
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);//returns 2 elements
  // console.log("in ExpenseItem",title);
  // let title = props.title;
  function onChangeTitle() {
    // console.log("qq title",title);
    // title = "Updated";
    // console.log("qq title",title);
    // this won't change the title on UI as JSX is already 
    // initialize in the beginning by React
    
    setTitle("Updated!");//this entire function is called again
    console.log("qq title",title);//will execute before setTitle, hence older value is printed
  }
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description"></div>
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={onChangeTitle} >Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
