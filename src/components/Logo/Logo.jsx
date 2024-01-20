import styles from './Logo.module.css';

export default function Logo() {
return (
  <div className={styles.Logo}>
    {/* <div>HomE</div>
    <div>FooD</div> */}
    <img  className='Authlogo' src='/LogoAlluduKitchen.png' alt='NoLogo'/>
  </div>
);
}