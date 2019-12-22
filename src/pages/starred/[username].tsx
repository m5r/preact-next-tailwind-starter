import { NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";

import useRequest from "../../useRequest";

import { GithubProject } from "../../github-project";

type APIResponse = GithubProject[];

type InitialProps = {
    projects: GithubProject[];
};

type Props = InitialProps;

const UserStarred: NextPage<Props, InitialProps> = (props) => {
    const router = useRouter();
    const { username } = router.query;

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

UserStarred.getInitialProps = async ({ query }) => {
    const username = query.username;
    const url = `https://api.github.com/users/${username}/starred?per_page=100`;
    const { data } = await axios.get<APIResponse>(url);

    return { projects: data };
};

export default UserStarred;
