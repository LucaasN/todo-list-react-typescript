import { Task } from './Task'

type Props = {
    listToDo: string[]
    deleteTask: (index:number) => void
}

export const ListToDo = ({listToDo, deleteTask}: Props) => {
  return (
    <div className="taskList">
        {
            listToDo.map( (task, index) => (
                <Task 
                    task={ task } 
                    deleteTask={ ()=>{deleteTask(index)} } 
                    key={ index }
                />
            ))
        }
    </div>
  )
}