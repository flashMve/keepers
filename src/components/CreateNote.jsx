import React,{useState} from "react";

function CreateNote(props) {
    const [data,setdata] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name,value} = event.target;
        setdata(prevState=>({
            ...prevState,
            [name]:value
        }))
    }



  return (
    <>
      <div className="container">
        <input onChange={handleChange} type="text" name="title" className="title" placeholder="Title" maxLength={40} value={data.title}  />
        <textarea onChange={handleChange} name="content" rows="6" className="content" placeholder="Enter Content Here." value={data.content}></textarea>
        <div
       
        onClick={()=>{
            props.onTap(data);
            setdata({
                title:"",
                content:""
            });
        }} className="button">+</div>
      </div>
    </>
  );
}

export default CreateNote;
