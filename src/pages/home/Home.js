import React, { Fragment } from 'react';
import { PitchSlate } from './PitchSlate';
import { Projects } from './Projects';
import { About } from './About';
import { Footer } from './Footer';
import { Contact } from './Contact';
import { Header } from '../../components';

const Home = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<PitchSlate />
				<Projects />
				<About />
				<Contact />
			</main>
			<Footer />
		</Fragment>
	)
};
export default Home;
