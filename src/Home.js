import { useState } from "react";

const Home = () => {

    // const handleClick = () => {
    //     console.log('Hello, RhayGang');
    // }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }

    const [name, setName] = useState('rhema');
    const [age, setAge] = useState('25')

    const handleClick = () => {
        setName('Nwoko');
        setAge('also 25')
    }

    return (
        <div className="home">
            <h2>
                Home Page
            </h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me!!</button>
            <button onClick={()=>{
                handleClickAgain('Rhema')
            }}>Click me!!</button>
        </div>
    );
}
 
export default Home;