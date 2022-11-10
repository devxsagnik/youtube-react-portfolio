import styles from "../../style"

const Blog = () => {
  return (
    <section className={`${styles.paddingY} blog_wrapper my-20 bg-[#111827]`}>
      <div className="grid grid-cols-12 gap-4 items-center justify-center xl:px-0 sm:px-16 px-6 my-8 py-4 min-h-[450px]">
        <div className="col-span-full place-items-center">
          <h1 className="font-collinger text-white font-bold text-center leading-[4rem] text-[35px]">
            Coming Soon...
            <br />
            <span className="text-[48px] text-[#08fdd8]">Stay Updated!!</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Blog