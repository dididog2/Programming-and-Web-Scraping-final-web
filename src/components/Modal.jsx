import data from '../data/data.json'
import React, { useRef } from 'react';


export default function Modal({ onClose, index, setIndex }) {
  const myRef = useRef();

  const scrollToView = () => {
    myRef.current?.scrollIntoView({ block: 'nearest' });
  }
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-200/30 flex flex-col items-center justify-center" onClick={onClose}>
        <div className="w-3/6 h-5/6 bg-gray-50 overflow-y-auto rounded-sm shadow-lg shadow-gray-400/50" onClick={e => e.stopPropagation()}>
          <div ref={myRef}></div>
          <div className='m-4'>
            <div className="flex justify-end items-center">
              <div className="w-6 h-6 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#808080" className="w-4 h-4 hover:w-5 hover:h-5 hover:cursor-pointer" onClick={onClose}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-semibold">{data[index].name}</div>
            <div className="flex ">
              <div className="grow py-3">
                <div className="w-full h-full">
                  <p className="leading-10 font-semibold text-xl border-b-2">店家資訊</p>
                  <div className="pl-2">
                    <p className="leading-8 font-semibold ">地址: <span className="font-normal">{data[index].formatted_address}</span></p>
                    <p className="leading-8 font-semibold ">拉麵種類: <span className="font-normal">{data[index].category}</span></p>
                    <p className="leading-8 font-semibold ">google評分: <span className="font-normal">{data[index].rating} ({data[index].user_ratings_total}人評分)</span></p>
                    <p className="leading-8 font-semibold">電話: <span className="font-normal">{data[index].formatted_phone_number}</span></p>
                    <div className=" w-full flex">
                      <p className="leading-8 font-semibold">營業時間:</p>
                      <div className=" grow pt-1 pl-3">
                        <p className="leading-6 text-sm">{data[index].opening_hours[0]}</p>
                        <p className="leading-6 text-sm">{data[index].opening_hours[1]}</p>
                        <p className="leading-6 text-sm">{data[index].opening_hours[2]}</p>
                        <p className="leading-6 text-sm">{data[index].opening_hours[3]}</p>
                        <p className="leading-6 text-sm">{data[index].opening_hours[4]}</p>
                        <p className="leading-6 text-sm">{data[index].opening_hours[5]}</p>
                        <p className="leading-6 text-sm">{data[index].opening_hours[6]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-80 w-80 p-3">
                <div className="w-full h-full rounded overflow-hidden">
                  <img className='object-cover w-full h-full' src={`./photos/${index}.jpg`}></img>
                </div>
              </div>
            </div>
            {data[index].vicinities.length != 0 ?
              <div>
                <div className=" leading-10 font-semibold text-xl border-b-2">附近拉麵店</div>
                <div className=" overflow-x-auto flex">
                  {
                    data[index].vicinities.map((x, i) => {
                      return (
                        <div key={i} className="inline-block min-w-[160px] max-w-[160px] h-[200px] m-2 rounded-md shadow overflow-hidden hover:shadow-md hover:cursor-pointer bg-[#fffded]" onClick={() => { setIndex(x.index); scrollToView() }}>
                          <div className="w-full h-36 overflow-hidden">
                            <img className='object-cover w-full h-full' src={`./photos/${x.index}.jpg`}></img>
                          </div>
                          <div className="pt-1 pl-1">
                            <span className="font-semibold text-gray-700 inline align-middle text-sm">{data[x.index].name}</span>
                            <span className="bg-yellow-800 text-gray-100 text-xs inline-block align-middle px-1 mx-0.5 rounded-full">{data[x.index].category}</span>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div> : <div></div>
            }
          </div>
        </div>
      </div>
    </>
  )
}