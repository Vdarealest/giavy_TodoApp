import React, { useEffect, useState } from 'react';
import AddTask from '@/components/AddTask';
import DateTimeFilter from '@/components/DateTimeFilter';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import StatsAndFilters from '@/components/StatsAndFilters';
import TaskList from '@/components/TaskList';
import TaskListPagination from '@/components/TaskListPagination';
import { toast } from 'sonner';
import api from '@/lib/axios';
import { visibleTaskLimit } from '@/lib/data';

const HomePage = () => {
  const [taskBuffer, setTaskBuffer] = useState([]);
  const [activeTaskCount, setactiveTaskCount] = useState(0);
  const [completeTaskCount, setcompleteTaskCount] = useState(0);
  const [filter, setFilter] = useState("all");
  const [dateQuery, setDateQuery] = useState("today");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTask();
  }, [dateQuery])

  useEffect(() => {
    setPage(1);
  }, [filter, dateQuery])

  const fetchTask = async () => {
    try {
      const res = await api.get(`/tasks?filter=${dateQuery}`);
      setTaskBuffer(res.data.tasks);
      setactiveTaskCount(res.data.activeCount);
      setcompleteTaskCount(res.data.completeCount);
    } catch (error) {
      console.error("Lỗi xảy ra khi truy xuất Task: ", error);
      toast.error("Lỗi xảy ra khi truy xuất Task");
    }
  };



  const handleTaskChanged = () =>{
    fetchTask();
  };

  const handleNext = () => {
    if(page<totalPages){
      setPage((prev) => prev+1);
    }
  }

  const handlePrev = () => {
    if(page >1 ) {
      setPage((prev)  => prev - 1);
    }
  }

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // bien luu danh sach nhiem vu da loc

const filteredTasks = taskBuffer.filter((task) => {
  switch (filter) {
    case 'active':
      return task.status === 'active'; 
    case 'completed':
      return task.status === 'complete';
    default:
      return true;

  }
});

const visibleTasks = filteredTasks.slice(
  (page -1) * visibleTaskLimit,
  page * visibleTaskLimit
);
  if(visibleTasks.length === 0) {
    handlePrev();
  }

const totalPages = Math.ceil(filteredTasks.length / visibleTaskLimit);

  return (
<div className="min-h-screen w-full bg-[#f5f5dc] relative">
  {/* Dreamy Sunset Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(180deg, 
          rgba(245,245,220,1) 0%, 
          rgba(255,223,186,0.8) 25%, 
          rgba(255,182,193,0.6) 50%, 
          rgba(147,112,219,0.7) 75%, 
          rgba(72,61,139,0.9) 100%
        ),
        radial-gradient(circle at 30% 20%, rgba(255,255,224,0.4) 0%, transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(72,61,139,0.6) 0%, transparent 70%),
        radial-gradient(circle at 50% 60%, rgba(147,112,219,0.3) 0%, transparent 60%)
      `,
    }}
  />
  {/* Your Content/Components */}
      <div className="container pt-8 mx-auto relative z-10">
      <div className='w-full max-w-2xl p-6 mx-auto space-y-6'>

        {/* Đầu trang */}
        <Header />

        {/* Tạo nhiệm vụ */}
        <AddTask handleNewTaskAdded = {handleTaskChanged}/>

        {/* Thống kê và bộ lọc */}
        <StatsAndFilters 
        filter={filter}
        setFilter={setFilter}
        activeTaskCount={activeTaskCount} 
        completedTaskCount={completeTaskCount}
        />

        {/* Danh sách nhiệm vụ */}
        <TaskList filterTasks = {visibleTasks} filter={filter} handleTaskChanged={handleTaskChanged}/>

        {/* Phân trang và lọc theo ngày */}
        <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
          <TaskListPagination 
          handleNext={handleNext}
          handlePrev = {handlePrev}
          handlePageChange={handlePageChange}
          page={page}
          totalPages = {totalPages}
          
          
          />
          <DateTimeFilter dateQuery={dateQuery} setDateQuery={setDateQuery} />
        </div>

        {/* Chân trang */}
        <Footer activeTaskCount={activeTaskCount}
                completedTaskCount={completeTaskCount}/>

      </div>
    </div>
</div>


  );
};

export default HomePage;
