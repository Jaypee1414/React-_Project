import {React, useState}from 'react'
import Sidebar from './Sidebar'
import NewProject from './NewProject'
import NoSelectedProject from './NoSelectedProject';
import SelectedProject from './SelectedProject';

function MyApp() {
    const [openProject, setOpenProject] = useState({
        setNewProject : undefined, 
        project : [],
        Task : []
    });
    
    const hadleClearTask =() =>{
      setOpenProject((prevProject)=>{
        return{
          ...prevProject,
          setNewProject : undefined,
          project: prevProject.project.filter((Project)=> Project.id !== prevProject.setNewProject)
        }
      })
    }

    const handleAddTask =(text)=>{
      setOpenProject((prevProject)=>{
        const DataTask = {
          text : text,
          projectID : prevProject.setNewProject,
          id : Math.random() 
        }
        return{
          ...prevProject,
          Task : [DataTask, ...prevProject.Task]
        }
      })
    }

    function handleSelectProject(id) {
      setOpenProject(prevProject=>{
        return{
          ...prevProject,
          setNewProject : id,
        }
      })
    }

    function handleDeleteProject() {
      setOpenProject((prevProject)=>{
        return{
          ...prevProject,
          setNewProject : undefined,
          project: prevProject.project.filter((Project)=> Project.id !== prevProject.setNewProject)
        }
      })
    }
    function handleOpenModal(){
        setOpenProject(prevProject=>{
          return{
            ...prevProject,
            setNewProject : null,
          }
        })
    }

    function handleSaveProject(ProjectData){ 
      setOpenProject((prevProject)=>{
        const Data = {
          ... ProjectData, 
          id : Math.random() // for project  ID 
        }
        return{
          ...prevProject,
          setNewProject : undefined,
          project : [...prevProject.project , Data]
        }
      })
    }
    const selectProject = openProject.project.find((prev) => prev.id === openProject.setNewProject)

    let context = <SelectedProject project={selectProject} handleDelete={handleDeleteProject} onAdd={handleAddTask} taskProp={openProject.Task}/>; 

    if(openProject.setNewProject === null){
      context = <NewProject addProject ={handleSaveProject}/>
    }else if(openProject.setNewProject === undefined){
      context = <NoSelectedProject handleOpenModal={handleOpenModal}/>
    }

  return (
    <>
      <Sidebar selectHandleProject={handleSelectProject} projects={openProject.project} handleOpenModal={handleOpenModal}/>
      {context}
    </>
  )
}
export default MyApp