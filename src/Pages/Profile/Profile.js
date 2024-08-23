import { useEffect, useState } from "react";
import {Button,DialogFooter,DialogBody,DialogHeader,Dialog,Overlay,ProfileMainSence,ProfileNavbar,Logo,Square,Retangle,PostDiv,LogoutDiv,AddNew,TextButtonAdd,SearchBox,SearchBoxOption} from "./Profile.ts"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
function Profile(){
    const [posts, setPosts] = useState([]);
    const [idPost,setPostId] = useState();
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [IsOpenEdit, setIsOpenEdit] = useState(false);
    var token = sessionStorage.getItem("accessToken");
    const openDialog = () => {
      setIsOpen(true);
    };
  
    const closeDialog = () => {
      setIsOpen(false);
    };
    const openDialogEdit = (id) =>{
      setPostId(id);
      BlogsEditForm.setFieldValue("id",idPost);
      console.log(idPost)
      setIsOpenEdit(true);
    }
    const closeDialogEdit = () =>{
      setIsOpenEdit(false);
    }
   
    console.log(token);
    var refreshToken = sessionStorage.getItem("refreshToken");
    const PageNumber = useFormik({
        initialValues:{
            id:"",
            title:"",
            page:1,
            tags:[
                ""
            ]
        },onSubmit : async (values)=>{
          axios.get(`https://api-test-web.agiletech.vn/posts?page=${PageNumber.values.page}&title=${values.title}&tags=${values.tags}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }      
    }).then(res =>{
        if(res != "Unauthorized"){
            setPosts(res.data.posts);
            navigate("/profile");
        }else{
        if(res = 401){
            axios.get("https://api-test-web.agiletech.vn/auth/refresh-token",refreshToken).then(res =>{
                sessionStorage.clear();
                sessionStorage.setItem("accessToken",res.data.accessToken);
                sessionStorage.setItem("refreshToken",res.data.refreshToken);
            });
            axios.get("https://api-test-web.agiletech.vn/post",{
                headers: {
                  'Authorization': `Bearer ${token}`
                }      
        }).then(res =>{
            setPosts(res.data.posts);
            navigate("/profile");
        })
        }}
    })
        }
    })
    const BlogsForm = useFormik({
      initialValues:{
        title:"",
        description:"",
        tags:[
          ""
        ]
      },
      onSubmit : async(values) =>{
        console.log(values)
        axios.post("https://api-test-web.agiletech.vn/posts",values,{
          headers: {
            'Authorization': `Bearer ${token}`
          }      
  }).then(res =>{
    closeDialog();
    window.location.reload("/profile");
  })
      }
    })
    const BlogsEditForm = useFormik({
      initialValues:{
        id:"",
        title:"",
        description:"",
        tags:[
          ""
        ]
      },
      onSubmit : async(values) =>{
        console.log(values.tags);
        const tagsArray = values.tags.split(',').map(tag => tag.trim());
        values.tags = tagsArray;
        axios.patch(`https://api-test-web.agiletech.vn/posts/${idPost}`,values,{
          headers: {
            'Authorization': `Bearer ${token}`
          }      
  }).then(res =>{
    closeDialogEdit();
    window.location.reload("/profile");
  })
      }
    })



    const UpPage = () =>{
      PageNumber.setFieldValue("page", PageNumber.values.page + 1);
      console.log(PageNumber.values.page)
      axios.get(`https://api-test-web.agiletech.vn/posts?page=${PageNumber.values.page+1}&title=${PageNumber.values.title}&tags=${PageNumber.values.tags}`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }      
}).then(res =>{
    if(res != "Unauthorized"){
        setPosts(res.data.posts);
        navigate("/profile");
    }else{
    if(res = 401){
        axios.get("https://api-test-web.agiletech.vn/auth/refresh-token",refreshToken).then(res =>{
            sessionStorage.clear();
            sessionStorage.setItem("accessToken",res.data.accessToken);
            sessionStorage.setItem("refreshToken",res.data.refreshToken);
        });
        axios.get("https://api-test-web.agiletech.vn/post",{
            headers: {
              'Authorization': `Bearer ${token}`
            }      
    }).then(res =>{
        setPosts(res.data.posts);
        navigate("/profile");
    })
    }}
})
    }
    const LowerPage = () =>{
      if(PageNumber.values.page > 1){
      PageNumber.setFieldValue("page", PageNumber.values.page - 1);
      console.log(PageNumber.values.page)
      axios.get(`https://api-test-web.agiletech.vn/posts?page=${PageNumber.values.page-1}&title=${PageNumber.values.title}&tags=${PageNumber.values.tags}`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }      
}).then(res =>{
    if(res != "Unauthorized"){
        setPosts(res.data.posts);
        navigate("/profile");
    }else{
    if(res = 401){
        axios.get("https://api-test-web.agiletech.vn/auth/refresh-token",refreshToken).then(res =>{
            sessionStorage.clear();
            sessionStorage.setItem("accessToken",res.data.accessToken);
            sessionStorage.setItem("refreshToken",res.data.refreshToken);
        });
        axios.get("https://api-test-web.agiletech.vn/post",{
            headers: {
              'Authorization': `Bearer ${token}`
            }      
    }).then(res =>{
        setPosts(res.data.posts);
       navigate("/profile");
    })
    }}
})
      }else{
        return;
      }
    }
    const deletePost = (id) =>{
      axios.delete(`https://api-test-web.agiletech.vn/posts/${id}`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(res=>{
        window.location.reload("/profile")
    })};

    const Logout = () =>{
        axios.delete("https://api-test-web.agiletech.vn/auth/logout",{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then(res =>{
            sessionStorage.clear();
          navigate("/")
        })
      }
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
          PageNumber.handleSubmit(); // Submit form
        }
      };
    useEffect(() =>{
      
        axios.get(`https://api-test-web.agiletech.vn/posts?page=${PageNumber.values.page}&title=${PageNumber.values.title}&tags=${PageNumber.values.tags}`,{
                headers: {
                  'Authorization': `Bearer ${token}`
                }      
        }).then(res =>{
            if(res != "Unauthorized"){
                setPosts(res.data.posts);
            }else{
            if(res = 401){
                axios.get("https://api-test-web.agiletech.vn/auth/refresh-token",refreshToken).then(res =>{
                    sessionStorage.clear();
                    sessionStorage.setItem("accessToken",res.data.accessToken);
                    sessionStorage.setItem("refreshToken",res.data.refreshToken);
                });
                axios.get("https://api-test-web.agiletech.vn/post",{
                    headers: {
                      'Authorization': `Bearer ${token}`
                    }      
            }).then(res =>{
                setPosts(res.data.posts);
            })
            }}
        });
        axios.get("https://api-test-web.agiletech.vn/posts/tags",{
          headers: {
            'Authorization': `Bearer ${token}`
          }      
  }).then(res =>{
      console.log(res.data)
      setTags(res.data)
  })
    },[])
    console.log(posts);
    return(
        <>
          <ProfileMainSence>
             <ProfileNavbar>
                 <Logo> 
                    <Square></Square>
                    <Retangle></Retangle>
                 </Logo>
                <Link to={"/"}><PostDiv>Posts</PostDiv></Link> 
                 <LogoutDiv onClick={() => Logout()}>Logout</LogoutDiv>
             </ProfileNavbar>
                <AddNew onClick={() => openDialog()}>
                <TextButtonAdd>Add new</TextButtonAdd>
                </AddNew>
                <form onSubmit={PageNumber.handleSubmit}>
                <SearchBox id="title" onKeyDown={handleKeyDown} name="title" onChange={PageNumber.handleChange} placeholder="Tilte"></SearchBox>
                <SearchBoxOption id="tags" onKeyDown={handleKeyDown} name="tags" onChange={PageNumber.handleChange}>
                    <option value="">Tags</option>
                    {tags.map(item =>(
                      <option value={item}>{item}</option>
                    ))}
                </SearchBoxOption>
                </form>
                <div style={{
                    position:"absolute",marginLeft:"400px",marginTop:"200px"}}>
                    <table style={{width:"1100px"}}>
                        <tr style={{backgroundColor:" rgba(217, 217, 217, 1)"}}>
                           <th>ID</th>
                           <th>Tilte</th>
                           <th>Description</th>
                           <th>Tags</th>
                           <th>Actions</th>
                        </tr>
                        {posts.map((item, index) => (
                           <tr style={{backgroundColor:" rgba(217, 217, 217, 1)"}} key={index}>
                             <td>{index + 1}</td>
                             <td>{item.title}</td>
                             <td>{item.description}</td>
                             <td>
                             {Array.isArray(item.tags) 
                                   ? item.tags.join(", ") // Nếu là mảng, join các phần tử lại
                                       : typeof item.tags === 'string'
                                   ? item.tags // Nếu là chuỗi đơn lẻ, hiển thị trực tiếp
                                        : '' // Nếu không có giá trị (null, undefined, hoặc không phải mảng và chuỗi), hiển thị rỗng
  }
  </td>
                             <td style={{marginLeft:"20px",marginRight:"20px",display:"inline-flex"}}>
                             <button style={{ cursor: "pointer",border: "none", outline: "none", background: "transparent" }} onClick={() => openDialogEdit(item.id)}><MdEdit /></button>
                             <button style={{ cursor: "pointer",border: "none", outline: "none", background: "transparent" }} onClick={() => deletePost(item.id)}><FaTrash /></button>
                             </td>
                           </tr>
))}
                    </table>
                    <div style={{marginLeft:"1000px",display:"inline-flex",justifyContent:"space-around",height:"20px",marginTop:"20px"}}>
                      <button onClick={() => LowerPage()}  style={{marginLeft:"10px",marginRight:"10px"}}>-</button>
                       <button disabled>{PageNumber.values.page}</button>
                      <button onClick={() =>UpPage()} style={{marginLeft:"10px",marginRight:"10px"}}>+</button>
                    </div>
                </div>
                {isOpen && (
        <Overlay>
          <Dialog>
            <DialogHeader>Create Blog</DialogHeader>
            <form onSubmit={BlogsForm.handleSubmit}>
            <DialogBody>
              <p>Title</p>
              <input type="text" width={"100px"} placeholder="enter tilte" onChange={BlogsForm.handleChange} id="title" name="title"></input>
              <p>Description</p>
              <input type="text" width={"100px"} placeholder="enter description" onChange={BlogsForm.handleChange} id="description" name="description"></input>
              <p>Tags</p>
              <select id="tags" onKeyDown={handleKeyDown} name="tags" onChange={BlogsForm.handleChange}>
                    <option value="">Tags</option>
                    {tags.map(item =>(
                      <option value={item}>{item}</option>
                    ))}
                </select>
            </DialogBody>
            <DialogFooter>
              <Button onClick={closeDialog}>Close</Button>
              <Button type="submit">Create</Button>
            </DialogFooter>
            </form>
          </Dialog>
        </Overlay>
      )}
      {IsOpenEdit &&(
            <Overlay>
            <Dialog>
              <DialogHeader>Update Blog</DialogHeader>
              <form onSubmit={BlogsEditForm.handleSubmit}>
              <DialogBody>
                <p>Id</p>
                <input type="text" disabled value={idPost} width={"100px"} onChange={BlogsEditForm.handleChange} id="id" name="id"></input>
                <p>Title</p>
                <input type="text" width={"100px"} placeholder="enter tilte" onChange={BlogsEditForm.handleChange} id="title" name="title"></input>
                <p>Description</p>
                <input type="text" width={"100px"} placeholder="enter tilte" onChange={BlogsEditForm.handleChange} id="description" name="description"></input>
                <p>Tags</p>
                <select id="tags" onKeyDown={handleKeyDown} name="tags" onChange={BlogsEditForm.handleChange}>
                      <option value="">Tags</option>
                      {tags.map(item =>(
                        <option value={item}>{item}</option>
                      ))}
                  </select>
              </DialogBody>
              <DialogFooter>
                <Button onClick={closeDialogEdit}>Close</Button>
                <Button type="submit">Update</Button>
              </DialogFooter>
              </form>
            </Dialog>
          </Overlay>
      )}
          </ProfileMainSence>
        </>
    )
}
export default Profile;