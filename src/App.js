import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {HistoryPage, PayloadPage} from "./pages";
import reduxStore from './rdx';

function App() {
  return (
    <Provider store={reduxStore()}>
      <BrowserRouter>
        <Routes>
          <Route path="/history" element={<HistoryPage/>}/>
          <Route path="/payload" element={<PayloadPage/>}/>
          <Route path="*" element={<Navigate to="/history" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
