// import { useState } from 'react';
import './Items.css'
function AddItems(props){
    // function filt(){
    // let assign1=props.d.filter(d)=>{

    // }
    // }
    // const[previousgoal,setgoal]=useState("")

    // function deletefun(goalstore1){
    //     setgoal((previousgoal)=>{
    //         let deletactive=previousgoal.filter( props.title1 => props.expense.id !== goalstore1);
    //         return(deletactive)
    //     })
    // }
  

    return(
        <div>
            <div className='boxbg'>
            <h3 className='addtitle'>{props.title2}</h3>
            <button className='deletebtn' onClick={()=>props.deletefun(props.ab)} >Delete</button>

            </div>
                       
                                                                        

        </div>
    );
}
export default AddItems;