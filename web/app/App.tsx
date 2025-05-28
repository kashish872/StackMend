// In your main routing file (e.g., App.tsx)
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import  Home  from '@/app/page';

function App() {
    return (
        <Routes>
            {/* Other routes */}
            <Route path="/" element={<Home/>} />

        </Routes>
    );
}