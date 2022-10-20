import './css/Navbar.css'

const Navbar = () => {

    const titleClick = () => {

    }

    return ( 
        <div className="navbar">
            <h1 onClick={titleClick}>Wavewrite</h1>
            <h2> | </h2>
            <h3>new</h3>
            <h3>open</h3>
            <h3>scratchpad</h3>
        </div>
     );
}
 
export default Navbar;