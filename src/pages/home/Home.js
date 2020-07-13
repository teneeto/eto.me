import React, { Fragment, useEffect, useContext } from 'react';
import { Element } from 'react-scroll'

import { PitchSlate } from './PitchSlate';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Header, Footer, Scroll } from '../../components';
import { getContext } from '../../store';

const Home = () => {
	const [state] = useContext(getContext)

	useEffect(() => {
	}, [])

	return (
		<Fragment>
			<Header home />
			<Scroll visible={state.sections} />
			<main>
				<Element name='pitchslate'>
					<PitchSlate />
				</Element>

				<Element name='projects'>
					<Projects />
				</Element>

				<Element name='contact'>
					<Contact />
				</Element>
			</main>

			<Element name='footer'>
				<Footer home />
			</Element>
		</Fragment>
	)
};
export default Home;
