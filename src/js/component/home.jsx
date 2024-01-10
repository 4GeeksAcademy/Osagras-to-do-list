import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [input, setInput] = useState("");
	const [list, setList] = useState([])

	return (
		<div className="container">
			<div className="todolist">
				<h1>To do list</h1>
				<ul>
					<li><input type="text" placeholder="Enter task here" onChange={e => setInput(e.target.value)} value={input}
					onKeyDown={(e) => {if (e.key === "Enter"){
						setList(list.concat(input));setInput("")
					}}} /></li>

					{list.map((nuevo, index) => (
						<li>{nuevo} <button onClick={()=> setList(list.filter((nuevo, currentIndex) => index != currentIndex))}>X</button></li>
					))}					
				</ul>
			</div>
			<div className="contador">
				5 tasks left
			</div>
			
		</div>
	);
};

export default Home;
