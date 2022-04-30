import Image from 'next/image'

interface State {}

const Home = () => {
  return (
    <div className="container mx-auto px-6 pt-10 pb-20">
      <div>
        <img
          src="/kidow-analytics.svg"
          draggable={false}
          alt=""
          className="h-7"
        />
      </div>
    </div>
  )
}

export default Home
