import React, { useEffect } from "react"

const Carbonbadge = props => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://unpkg.com/website-carbon-badges@^1/b.min.js"
    script.defer = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div id="wcb" className={`wcb carbonbadge${props.darkMode ? ` wcb-d` : '' }`}></div>
  )
}

export default Carbonbadge
