import { useDispatch, useSelector } from "react-redux";
import { Postadd, Postdelete, PostRedact } from "../../store/PostCRUT/postCrutSlice";
import './Crut.css'

export default function Crut() { 
    const PostsValue = useSelector((state) => state.posts);
    const dispatch = useDispatch()

    return (

        <div className="crut_container">
            
            <div className="crut_wrapper">
                <h2>Настройка Магазина :</h2>
                <div className="crut_posts">
            {PostsValue ? PostsValue.map((post,idx) => (
                <div className="crut_post_container" key={idx}>
                    <div className="crut_text_container">
                 <p className="title">Тип : {post ? post.title : null}</p> 
                  <p className="body">Название : {post ? post.body : null}</p> 
                  <p className="price"> Цена : {post ? post.price : null}</p> 
                  </div>
                <div className="crut_post_buttons">
                    <button className="delete" style={{display : post ? 'inline-block' : 'none'}} onClick={() => dispatch(Postdelete(idx))}>
                    delete
                   </button>
                
                <button className="redact" style={{display : post ? 'inline-block' : 'none'}} onClick={()=> dispatch(PostRedact(idx))}>
                    redact
                </button>
                </div>
                </div>
            )) : null}
            
            <div>
                <button className="add" onClick={()=> dispatch(Postadd())}>
                    add
                </button>
            </div>
            </div>
            </div>
        </div>
    )
}