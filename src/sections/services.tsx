import { IoMdFitness } from "react-icons/io";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ServicesItem({ title, description }: any) {
  return (
    <div className="flex flex-col px-4">
      <div className="flex gap-2">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
          <IoMdFitness className="h-4 w-4" />
        </div>
        <div className="font-bold">{title}</div>
      </div>
      <div className="mt-2 text-sm text-gray-400">{description}</div>
    </div>
  );
}

function Services() {
  return (
    <>
      <div id="services" className="relative -top-20" />
      <div className="container py-10">
        <div className="text-center text-3xl font-black text-red-500">
          Services
        </div>
        <div className="mt-4 text-center text-sm text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia labore
          quis ex deserunt repellendus, amet reprehenderit ducimus cumque. Sint
          porro exercitationem architecto sed praesentium eum expedita nisi
          eaque placeat fugit adipisci, dolores, unde in odio laborum illum
          libero saepe alias odit deserunt iste voluptatum. Ut voluptas quia
          nostrum id eligendi.
        </div>
        <div className="mt-10 grid-cols-5 items-center lg:grid">
          <div className="mx-auto grid gap-4 sm:grid-cols-2 lg:col-span-3">
            <ServicesItem
              title="Personalized Workout Plans"
              description="Customized exercise routines tailored to individual fitness goals and needs."
            />
            <ServicesItem
              title="Nutritional Guidance"
              description="Expert advice on diet and nutrition to complement workout routines and promote overall health."
            />
            <ServicesItem
              title="One-on-One Training Sessions"
              description="Private coaching sessions focused on technique, motivation, and achieving personal fitness milestones."
            />
            <ServicesItem
              title="Fitness Assessments"
              description="Comprehensive evaluations of physical fitness to track progress and identify areas for improvement."
            />
          </div>
          <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-2 self-start lg:col-span-2 lg:mt-0">
            <img className="rounded-3xl object-cover" src="/service.webp" />
            <img
              className="row-span-2 h-full rounded-3xl object-cover"
              src="/service.webp"
            />
            <img className="rounded-3xl object-cover" src="/service.webp" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
