import {React, useState}from 'react'
import Sidebar from './Sidebar'
import NewProject from './NewProject'
import NoSelectedProject from './NoSelectedProject';
import SelectedProject from './SelectedProject';

function MyApp() {
    const [openProject, setOpenProject] = useState({
        setNewProject : undefined, 
        project : []
    });


    function handleSelectProject(id) {
      setOpenProject(prevProject=>{
        return{
          ...prevProject,
          setNewProject : id,
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
      console.log(ProjectData) // check if this is right the object value
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
    let context = <SelectedProject project={selectProject}/>; 
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