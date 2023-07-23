export interface UserComment {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: {
		image: {
			png: string;
			webp: string;
		};
		username: string;
	};
	replies: UserReply[];
}

export interface UserReply {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	replyingTo: string;
	user: {
		image: {
			png: string;
			webp: string;
		};
		username: string;
	};
}
