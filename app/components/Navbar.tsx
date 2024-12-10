import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
    return (
        <header>
            {/* Top Navbar */}
            <nav style={styles.navbar}>
                {/* Logo Section */}
                <div>
                    <img
                        src="/weframe-tech.png"
                        alt="Weframe Tech Logo"
                        style={styles.logoImage}
                    />
                </div>

                {/* Search Section */}
                <div style={styles.searchContainer}>
                    <input
                        type="text"
                        className="text-[#667482]"
                        placeholder="Rechercher un produit..."
                        style={styles.searchInput}
                    />
                    <FontAwesomeIcon
                        className="h-5 w-5"
                        icon={faSearch}
                        style={styles.searchIcon}
                    />
                </div>

                {/* Menu Section */}
                <div style={styles.menu}>
                    <a href="#" style={styles.menuItem}>
                        <img
                            src="/lightbulb-01.png"
                            alt="Inspirations"
                            style={styles.icon}
                        />
                        Inspirations
                    </a>
                    <a href="#" style={styles.menuItem}>
                        <img
                            src="/heart.png"
                            alt="Mes favoris"
                            style={styles.icon}
                        />
                        Mes favoris
                    </a>
                    <button style={styles.button}>
                        <img
                            src="/shopping-cart-01.png"
                            alt="Panier"
                            style={styles.icon}
                        />
                        Panier
                    </button>
                </div>
            </nav>

            {/* Secondary Navbar for Additional Links */}
            <nav style={styles.secondaryNavbar}>
                {[
                    "ART DE LA TABLE",
                    "MOBILIER",
                    "NAPPAGE",
                    "Matériel de salle",
                    "CUISINE",
                    "BARBECUE",
                    "TENTE",
                    "CHAUFFAGE",
                    "PODIUM-PISTE DE DANSE",
                    "SON ET lumière",
                    "PACKS",
                    "CONSOMMABLES",
                ].map((link, index) => (
                    <a key={index} href={`/${link.toLowerCase().replace(/\s+/g, "-")}`} style={styles.secondaryMenuItem}>
                        {link}
                    </a>
                ))}
            </nav>
        </header>
    );
};

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "white",
        color: "#333",
    },
    logoImage: {
        height: "60px",
    },
    searchContainer: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F9FAFB",
        borderRadius: "8px",
        padding: "10px 15px",
        width: "550px",
        height: "50px",
    },
    searchIcon: {
        marginRight: "10px",
        color: "#333",
    },
    searchInput: {
        border: "none",
        outline: "none",
        width: "100%",
        backgroundColor: "#F9FAFB",
    },
    menu: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
    },
    menuItem: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "#333",
        fontSize: "1rem",
    },
    icon: {
        width: "20px",
        height: "20px",
        marginRight: "8px",
    },
    button: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "#0093D0",
        color: "white",
        border: "none",
        borderRadius: "8px",
        padding: "10px 15px",
        fontSize: "1rem",
        cursor: "pointer",
    },
    secondaryNavbar: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        padding: "10px 20px",
        textColor: "6B7280"
    },
    secondaryMenuItem: {
        textDecoration: "none",
        fontSize: "0.9rem",
        fontWeight: "500",
    },
};


export default Navbar;
