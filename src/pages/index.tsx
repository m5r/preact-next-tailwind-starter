import { NextPage } from "next";
import Link from "next/link";
import { FunctionComponent } from "preact";

type FaIconProps = any;

const FaIcon: FunctionComponent<FaIconProps> = () => null;

const Index: NextPage = () => {
	return (
		<>
			<div>
				<section className="bg-indigo-lightest py-20">
					<div className="w-5/6 max-w-lg ml-auto mr-auto h-full">
						<div className="flex items-center justify-center text-center h-full">
							<div>
								<h1 className="text-4xl sm:text-5xl font-semibold mb-4">
									Todolist
								</h1>
								<h2 className="text-2xl sm:text-3xl text-indigo-darker opacity-75 font-normal leading-tight mb-8">
									An Open source todolist application made with Laravel And Vue.js
								</h2>

								<div className="flex flex-col sm:flex-row justify-center pt-8">
									<Link href="/register">
										<a
											className="bg-indigo no-underline hover:bg-indigo-dark text-xl text-white font-semibold px-8 py-2 rounded whitespace-no-wrap mb-2 sm:mb-0 sm:mr-2"
										>
											Register
										</a>
									</Link>
									<Link href="/login">
										<a
											className="bg-transparent no-underline text-xl text-indigo font-semibold hover:text-indigo-dark px-8 py-2 border border-indigo-lighter hover:border-indigo-light rounded whitespace-no-wrap mt-2 sm:mt-0 sm:ml-2"
										>
											Login
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-grey-lightest py-8">
					<div className="w-5/6 max-w-2xl ml-auto mr-auto mt-8 mb-8">
						<div className="flex flex-wrap -mx-6 -my-6">
							<div className="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">
								<div className="mb-8">
									<FaIcon icon="['far', 'lightbulb']" size="2x" className="text-indigo" />
								</div>
								<h3 className="text-3xl font-semibold mb-3">
									Never forget your tasks
								</h3>
								<p className="text-lg leading-normal text-grey-dark mb-8">
									You can add unlimited tasks and let the application manage it for you. You can add
									due date or completed status.
								</p>
							</div>
							<div className="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">
								<div className="mb-8">
									<FaIcon icon="['far', 'clock']" size="2x" className="text-indigo" />
								</div>
								<h3 className="text-3xl font-semibold mb-3">
									Real time application
								</h3>
								<p className="text-lg leading-normal text-grey-dark mb-8">
									Add a task on your computer and see it pop on your phone or tablet instantly.
								</p>
							</div>
							<div className="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">
								<div className="mb-8">
									<FaIcon icon="lock" size="2x" className="text-indigo" />
								</div>
								<h3 className="text-3xl font-semibold mb-3">
									Authentication with JWT
								</h3>
								<p className="text-lg leading-normal text-grey-dark mb-8">
									JWT are an important piece in ensuring trust and security in your application. JWT
									allow claims, such as user data, to be represented in a secure manner.
								</p>
							</div>
							<div className="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">
								<div className="mb-8">
									<FaIcon icon="mobile-alt" size="2x" className="text-indigo" />
								</div>
								<h3 className="text-3xl font-semibold mb-3">
									Responsive Design
								</h3>
								<p className="text-lg leading-normal text-grey-dark mb-8">
									Work on your desktop, your mobile and almost every devices you need.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-white py-8">
					<div className="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8">
						<div className="flex flex-col justify-center text-center pb-8">
							<h2 className="text-5xl font-semibold mb-4">
								Ready for production. Completely Open source and free.
							</h2>
							<h3 className="text-3xl text-indigo-darker opacity-75 font-normal mb-8">
								Try it now !
							</h3>
						</div>

						<div className="bg-white rounded shadow-lg overflow-hidden">
							<div className="flex flex-col-reverse md:flex-row">
								<div className="flex-1">
									<div className="bg-grey-lightest p-8">
										<h5 className="text-xl font-semibold mb-8">
											What you get when you sign up:
										</h5>
										<ul className="list-reset">
											<li className="mb-4">
												<div className="flex items-center">
													<div className="mr-4">
														<FaIcon icon="['far', 'check-circle']" size="2x"
															className="text-indigo" />
													</div>
													<p className="text-lg leading-normal">
														Unlimited tasks
													</p>
												</div>
											</li>
											<li className="mb-4">
												<div className="flex items-center">
													<div className="mr-4">
														<FaIcon icon="['far', 'check-circle']" size="2x"
															className="text-indigo" />
													</div>
													<p className="text-lg leading-normal">
														Real time application with Websockets
													</p>
												</div>
											</li>
											<li className="mb-4">
												<div className="flex items-center">
													<div className="mr-4">
														<FaIcon icon="['far', 'check-circle']" size="2x"
															className="text-indigo" />
													</div>
													<p className="text-lg leading-normal">
														Authentication with JWT
													</p>
												</div>
											</li>
											<li className="">
												<div className="flex items-center">
													<div className="mr-4">
														<FaIcon icon="['far', 'check-circle']" size="2x"
															className="text-indigo" />
													</div>
													<p className="text-lg leading-normal">
														Responsive Design
													</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="flex-1">
									<div className="flex flex-col items-center p-8 h-full">
										<div className="flex flex-1 mb-8">
											<div className="flex self-start items-center">
												<span className="text-3xl text-grey-dark mr-2">$</span>
												<span
													className="text-5xl font-semibold text-indigo mr-3"
													style={{ fontSize: "5.6rem" }}
												>
													0
												</span>
												<span className="text-xl text-grey-dark">/ month</span>
											</div>
										</div>
										<Link href="/register">
											<a
												className="bg-indigo hover:bg-indigo-dark no-underline text-xl text-white font-semibold px-6 py-3 text-center rounded whitespace-no-wrap w-full"
											>
												Getting started
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<footer className="bg-grey-lightest py-8">
					<p className="text-center text-grey text-xs mb-4">
						Made with <FaIcon icon="heart" className="text-red" /> by
						<a href="https://guillaumebriday.fr" rel="noopener" className="text-grey">
							Guillaume Briday
						</a>.
					</p>

					<p className="text-center text-grey text-xs">
						Source code available on
						<a
							href="https://github.com/guillaumebriday/todolist-frontend-vuejs"
							rel="noopener"
							className="text-grey"
						>
							<FaIcon icon="['fab', 'github']" />
							GitHub
						</a>.
					</p>
				</footer>
			</div>
		</>
	);
};

export default Index;
