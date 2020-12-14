import React from 'react'

function Output (props) {
	const { cipherText } = props
	const splitText = cipherText.match(/.{1,5}/g)
	const outputText = splitText != null && splitText.length > 0 ?
		splitText.join(' ') :
		splitText
	
	const html = (
		<div>
			<p>{ outputText }</p>
		</div>
	)
	if (outputText != null) {
		return html
	} else {
		return <div></div>
	}
}

export default Output
