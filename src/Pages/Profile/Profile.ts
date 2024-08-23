import styled from "styled-components";

export const ProfileMainSence = styled.div`
height: 740px;
gap: 0px;
border: 1px 0px 0px 0px;
opacity: 0px;
background: rgba(255, 255, 255, 1);
display:inline-flex;
justify-content: space-between;
`
export const ProfileNavbar = styled.div`
width: 320px;
height: auto;
gap: 0px;
opacity: 0px;
background: rgba(217, 217, 217, 1);
`
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
export const Logo = styled.div`
    width: 48.7px;
    height: 34.78px;
    margin-top: 32.93px;
    margin-left: 100px;
    gap: 0px;
    opacity: 0px;
    display: inline-flex;
    justify-content: space-between;
`;
export const PostDiv = styled.p`
width: 53px;
height: 32px;
top: 105px;
margin-left: 34px;
gap: 0px;
opacity: 0px;
font-family: Inter;
font-size: 20px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0.005em;
text-align: left;
color: rgba(33, 35, 83, 1);
`
export const LogoutDiv = styled.p`
width: 67px;
height: 32px;
top: 147px;
margin-left: 34px;
gap: 0px;
opacity: 0px;
font-family: Inter;
font-size: 20px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0.005em;
text-align: left;
color: rgba(33, 35, 83, 1);

`
export const AddNew = styled.button`
width: 252.45px;
height: 58.53px;
margin-top: 110px;
margin-left: 70px;
gap: 0px;
border-radius: 20px 20px 20px 20px;
opacity: 0px;
background-color: rgba(156,105,226,255);
border: 1px solid gray;
cursor: pointer;
`
export const TextButtonAdd = styled.p`
width: 94.35px;
height: 25.52px;
top: 135.73px;
margin-left: 90.3px;
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
export const SearchBox = styled.input`
width: 300px;
height: 49px;
margin-top: 110px;
margin-left: 200px;
gap: 0px;
border-radius: 10px 10px 10px 10px;
opacity: 0px;
background: rgba(253, 253, 253, 1);
border: 1px solid rgba(0, 0, 0, 1);
`
export const SearchBoxOption = styled.select`
width: 300px;
height: 49px;
margin-top: 110px;
margin-left: 40px;
gap: 0px;
border-radius: 10px 10px 10px 10px;
opacity: 0px;
background: rgba(253, 253, 253, 1);
border: 1px solid rgba(0, 0, 0, 1)
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Dialog = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
`;

export const DialogHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DialogBody = styled.div`
  margin-bottom: 20px;
`;

export const DialogFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background: #0056b3;
  }
`;