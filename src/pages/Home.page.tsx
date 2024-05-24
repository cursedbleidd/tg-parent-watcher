import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';

export function HomePage() {
  const showPopup = useShowPopup();

  const handleClick = () =>
    showPopup({
      message: 'help me',
    });

  return <MainButton text="KILL PC" onClick={handleClick} />;
}
