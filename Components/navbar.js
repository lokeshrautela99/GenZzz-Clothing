function navbar() {
  return `
    <div id="upper-nav">
    
            <button id="burger_menu"><img src="./images/Navbar/burgerMenu.png" alt=""></button>
            <div id="slider">
                <button id="closed">x</button>
                <a class="slider_brand"  href="index.html"><h1 id="slider_brand">GenZzz</h1></a>
                <div id="option">
                    <div id="optAcc">
                            <a id="sidebarAcc" href="account.html"> <img src="./images/Navbar/accountUser.png" alt="">
                            </img> <p id="sidebarUserName"> Account</p> </a>
                    </div>
                    <div id="optLogin">
                        <a  id="loginSidebar" href="login.html"> 
                            <img src="./images/Navbar/accountUser.png" alt=""> <p>Login</p></a>
                    </div>

                    <div id="opt-3">
                        <a class="sidebar-link" href="index.html">Home</a>
                        <a class="sidebar-link" href="men.html">Men</a>
                        <a class="sidebar-link" href="women.html">Women</a>
                        <a class="sidebar-link" href="kid.html">Kid</a>
                        <a class="sidebar-link" href="accessories.html">Accessories</a>
                        <a class="sidebar-link" href="about.html">About Us</a>
                        <a class="sidebar-link" href="contact.html">Contact Us</a>
                        <a class="sidebar-link" href="privacy.html">Privacy Policy</a>
                    </div>
                </div>
                <!-- option closed  -->

                <div id="burger-footer">
                    <p>&copy; 2024 GENZzz. All rights reserved.</p>
                </div> 
                
                <!-- burger footer closed  -->

            </div>
            <!-- burger menu closed  -->

            <a id="home_page" href="index.html">
                <h2>GenZzz</h2>
            </a>
            <div id="cat_div">
                <button id="categories">CATEGORIES 
                    <img id="show" src="./images/Navbar/arrowRight.png" alt="">
                    <img  id="hide" src="./images/Navbar/arrowDown.png" alt="">
                </button>
                <div id="lower_cat_div">
                    <div id="nav_links">
                        <a href="men.html">MEN</a>
                        <a href="women.html">WOMEN</a>
                        <a href="kid.html">KID</a>
                        <a href="accessories.html"> Accessories </a>
                    </div>
                </div>
            </div>

            <div id="search_div">
                <input type="text" id="query" placeholder="Search for products, categories and brand">
                <button id="search_btn"   ><img src="./images/Navbar/Search.PNG" alt="searchlogo"></button>
            </div>

            <div id="user_div">
                <div>
                    <a id="acc_login" href="account.html"> <img id="acclogo" src="./images/Navbar/user.PNG"
                    alt="acc img"></a>
                </div>
                <div>
                    <a id="user_login" href="login.html"> <img id="loginlogo" src="./images/Navbar/user.PNG"
                            alt="login img"></a>
                </div>
                <div>
                    <a id="user_wishlist" href="wishlist.html">
                        <img id="heartlogo" src="./images/Navbar/heart.svg" alt="">
                    </a>
                </div>
                <div>
                    <a id="user_cart" href="cart.html"><span><img id="cartlogo"
                        src="./images/Navbar/shopping-bags.svg" alt="cart img"></span>  </a>
                    <span id="counter"></span>
                </div>
            </div>

        </div>
        <!-- upper-nav closed  -->

        <div id="lower-nav">
            <a class="nav-link" href="men.html">MEN</a>
            <a class="nav-link" href="women.html">WOMEN</a>
            <a class="nav-link" href="kid.html">KID</a>
        </div>
        <!-- lower-nav closed  -->
        `;
}
export default navbar;
