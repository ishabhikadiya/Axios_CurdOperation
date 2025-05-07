import { addPost } from "../API/PostApi";
import { useEffect, useState } from "react";

export const Form = (props) => {

    const { data, setData, setUpdateDataApi, updateDataApi } = props;

    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    useEffect(() => {
        if (updateDataApi) {
            setAddData(updateDataApi);
        } else {
            setAddData({ title: "", body: "" });
        }
    }, [updateDataApi]);

    const handleOnChange = (e) => {

        const { name, value } = e.target;

        setAddData((prev) => ({ ...prev, [name]: value }))
        // setData(addData);
    }

    const addPostdata = async () => {

        const res = await addPost(addData);
        console.log(res);
        if (res.status === 201) {
            setData([...data, res.data]);
            setAddData({ title: "", body: "" });
        }

    }

    const handleOnsubmit = (e) => {
        e.preventDefault();

        console.log(addData);
        addPostdata();
    }

    return (
        <>
            <form action="" onSubmit={handleOnsubmit}>
                <input type="text" name="title" value={addData.title} onChange={handleOnChange} />
                <input type="text" name="body" value={addData.body} onChange={handleOnChange} />
                <button type="submit">Add</button>
            </form>
        </>
    )
}