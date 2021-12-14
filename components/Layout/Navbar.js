import { useEffect } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

const Navbar = ({ router }) => {
  const {pathname, query: {id}} = router

  const getLogo = () => {
    return `https://statsapi.mlb.com/logo.94f6aeb4.png`
  }

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
