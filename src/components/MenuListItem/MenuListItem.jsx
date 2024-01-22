import styles from './MenuListItem.module.css'

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  // console.log(menuItem)
  return (
    <div className={styles.MenuListItem}>
      <div className={styles.emoji + ' ' + 'flex-ctr-ctr'}><img src={menuItem.emoji} alt='..' style={{width:'150px',height:'150px'}}/></div>
      <div className={styles.name}>{menuItem.name}</div>
      <div className={styles.buy}>
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD to Cart
        </button>
      </div>
    </div>
  );
}