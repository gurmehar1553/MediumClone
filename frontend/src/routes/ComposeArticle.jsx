import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import React, {useContext, useState} from 'react'
import AuthContext from '../utils/AuthProvider'

export default function ComposeArticle() {

  const [heading,setHeading] = useState()
  const [content, setContent] = useState()

  const {currentUser} = useContext(AuthContext)

  const navigate = useNavigate()

  function handleChangeHeading(e){ setHeading(e.target.value) }
  function handleChangeContent(e){ setContent(e.target.value) }

  async function handleSubmit(e){
    e.preventDefault()
    const dataObject = {
      heading,
      content,
      author: currentUser._id
    }

    const res = await axios.post('/api/posts/compose', dataObject)
    console.log(res.data)

    setHeading('')
    setContent('')
    navigate('/articles', {replace:true})
  }

  return (
    <div className="container mt-4">
      <h1>Write an Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="article-heading">Heading</label>
          <input value={heading} onChange={handleChangeHeading} type="text" className="form-control" id="article-heading" placeholder="Enter heading" />
        </div>
        <div className="form-group">
          <label htmlFor="article-content">Content</label>
          <textarea value={content} onChange={handleChangeContent} className="form-control" id="article-content" rows="10" placeholder="Enter content"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
