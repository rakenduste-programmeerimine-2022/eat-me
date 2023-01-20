import React, {useState} from 'react';
import axios from "axios";

const RecipeUploader = () => {
    const [image, setImage] = useState('')
    function fileSelectedHandler(e){
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    function handleApi(){
        const formData = new FormData()
        formData.append('image', image)
        axios.post('./public/', formData).then((res)=> console.log(res))
    }

    return (
        <div>
            <input type="file" onChange={fileSelectedHandler}/>
            <button onClick={handleApi}>Submit</button>

        </div>
    );
};

export default RecipeUploader;