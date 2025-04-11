import s from './Feedback.module.css'

const Feedback = ({mark, total, positive}) => {
  return (
    <>
        <ul className={s.ul}>
            <li>Good: {mark['good']}</li>
            <li>Neutral: {mark['neutral']}</li>
            <li>Bad: {mark['bad']} </li>
            <li>Total: {total}</li>
            <li>Positive: {positive}%</li>
        </ul>
    </>
  )
}

export default Feedback