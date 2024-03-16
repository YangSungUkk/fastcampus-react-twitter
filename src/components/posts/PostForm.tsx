import AuthContext from "context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import { useContext, useState } from "react";
import { FiImage } from "react-icons/fi";
import { toast } from "react-toastify";


export default function PostForm(){
    const [content, setContent] = useState<string>("");
    const { user } = useContext(AuthContext);
    const handleFileIpload = () => {

    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
    
        try {
          await addDoc(collection(db, "posts"), {
            content: content,
            createdAt: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
            uid: user?.uid,
            email: user?.email,
          });
          setContent("");
          toast.success("게시글을 생성했습니다.");
        } catch (e: any) {
          console.log(e);
        }
      };

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {
          target: { name, value },
        } = e;
    
        if (name === "content") {
          setContent(value);
        }
      };
    return(        
        <form className="post-form" onSubmit={onSubmit}>
        <textarea
            className="post-form__textarea"
            required
            name="content"
            id="content"
            placeholder="What is happening"
            onChange={onChange}
            value={content}
        />
        <div className='post-form__submit-area'>
            <label htmlFor="file-input" className='post-from__file'>
                <FiImage className='post-form__file-icon' />
            </label>
            <input type="file" name='file-input' accept='image/*' onChange={handleFileIpload} className='hidden' />
            <input type="submit" value="Tweet" className='post-form__submit-btn' />
        </div>
    </form>
    )
}