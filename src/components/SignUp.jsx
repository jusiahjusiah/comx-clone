
export default function SignUp(props) {
    // applying styles to components
    return (
    <div className='contact-sign-up'>
        <div>
            <p> Name </p>
            <input type="text" id="comment" name="name"placeholder='Name'/>
        </div>
        <div>
            <p> Email </p>
            <input type="text" id="comment" name="email"placeholder='Email'/>
        </div>
        <div></div>
    </div>
    )
}