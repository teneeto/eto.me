import React, { Fragment, useEffect, useContext } from 'react';
import { Element } from 'react-scroll'

import { PitchSlate } from './PitchSlate';
import { Projects } from './Projects';
import { About } from './About';
import { Footer } from './Footer';
import { Contact } from './Contact';
import { Header, Scroll } from '../../components';
import { getContext } from '../../store';
import { SET_SECTIONS } from '../../store/actions'

const Home = () => {
	const [state, dispatch] = useContext(getContext)

	useEffect(() => {
		window.onscroll = function () {
			if (this.pageYOffset > 3200) {
				dispatch({
					type: SET_SECTIONS, payload: {
						home: false, projects: false, about: false, contact: false, footer: true,
					}
				})
			} else if (this.pageYOffset > 2400) {
				dispatch({
					type: SET_SECTIONS, payload: {
						home: false, projects: false, about: false, contact: true, footer: false,
					}
				})
			} else if (this.pageYOffset > 1600) {
				dispatch({
					type: SET_SECTIONS, payload: {
						home: false, projects: false, about: true, contact: false, footer: false,
					}
				})
			} else if (this.pageYOffset > 800) {
				dispatch({
					type: SET_SECTIONS, payload: {
						home: false, projects: true, about: false, contact: false, footer: false,
					}
				})
			} else {
				dispatch({
					type: SET_SECTIONS, payload: {
						home: true, projects: false, about: false, contact: false, footer: false,
					}
				})
			}
		}

	}, [dispatch])

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
