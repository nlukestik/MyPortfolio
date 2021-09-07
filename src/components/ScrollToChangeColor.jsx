import React from "react"
import { useScrollTrigger } from "@material-ui/core"

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: props.window ? window() : undefined
  })

  return React.cloneElement(props.children, {
    style: {
      background: trigger ? "linear-gradient(22deg, rgba(40,193,25,1) 0%, rgba(13,120,18,1) 100%)" : "transparent",
      transition: trigger ? "1s" : "0.2s",
      boxShadow: trigger ? "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)" : "none",
    }
  });
}

const ScrollToChangeColor = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>
}

export default ScrollToChangeColor