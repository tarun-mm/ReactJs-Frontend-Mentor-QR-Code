import qr_code from "./assets/image-qr-code.png"

function App() {
  return(
    <main className="w-screen min-h-screen bg-light-gray flex justify-center items-center">
      <div className="bg-white p-4 w-72 rounded-3xl shadow-xl">
        <img src={qr_code} alt="QR Code" className="rounded-2xl"/>
        <h1 className="mx-4 my-4 text-lg font-outfit font-extrabold text-dark-blue text-center">
          Improve your front-end skills by building projects
        </h1>
        <p className="mx-4 mb-4 text-sm font-outfit font-extralight text-center">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </main>
  )
}

export default App
