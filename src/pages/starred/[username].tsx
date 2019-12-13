import { h } from "preact";
import { NextPage } from "next";
import { useRouter } from "next/router";

type Props = {
    projects: { name: string; id: number; }[];
}

const UserStarred: NextPage<Props> = ({ projects }) => {
    const router = useRouter();
    const { username } = router.query;

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
    if (typeof fetch === "undefined") {
        await import("isomorphic-fetch");
    }

    const username = query.username;
    const url = `https://api.github.com/users/${username}/starred?per_page=100`;
    const response = await fetch(url);

    return { projects: await response.json() };
};

export default UserStarred;
