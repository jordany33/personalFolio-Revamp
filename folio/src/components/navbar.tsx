import Link from 'next/link';
import styles from '../styles/navbar.module.css'; 

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/" className={styles.logoLink}>Home</Link>
            </div>
            <ul className={styles.navLinks}>
                <li><Link href="#about" scroll={false}>About</Link></li>
                <li><Link href="#experience" scroll={false}>Experience</Link></li>
                <li><Link href="#projects" scroll={false}>Projects</Link></li>
                <li><Link href="#contact" scroll={false}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;