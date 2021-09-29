import React, { useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import { Link, useScrollTrigger, Fab, Zoom, Button } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		position: 'fixed',
// 		bottom: theme.spacing(6),
// 		left: theme.spacing(6),
// 	},
// }));

// function FabButton(props) {
// 	const { children } = props;
// 	const classes = useStyles();
// 	const trigger = useScrollTrigger({
// 		disableHysteresis: true,
// 		threshold: 100
// 	});

// 	return (
// 		<Zoom in={trigger}>
// 			<div role="presentation" className={classes.root}>
// 				<Fab  className={classes.btn} size="small" aria-label="scroll back to top">
// 					{children}
// 				</Fab>
// 			</div>
// 		</Zoom>
// 	);
// }

export default function SocialsFAB() {

	const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
	
	return(
		<>
			{/* <FabButton> */}
				{/* <Button>
					<a href="https://github.com/Fabricio-L">A
						<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" className={classes.icons}><circle cx="50" cy="50" r="34" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3"/>
							<path fill="none" stroke="#dbff00" stroke-linecap="round" stroke-miterlimit="10" d="M66.507,73.236 C61.849,76.551,56.152,78.5,50,78.5c-15.74,0-28.5-12.76-28.5-28.5S34.26,21.5,50,21.5S78.5,34.26,78.5,50 c0,2.936-0.444,5.769-1.269,8.434"/>
							<path fill="none" stroke="#dbff00" stroke-linecap="round" stroke-miterlimit="10" d="M70.79,69.494 c-0.683,0.728-1.404,1.42-2.16,2.074"/>
							<path fill="none" stroke="#dbff00" stroke-linecap="round" stroke-miterlimit="10" d="M76.527,60.441 c-1.006,2.555-2.371,4.929-4.033,7.062"/>
							<path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M58.5,77.1l0-9.445 c0-2.718-1.681-5.092-4-6.155h2.449c6.908,0,12.507-5.553,12.507-12.461c0-3.321-1.305-6.334-3.419-8.573 c0.396-2.203,0.351-5.301-0.538-7.966c-4.475,0-8.114,3.447-8.702,4H43.994c-0.589-0.552-4.019-4-8.494-4 c-0.8,2.401-1.087,5.233-0.846,7.295c-2.518,2.286-4.108,5.575-4.108,9.245c0,6.908,5.599,12.459,12.507,12.459H45.5 c-2.003,0.917-3.635,2.756-4,5c-2,0-4.864-0.182-6.181-2.158c-2.46-3.69-3.59-3.69-4.819-3.69c-1.23,0-1.33,1.23-0.1,2.46 s1.23,1.23,2.46,3.69C33.872,68.828,36.5,70.5,41.5,70.5v6.6"/>
							<path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M34.238,45.47 c0.447-1.098,1.105-2.109,1.954-2.99"/>
							<path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M33.661,50.52 c-0.076-0.482-0.115-0.977-0.115-1.48c0-0.512,0.04-1.017,0.118-1.512"/>
							<path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M41.456,58.414 c-3.325-0.565-6.068-2.862-7.264-5.926"/>
						</svg>
					</a>
				</Button> */}

				{/* <img src="/images/NL.png" alt="" width="20" height="20" className="share" /> */}
				<button className={`share ${isActive ? "active" : ""}`} onClick={handleToggle}>
					<span className={`fab ${isActive ? "active" : ""} no`}>
						1
					</span>
					<span className={`fab ${isActive ? "active" : ""} no`}>
						2
					</span>
					<span className={`fab ${isActive ? "active" : ""} no`}>
3
					</span>
				</button>
			{/* </FabButton> */}
		</>
	)
};