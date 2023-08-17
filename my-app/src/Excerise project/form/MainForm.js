import './Form.css'
import{useState} from "react"
function MainForm(props){
    const[name1,setname1]=useState("")
    const[vaild,invaild]=useState(true)

    function formtext(e){
        if(e.target.value.trim().length>0){
            invaild(true)
        }
        setname1(e.target.value)
    }

    
    function sub(e){
        e.preventDefault();
       if(name1.length === 0){
            invaild(false)
               return;
         }
        let getvalue={id:Math.random(), title1:name1};
        props.chvalue(getvalue)
        setname1('')
        // console.log(name1);
    }


    return(
        <div>
            <form className='formbg' onSubmit={sub}> 
            <div>
                <label className="title ">The Goal<br></br>
               <input type='textarea'className={`textarea ${vaild?"":"invaild1"}`} value={name1} onChange={formtext}></input>
                </label>
                <br></br></div>
                
                
                {/* <textarea className='textarea'></textarea> */}
                <button type="submit" className='addbtn'>Add Goal</button>
                
            </form>
        </div>
    )
}
export default MainForm;