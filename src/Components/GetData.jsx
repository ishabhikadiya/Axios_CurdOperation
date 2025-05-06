import { useState } from "react"
import { deletePost, getPost } from "../API/PostApi"
import { useEffect } from "react";
import { addPost } from "../API/PostApi";

export const GetData = () => {

    const [data, setData] = useState([]);

    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    const handleOnChange = (e) => {

        const { name, value } = e.target;

        setAddData((prev) => ({ ...prev, [name]: value }))
        // setData(addData);
    }

    const addPostdata = async() =>{
        
        const res =await addPost(addData);
        setData([...data,res.data])
        
    }

    const handleOnsubmit = (e) =>{
        e.preventDefault();  

        console.log(addData);
        addPostdata();
    }


    const getPostData = async () => {

        const res = await getPost();
        console.log(res);
        setData(res.data);

    }

    useEffect(() => {

        getPostData();

    }, []);

    const handleOnDetete = async (val) => {
        // console.log(val);
        // const res = await deletePost(id);
        const deleteddata = data.filter((curElem) => curElem.id != val);
        setData(deleteddata);
    }

    return (
        <>
            <form action="" onSubmit={handleOnsubmit}>
                <input type="text" name="title" value={addData.title} onChange={handleOnChange} />
                <input type="text" name="body" value={addData.body} onChange={handleOnChange} />
                <button type="submit">Add</button>
            </form>

            {data.map((curElem) => {
                const { id, title, body } = curElem;
                return (
                    <>
                        <li key={id}>
                            <h1>{title}</h1>
                            <h1>{body}</h1>
                            <button onClick={() => handleOnDetete(id)}>Delete</button>
                        </li>
                    </>
                )
            }
            )}
        </>
    )
}