import RB_logo from '../assets/RB_logo.png'
import Card from './Card';
import Promovideo from '../assets/promovideo.mp4'
import { useAuth0 } from '@auth0/auth0-react';

// Main body of landing page broken down into four sections
const Home = () => {
    
    const {loginWithRedirect} = useAuth0()

    return ( 
        <div>
            {/* Section 1 containing title and image */}
            <section className='landing_section1'>
                <div className='section1_content'>
                    <h1 className='section1_header text-xl font-bold leading-8'>Manage Speakers <br></br>Seamlessly</h1>
                    </div>
                    <img src={RB_logo} alt='ResearchBookmark_logo' className='section1_logo'/> 
            </section>
            {/* Section 2 containing title and cards */}
            <section className='landing_section2'>
                <h2 className='section2_title'>Features</h2>
                    <div className="card-container">
                        {/* First Card */}
                        <Card
                            image={RB_logo}
                            title="Plan your event"
                            description="Description for Card 1."
                        />
                        {/* Second Card */}
                        <Card
                            image={RB_logo}
                            title="Invite the speakers"
                            description="Description for Card 2."
                        />
                        {/* Third Card */}
                        <Card
                            image={RB_logo}
                            title="Chat with your team"
                            description="Description for Card 3."
                        />
                    </div>
            </section>
            {/* Section 3 title and promo video */}
            <section className='landing_section3'>
                <div className="video-container">
                    <h2>Promotional Video</h2>
                    <p>description</p>
                    <video width="100%" controls autoPlay>
                        <source src={Promovideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
            {/* Section 4 with title and signup button */}
            <section className='landing_section4'>
                <video src='' className='m-1' /> 
                    <h3 className='section4_title font-bold m-2'>Register today!</h3>
                    <button className='access-button' onClick={() => loginWithRedirect()}>Sign up </button>
            </section>
        </div>
    )
}

export default Home;