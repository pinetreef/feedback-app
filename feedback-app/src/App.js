import { v4 as uuidv4} from "uuid"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  
  return (
    <>
      <Header />
      <div className='container'>        
        <FeedbackForm handleAdd={addFeedback}/>        
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback}
          handleDelete={deleteFeedback} />
        
      
      </div>
    </>
  )
}

export default App