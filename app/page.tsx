import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<nav className='flex items-center justify-between p-4 bg-[#37bce0] text-neutral-100'>
				<Image
					src={'/uni-images/logo.png'}
					alt='University Logo'
					width={150}
					height={150}
				/>
				<h1 className='text-2xl'>Virtual Campus Tour</h1>
			</nav>{' '}
			<main className='grid grid-cols-1 gap-y-8 font-serif bg-blue-100'>
				<section
					id='start'
					className='h-full flex flex-col items-center justify-center bg-cover bg-center'
					style={{
						backgroundImage: "url('/uni-images/uni-bg-2.png')",
					}}>
					<div className='flex justify-around w-full mt-10'>
						<div className='flex flex-col items-center'>
							<Button className='bg-transparent border-none w-fit h-fit p-0 flex flex-col items-center justify-center'>
								<Image
									src={'/group1.png'}
									alt=''
									width={300}
									height={250}
								/>
								<a
									href='#2'
									className='bg-[#0b293c] p-2 rounded text-neutral-100 text-xl hover:bg-[#627379]/80 transition-colors absolute'>
									Campus Infrastructure
								</a>
							</Button>
						</div>
						<div className='flex flex-col items-center'>
							<Button className='bg-transparent border-none w-fit h-fit p-0 flex flex-col items-center justify-center'>
								<Image
									src={'/group2.png'}
									alt=''
									width={300}
									height={250}
								/>
								<a
									href='#3'
									className='bg-[#77c9e6] p-2 rounded text-neutral-100 text-xl hover:bg-[#627379]/50 transition-colors absolute'>
									Libraries
								</a>
							</Button>
						</div>
						<div className='relative'>
							<Button className='bg-transparent border-none w-fit h-fit p-0 flex flex-col items-center justify-center'>
								<Image
									src={'/group3.png'}
									alt=''
									width={300}
									height={250}
								/>
								<a
									href='#4'
									className='bg-[#095bab] p-2 rounded text-neutral-100 text-xl hover:bg-[#627379]/80 transition-colors absolute'>
									Laboratories
								</a>
							</Button>
						</div>
					</div>
				</section>
				<section
					id='1'
					className='h-screen flex flex-col items-center justify-center my-4'>
					<h1 className='text-4xl font-bold text-center mb-4'>
						Welcome to the University of Delta
					</h1>
					<br />
					<Image
						src='/uni-images/uni-gate.svg'
						alt='University Logo'
						width={1080}
						height={600}
						className='max-w-full h-auto'
					/>
				</section>
				<section
					id='2'
					className=' flex flex-col items-center justify-center my-7 '>
					<h4 className='text-lg font-semibold font-serif text-center my-5'>
						Explore our beautiful campus and learn more about our facilities.
					</h4>
					<span className='p-4'>
						The University of Delta is a Public University in Agbor, Delta State
						The university have three campus which are; Agbor, Owa-Oyibu, and
						Owa-Alore. The university Offers undergraduate and postgraduate
						courses covering five faculties: Agriculture, Arts, Education,
						Information Technology, Medicine and Law. Wikipedia. The school was
						Founded in 2021, The school Motto is Knowledge and Power, The Former
						names of the school was College of Education, Agbor. The Current
						Vice-Chancellor of the school is Dame Prof Stella C Chiemeke
					</span>
					<br />
					<div className='mb-12'>
						<figure className='text-center'>
							<Image
								src={'/uni-images/Admin-building.svg'}
								alt='Admin Building'
								width={1300}
								height={600}
							/>
							<figcaption className='text-lg mt-2 text-gray-600'>
								The Administrative Building
							</figcaption>
						</figure>
					</div>
					<div className='my-8'>
						<figure className='text-center'>
							<Image
								src={'/uni-images/uni-field.svg'}
								alt='uni-field'
								width={1300}
								height={600}
							/>
							<figcaption className='text-lg mt-2 text-gray-600'>
								The University Field
							</figcaption>
						</figure>
					</div>
					<span className='p-4'>
						The University of Delta (UNIDEL), participates in various sports,
						including those featured in the Nigerian University Staff Games
						(NUSGA). These include Badminton, Chess, Scrabble, and Table Tennis.
						Additionally, UNIDEL staff are involved in other physical activities
						and sports as part of their physical education and recreational
						activities.
					</span>
					<div className='my-8'>
						<figure className='text-center'>
							<Image
								src={'/uni-images/Law-building.svg'}
								alt='Law Building'
								width={1300}
								height={600}
							/>
							<figcaption className='text-lg mt-2 text-gray-600'>
								Faculty of Law Building
							</figcaption>
						</figure>
					</div>
				</section>
				<section
					id='3'
					className=' flex flex-col items-center justify-center my-7 '>
					<h4 className='text-lg font-semibold font-serif text-center my-5'>
						Discover our extensive library resources and e-library facilities
					</h4>
					<div className='my-8'>
						<figure className='text-center'>
							<Image
								src={'/uni-images/library.svg'}
								alt='Library'
								width={1300}
								height={600}
							/>
							<figcaption className='text-lg mt-2 text-gray-600'>
								The Library
							</figcaption>
						</figure>
					</div>
					<div className='my-8'>
						<figure className='text-center'>
							<Image
								src={'/uni-images/E-library.svg'}
								alt='Physics Lab'
								width={1300}
								height={600}
							/>
							<figcaption className='text-lg mt-2 text-gray-600'>
								The E-Library
							</figcaption>
						</figure>
					</div>
					<span className='p-4'>
						The Unidel Library, established in 1980, houses over 27,655 volumes
						of books, journals, and project works. It offers services like
						lending, reference assistance, photocopying, and e-library access.
						Key units include: Readers Service Unit: Manages circulation,
						reserve materials, and reference resources (e.g., encyclopedias).
						Technical Unit: Processes new materials (stamping, cataloging).
						E-Library Unit: Provides digital resources, though some databases
						may require renewal. The library is open Monday to Friday, 8:00 AM
						to 4:00 PM, and Saturday, 8:00 AM to 2:00 PM. It is closed on
						Sundays and public holidays.
					</span>
				</section>
				<section
					id='4'
					className=' flex flex-col items-center justify-center my-7 '>
					<h4 className='text-lg font-semibold font-serif text-center my-5'>
						Explore our state-of-the-art laboratories and research facilities
					</h4>
					<div className='my-8'>
						<figure className='text-center'>
							<Image
								src={'/uni-images/Hardware-lab.svg'}
								alt='Computer Hardware Lab'
								width={1300}
								height={600}
							/>
							<figcaption className='text-lg mt-2 text-gray-600'>
								The Computer Hardware Lab
							</figcaption>
						</figure>
					</div>
					<div className='my-8'>
						<figure className='text-center'>
							<Image
								src={'/uni-images/Fluid-mech-lab.svg'}
								alt='Fliud Mechanics Lab'
								width={1300}
								height={600}
							/>
							<figcaption className='text-lg mt-2 text-gray-600'>
								The Fluid Mechanics Lab
							</figcaption>
						</figure>
					</div>
					<span className='p-4'>
						University labs feature workstations with specialized software
						(e.g., AutoCAD, MATLAB), printers, and scanners. For example, labs
						at comparable institutions offer remote access, collaborative
						workspaces, and adaptive technologies for students Unidel’s ICT
						facilities include desktops, laptops, and internet access,
						suggesting a focus on foundational computing resources
					</span>
					<div className='my-8'>
						<figure className='text-center'>
							<Image
								src={'/uni-images/Physics-lab.svg'}
								alt='Physics Lab'
								width={1300}
								height={600}
							/>
							<figcaption className='text-lg mt-2 text-gray-600'>
								The Physics Laboratory
							</figcaption>
						</figure>
					</div>
					<span className='p-4'>
						The Physics Lab at Unidel is designed to support hands-on learning
						for introductory physics courses, such as kinematics, Newton’s Laws,
						and fluid dynamics. Students engage in experiments like free-fall
						measurements, projectile motion, and rotational dynamics, which
						reinforce theoretical concepts. The lab emphasizes proper procedure,
						including pre-lab preparation, teamwork (with individual reports),
						and adherence to safety protocols. Missing labs can result in grade
						penalties, highlighting the importance of attendance
					</span>

					<div className='mt-10'>
						<div className='my-8'>
							<figure className='text-center'>
								<Image
									src={'/uni-images/Art-room.svg'}
									alt='Art Lecture Room'
									width={1300}
									height={600}
								/>
								<figcaption className='text-lg mt-2 text-gray-600'>
									The Art Lecture Room
								</figcaption>
							</figure>
						</div>
						<span className='p-4'>
							The University of Delta (UNIDEL) offers a diverse range of
							undergraduate and postgraduate programs across various faculties,
							including Agriculture, Arts, Education, Information Technology,
							Medicine, and Law. The university's commitment to academic
							excellence is reflected in its comprehensive curriculum and
							state-of-the-art facilities. UNIDEL's vibrant campus life is
							enriched by cultural events, sports activities, and student
							organizations, fostering a holistic educational experience for its
							students.
						</span>
					</div>
				</section>
				<section
					id='5'
					className='flex flex-col items-center justify-center my-7'>
					<div className='my-8'>
						<h4 className='text-lg font-semibold font-serif text-center my-5'>
							Video Tour of the University of Delta
						</h4>
						<video
							width='1080'
							height='730'
							controls
							className='rounded-lg shadow-lg'>
							<source
								src='/uni-del video.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				</section>
			</main>
		</div>
	);
}
