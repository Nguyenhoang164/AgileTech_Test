import { useFormik } from "formik";
import { ButtonLogin,InputUserName,UserNameDiv,SigntIn,MainScreen,Retangle, Logo, TextStyle , Square} from "./styleLogin.ts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const formLogin = useFormik({
        initialValues:{
            username:""
        },onSubmit: async(value) =>{
            if(value == "" || value == null){
                return;
            }else{
              axios.post("https://api-test-web.agiletech.vn/auth/login/",value).then(res =>{
                if(res != 401){
                    sessionStorage.setItem("accessToken",res.data.accessToken);
                    sessionStorage.setItem("refreshToken",res.data.refreshToken);
                    navigate("/");
                }
              })
            }
        }
    }
)
    return(
        <>
        <MainScreen>
            <Logo>
                <Square>
                </Square>
                <Retangle>
                </Retangle>
            </Logo>
            <SigntIn>Sign In</SigntIn>
            <UserNameDiv>Username</UserNameDiv>
            <form onSubmit={formLogin.handleSubmit}>
             <InputUserName id="username" name="username" onChange={formLogin.handleChange} required></InputUserName>
            <ButtonLogin type="submit">Sign In</ButtonLogin>
            </form>
        </MainScreen>
        </>
    )
}
export default Login;