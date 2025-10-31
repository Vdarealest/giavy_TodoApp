import React from 'react'
import TaskEmptyState from './TaskEmptyState';
import TaskCard from './TaskCard';

const TaskList = ({filterTasks, filter, handleTaskChanged}) => {
    if(filterTasks.length===0 || !filterTasks) {
      return <TaskEmptyState filter={filter}/>
    }
  return (
    <div className='space-y-3'>
      {filterTasks.map((task, index) => (
        <TaskCard
          key={task._id ?? index}
          task = {task}
          index = {index}
          handleTaskChanged={handleTaskChanged}
        />
      ))}
    </div>
  );
};

export default TaskList;