import { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

const Navbar = ({ router }) => {
  const {pathname, query: {id}} = router

  const getLogo = () => {
    return `https://statsapi.mlb.com/logo.94f6aeb4.png`
  }

  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    getLogo()
  },[getLogo])

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src={getLogo()} width={"100%"} height={"100%"} />
          </a>
        </Link>
        <a role="button" className={toggle ? "navbar-burger is-active": "navbar-burger"} 
           aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" 
           onClick={() => setToggle(!toggle)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={toggle ? "navbar-menu is-active": "navbar-menu"}>
        <div className="navbar-end">
          <Link href="/">
            <a className="navbar-item" onClick={() => setToggle(false)}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="navbar-item" onClick={() => setToggle(false)}>
              About
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
