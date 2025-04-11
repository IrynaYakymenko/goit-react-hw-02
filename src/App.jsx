
import { useEffect, useState } from 'react'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/notification'


function App() {
  const [mark, setMark] = useState ({
    good: 0,
	  neutral: 0,
	  bad: 0
  })

  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedbackStats')
    if (savedFeedback) {
      setMark(JSON.parse(savedFeedback))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('feedbackStats', JSON.stringify(mark))
  }, [mark])

  const updateFeedback = (typeMark) => {
      setMark({...mark, [typeMark]: mark[typeMark] + 1})
   }

  const resetMark = ()=> {setMark({
    good: 0,
	  neutral: 0,
	  bad: 0
  })} 

  const totalFeedback = mark['good'] + mark['neutral'] + mark['bad'];

  const positiveFeedback = Math.round((mark['good'] / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetMark={resetMark} total={totalFeedback}/>
      {totalFeedback > 0 ? <Feedback mark={mark} total={totalFeedback} positive={positiveFeedback} /> : <Notification />}
    </>
  )
}

export default App
