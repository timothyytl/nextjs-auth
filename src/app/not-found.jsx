import Link from "next/link"

const NotFound = () => {
  return (
    <section>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Not Found!</h1>
        <p className="my-8">
          Too bad...the page you are looking for does not exist. 🙈
        </p>
        <Link href="/">Return Home</Link>
      </div>
    </section>
  )
}

export default NotFound
