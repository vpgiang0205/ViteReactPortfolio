export default function Contact() {
  return (
    <section id="section__Contact">
      <h1 className="sections__Title text-center">Want to work with me?</h1>

      <form>
        <div className="flex gap-5 my-5">
          <input type="text" className="w-1/2 p-2" placeholder="First Name" />
          <input type="text" className="w-1/2 p-2" placeholder="Last Name" />
        </div>
        <input type="email" className="w-full p-2" placeholder="Email Address" />

        <div className="my-5 text-center">
          <button className="border border-white text-white px-4 py-2" type="submit">
            GET IN TOUCH
          </button>
        </div>
      </form>
    </section>
  );
}
