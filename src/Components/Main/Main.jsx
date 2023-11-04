import Button from "../Button/Button"

import React from "react"

function Main() {
    const [number, setNumber] = React.useState(0)
    const [value, setValue] = React.useState("Using useState renders something new on every change and thus the new saves appear to the user immediately on every change.")

    let random = "Without useState, we cannot immediately implement our saves because we are not rendering. To make changes appear to the user, we need to render the saves. It is changing, but only in browser, not on the user interface"

    const handleChange = (evt) => {
        random = evt.target.value
    }

    return (
        <main className="main">
            <Button text="Prev"></Button>
            <Button variant="secondary"></Button>
            <Button text="Next" variant="primary" isOutlined={true}></Button>
            <Button text="Click to Continue" variant="secondary" isOutlined={true}></Button>
            <Button text="Confirm" variant="primary" isOutlined={true} hasIcon={true}></Button>

            <div>
                <button className="button primary outlined" onClick={() => setNumber(number - 1)}>-</button>
                <h1>{number}</h1>
                <button className="button primary outlined" onClick={() => setNumber(number + 1)}>+</button>
            </div>

            <div>
                <input onChange={(evt) => setValue(evt.target.value)} type="text" />
                <p>{value}</p>
            </div>

            <div>
                <input onChange={handleChange} type="text" />
                <p>{random}</p>
            </div>
        </main>
    )
}

export default Main