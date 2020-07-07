import React, { Fragment, useEffect, useContext } from 'react';
import { Element } from 'react-scroll'

import { PitchSlate } from './PitchSlate';
import { Projects } from './Projects';
import { About } from './About';
import { Footer } from './Footer';
import { Contact } from './Contact';
import { Header, Scroll } from '../../components';
import { getContext } from '../../store';

const Home = () => {
	const [state] = useContext(getContext)

	useEffect(() => {
	}, [])

	return (
		<Fragment>
			<Header visible={state.sections} />
			<Scroll visible={state.sections} />
			<main>
				<Element name='pitchslate'>
					<PitchSlate />
				</Element>

				<Element name='projects'>
					<Projects />
				</Element>

				<Element name='about'>
					<About />
				</Element>

				<Element name='contact'>
					<Contact />
				</Element>
			</main>

			<Element name='footer'>
				<Footer />
			</Element>
		</Fragment>
	)
};
export default Home;
