const Home = (props) => {
    return (
        <div>
            <h1>This is my Home Componenet.</h1>
            <h2>Welcome, {props.name}</h2>
            <h2>I'm {props.age} years old.</h2>
        </div>
    )
}

export default Home
