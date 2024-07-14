// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CompletedItem({ number, title, description }: any) {
  return (
    <div className="flex flex-col px-10 text-white">
      <p className="text-4xl font-black text-red-500">{number}+</p>
      <p className="my-2 font-bold">{title}</p>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

function Completed() {
  return (
    <>
      <div id="completed" className="relative -top-20" />
      <div className="bg-black py-10">
        <div className="container grid gap-10 sm:grid-cols-2">
          <CompletedItem
            number="10"
            title="Personalized Workout Plans"
            description="Customized exercise routines tailored to individual fitness goals and needs."
          />
          <CompletedItem
            number="5"
            title="Nutritional Guidance"
            description="Expert advice on diet and nutrition to complement workout routines and promote overall health."
          />
          <CompletedItem
            number="2"
            title="One-on-One Training Sessions"
            description="Private coaching sessions focused on technique, motivation, and achieving personal fitness milestones."
          />
          <CompletedItem
            number="40"
            title="Fitness Assessments"
            description="Comprehensive evaluations of physical fitness to track progress and identify areas for improvement."
          />
        </div>
      </div>
    </>
  );
}

export default Completed;
