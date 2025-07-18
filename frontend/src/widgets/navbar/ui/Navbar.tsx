import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./navbar.module.scss";

export const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className={styles.navbar}>
			<div className={styles.container}>
				<Link to="/" className={styles.logo}>
					Mello
				</Link>

				<nav className={cn(styles.links, { [styles.open]: isOpen })}>
					<Link to="/">Главная</Link>
					<Link to="/profile">Профиль</Link>
					<Link to="/about">О нас</Link>
					<Link to="/logout">Выйти</Link>
				</nav>

				<button
					className={styles.burger}
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					<span className={styles.bar}></span>
					<span className={styles.bar}></span>
					<span className={styles.bar}></span>
				</button>
			</div>
		</header>
	);
};
