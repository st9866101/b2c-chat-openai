import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollToTopButton from '../components/ScrollToTopButton'
import PromptList from '../components/promptlist'
import Prompts from '../components/promptlist'


function App() {
    const [count, setCount] = useState(0)
    const promptList = [
        { category: '資料整理', title: '蒐集資料', text: '給我［數字］篇，有關［領域］的文章', example: '給我5篇，有關SEO的文章' },
        { category: '網站開發', title: '前端開發', text: '設計一個［功能］，讓使用者可以［操作］', example: '設計一個登入功能，讓使用者可以輸入帳號密碼進行登入' },
        { category: '設計', title: 'UI設計', text: '設計一個［頁面］，讓使用者可以［操作］', example: '設計一個商品列表頁面，讓使用者可以點擊商品進入詳細介紹' },
    ];
    const handleCategoryClick = (category: string) => {
        console.log(`Clicked category: ${category}`);
    };

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <PromptList prompts={promptList} onCategoryClick={handleCategoryClick} />
            <Prompts prompts={promptList} onCategoryClick={handleCategoryClick} />
            <ScrollToTopButton />



        </div>
    )
}

export default App
