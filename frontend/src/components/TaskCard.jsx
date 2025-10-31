import React, { useState } from 'react'
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Calendar, CheckCircle2, Circle, Ghost, Square, SquarePen, Trash2 } from 'lucide-react';
import { Input } from './ui/input';
import api from '@/lib/axios';
import { toast } from 'sonner';

const TaskCard = ({task, index, handleTaskChanged}) => {
  const [isEditting, setisEditting] = useState(false);
  const[updateTaskTitle, setupdateTaskTitle] = useState(task.title || "");

  const deleteTask = async (taskId) => {
try {
  await api.delete(`/tasks/${taskId}`);
  toast.success("Nhiem vu da xoa.");
  handleTaskChanged();  
} catch (error) {
  console.error("Loi xay ra khi xoa task", error);
  toast.error("Loi xay ra khi xoa Task", error);
  
}
  };

  const updateTask = async () =>{
    try {
      setisEditting(false);
      await api.put(`/tasks/${task._id}`, {
        title: updateTaskTitle
      }
      );
      toast.success(`Nhiệm vụ đã đổi thành ${updateTaskTitle}`);
      handleTaskChanged();  
    } catch (error) {
      console.error("Lỗi xảy ra khi update task", error);
      toast.error("Lỗi xảy ra khi update Task", error);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter"){
      updateTask();
    }
  };
  const tonggleTaskCompleteButton = async () => {
    try {
      if(task.status === 'active') {
        await api.put(`/tasks/${task._id}`, {
          status: 'complete', 
          completedAt: new Date().toISOString()
        });
        toast.success(`${task.title} đã hoàn thành`)
      } else {
        await api.put(`/tasks/${task._id}`, {
          status: 'active',
          completedAt: null
        });
        toast.success(`${task.title} đã chuyển sang chưa hoàn thành`)
      }
      handleTaskChanged();
    } catch (error) {
      console.error("Lỗi xảy ra khi update task", error);
      toast.error("Lỗi xảy ra khi update Task", error);
    }
  }
  return (
    <Card className={cn(
      "p-4 bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg trasition-all duration-200 animate-fade-in group",
      task.status === "complete" && "opacity-75"

    )}
      style={{animationDelay: `${index * 50}`}}
    >
      <div className='flex items-center gap-4'>
        {/* nut tron */}
        <Button variant= 'ghost' 
                size= 'icon'
                className={cn(
                  "flex-shrink-0 size-8 rounded-full transition-all duration-200",
                  task.status === 'complete' ? 'text-success hover:tetx-success/80':
                  'text-muted-foreground hover:text-primary'
                )} 
                onClick={tonggleTaskCompleteButton}
                >
                  {task.status==='complete' ? (
                    <CheckCircle2 className='size-5'/>
                  ) : (
                    <Circle className='size-5'/>
                  )}

        </Button>
        {/* hien thi hoac chinh sua tieu de */}
        <div className='flex-1 min-w-0'>
          {isEditting ? (
            <Input 
              placeholder='Cần phải làm gì ?'
              className='flex-1 h-12 text-base border-border/50 focus:border-primary/50 focus:ring-primary/20'
              type='text'
              value= {updateTaskTitle}
              onChange = {(e) => setupdateTaskTitle(e.target.value)}
              onKeyPress = {handleKeyPress}
              onBlur= {() => {
                setisEditting(false);
                setupdateTaskTitle(task.title ||"");
              }}
            
            />
          ) : (
            <p className={cn(
              'text-base transition-all duration-200',
              task.status === 'complete' ?
              'line-through text-muted-foreground':
              'text-foreground'
            )}>
              {task.title}
            </p>
          )}
            {/* ngay tao va ngay hoan thanh */}
        <div className='flex items-center gap-2 mt-1'>
          <Calendar className='size-3 text-muted-foreground'/>
          <span className='text-xs text-muted-foreground'>
            {new Date(task.createdAt).toLocaleString()}

          </span>
          {task.completedAt && (
            <>
            <span className='text-xs text-muted-foreground'> - </span>
            <Calendar className='size-3 text-muted-foreground' />
            <span className='text-xs text-muted-foreground'>
              {new Date(task.completedAt).toLocaleString()}
            </span>
            </>
          )}

        </div>
        </div>
      
        {/* nut chinh va nut xoa */}
        <div className='hidden gap-2 group-hover:inline-flex animate-slide-up'>
          {/* nut Edit */}
          <Button 
            variant='ghost'
            size = 'icon'
            className='flex-shrink-0 transition-colors size-8 text-muted-foreground hover:text-info' 
            onClick = {() => {
              setisEditting(true);
              setupdateTaskTitle(task.title || "")
            }}
            >
              <SquarePen className='size-4 '/>
          </Button>
          {/* nut Delete */}
          <Button 
            variant='ghost'
            size = 'icon'
            className='flex-shrink-0 transition-colors size-8 text-muted-foreground hover:text-destructive'
            onClick ={() => deleteTask(task._id)}
            >
              <Trash2 className='size-4'/>

              </Button>

        </div>
      </div>
    </Card>
  );
};

export default TaskCard;