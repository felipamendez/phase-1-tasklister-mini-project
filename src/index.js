document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector('form').addEventListener('submit', (e) => {e.preventDefault()
  buildTask(e.target.new_task_description.value) 
  form.reset()
  })
      

});



function buildTask(task) { 
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = "x"
  p.textContent = `${task} ` 
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
  }

  function handleDelete(e) {
    e.target.parentNode.remove()
    }
    

