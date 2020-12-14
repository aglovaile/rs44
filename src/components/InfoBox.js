import React from 'react'

function Infobox (props) {
	const { message, gridId, startInd, offset } = props

	return (
		<div>
			<p>Grid id: {gridId}</p>
			<p>Your message length: {message.length}/68</p>
		</div>
	)
}

export default Infobox
