import AppProvider from './AppProvider';
import Game from './src/components/Game';

export default function App() {
  return (
    <AppProvider>
      <Game></Game>
    </AppProvider>
  );
}