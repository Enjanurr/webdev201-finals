import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";
//import Image from "next/legacy/image";
import { Navigation } from 'swiper/modules';
//import { IoMdPeople } from 'react-icons/io';

const teamMembers = [
  {
    message:
      'Vaughn specializes in crafting intuitive and visually stunning designs. His expertise in frontend development ensures a seamless and engaging user experience.',
    name: 'Vaughn Oswald Patalinjug',
    profession: 'Frontend Specialist & UI/UX Designer',
    resume: '/assets/res/resume-2.pdf',
    pic: '/assets/resume/bonnie.svg',
  },
  {
    message:
      'Rigor is passionate about frontend animations and interactivity. His attention to detail brings life to websites, ensuring smooth transitions and responsiveness.',
    name: 'Rigor Esmero Jr.',
    profession: 'Frontend Developer & Interaction Expert',
    resume: '/assets/res/resume-1.pdf',
    pic: '/assets/resume/rigor.svg',
  },
  {
    message:
      'Johnru focuses on backend development, building scalable and efficient systems. He ensures that every project runs seamlessly under the hood with clean and optimized code.',
    name: 'Johnru Bajenting',
    profession: 'Backend Developer & System Architect',
    resume: '/assets/res/resume-3.pdf',
    pic: '/assets/resume/janurr.svg',
  },
];

const Resume = () => {
  return (
    <section className="h-[60vh] xl:h-[70vh] ">
      <div className="container mx-auto h-full flex items-center">
      
        <Swiper navigation={true} modules={[Navigation]} className="h-[500px] ">
           
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              
              <div className="flex justify-center h-full xl:pt-14 ">
              
                <div className="max-w-[60%] text-primary ">
                  {/* Updated Icon */}

                  {/*   <IoMdPeople className="text-6xl text-primary mb-6 mx-auto" /> */}
                  <Image
                    src={member.pic}
                    width={150}
                    height={150}
                    alt={member.name}
                    className="text-6xl text-primary mb-6 mx-auto"
                  />
                  {/* About Text */}
                  <p className="text-2xl font-secondary text-center mb-6">
                    {member.message}
                  </p>
                  {/* Name & Role */}
                  <div className="text-center">
                    <p className="text-xl font-bold mb-1">{member.name}</p>
                    <p className="text-secondary">{member.profession}</p>
                  
                  </div>
                  <div className="flex justify-center mt-5">
                    
                    <a
                      href={member.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn">View Resume</button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Resume;
