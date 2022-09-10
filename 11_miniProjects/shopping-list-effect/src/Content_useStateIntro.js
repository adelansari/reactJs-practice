import React from 'react'
import {useState} from 'react';

const Content = () => {
    const [name, setName] = useState('Dark')
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Dark', 'Slayer', 'Turtle'];
        const int = Math.floor(Math.random() * 3);
        // return names[int]
        setName(names[int]);
    }

    const handleClick = () =>  {
        setCount(count+1)
        setCount(count+1)
        console.log(count)
    }
    // const handleClick2 = (name) =>  {
    //     console.log(`${name} was clicked`)
    // }
    const handleClick2 = () =>  {
        console.log(count)
    }
    

    // const handleClick3 = (e) =>  {
    //     console.log(e.target.innerText)
    // }


    return (
        <main>
            <p onDoubleClick={handleClick}>
                {/* Hello {handleNameChange()}! */}
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            {/* <button onClick={() => handleClick2('Dark')}>Click It</button> */}
            <button onClick={handleClick}>Click It</button>
            {/* <button onClick={(e) => handleClick3(e)}>Click It</button> */}
            <button onClick={handleClick2}>Click It</button>

        </main>
    )
}

export default Content