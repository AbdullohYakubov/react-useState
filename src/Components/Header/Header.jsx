import Hero from "../Hero/Hero"

function Header({ nameOfUser }) {
    return (
        <>
            <h1>Hello, my name is {nameOfUser}!</h1>
            <Hero />
        </>
    )
}

export default Header