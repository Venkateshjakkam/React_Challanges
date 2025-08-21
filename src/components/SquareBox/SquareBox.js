import { useEffect, useState, useRef } from 'react';
import './SquareBox.css';

const SquareBox = () => {
	const [updatedArr,setUpdatedArr] = useState(-1);
	const [newArr,setNewArr] = useState(Array(18).fill(0));
	const [time ,setTime] = useState(0);
	const [timeMin,setTimeMin] = useState(0);
	const [isRunning,setIsRunning] = useState(false);
	const intervalRef = useRef(null);

	useEffect(()=>{

		if(isRunning){

			intervalRef.current = setInterval(() => {
      		setTime((prev) => prev + 1);
			if(time>=60){
				setTime(0);
				setTimeMin((prevMin)=> prevMin+1);
			}

     	 }, 1000);

		}

		return () => clearInterval(intervalRef.current);
	},[isRunning,time]);

	
	const handleStop = () => {
		clearInterval(intervalRef.current);
    	setIsRunning(false);
    	setTime(0);
		setTimeMin(0);
	}

	const handlePause = () => {
		clearInterval(intervalRef.current);
    	setIsRunning(false);
	}

	const handleStart = () => {
		if (!isRunning) {
      		setIsRunning(true);
    	}
	}

	const changeColor = (index) => {
		// const updated = newArr.filter((_,idex) => index === idex );
		// const updated = [ ...newArr ];
		// updated[index] = !updated[index];
		// setNewArr(updated);
		setUpdatedArr(index);
	}

  return (
	<div>
		<div className='mainDiv'>
		{newArr.map((item,index)=>{
			return(
			<div key={index} 
				 onClick={() => changeColor(index)}  
				 style={{border:'3px solid black',backgroundColor:`${ index === updatedArr ? 'red': 'green' }`}}
			>Box:{index+1}
			</div>
			)
		})}
		</div>

		<div>
		<h1 ref={intervalRef}>{timeMin}:{time}</h1>
		<button onClick={handlePause}>Pause</button>
		<button onClick={handleStop}>Stop</button>
		<button onClick={handleStart}>start</button>
		</div>
		
	</div>
  )
}
export default SquareBox;


