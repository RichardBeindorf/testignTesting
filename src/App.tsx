import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<article>
				<h1>
					This is an interesting Text about how to do testing with vitesting
				</h1>
				<p>What should i do to start beyond installing the package?</p>
				<ul>
					<li>Creat a __test__ folder outside of src</li>
					<li>
						Take the file name of an existing file and add .test appendage
					</li>
				</ul>
			</article>

			<button type="button">Click me for free donuts</button>
		</div>
	);
}

export default App;
