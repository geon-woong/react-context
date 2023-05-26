import ColorBox from './components/ColorBox';
import ColorPicker from './components/ColorPicker';
import ColorContext, { ColorProvider } from './context/color';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorPicker />
        <ColorBox />
      </div>
    </ColorProvider>
  )
};

export default App;