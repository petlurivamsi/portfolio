import "../about/about.css"
import Award from "../../img/award.png" 

const About = () => {
    return (
        <div className="a">
                <div className="a-left">
                        <div className="a-card bg"></div>
                        <div className="a-card">
                            <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                            alt=""
                            className="a-img"/>
                        </div>
                </div>
                <div className="a-right">
                        <h1 className="a-title">About Me</h1>
                        <p className="a-sub">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className="a-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi maxime quam, deleniti mollitia est culpa ad, dolor laudantium, at optio eum necessitatibus natus rerum? Qui commodi odit suscipit neque sequi hic, molestiae totam, vero fugiat omnis aperiam, 
                        </p>

                        <div className="a-award">
                            <img src={Award} alt="" className="a-award-img"/>
                            <div className="a-award-texts">
                                <h4 className="a-award-title">International Student Of Ultimate Talent</h4>
                                <p className="a-award-desc">
                                   God is great!!
                                   </p>
                            </div>
                        </div>

                </div>
        </div>
    )
}

export default About
