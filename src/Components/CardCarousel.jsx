import React from 'react'

function CardCarousel() {
  return (
    <>
    <h1 className='text-center text-2xl font-bold mt-5'>Recent Projects</h1>
    <div className='carousel w-100 mt-5'>
          <div id='item1' className='carousel-item relative w-full justify-center'>
              <div className='card w-96 bg-gray-200 shadow-xl'>
                  <figure><img src='/Marketplace App.PNG' alt='me'></img></figure>
                  <div className='card-body items-center text-center'>
                      <h2 className='card-title'>House Marketplace App</h2>
                      <p>Housing Marketplace App built with React and Firebase as the backend database</p>
                      <div className='card-actions justify-end'>
                          <button className='btn btn-priamry'>Project Here!</button>
                      </div>
                  </div>
              </div>
          </div>
          <div id='item2' className='carousel-item relative w-full justify-center'>
              <div className='card w-96 bg-gray-200 shadow-xl'>
                  <figure><img src='/githubsearch.png' alt='me'></img></figure>
                  <div className='card-body items-center text-center'>
                      <h2 className='card-title'>Github Search App</h2>
                      <p>Built with React and uses the Github Api to search users</p>
                      <div className='card-actions justify-end'>
                          <button className='btn btn-priamry'>Project Here!</button>
                      </div>
                  </div>
              </div>
          </div>
          <div id='item3' className='carousel-item relative w-full justify-center'>
              <div className='card w-96 bg-gray-200 shadow-xl'>
                  <figure><img src='/personalsite.png' alt='me'></img></figure>
                  <div className='card-body items-center text-center'>
                      <h2 className='card-title'>Personal Site</h2>
                      <p>Built with React, nothing fancy yet but will be improved over time!</p>
                      <div className='card-actions justify-end'>
                          <button className='btn btn-priamry'>Project Here!</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
              <a href="#item1" class="btn btn-xs">1</a>
              <a href="#item2" class="btn btn-xs">2</a>
              <a href="#item3" class="btn btn-xs">3</a>
              <a href="#item4" class="btn btn-xs">4</a>
          </div>
        </>
  )
}

export default CardCarousel