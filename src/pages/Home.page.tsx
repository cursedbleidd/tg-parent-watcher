import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';
import styles from './target.module.scss';

export function HomePage() {
  return (
    <div className={styles.card}>
    <div>
      <a href='/target'>target</a>
    </div>
    <div>
      <a href='/target'>target</a>
    </div>
    <div>
      <a href='/target'>target</a>
    </div>
    </div>
  );
}
