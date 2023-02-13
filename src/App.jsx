import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ContentTitle from './components/ContentTitle'
import Content from './components/Content'
import Executives from './components/Executives'
import students from './assets/students.png'
import executives from './assets/executives.png'
import showcase from './assets/showcase.png'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div className="app-container">
      <Nav/>
      <Hero />
      {/* /* adds margin-block-end */}
      <ContentTitle 
        top={"Discover Game Technologies"} 
        bottom={"at the University of Gloucestershire"} 
        color={"black"}/>
      <div className='margin-block-end'>
      <Content 
        photo={students}
        title={"Welcome to COMX"} 
        description={"COMX is an incredible exhibition of digital projects spanning videogames, interactive technologies, animation, and art, all created by the talented students of the University of Gloucestershire’s School of Game Technologies."} 
        destination={"Students"} 
        destinationLink={"/"} 
        reverseColumn={false}/>

      <Content 
        photo={showcase} 
        title={"Final Year Showcase"} 
        description={"Check out what our final year students have been working on over the last few months. Each year, they group up and put their skills to the test by creating their own original projects."} 
        destination={"Showcase"} 
        destinationLink={"/"} 
        reverseColumn={true}/>
        </div>

      <Executives 
        photo={executives}
        firstTitle={"Tune in Online"}
        secondTitle={"Awarding Greatness"}
        firstDesc={"Even though COMX is going back to being in person again this year, the event will still be streamed online for anyone who can’t make it. Tune in for interviews with our final year students, trailers and live activities. Come and join in and have some fun."}
        secondDesc={"Every year we like to look back at the students who have gone above and beyond by handing out awards at COMX. Check out all of the categories and nominees here on the website. The winner for each category will be revealed at the end of COMX."}
        />

        <ContentTitle 
        top={"Get Involved"} 
        bottom={"Help Support Our Future"} 
        color={"black"}/>

        <Testimonials 
        cardTitle="This is the way" 
        cardDesc="Want to plan your route around the event? Well we’ve got you. Click the button below to view our floorplan." 
        testimonial="COMX has allowed us to find graduates we now have hired full-time onto our team. It truly showcases the talent of these graduates and I enjoy seeing all the different ideas and concepts the students present in a professional environment." 
        name="Oli Christie" 
        title="CEO of Neon Play" 
        buttonTitle="Floorplan" 
        buttonLink="/"
        reverseColumn={false} />

        <Testimonials 
        cardTitle="Stay in Touch" 
        cardDesc="Sign up to our newsletter to hear the latest news about COMX." 
        testimonial="Since I mooted the idea of a Creative Computing student exhibition of team projects in 2004, the students and staff have gone from slightly dubious compliance to enthusiastic collaboration! COMX has become a unique expression of the creative, technical and cooperative talents of University of Gloucestershire students and is a must for any forward-thinking employer considering recruitment." 
        name="Nina Reeves" 
        title="UI Consultant" 
        buttonTitle="Sign Up" 
        buttonLink="/"
        reverseColumn={true}
        type={"sign-up"}/>
      <div className='margin-block-end'></div>
    </div>
  )
}

export default App
