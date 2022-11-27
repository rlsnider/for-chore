import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function TodoForm() {
    const [text, setText] = useState('')

    const onSubmit = e => {
        e.preventDefault()
    }

  return (
 <section className='form'>
    <form onSubmit={onSubmit}>
        <div className='form-group'>
            <label htmlFor="text">Chore</label>
            <input 
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <button 
            className='btn btn-block'
            type='submit'>Add Chore To Do</button>
        </div>
    </form>
 </section>
  )
}

export default TodoForm