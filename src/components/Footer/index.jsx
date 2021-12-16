import styles from "./Footer.module.scss";

const Footer = () => {
    const year = new Date().getFullYear();
  
    return (
      <footer className={styles.footer}>
       <p>
         Zaras - P. Iva 0123456789101- Credits by 
        <a href="" target="_blank"> Giuseppe Gallo Cassarino</a>
    </p>
      </footer>
    );
  };
  
  export default Footer;
