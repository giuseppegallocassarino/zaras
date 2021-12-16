import styles from "./Cover.module.scss";



const Img = ({src}) => {

return (




<div className={styles.cover__copy}>
   <img src={src} alt="product" className={styles.cover}/>
   <div className={styles.up}>
   
   <span>
   La moda non è un qualcosa che esiste solo sotto forma di abiti. <br></br><br></br>
    La moda è nel cielo, nelle strade, la moda ha a che fare con le idee, il modo in cui viviamo, ciò che accade
   <br></br><br></br><strong>Coco Chanel</strong> 
   </span>
   </div>

</div>



)

}





export default Img
  