function CallToAction() {
  return (
    <div className="bg-black py-10">
      <div className="container flex flex-col items-center">
        <div className="max-w-96 space-y-2">
          <p className="text-sm text-gray-200">
            Are you looking for a trainer?
          </p>
          <h1 className="text-2xl font-black text-red-500">Trainer</h1>
          <p className="text-xs text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            natus velit molestiae quaerat nisi tenetur, nam labore voluptate
            delectus corporis?
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="rounded-md bg-red-500 px-5 py-2.5 text-xs text-white">
              Call Now
            </div>
            <p className="text-white">+95999999999</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
