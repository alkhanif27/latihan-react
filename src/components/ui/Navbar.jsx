
export default function Navbar() {
  const menus =[
    {name: 'Home', path:'/'},
    {name: 'About', path:'/about'},
    {name: 'Contact', path:'/contact'},
  ]
  
    return (
    <nav>
        <ul>
            {
                menus.map((menu, index) =>
                (
                    <li key={index}>
                        <a href={menu.path}>{menu.name}</a>
                    </li>
                )
                )
            }
        </ul>
    </nav>
  )
}
