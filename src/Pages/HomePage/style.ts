
import styled, { keyframes } from 'styled-components';
export const MainPage = styled.div`
width:1550px;
height: auto;
margin-left:-20px;
gap: 0px;
opacity: 0px;
background: rgba(255, 255, 255, 1);
`;

export const HeaderPage = styled.div`
width: 1120px;
position: absolute; 
height: 685.71px;
top: 30px;
left: 198px;
gap: 0px;
opacity: 0px;
`;

export const NavbarPage = styled.div`
width: 1119.7px;
height: 59.63px;
top: 48px;
left: 400px;
padding: 0px;
gap: 0px;
opacity: 0px;
display: inline-flex;
justify-content: space-between;
`;

export const HeaderlinePage = styled.div`
width: 640.99px;
height: 461.12px;
position: absolute; 
top: 140.82px;
gap: 0px;
border-radius: 50px 0px 0px 0px;
opacity: 0px;
   
`;

export const Logo = styled.div`
  width: 48.7px;
  height: 34.78px;
  margin-top: 15.93px;
  left: 400px;
  gap: 0px;
  opacity: 0px;
  display: inline-flex;
  justify-content: space-between;

`;

export const Button = styled.button`
width: 208.7px;
height: 59.63px;
gap: 0px;
border-radius: 50px 50px 50px 50px;
opacity: 0px;
background-color: rgba(156,105,226,255);
cursor: pointer;
border: 2px solid #e7e7e7;
box-shadow: 0px 5px 5px 0px rgba(75, 93, 104, 0.1);

`;

export const TextButton = styled.span`
    width: 59px;
    height: 26px;
    position: absolute;
    top: 66px;
    left: 1392px;
    gap: 0px;
    opacity: 0;
`;

export const TextStyle = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 25.6px;
    letter-spacing: 0.005em;
    text-align: left;
`;

export const Square = styled.div`
width: 19.88px;
height: 19.88px;
margin-top: 13px;
border-radius: 20px 20px 20px 20px;
opacity: 0px;
background: rgba(156, 105, 226, 1);
`;

export const Retangle = styled.div`
 width: 19.88px;
height: 34.78px;
gap: 0px;
border-radius: 20px 20px 20px 20px;
opacity: 0px;
background: rgba(240, 99, 184, 1);
`;
export const TextSignIn = styled.p`
width: 59px;
height: 26px;
top: 66px;
margin-left: 38.3%;
gap: 0px;
opacity: 0px;
font-family: Inter;
font-size: 16px;
font-weight: 700;
line-height: 25.6px;
letter-spacing: 0.005em;
text-align: left;
color: rgba(255, 255, 255, 1);
`
export const ContainerHeaderLine = styled.h1`
width: 640.99px;
height: 182.86px;
gap: 0px;
opacity: 0px;
font-family: Helvetica;
font-size: 80px;
font-weight: 700;
line-height: 88px;
text-align: left;
color: rgba(33, 35, 83, 1);

`
export const TextHeaderLine = styled.p`
width: 373.64px;
height: 119.25px;
top: 59.37px;
gap: 0px;
opacity: 0px;
font-family: Avenir;
font-size: 21px;
font-weight: 500;
line-height: 28.8px;
text-align: left;

`
export const ButtonHeaderLine = styled.button`
width: 168.94px;
height: 59.63px;
margin-top: 50.31px;
gap: 0px;
border-radius: 50px 50px 50px 50px;
opacity: 0px;
cursor: pointer;
background: rgba(156, 105, 226, 1);
border: 2px solid #e7e7e7;
`
export const TextButtonHeaderLine = styled.p`
width: 95.4px;
height: 28.82px;
margin-top: 15px;
margin-left: 20.3%;
gap: 0px;
opacity: 0px;
font-family: Avenir;
font-size: 18px;
font-weight: 800;
line-height: 28.8px;
text-align: center;
color: rgba(255, 255, 255, 1);
`
export const ImgHeaderLine = styled.image`
  width: 759.25px;
  height: 401.49px;
  top: 332.22px;
  gap: 0px;
  opacity: 0;
`
export const floatLeft = styled.div`
float:left;
`
export const floatRight = styled.div`
float:right;
`
export const BodyTop = styled.div`
width: 1120px;
height: 1010.41px;
top: 898px;
left: 198px;
gap: 0px;
opacity: 0px;
position: absolute; 
`
export const TitleBlogTop = styled.div`
  width: 575.12px;
  height: 100.57px;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 0px;
  opacity: 0px;
`;
export const TextTile = styled.h2`
width: 398.84px;
height: 51.21px;
top: 8  8px;
margin-left: 20%;
gap: 0px;
opacity: 0px;
font-family: Helvetica;
font-size: 40px;
font-weight: 700;
line-height: 52px;
text-align: center;
color: rgba(33, 35, 83, 1);
`
export const TextDesTile = styled.p`
width: 531.12px;
height: 57.12px;
margin-top: 50px;
gap: 0px;
margin-left:auto;
opacity: 0px;
font-family: Avenir;
font-size: 18px;
font-weight: 500;
line-height: 28.8px;
text-align: center;
color: rgba(75, 93, 104, 1);
`
export const Item1Blog = styled.div`
    width: 523.21px;
    height: 382.1px;
    padding-top: 20px;
    padding-left: 18.71px;
    gap: 0px;
    opacity: 0px;
`
export const ModalItem1Blog = styled.div`
  width: 530.28px;
  height: 352.56px;
  margin-top: 240.05px;
  margin-left: 95.64px;
 
`
export const ItemBlog = styled.div`
display:inline-flex;
justify-content:space-between;
flex-wrap:wrap;
 @media (min-width: 893px) and (max-width: 1150px) {
    flex-direction: column; /* Stack elements vertically */
    align-items: center; /* Center elements horizontally */
    justify-content: center; /* Center elements vertically */
    width: 100%; /* Adjust width to ensure elements are centered */
    height: auto; /* Adjust height to fit content */
  }
`
export const ItemTilteBlog1 = styled.h1`
    position: absolute;
    width: 196.96px;
    height: 49.24px;
    padding-top: 274.3px;
    margin-left: 264.03px;
    gap: 0px;
    font-family: Helvetica;
    font-size: 24px;
    font-weight: 400;
    line-height: 31.2px;
    text-align: left;
    color: rgba(33, 35, 83, 1);


`
export const  ItemTextBlog1= styled.p`
    position: absolute;
    width: 204.66px;
    height: 157.57px;
    padding-top: 333.3px;
    margin-left: 264.03px;
    gap: 0px;
    opacity: 0px;
    font-family: Avenir;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    text-align: left;
    color: rgba(75, 93, 104, 1);

`
export const ButtomBlog1 = styled.div`
display:inline-flex;
justify-content:space-between;
position: absolute;
width: 125.07px;
height: 25.6px;
padding-top: 333.3px;
margin-left: 264.03px;
gap: 0px;
opacity: 0px;
color: rgba(33, 35, 83, 1);
`
export const TextButtonBlog1 = styled.div`
    width: 85.68px;
    height: 25.6px;
    padding-top: 197px;
    left: 676.03px;
    gap: 0px;
    opacity: 0px;
    font-family: Avenir;
    font-size: 16px;
    font-weight: 800;
    line-height: 25.6px;
    letter-spacing: 0.005em;
    text-align: left;
    color: rgba(33, 35, 83, 1);
`
export const Arrow = styled.div`
width: 19.7px;
height: 13.79px;
top: 1454.41px;
left: 781.4px;
gap: 0px;
border: 2px 0px 0px 0px;
opacity: 0px;
border: 2px solid rgba(156, 105, 226, 1)
`
export const Item2Blog = styled.div`
    width: 536.01px;
    height: 388.57px;
    margin-top: 20.05px;
    margin-left: 10.99px;
    gap: 0px;
    opacity: 0px;

`
export const BodyDown = styled.div`
width: 1075px;
height: 710.27px;
margin-top: 2000px;
margin-left: 240px;
gap: 0px;
opacity: 0px;
background-color: rgba(156,105,226,255);
border-radius:50px;
 @media (min-width: 893px) and (max-width: 1150px) {
 margin-top: 3000px;
}
`
export const TitleBodyDown = styled.h1`
    width: 405.72px;
    height: 52.09px;
    padding-top: 94.19px;
    margin-left: 117.17px;
    gap: 0px;
    opacity: 0px;
    font-family: Helvetica;
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
`
export const ContentBodyDown = styled.div`
        width: 851.66px;
    height: 50%;
    margin-top: 93.45px;
    margin-left: 125px;
    gap: 0px;
    border-radius: 20px 20px 20px 20px;
    opacity: 0px;
    background: rgba(255, 255, 255, 1);
    box-shadow: -3px 20px 0px 0px rgb(89 55 136 / 30%);
}
`
const slide = keyframes`
  0% { transform: translateX(100%); opacity: 0; }
  10% { transform: translateX(0); opacity: 1; }
  90% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(-100%); opacity: 0; }
`;
export const GroupContentBodyDown = styled.div`
  width: 729.44px;
  height: 220.39px;
  margin-top: 52.55px;
  margin-left: 24.28px;
  gap: 0px;
  opacity: 0;  /* Start hidden */
  display: inline-flex;
  justify-content: space-between;
  transform: translateX(-100%); /* Start off-screen to the left */
  animation: ${slide} 5s ease-in-out infinite; /* Apply the slide-in-out animation */
`;
export const TextGroupContentBodyDown = styled.div`
       width: 556.11px;
    height: 200.36px;
    margin-top: -5.41px;
    margin-left: 110.61px;
    gap: 0px;
    opacity: 0px;
`
export const TextTileGroupContentBodyDown = styled.div`
width: 245.55px;
height: 51.09px;
margin-top: 23.59px;
gap: 0px;
opacity: 0px;
`
export const TextContent = styled.h1`
width: 245.55px;
height: 14.05px;
top: 2357.59px;
left: 767.61px;
gap: 0px;
opacity: 0px;
font-family: Avenir;
font-size: 19px;
font-weight: 900;
line-height: 28.8px;
letter-spacing: 0.005em;
text-align: left;
color: rgba(33, 35, 83, 1);

`
export const LinkTextContent = styled.p`
width: 145.89px;
height: 22.04px;
top: 2386.64px;
left: 767.61px;
gap: 0px;
opacity: 0px;
font-family: Avenir;
font-size: 16px;
font-weight: 500;
line-height: 22.4px;
letter-spacing: 0.01em;
text-align: left;
color: rgba(156, 105, 226, 1);

`
export const TextDesContent = styled.p`
width: 400.11px;
    height: auto;
    top: 2427.71px;
    left: 767.61px;
    gap: 0px;
    opacity: 0px;
    font-family: Avenir;
    font-size: 21px;
    font-weight: 400;
    line-height: 32.4px;
    text-align: left;
    color: rgba(75, 93, 104, 1);

`
export const ImgBox = styled.div`
width: 130px;
height: 90.16px;
top: 2337.55px;
left: 594.28px;
gap: 0px;
opacity: 0px;

`
export const HeaderLine = styled.hr`
width: 1600px;
height: 2px;
margin-top: 100px;
left: 160px;
gap: 0px;
opacity: 0.2px;
background: rgba(156, 105, 226, 1);

`
export const Footer = styled.div`
width: 1075px;
height: 510.27px;
margin-top: 20px;
margin-left: 230px;
gap: 0px;
opacity: 0px;
display: inline-flex;
    justify-content: flex-start;
`
export const FooterLeft = styled.div`
width: 270px;
height: 510.27px;
margin-top: 60px;
gap: 0px;
opacity: 0px;
`
export const TextFooterLogo = styled.h1`
    margin-left: 67px;
    position: absolute;
margin-top:-32px;
font-family: Avenir;
font-size: 20px;
font-weight: 900;
line-height: 32px;
text-align: left;
color: rgba(33, 35, 83, 1);
`
export const TextAddres = styled.p`
    width: 214.9px;
    height: 65.17px;
    margin-top: 42.97px;
    left: 400px;
    gap: 0px;
    opacity: 0px;
    font-family: Avenir;
    font-size: 16px;
    font-weight: 500;
    line-height: 28.8px;
    letter-spacing: 0.01em;
    text-align: left;
    color: rgba(33, 35, 83, 1);
    `
export const ContaninerLineHeader = styled.p`
    width: 176.9px;
    height: 60.16px;
    top: 3102.18px;
    left: 400px;
    gap: 0px;
    opacity: 0px;
    font-family: Avenir;
    font-size: 16px;
    font-weight: 400;
    line-height: 28.8px;
    letter-spacing: 0.01em;
    text-align: left;
    color: rgba(33, 35, 83, 1);

`
export const HeaderLinkPage = styled.p`
width: 273.97px;
height: 50.13px;
margin-top: 173.65px;
left: 400px;
gap: 0px;
opacity: 0px;
font-family: Avenir;
font-size: 12px;
font-weight: 400;
line-height: 21.6px;
letter-spacing: 0.01em;
text-align: left;
color: rgba(33, 35, 83, 1);

`
export const ListService = styled.div`
width: 166.45px;
    height: 220.59px;
    margin-top: 69.73px;
    margin-left: 140.28px;
    padding: 0px;
    gap: 0px;
    opacity: 0px;
`
export const TitleListService = styled.h1`
width: 100.89px;
height: 30.08px;
top: 2936.73px;
left: 876.28px;
gap: 0px;
opacity: 0px;
font-family: Avenir;
font-size: 16px;
font-weight: 900;
line-height: 25.6px;
text-align: left;
color: rgba(33, 35, 83, 1);
`
export const ItemListService = styled.ul`
    list-style: none;
    width: 166.45px;
    height: 220.59px;
    margin-top: 30.73px;
    /* margin-left: 187.28px; */
    padding: 0px;
    gap: 0px;
    opacity: 0px;
    font-family: Avenir;
    font-size: 16px;
    font-weight: 400;
    line-height: 40px;
    text-align: left;
    color: rgba(33, 35, 83, 1);
`
export const List1Service = styled.div`
    width: 166.45px;
    height: 220.59px;
    margin-top: 69.73px;
    margin-left: 38.28px;
    padding: 0px;
    gap: 0px;
    opacity: 0px;
`
export const List2Service = styled.div`
    width: 166.45px;
    height: 220.59px;
    margin-top: 69.73px;
    padding: 0px;
    gap: 0px;
    opacity: 0px;
`
export const SquareIcon = styled.ul`
    list-style: none;
    width: 186.45px;
    height: 220.59px;
    margin-top: 30.73px;
    display: inline-flex;
    justify-content: flex-start;
     position: absolute;

`
export const SquareBig = styled.div`
width: 40px;
height: 40px;
border-radius: 40px 40px 40px 40px;
opacity: 0px;
background:rgb(230 230 230);
 
`
export const TitleListService1 = styled.h1`
width: 100.89px;
height: 30.08px;
top: 2936.73px;
margin-left:53px;
gap: 0px;
opacity: 0px;
font-family: Avenir;
font-size: 16px;
font-weight: 900;
line-height: 25.6px;
text-align: left;
color: rgba(33, 35, 83, 1);
`