import { Injectable } from "@angular/core";

export interface IReview {
	id: number,
	title: string,
	desc: string,
	rating: number,
	user: string
}

export interface IModuleContent {
	id: number,
	type: string,
	title: string,
	src: string,
	length: number
}

export interface IModule {
	id: number,
	title: string,
	content: Array<IModuleContent>
}

export interface ICourse {
	id: number,
	title: string,
	short_desc: string,
	desc: string,
	length: number,
	fees: number,
	rating: number,
	instructor: string,
	student_count: number,
	difficulty: string,
	categories: Array<string>,
	reviews: Array<IReview>,
	modules: Array<IModule>
}

@Injectable({
	providedIn: 'root'
})
export class courseService {
	getCourses(): ICourse[] {
		return Courses.slice();
	}

	getCourse(id: number): ICourse {
		return Courses.filter((course: ICourse) => course.id === id)[0];
	}
}

const Courses: ICourse[] = [
	{
		id: 1,
		title: 'Basics of Web: HTML, CSS & JS',
		short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in. Fugiat corporis assumenda optio beatae asperiores fugit tempora explicabo sint deleniti magnam sapiente ducimus ratione sunt nostrum similique sequi, saepe corrupti ipsam animi voluptate harum, ut delectus error? Minus voluptatum veniam, dolor ea sunt ratione nihil saepe maxime, quos necessitatibus ad nulla! Voluptatibus, optio quisquam voluptatum perferendis incidunt eum adipisci distinctio tempora natus et? Tempore, dicta mollitia voluptatibus ratione veniam inventore ipsam dolorum quaerat aliquid praesentium sequi doloremque officia iusto? Totam consequuntur unde iusto alias inventore similique quibusdam asperiores aliquid ut vero! Nostrum corrupti sed, atque illum recusandae tempora odio ipsam deleniti, debitis quos corporis obcaecati. Labore vero dicta nesciunt unde ea nulla maxime at error iste eum, quod possimus voluptas laudantium accusamus beatae debitis aspernatur eaque placeat, aliquam sed commodi cupiditate! Saepe enim non earum excepturi, molestias accusantium deserunt? Sed iste consectetur in provident corrupti laboriosam asperiores at beatae dicta, consequatur neque minus veniam voluptate ut quam vel quis suscipit autem reiciendis rerum dolore. Facere tenetur qui possimus consequuntur alias blanditiis facilis, magni porro reprehenderit nihil officiis corrupti, quis maiores magnam labore accusantium, veniam modi soluta est? Repudiandae inventore a voluptatem architecto consequatur provident ullam explicabo impedit pariatur unde laudantium, excepturi in doloribus possimus rem, corporis minus dolores deleniti veritatis itaque dignissimos at? Nisi soluta dignissimos mollitia aperiam? Possimus non esse earum tenetur reiciendis qui hic ex perferendis nesciunt eveniet et saepe repellendus nam, similique, in incidunt deserunt veritatis. A voluptatem illo facilis perspiciatis. Laudantium sapiente numquam praesentium in voluptatibus quidem. Exercitationem qui ea ipsum quia quidem quae saepe, ullam illo omnis velit voluptatibus in nulla recusandae dolores? Porro, nostrum odit. Ab voluptates, distinctio non incidunt quisquam, nihil dolor sequi provident quis iusto eius explicabo minus enim quasi sint voluptas similique facilis nobis quos porro maiores deleniti ducimus eligendi corporis. Aperiam incidunt, consequatur doloribus velit ipsa facilis veritatis? Aliquid, iure reprehenderit quas atque corporis rerum earum suscipit, magnam laboriosam pariatur nesciunt, nihil sit id nam. Suscipit possimus, minima at velit tempore nisi provident magni in distinctio eveniet nobis quidem molestiae aliquam commodi impedit maiores, voluptate iusto animi dignissimos? Numquam perspiciatis adipisci accusantium ex placeat impedit mollitia dicta fugit itaque ad repudiandae, natus animi fugiat eum tenetur, beatae delectus nostrum quibusdam excepturi consequuntur molestias asperiores. Corrupti, maiores non. Assumenda, iste repellat natus officiis numquam molestiae, excepturi dolorem dolorum delectus nesciunt deleniti vitae tempore tenetur deserunt voluptates. Nemo repellendus suscipit quo odio nihil, hic numquam distinctio doloremque magni, at ipsa debitis perferendis fugiat fuga soluta explicabo? Provident omnis exercitationem earum illum, vitae ad similique eos doloribus vero, ut itaque sunt tempore, repellat temporibus voluptates placeat velit fuga magnam. Iste similique quidem, doloremque aspernatur obcaecati non unde ut rem ullam cum aperiam odit quibusdam laborum fuga consequuntur quos suscipit omnis cumque culpa accusamus? Amet exercitationem impedit iste reiciendis natus quia, iusto accusamus, harum, aspernatur modi aliquam. Culpa autem sunt eius iure necessitatibus architecto error quia explicabo officia voluptas sint ipsam, neque expedita reiciendis? Qui officia eum nulla deserunt velit, maxime odit sapiente!',
		length: 3,
		fees: 499,
		rating: 4.3,
		instructor: 'Max Muller',
		student_count: 1600,
		difficulty: 'Beginner',
		categories: ['Web Development'],
		reviews: [
			{
				id: 1,
				title: 'Great Course',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 5,
				user: 'Jinil Thakkar'
			},
			{
				id: 2,
				title: 'Clear Explanation',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 2,
				user: 'Manav Bhatia'
			},
			{
				id: 3,
				title: 'Loved it!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 4,
				user: 'Yash Thakkar'
			},
			{
				id: 4,
				title: 'Thanks a lot!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 1,
				user: 'Dhruv Arya'
			},
		],
		modules: [
			{
				id: 1,
				title: 'Introduction',
				content: [
					{
						id: 1,
						type: 'video',
						title: "Let's get started",
						src: '/assets/course-video.mp4',
						length: 4
					}
				]
			},

			{
				id: 2,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 2 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 2 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 2 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 3,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 3 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 3 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 3 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 4,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 4 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 4 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 4 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 5,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 5 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 5 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 5 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 6,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 6 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 6 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 6 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
		]
	},
	{
		id: 2,
		title: 'Machine Learning: from null to MAX',
		short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in. Fugiat corporis assumenda optio beatae asperiores fugit tempora explicabo sint deleniti magnam sapiente ducimus ratione sunt nostrum similique sequi, saepe corrupti ipsam animi voluptate harum, ut delectus error? Minus voluptatum veniam, dolor ea sunt ratione nihil saepe maxime, quos necessitatibus ad nulla! Voluptatibus, optio quisquam voluptatum perferendis incidunt eum adipisci distinctio tempora natus et? Tempore, dicta mollitia voluptatibus ratione veniam inventore ipsam dolorum quaerat aliquid praesentium sequi doloremque officia iusto? Totam consequuntur unde iusto alias inventore similique quibusdam asperiores aliquid ut vero! Nostrum corrupti sed, atque illum recusandae tempora odio ipsam deleniti, debitis quos corporis obcaecati. Labore vero dicta nesciunt unde ea nulla maxime at error iste eum, quod possimus voluptas laudantium accusamus beatae debitis aspernatur eaque placeat, aliquam sed commodi cupiditate! Saepe enim non earum excepturi, molestias accusantium deserunt? Sed iste consectetur in provident corrupti laboriosam asperiores at beatae dicta, consequatur neque minus veniam voluptate ut quam vel quis suscipit autem reiciendis rerum dolore. Facere tenetur qui possimus consequuntur alias blanditiis facilis, magni porro reprehenderit nihil officiis corrupti, quis maiores magnam labore accusantium, veniam modi soluta est? Repudiandae inventore a voluptatem architecto consequatur provident ullam explicabo impedit pariatur unde laudantium, excepturi in doloribus possimus rem, corporis minus dolores deleniti veritatis itaque dignissimos at? Nisi soluta dignissimos mollitia aperiam? Possimus non esse earum tenetur reiciendis qui hic ex perferendis nesciunt eveniet et saepe repellendus nam, similique, in incidunt deserunt veritatis. A voluptatem illo facilis perspiciatis. Laudantium sapiente numquam praesentium in voluptatibus quidem. Exercitationem qui ea ipsum quia quidem quae saepe, ullam illo omnis velit voluptatibus in nulla recusandae dolores? Porro, nostrum odit. Ab voluptates, distinctio non incidunt quisquam, nihil dolor sequi provident quis iusto eius explicabo minus enim quasi sint voluptas similique facilis nobis quos porro maiores deleniti ducimus eligendi corporis. Aperiam incidunt, consequatur doloribus velit ipsa facilis veritatis? Aliquid, iure reprehenderit quas atque corporis rerum earum suscipit, magnam laboriosam pariatur nesciunt, nihil sit id nam. Suscipit possimus, minima at velit tempore nisi provident magni in distinctio eveniet nobis quidem molestiae aliquam commodi impedit maiores, voluptate iusto animi dignissimos? Numquam perspiciatis adipisci accusantium ex placeat impedit mollitia dicta fugit itaque ad repudiandae, natus animi fugiat eum tenetur, beatae delectus nostrum quibusdam excepturi consequuntur molestias asperiores. Corrupti, maiores non. Assumenda, iste repellat natus officiis numquam molestiae, excepturi dolorem dolorum delectus nesciunt deleniti vitae tempore tenetur deserunt voluptates. Nemo repellendus suscipit quo odio nihil, hic numquam distinctio doloremque magni, at ipsa debitis perferendis fugiat fuga soluta explicabo? Provident omnis exercitationem earum illum, vitae ad similique eos doloribus vero, ut itaque sunt tempore, repellat temporibus voluptates placeat velit fuga magnam. Iste similique quidem, doloremque aspernatur obcaecati non unde ut rem ullam cum aperiam odit quibusdam laborum fuga consequuntur quos suscipit omnis cumque culpa accusamus? Amet exercitationem impedit iste reiciendis natus quia, iusto accusamus, harum, aspernatur modi aliquam. Culpa autem sunt eius iure necessitatibus architecto error quia explicabo officia voluptas sint ipsam, neque expedita reiciendis? Qui officia eum nulla deserunt velit, maxime odit sapiente!',
		length: 7,
		fees: 499,
		rating: 4.1,
		instructor: 'Max Muller',
		student_count: 1600,
		difficulty: 'Beginner',
		categories: ['Machine Learning'],
		reviews: [
			{
				id: 1,
				title: 'Great Course',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 5,
				user: 'Jinil Thakkar'
			},
			{
				id: 2,
				title: 'Clear Explanation',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 2,
				user: 'Manav Bhatia'
			},
			{
				id: 3,
				title: 'Loved it!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 4,
				user: 'Yash Thakkar'
			},
			{
				id: 4,
				title: 'Thanks a lot!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 1,
				user: 'Dhruv Arya'
			},
		],
		modules: [
			{
				id: 1,
				title: 'Introduction',
				content: [
					{
						id: 1,
						type: 'video',
						title: "Let's get started",
						src: '/assets/course-video.mp4',
						length: 4
					}
				]
			},

			{
				id: 2,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 2 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 2 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 2 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 3,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 3 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 3 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 3 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 4,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 4 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 4 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 4 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 5,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 5 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 5 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 5 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 6,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 6 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 6 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 6 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
		]
	},
	{
		id: 3,
		title: 'Corporate Ethics',
		short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in. Fugiat corporis assumenda optio beatae asperiores fugit tempora explicabo sint deleniti magnam sapiente ducimus ratione sunt nostrum similique sequi, saepe corrupti ipsam animi voluptate harum, ut delectus error? Minus voluptatum veniam, dolor ea sunt ratione nihil saepe maxime, quos necessitatibus ad nulla! Voluptatibus, optio quisquam voluptatum perferendis incidunt eum adipisci distinctio tempora natus et? Tempore, dicta mollitia voluptatibus ratione veniam inventore ipsam dolorum quaerat aliquid praesentium sequi doloremque officia iusto? Totam consequuntur unde iusto alias inventore similique quibusdam asperiores aliquid ut vero! Nostrum corrupti sed, atque illum recusandae tempora odio ipsam deleniti, debitis quos corporis obcaecati. Labore vero dicta nesciunt unde ea nulla maxime at error iste eum, quod possimus voluptas laudantium accusamus beatae debitis aspernatur eaque placeat, aliquam sed commodi cupiditate! Saepe enim non earum excepturi, molestias accusantium deserunt? Sed iste consectetur in provident corrupti laboriosam asperiores at beatae dicta, consequatur neque minus veniam voluptate ut quam vel quis suscipit autem reiciendis rerum dolore. Facere tenetur qui possimus consequuntur alias blanditiis facilis, magni porro reprehenderit nihil officiis corrupti, quis maiores magnam labore accusantium, veniam modi soluta est? Repudiandae inventore a voluptatem architecto consequatur provident ullam explicabo impedit pariatur unde laudantium, excepturi in doloribus possimus rem, corporis minus dolores deleniti veritatis itaque dignissimos at? Nisi soluta dignissimos mollitia aperiam? Possimus non esse earum tenetur reiciendis qui hic ex perferendis nesciunt eveniet et saepe repellendus nam, similique, in incidunt deserunt veritatis. A voluptatem illo facilis perspiciatis. Laudantium sapiente numquam praesentium in voluptatibus quidem. Exercitationem qui ea ipsum quia quidem quae saepe, ullam illo omnis velit voluptatibus in nulla recusandae dolores? Porro, nostrum odit. Ab voluptates, distinctio non incidunt quisquam, nihil dolor sequi provident quis iusto eius explicabo minus enim quasi sint voluptas similique facilis nobis quos porro maiores deleniti ducimus eligendi corporis. Aperiam incidunt, consequatur doloribus velit ipsa facilis veritatis? Aliquid, iure reprehenderit quas atque corporis rerum earum suscipit, magnam laboriosam pariatur nesciunt, nihil sit id nam. Suscipit possimus, minima at velit tempore nisi provident magni in distinctio eveniet nobis quidem molestiae aliquam commodi impedit maiores, voluptate iusto animi dignissimos? Numquam perspiciatis adipisci accusantium ex placeat impedit mollitia dicta fugit itaque ad repudiandae, natus animi fugiat eum tenetur, beatae delectus nostrum quibusdam excepturi consequuntur molestias asperiores. Corrupti, maiores non. Assumenda, iste repellat natus officiis numquam molestiae, excepturi dolorem dolorum delectus nesciunt deleniti vitae tempore tenetur deserunt voluptates. Nemo repellendus suscipit quo odio nihil, hic numquam distinctio doloremque magni, at ipsa debitis perferendis fugiat fuga soluta explicabo? Provident omnis exercitationem earum illum, vitae ad similique eos doloribus vero, ut itaque sunt tempore, repellat temporibus voluptates placeat velit fuga magnam. Iste similique quidem, doloremque aspernatur obcaecati non unde ut rem ullam cum aperiam odit quibusdam laborum fuga consequuntur quos suscipit omnis cumque culpa accusamus? Amet exercitationem impedit iste reiciendis natus quia, iusto accusamus, harum, aspernatur modi aliquam. Culpa autem sunt eius iure necessitatibus architecto error quia explicabo officia voluptas sint ipsam, neque expedita reiciendis? Qui officia eum nulla deserunt velit, maxime odit sapiente!',
		length: 6,
		fees: 499,
		rating: 4.7,
		instructor: 'Queeny Esther',
		student_count: 1600,
		difficulty: 'Beginner',
		categories: ['Personality Development'],
		reviews: [
			{
				id: 1,
				title: 'Great Course',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 5,
				user: 'Jinil Thakkar'
			},
			{
				id: 2,
				title: 'Clear Explanation',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 2,
				user: 'Manav Bhatia'
			},
			{
				id: 3,
				title: 'Loved it!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 4,
				user: 'Yash Thakkar'
			},
			{
				id: 4,
				title: 'Thanks a lot!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 1,
				user: 'Dhruv Arya'
			},
		],
		modules: [
			{
				id: 1,
				title: 'Introduction',
				content: [
					{
						id: 1,
						type: 'video',
						title: "Let's get started",
						src: '/assets/course-video.mp4',
						length: 4
					}
				]
			},

			{
				id: 2,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 2 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 2 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 2 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 3,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 3 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 3 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 3 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 4,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 4 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 4 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 4 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 5,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 5 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 5 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 5 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 6,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 6 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 6 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 6 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
		]
	},
	{
		id: 3,
		title: 'Learn C++: from Zero to Hero',
		short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in. Fugiat corporis assumenda optio beatae asperiores fugit tempora explicabo sint deleniti magnam sapiente ducimus ratione sunt nostrum similique sequi, saepe corrupti ipsam animi voluptate harum, ut delectus error? Minus voluptatum veniam, dolor ea sunt ratione nihil saepe maxime, quos necessitatibus ad nulla! Voluptatibus, optio quisquam voluptatum perferendis incidunt eum adipisci distinctio tempora natus et? Tempore, dicta mollitia voluptatibus ratione veniam inventore ipsam dolorum quaerat aliquid praesentium sequi doloremque officia iusto? Totam consequuntur unde iusto alias inventore similique quibusdam asperiores aliquid ut vero! Nostrum corrupti sed, atque illum recusandae tempora odio ipsam deleniti, debitis quos corporis obcaecati. Labore vero dicta nesciunt unde ea nulla maxime at error iste eum, quod possimus voluptas laudantium accusamus beatae debitis aspernatur eaque placeat, aliquam sed commodi cupiditate! Saepe enim non earum excepturi, molestias accusantium deserunt? Sed iste consectetur in provident corrupti laboriosam asperiores at beatae dicta, consequatur neque minus veniam voluptate ut quam vel quis suscipit autem reiciendis rerum dolore. Facere tenetur qui possimus consequuntur alias blanditiis facilis, magni porro reprehenderit nihil officiis corrupti, quis maiores magnam labore accusantium, veniam modi soluta est? Repudiandae inventore a voluptatem architecto consequatur provident ullam explicabo impedit pariatur unde laudantium, excepturi in doloribus possimus rem, corporis minus dolores deleniti veritatis itaque dignissimos at? Nisi soluta dignissimos mollitia aperiam? Possimus non esse earum tenetur reiciendis qui hic ex perferendis nesciunt eveniet et saepe repellendus nam, similique, in incidunt deserunt veritatis. A voluptatem illo facilis perspiciatis. Laudantium sapiente numquam praesentium in voluptatibus quidem. Exercitationem qui ea ipsum quia quidem quae saepe, ullam illo omnis velit voluptatibus in nulla recusandae dolores? Porro, nostrum odit. Ab voluptates, distinctio non incidunt quisquam, nihil dolor sequi provident quis iusto eius explicabo minus enim quasi sint voluptas similique facilis nobis quos porro maiores deleniti ducimus eligendi corporis. Aperiam incidunt, consequatur doloribus velit ipsa facilis veritatis? Aliquid, iure reprehenderit quas atque corporis rerum earum suscipit, magnam laboriosam pariatur nesciunt, nihil sit id nam. Suscipit possimus, minima at velit tempore nisi provident magni in distinctio eveniet nobis quidem molestiae aliquam commodi impedit maiores, voluptate iusto animi dignissimos? Numquam perspiciatis adipisci accusantium ex placeat impedit mollitia dicta fugit itaque ad repudiandae, natus animi fugiat eum tenetur, beatae delectus nostrum quibusdam excepturi consequuntur molestias asperiores. Corrupti, maiores non. Assumenda, iste repellat natus officiis numquam molestiae, excepturi dolorem dolorum delectus nesciunt deleniti vitae tempore tenetur deserunt voluptates. Nemo repellendus suscipit quo odio nihil, hic numquam distinctio doloremque magni, at ipsa debitis perferendis fugiat fuga soluta explicabo? Provident omnis exercitationem earum illum, vitae ad similique eos doloribus vero, ut itaque sunt tempore, repellat temporibus voluptates placeat velit fuga magnam. Iste similique quidem, doloremque aspernatur obcaecati non unde ut rem ullam cum aperiam odit quibusdam laborum fuga consequuntur quos suscipit omnis cumque culpa accusamus? Amet exercitationem impedit iste reiciendis natus quia, iusto accusamus, harum, aspernatur modi aliquam. Culpa autem sunt eius iure necessitatibus architecto error quia explicabo officia voluptas sint ipsam, neque expedita reiciendis? Qui officia eum nulla deserunt velit, maxime odit sapiente!',
		length: 12,
		fees: 499,
		rating: 4.9,
		instructor: 'Ezhil Aparajit',
		student_count: 1600,
		difficulty: 'Beginner',
		categories: ['Programming'],
		reviews: [
			{
				id: 1,
				title: 'Great Course',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 5,
				user: 'Jinil Thakkar'
			},
			{
				id: 2,
				title: 'Clear Explanation',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 2,
				user: 'Manav Bhatia'
			},
			{
				id: 3,
				title: 'Loved it!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 4,
				user: 'Yash Thakkar'
			},
			{
				id: 4,
				title: 'Thanks a lot!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 1,
				user: 'Dhruv Arya'
			},
		],
		modules: [
			{
				id: 1,
				title: 'Introduction',
				content: [
					{
						id: 1,
						type: 'video',
						title: "Let's get started",
						src: '/assets/course-video.mp4',
						length: 4
					}
				]
			},

			{
				id: 2,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 2 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 2 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 2 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 3,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 3 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 3 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 3 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 4,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 4 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 4 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 4 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 5,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 5 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 5 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 5 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 6,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 6 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 6 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 6 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
		]
	},
	{
		id: 4,
		title: 'Learn C#: Basics to Masters',
		short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in. Fugiat corporis assumenda optio beatae asperiores fugit tempora explicabo sint deleniti magnam sapiente ducimus ratione sunt nostrum similique sequi, saepe corrupti ipsam animi voluptate harum, ut delectus error? Minus voluptatum veniam, dolor ea sunt ratione nihil saepe maxime, quos necessitatibus ad nulla! Voluptatibus, optio quisquam voluptatum perferendis incidunt eum adipisci distinctio tempora natus et? Tempore, dicta mollitia voluptatibus ratione veniam inventore ipsam dolorum quaerat aliquid praesentium sequi doloremque officia iusto? Totam consequuntur unde iusto alias inventore similique quibusdam asperiores aliquid ut vero! Nostrum corrupti sed, atque illum recusandae tempora odio ipsam deleniti, debitis quos corporis obcaecati. Labore vero dicta nesciunt unde ea nulla maxime at error iste eum, quod possimus voluptas laudantium accusamus beatae debitis aspernatur eaque placeat, aliquam sed commodi cupiditate! Saepe enim non earum excepturi, molestias accusantium deserunt? Sed iste consectetur in provident corrupti laboriosam asperiores at beatae dicta, consequatur neque minus veniam voluptate ut quam vel quis suscipit autem reiciendis rerum dolore. Facere tenetur qui possimus consequuntur alias blanditiis facilis, magni porro reprehenderit nihil officiis corrupti, quis maiores magnam labore accusantium, veniam modi soluta est? Repudiandae inventore a voluptatem architecto consequatur provident ullam explicabo impedit pariatur unde laudantium, excepturi in doloribus possimus rem, corporis minus dolores deleniti veritatis itaque dignissimos at? Nisi soluta dignissimos mollitia aperiam? Possimus non esse earum tenetur reiciendis qui hic ex perferendis nesciunt eveniet et saepe repellendus nam, similique, in incidunt deserunt veritatis. A voluptatem illo facilis perspiciatis. Laudantium sapiente numquam praesentium in voluptatibus quidem. Exercitationem qui ea ipsum quia quidem quae saepe, ullam illo omnis velit voluptatibus in nulla recusandae dolores? Porro, nostrum odit. Ab voluptates, distinctio non incidunt quisquam, nihil dolor sequi provident quis iusto eius explicabo minus enim quasi sint voluptas similique facilis nobis quos porro maiores deleniti ducimus eligendi corporis. Aperiam incidunt, consequatur doloribus velit ipsa facilis veritatis? Aliquid, iure reprehenderit quas atque corporis rerum earum suscipit, magnam laboriosam pariatur nesciunt, nihil sit id nam. Suscipit possimus, minima at velit tempore nisi provident magni in distinctio eveniet nobis quidem molestiae aliquam commodi impedit maiores, voluptate iusto animi dignissimos? Numquam perspiciatis adipisci accusantium ex placeat impedit mollitia dicta fugit itaque ad repudiandae, natus animi fugiat eum tenetur, beatae delectus nostrum quibusdam excepturi consequuntur molestias asperiores. Corrupti, maiores non. Assumenda, iste repellat natus officiis numquam molestiae, excepturi dolorem dolorum delectus nesciunt deleniti vitae tempore tenetur deserunt voluptates. Nemo repellendus suscipit quo odio nihil, hic numquam distinctio doloremque magni, at ipsa debitis perferendis fugiat fuga soluta explicabo? Provident omnis exercitationem earum illum, vitae ad similique eos doloribus vero, ut itaque sunt tempore, repellat temporibus voluptates placeat velit fuga magnam. Iste similique quidem, doloremque aspernatur obcaecati non unde ut rem ullam cum aperiam odit quibusdam laborum fuga consequuntur quos suscipit omnis cumque culpa accusamus? Amet exercitationem impedit iste reiciendis natus quia, iusto accusamus, harum, aspernatur modi aliquam. Culpa autem sunt eius iure necessitatibus architecto error quia explicabo officia voluptas sint ipsam, neque expedita reiciendis? Qui officia eum nulla deserunt velit, maxime odit sapiente!',
		length: 20,
		fees: 499,
		rating: 4.8,
		instructor: 'Ezhil Aparajit',
		student_count: 1600,
		difficulty: 'Advanced',
		categories: ['Programming'],
		reviews: [
			{
				id: 1,
				title: 'Great Course',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 5,
				user: 'Jinil Thakkar'
			},
			{
				id: 2,
				title: 'Clear Explanation',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 2,
				user: 'Manav Bhatia'
			},
			{
				id: 3,
				title: 'Loved it!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 4,
				user: 'Yash Thakkar'
			},
			{
				id: 4,
				title: 'Thanks a lot!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 1,
				user: 'Dhruv Arya'
			},
		],
		modules: [
			{
				id: 1,
				title: 'Introduction',
				content: [
					{
						id: 1,
						type: 'video',
						title: "Let's get started",
						src: '/assets/course-video.mp4',
						length: 4
					}
				]
			},

			{
				id: 2,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 2 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 2 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 2 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 3,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 3 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 3 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 3 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 4,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 4 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 4 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 4 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 5,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 5 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 5 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 5 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 6,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 6 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 6 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 6 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
		]
	},
	{
		id: 5,
		title: 'JS Advanced Concepts',
		short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in. Fugiat corporis assumenda optio beatae asperiores fugit tempora explicabo sint deleniti magnam sapiente ducimus ratione sunt nostrum similique sequi, saepe corrupti ipsam animi voluptate harum, ut delectus error? Minus voluptatum veniam, dolor ea sunt ratione nihil saepe maxime, quos necessitatibus ad nulla! Voluptatibus, optio quisquam voluptatum perferendis incidunt eum adipisci distinctio tempora natus et? Tempore, dicta mollitia voluptatibus ratione veniam inventore ipsam dolorum quaerat aliquid praesentium sequi doloremque officia iusto? Totam consequuntur unde iusto alias inventore similique quibusdam asperiores aliquid ut vero! Nostrum corrupti sed, atque illum recusandae tempora odio ipsam deleniti, debitis quos corporis obcaecati. Labore vero dicta nesciunt unde ea nulla maxime at error iste eum, quod possimus voluptas laudantium accusamus beatae debitis aspernatur eaque placeat, aliquam sed commodi cupiditate! Saepe enim non earum excepturi, molestias accusantium deserunt? Sed iste consectetur in provident corrupti laboriosam asperiores at beatae dicta, consequatur neque minus veniam voluptate ut quam vel quis suscipit autem reiciendis rerum dolore. Facere tenetur qui possimus consequuntur alias blanditiis facilis, magni porro reprehenderit nihil officiis corrupti, quis maiores magnam labore accusantium, veniam modi soluta est? Repudiandae inventore a voluptatem architecto consequatur provident ullam explicabo impedit pariatur unde laudantium, excepturi in doloribus possimus rem, corporis minus dolores deleniti veritatis itaque dignissimos at? Nisi soluta dignissimos mollitia aperiam? Possimus non esse earum tenetur reiciendis qui hic ex perferendis nesciunt eveniet et saepe repellendus nam, similique, in incidunt deserunt veritatis. A voluptatem illo facilis perspiciatis. Laudantium sapiente numquam praesentium in voluptatibus quidem. Exercitationem qui ea ipsum quia quidem quae saepe, ullam illo omnis velit voluptatibus in nulla recusandae dolores? Porro, nostrum odit. Ab voluptates, distinctio non incidunt quisquam, nihil dolor sequi provident quis iusto eius explicabo minus enim quasi sint voluptas similique facilis nobis quos porro maiores deleniti ducimus eligendi corporis. Aperiam incidunt, consequatur doloribus velit ipsa facilis veritatis? Aliquid, iure reprehenderit quas atque corporis rerum earum suscipit, magnam laboriosam pariatur nesciunt, nihil sit id nam. Suscipit possimus, minima at velit tempore nisi provident magni in distinctio eveniet nobis quidem molestiae aliquam commodi impedit maiores, voluptate iusto animi dignissimos? Numquam perspiciatis adipisci accusantium ex placeat impedit mollitia dicta fugit itaque ad repudiandae, natus animi fugiat eum tenetur, beatae delectus nostrum quibusdam excepturi consequuntur molestias asperiores. Corrupti, maiores non. Assumenda, iste repellat natus officiis numquam molestiae, excepturi dolorem dolorum delectus nesciunt deleniti vitae tempore tenetur deserunt voluptates. Nemo repellendus suscipit quo odio nihil, hic numquam distinctio doloremque magni, at ipsa debitis perferendis fugiat fuga soluta explicabo? Provident omnis exercitationem earum illum, vitae ad similique eos doloribus vero, ut itaque sunt tempore, repellat temporibus voluptates placeat velit fuga magnam. Iste similique quidem, doloremque aspernatur obcaecati non unde ut rem ullam cum aperiam odit quibusdam laborum fuga consequuntur quos suscipit omnis cumque culpa accusamus? Amet exercitationem impedit iste reiciendis natus quia, iusto accusamus, harum, aspernatur modi aliquam. Culpa autem sunt eius iure necessitatibus architecto error quia explicabo officia voluptas sint ipsam, neque expedita reiciendis? Qui officia eum nulla deserunt velit, maxime odit sapiente!',
		length: 16,
		fees: 499,
		rating: 4.5,
		instructor: 'Ezhil Aparajit',
		student_count: 1600,
		difficulty: 'Advanced',
		categories: ['Programming'],
		reviews: [
			{
				id: 1,
				title: 'Great Course',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 5,
				user: 'Jinil Thakkar'
			},
			{
				id: 2,
				title: 'Clear Explanation',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 2,
				user: 'Manav Bhatia'
			},
			{
				id: 3,
				title: 'Loved it!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 4,
				user: 'Yash Thakkar'
			},
			{
				id: 4,
				title: 'Thanks a lot!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 1,
				user: 'Dhruv Arya'
			},
		],
		modules: [
			{
				id: 1,
				title: 'Introduction',
				content: [
					{
						id: 1,
						type: 'video',
						title: "Let's get started",
						src: '/assets/course-video.mp4',
						length: 4
					}
				]
			},

			{
				id: 2,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 2 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 2 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 2 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 3,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 3 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 3 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 3 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 4,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 4 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 4 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 4 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 5,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 5 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 5 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 5 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 6,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 6 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 6 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 6 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
		]
	},
	{
		id: 6,
		title: 'Flutter Complete Bootcamp',
		short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in. Fugiat corporis assumenda optio beatae asperiores fugit tempora explicabo sint deleniti magnam sapiente ducimus ratione sunt nostrum similique sequi, saepe corrupti ipsam animi voluptate harum, ut delectus error? Minus voluptatum veniam, dolor ea sunt ratione nihil saepe maxime, quos necessitatibus ad nulla! Voluptatibus, optio quisquam voluptatum perferendis incidunt eum adipisci distinctio tempora natus et? Tempore, dicta mollitia voluptatibus ratione veniam inventore ipsam dolorum quaerat aliquid praesentium sequi doloremque officia iusto? Totam consequuntur unde iusto alias inventore similique quibusdam asperiores aliquid ut vero! Nostrum corrupti sed, atque illum recusandae tempora odio ipsam deleniti, debitis quos corporis obcaecati. Labore vero dicta nesciunt unde ea nulla maxime at error iste eum, quod possimus voluptas laudantium accusamus beatae debitis aspernatur eaque placeat, aliquam sed commodi cupiditate! Saepe enim non earum excepturi, molestias accusantium deserunt? Sed iste consectetur in provident corrupti laboriosam asperiores at beatae dicta, consequatur neque minus veniam voluptate ut quam vel quis suscipit autem reiciendis rerum dolore. Facere tenetur qui possimus consequuntur alias blanditiis facilis, magni porro reprehenderit nihil officiis corrupti, quis maiores magnam labore accusantium, veniam modi soluta est? Repudiandae inventore a voluptatem architecto consequatur provident ullam explicabo impedit pariatur unde laudantium, excepturi in doloribus possimus rem, corporis minus dolores deleniti veritatis itaque dignissimos at? Nisi soluta dignissimos mollitia aperiam? Possimus non esse earum tenetur reiciendis qui hic ex perferendis nesciunt eveniet et saepe repellendus nam, similique, in incidunt deserunt veritatis. A voluptatem illo facilis perspiciatis. Laudantium sapiente numquam praesentium in voluptatibus quidem. Exercitationem qui ea ipsum quia quidem quae saepe, ullam illo omnis velit voluptatibus in nulla recusandae dolores? Porro, nostrum odit. Ab voluptates, distinctio non incidunt quisquam, nihil dolor sequi provident quis iusto eius explicabo minus enim quasi sint voluptas similique facilis nobis quos porro maiores deleniti ducimus eligendi corporis. Aperiam incidunt, consequatur doloribus velit ipsa facilis veritatis? Aliquid, iure reprehenderit quas atque corporis rerum earum suscipit, magnam laboriosam pariatur nesciunt, nihil sit id nam. Suscipit possimus, minima at velit tempore nisi provident magni in distinctio eveniet nobis quidem molestiae aliquam commodi impedit maiores, voluptate iusto animi dignissimos? Numquam perspiciatis adipisci accusantium ex placeat impedit mollitia dicta fugit itaque ad repudiandae, natus animi fugiat eum tenetur, beatae delectus nostrum quibusdam excepturi consequuntur molestias asperiores. Corrupti, maiores non. Assumenda, iste repellat natus officiis numquam molestiae, excepturi dolorem dolorum delectus nesciunt deleniti vitae tempore tenetur deserunt voluptates. Nemo repellendus suscipit quo odio nihil, hic numquam distinctio doloremque magni, at ipsa debitis perferendis fugiat fuga soluta explicabo? Provident omnis exercitationem earum illum, vitae ad similique eos doloribus vero, ut itaque sunt tempore, repellat temporibus voluptates placeat velit fuga magnam. Iste similique quidem, doloremque aspernatur obcaecati non unde ut rem ullam cum aperiam odit quibusdam laborum fuga consequuntur quos suscipit omnis cumque culpa accusamus? Amet exercitationem impedit iste reiciendis natus quia, iusto accusamus, harum, aspernatur modi aliquam. Culpa autem sunt eius iure necessitatibus architecto error quia explicabo officia voluptas sint ipsam, neque expedita reiciendis? Qui officia eum nulla deserunt velit, maxime odit sapiente!',
		length: 15,
		fees: 499,
		rating: 3.9,
		instructor: 'Max Muller',
		student_count: 1600,
		difficulty: 'Beginner',
		categories: ['Mobile Development'],
		reviews: [
			{
				id: 1,
				title: 'Great Course',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 5,
				user: 'Jinil Thakkar'
			},
			{
				id: 2,
				title: 'Clear Explanation',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 2,
				user: 'Manav Bhatia'
			},
			{
				id: 3,
				title: 'Loved it!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 4,
				user: 'Yash Thakkar'
			},
			{
				id: 4,
				title: 'Thanks a lot!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 1,
				user: 'Dhruv Arya'
			},
		],
		modules: [
			{
				id: 1,
				title: 'Introduction',
				content: [
					{
						id: 1,
						type: 'video',
						title: "Let's get started",
						src: '/assets/course-video.mp4',
						length: 4
					}
				]
			},

			{
				id: 2,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 2 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 2 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 2 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 3,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 3 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 3 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 3 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 4,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 4 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 4 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 4 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 5,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 5 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 5 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 5 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 6,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 6 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 6 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 6 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
		]
	},
	{
		id: 7,
		title: 'Python for ML: zero to mastery',
		short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in. Fugiat corporis assumenda optio beatae asperiores fugit tempora explicabo sint deleniti magnam sapiente ducimus ratione sunt nostrum similique sequi, saepe corrupti ipsam animi voluptate harum, ut delectus error? Minus voluptatum veniam, dolor ea sunt ratione nihil saepe maxime, quos necessitatibus ad nulla! Voluptatibus, optio quisquam voluptatum perferendis incidunt eum adipisci distinctio tempora natus et? Tempore, dicta mollitia voluptatibus ratione veniam inventore ipsam dolorum quaerat aliquid praesentium sequi doloremque officia iusto? Totam consequuntur unde iusto alias inventore similique quibusdam asperiores aliquid ut vero! Nostrum corrupti sed, atque illum recusandae tempora odio ipsam deleniti, debitis quos corporis obcaecati. Labore vero dicta nesciunt unde ea nulla maxime at error iste eum, quod possimus voluptas laudantium accusamus beatae debitis aspernatur eaque placeat, aliquam sed commodi cupiditate! Saepe enim non earum excepturi, molestias accusantium deserunt? Sed iste consectetur in provident corrupti laboriosam asperiores at beatae dicta, consequatur neque minus veniam voluptate ut quam vel quis suscipit autem reiciendis rerum dolore. Facere tenetur qui possimus consequuntur alias blanditiis facilis, magni porro reprehenderit nihil officiis corrupti, quis maiores magnam labore accusantium, veniam modi soluta est? Repudiandae inventore a voluptatem architecto consequatur provident ullam explicabo impedit pariatur unde laudantium, excepturi in doloribus possimus rem, corporis minus dolores deleniti veritatis itaque dignissimos at? Nisi soluta dignissimos mollitia aperiam? Possimus non esse earum tenetur reiciendis qui hic ex perferendis nesciunt eveniet et saepe repellendus nam, similique, in incidunt deserunt veritatis. A voluptatem illo facilis perspiciatis. Laudantium sapiente numquam praesentium in voluptatibus quidem. Exercitationem qui ea ipsum quia quidem quae saepe, ullam illo omnis velit voluptatibus in nulla recusandae dolores? Porro, nostrum odit. Ab voluptates, distinctio non incidunt quisquam, nihil dolor sequi provident quis iusto eius explicabo minus enim quasi sint voluptas similique facilis nobis quos porro maiores deleniti ducimus eligendi corporis. Aperiam incidunt, consequatur doloribus velit ipsa facilis veritatis? Aliquid, iure reprehenderit quas atque corporis rerum earum suscipit, magnam laboriosam pariatur nesciunt, nihil sit id nam. Suscipit possimus, minima at velit tempore nisi provident magni in distinctio eveniet nobis quidem molestiae aliquam commodi impedit maiores, voluptate iusto animi dignissimos? Numquam perspiciatis adipisci accusantium ex placeat impedit mollitia dicta fugit itaque ad repudiandae, natus animi fugiat eum tenetur, beatae delectus nostrum quibusdam excepturi consequuntur molestias asperiores. Corrupti, maiores non. Assumenda, iste repellat natus officiis numquam molestiae, excepturi dolorem dolorum delectus nesciunt deleniti vitae tempore tenetur deserunt voluptates. Nemo repellendus suscipit quo odio nihil, hic numquam distinctio doloremque magni, at ipsa debitis perferendis fugiat fuga soluta explicabo? Provident omnis exercitationem earum illum, vitae ad similique eos doloribus vero, ut itaque sunt tempore, repellat temporibus voluptates placeat velit fuga magnam. Iste similique quidem, doloremque aspernatur obcaecati non unde ut rem ullam cum aperiam odit quibusdam laborum fuga consequuntur quos suscipit omnis cumque culpa accusamus? Amet exercitationem impedit iste reiciendis natus quia, iusto accusamus, harum, aspernatur modi aliquam. Culpa autem sunt eius iure necessitatibus architecto error quia explicabo officia voluptas sint ipsam, neque expedita reiciendis? Qui officia eum nulla deserunt velit, maxime odit sapiente!',
		length: 14,
		fees: 499,
		rating: 3.6,
		instructor: 'Andrei Neagoie',
		student_count: 1600,
		difficulty: 'Intermediate',
		categories: ['Machine Learning'],
		reviews: [
			{
				id: 1,
				title: 'Great Course',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 5,
				user: 'Jinil Thakkar'
			},
			{
				id: 2,
				title: 'Clear Explanation',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 2,
				user: 'Manav Bhatia'
			},
			{
				id: 3,
				title: 'Loved it!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 4,
				user: 'Yash Thakkar'
			},
			{
				id: 4,
				title: 'Thanks a lot!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 1,
				user: 'Dhruv Arya'
			},
		],
		modules: [
			{
				id: 1,
				title: 'Introduction',
				content: [
					{
						id: 1,
						type: 'video',
						title: "Let's get started",
						src: '/assets/course-video.mp4',
						length: 4
					}
				]
			},

			{
				id: 2,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 2 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 2 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 2 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 3,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 3 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 3 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 3 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 4,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 4 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 4 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 4 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 5,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 5 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 5 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 5 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 6,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 6 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 6 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 6 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
		]
	},
	{
		id: 8,
		title: 'Data Structures and Algorithms',
		short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in. Fugiat corporis assumenda optio beatae asperiores fugit tempora explicabo sint deleniti magnam sapiente ducimus ratione sunt nostrum similique sequi, saepe corrupti ipsam animi voluptate harum, ut delectus error? Minus voluptatum veniam, dolor ea sunt ratione nihil saepe maxime, quos necessitatibus ad nulla! Voluptatibus, optio quisquam voluptatum perferendis incidunt eum adipisci distinctio tempora natus et? Tempore, dicta mollitia voluptatibus ratione veniam inventore ipsam dolorum quaerat aliquid praesentium sequi doloremque officia iusto? Totam consequuntur unde iusto alias inventore similique quibusdam asperiores aliquid ut vero! Nostrum corrupti sed, atque illum recusandae tempora odio ipsam deleniti, debitis quos corporis obcaecati. Labore vero dicta nesciunt unde ea nulla maxime at error iste eum, quod possimus voluptas laudantium accusamus beatae debitis aspernatur eaque placeat, aliquam sed commodi cupiditate! Saepe enim non earum excepturi, molestias accusantium deserunt? Sed iste consectetur in provident corrupti laboriosam asperiores at beatae dicta, consequatur neque minus veniam voluptate ut quam vel quis suscipit autem reiciendis rerum dolore. Facere tenetur qui possimus consequuntur alias blanditiis facilis, magni porro reprehenderit nihil officiis corrupti, quis maiores magnam labore accusantium, veniam modi soluta est? Repudiandae inventore a voluptatem architecto consequatur provident ullam explicabo impedit pariatur unde laudantium, excepturi in doloribus possimus rem, corporis minus dolores deleniti veritatis itaque dignissimos at? Nisi soluta dignissimos mollitia aperiam? Possimus non esse earum tenetur reiciendis qui hic ex perferendis nesciunt eveniet et saepe repellendus nam, similique, in incidunt deserunt veritatis. A voluptatem illo facilis perspiciatis. Laudantium sapiente numquam praesentium in voluptatibus quidem. Exercitationem qui ea ipsum quia quidem quae saepe, ullam illo omnis velit voluptatibus in nulla recusandae dolores? Porro, nostrum odit. Ab voluptates, distinctio non incidunt quisquam, nihil dolor sequi provident quis iusto eius explicabo minus enim quasi sint voluptas similique facilis nobis quos porro maiores deleniti ducimus eligendi corporis. Aperiam incidunt, consequatur doloribus velit ipsa facilis veritatis? Aliquid, iure reprehenderit quas atque corporis rerum earum suscipit, magnam laboriosam pariatur nesciunt, nihil sit id nam. Suscipit possimus, minima at velit tempore nisi provident magni in distinctio eveniet nobis quidem molestiae aliquam commodi impedit maiores, voluptate iusto animi dignissimos? Numquam perspiciatis adipisci accusantium ex placeat impedit mollitia dicta fugit itaque ad repudiandae, natus animi fugiat eum tenetur, beatae delectus nostrum quibusdam excepturi consequuntur molestias asperiores. Corrupti, maiores non. Assumenda, iste repellat natus officiis numquam molestiae, excepturi dolorem dolorum delectus nesciunt deleniti vitae tempore tenetur deserunt voluptates. Nemo repellendus suscipit quo odio nihil, hic numquam distinctio doloremque magni, at ipsa debitis perferendis fugiat fuga soluta explicabo? Provident omnis exercitationem earum illum, vitae ad similique eos doloribus vero, ut itaque sunt tempore, repellat temporibus voluptates placeat velit fuga magnam. Iste similique quidem, doloremque aspernatur obcaecati non unde ut rem ullam cum aperiam odit quibusdam laborum fuga consequuntur quos suscipit omnis cumque culpa accusamus? Amet exercitationem impedit iste reiciendis natus quia, iusto accusamus, harum, aspernatur modi aliquam. Culpa autem sunt eius iure necessitatibus architecto error quia explicabo officia voluptas sint ipsam, neque expedita reiciendis? Qui officia eum nulla deserunt velit, maxime odit sapiente!',
		length: 25,
		fees: 499,
		rating: 4.8,
		instructor: 'Andrei Neagoie',
		student_count: 1600,
		difficulty: 'Intermediate',
		categories: ['Programming'],
		reviews: [
			{
				id: 1,
				title: 'Great Course',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 5,
				user: 'Jinil Thakkar'
			},
			{
				id: 2,
				title: 'Clear Explanation',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 2,
				user: 'Manav Bhatia'
			},
			{
				id: 3,
				title: 'Loved it!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 4,
				user: 'Yash Thakkar'
			},
			{
				id: 4,
				title: 'Thanks a lot!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 1,
				user: 'Dhruv Arya'
			},
		],
		modules: [
			{
				id: 1,
				title: 'Introduction',
				content: [
					{
						id: 1,
						type: 'video',
						title: "Let's get started",
						src: '/assets/course-video.mp4',
						length: 4
					}
				]
			},

			{
				id: 2,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 2 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 2 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 2 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 3,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 3 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 3 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 3 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 4,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 4 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 4 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 4 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 5,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 5 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 5 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 5 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 6,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 6 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 6 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 6 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
		]
	},
	{
		id: 9,
		title: 'SQL Masterclass',
		short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in. Fugiat corporis assumenda optio beatae asperiores fugit tempora explicabo sint deleniti magnam sapiente ducimus ratione sunt nostrum similique sequi, saepe corrupti ipsam animi voluptate harum, ut delectus error? Minus voluptatum veniam, dolor ea sunt ratione nihil saepe maxime, quos necessitatibus ad nulla! Voluptatibus, optio quisquam voluptatum perferendis incidunt eum adipisci distinctio tempora natus et? Tempore, dicta mollitia voluptatibus ratione veniam inventore ipsam dolorum quaerat aliquid praesentium sequi doloremque officia iusto? Totam consequuntur unde iusto alias inventore similique quibusdam asperiores aliquid ut vero! Nostrum corrupti sed, atque illum recusandae tempora odio ipsam deleniti, debitis quos corporis obcaecati. Labore vero dicta nesciunt unde ea nulla maxime at error iste eum, quod possimus voluptas laudantium accusamus beatae debitis aspernatur eaque placeat, aliquam sed commodi cupiditate! Saepe enim non earum excepturi, molestias accusantium deserunt? Sed iste consectetur in provident corrupti laboriosam asperiores at beatae dicta, consequatur neque minus veniam voluptate ut quam vel quis suscipit autem reiciendis rerum dolore. Facere tenetur qui possimus consequuntur alias blanditiis facilis, magni porro reprehenderit nihil officiis corrupti, quis maiores magnam labore accusantium, veniam modi soluta est? Repudiandae inventore a voluptatem architecto consequatur provident ullam explicabo impedit pariatur unde laudantium, excepturi in doloribus possimus rem, corporis minus dolores deleniti veritatis itaque dignissimos at? Nisi soluta dignissimos mollitia aperiam? Possimus non esse earum tenetur reiciendis qui hic ex perferendis nesciunt eveniet et saepe repellendus nam, similique, in incidunt deserunt veritatis. A voluptatem illo facilis perspiciatis. Laudantium sapiente numquam praesentium in voluptatibus quidem. Exercitationem qui ea ipsum quia quidem quae saepe, ullam illo omnis velit voluptatibus in nulla recusandae dolores? Porro, nostrum odit. Ab voluptates, distinctio non incidunt quisquam, nihil dolor sequi provident quis iusto eius explicabo minus enim quasi sint voluptas similique facilis nobis quos porro maiores deleniti ducimus eligendi corporis. Aperiam incidunt, consequatur doloribus velit ipsa facilis veritatis? Aliquid, iure reprehenderit quas atque corporis rerum earum suscipit, magnam laboriosam pariatur nesciunt, nihil sit id nam. Suscipit possimus, minima at velit tempore nisi provident magni in distinctio eveniet nobis quidem molestiae aliquam commodi impedit maiores, voluptate iusto animi dignissimos? Numquam perspiciatis adipisci accusantium ex placeat impedit mollitia dicta fugit itaque ad repudiandae, natus animi fugiat eum tenetur, beatae delectus nostrum quibusdam excepturi consequuntur molestias asperiores. Corrupti, maiores non. Assumenda, iste repellat natus officiis numquam molestiae, excepturi dolorem dolorum delectus nesciunt deleniti vitae tempore tenetur deserunt voluptates. Nemo repellendus suscipit quo odio nihil, hic numquam distinctio doloremque magni, at ipsa debitis perferendis fugiat fuga soluta explicabo? Provident omnis exercitationem earum illum, vitae ad similique eos doloribus vero, ut itaque sunt tempore, repellat temporibus voluptates placeat velit fuga magnam. Iste similique quidem, doloremque aspernatur obcaecati non unde ut rem ullam cum aperiam odit quibusdam laborum fuga consequuntur quos suscipit omnis cumque culpa accusamus? Amet exercitationem impedit iste reiciendis natus quia, iusto accusamus, harum, aspernatur modi aliquam. Culpa autem sunt eius iure necessitatibus architecto error quia explicabo officia voluptas sint ipsam, neque expedita reiciendis? Qui officia eum nulla deserunt velit, maxime odit sapiente!',
		length: 16,
		fees: 499,
		rating: 4,
		instructor: 'Andrei Neagoie',
		student_count: 1600,
		difficulty: 'Advanced',
		categories: ['DBMS'],
		reviews: [
			{
				id: 1,
				title: 'Great Course',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 5,
				user: 'Jinil Thakkar'
			},
			{
				id: 2,
				title: 'Clear Explanation',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 2,
				user: 'Manav Bhatia'
			},
			{
				id: 3,
				title: 'Loved it!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 4,
				user: 'Yash Thakkar'
			},
			{
				id: 4,
				title: 'Thanks a lot!',
				desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, atque',
				rating: 1,
				user: 'Dhruv Arya'
			},
		],
		modules: [
			{
				id: 1,
				title: 'Introduction',
				content: [
					{
						id: 1,
						type: 'video',
						title: "Let's get started",
						src: '/assets/course-video.mp4',
						length: 4
					}
				]
			},

			{
				id: 2,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 2 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 2 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 2 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 3,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 3 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 3 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 3 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			
			{
				id: 4,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 4 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 4 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 4 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 5,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 5 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 5 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 5 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
			{
				id: 6,
				title: 'Lorem ipsum',
				content: [
					{
						id: 1,
						type: 'video',
						title: 'Module 6 Video 1',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 2,
						type: 'video',
						title: 'Module 6 Video 2',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 3,
						type: 'video',
						title: 'Module 6 Video 3',
						src: '/assets/course-video.mp4',
						length: 4
					},
					{
						id: 4,
						type: 'quiz',
						title: 'Module quiz',
						src: '',
						length: 5
					},
					{
						id: 5,
						type: 'assignment',
						title: 'Module assignment',
						src: '',
						length: 5
					}
				]
			},
		]
	},
];