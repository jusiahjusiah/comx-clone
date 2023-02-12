import rightQuote from '../assets/right-quote.png'
import SignUp from './SignUp'
export default function Testimonials(props) {
const Cards = (reverse, type) => {
    if(reverse) {
        return(
            <>            
        <div className="content-border word-padding padding-inline-40 bg-white-smoke">
            <h1 className="p word-padding-top row-gap"> {props.testimonial} </h1>
            <div className="testimonial-occupation col-2-fr-1">
                <div>
                    <p className="p-occupation row-gap"><strong> {props.name} </strong></p>
                    <p className="p-occupation"> {props.title} </p>
                </div>
                <div className="row-gap">
                <img src={rightQuote}/>
                </div>
            </div>
        </div>
        <div className="peach-gradient content-border word-padding padding-inline-40">
            <h1 className="h1 word-padding-top row-gap"> {props.cardTitle} </h1>
            <p className="p"> {props.cardDesc} </p>
            <SignUp />
            <button className="bg-black-opaque button white"> {props.buttonTitle}</button>
        </div>

        </>
        )
    } else {
        return(
            <>
                <div className="yellow-gradient content-border word-padding padding-inline-40">
                <h1 className="h1 word-padding-top row-gap"> {props.cardTitle} </h1>
                <p className="p"> {props.cardDesc} </p>
                {/* contact-info section, hidden if type is not sign-up*/}
                <button className="bg-black-opaque button white"> {props.buttonTitle}</button>
            </div>
            <div className="green-solid content-border word-padding padding-inline-40 bg-white-smoke">
                <h1 className="p word-padding-top row-gap"> {props.testimonial} </h1>
                <div className="testimonial-occupation col-2-fr-1">
                    <div>
                        <p className="p-occupation row-gap"><strong> {props.name} </strong></p>
                        <p className="p-occupation"> {props.title} </p>
                    </div>
                    <div className="row-gap">
                    <img src={rightQuote}/>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

    return (
        <section className="testimonial-cards padding-inline">
            <div className="col-2-fr-1 row-gap">
                { Cards(props.reverseColumn, props.type)}
            </div>
        </section>
    )
}