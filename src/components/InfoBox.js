import React from 'react'

function Infobox (props) {
	const { message, gridId, startInd, offset } = props

	return (
		<div>
			<p>Grid id: {gridId}</p>
			<p>Your message length: {message.length}/68</p>
			<p>Your current start index: {startInd.digraphs} at [{startInd.xy[0]}, {startInd.xy[1]}]</p>
			<p>Your current offset: {offset}</p>
		</div>
	)
}

export default Infobox
