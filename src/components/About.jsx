function About() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1.5"
      className="w-full p-20 bg-orange-200 rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.5vw] tracking-tight ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus eligendi hic impedit, tempora perspiciatis obcaecati ut nulla, nesciunt omnis explicabo voluptatum nihil quia molestiae repellat placeat exercitationem ad a id amet. Praesentium doloremque ea magnam magni et velit eius.
      </h1>

      <div className="grid gap-y-30 md:grid-cols-12 py-15 outline-top mb-40 md:mb-90 mt-32 border-t-[1px] pt-[1vw]  border-[#a1b562]">
        <div className="md:col-span-4 lg:col-span-6 reset-last font-medium">
          <p>What you can expect:</p>
        </div>
        <div className="md:col-span-4 lg:col-span-4 reset-last">
          <div className="wysiwyg reset-last max-w-275">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ea consequatur itaque assumenda perspiciatis odit repellat aliquid nobis praesentium eos, voluptas illo animi fugiat ipsa in? Culpa rem tempora officiis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, dolores! Impedit saepe laborum asperiores perferendis optio consequuntur excepturi ducimus quos repellat illo, nulla facilis, est fuga delectus veniam perspiciatis beatae.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-2 reset-last md:items-end md:justify-end md:flex laptop:justify-start">
          <div>
            <p className="mb-15">Social:</p>
            <ul>
              <li>
                <a className="underline" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="underline" href="#">
                  Behance
                </a>
              </li>
              <li>
                <a className=" underline" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="underline" href="#">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex  gap-5 border-t-[1px] pt-[1vw] mt-[2vw] border-orange-500 ">
        <div className="w-full">
          <h1 className="text-7xl">Our approach:</h1>
          <p className="py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta veritatis et iusto amet suscipit voluptate natus, aperiam quia vel magnam quam facilis. Animi, architecto deleniti quas eveniet a placeat adipisci laudantium reprehenderit nesciunt, quaerat iure ut reiciendis obcaecati nulla ex. Iste cumque veritatis minus saepe nemo similique! Nulla quidem cum laboriosam obcaecati nam earum quaerat esse reprehenderit molestias veniam iste vero eius, hic modi quis est optio ratione rerum perferendis laudantium a harum debitis. Veritatis doloremque illo autem odit provident ea deserunt, animi cupiditate ex porro et quae aliquid nisi, totam dolor praesentium adipisci veniam vel sit fugit molestias suscipit consectetur. Quos nostrum laboriosam ab consequuntur eligendi. Nemo delectus soluta ut harum tenetur nostrum nulla optio similique laborum autem, facilis, nobis dolores ducimus aspernatur facere saepe, magni vel? Consequuntur vel magnam asperiores corporis omnis quos, labore ducimus nesciunt illo velit blanditiis doloribus necessitatibus culpa eligendi, pariatur, aspernatur aut et molestiae. Autem incidunt aut tempora hic in soluta tenetur non. Nemo quia ratione, ipsa autem magnam quidem neque obcaecati eaque accusantium nisi. Numquam, unde! Dolorum ex consectetur, repudiandae ratione quod sapiente provident consequatur sint, tempora nulla odit asperiores et harum repellendus commodi pariatur beatae laudantium deleniti? Possimus natus ut repellat et?
            </p>
          <button className="flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-[1vw] rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-full h-[60vh] rounded-3xl bg-[#3a431d] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1570586437263-ab629fccc818?ixlib=rb-1.2.1&w=1000&q=80"
            alt="modelsImage"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
