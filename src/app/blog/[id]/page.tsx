import { getpost } from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const paramid = (await params).id;
  const Specific_Blog = await getpost(Number(paramid));

  if (!Specific_Blog) {
    return notFound();
  }

  return (
    <div className="flex  flex-col flex-1 gap-7 mt-15 container mx-auto">
      <div className="grid md:grid-cols-2  gap-6">
        {/* <div className="flex flex-1 flex-col md:flex-row gap-6"> */}
        <div className="flex flex-col   gap-10   justify-center ">
          <div className="flex gap-5 items-center">
            <div className="w-10 h-10 rounded-full ">
              <Image
                src={Specific_Blog.image}
                alt={Specific_Blog.title}
                className="object-fill w-full h-full rounded-full "
                width={100}
                height={100}
              />
            </div>

            <h2>{Specific_Blog.author}</h2>
          </div>
          <h1 className="text-2xl md:text-4xl">{Specific_Blog.title}</h1>

          <p className="text-md md:text-lg md:max-w-full text-Text-secondary">
            {Specific_Blog.note}
            <br />

            {Specific_Blog.content}
          </p>
        </div>
        <div className="rounded-2xl  w-full   ">
          <Image
            src={Specific_Blog.image}
            alt={Specific_Blog.title}
            className="object-cover rounded-4xl mx-auto aspect-square "
            width={600}
            height={300}
          />
        </div>
      </div>
      <p className="text-[#AAA]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        blanditiis ipsam expedita nostrum quisquam at harum eos laudantium
        natus, aliquam eaque. Doloribus consequatur eos perspiciatis odio
        dolorem placeat rem. Ratione odit, omnis voluptatum numquam commodi ipsa
        similique delectus suscipit ducimus animi eveniet maxime dolore quae
        autem culpa reiciendis dignissimos perferendis.
        <br />
        <br />
        Suscipit architecto nesciunt enim voluptatum, reiciendis quia, modi
        facere laborum fuga excepturi esse repellat incidunt ut eligendi
        officiis omnis perspiciatis dolore fugiat? Recusandae animi adipisci
        beatae nulla quas possimus illum laborum iusto, libero quis, cupiditate
        in eveniet suscipit? Officiis beatae est voluptate! Harum nobis
        architecto esse corrupti. Exercitationem, architecto consequuntur! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis
        ipsam expedita nostrum quisquam at harum eos laudantium natus, aliquam
        eaque. Doloribus consequatur eos perspiciatis odio dolorem placeat rem.
        Ratione odit, omnis voluptatum numquam commodi ipsa similique delectus
        suscipit ducimus animi eveniet maxime dolore quae autem culpa reiciendis
        dignissimos perferendis.
        <br />
        <br />
        Suscipit architecto nesciunt enim voluptatum, reiciendis quia, modi
        facere laborum fuga excepturi esse repellat incidunt ut eligendi
        officiis omnis perspiciatis dolore fugiat? Recusandae animi adipisci
        beatae nulla quas possimus illum laborum iusto, libero quis, cupiditate
        in eveniet suscipit? Officiis beatae est voluptate! Harum nobis
        architecto esse corrupti. Exercitationem, architecto consequuntur! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis
        ipsam expedita nostrum quisquam at harum eos laudantium natus, aliquam
        eaque. Doloribus consequatur eos perspiciatis odio dolorem placeat rem.
        Ratione odit, omnis voluptatum numquam commodi ipsa similique delectus
        suscipit ducimus animi eveniet maxime dolore quae autem culpa reiciendis
        dignissimos perferendis.
        <br />
        <br />
        Suscipit architecto nesciunt enim voluptatum, reiciendis quia, modi
        facere laborum fuga excepturi esse repellat incidunt ut eligendi
        officiis omnis perspiciatis dolore fugiat? Recusandae animi adipisci
        beatae nulla quas possimus illum laborum iusto, libero quis, cupiditate
        in eveniet suscipit? Officiis beatae est voluptate! Harum nobis
        architecto esse corrupti. Exercitationem, architecto consequuntur!
      </p>
    </div>
  );
};

export default page;
