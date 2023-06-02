import Modal from "./Modal";
import React, { useState, useEffect } from 'react';

export default function MainPage({ data }) {

  const [openModal, setOpenModal] = useState(false);
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (openModal) {
      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden')
      }
    } else {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden')
      }
    }
  }, [openModal])

  return (
    <>
      <div className="w-full flex justify-center py-10">
        <div className="w-11/12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {
            data.map((x, i) => {
              return (
                <div key={i} className="h-[272px] flex justify-center hover:cursor-pointer" onClick={(e) => { setOpenModal(true); setIndex(x.index) }}>
                  <div className="w-60 h-[272px] bg-[#fffded] rounded-md shadow overflow-hidden hover:shadow-md">
                    <div className="w-full h-48 overflow-hidden">
                      <img className="object-cover w-full h-full" src={`./photos/${x.index}.jpg`}></img>
                    </div>
                    <div className="flex justify-between">
                      <div className="w-40 pt-1 pl-1">
                        <span className="font-semibold text-gray-700 inline align-middle">{x.name}</span>
                        <span className="bg-yellow-800 text-gray-100 text-xs inline-block align-middle px-1 mx-0.5 rounded-full">{x.category}</span>
                      </div>
                      <div className="flex flex-col justify-between items-center h-20 border-l border-gray-400/50 w-14">
                        <div className="mx-1 mt-2 text-sm text-gray-700">{x.city}</div>
                        {
                          (() => {
                            if (x.rating >= 4) {
                              return (<div className="text-xs font-bold mb-1 text-red-500">{x.rating}</div>)
                            } else if (x.rating >= 3) {
                              return (<div className="text-xs font-bold mb-1 text-red-300">{x.rating}</div>)
                            } else {
                              return (<div className="text-xs font-bold mb-1 text-gray-300">{x.rating}</div>)
                            }
                          })()
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      {
        (() => {
          if (openModal) {
            return (
              <Modal onClose={() => setOpenModal(false)} index={index} setIndex={setIndex}></Modal>
            )
          }
        })()
      }
    </>
  )
}