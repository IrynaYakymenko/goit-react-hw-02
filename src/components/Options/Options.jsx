import s from './Options.module.css'

const Options = ({updateFeedback, resetMark, total}) => {
  return (
    <>
        <button className={s.btn} onClick={()=>updateFeedback('good')}>Good</button>
        <button className={s.btn} onClick={()=>updateFeedback('neutral')}>Neutral</button>
        <button className={s.btn} onClick={()=>updateFeedback('bad')}>Bad</button>
        {total > 0 && <button className={s.btn} onClick={resetMark}>Reset</button>}
    </>
  )
}

export default Options