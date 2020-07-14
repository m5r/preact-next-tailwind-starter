import { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";

import Transition from "../components/transition";
import OutsideAlerter from "../components/outside-alerter";

const appName = "Logo";

const Index: NextPage = () => {
	return (
		<section>
			<Hero />

			<Stats />

			<Features />

			<CTA />

			<Testimonials />

			<Newsletter />

			<Footer />
		</section>
	);
};

function Hero() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const openMobileMenu = () => setIsMobileMenuOpen(true);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	return (
		<div className="relative bg-white overflow-hidden">
			<div className="max-w-screen-xl mx-auto ">
				<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
					<svg
						className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
						fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>

					<div className="relative pt-6 px-4 sm:px-6 lg:px-8">
						<nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
							<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
								<div className="flex items-center justify-between w-full md:w-auto">
									<Link href="/">
										<a aria-label="Home">
											<h1 className="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
												{appName}
											</h1>
										</a>
									</Link>
									<div className="-mr-2 flex items-center md:hidden">
										<button
											onClick={openMobileMenu}
											type="button"
											className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
											id="main-menu"
											aria-label="Main menu"
											aria-haspopup="true"
										>
											<svg className="h-6 w-6" stroke="currentColor" fill="none"
												 viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
													  d="M4 6h16M4 12h16M4 18h16" />
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div className="hidden md:block md:ml-10 md:pr-4">
								<a
									href="#features"
									className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									Features
								</a>
								<Link href="/demo">
									<a
										className="ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out"
									>
										Live demo
									</a>
								</Link>
							</div>
						</nav>
					</div>

					<OutsideAlerter handler={closeMobileMenu}>
						<Transition
							show={isMobileMenuOpen}
							enter="duration-150 ease-out"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="duration-100 ease-in"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div
								className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
								<div className="rounded-lg shadow-md">
									<div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu"
										 aria-orientation="vertical" aria-labelledby="main-menu">
										<div className="px-5 pt-4 flex items-center justify-between">
											<div>
												<h1 className="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
													{appName}
												</h1>
											</div>
											<div className="-mr-2">
												<button
													onClick={closeMobileMenu}
													type="button"
													className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
													aria-label="Close menu"
												>
													<svg className="h-6 w-6" stroke="currentColor" fill="none"
														 viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round"
															  strokeWidth="2"
															  d="M6 18L18 6M6 6l12 12" />
													</svg>
												</button>
											</div>
										</div>
										<div className="px-2 pt-2 pb-3">
											<a
												onClick={closeMobileMenu}
												href="#features"
												className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
												role="menuitem"
											>
												Features
											</a>
										</div>
										<div>
											<Link href="/demo">
												<a
													onClick={closeMobileMenu}
													className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
													role="menuitem"
												>
													Live demo
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</Transition>
					</OutsideAlerter>

					<main
						className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
								This is your next <br /> <span
								className="text-indigo-600">serverless web app</span> <br /> boilerplate
							</h2>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
								Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
								commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
							</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<a href="#"
									   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
										Get started
									</a>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<Link href="/demo">
										<a
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
										>
											Live demo
										</a>
									</Link>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
					 src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
					 alt="" />
			</div>
		</div>
	);
}

function Stats() {
	return (
		<div className="bg-indigo-800">
			<div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
						Trusted by developers from over 80 planets
					</h2>
					<p className="mt-3 text-xl leading-7 text-indigo-200 sm:mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
					</p>
				</div>
				<dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
					<div className="flex flex-col">
						<dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
							Tacos
						</dt>
						<dd className="order-1 text-5xl leading-none font-extrabold text-white">
							100%
						</dd>
					</div>
					<div className="flex flex-col mt-10 sm:mt-0">
						<dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
							Delivery
						</dt>
						<dd className="order-1 text-5xl leading-none font-extrabold text-white">
							24/7
						</dd>
					</div>
					<div className="flex flex-col mt-10 sm:mt-0">
						<dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
							Calories
						</dt>
						<dd className="order-1 text-5xl leading-none font-extrabold text-white">
							429k+
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
}

function Features() {
	return (
		<div id="features" className="py-12 bg-white">
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
						Development
					</p>
					<h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
						A better way to bootstrap your app
					</h3>
					<p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
						Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
						veritatis in accusamus quisquam.
					</p>
				</div>

				<div className="mt-10">
					<ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
						<li>
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
										<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
											/>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-lg leading-6 font-medium text-gray-900">
										Deploy to the edge
									</h4>
									<p className="mt-2 text-base leading-6 text-gray-500">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
										perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
									</p>
								</div>
							</div>
						</li>
						<li className="mt-10 md:mt-0">
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
										<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
											/>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-lg leading-6 font-medium text-gray-900">
										No hidden fees
									</h4>
									<p className="mt-2 text-base leading-6 text-gray-500">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
										perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
									</p>
								</div>
							</div>
						</li>
						<li className="mt-10 md:mt-0">
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
										<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-lg leading-6 font-medium text-gray-900">
										Instantly productive
									</h4>
									<p className="mt-2 text-base leading-6 text-gray-500">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
										perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
									</p>
								</div>
							</div>
						</li>
						<li className="mt-10 md:mt-0">
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
										<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
											/>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-lg leading-6 font-medium text-gray-900">
										Mobile notifications
									</h4>
									<p className="mt-2 text-base leading-6 text-gray-500">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
										perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

function CTA() {
	return (
		<div className="bg-gray-50">
			<div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
					Ready to dive in?
					<br />
					<span className="text-indigo-600">Start building your web app today.</span>
				</h2>
				<div className="mt-8 flex justify-center">
					<div className="inline-flex rounded-md shadow">
						<a
							href="#"
							className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
						>
							Get started
						</a>
					</div>
					<div className="ml-3 inline-flex">
						<Link href="/demo">
							<a
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out"
							>
								Live demo
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

function Testimonials() {
	return (
		<section className="bg-indigo-800">
			<div className="max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
				<div
					className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16">
					<div className="md:flex-shrink-0">
						<svg fill="none" height="40" viewBox="0 0 105 40" role="img" aria-labelledby="svg-tuple">
							<title id="svg-tuple">Tuple</title>
							<path
								fill="#B4C6FC"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M18 1L0 7v19.5l6 2V34l18 6V8.5l-6 2V1zM8 29.167L18 32.5V12.608l4-1.333v25.95L8 32.558v-3.391z"
							/>
							<path
								fill="#B4C6FC"
								d="M42.9 28V17.45h-3.51v-3.392h11.486v3.393h-3.53V28H42.9zM59.481 28.254c-4.075 0-6.376-2.028-6.376-6.006v-8.19h4.407v8.014c0 1.814.39 2.71 1.97 2.71 1.56 0 1.95-.896 1.95-2.73v-7.994h4.445v8.15c0 4.193-2.496 6.046-6.396 6.046z"
							/>
							<path
								fill="#B4C6FC"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M68.965 14.058V28h4.407v-4.543h1.346c3.607 0 5.538-1.638 5.538-4.544v-.078c0-2.983-1.716-4.777-5.733-4.777h-5.558zm4.407 6.435h.916c1.17 0 1.775-.527 1.775-1.56v-.078c0-1.073-.605-1.502-1.755-1.502h-.936v3.14z"
							/>
							<path
								fill="#B4C6FC"
								d="M82.563 14.058V28h9.497v-3.412h-5.07v-10.53h-4.427zM94.562 28V14.058h9.906v3.393h-5.499v1.97h4.368v3.1h-4.368v2.086h5.811V28H94.562z"
							/>
						</svg>
					</div>
					<blockquote className="mt-8 md:flex-grow md:flex md:flex-col">
						<div className="relative text-lg leading-7 font-medium text-white md:flex-grow">
							<svg
								className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
								fill="currentColor"
								viewBox="0 0 32 32"
							>
								<path
									d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
								/>
							</svg>
							<p className="relative">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
								sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
							</p>
						</div>
						<footer className="mt-8">
							<div className="flex">
								<div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
									<img
										className="h-12 w-12 rounded-full"
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt="Photo of Judith Black (fictional character)"
									/>
								</div>
								<div className="ml-4">
									<div className="text-base leading-6 font-medium text-white">Judith Black</div>
									<div className="text-base leading-6 font-medium text-indigo-200">CEO, Tuple</div>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>
				<div
					className="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
					<div className="md:flex-shrink-0">
						<svg fill="none" height="40" viewBox="0 0 180 40" role="img" aria-labelledby="svg-workcation">
							<title id="svg-workcation">Workcation</title>
							<path
								fill="#B4C6FC"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M34.746 13.065l7.596 4.385a7.399 7.399 0 00-2.533-4.735h4.066a7.389 7.389 0 00-6.558-2.933l5.518-3.186a7.39 7.39 0 00-6.608.397 7.363 7.363 0 00-2.467 2.316 7.366 7.366 0 00-2.468-2.316 7.388 7.388 0 00-6.607-.397l5.517 3.186a7.39 7.39 0 00-6.557 2.933h4.064a7.402 7.402 0 00-2.53 4.736l7.593-4.385v20.37H27.84V18.193l-5.096 2.942.476-3.922a9.421 9.421 0 01.671-2.525h-3.08L0 19.89l.479 1.915 3.678-.92v12.551H.21v1.974h43.416v-1.974h-8.88V13.065zM17.97 23.569h5.92v9.867h-5.92v-9.867zm-6.907 3.947a1.974 1.974 0 100-3.947 1.974 1.974 0 000 3.947z"
							/>
							<path
								fill="#B4C6FC"
								d="M150.544 19.38c1.042 0 1.895-.853 1.895-1.871s-.853-1.895-1.895-1.895c-1.018 0-1.87.877-1.87 1.895a1.89 1.89 0 001.87 1.87zM149.029 32.641h3.055v-11.84h-3.055v11.84zM146.875 20.8v2.937h-2.676v4.926c0 1.279.924 1.302 2.676 1.207v2.771c-4.286.474-5.731-.781-5.731-3.978v-4.926h-2.06v-2.936h2.06v-2.392l3.055-.924v3.316h2.676zM118.495 32.973c2.321 0 4.334-1.232 5.352-3.079l-2.652-1.515c-.474.97-1.492 1.563-2.723 1.563-1.824 0-3.174-1.35-3.174-3.221 0-1.895 1.35-3.244 3.174-3.244 1.207 0 2.226.615 2.699 1.586l2.629-1.54c-.971-1.823-2.984-3.054-5.305-3.054-3.599 0-6.252 2.723-6.252 6.252 0 3.528 2.653 6.252 6.252 6.252z"
							/>
							<path
								fill="#B4C6FC"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M134.277 20.8v1.398c-.853-1.066-2.131-1.729-3.86-1.729-3.15 0-5.755 2.723-5.755 6.252 0 3.528 2.605 6.252 5.755 6.252 1.729 0 3.007-.663 3.86-1.729v1.397h3.055v-11.84h-3.055zm-3.292 9.26c-1.871 0-3.268-1.35-3.268-3.34 0-1.988 1.397-3.338 3.268-3.338 1.895 0 3.292 1.35 3.292 3.339 0 1.99-1.397 3.339-3.292 3.339zM166.792 26.72c0 3.53-2.795 6.253-6.276 6.253s-6.252-2.724-6.252-6.252c0-3.529 2.771-6.252 6.252-6.252s6.276 2.723 6.276 6.252zm-9.473 0c0 1.92 1.397 3.269 3.197 3.269 1.824 0 3.221-1.35 3.221-3.268 0-1.918-1.397-3.268-3.221-3.268-1.8 0-3.197 1.35-3.197 3.268z"
							/>
							<path
								fill="#B4C6FC"
								d="M175.524 20.469c-1.586 0-2.818.592-3.528 1.658V20.8h-3.055v11.84h3.055v-6.394c0-2.06 1.113-2.936 2.605-2.936 1.373 0 2.344.829 2.344 2.439v6.891H180v-7.27c0-3.15-1.966-4.902-4.476-4.902zM59.267 32.642h3.718L66.087 21.7l3.126 10.94h3.718l4.642-16.576h-3.434l-3.173 12.29-3.481-12.29H64.69l-3.457 12.29-3.174-12.29h-3.433l4.641 16.576z"
							/>
							<path
								fill="#B4C6FC"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M83.551 32.973c3.482 0 6.276-2.723 6.276-6.252 0-3.528-2.794-6.252-6.276-6.252-3.48 0-6.252 2.724-6.252 6.252 0 3.529 2.771 6.252 6.252 6.252zm0-2.984c-1.8 0-3.197-1.35-3.197-3.268 0-1.918 1.398-3.268 3.197-3.268 1.824 0 3.221 1.35 3.221 3.268 0 1.918-1.397 3.268-3.22 3.268z"
							/>
							<path
								fill="#B4C6FC"
								d="M95.031 20.8v2.037c.616-1.61 2.108-2.273 3.6-2.273v3.41c-1.587-.19-3.6.521-3.6 3.008v5.66h-3.055V20.8h3.055zM111.334 32.642l-4.902-5.992 4.76-5.85h-3.647l-4.073 5.21v-9.946h-3.055v16.578h3.055v-5.376l4.31 5.376h3.552z"
							/>
						</svg>
					</div>
					<blockquote className="mt-8 md:flex-grow md:flex md:flex-col">
						<div className="relative text-lg leading-7 font-medium text-white md:flex-grow">
							<svg
								className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
								fill="currentColor"
								viewBox="0 0 32 32"
							>
								<path
									d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
								/>
							</svg>
							<p className="relative">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
								sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo
								expedita voluptas culpa sapiente alias molestiae.
							</p>
						</div>
						<footer className="mt-8">
							<div className="flex">
								<div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
									<img
										className="h-12 w-12 rounded-full"
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt="Photo of Jack Black (fictional character)"
									/>
								</div>
								<div className="ml-4">
									<div className="text-base leading-6 font-medium text-white">Jack Black</div>
									<div className="text-base leading-6 font-medium text-indigo-200">CEO, Workcation</div>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>
			</div>
		</section>
	);
}

function Newsletter() {
	return (
		<div className="bg-white">
			<div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
				<div className="lg:w-0 lg:flex-1">
					<h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
						Want product news and updates?
						<br className="hidden sm:inline" />
						<span className="text-indigo-600" id="newsletter-headline">
							Sign up for our newsletter.
						</span>
					</h2>
				</div>
				<div className="mt-8 lg:mt-0 lg:ml-8">
					<form className="sm:flex" aria-labelledby="newsletter-headline">
						<input
							aria-label="Email address"
							type="email"
							className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
							placeholder="Enter your email"
							required
						/>
						<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
							<button
								className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
							>
								Notify me
							</button>
						</div>
					</form>
					<p className="mt-3 text-sm leading-5 text-gray-400">
						We care about the protection of your data. Read our <a href="#"
																			   className="text-gray-500 font-medium underline">Privacy
						Policy.</a>
					</p>
				</div>
			</div>
		</div>
	);
}

function Footer() {
	return (
		<div className="bg-white">
			<div
				className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center md:order-2">
					<a href="https://twitter.com/m5r_m" className="ml-6 text-gray-400 hover:text-gray-500">
						<span className="sr-only">Twitter</span>
						<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
						</svg>
					</a>
					<a href="https://github.com/m5r" className="ml-6 text-gray-400 hover:text-gray-500">
						<span className="sr-only">GitHub</span>
						<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path fillRule="evenodd"
								  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								  clipRule="evenodd" />
						</svg>
					</a>
				</div>
				<div className="mt-8 md:mt-0 md:order-1">
					<p className="text-center text-base leading-6 text-gray-400">
						&copy; <a href="https://www.capsulecorp.dev" target="_blank" rel="noopener noreferrer">Capsule
						Corp.</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Index;
