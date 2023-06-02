import styled from 'styled-components'
import PropTypes from 'prop-types'

const AboutUsProps = (props) => {
    AboutUsProps.propTypes = {
        src: PropTypes.string,
        firstName: PropTypes.string,
        secondName: PropTypes.string,
        thirdName:   PropTypes.string,
        title: PropTypes.string,
        txt: PropTypes.string

      }
    return (
        <DIV>
            <div className="container">
                <h2>{props.title}</h2>
                <div>{props.txt}</div>

                <div className="grid-container">
                    <div className="ourPhotos">
                        <img src={props.src} />
                        <p> {props.firstName} </p>
                    </div>

                    <div>
                        <img src={props.src} />
                        <p>{props.secondName}</p>
                    </div>

                    <div>
                        <img src={props.src} />
                        <p> {props.thirdName} </p>
                    </div>
                </div>
            </div>
        </DIV>
    )
}


const AboutUs = () => {
    return (
        <div className="container">
            <AboutUsProps
                title="About Us"
                txt="Welcome to Urban Tech, your ultimate destination for cutting-edge technology in an urban setting.
               We offer a wide range of premium laptops, smartphones, and headphones that seamlessly blend
                style and functionality. Designed by a team of passionate frontend developers, Urban Tech brings you
                 the latest tech gadgets with a touch of urban flair. Our mission is to provide a one-of-a-kind
                 shopping experience for tech enthusiasts and urban trendsetters. Explore our extensive collection
                  of laptops, catering to various needs from sleek and lightweight models for on-the-go professionals
                   to powerful gaming laptops. Our smartphones stand out with cutting-edge designs and options for all
                    budgets. Immerse yourself in crystal-clear audio with our curated selection of headphones. "
                src="./src/images/pic.png"
                firstName="Sara Leepark"
                secondName="Gitanjali Sahoo"
                thirdName="Shahad Adil"

                //    specialty='Frontend-Developer'
            />
        </div>
    )
}

export default AboutUs;

const DIV = styled.div`
    .container {
        width: 100%;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }

    img {
        width: 100%;
        height: auto;
        margin-top: 150px;
    }
`
