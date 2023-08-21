export interface User {
	image: {
		png: string;
		webp: string;
	};
	username: string;
}

export interface Comment {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: User;
	replies: Reply[];
}

export interface Reply {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: User;
	replyingTo: string;
}

export interface ButtonOptions {
	primary: string;
	danger: string;
	secondary: string;
	ghost: string;
}

export type ButtonClickHandler = () => void;
