
import { useNavigate } from "react-router-dom";
import imgPic from "./039cbccbb3a55ae069a3291f512521c8.png"

import { MainPage,SquareIcon,TitleListService1,SquareBig,List2Service,TitleListService,List1Service,ItemListService,ListService,HeaderLinkPage,ContaninerLineHeader,TitleBodyDown,TextAddres,TextFooterLogo,FooterLeft,Footer,ImgBox,HeaderLine,TextDesContent,TextContent,LinkTextContent,TextTileGroupContentBodyDown,TextGroupContentBodyDown,GroupContentBodyDown,ContentBodyDown,Item2Blog,BodyDown, HeaderPage,ModalItem1Blog,TextButtonBlog1,ItemTextBlog1,ItemTilteBlog1,ItemBlog,Item1Blog, NavbarPage,TextDesTile,BodyTop,TitleBlogTop,TextTile,ButtomBlog1, HeaderlinePage,floatLeft,floatRight, Logo,TextButtonHeaderLine, Button,TextSignIn,ContainerHeaderLine,TextHeaderLine,ButtonHeaderLine,ImgHeaderLine, TextStyle, Square, Retangle } from './style.ts'; 
import { useEffect, useState } from "react";
import axios from "axios";
function HomePage(){
  const [accessToken,setAccessToken] = useState();
  const [blog,setBlog] = useState([]);
  const navigate = useNavigate();
  const OppenLogin = () =>{
    navigate("/login");
  }
  const OppenProfile = () =>{
    navigate("/profile")
  }
  const Logout = () =>{
    axios.delete("https://api-test-web.agiletech.vn/auth/logout",{
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(res =>{
      navigate("/")
    })
  }
  useEffect(() =>{
    setAccessToken(sessionStorage.getItem("accessToken"));
    axios.get("https://api-test-web.agiletech.vn/galleries").then(res =>{
      setBlog(res.data);
      console.log(res.data)
    });
    
    
  },[]);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % blog.length);
      }, 15000); // Change slide every 5 seconds
  
      return () => clearInterval(interval);
    }, [blog.length]);
    console.log(accessToken);
    return(
        <>
         <MainPage>
             <HeaderPage>
                <NavbarPage>
                    <Logo>
                       <Square></Square>
                       <Retangle></Retangle>
                    </Logo>
           {accessToken == null || accessToken == "" ? (
                 <>
                     <Button onClick={() =>OppenLogin()}>
                        <TextSignIn>Sign In</TextSignIn>
                    </Button>
                 </>
           ):(<>
                    <Button style={{marginLeft:"700px"}} onClick={() =>OppenProfile()}>
                        <TextSignIn>Profile</TextSignIn>
                    </Button>
                    <Button onClick={() =>Logout()}>
                        <TextSignIn>Logout</TextSignIn>
                    </Button>
           </>)
           }
                   
                </NavbarPage>
                <HeaderlinePage>
                    <ContainerHeaderLine>Save your data storage here.</ContainerHeaderLine>
                    <TextHeaderLine>Data Warehouse is a data storage area that has been
tested for security, so you can store your data here
safely but not be afraid of being stolen by others.</TextHeaderLine>
                              <ButtonHeaderLine>
                                <TextButtonHeaderLine>Learn more</TextButtonHeaderLine>
                              </ButtonHeaderLine>
                </HeaderlinePage>
                <img src={imgPic} alt="Header Line" style={{position: "static",marginTop:"236px",marginLeft:"343px",width:"70%"}}/>
             </HeaderPage>  
           <BodyTop>
                 <TitleBlogTop>
                        <TextTile>Features</TextTile>
                        <TextDesTile>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</TextDesTile>
                 </TitleBlogTop>
                 <ItemBlog>
                   <Item1Blog>
                    <img src="https://s3-alpha-sig.figma.com/img/de39/7ca5/7ba1dda1fab4af707def69fa8e4d2a0b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgROVozTRArF~v44Z1KQAoMrPIEXL8mhdBGWLGApQjaF3K1thS4hSXI5822ri37Oo6TNAOhBUn~ucg72nW09HFXw~w234RucjD310~N0BqWo-19aHGS7F897~p8T0vKnUO9~zbV-v7mRCs-7w5KOkeEpjOwmBRLNIwLRZB32iSpKfjJgvul5e7wY3sVxfmrYD~kDZEb~SmfghnfFyAvB8zmVHovOzwmimYiE~DuiWuzbztLATvKvxd0UiuuV7Jms1eZYUyvaOPxYUYO8j8abO0c2aEEg2396kgjGGAiIXjj0wQ3oZTLkIx3oiUx60uGfs92wgWmeXB93mpdfaOoeTg__" style={{
                      position: "absolute",
                      width: "240.47px",
                      height: "207.79px",
                      gap: "0px",
                      opacity: "1px",
                      paddingTop:"305px"
                    }}/>
                    <ItemTilteBlog1>Search Data</ItemTilteBlog1>
                    <ItemTextBlog1>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time. </ItemTextBlog1>
                    <ButtomBlog1>
                      <TextButtonBlog1>Learn more</TextButtonBlog1>
                      <svg width="23" height="17" style={{paddingTop:"203px"}} viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0955 8.30774H1.39941" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </ButtomBlog1>
                    <ModalItem1Blog>
                    <svg width="427" height="354" viewBox="0 0 427 354" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.1" d="M43.8102 42.5833C47.8474 18.4944 68.6976 0.8479 93.1224 0.8479H376.999C404.614 0.8479 426.999 23.2337 426.999 50.8479V303.407C426.999 331.021 404.614 353.407 376.999 353.407H50.7941C19.8788 353.407 -3.62825 325.633 1.48182 295.142L43.8102 42.5833Z" fill="#2D9CDB"/>
</svg>
                    </ModalItem1Blog>
                   </Item1Blog>
                   <Item2Blog>
                   <img src="https://s3-alpha-sig.figma.com/img/4848/bd8b/6441ecd1919c84f36a65eabdc8138a2c?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=piknD1L2utHvrg7kfRB7veXpHn1Htk~fm3p9V67rw7r847aPVDZsEcYcB62eimQ-99fY73cQHj4cth06njXAzQrgbc-RX0IbkFMGdXRYd0-0Ab4AZRRwZV-S7DtJBRirga90BA8n83tE8507o0UhTPVyONpJipjKbLFDxsosRxrmizrnmxcEI8S4uQYmPCy0YWIvYmnSh1K8oXErI9B-eNsCcJIUgsVOvaj5DB1DbB0VPU4o7G5U13qoq5Uazq8ojJLISgcCAZmLSXM9p2ldXr0~cKJIwe3Tj1dyRFOusvS6jHSx7D2-36zaGRpO4w6KMm-mTFhNWqIzYXzaPYwSYQ__" style={{
                      position: "absolute",
                      width: "240.47px",
                      height: "207.79px",
                      gap: "0px",
                      opacity: "1px",
                      paddingTop:"266px"
                    }}/>
                     <ItemTilteBlog1>24 Hours Access</ItemTilteBlog1>
                     <ItemTextBlog1>Access is given 24 hours a full morning to night and
meet again in the morning, giving you comfort when
you need data when urgent. </ItemTextBlog1>
                    <ButtomBlog1>
                      <TextButtonBlog1>Learn more</TextButtonBlog1>
                      <svg width="23" height="17" style={{paddingTop:"203px"}} viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0955 8.30774H1.39941" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </ButtomBlog1>
                  <ModalItem1Blog>
                    <svg width="427" height="353" viewBox="0 0 427 353" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.1" d="M43.8112 41.784C47.8484 17.6951 68.6985 0.048584 93.1234 0.048584H377C404.615 0.048584 427 22.4343 427 50.0486V302.608C427 330.222 404.615 352.608 377 352.608H50.7951C19.8797 352.608 -3.62727 324.833 1.48279 294.343L43.8112 41.784Z" fill="#9C69E2"/>
</svg>

                  </ModalItem1Blog>
                   </Item2Blog>
                   <Item1Blog>
                   <img src="https://s3-alpha-sig.figma.com/img/cc12/c28f/2f3e743d08b2c66de2a7a23d4228df91?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPbhimwqqS7tQUkmj9lllTUrlamFiz71zMkq5rBgklWzbBw9hHjxXI660RRO2MRxewutfIfBZeACP1KzC3lVLgrm3L488pTWGiPckyNV5XSboDSfXw1~fZX5M1SGYYtgS6RLKfjUt5LcAyhKANbfjxAC4FniLJBfJzlr5AcCd6V0fYHzakRvOrl2HkVsLuFpRcHXqx1OH3e7V6lKJ8IGOcrkFr1VoiEljH5W-y69XzwE4ayeZrFh-DSDR5yYOUo5KKd3ydPYORvHgFVPnztSVgK8FhN3eEiGCZY5kg774kG1pxTLUg9XLMDmUv6XCDLpdczqA7bko49DN7sIW-WpnA__" style={{
                      position: "absolute",
                      width: "240.47px",
                      height: "207.79px",
                      gap: "0px",
                      opacity: "1px",
                      paddingTop:"356px"
                    }}/>
                    <ItemTilteBlog1>Print Out</ItemTilteBlog1>
                    <ItemTextBlog1>Print out service gives you convenience if someday
                    you need print data, just edit it all and just print it. </ItemTextBlog1>
                    <ButtomBlog1>
                      <TextButtonBlog1>Learn more</TextButtonBlog1>
                      <svg width="23" height="17" style={{paddingTop:"203px"}} viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0955 8.30774H1.39941" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </ButtomBlog1>
                    <ModalItem1Blog>
                      
                    <svg width="427" height="354" viewBox="0 0 427 354" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.1" d="M43.733 42.5833C47.7703 18.4944 68.6204 0.8479 93.0453 0.8479H376.922C404.536 0.8479 426.922 23.2337 426.922 50.8479V303.407C426.922 331.021 404.536 353.407 376.922 353.407H50.7169C19.8016 353.407 -3.7054 325.633 1.40467 295.142L43.733 42.5833Z" fill="#F063B8"/>
</svg>
                    </ModalItem1Blog>
                   </Item1Blog>
                   <Item1Blog>
                   <img src="https://s3-alpha-sig.figma.com/img/9b0c/ad9e/af78d7add1e7940c7af1b7f896b757e0?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vp-8WN0vX0McSJ6HsN9nqKSss-qDxHzSI9t-KnZfQhHiLEIs~nIRkufCe3Rf4~HIwrGxkyAeO4usaXxkiHM2Rjpt42OnmR4EKDitLUfJ~s6di8tntK2yIWPXpi-YTTQOGBXlV83nVPFz-M~S6xheQix6SLRXazc-rOH8lHn4BBDkvwz8d1Sof0081FrP73qaElDdP-ULizt0fyCyk3zXMXUEpd1xG-RdeVQf1wEPXV9YdgwaY35vyv3XgbeKyiO1~ALSdZyxE8uLeI4LPgEJFTnFnzUenBohcphvJtiHht1use6JXKer8QvCSPrKnz~dZ1EE-wuF0mfw4Iel7371~Q__" style={{
                      position: "absolute",
                      width: "240.47px",
                      height: "207.79px",
                      gap: "0px",
                      opacity: "1px",
                      paddingTop:"356px"
                    }}/>
                     <ItemTilteBlog1>Security Code</ItemTilteBlog1>
                     <ItemTextBlog1>Data Security is one of our best facilities. Allows for your files
to be safer. The file can be secured with a code or password that 
you created, so only you can open the file. </ItemTextBlog1>
<ButtomBlog1>
                      <TextButtonBlog1>Learn more</TextButtonBlog1>
                      <svg width="23" height="17" style={{paddingTop:"203px"}} viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0955 8.30774H1.39941" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </ButtomBlog1>
                    <ModalItem1Blog>
                    <svg width="427" height="354" viewBox="0 0 427 354" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.1" d="M43.8102 42.5833C47.8474 18.4944 68.6976 0.8479 93.1224 0.8479H376.999C404.614 0.8479 426.999 23.2337 426.999 50.8479V303.407C426.999 331.021 404.614 353.407 376.999 353.407H50.7941C19.8788 353.407 -3.62825 325.633 1.48182 295.142L43.8102 42.5833Z" fill="#2D9CDB"/>
</svg>
                    </ModalItem1Blog>
                   </Item1Blog>
                 </ItemBlog>
           </BodyTop>
              <BodyDown>
                <TitleBodyDown>Testimonials</TitleBodyDown>
            

                <ContentBodyDown>
                {blog.map((value, index) => (
        index === activeIndex && (
          <GroupContentBodyDown key={value.id}>
            <ImgBox>
              <img
                src={value.imageUrl}
                style={{
                  marginLeft: "62px",
                  position: "absolute",
                  width: "131.47px",
                  height: "104.79px",
                  marginTop: "-1px",
                  borderRadius: "100px/50px"
                }}
              />
            </ImgBox>

            <TextGroupContentBodyDown>
              <TextTileGroupContentBodyDown>
                <TextContent>John Fang</TextContent>
                <p />
                <LinkTextContent>wordfaang.com</LinkTextContent>
                <TextDesContent>{value.desctiption}</TextDesContent>
              </TextTileGroupContentBodyDown>
            </TextGroupContentBodyDown>
          </GroupContentBodyDown>
        )
      ))}
           
                </ContentBodyDown>
              </BodyDown>
              <HeaderLine></HeaderLine>
              <Footer>
                    <FooterLeft>
                      <Logo>
                       <Square></Square>
                       <Retangle></Retangle>
                     </Logo>
                     <TextFooterLogo>DataWarehouse</TextFooterLogo>
                     <TextAddres>Warehouse Society, 234 Bahagia Ave Street  PRBW 29281
 </TextAddres>
                     <ContaninerLineHeader>info@warehouse.project
                     1-232-3434 (Main)</ContaninerLineHeader>
                     <HeaderLinkPage>
                     © Datawarehouse™, 2020. All rights reserved.
                     Company Registration Number: 21479524.
                     </HeaderLinkPage>
                    </FooterLeft>
                    <ListService>
                           <TitleListService>About</TitleListService>
                           <ItemListService>
                            <li>Profile</li>
                            <li>Features</li>
                            <li>Careers</li>
                            <li>DW News</li>
                           </ItemListService>
                    </ListService>
                    <List1Service>
                           <TitleListService>Help</TitleListService>
                           <ItemListService>
                            <li>Support</li>
                            <li>Sign up</li>
                            <li>Guide</li>
                            <li>Reports</li>
                            <li>Q&A</li>
                           </ItemListService>
                    </List1Service>
                    <List2Service>
                    <TitleListService1>Social Media</TitleListService1>
                    <SquareIcon>
                      <li style={{marginLeft:"10px"}}><SquareBig></SquareBig></li>  
                      <li style={{marginLeft:"10px"}}><SquareBig></SquareBig></li>
                      <li style={{marginLeft:"10px"}}><SquareBig></SquareBig></li>
                    </SquareIcon>
                    </List2Service>
                    <svg width="61" style={{marginTop:"451px"}} height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.2" cx="30.9194" cy="30.7212" r="30.0806" fill="#9C69E2"/>
<path d="M15.8789 26.6836C15.8789 21.1607 20.3561 16.6836 25.8789 16.6836H35.9595C41.4823 16.6836 45.9595 21.1607 45.9595 26.6836V30.7481C45.9595 36.2709 41.4823 40.7481 35.9595 40.7481H15.8789V26.6836Z" fill="#9C69E2"/>
<circle cx="24.9038" cy="28.7158" r="2.00537" fill="white"/>
<circle cx="30.9204" cy="28.7158" r="2.00537" fill="white"/>
<circle cx="36.936" cy="28.7158" r="2.00537" fill="white"/>
<path d="M25.9058 39.7454H15.8789V42.2291C15.8789 43.7837 17.5748 44.7439 18.9079 43.9441L25.9058 39.7454Z" fill="#9C69E2"/>
</svg>

              </Footer>
        </MainPage>
        </>
    );
}
export default HomePage;