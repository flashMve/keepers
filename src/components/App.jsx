import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import React,{useState} from 'react'



function App() {
    const [notes,setNotes] = useState([]);

    function onClick(data){
        setNotes(prevState=>([...prevState,data]))
    }

    function onDelete(index){
        setNotes(prevState=>{
            return prevState.filter((value,i)=>{ return index!==i;});
        })
    }

  return (
    <>
      <Header></Header>
      <CreateNote  onTap={onClick}/>
      <div className="mainBody">
        {notes.map((note,index) => (
          <Note key={index} id={index} title={note.title} content={note.content} delete={onDelete} />
        ))}
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
