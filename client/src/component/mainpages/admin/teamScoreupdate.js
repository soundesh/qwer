import React,{useContext,useState} from 'react'
import axios from 'axios'
import TeamEdit from './teamEdit'
import {GlobalState} from '../../../GlobalState'
import IplTable from '../IplTable'
import './teamScore.css'

const TeamScoreupdate = () => {
  const State = useContext(GlobalState)
  const token=State.token[0]

  const [Img,setImg]=useState()
  const[Points,setPoints]=useState({
      team:'',match:'',winings:'',lose:'',score:'',overs:''
  })


const [del,setDel]=useState({
    deleteteam:''
})
const [Imger,setImger]=useState({
  teamer:'',description:''
})



  const onChangeInput = e =>{
    const {name, value} = e.target;
    setPoints({...Points, [name]:value})
}

const  onChangeDelete=e=>{
    const {name,value}=e.target
    setDel({...del,[name]:value})
}

const onChangeImg = e =>{
  const {name,value}=e.target
  setImger({...Imger,[name]:value})
}
const IMgupload=e=>{
  const file = e.target.files[0];
      setImg(file)
}

const IMguploadSubmit = async e =>{
  e.preventDefault()
console.log(Img)
    const formData= new FormData();
    formData.append('image',Img);

    formData.append('teamer',Imger.teamer);
    formData.append('description',Imger.description);
    // axios.post('/files', data)...
console.log(formData.getAll('teamer'))
try {
await axios.post('/app/iplteam/image',formData,{
  headers: {Authorization: token,"Content-Type": "multipart/form-data"}
})

  } catch (err) {
      alert(err.response.data.msg)
  }

}

const teamDelete =async e =>{
    e.preventDefault()
    
    try {

        axios.delete('/app/iplteam/get', {
            headers: {
              Authorization: token,
            },
            data: {
              ...del,
            },
          });
        // await axios.delete('/app/iplteam/get',{
        //   headers: {Authorization: token},{...del})
      
          } catch (err) {
              alert(err.response.data.msg)
          }
}
const UpdateSubmit = async e =>{
    e.preventDefault()
try {
  await axios.put('/app/iplteam/get',{...Points},{
    headers: {Authorization: token}
  })

    } catch (err) {
        alert(err.response.data.msg)
    }
}

  return (
    <div className='teamUpdate'>

    <div>
    <h1>table points</h1>
        <IplTable/>

    <h1>update team</h1>
    <form id='exit' onSubmit={UpdateSubmit} >
    <label htmlFor="team">team</label>
    <input type="text" name="team" required
    placeholder="team" value={Points.team} onChange={onChangeInput} />

    
<label htmlFor="match">totalmatchs</label>
     <input type="text" name="match" required
    placeholder="match" value={Points.match} onChange={onChangeInput} />

    
    <label htmlFor="winings">winings</label>
     <input type="number" name="winings" required
    placeholder="winings" value={Points.winings} onChange={onChangeInput} />
    <br></br>
    
    
    <label htmlFor="lose">lose</label>
    <input type="number" name="lose" required
    placeholder="lose" value={Points.lose} onChange={onChangeInput} />
    

    <label htmlFor="score">score</label>
    <input type="text" name="score" required
    placeholder="score" value={Points.score} onChange={onChangeInput} />
    
    <label htmlFor="overs">overs</label>
    <input type="text" name="overs" required
    placeholder="totalovers appxmate" value={Points.overs} onChange={onChangeInput} />
    
    <button type="submit" name="action" value="save">update</button>
    </form>
    </div>
    <TeamEdit />

    <h1>delete team</h1>
    <form id='exit' onSubmit={teamDelete}>
        <label htmlFor="delete">team name</label>
        <input type="text" name="deleteteam" required
        placeholder="team name enter" value={del.deleteteam} onChange={onChangeDelete} />
        <button type="submit" name="action" value="exit">delete</button>
    </form>



        <h1>image upload for team description</h1>
      <form id='exit' onSubmit={IMguploadSubmit}>
            <label htmlFor="file">image file</label>
            <input type="file" name="file" required
            placeholder="upload imag"  onChange={IMgupload } />

          <label htmlFor="teamer">team</label>
          <input type="text" name="teamer" required
          placeholder="team" value={Imger.teamer} onChange={onChangeImg} />


          <label htmlFor="description">description about team</label>
          <textarea type="text" name="description"  required
            value={Imger.description}rows="5" onChange={onChangeImg}  />

          <button type="submit" name="action" value="exit">image uploading</button>
      </form>
        </div>
  )
}

export default TeamScoreupdate