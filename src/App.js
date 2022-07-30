import style from '../src/style/todolist.module.css'
import './App.css';
import { useLayoutEffect, useState , useRef} from 'react'
// data
function App() {
  const type = 'radio';
  const easy = {
    id:1 , 
    text:'chưa cần'
  }
  const medium = {
    id:2 , 
    text:'cần'
  }
  const hard = {
    id:3 , 
    text:'cần thiết'
  }
  // const $$ = document.querySelectorAll.bind(document)
  const ivalues = [easy,medium,hard];
  const ivalue = ivalues.map(ivalue =>{
    return ivalue.text
   })
  const backgroudcolor = document.querySelector('#lever');
  const [ischecked,setchecked] = useState(1);
  const [isjob,setisjob] = useState();
  const [jobs,setjob] = useState([{
    data:'',
    id:'',
    text:''  
  }])
  // heandle
  const heandleclick = ()=>{
    setjob([...jobs,{data:isjob,id:ischecked,text:ivalue}]);
    switch(ischecked){
      case 1:
        backgroudcolor.classList.add('green')
      break
      case 2:
        backgroudcolor.classList.add('yellow')
      break
      case 3:
        backgroudcolor.classList.add('red')
      break
      default:new Error('co gi do say ra vui long kiem tra laij')
    }
    return jobs
  };


  return (
    <div id={style.todo_block} >
      <span id={style.heandle_text}>To do list react basic</span>
      <input id={style.input_add}
        placeholder='Việc cần làm'
        onChange={e =>setisjob(e.target.value)}
        
      />
      <div id={style.input_block}> 
      <ul id={style.type_block}>
        {ivalues.map((ivalue,index)=>{
           return <li key={index} id={style.type_li}>
            <input 
              checked={ischecked === ivalue.id}
              onChange={()=>{setchecked(ivalue.id)}}
              type={type}/>{ivalue.text}
            </li>
        })}
      </ul>
      <button onClick={heandleclick} id={style.headle_click}>Xác Nhận</button>     
      </div>
      <span id={style.note}>Note :</span>
      <ul id={style.note_block}>
        {jobs.map((job,index)=>{
          return(
            <li key={index} id={style.note_text}>
                <span id={style.text_note}>{job.data}</span>
                <div id='lever' className={style.lever_block}>{job.text[job.id-1]}</div>
                <ion-icon id={style.icon_close} name="close-circle-outline"></ion-icon>
              </li> 
          ) 
        })}
      </ul>
    </div>
  );
}

export default App;
