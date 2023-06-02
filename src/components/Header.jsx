import React, { useState, useEffect } from 'react';

export default function Header({ dataOriginal, setData }) {
  const [select, setSelect] = useState("all")
  const [inputValue, setInputValue] = useState("")
  const handleButtonClick = () => {
    if (select !== "all") {
      setData(dataOriginal.filter(x => x.city === select).filter(x => x.name.includes(inputValue)))
    } else {
      setData(dataOriginal.filter(x => x.name.includes(inputValue)))
    }
  }
  return (
    <>
      <nav className='bg-yellow-900/60'>
        <div className="flex items-center py-2">
          <div className='font-mogra text-4xl px-8 py-2 text-black hover:cursor-default'>ramengo</div>
          <form onSubmit={(e) => { e.preventDefault() }}>
            <div className='flex items-center rounded-md overflow-hidden'>
              <select name="City" value={select} onChange={(e) => { setSelect(e.target.value) }} className='h-8 focus:rounded-l-md bg-gray-100'>
                <option value="all">所有城市</option>
                <option value="台北市">台北市</option>
                <option value="新北市">新北市</option>
                <option value="桃園市">桃園市</option>
                <option value="台中市">台中市</option>
                <option value="台南市">台南市</option>
                <option value="高雄市">高雄市</option>
                <option value="基隆市">基隆市</option>
                <option value="新竹市">新竹市</option>
                <option value="嘉義市">嘉義市</option>
                <option value="新竹縣">新竹縣</option>
                <option value="苗栗縣">苗栗縣</option>
                <option value="彰化縣">彰化縣</option>
                <option value="南投縣">南投縣</option>
                <option value="雲林縣">雲林縣</option>
                <option value="嘉義縣">嘉義縣</option>
                <option value="屏東縣">屏東縣</option>
                <option value="宜蘭縣">宜蘭縣</option>
                <option value="花蓮縣">花蓮縣</option>
                <option value="台東縣">台東縣</option>
                <option value="澎湖縣">澎湖縣</option>
              </select>
              <input name='store' placeholder=' 搜尋店家...' className='h-8 w-64 bg-gray-100' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }}></input>
              <button onClick={handleButtonClick} className='bg-gray-900 text-white h-8 w-8 flex items-center justify-center hover:bg-gray-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </nav>
    </>
  )
}