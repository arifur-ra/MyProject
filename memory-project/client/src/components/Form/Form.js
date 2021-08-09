import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/postsAction.js';
import useStyles from './Form.style.js';


 const Form = () => {
     const classes=useStyles()
     const dispatch = useDispatch()
     const [postData, setPostData] = useState({creator:'',title:'', message:'',tags:'',selectedFile:''})
     const handleSubmit = (e)=>{
         e.preventDefault()
         dispatch(createPost(postData))

     }
     const clear =()=>{
         
     }
    return (
        
           <Paper className={classes.paper}>
               <form autoComplete="off" noValidate className={` ${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6"> Creating a Memory</Typography>
                    <TextField name="creator" variant="outlined" label="creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator: e.target.value})}/>
                    <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})}/>
                    <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})}/>
                    <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value})}/>

                    <div className={classes.fileInput}>
                        <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile:base64})}
                        />
                    </div>
                    <Button className={classes.buttonSubmit} type ="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                    <Button  onClick ={clear} variant="contained" color="secondary" size="small" fullWidth>Clear</Button>

               </form>

           </Paper>
            
        
    )
}
export default Form