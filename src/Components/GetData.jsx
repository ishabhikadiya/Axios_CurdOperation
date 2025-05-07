import { useState } from "react"
import { deletePost, editPost, getPost } from "../API/PostApi"
import { useEffect } from "react";
import { Form } from "./Form";

export const GetData = () => {

    const [data, setData] = useState([]);    
    const [updateDataApi, setUpdateDataApi] = useState({});    

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

    const handleOnEdit = (curElem) => {
        setUpdateDataApi(curElem);
    }   
    

        // const res = await editPost(id);
        // const editData = data.find((curElem) => curElem.id === res.id);
        // console.log(editData);
        // setData((prev) => prev.map((curElem) => curElem.id === id ? { ...curElem, title:curElem.title, body:curElem.body } : curElem));
    

    return (
        <>
        <Form data={data} 
              setData={setData} 
              setUpdateDataApi={setUpdateDataApi}
              updateDataApi={updateDataApi}
              />
            {data.map((curElem) => {
                const { id, title, body } = curElem;
                return (
                    <>
                        <li key={id}>
                            <h1>{title}</h1>
                            <h1>{body}</h1>
                            <button onClick={() => handleOnDetete(id)}>Delete</button>
                            <button onClick={() => handleOnEdit(curElem)}>Edit</button>
                        </li>
                    </>
                )
            }
            )}
        </>
    )
}