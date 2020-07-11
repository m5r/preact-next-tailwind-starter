import { useState } from "preact/hooks";
import { NextPage } from "next";
import Router from "next/router";
import Link from "next/link";

import useRequest from "../useRequest";

type APIResponse = { users: string[]; };

const Index: NextPage = () => {
	const { data: usersHistory } = useRequest<APIResponse>(
		{ url: "/api/users-history" },
		{ initialData: { users: [] } },
	);
	const [username, setUsername] = useState("");

	async function onFormSubmit() {
		return Router.push(`/starred/${username}`);
	}

	return (
		<div>
			<h1>Github User's Starred Projects</h1>

			<form onSubmit={onFormSubmit}>
				<label htmlFor="username">Username:</label>
				<input
					id="username"
					type="text"
					placeholder="m5r"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>

				<input type="submit" value="Submit" />
			</form>

			{Boolean(usersHistory?.users.length) && (
				<section>
					Recent searches

					<ul>
						{usersHistory?.users.map((user) => (
							<li key={user}>
								<Link href={`/starred/${user}`}>
									<a>{user}</a>
								</Link>
							</li>
						))}
					</ul>
				</section>
			)}
		</div>
	);
};

export default Index;
