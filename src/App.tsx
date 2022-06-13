import React from 'react'
import FeedbackList from './Components/FeedbackList'
import Widget from './Components/Widget'

const App = () => {
  const [updateFeedbacks, setUpdateFeedbacks] = React.useState(false);

  return (
    <>
      <Widget updateListFeedbacks={setUpdateFeedbacks}/>
      <FeedbackList updateFeedbacks={updateFeedbacks}/>
    </>
  )
}

export default App
