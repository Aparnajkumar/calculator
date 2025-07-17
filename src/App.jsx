
import './App.css'

function App() {
  const display = (num) => {
    result.value += num
  }

  const clear = () => {
    result.value = " "
  }

  const back = () => {
    result.value = result.value.slice(0, -1)
  }

  const equal = () => {
    try {
      result.value = eval(result.value)
    }
    catch {
      result.value = "ERROR"
      setTimeout(() => { result.value = "" }, 1000)
    }
  }

  return (
    <>
      <div className="container-fluid  bg-secondary " style={{ width: "100%", height: "99vh" }} >
        <div className="row w-100 ms-1">
          <div className="col-lg-4 "></div>
          <div className=" col-sm-12 col-md-10 col-lg-4 mt-5 shadow p-3 bg-dark d-flex flex-column align-items-center border border-white" style={{ height: "370px", width:"320px" }}>
            <h3 className='text-center text-white'>CALCULATOR</h3>
            <input id='result' readonly type="text" placeholder='0' className=' ms-2 mb-3' style={{ width: "230px", textAlign: "right" }} />
            <div className='  m-1 ms-md-4'>
              <button onClick={() => display("7")} className='rounded border shadow  bg-light m-1' style={{ width: 43 }} type="button">7</button>
              <button onClick={() => display("8")} className='rounded border shadow  bg-light m-1' style={{ width: 43 }} type="button">8</button>
              <button onClick={() => display("9")} className='rounded border shadow  bg-light m-1' style={{ width: 43 }} type="button">9</button>
              <button onClick={() => display("*")} className='rounded border shadow  bg-warning m-1' style={{ width: 43, height: 38 }} type="button">*</button>
            </div>
            <div className="ms-md-4 ">
              <button onClick={() => display("4")} className='rounded border shadow  bg-light m-1' style={{ width: 43 }} type="button">4</button>
              <button onClick={() => display("5")} className='rounded border shadow  bg-light m-1' style={{ width: 43 }} type="button">5</button>
              <button onClick={() => display("6")} className='rounded border shadow  bg-light m-1' style={{ width: 43 }} type="button">6</button>
              <button onClick={() => display("/")} className='rounded border shadow  bg-warning m-1' style={{ width: 43, height: 38 }} type="button">/</button>
            </div>
            <div className="m-md-1 ms-md-4">
              <button onClick={() => display("1")} className='rounded border shadow  bg-light m-1' style={{ width: 43 }} type="button">1</button>
              <button onClick={() => display("2")} className='rounded border shadow  bg-light m-1' style={{ width: 43 }} type="button">2</button>
              <button onClick={() => display("3")} className='rounded border shadow  bg-light m-1' style={{ width: 43 }} type="button">3</button>
              <button onClick={() => display("-")} className='rounded border shadow  bg-warning m-1' style={{ width: 43, height: 38 }} type="button">-</button>
            </div>
            <div className="m-md-1 ms-md-4">
              <button onClick={clear} className='rounded border shadow  bg-warning m-1' style={{ width: 43 }} type="button">AC</button>
              <button onClick={() => display("0")} className='rounded border shadow  bg-light m-1' style={{ width: 43 }} type="button">0</button>
              <button onClick={() => display(".")} className='rounded border shadow  bg-light m-1' style={{ width: 43 }} type="button">.</button>
              <button onClick={() => display("+")} className='rounded border shadow  bg-warning m-1' style={{ width: 43, height: 38 }} type="button">+</button>
            </div>
            <div className="m-md-2 ms-md-4">
              <button onClick={back} className='bg-danger rounded border shadow m-1' style={{ width: 49 }} type="button">Clear</button>
              <button onClick={equal} className='rounded border shadow  bg-light m-1' style={{ width: 45 }} type="button">=</button>
            </div>
          </div>

          <div className="col-lg-4"></div>
        </div>
      </div>
    </>
  )
}

export default App
