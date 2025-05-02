import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {/* 기존 앱 컴포넌트들 */}
    </LocalizationProvider>
  );
}

export default App; 