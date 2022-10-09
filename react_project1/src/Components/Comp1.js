import React,{useState} from 'react';

export default function Comp1(props) {
    const changeUpper = ()=>{
        console.log("Uppercase");
        setText(text.toUpperCase());
    }
    const changeTeaxtarea = (e)=> {
        setText(e.target.value);
    }
    const Addition = () =>{
        setCount(count + 2);
    }
    const Substract = () => {
        setCount(count - 2);
    }
    const Multiply = () => {
        setCount(count * 2);
    }
    const Divide = () => {
        setCount(count / 2);
    }
    const changeInput = (e)=> {
        setCount(e.target.value)
    }
    let [text, setText] = useState();
    let [count, setCount] = useState(5);
    return (
        <div>
                <textarea className='textArea' id='text' value={text} onChange={changeTeaxtarea}></textarea>
                <button onClick={changeUpper}>Uppercase</button>
                <input type="text" value={count} onChange={changeInput}></input>
                <button onClick={Addition}>Addition</button>
                <button onClick={Substract}>Substract</button>
                <button onClick={Multiply}>Multiply</button>
                <button onClick={Divide}>Divide</button>
        </div>
    );
}