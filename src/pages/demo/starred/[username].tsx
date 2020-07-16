import { FunctionComponent, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

import useRequest from "../../../hooks/useRequest";
import Layout from "../../../components/layout";

type APIResponse = GithubProject[];

type Props = {
	projects: GithubProject[] | null;
	prevPage: number | null;
	nextPage: number | null;
	lastPage: number | null;
};

type Query = {
	username: string;
	page?: string;
}

function buildPageNumbers(lastPage: number): number[] {
	let pageNumbers = [];

	for (let page = 1; page <= lastPage; page++) {
		pageNumbers.push(page);
	}

	return pageNumbers;
}

const UserStarred: NextPage<Props> = (props) => {
	const router = useRouter();
	const username = router.query.username as string;
	const page = router.query.page && !Array.isArray(router.query.page) ? parseInt(router.query.page, 10) : 1;
	const pageNumbers = buildPageNumbers(props.lastPage ?? page);

	if (!props.projects || props.projects.length === 0) {
		return (
			<Layout title={`${username}'s Starred Projects`}>
				{username} has no starred projects
			</Layout>
		);
	}

	const { data: projects } = useRequest<APIResponse>(
		{ url: `https://api.github.com/users/${username}/starred?per_page=30&page=${page}` },
		{ initialData: props.projects },
	);

	useEffect(() => {
		axios.put("/api/users-history", { user: username });
	}, [username]);

	if (!projects) {
		return (
			<Layout title={`${username}'s Starred Projects`}>
				Loading {username}'s starred projects...
			</Layout>
		);
	}

	return (
		<Layout title={`${username}'s Starred Projects`}>
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
													<svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
														<path
															d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													{project.stargazers_count}
												</div>
												<div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
													<svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
														<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
													</svg>
													{project.open_issues_count}
												</div>
											</div>
											<div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
												<svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
													<path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
														  clipRule="evenodd" />
												</svg>
												<span>
												Last updated on <time dateTime={project.updated_at}>{new Date(project.updated_at).toLocaleDateString("fr-FR")}</time>
											</span>
											</div>
										</div>
									</div>
								</a>
							</li>
						),
					)}
				</ul>
			</div>

			<Pagination
				pageNumbers={pageNumbers}
				username={username}
				currentPage={page}
				prevPage={props.prevPage}
				nextPage={props.nextPage}
			/>
		</Layout>
	);
};

type PaginationProps = {
	pageNumbers: number[];
	username: string;
	currentPage: number;
	prevPage: number | null;
	nextPage: number | null;
};

const Pagination: FunctionComponent<PaginationProps> = ({
	pageNumbers,
	username,
	currentPage,
	prevPage,
	nextPage,
}) => {
	const pageStyle = "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-400";
	const currentPageStyle = "border-indigo-500 text-indigo-600 focus:text-indigo-800 focus:border-indigo-700";

	return (
		<nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
			<div className="w-0 flex-1 flex">
				{prevPage !== null ? (
					<Link href={`/demo/starred/${username}?page=${prevPage}`}>
						<a
							className="-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"
						>
							<svg className="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
								/>
							</svg>
							Previous
						</a>
					</Link>
				) : null}
			</div>

			<div className="hidden md:flex">
				{pageNumbers.map(page => (
					<Link
						href={`/demo/starred/${username}?page=${page}`}
					>
						<a
							className={`${page === currentPage ? currentPageStyle : pageStyle} -mt-px border-t-2 pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium focus:outline-none transition ease-in-out duration-150`}
						>
							{page}
						</a>
					</Link>
				))}
			</div>

			<div className="w-0 flex-1 flex justify-end">
				{nextPage !== null ? (
					<Link
						href={`/demo/starred/${username}?page=${nextPage}`}
					>
						<a
							className="-mt-px border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"
						>
							Next
							<svg className="ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								/>
							</svg>
						</a>
					</Link>
				) : null}
			</div>
		</nav>
	);
};

export const getServerSideProps: GetServerSideProps<Props, Query> = async (context) => {
	const username = context.params?.username;
	const page = context.query.page && !Array.isArray(context.query.page) ? parseInt(context.query.page, 10) : 1;
	const url = `https://api.github.com/users/${username}/starred?per_page=30&page=${page}`;
	try {
		const { data, headers } = await axios.get<APIResponse>(url);
		const links = headers.link ? (await import("parse-link-header")).default(headers.link) : null;

		return {
			props: {
				projects: data,
				prevPage: links?.prev ? parseInt(links.prev.page, 10) : null,
				nextPage: links?.next ? parseInt(links.next.page, 10) : null,
				lastPage: links?.last ? parseInt(links.last.page, 10) : null,
			},
		};
	} catch {
		return {
			props: {
				projects: null,
				lastPage: null,
				nextPage: null,
				prevPage: null,
			},
		};
	}
};

export default UserStarred;

export type GithubProject = {
	id: number,
	node_id: string,
	name: string,
	full_name: string,
	private: false,
	owner: {
		login: string,
		id: number,
		node_id: string,
		avatar_url: string,
		gravatar_id: string,
		url: string,
		html_url: string,
		followers_url: string,
		following_url: string,
		gists_url: string,
		starred_url: string,
		subscriptions_url: string,
		organizations_url: string,
		repos_url: string,
		events_url: string,
		received_events_url: string,
		type: string,
		site_admin: false
	},
	html_url: string,
	description: string,
	fork: false,
	url: string,
	forks_url: string,
	keys_url: string,
	collaborators_url: string,
	teams_url: string,
	hooks_url: string,
	issue_events_url: string,
	events_url: string,
	assignees_url: string,
	branches_url: string,
	tags_url: string,
	blobs_url: string,
	git_tags_url: string,
	git_refs_url: string,
	trees_url: string,
	statuses_url: string,
	languages_url: string,
	stargazers_url: string,
	contributors_url: string,
	subscribers_url: string,
	subscription_url: string,
	commits_url: string,
	git_commits_url: string,
	comments_url: string,
	issue_comment_url: string,
	contents_url: string,
	compare_url: string,
	merges_url: string,
	archive_url: string,
	downloads_url: string,
	issues_url: string,
	pulls_url: string,
	milestones_url: string,
	notifications_url: string,
	labels_url: string,
	releases_url: string,
	deployments_url: string,
	created_at: string,
	updated_at: string,
	pushed_at: string,
	git_url: string,
	ssh_url: string,
	clone_url: string,
	svn_url: string,
	homepage: string,
	size: number,
	stargazers_count: number,
	watchers_count: number,
	language: string,
	has_issues: true,
	has_projects: true,
	has_downloads: true,
	has_wiki: true,
	has_pages: false,
	forks_count: number,
	mirror_url: null,
	archived: false,
	disabled: false,
	open_issues_count: number,
	license: {
		key: string,
		name: string,
		spdx_id: string,
		url: string,
		node_id: string
	},
	forks: number,
	open_issues: number,
	watchers: number,
	default_branch: string
};
