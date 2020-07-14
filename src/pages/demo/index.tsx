import { useState } from "react";
import { NextPage } from "next";
import Router from "next/router";
import Link from "next/link";

import Layout from "../../components/layout";

import useRequest from "../../useRequest";

type APIResponse = { users: string[]; };

const Index: NextPage = () => {
	const { data: usersHistory } = useRequest<APIResponse>(
		{ url: "/api/users-history" },
	);
	const [username, setUsername] = useState("");

	async function onFormSubmit() {
		return Router.push(`/demo/starred/${username}`);
	}

	return (
		<Layout title="Github User's Starred Projects">
			<form
				onSubmit={onFormSubmit}
				className="md:flex md:items-center md:justify-between"
			>
				<div className="flex-1 min-w-0">
					<label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">GitHub Username</label>
					<div className="mt-1 relative rounded-md shadow-sm">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<span className="text-gray-500 sm:text-sm sm:leading-5">http://github.com/</span>
						</div>
						<input
							id="username"
							className="form-input block w-full pl-38 sm:pl-33 sm:text-sm sm:leading-5"
							type="text"
							placeholder="m5r"
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
					</div>
				</div>

				<div className="mt-4 flex md:mt-auto md:ml-4">
					<span className="shadow-sm rounded-md ml-auto">
						<input
							type="submit"
							className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
							value="Submit"
						/>
					</span>
				</div>
			</form>

			{Boolean(usersHistory?.users.length) && (
				<section>
					Recent searches

					<ul>
						{usersHistory?.users.map((user) => (
							<li key={user}>
								<Link href={`/demo/starred/${user}`}>
									<a>{user}</a>
								</Link>
							</li>
						))}
					</ul>
				</section>
			)}
		</Layout>
	);
};

export default Index;
