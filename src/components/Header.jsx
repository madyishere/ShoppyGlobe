import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <ul className="flex items-center justify-between p-4 border">
                    {/* Logo and Title Section */}
                    <div className="flex items-center space-x-4">
                        <li>
                            <img
                                className="w-16"
                                src="../src/assets/SHOPPY GLOBE (1).png"
                                alt="Logo"
                            />
                        </li>
                        <li>
                            <h1 className="text-3xl font-extrabold inline my-4">
                                ShoppyGlobe
                            </h1>
                        </li>
                    </div>

                    {/* Navigation Links Section */}
                    <div className="flex items-center space-x-6 ml-auto">
                        {/* Home Link */}
                        <li>
                            <Link
                                to="/"
                                className="text-lg p-2 hover:text-blue-600 transition duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        {/* Cart Link */}
                        <li>
                            <Link to="/cart">
                                <img
                                    src="../src/assets/shoppingCart.png"
                                    className="w-16"
                                    alt="Cart"
                                />
                            </Link>
                        </li>
                    </div>
                </ul>
            </header>
        </>
    );
}

export default Header;
