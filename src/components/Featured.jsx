import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700 ">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
          TYPES OF KADDUS
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10 mb-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh]  "
          >
            <li className="text-4xl font-semibold mb-2">KADDU 1</li>
            <h1 className="absolute text-orange-700 flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-8xl ">
              {"KADDU 1".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }} // Increase the scale on hover
              transition={{ ease: "easeInOut", duration: 0.2 }} // Transition duration
            >
              <motion.img
                className="w-full h-full bg-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/76516556298231.59a851e1bc023.jpg"
                alt="basicImage"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh]  "
          >
            <li className="text-4xl font-semibold mb-2">HALLOWEN KADDU</li>
            <h1 className="absolute text-orange-700 hover:flex overflow-hidden z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-0 text-8xl ">
              {"HALLOWEN KADDU".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }} // Transition duration
            >
              <motion.img
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="w-full h-full bg-cover"
                src="https://i.pinimg.com/736x/4e/7b/a4/4e7ba424c241b0aaa49ea0657a56cd92.jpg"
                alt="basicImage"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="cards w-full flex gap-10 mt-10 mb-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh] mt-10 "
          >
            <li className="text-4xl font-semibold mb-10">KADDU Z</li>

            <h1 className="absolute text-orange-700 hover:flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-8xl">
              {"KADDU".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }} // Increase the scale on hover
              transition={{ ease: "easeInOut", duration: 0.3 }} // Transition duration
            >
              <motion.img
                className="w-full h-full bg-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src="https://media.istockphoto.com/id/808369484/photo/halloween-pumpkins.jpg?s=612x612&w=0&k=20&c=-gFr4ztWyp6ssYLjtNjLbhCyidg6ocGmN_wJ3giGRRI=
                "
                alt="basicImage"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh] mt-10"
          >
            <li className="text-4xl font-semibold mb-2">PREMIUM KADDU</li>

            <h1 className="absolute text-orange-700 flex overflow-hidden z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-0 text-8xl">
              {"PREMIUM KADDU".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }} // Transition duration
            >
              <motion.img
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="w-full h-full bg-cover"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/76516556298231.59a851e1bc023.jpg"
                alt="basicImage"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
