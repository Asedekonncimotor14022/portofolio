"use client"

import Image from "next/image";
import pp from '../public/pp.jpg'
import ThemeToggle from '../components/ui/theme-toggle';
import {motion} from 'framer-motion'
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import image1 from '../public/11.png'
import image2 from '../public/21.png'
import image3 from '../public/3.png'
import image4 from '../public/4.png'
import image5 from '../public/5.png'
import image6 from '../public/6.jpg'
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white
    transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        
        <motion.header 
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.8}}
        
        className="flex items-center justify-between mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src={pp} alt="profile picture" className="cursor-pointer
            transition-all duration-300 hover:scale-110"></Image>
          </div>
          <ThemeToggle/>
        </motion.header>

        <main className="specy-y-10">
          <section className="space-y-10">
          <motion.div
           initial={{opacity: 0, x: 100}}
           animate={{opacity: 1, x: 0}}
           transition={{duration: 0.8}}
           className="specy-y-1"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600
            via-indigo-500 to-sky-500 bg-clip-text text-transparent
            inline-blok">Rizky Juni Arigayo</h1>
            <p className="text-gray-600 dark:text-gray-400">Web Developer & AI engginer</p>
            <p className="text-gray-600 dark:text-gray-400">Sumatra, IND</p>
          </motion.div>

          <motion.div
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="specy-y-3"
          >
            <h2 className="text-lg font-semibold">Building Scalable Solution for 
              Tomorrow</h2>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
            I have expertise in web development, with proficiency in
              <span className="text-black dark:text-white"> HTML,CSS,JavaScript,PHP </span>
                  I have also gained experience working with Voice User Interface (VUI) in developing web applications.
              <span className="text-black dark:text-white">
              I am committed to continuously improving my skills and expanding my knowledge in various technologies
              to create efficient and scalable solutions.
              </span>
              .
            </p>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
            I am an Informatics Engineering student who has a great interest in the development of efficient and reliable modern
            technology solutions. I have an internship experience at PT Selaras Multi Cipta, where my team and I developed a Voice 
            User Interface (VUI)-based goods web inventory application. Outside of my internship experience, I also completed independent
            projects such as creating an interactive chatbot and website to support MSMEs. With a high passion for learning, I am committed 
            to continuing to develop my skills and create scalable solutions for the future.
            </p>
          </motion.div>

          <motion.div
           initial={{opacity: 0, x: 50}}
           animate={{opacity: 1, x: 0}}
           transition={{duration: 0.8}}
           className="flex items-center gap-3"
          >  
            <Button className="rounded-full bg-gradient-to-r from-rose-600
            to-indigo-600 text-white transition-transform hover:scale-105">Resume
            </Button>

            <Link href="#" className="text-gray-600 dark:text-gray-400
            hover:text-black dark:hover:text-white transition-colors">
              <FaGithub className="w-6 h-6"/>
            </Link>

            <Link href="#" className="text-gray-600 dark:text-gray-400
            hover:text-black dark:hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6"/>
            </Link>

            <Link href="#" className="text-gray-600 dark:text-gray-400
            hover:text-black dark:hover:text-white transition-colors">
              <FaTwitter className="w-6 h-6"/>
            </Link>

            <Link href="#" className="text-gray-600 dark:text-gray-400
            hover:text-black dark:hover:text-white transition-colors">
              <FaYoutube className="w-6 h-6"/>
            </Link>
          </motion.div>
          </section>


          <motion.section
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
            via-indigo-500 to-sky-500 bg-clip-text text-transparent
            inline-blok">Experience</h2>

            <div className="space-y-8">
              <div className="flex-items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">December, 2024 - Present</p>
                <p className="font-medium">Web Developer</p>
                <p className="text-blue-600 dark:text-blue-400">Company X</p>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
              Developing and maintaining web applications using HTML, CSS, JavaScript, and PHP.
              Collaborating with team members to design and implement new features for web platforms.
              Ensuring web applications are optimized for performance and user experience.</p>
            </div>
          </motion.section>

          <motion.section 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
            via-indigo-500 to-sky-500 bg-clip-text text-transparent
            inline-blok">Education</h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">july, 2017
                    - 2020 Maret
                  </p>
                  <p className="font-medium">Teknik jaringan Komputer</p>
                  <p className="text-blue-600 dark:text-blue-400">SMK Nusantara</p>
                </div>
              </div>
              <p className="text-gray-600 dark:'text-gary-400">
              Acquire a basic knowledge base in the field of computer networks and hardware.
              Develop skills in basic programming and network management
              </p>
            </div>
          </motion.section>

          <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
            via-indigo-500 to-sky-500 bg-clip-text text-transparent
            inline-blok">Projects</h2>
            <div className="grid grid-cols-1 md:grid-col-3 gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 
              dark:border-zinc-800 transition-transform duration-300 hover:scale-105
              cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image1} alt="project 1" className="rounded-lg mb-4"/>

                  <div className="flex items-center justify-between">
                    
                    <div>
                      <h3 className="font-medium">Project 1</h3>
                      <p className="text=sm text-gray-600 dark:text-gray-400">Next.js</p>
                    </div>

                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 
              dark:borde--zinc-800 transition-transform duration-300 hover:scale-105
              cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image2} alt="project 2" className="rounded-lg mb-4"/>

                  <div className="flex items-center justify-between">
                    
                    <div>
                      <h3 className="font-medium">Project 2</h3>
                      <p className="text=sm text-gray-600 dark:text-gray-400">Next.js</p>
                    </div>

                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 
              dark:borde--zinc-800 transition-transform duration-300 hover:scale-105
              cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image3} alt="project 3" className="rounded-lg mb-4"/>

                  <div className="flex items-center justify-between">
                    
                    <div>
                      <h3 className="font-medium">Project 3</h3>
                      <p className="text=sm text-gray-600 dark:text-gray-400">Next.js</p>
                    </div>

                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 
              dark:borde--zinc-800 transition-transform duration-300 hover:scale-105
              cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image4} alt="project 4" className="rounded-lg mb-4"/>

                  <div className="flex items-center justify-between">
                    
                    <div>
                      <h3 className="font-medium">Project 4</h3>
                      <p className="text=sm text-gray-600 dark:text-gray-400">Next.js</p>
                    </div>

                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 
              dark:borde--zinc-800 transition-transform duration-300 hover:scale-105
              cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image5} alt="project 5" className="rounded-lg mb-4"/>

                  <div className="flex items-center justify-between">
                    
                    <div>
                      <h3 className="font-medium">Project 5</h3>
                      <p className="text=sm text-gray-600 dark:text-gray-400">Next.js</p>
                    </div>

                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 
              dark:borde--zinc-800 transition-transform duration-300 hover:scale-105
              cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image6} alt="project 6" className="rounded-lg mb-4"/>

                  <div className="flex items-center justify-between">
                    
                    <div>
                      <h3 className="font-medium">Project 6</h3>
                      <p className="text=sm text-gray-600 dark:text-gray-400">Next.js</p>
                    </div>

                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-500">2024</p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
