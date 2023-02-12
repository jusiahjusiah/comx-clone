export default function Content(props) {
    const backgroundImage = {
        backgroundImage: `url(${props.photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const ContentColumns = (data) => {
        if(data == true) {
        return (
            <div className="content-reversed">
                <div style={backgroundImage} className=""></div>
                <div className="word-padding blue-gradient">
                    <h1 className="h1">{props.title} </h1>
                    <p className="p">{props.description}</p>
                    <button className="button blue-solid white"> View all {props.destination}</button>
                </div>
            </div> 
        )
    } else {
        return (
            <div className="content">
                <div style={backgroundImage} className=""></div>
                <div className="word-padding green-gradient">
                    <h1 className="h1">{props.title} </h1>
                    <p className="p">{props.description}</p>
                    <button className="button green-solid white"> View all {props.destination}</button>
                </div>

            </div>
        )
        }
    }

    return (
    <section className="content-container ">
        {/* conditional render here */}
        { ContentColumns(props.reverseColumn) }
    </section>

    )
}