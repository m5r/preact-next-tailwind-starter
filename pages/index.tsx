import { h } from "preact";
import { useState } from "preact/hooks";
import { NextPage } from "next";
import Router from "next/router";

const Index: NextPage = () => {
	const [username, setUsername] = useState("");

	function onFormSubmit() {
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
		</div>
	);
};

export default Index;
