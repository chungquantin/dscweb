import * as ASSETS from "./asset";
import faker from "faker";
//FIXME this is for blog only
export const mock_data = [
	{
		author: "Tin Quan Chung",
		category: "Web Development",
		title: "21 React UI Component Libraries You Should Start Using from Today",
		body:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis doloribus cum alias aspernatur inventore officia, provident placeat. Vel maiores adipisci rem facilis error, delectus, modi harum quidem facere repellendus nam!",
		date: "2001-11-01",
		src: ASSETS.BLOG_PICTURE,
		avatar: ASSETS.AVATAR,
		to: "#",
	},
	{
		author: "Khai Truong",
		category: "Programming",
		title: "Functional Programing For Your Everyday JavaScript Developer",
		body:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis doloribus cum alias aspernatur inventore officia, provident placeat. Vel maiores adipisci rem facilis error, delectus, modi harum quidem facere repellendus nam!",
		date: "2001-11-01",
		src: ASSETS.BLOG_PICTURE_2,
		avatar: ASSETS.AVATAR_2,
		to: "#",
	},
	{
		author: "Tin Quan Chung",
		category: "Web Development",
		title: "21 React UI Component Libraries You Should Start Using from Today",
		body:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis doloribus cum alias aspernatur inventore officia, provident placeat. Vel maiores adipisci rem facilis error, delectus, modi harum quidem facere repellendus nam!",
		date: "2001-11-01",
		src: ASSETS.BLOG_PICTURE_3,
		avatar: ASSETS.AVATAR,
		to: "#",
	},
	{
		author: "Tin Quan Chung",
		category: "Web Development",
		title: "React Visual Editors in 2020",
		body:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis doloribus cum alias aspernatur inventore officia, provident placeat. Vel maiores adipisci rem facilis error, delectus, modi harum quidem facere repellendus nam!",
		date: "2001-11-01",
		src: ASSETS.BLOG_PICTURE_4,
		avatar: ASSETS.AVATAR,
		to: "#",
	},
	{
		author: "Tin Quan Chung",
		category: "UI/UX Design",
		title: "Persisting State on React Apps",
		body:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis doloribus cum alias aspernatur inventore officia, provident placeat. Vel maiores adipisci rem facilis error, delectus, modi harum quidem facere repellendus nam!",
		date: "2001-11-01",
		src: ASSETS.BLOG_PICTURE_5,
		avatar: ASSETS.AVATAR,
		to: "#",
	},
	{
		author: "Tin Quan Chung",
		category: "Game Development",
		title: "Practical Advice for Front-End Web Development",
		body:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis doloribus cum alias aspernatur inventore officia, provident placeat. Vel maiores adipisci rem facilis error, delectus, modi harum quidem facere repellendus nam!",
		date: "2001-11-01",
		src: ASSETS.BLOG_PICTURE_6,
		avatar: ASSETS.AVATAR,
		to: "#",
	},
];

const event_mock_data = [
	{
		header: "RMIT Club Day Sem B",
		date: "20th September 2020",
		to: "#",
		picture: ASSETS.EVENT_PICTURE_1,
	},
	{
		header: "Artificial Intelligence Seminar",
		date: "20th September 2020",
		to: "#",
		picture: ASSETS.EVENT_PICTURE_2,
	},
	{
		header: "Club Bonding",
		date: "20th September 2020",
		to: "#",
		picture: ASSETS.EVENT_PICTURE_3,
	},
];

const category_mock_data = [];
for (let i = 0; i < 20; i++) {
	category_mock_data.push({
		name: faker.name.jobTitle(),
	});
}

export { category_mock_data, event_mock_data };
