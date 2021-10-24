import React , {useState,useEffect,useRef,useContext} from 'react'
import useMousePosition from '../hooks/useMousePosition'
import { ThemeContext } from '../App'

const LikeButton: React.FC = () =>{
//    const [obj, setObj] = useState({like:0,on:true})
   const [like, setLike] = useState(0)
   const likeRef = useRef(0)
   const didMountRef = useRef(false)
   const domRef = useRef<HTMLInputElement>(null) // 绑定dom节点
   const [on, setOn] = useState(true)
   const positions = useMousePosition()
   const theme = useContext(ThemeContext)
   const style = {
       background: theme.background,
       color: theme.color
   }

   useEffect(()=>{
       document.title=`点击了${like}次`
   },[like])
   useEffect(()=>{
       if(didMountRef.current){
           console.log('this is updata');
       }else{
           didMountRef.current =true
       }
   })
   useEffect(()=>{
       if(domRef && domRef.current) {
           domRef.current.focus()
       }
   })
   function handleAlertClick() {
       setTimeout(()=>{
           alert('you click on ' + likeRef.current)
       },3000)
   }
   return (
       <>
       <input type="text" ref={domRef}/>
        <p>X:{positions.x},Y:{positions.y}</p>
       <button style={style} onClick={()=>{setLike(like+1);likeRef.current++}}>
           {like}👍
       </button>
       <button onClick={handleAlertClick}>alert</button>
       <button onClick={()=>{setOn(!on)}}>
           {on ? 'ON' : "OFF"}
       </button>
       </>
   )
}
export default LikeButton