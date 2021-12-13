import { useEffect } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

const Navbar = ({ router }) => {
  const {pathname, query: {id}} = router

  const getLogo = () => {
    switch (pathname) {
      case '/':
        return `https://statsapi.mlb.com/logo.94f6aeb4.png`
      default:
        return `https://www.mlbstatic.com/team-logos/${id}.svg`
    }
  }

  useEffect(() => {
    getLogo()
  },[getLogo])

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={getLogo()} width={"100%"} height={"100%"} />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link href="/">
            <a className="navbar-item">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="navbar-item">
              About
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
