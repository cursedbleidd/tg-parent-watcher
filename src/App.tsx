import { WebAppProvider, useShowPopup, useThemeParams } from '@vkruglikov/react-telegram-web-app';
import { ConfigProvider, theme } from 'antd';
import { Router } from './Router';
import { useGetToken } from './entities/User/useGetToken';

export default function App() {
  const [colorScheme, themeParams] = useThemeParams();
  const printMessage = async (mes: string) => {
    const showPopup = useShowPopup();
    await showPopup({ message: mes });
  };
  useGetToken(printMessage);
  return (
    <WebAppProvider>
      <ConfigProvider
        theme={
          themeParams.text_color
            ? {
                algorithm:
                  colorScheme === 'dark'
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
                token: {
                  colorText: themeParams.text_color,
                  colorPrimary: themeParams.button_color,
                  colorBgBase: themeParams.bg_color,
                },
              }
            : undefined
        }>
        <Router />
      </ConfigProvider>
    </WebAppProvider>
  );
}
