
export default function ContentTitle(props) {
    // applying styles to components
    const white = {
        color: "white",
    }

    const whiteOpaque = {
        color: "white",
        opacity: "0.5"
    }

    const black = {
        color: "black",
    }

    const grey = {
        color: "grey"
    }
    return (
        <section className="content-title">
            <h1 className="title-h1" style={ props.color == "black" ? black : white}>{props.top}</h1>
            <h1 className="title-h1" style={ props.color == "black" ? grey : whiteOpaque}>
            {props.bottom}
            </h1>
        </section>
    )
}