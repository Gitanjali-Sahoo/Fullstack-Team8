// // function AboutUs() {
// //     return (
// //       <div className="container">
// //            <h1 className="aboutUs-title">About Us</h1>
// //   <div className="aboutUs-img">
// //   <img src='./src/images/AboutUs-img.jpeg' alt="navbar-logo " className="img-about"/>
// //   </div>
// //   <div>
// //   <p className="aboutUs-txt">Lorem ipsum dolor sit amet
// //    consectetur adipisicing elit. Incidunt, ducimus fugiat ametz
// //     odit aliquam ipsum et corrupti deleniti eum exercitationem?
// //      Consectetur quaerat harum officiis culpa repellat aliquid
// //       minus ratione eius dolor vitae incidunt qui
// //     tempora similique esse facilis, dolorum non.</p>
// //   </div>
// //       </div>
// //     )
// //   }

// //   export default AboutUs

// export const AboutUs = () => {
//      const container ={
// width: '60%',
// marginTop:'50px',
// // padding:'20px'
//     }

//     const gridContainer ={
// display: 'grid',
// gridTemplateColumns: 'repeat(3, 1fr)',
// // padding: '10px',
// gap: '30px',
//     }

//     const img={
//         width: '100%',
//         height: 'auto',
//     }

//   return (

//     <div className="container" style={container}>
//         <h2>About Us</h2>

//         <div >
//             We are agroup of FrontEnd-developers who designed and
//             programmed this store to make it
//             easier for customers to shop for a group of distinctive goods
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus!
//                 </div>

// <div className="grid-container" style={gridContainer}>
//      <div>  <img src="./src/images/pic.png" style={img} ></img>
//      <h5>Sara FrontEnd-developer</h5>
//      </div>

//     <div> <img src="./src/images/pic.png" style={img} ></img>
//     <h5 >Gitanijali FrontEnd-developer</h5>
//     </div>

//     <div><img src="./src/images/pic.png" style={img} ></img>
//     <h5>Shahad FrontEnd-developer</h5>
//     </div>
// </div>

//       </div>
//   )
// }

//  export default AboutUs

import styled from 'styled-components'

const AboutUsProps = () => {
    return (
        <DIV>
            <div className="container">
                <h2>{this.props.title}</h2>
                <div>{this.props.txt}</div>

                <div className="grid-container">
                    <div className="ourPhotos">
                        <img src={this.props.src} />
                        <p> {this.props.firstName} </p>
                    </div>

                    <div>
                        <img src={this.props.src} />
                        <p>{this.props.secondName}</p>
                    </div>

                    <div>
                        <img src={this.props.src} />
                        <p> {this.props.thirdName} </p>
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
