import { useEffect } from "preact/hooks";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";

import useRequest from "../../useRequest";

import { GithubProject } from "../../github-project";

type APIResponse = GithubProject[];

type Props = {
	projects: GithubProject[];
};

type Query = {
	username: string;
}

const UserStarred: NextPage<Props> = (props) => {
	const router = useRouter();
	const username = router.query.username;

	const { data: projects } = useRequest<APIResponse>(
		{ url: `https://api.github.com/users/${username}/starred?per_page=100` },
		{ initialData: props.projects },
	);

	useEffect(() => {
		axios.put("/api/users-history", { user: username });
	}, [username]);

	if (!projects) {
		return (
			<div>
				{username} has no starred projects
			</div>
		);
	}

	return (
		<div>
			<h1>{username}'s Starred Projects</h1>

			<div className="bg-white shadow overflow-hidden sm:rounded-md">
				<ul>
					{projects.map(project => (
						<li key={project.id}>
							<a href={project.html_url} className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
								<div className="px-4 py-4 sm:px-6">
									<div className="flex items-center justify-between">
										<div className="text-sm leading-5 font-medium text-indigo-600 truncate">
											{project.name}
										</div>
										<div className="ml-2 flex-shrink-0 flex">
											<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
												{project.license?.name}
											</span>
										</div>
									</div>
									<div className="mt-2 sm:flex sm:justify-between">
										<div className="sm:flex">
											<div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
												<svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
												{project.stargazers_count}
											</div>
											<div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
												<svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
												{project.open_issues_count}
											</div>
										</div>
										<div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
											<svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
											<span>
												Last updated on <time dateTime={project.updated_at}>{new Date(project.updated_at).toLocaleDateString("fr-FR")}</time>
											</span>
										</div>
									</div>
								</div>
							</a>
						</li>
					)
					)}
				</ul>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<Props, Query> = async (context) => {
	const username = context.params?.username;
	const url = `https://api.github.com/users/${username}/starred?per_page=100`;
	const { data } = await axios.get<APIResponse>(url);

	return {
		props: { projects: data },
	};
};

export default UserStarred;
