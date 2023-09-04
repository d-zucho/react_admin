import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='logo.svg' alt='Logo' />
        <span>myAdmin</span>
      </div>
      <div className='icons'>
        <img src='search.svg' className='icon' alt='search' />
        <img src='app.svg' className='icon' alt='app' />
        <img src='expand.svg' className='icon' alt='expand' />
        <div className='notifications'>
          <img src='notifications.svg' className='icon' alt='notifications' />
          <span>1</span>
        </div>
        <div className='user'>
          <img src='user-img.jpg' alt='' />
          <span>Jake</span>
        </div>
        <img src='settings.svg' alt='settings' />
      </div>
    </div>
  )
}

export default Navbar
