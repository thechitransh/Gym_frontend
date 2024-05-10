import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section
        className=" h-max bg-center bg-opacity-25 bg-fixed"
        style={{ backgroundImage: "url('hero.png')" }}
      >
        <div className="  text-[50px] text-white text-center items-center border-2 h-screen justify-center flex flex-col gap-2 font-bold border-none">
          <p>Welcome to XYZ</p>
          <p className=" font-light"> All Fitness Solutions You Need</p>
          <div className=" text-black px-12 rounded-full font-thin text-[30px] mt-4 bg-white hover:cursor-pointer hover:bg-transparent hover:border-2 hover:border-white hover:text-white transition-all duration-500">
            <button>
              <Link to="signup">Join Now</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-evenly">
            <img
              src="https://images.unsplash.com/photo-1604480133435-25b86862d276?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-[300px]"
              alt=""
            />
            <p className="text-white w-[400px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos,
              labore illum asperiores officia aut. Atque omnis modi sunt
              laborum, inventore ab ipsam voluptates temporibus dolores vitae
              ullam quae dolore doloribus quasi suscipit quaerat quam nesciunt
              ea? Iusto architecto, libero eos atque, alias ratione nisi
              voluptatum maiores dolore at culpa. Ut ullam nostrum ducimus atque
              unde laboriosam quod saepe vitae reiciendis, accusantium amet,
              dolorem nam, voluptatem obcaecati blanditiis iusto consequatur
              culpa voluptas labore possimus magnam. Numquam voluptates pariatur
              cum minima cumque rerum quis ipsam repudiandae nobis deleniti
              soluta illo recusandae sint ullam tenetur, tempora a blanditiis,
              quibusdam quos nam iusto.
            </p>
          </div>
          <div className="flex items-center justify-evenly">
            <img
              src="https://images.unsplash.com/photo-1613686933606-7f86f06d0d78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-[300px] order-1"
              alt=""
            />
            <p className="text-white w-[400px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos,
              labore illum asperiores officia aut. Atque omnis modi sunt
              laborum, inventore ab ipsam voluptates temporibus dolores vitae
              ullam quae dolore doloribus quasi suscipit quaerat quam nesciunt
              ea? Iusto architecto, libero eos atque, alias ratione nisi
              voluptatum maiores dolore at culpa. Ut ullam nostrum ducimus atque
              unde laboriosam quod saepe vitae reiciendis, accusantium amet,
              dolorem nam, voluptatem obcaecati blanditiis iusto consequatur
              culpa voluptas labore possimus magnam. Numquam voluptates pariatur
              cum minima cumque rerum quis ipsam repudiandae nobis deleniti
              soluta illo recusandae sint ullam tenetur, tempora a blanditiis,
              quibusdam quos nam iusto.
            </p>
          </div>
          <div className="flex items-center justify-evenly">
            <img
              src="https://images.unsplash.com/photo-1581122584612-713f89daa8eb?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-[300px]"
              alt=""
            />
            <p className="text-white w-[400px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos,
              labore illum asperiores officia aut. Atque omnis modi sunt
              laborum, inventore ab ipsam voluptates temporibus dolores vitae
              ullam quae dolore doloribus quasi suscipit quaerat quam nesciunt
              ea? Iusto architecto, libero eos atque, alias ratione nisi
              voluptatum maiores dolore at culpa. Ut ullam nostrum ducimus atque
              unde laboriosam quod saepe vitae reiciendis, accusantium amet,
              dolorem nam, voluptatem obcaecati blanditiis iusto consequatur
              culpa voluptas labore possimus magnam. Numquam voluptates pariatur
              cum minima cumque rerum quis ipsam repudiandae nobis deleniti
              soluta illo recusandae sint ullam tenetur, tempora a blanditiis,
              quibusdam quos nam iusto.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
