let users: Set<string> = new Set();

export function add(user: string): void {
	if (users.has(user)) {
		users.delete(user);
	}

	users.add(user);
}

export function getAll(): string[] {
	return Array.from(users);
}
