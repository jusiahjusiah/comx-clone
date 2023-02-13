import ContentTitle from "./ContentTitle"
export default function Executives(props) {
    
    return (
        <div className="purple-gradient" style={{paddingTop: "30px", paddingBottom: "40px"}}>
        
        <ContentTitle top={"Discover Game Technologies"} bottom={"at the University of Gloucestershire"} color="white"/>
            <section className="executive-section ">
            <div className="padding-block-end">
                <img src={props.photo} className="content-border"/>
            </div>
            <div className="padding-block-end column-gap-40 executive-column content-padding col-2-fr-1 white">
                <div>
                    <h1 className="h1">{props.firstTitle}</h1>
                    <p className="p"> {props.firstDesc} </p>
                    <button className="bg-white button">Watch Livestream </button>
                </div>
                <div>
                    <h1 className="h1"> {props.secondTitle}</h1>
                    <p className="p"> {props.secondDesc} </p>
                    <button className="bg-white button"> View Awards </button>
                </div>
            </div>
            </section>
        </div>
    )
}