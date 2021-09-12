import React from "react"
import { useScrollTrigger } from "@material-ui/core"

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 510,
    target: props.window ? window() : undefined
  })

  return React.cloneElement(props.children, {
    style: {
      position: trigger ? "sticky" : "absolute",
      top: trigger ? "0" : "60vh", 
      background: trigger ? "#09DBA9" : "transparent",
      transition: trigger ? "0s" : "0.1s",
      boxShadow: trigger ? "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)" : "none",
    }
  });
}

const ScrollToChangeColor = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>
}

export default ScrollToChangeColor