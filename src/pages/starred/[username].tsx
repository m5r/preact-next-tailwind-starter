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

			<ul>
				{projects.map(project => <li key={project.id}>{project.name}</li>)}
			</ul>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<Props, Query> = async (context) => {
	const username = context.params?.username;
	const url = `https://api.github.com/users/${username}/starred?per_page=100`;
	const { data } = await axios.get<APIResponse>(url);

	return {
		props: { projects: data },
	}
}

export default UserStarred;
