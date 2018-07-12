import { injectGlobal } from 'styled-components';

// tslint:disable-next-line
injectGlobal`

	/* http://meyerweb.com/eric/tools/css/reset/
	v2.0 | 20110126
	License: none (public domain)
	*/

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	/* Some base styles */
	html { font-size: 62.5%; background-color: #2C3E50; }
	body {
	font-size: 1.5em;
	line-height: 1.6;
	font-weight: 400;
	font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
	color: #222; }
	h1, h2, h3, h4, h5, h6 {
		margin-top: 0;
		margin-bottom: 2rem;
		font-weight: 300; }
	h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}
	h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }

	/* HELPERS */
	.center { text-align: center }

`
