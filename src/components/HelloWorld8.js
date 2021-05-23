import React, {useState, useEffect} from 'react';

const HelloWorld8 = (props) => {
    // const [state, setState] = useSatet(initialSate);
    const [date, setDate] = useState(new Date());

    // function below responsible for setting new date value in state which will provoke a re-render of component.
    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const timerID = setInterval(tick, 1000); // pass tick as callback function. Called every 1000ms to a new Date() in state.
        /*now we need to let this useEffect know that there is work to do when component is to unmount.
        We undicate this work to do in a return statement that takes a function callback */
        return (
            () => {
                clearInterval(timerID); //cleanup the timer
            }
        )
    }, []);

    return (
        <div>
            <p>Hello {props.name}. Greetings from HelloWorld8.</p>
            <h3>
                {`Today's date is ${date.toLocaleDateString('en-GB')}
                and the time now is ${date.toLocaleTimeString('en-GB')}`}
            </h3>
        </div>
    )
}

HelloWorld8.defaultProps = {
    name:"Regulus"
}

export default HelloWorld8;