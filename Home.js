import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../Images/photo1.jpg'
export default function Home() {
  const navigate=useNavigate()
  return (
    <div>

    

    <img src={image} style={{width:'100vw'}}/>
     {/* <buttton onClick={()=>{navigate('/Order',{replace:true})}}>Place order</buttton> */}
     <h1><i>Overview</i></h1> 
     <div className="cards">
     <div className="card">
  <div className="card-body bg-warning">
  <img src='https://www.bachpanglobal.com/wp-content/uploads/2019/12/Speak-O-Kit3.png' style={{borderRadius:'50%',height:'60px',marginTop:'-55px',backgroundColor:'white'}}/>
    <h3 className="card-title">SPEAK-O-KIT</h3>
    <p className="card-text">
Speak-o-kit, more commonly known as, a set of talking books & talking pen is a learning tool which was introduced for the very first time by Bachpan. <br/>It aims to inculcate self reliance, self learning & greater retention power amongst students. It is 100% mapped with the school curriculum.</p>

  </div>
</div>   
<div className="card card2  ">
  <div className="card-body bg-success">
  <img src='https://i.etsystatic.com/39477223/r/il/58f254/4621727445/il_fullxfull.4621727445_mbda.jpg' style={{borderRadius:'50%',height:'80px',marginTop:'-55px'}}/>
    <h3 className="card-title">ROBOTIME</h3>
    <p className="card-text">
Robotics develops critical thinking & moreover it's a favorite activity for kids at Marina.<br/> It polishes a child's thinking skills & parents are sure to observe how brilliantly their child learns to assemble blocks in the Robotime Kit. Level wise kits are specialized as per child's learning needs.  </p>
 
  </div>
</div>  
<div className="card">
  <div className="card-body bg-danger">
  <img src='https://play-lh.googleusercontent.com/EQiJ1c-Az4HTNvewHqyfjdBMVEm3yTn7GwV3fbhsGg1ZiSNblFqXwvjubomFdwtL5w=w600-h300-pc0xffffff-pd' style={{borderRadius:'50%',height:'70px',width:'80px',marginTop:'-50px',backgroundColor:'white'}}/>
    <h3 className="card-title">SMART CLASSES</h3>
    

    <p className="card-text">Smart Classes are must for new age education wherein children should know how to understand concepts through learning tools.<br/> It is important that a teacher portrays the academic content on-screen which will awaken all their senses to domains of new learning experience.</p>

  </div>
</div> 
<div className="card">
  <div className="card-body bg-info">
  <img src='https://www.bachpanglobal.com/wp-content/uploads/2019/12/VR3.png'style={{borderRadius:'50%',height:'70px',width:'80px',marginTop:'-50px',backgroundColor:'white'}}/>
    <h3 className="card-title">VIRTUAL REALITY</h3>
    <p className="card-text">At Bachpan, children under the age group of 2 to 5 years learn through live examples, virtually.<br/> This is enchanting indeed! Traveling to places sitting in a classroom is possible with the VR head gears. The 3D viewing & the practicality associated to theoretical places make concepts easy to understand.</p>
  </div>
</div> 
</div>   
     <h1><i>Marina Play School</i></h1>
     <div className='content'>
     <div className='videos'>
      <video controls muted >
        <source src='https://media.istockphoto.com/id/546934474/video/storytime-at-nursery.mp4?s=mp4-640x640-is&k=20&c=8fKhf1Yzz8-0myFL9Us594aUdAvJCoUSJoAFQb9nnoc='/>
       </video>
       </div>
        <div className='text1'>
          <p>Starting from 2024, Marina has completed almost 19 years of successful years in education segment and have over 1200 operating play schools across India. From Kashmir in the north to Kanyakumari in the south Marina have established branches in Nepal and Bangladesh.<br/> Marina: A place where eminence in learning is felt. The amazing part of this kind of learning is that this power and fun in learning is felt both by parents and the kids. They foresee a Bachpan which is not just in learning numbers and alphabets but far beyond that. Technology which has seeped deep in the Bachpanites is a gift which will be cherished for long. Why not moms and dads wouldn’t want to join a preschool and live childhood,The amazing part of this kind of learning is that this power and fun in learning is felt both by parents and the kids. </p>
      
     </div>
     </div>

  
      
    </div>
  )
}
