import styles from './ChiSiamo.module.scss';
const ChiSiamo = (props) => {
  const data = props.data || {
    id: "0",
    title: "Lorem ipsum",
    bodytext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ex cursus, elementum ligula ac, auctor dolor. Ut tincidunt pretium feugiat. Nam fringilla dictum dolor malesuada volutpat. Vestibulum at ligula vel sapien dapibus commodo at in felis. Phasellus ac feugiat ex. Vestibulum condimentum felis sem, nec semper lorem rhoncus ac. Vestibulum eu aliquam elit. Fusce orci sem, pellentesque vel arcu mollis, auctor aliquam sapien. ",
  };

  return (
    <div className={styles.article}>
      <h3>{data.title}</h3>
      <p>{data.bodytext}</p>
    </div>
  );
};

export { ChiSiamo };
