import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root : {
    margin: "7% auto 10%"
	},
  square : {
    height: "16em",
    width: "16em",
    background: "white",
    borderRadius: "30%",
    border: "1px solid black",
    boxShadow: "0px 4px 4px 0px rgb(0, 0, 0, 0.25)",
    
    [theme.breakpoints.between(0,600)]: {
      display: "none"
		},
    [theme.breakpoints.between(600,960)]: {
      marginTop: "3em",
      height: "12.5em",
      width: "12.5em",
		},
  },
  titleContainer : {
		position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: "29%",
    right: "30%",
		[theme.breakpoints.between(0,600)]: {
			top: "16%",
      right: 0,
      left: 0,
      margin: "0 auto",
		},
    [theme.breakpoints.between(600,960)]: {
      top: "10%",
      right: 0,
      left: 0,
    },
    [theme.breakpoints.between(960,1230)]: {
      right: "20%"
		},
	},
	title : {
    padding: "0.5em 0.7em",
    background: "white",
    border: "4px solid black",
		fontWeight: "600",
		fontSize: "1.4em",
    color: "#09DBA9",
	},
	avatar : {
    position: "absolute",
    zIndex:0,
		[theme.breakpoints.down(600)]: {
			width: "100%",
      height: 430,
			top: "33%",
			left: 0,
      overflow: "hidden",
		},
    [theme.breakpoints.between(600,960)]: {
      top: "20%",
      left: "30%",
      width: 480,
		},
    [theme.breakpoints.between(960,1479)]: {
      top: "20%",
      left: "40%",
      width: 480,
		},
    [theme.breakpoints.up(1480)]: {
      top: "20%",
      left: "44%",
      width: "32%",
		},
	},
  circle :{
    position: "absolute",
    top: "46%",
    left: "15%",
    zIndex: 5,
    [theme.breakpoints.down(600)]: {
			top: "40%",
			left: "50%"
		},
		[theme.breakpoints.between(600,769)]: {
			top: "47%",
			left: "57%"
		},
  },
  circleText : {
		display: "inline-grid",
    justifyItems: "center",
    alignItems: "center",
    alignContent: "center",
    height: "8em",
    width: "8em",
    transform: "rotateZ(-23.8deg) !important",
    backgroundColor: "#020202",
    boxShadow: "-2px 4px 4px 0px rgb(0, 0, 0, 0.5)",
    borderRadius: "50%",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
    transitionDuration: "0.3s",
    userSelect: "none",
    
		[theme.breakpoints.down('sm')]: {
      height: "7em",
      width: "7em",
      
		},
		[theme.breakpoints.up('sm')]: {
      cursor: "pointer",
		},
  },
	iconsLinkContainer: {
    position: "absolute",
		display: "flex",
    zIndex: 1,
    
    [theme.breakpoints.down(600)]: {
      top: 500,
      right: 30,
		},
    [theme.breakpoints.between(600,960)]: {
      top: 20,
      left: 50,
			display: "block",
		},
    [theme.breakpoints.up(960)]: {
      top: 50,
      left: "12%",
		},
  },
  iconContainer : {
    margin: 7,
    "& a" : {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"white",
      border: "2.5px solid black",
      borderRadius: "100%",
      "& g" : {
        fill:"#000",
      },
      "&:hover":{
        backgroundColor:"black",
        transition: "ease-in 0.1s",
        "& g " : {
          fill:"white",
          transition: "ease-in 0.1s",
        }
      },
    },
  },
}))

export default function Home() {
	const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.iconsLinkContainer}>
          <div className={classes.iconContainer}>
            <Link href="https://github.com/nlukestik" target="_blank" style={{padding:"4.5px"}}>
              <svg width="40" height="40" viewBox="0 0 48 48" style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"></path></g></g></svg>
            </Link>
          </div>
          <div className={classes.iconContainer}>
            <Link href="https://www.linkedin.com/in/nicolukestik/" target="_blank" style={{padding:9}}>
              <svg x="0px" y="0px" width="31" height="31" viewBox="0 0 170 170" style={{fill:"#000000"}}><g transform="translate(1.462,1.462) scale(0.983,0.983)"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="none" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><g fill="#000000" stroke="#000000" stroke-width="3" stroke-linejoin="round"><path d="M48.11297,27.15047c0.00398,0.06263 0.00622,0.12537 0.00672,0.18812c0,4.8011 -2.09658,9.31336 -5.76469,12.44312c-3.6681,3.12976 -8.80273,4.89797 -14.835,4.89797c-0.33086,-0.00604 -0.65906,-0.06036 -0.97422,-0.16125c-11.17343,-0.43667 -19.62547,-7.74196 -19.62547,-17.17984c0,-4.86432 2.27252,-9.317 5.99312,-12.32219c3.72061,-3.00519 8.80194,-4.65609 14.60656,-4.65609c11.60925,0 20.06314,7.29268 20.59297,16.79016zM17.18656,20.30406c-2.29939,1.85725 -3.46688,4.19325 -3.46688,7.03453c0,5.68255 4.84962,10.54172 13.80031,10.54172c4.71773,0 8.1831,-1.35031 10.4275,-3.26531c2.21986,-1.89407 3.32823,-4.32603 3.35265,-7.18906c-0.37832,-5.85939 -4.80495,-10.26625 -13.78015,-10.26625c-4.51538,0 -8.03405,1.28712 -10.33344,3.14438zM44.72,51.6c1.89978,0.00019 3.43981,1.54022 3.44,3.44v99.76c-0.00019,1.89978 -1.54022,3.43981 -3.44,3.44h-34.4c-1.89978,-0.00019 -3.43981,-1.54022 -3.44,-3.44v-99.76c0.00019,-1.89978 1.54022,-3.43981 3.44,-3.44zM96.32,51.6c1.89978,0.00019 3.43981,1.54022 3.44,3.44v5.50937c5.23441,-4.04367 13.35708,-8.94937 26.78765,-8.94937c10.53363,0 20.3417,3.94068 27.37219,11.61c7.03049,7.66932 11.20015,18.91476 11.20015,33.11v58.48c-0.00019,1.89978 -1.54022,3.43981 -3.44,3.44h-34.4c-1.89978,-0.00019 -3.43981,-1.54022 -3.44,-3.44v-56.76c0,-6.68882 -5.35118,-12.04 -12.04,-12.04c-6.68882,0 -12.04,5.35118 -12.04,12.04v56.76c-0.00019,1.89978 -1.54022,3.43981 -3.44,3.44h-34.4c-1.89978,-0.00019 -3.43981,-1.54022 -3.44,-3.44v-99.76c0.00019,-1.89978 1.54022,-3.43981 3.44,-3.44zM13.76,151.36h27.52v-92.88h-27.52zM65.36,151.36h27.52v-53.32c0,-10.40798 8.51202,-18.92 18.92,-18.92c9.90834,0 17.86757,7.78854 18.6311,17.50906c0.19477,0.44466 0.29323,0.92551 0.2889,1.41094v53.32h27.52v-55.04c0,-12.86036 -3.70304,-22.25385 -9.39281,-28.46063c-5.68977,-6.20677 -13.44876,-9.37937 -22.29953,-9.37937c-17.4658,0 -27.66781,11.37485 -27.66781,11.37485c-0.95215,1.06009 -2.45926,1.42351 -3.78993,0.91389c-1.33067,-0.50962 -2.20947,-1.78679 -2.20991,-3.21171v-9.07703h-27.52z"></path></g><path d="M0,172v-172h172v172z" fill="none" stroke="none" stroke-width="1" stroke-linejoin="miter"></path><g fill="#000000" stroke="none" stroke-width="1" stroke-linejoin="miter"><path d="M27.52,10.36031c-5.80462,0 -10.88595,1.6509 -14.60656,4.65609c-3.72061,3.00519 -5.99312,7.45786 -5.99312,12.32219c0,9.43788 8.45204,16.74317 19.62547,17.17984c0.31516,0.10089 0.64336,0.15521 0.97422,0.16125c6.03227,0 11.1669,-1.76821 14.835,-4.89797c3.6681,-3.12976 5.76469,-7.64202 5.76469,-12.44312c-0.0005,-0.06276 -0.00274,-0.12549 -0.00672,-0.18812c-0.52983,-9.49748 -8.98372,-16.79016 -20.59297,-16.79016zM27.52,17.15969c8.9752,0 13.40184,4.40686 13.78015,10.26625c-0.02442,2.86303 -1.13279,5.295 -3.35265,7.18906c-2.2444,1.915 -5.70977,3.26531 -10.4275,3.26531c-8.95069,0 -13.80031,-4.85917 -13.80031,-10.54172c0,-2.84128 1.16748,-5.17728 3.46688,-7.03453c2.29939,-1.85725 5.81806,-3.14437 10.33344,-3.14438zM10.32,51.6c-1.89978,0.00019 -3.43981,1.54022 -3.44,3.44v99.76c0.00019,1.89978 1.54022,3.43981 3.44,3.44h34.4c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-32.11563v-67.64437c-0.00019,-1.89978 -1.54022,-3.43981 -3.44,-3.44zM61.92,51.6c-1.89978,0.00019 -3.43981,1.54022 -3.44,3.44v99.76c0.00019,1.89978 1.54022,3.43981 3.44,3.44h34.4c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-55.04v-0.86v-0.86c0,-6.68882 5.35118,-12.04 12.04,-12.04c6.68882,0 12.04,5.35118 12.04,12.04v56.76c0.00019,1.89978 1.54022,3.43981 3.44,3.44h34.4c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-58.48c0,-14.19524 -4.16967,-25.44068 -11.20015,-33.11c-7.03049,-7.66932 -16.83856,-11.61 -27.37219,-11.61c-13.43058,0 -21.55324,4.9057 -26.78765,8.94937v-5.50937c-0.00019,-1.89978 -1.54022,-3.43981 -3.44,-3.44zM13.76,58.48h27.52v64.20437v28.67563h-27.52zM65.36,58.48h27.52v9.07703c0.00045,1.42492 0.87925,2.70209 2.20991,3.21171c1.33067,0.50962 2.83778,0.1462 3.78993,-0.91389c0,0 10.20201,-11.37485 27.66781,-11.37485c8.85077,0 16.60976,3.1726 22.29953,9.37937c5.68977,6.20678 9.39281,15.60027 9.39281,28.46063v55.04h-27.52v-53.32c0.00432,-0.48543 -0.09414,-0.96627 -0.2889,-1.41094c-0.76353,-9.72052 -8.72276,-17.50906 -18.6311,-17.50906c-10.40798,0 -18.92,8.51202 -18.92,18.92v0.86v0.86v51.6h-27.52z"></path></g><path d="" fill="none" stroke="none" stroke-width="1" stroke-linejoin="miter"></path><path d="" fill="none" stroke="none" stroke-width="1" stroke-linejoin="miter"></path></g></g></svg>
            </Link>
          </div>
          <div className={classes.iconContainer}>
            <Link href="https://wa.me/+5493704344846" target="_blank" style={{padding:7}}>
              <svg width="35" height="35" viewBox="0 0 170 170" style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M86.08399,14.33333c-39.45967,0 -71.58235,32.09502 -71.59668,71.55469c-0.00717,12.61333 3.29655,24.92701 9.56022,35.77734l-9.71419,36.00131l37.49902,-8.86035c10.45617,5.70467 22.22697,8.69922 34.20963,8.70638h0.028c39.4525,0 71.56118,-32.10219 71.58268,-71.55469c0.01433,-19.12784 -7.42377,-37.11191 -20.9401,-50.64258c-13.51633,-13.5235 -31.47925,-20.97493 -50.62858,-20.9821zM86.06999,28.66667c15.308,0.00717 29.69396,5.97554 40.50846,16.78288c10.8145,10.82167 16.75522,25.2008 16.74089,40.49447c-0.01433,31.56199 -25.68702,57.23535 -57.26335,57.23535c-9.55317,-0.00717 -19.01607,-2.40588 -27.35091,-6.95671l-4.8291,-2.63151l-5.33301,1.25976l-14.10937,3.33138l3.44336,-12.79362l1.55371,-5.73894l-2.96745,-5.15104c-5.00233,-8.65733 -7.64974,-18.55584 -7.64258,-28.61067c0.01433,-31.54767 25.69452,-57.22135 57.24935,-57.22135zM60.7487,52.85417c-1.19683,0 -3.13195,0.44792 -4.77311,2.23958c-1.64117,1.7845 -6.27083,6.10656 -6.27083,14.90723c0,8.80067 6.41081,17.30772 7.30664,18.50455c0.88867,1.18967 12.37448,19.82031 30.55632,26.98698c15.10733,5.9555 18.17568,4.78017 21.45801,4.47917c3.28233,-0.29383 10.58909,-4.31825 12.07975,-8.49641c1.49066,-4.17817 1.49414,-7.77226 1.0498,-8.51042c-0.44433,-0.74533 -1.6377,-1.18978 -3.42936,-2.08561c-1.7845,-0.89583 -10.57856,-5.21409 -12.21973,-5.80892c-1.64117,-0.59483 -2.84158,-0.89583 -4.03125,0.89583c-1.18967,1.79167 -4.60861,5.80903 -5.65494,6.9987c-1.04633,1.19683 -2.08561,1.35775 -3.87728,0.46191c-1.79167,-0.903 -7.55232,-2.79668 -14.38932,-8.88835c-5.31767,-4.73717 -8.90582,-10.58203 -9.95215,-12.37369c-1.03917,-1.7845 -0.09798,-2.76466 0.79785,-3.65332c0.80267,-0.80267 1.77767,-2.08908 2.6735,-3.13542c0.88867,-1.04633 1.19683,-1.79178 1.79167,-2.98145c0.59483,-1.18966 0.29036,-2.23958 -0.15398,-3.13541c-0.44433,-0.89583 -3.92397,-9.7292 -5.51497,-13.26953c-1.34017,-2.97417 -2.75558,-3.04326 -4.03125,-3.09342c-1.03917,-0.043 -2.2257,-0.04199 -3.41536,-0.04199z"></path></g></g></svg>
            </Link>
          </div>
			</div>

      <div className={classes.square} />

      
      <img src="/images/avatar.png" alt="avatar" className={classes.avatar} />


      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Nicolás Lukestik</h1>
      </div>

      {/* <div style={{}} >  */}
			<div className={classes.circle}>
				<div
					className={classes.circleText} 
					onClick={() => scroll.scrollToBottom()}
				>
					<span style={{fontSize: "19px"}}>GET IN<br/></span>
					<span style={{fontSize: "17px"}}>TOUCH</span>
				</div>
			</div>

      {/* </div> */}
      
    </div>
  )
};
